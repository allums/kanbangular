'use strict';

const express   = require('express'),
      router    = express.Router(),
      taskModel = require('./methods/taskmodels')
      ;

router.route('/')
  .get(function (req, res) {

    taskModel.getTasks()
    .then(function(tasks){
      var allTasks = [];

      tasks.forEach(function(element){
        allTasks.push(element.dataValues);
      });

      res.send(allTasks);

    });
  })
  .post(function(req,res){
    var newTask = taskModel.addTask(req.body);
    res.json(newTask);
  })
  .put(function(req,res){
    taskModel.changeTask(req.body.field, req.body.update, req.body.id, function(tasks){
      res.send(tasks);
    });
  })
  ;

  module.exports = router;

