<<<<<<< HEAD
console.log('merge test')
=======
  var http  = require('http')
  var url   = require('url')
 
  let port = '9000'
  let host = '127.0.0.1'
  http.createServer(function(req,res) () {
     res.setHeader('Content-Type':'Application/json')
     res.setStatusCode('200')
     res.end('welcome your Node web application')

  })
  

  http.listen(port,host,function(){
      console.log('your app is running at port 9000')
 })
>>>>>>> 0cb4e9fad1b561ccb62c86c309ef208a64622605
