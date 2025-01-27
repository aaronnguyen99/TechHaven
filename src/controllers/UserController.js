const UserService=require('../services/UserService')
const jwt=require('../services/JwtService')

const createUser=async(req,res)=>{
    try{
        const {name,email,password,confirmPassword,phone}=req.body        
        const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        const isEmail=reg.test(email)
        console.log(req.body)
        // console.log('isEmail',isEmail)

        if(!name||!email||!password||!confirmPassword||!phone)
        {
            return res.status(200).json({
                status:'Err',
                message:'The input is required'
            })
        } else if(!isEmail)
        {
            return res.status(200).json({
                status:'Err',
                message:'Email not valid'
            })
        }else if(password!==confirmPassword)
            {
                return res.status(200).json({
                    status:'Err',
                    message:'password and confirm password not the same'
                })
            }

        console.log('isEmail',isEmail)
        const response=await UserService.createUser(req.body)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}

const loginUser=async(req,res)=>{
    try{
        const {name,email,password,confirmPassword,phone}=req.body        
        const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        const isEmail=reg.test(email)
        console.log(req.body)
        // console.log('isEmail',isEmail)

        if(!name||!email||!password||!confirmPassword||!phone)
        {
            return res.status(200).json({
                status:'Err',
                message:'The input is required'
            })
        } else if(!isEmail)
        {
            return res.status(200).json({
                status:'Err',
                message:'Email not valid'
            })
        }else if(password!==confirmPassword)
            {
                return res.status(200).json({
                    status:'Err',
                    message:'password and confirm password not the same'
                })
            }

        console.log('isEmail',isEmail)
        const response=await UserService.loginUser(req.body)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}
const updateUser=async(req,res)=>{
    try{
        const userId=req.params.id
        const data=req.body
        console.log('userID',userId)
        if(!userId)
        {
            return res.status(200).json({
                status:'ERR',
                message:'userID is required'
            })
        }
        console.log('data',data)
        const response=await UserService.updateUser(userId,data)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}

const deleteUser=async(req,res)=>{
    try{
        const userId=req.params.id
        if(!userId)
        {
            return res.status(200).json({
                status:'ERR',
                message:'userID is required'
            })
        }
        const response=await UserService.deleteUser(userId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}

const getAllUser=async(req,res)=>{
    try{
        const response=await UserService.getAllUser()
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}

const getDetailsUser=async(req,res)=>{
    try{
        const userId=req.params.id
        if(!userId)
        {
            return res.status(200).json({
                status:'ERR',
                message:'userID is required'
            })
        }
        const response=await UserService.getDetailsUser(userId)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}

const refreshToken=async(req,res)=>{
    try{
        const token=req.headers.token.split(' ')[1]
        if(!token)
        {
            return res.status(200).json({
                status:'ERR',
                message:'token is required'
            })
        }
        const response=await jwt.refreshTokenService(token)
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
            message:e
        })
    }
}
module.exports={
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    refreshToken 
}