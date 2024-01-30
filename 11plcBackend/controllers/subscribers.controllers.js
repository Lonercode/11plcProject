require('dotenv').config()
const Subscribers = require('../models/subscribers.models')
const sendMail = require('../utils/sendMail')
const otplib = require('otplib')
const totp = otplib.totp
const jwt= require('jsonwebtoken')


const createToken = (tokenid) => {
    const token = jwt.sign(tokenid.toString('hex'), process.env.JWT_SECRET)
    return token
}

const subscriberController = async(req, res, next) => {
    try{
    const subscriber = await Subscribers.findOne({email: req.body.email})
    
    if (subscriber && subscriber.verified == true){
        res.json({message: "You are already subscribed to our mailing list!"})
    }
    else if (subscriber && subscriber.verified == false){
        res.json({messsage: "Verify your email!"})
    }
    else if (!subscriber){
        const subscriber = await Subscribers.create({email: req.body.email})
        
        const token = createToken(subscriber._id)
        const otp = generateOtp(subscriber.email)
        const link = `${process.env.CLIENT_URL}/confirm?id=${subscriber._id}&token=${token}`
        await sendMail(
            subscriber.email,
            "Confirm your Email",
            {
                link: link
            },
            './templates/confirm.hbs'

        )
        res.json({message: `Thank you, check your email for confirmation. ${link}`})
        
        
    }
    }catch(err){
        res.status(500).json({message: err.message})

    }
}

const confirmController = async (req, res, next) => {
    try{
        const subscriber = await Subscribers.findOne(req.user)
        if (subscriber){
            await Subscribers.updateOne(
                req.user,
                {verified: true}
            )
            res.sendFile('C:\\Windows\\System32\\11PLC\\11plcBackend\\utils\\templates\\confirmHtml.html')
    
        }
        else{
            res.json({message:"Please check your email! "})
        }

    } catch (err){
        res.status(500).json(err.message)
    }
}

const generateOtp = (email)  =>{
    totp.options = { 
      digits: 4,
      step: 60 * 60, // 15 mins
     };
    let secret = process.env.OTP_SECRET
    secret = `${secret}${email}`;
    return totp.generate(secret);
  }
 
module.exports = {
    subscriberController,
    confirmController
}