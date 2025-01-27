const User = require("../models/UserModel")
const bcrypt=require("bcrypt")
const { generalAccessToken, generalRefreshToken } = require("./JwtService")

const createUser = (newUser) => {
    return new Promise(async(resolve,reject) => {
        const {name,email,password,confirmPassword,phone}=newUser      

        try{
            const checkUser=await User.findOne({
                email:email
            })
            if(checkUser!==null)
            {
                resolve({
                    status:'OK',
                    message:"Email already exist",
                })
            }
            const hash=bcrypt.hashSync(password,10)
            console.log("hash",hash)
            const createdUser=await User.create({
                name,
                email,
                password:hash,
                phone
            })
            if(createdUser)
            {
                resolve({
                    status:'OK',
                    message:"Success",
                    data:createdUser
                })
            }
        }catch(e){
            reject(e)
        }
    })
}
const loginUser = (userLogin) => {
    return new Promise(async(resolve,reject) => {
        const {name,email,password,confirmPassword,phone}=userLogin      

        try{
            const checkUser=await User.findOne({
                email:email
            })
            if(checkUser===null)
            {
                resolve({
                    status:'OK',
                    message:"User is not defined",
                })
            }
            const comparePassword=bcrypt.compareSync(password,checkUser.password)
            // const createdUser=await User.create({
            //     name,
            //     email,
            //     password:hash,
            //     phone
            // })

            if(!comparePassword)
            {
                resolve({
                    status:'OK',
                    message:"Password or user incorrect"
                })
            }
            const access_token=await generalAccessToken({
                id:checkUser.id,
                isAdmin:checkUser.isAdmin
            })

            const refresh_token=await generalRefreshToken({
                id:checkUser.id,
                isAdmin:checkUser.isAdmin
            })
            // console.log('access token',access_token)

                resolve({
                    status:'OK',
                    message:"Success",
                    access_token,
                    refresh_token
                })
            
        }catch(e){
            reject(e)
        }
    })
}
const updateUser = (id,data) => {
    return new Promise(async(resolve,reject) => {

        try{
            const checkUser=await User.findOne({
                _id: id
            })
            console.log('id',id)

            console.log('checkUser',checkUser)
            if(checkUser===null)
            {
                resolve({
                    status:'OK',
                    message:"User is not defined",
                })
            }
            const updatedUser= await User.findByIdAndUpdate(id,data,{new:true})
            console.log('user data',data)

                resolve({
                    status:'OK',
                    message:"Success",
                    data:updatedUser

                })
        }catch(e){
            reject(e)
        }
    })
}
const deleteUser = (id) => {
    return new Promise(async(resolve,reject) => {

        try{
            const checkUser=await User.findOne({
                _id: id
            })
            console.log('id',id)

            console.log('checkUser',checkUser)
            if(checkUser===null)
            {
                resolve({
                    status:'OK',
                    message:"User is not defined",
                })
            }
            await User.findByIdAndDelete(id)

                resolve({
                    status:'OK',
                    message:"Delete User Success"

                })
        }catch(e){
            reject(e)
        }
    })
}
const getAllUser = () => {
    return new Promise(async(resolve,reject) => {

        try{
            const allUser=await User.find()
                resolve({
                    status:'OK',
                    message:"Get All User Success",
                    data:allUser

                })
        }catch(e){
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async(resolve,reject) => {

        try{
            const checkUser=await User.findOne({
                _id: id
            })
            if(checkUser===null)
            {
                resolve({
                    status:'OK',
                    message:"User is not defined",
                })
            }
                resolve({
                    status:'OK',
                    message:"Get User Success",
                    data:checkUser

                })
        }catch(e){
            reject(e)
        }
    })
}

module.exports={
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}