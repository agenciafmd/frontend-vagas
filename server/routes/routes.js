const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

const {
  createImg,
  getBanner,
  postMusic,
  getMusic,
  postMember,
  getMember,
  postNewsLetter,
  getNewsLetter
} = require("../components/music")
  
router.post('/banner',createImg)

router.get('/banner',getBanner)

router.post('/music',postMusic)

router.get('/music',getMusic)

router.post('/member',postMember)

router.get('/member',getMember)

router.post('/newsLetter',postNewsLetter)

router.get('/newsLetter',getNewsLetter)

module.exports = router