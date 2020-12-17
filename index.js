const send = require('./mailer')
const url = require('url')
const http = require('http')
const fs = require('fs')
const axios = require('axios')

const server = http.createServer((req, res) => {
  let { to, subject, text } = url.parse(req.url, true).query
  if(req.url.startsWith('/?')){
    send(to.split(','), subject, text)
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('success.html', (err, file) => {
      res.write(file)
      res.end()
    })
  }
  if(req.url.startsWith('/mailing')){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (err, file) => {
      res.write(file)
      res.end()
    })
  }
})

const indicators = async () => {
  const { data } = await axios.get('https://mindicador.cl/api')
  return data
} 



server.listen(3000, () => { console.log('Ground control to mayor Tom on port 3000')})