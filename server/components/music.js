const Banner = require("../model/Banners")
const Member = require("../model/Members")
const Music = require("../model/Music")
const Email = require("../model/Email")
const {validationResult} = require("express-validator")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

exports.createImg = async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    img
  } = req.body
  const banner = new Banner({
    img
  })
  await banner.save()
  res.status(201).send("banner")
}

exports.getBanner = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const data = await Banner.find()
  res.status(200).send({data:data})
}

exports.postMusic = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    img,
    description,
    name,
    url
  } = req.body
  const music = new Music({
    img,
    description,
    name,
    url
  })
  await music.save()
  res.status(201).send({data:music})
}

exports.getMusic = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const data = await Music.find()
  res.status(200).send({data:data})
}


exports.postMember = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    img,
    description,
    name
  } = req.body
  const member = new Member({
    img,
    description,
    name
  })
  await member.save()
  res.status(201).send({data:member})
}

exports.getMember = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const data = await Member.find()
  res.status(200).send({data:data})
}

exports.postNewsLetter = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    name,
    email
  } = req.body
  const newLetter = new Email({
    name,
    email
  })
  await newLetter.save()
  res.status(200).send(newLetter)
}

exports.getNewsLetter = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const data = await Email.find()
  res.status(200).send(data)
}


// exports.getAll = async (req,res) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()})
//   }
//   const data = await Podcast.find()
//   res.status(200).send({data:data})
// }

// exports.getS = async (req,res) => {

//     } else {
//        console.log('Channel could not be found.')
//        // throw response.alertMessage
//     }
//   }).catch((err) => {
//     console.log(err)
//   })
// }

