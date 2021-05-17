'use strict';

const Controller = require('egg').Controller;

class ZsmController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello world';
  }
}

module.exports = ZsmController;
