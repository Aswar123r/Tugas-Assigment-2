
const jwt = require('jsonwebtoken')
const fs = require('fs')
const { raw } = require('express')

module.exports = {
    register : (req, res) => {
       fs.writeFile('./data.json', JSON.stringify(req.body), (err) => {
        if(err) throw err
      })
          const token = jwt.sign(
                { id: req.body.id},
                process.env.CODE,
                { expiresIn: "5h" }
              )
        return res.status(201).json({
        'status' : "Success",
        'messages' : "Berhasil Menambahkan data",
        'data' : {
          "token" : token
        },
      })
    },
    dataUser : (req, res) => {
      let rawData  = fs.readFileSync('./data.json')
      let data = JSON.parse(rawData)
        return res.status(201).json({
        'status' : "Success",
        'messages' : "Berhasil Menambahkan data",
        'data' : data,
         
        })
    }
}

