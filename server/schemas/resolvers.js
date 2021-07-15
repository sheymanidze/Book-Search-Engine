const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password').populate('savedBooks');
    },

    user: async (parent, {username}) => {
      return User.findOne({username}).select('-__v -password').populate('saveBooks');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne ({_id: context.user._id})
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
}