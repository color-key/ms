require('dotenv').config();
const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const manager = require('./manager');
const blog = require('./blog');
const seo = require('./seo');
const menu = require('./menu');
const tdk = require('./tdk');
const banner = require('./banner');
const ssh = require('./ssh');
const {auth} = require('./auth');

const app = new Koa();
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024,    // 设置上传文件大小最大限制，默认2M
    multipart:true
  }
}));

router.post('/manager/login', async (ctx, next) => {
  const res = await manager.login(ctx.request.body);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/manager/updPassword', async (ctx, next) => {
  const res = await manager.updPassword(ctx.request.body);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/manager/find', async (ctx, next) => {
  const authed = await auth(ctx);
  if(authed){
    const res = await manager.findManager(ctx);
    ctx.response.type = 'application/json';
    ctx.response.body = res;
  }else{
    ctx.response.status = 401;
  }
});

router.post('/manager/add', async (ctx, next) => {
  const res = await manager.addManager(ctx.request.body);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/blog/findByPage', async (ctx, next) => {
  const res = await blog.findByPage(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/blog/findCount', async (ctx, next) => {
  const res = await blog.findCount();
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/blog/findIds', async (ctx, next) => {
  const res = await blog.findIds(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/blog/findById', async (ctx, next) => {
  const res = await blog.findById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/blog/add', async (ctx, next) => {
  const res = await blog.add(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/blog/edit', async (ctx, next) => {
  const res = await blog.edit(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/blog/removeById', async (ctx, next) => {
  const res = await blog.removeById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/seo/findByPage', async (ctx, next) => {
  const res = await seo.findByPage(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/seo/findById', async (ctx, next) => {
  const res = await seo.findById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/seo/add', async (ctx, next) => {
  const res = await seo.add(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/menu/findByPage', async (ctx, next) => {
  const res = await menu.findByPage(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/menu/findById', async (ctx, next) => {
  const res = await menu.findById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/menu/add', async (ctx, next) => {
  const res = await menu.add(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/tdk/findByPage', async (ctx, next) => {
  const res = await tdk.findByPage(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/tdk/findById', async (ctx, next) => {
  const res = await tdk.findById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/tdk/findByPath', async (ctx, next) => {
  const res = await tdk.findByPath(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/tdk/add', async (ctx, next) => {
  const res = await tdk.add(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/tdk/upd', async (ctx, next) => {
  const res = await tdk.upd(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/banner/findByPage', async (ctx, next) => {
  const res = await banner.findByPage(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/banner/findById', async (ctx, next) => {
  const res = await banner.findById(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.get('/banner/findByPath', async (ctx, next) => {
  const res = await banner.findByPath(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/banner/add', async (ctx, next) => {
  const res = await banner.add(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/banner/upd', async (ctx, next) => {
  const res = await banner.upd(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

router.post('/reBuildHome', async (ctx, next) => {
  ssh.reBuildHome();
  ctx.response.type = 'application/json';
  ctx.response.body = {success: true};
});

router.post('/getReBuildHomeStatus', async (ctx, next) => {
  const res = ssh.getReBuildHomeStatus();
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');