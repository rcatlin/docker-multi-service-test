import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { createClient } from 'redis';

const PORT = 8888,
  REDIS_SET_NAME = 'names',
  app = express(),
  redis = createClient('redis://redis:6379'),
  schema = buildSchema(`
    type Query {
      hello: String
      greeting(name: String!): String
      top(count: Int!): String
    }
  `),
  normalizeName = (name) => name.trim().toLowerCase(),
  denormalizeName = (name) => name[0].toUpperCase() + name.substring(1),
  root = {
    hello: () => 'Hello, world',
    greeting: ({ name }) => new Promise((resolve, reject) => redis.zincrby(
      [REDIS_SET_NAME, 1, normalizeName(name)],
      (_, reply) => redis.zscore(
        [REDIS_SET_NAME, normalizeName(name)],
        (_, reply) => resolve(`Hello, ${name}! (We've met ${reply} times)`)
      )
    )),
    top: ({ count }) => new Promise((resolve, reject) => redis.zrevrangebyscore(
      [REDIS_SET_NAME, '+inf', '-inf', 'LIMIT', 0, count],
      (_, reply) => resolve(reply.map(denormalizeName).join(', '))
    )),
  };

app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: root,
  schema: schema
}));

app.listen(PORT);

console.log('Listening on port ' + PORT);
