import { PostModel } from '../models/PostManagers';

class PostController {
  static create = async (req, res) => {

    const newPost = await new PostModel({
      title,
      content,
    })
  };
}

module.exports = PostController;
