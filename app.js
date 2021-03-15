var express = require('express');
let debug = require('debug');
var app = express();
var sql = require('mssql');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/checkConnectStatus', function (req, res) {
  var data = [{data:'asd'}, {data:'ddd'}, {data:'aa'}]
  res.end(JSON.stringify(data))
})

app.post('/testpostMethod', function (req, res) {
  var model = {ResponseMessage: '', ResponseStatus: null, body: {}}
  var configdb = {
    user: 'sa',
    password: 'Fus!0nSoft1412',
    server: '43.229.78.117', 
    database: 'BS_TS' 
  }
  try {
    sql.on('error', err => {
      // ... error handler
    })
    sql.connect(config).then(pool => {
      model.ResponseStatus = true
      model.ResponseMessage = 'Success.'
      return pool.request()
      .query('select * from MAS_Employee')
    }).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(result)
    })


  }
  catch (e) {
    model.ResponseStatus = false
    model.ResponseMessage = 'Exception : ' + e
  }
  res.end(model)
})

var server = app.listen(1302, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Application Run At http://%s:%s', host, port)
})
