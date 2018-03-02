import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { createClient } from 'redis';

const PORT = 8888,
  app = express(),
  redis = createClient('redis://redis:6379'),
  schema = buildSchema(`
    type Query {
      hello: String
      greeting(name: String!): String
    }
  `),
  root = {
    hello: () => 'Hello, world',
    greeting: ({ name }) => new Promise((resolve, reject) => redis.incr(
      name.toLowerCase(),
      (_, reply) => resolve(`Hello, ${name}! (We've met ${reply} times)`)
    ))
  };

app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: root,
  schema: schema
}));

app.listen(PORT);

console.log('Listening on port ' + PORT);
