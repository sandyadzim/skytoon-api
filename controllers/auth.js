const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({where: {email, password}}).then(user=>{

        if(user){
            const token = 'Bearer ' + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                id,
                email,
                token,
                message:  'Login Sukses!!'
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
}