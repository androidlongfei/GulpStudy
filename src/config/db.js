/**
 * 数据库配置
 * @type {Object}
 */
module.exports = {
    MYSQL_HOST: process.env.MYSQL_HOST || '192.168.1.101',
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PORT: process.env.MYSQL_PORT || '3306',
    MYSQL_DBNAME: process.env.MYSQL_DBNAME || 'gulp',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'hlf123456'
};
