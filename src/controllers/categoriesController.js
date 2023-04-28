const categoriesService = require('../services/categoriesService'); // import usersService

const createCategorieController = async (req, res, next) => {
  try {
    const categorie = await categoriesService
      .createCategorieService(req.body);

    return res.status(201).json(categorie);
  } catch (err) {
    return next(err);
  }
};

const getCategoriesController = async (req, res, next) => {
  try {
    const categories = await categoriesService.getCategoriesService();

    return res.status(200).json(categories);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createCategorieController,
  getCategoriesController,
};