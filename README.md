# SampleManager

## 项目基本说明

项目框架:**hapi**

数据库:**mysql**

编辑器配置文件:**.editorconfig**

## 启动MySql数据库

第一步:远程登陆到192.168.6.34主机

```
ssh mh01@192.168.6.34
```

第二步:创建缓存目录

```
sudo mkdir /var/lib/sample-mysql
```

第二步:启动Mysql

```
docker run -d \
-v /var/lib/sample-mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=111111 \
-p 3306:3306 \
192.168.6.28:5000/weixuan/mysql-server:5.6-myself
```

## 启动应用

第一步:全局安装gulp

```
npm install -g gulp
```

第二步:启动

```
gulp
```

## 访问api文档

- [SampleManager API Documentation](http://localhost:3800/documentation)

## 项目使用到的第三方库

**log相关**

- [debug](https://github.com/visionmedia/debug)
- [bucker](https://github.com/nlf/bucker)

**api文档**

- [hapi-swagger](https://github.com/glennjones/hapi-swagger)

**数据库**

- [sequelize](http://docs.sequelizejs.com/en/v3/)

**其它**

- [hapi](http://hapijs.com/tutorials)
- [joi](https://github.com/hapijs/joi/blob/v9.0.4/API.md)
