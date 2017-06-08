'use strict';

const debug = require('debug')('app:controllers:utils');
const async = require('async');
const _ = require('underscore');

var employeesMethod = {
    findAll: function (request, reply) {
        let employeesList = [];
        let employees1 = {
          username:'zhangsan',
          realName:'zhan',
          department:'IT'
        }
        employeesList.push(employees1);
        reply(employeesList);
    },
    create: function (request, reply) {
        let newEmployees = {
            username: request.payload.username,
            realName: request.payload.realName,
            department: request.payload.department
        }
        // 保存员工信息到数据库
        debug(`create employee success${newEmployees}`)
        reply(newEmployees);
    },
};

module.exports = employeesMethod;
