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

        // returns both token and user if they exist in databse
        login: async() => {
            const user = await User.findOne({ email });
            const password = await user.isCorrectPassword(password);
            const token  = signToken(user);

            return { token, user }
        },

        addUser: async() => {

        },

        saveBook: async() => {

        },
        removeBook: async() => {

        }
    }
};