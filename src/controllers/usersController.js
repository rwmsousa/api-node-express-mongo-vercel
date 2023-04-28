const usersService = require('../services/usersService'); // import usersService

const createUserController = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await usersService
      .createUserService({ displayName, email, password, image });

    return res.status(201).json(user);
  } catch (err) {
    return next(err);
  }
};

const loginController = async (req, res, next) => {
  try {
    const token = await usersService.loginService(req.body);

    return res.status(200).json({ token });
  } catch (err) {
    return next(err);
  }
};

const getAllUsersController = async (req, res, next) => {
  try {
    const users = await usersService.getAllUsersService();

    return res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
};

const getUserIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await usersService.getUserIdService(id);

    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    await usersService.deleteUserService(userId);

    return res.status(204).end();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createUserController,
  loginController,
  getAllUsersController,
  getUserIdController,
  deleteUserController,
};