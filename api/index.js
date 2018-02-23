import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const PORT = process.env.PORT ? process.env.PORT : 8000;
const app = express();
const schema = buildSchema(`
  type Query {
    hello: String
    greeting(name: String!): String
  }

`);
const root = {
  hello: () => 'Hello, world',
  greeting: ({ name }) => 'Hello, ' + name
};

app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: root,
  schema: schema
}));

app.listen(PORT);
console.log('Listening on port ' + PORT);
