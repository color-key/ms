const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');

const mysqlTable = "tianlad_banner";

// id, title, description, keywords, path, createTime, updateTime

const add = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const upd = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'UPDATE '+mysqlTable+' SET banner="'+data.banner+'" WHERE id="'+data.id+'"';
  const res = await query(sql);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'id');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findByPath = async (ctx) => {
  const id = getQueryString(ctx.request, 'path');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `path` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findCount = async () => {
  const sql = 'SELECT COUNT(*) as total FROM '+mysqlTable;
  const args = [];
  const res = await query(sql, args);
  return res;
}

const findByPage = async (ctx) => {
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let pageQueryStr = ' limit '+(pageNum*pageSize)+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.createTime = datetimeFormat(item.createTime);
      item.updateTime = datetimeFormat(item.updateTime);
    })
  }
  const findCountRes = await findCount();
  if(findCountRes.success && findCountRes.result[0]){
    res.count = findCountRes.result[0].total;
  }else{
    res.count = 0;
  }
  return res;
}

module.exports = {
  add,
  upd,
  findById,
  findByPage,
  findByPath,
}