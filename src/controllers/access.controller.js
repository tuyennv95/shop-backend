const accessService = require("../service/access.service");

`use strict`;

class accessController {
  signUp = async (req, res, next) => {
    try {
      return res.status(201).json(await accessService.signUp(req.body));
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new accessController();
