const { User } = require("../models");

class UserService {
  async createUser({ username, email, password }) {
    try {
      const newUser = await User.create({ username, email, password });
      return newUser;
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error("Error fetching user");
    }
  }

  async updateUser(userId, { username, email }) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      user.username = username || user.username;
      user.email = email || user.email;

      await user.save();

      return user;
    } catch (error) {
      throw new Error("Error updating user");
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      await user.destroy();

      return { message: "User deleted successfully" };
    } catch (error) {
      throw new Error("Error deleting user");
    }
  }
}

module.exports = new UserService();
