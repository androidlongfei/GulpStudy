# mysql usage

## 下载并启动mysql

### 1.下载mysql镜像

```shell
docker pull daocloud.io/library/mysql:latest
```

### 2.启动

```shell
docker run -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=gulp -p 3306:3306 -d daocloud.io/library/mysql:latest
```

### 3.数据库数据映射启动

_1.创建目录用来保存数据_

```
sudo mkdir /nas/gulp-mysql
```

_2.启动_

```shell
docker run -v /nas/gulp-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=gulp -p 3306:3306 -d daocloud.io/library/mysql:latest
```

> MYSQL_USER:root

> MYSQL_PASSWORD:123456

> MYSQL_PORT:3306

> /nas/gulp-mysql:主机目录,用来保存docker容器中的数据
