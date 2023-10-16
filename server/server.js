const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// applying the apollo server
const { ApolloServer } = require('apollo-server-express')
const db = require("./config/connection.js")

const app = express();
const PORT = process.env.PORT || 3001;

// apollo server using typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// function to initialize the apollo server
const startApolloServer = async() => {
  await server.start();
  server.applyMiddleware({ app });
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});

startApolloServer();
