  var http  = require('http')
  var url   = require('url')
 
  let port = '3000'
  let host = '127.0.0.1'
  http.createServer(function(req,res) () {
     res.setHeader('Content-Type':'Application/json')
     res.setStatusCode('200')
     res.end('welcome')

  })
  
  http.listen(port,host,function(){
      console.log('your app is running at port 3000')
 })
