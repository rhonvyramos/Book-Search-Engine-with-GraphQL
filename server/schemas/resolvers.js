const { Book, User } = require("../models");

// importing sign token function from auth.js
const { signToken } = require("../utils/auth.js");

const resolvers = {
    Query: {
        user: async() => {
            // returns one user
            return await User.findOne({});
        }
    },
    Mutation: {

        // returns both token and user if they exist in database
        // this is used to login the client to the app
        login: async() => {
            const user = await User.findOne({ email });
            const password = await user.isCorrectPassword(password);
            const token  = signToken(user);

            return { token, user }
        },

        // returns both toekn and user
        // this is used to create a new client that signs up
        addUser: async() => {
            
        },

        saveBook: async() => {

        },
        removeBook: async() => {

        }
    }
};