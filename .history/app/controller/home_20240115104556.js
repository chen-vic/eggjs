const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx;
    console.log('ctx', ctx);
  }
}

module.exports = HomeController;
