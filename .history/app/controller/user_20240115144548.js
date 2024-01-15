const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const users = await ctx.model.User.findAll();
    ctx.body = users;
  }

  async create() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    await ctx.model.User.create({ name, age });
    ctx.status = 201;
  }

  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { name, age } = ctx.request.body;
    await ctx.model.User.update({ name, age }, { where: { id } });
    ctx.status = 204;
  }

  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    await ctx.model.User.destroy({ where: { id } });
    ctx.status = 204;
  }
}

module.exports = UserController;