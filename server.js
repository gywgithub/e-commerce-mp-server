let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fs = require('fs')
let multer = require('multer')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(multer({
  dest: '/tmp/'
}).array('image'))

let cors = require('cors')
app.use(cors())



//  get /
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// ---------------- mp api ------------------
app.get('/api/v1/stores', (req, res) => {
  console.log('stores')

  let data = {
    "status": true,
    "message": "OK",
    "error": "",
    "data": [{
        "name": "店铺名称001",
        "city": "店铺所在城市",
        "address": "店铺详细地址",
        "id": 18
      },
      {
        "name": "DANCE CLUB",
        "city": "成都",
        "address": "成华区双林路339号B栋",
        "id": 16
      }
    ]

  }
  res.end(JSON.stringify(data))
})


app.get('/api/v1/admin/product', (req, res) => {
  console.log('product')
  let data = {
    "status": true,
    "message": "OK",
    "error": "",
    "data": {
      data_list: [{
          src: 'http://127.0.0.1:3000/images/1.jpg',
          title: '动漫头像',
          artist: '动漫女生头像，简笔画头像风格，唯美简约风格，可爱甜美风格',
          price: 20,
          number: 0
        },
        {
          src: 'http://127.0.0.1:3000/images/2.jpg',
          title: '动漫女生头像',
          artist: '动漫女生头像，简笔画头像风格，唯美简约风格，可爱甜美风格，二次元',
          price: 30,
          number: 0
        }
      ]
    }
  }
  res.end(JSON.stringify(data))
})


app.post('/api/v1/wx/users/oauth_user', (req, res) => {
  console.log('oauth_user')
  let data = {
    status: true,
    message: "OK",
    error: "",
    data: {
      user_id: 1
    }
  }
  res.end(JSON.stringify(data))
})
// ---------------- end ---------------------

let server = require('http').createServer(app)


server.listen(3000, (req, res) => {
  let host = server.address().address
  let port = server.address().port

  console.log('server is running .  http://%s:%s', host, port)
})