const CategoryModel = require('../models/CategoryManager');
const jwt = require('jsonwebtoken');
const { populate } = require('../models/CategoryManager');

class CategoryController {
  static create = async (req, res) => {
    const { name } = req.body;
    const newCategory = new CategoryModel({
      name,
    });

    try {
      const savedCategory = await newCategory.save();
      res.status(200).send(savedCategory);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static browse = async (req, res) => {
    const { categoryId } = req.params;
    try {
      const categories = await CategoryModel.find(
        categoryId ? { _id: categoryId } : {}
      ).populate('posts');
      res.status(200).send(categories);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static getOne = async (req, res) => {
    const { categoryId } = req.params;
    try {
      const categories = await CategoryModel.find({ _id: categoryId }).populate(
        'posts'
      );
      res.status(200).send(categories);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static update = async (req, res) => {
    const { categoryId } = req.params;
    const updatedCategory = req.body;
    try {
      const category = await CategoryModel.updateOne(
        { _id: categoryId },
        updatedCategory
      );
      res.sendStatus(204);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static delete = async (req, res) => {
    const { categoryId } = req.params;
    try {
      const category = await CategoryModel.deleteOne({ _id: categoryId });
      if (category.deletedCount) {
        res.sendStatus(204);
      } else {
        response
          .status(404)
          .json({ message: `No category found with id ${categoryId}` });
      }
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = CategoryController;
