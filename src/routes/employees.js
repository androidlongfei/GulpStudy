var employeesController = require('../controllers/employees.js');
var Joi = require('joi');
const debug = require('debug')('app:routes:employees');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/employees',
            config: {
                handler: employeesController.findAll,
                description: '获取员工信息',
                notes: '返回 员工 信息',
                tags: ['api'],
                response: {
                    schema: null
                }
            }
        }, {
            method: 'POST',
            path: '/employees',
            config: {
              handler: employeesController.create,
              description: '创建员工',
              notes: '返回新员工信息',
              tags: ['api'],
              response: {
                  // schema: generalUserModel,
              },
              validate: {
                  payload: {
                      username: Joi.string().required(),
                      realName: Joi.string().required(),
                      department: Joi.string()
                  }
              },
            }
        }
    ];
}();
