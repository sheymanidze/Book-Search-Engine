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
  },
  Mutation: {

//add user
    addUser: async (parent, {email, password}) => {
      const user = await User.create({email, password});
      const token = signToken(user);
      return {token, user};
    },

    //login
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);

      return { token, user };
    },

    //save books
    saveBook: async (parent, {bookData}, context) => {
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {saveBooks: bookData}},
          {new: true, runValidators: true}
        );
        return updateUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    //delete books
    removeBook: async (parent, {bookId}, context) => {
      if (context.user) {
        const book = await User.findOneAndUpdate (
          {_id: context.user._id},
          {$pull: {savedBooks: {bookId: bookId}}},
          {new: true}
        );
        return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;