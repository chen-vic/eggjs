const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx;
    console.log('ctx', ctx)ß;
  }
}

module.exports = HomeController;
