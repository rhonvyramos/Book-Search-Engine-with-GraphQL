const { Book, User } = require("../models");

const resolvers = {
    Query: {
        user: async() => {
            // returns one user
            return await User.findOne({});
        }
    },
    Mutation: {

    }
};