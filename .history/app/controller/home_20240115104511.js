const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    console.log('ctx', ctx);
  }
}

module.exports = HomeController;
