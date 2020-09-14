const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');
const shortid = require('shortid');
const crypto = require('crypto');

const mysqlTable = "ms_manager";

const generatePwd = (password) => {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const pwd = hash.digest('hex');
  return pwd;
}

const addManager = async (data) => {
  data.token = shortid.generate();
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}


const updPassword = async (data) => {
  const oldPwd = generatePwd(data.oldPassword);
  const newPwd = generatePwd(data.password);
  const findSql = 'SELECT id,username,creation_datetime,token FROM '+mysqlTable+' WHERE `id` = ? and `password` = ?';
  const args = [data.id, oldPwd];
  const find = await query(findSql, args);
  if(find.success){
    if(find.result[0]){
      const updSql = 'UPDATE '+mysqlTable+' SET password="'+newPwd+'" WHERE id="'+data.id+'" and password="'+oldPwd+'"';
      const updRes = await query(updSql);
      return updRes;
    }else{
      return {success:false, err: '旧密码错误'};
    }
  }
  return {success:false, err: '服务器异常'};
}

const login = async (data) => {
  const pwd = generatePwd(data.password);
  const sql = 'SELECT id,username,creation_datetime,token FROM '+mysqlTable+' WHERE `username` = ? and `password` = ?';
  const args = [data.username, pwd];
  const res = await query(sql, args);
  return res;
}

const findManagerByToken = async (data) => {
  const sql = 'SELECT id,username,creation_datetime,token FROM '+mysqlTable+' WHERE `token` = ?';
  const args = [data.token];
  const res = await query(sql, args);
  return res;
}

const findManager = async (ctx) => {
  const username = getQueryString(ctx.request, 'username');
  const queryDataStr = ' username like "%'+username+'%"';
  const sql = 'SELECT id,username,creation_datetime FROM '+mysqlTable+' WHERE'+queryDataStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.creation_datetime = datetimeFormat(item.creation_datetime);
    })
  }
  return res;
}

module.exports = {
  login,
  updPassword,
  addManager,
  findManager,
  findManagerByToken
}