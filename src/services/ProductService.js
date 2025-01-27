const Product = require("../models/ProductModel")

const createProduct = (newProduct) => {
    return new Promise(async(resolve,reject) => {
        const {name,image,type,countInStock,price,rating,description}=newProduct        

        try{
            const checkProduct=await Product.findOne({
                name:name
            })
            if(checkProduct!==null)
            {
                resolve({
                    status:'OK',
                    message:"Product already exist",
                })
            }
            const newProduct=await Product.create({
                name,image,type,countInStock,price,rating,description
            })
            if(newProduct)
            {
                resolve({
                    status:'OK',
                    message:"Success",
                    data:newProduct
                })
            }
        }catch(e){
            reject(e)
        }
    })
}
const updateProduct = (id,data) => {
    return new Promise(async(resolve,reject) => {

        try{
            const checkProduct=await Product.findOne({
                _id: id
            })
            if(checkProduct===null)
            {
                resolve({
                    status:'OK',
                    message:"Product is not defined",
                })
            }
            const updatedProduct= await Product.findByIdAndUpdate(id,data,{new:true})
            console.log('user data',data)

                resolve({
                    status:'OK',
                    message:"Success",
                    data:updatedProduct

                })
        }catch(e){
            reject(e)
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async(resolve,reject) => {

        try{
            const product=await Product.findOne({
                _id: id
            })
            if(product===null)
            {
                resolve({
                    status:'OK',
                    message:"product is not defined",
                })
            }
                resolve({
                    status:'OK',
                    message:"Get product Success",
                    data:product

                })
        }catch(e){
            reject(e)
        }
    })
}
const deleteProduct = (id) => {
    return new Promise(async(resolve,reject) => {

        try{
            const product=await Product.findOne({
                _id: id
            })
            if(product===null)
            {
                resolve({
                    status:'OK',
                    message:"product is not defined",
                })
            }
            await Product.findByIdAndDelete(id)

                resolve({
                    status:'OK',
                    message:"Delete product Success"

                })
        }catch(e){
            reject(e)
        }
    })
}
const getAllProduct = (limit,page,sort,filter) => {
    return new Promise(async(resolve,reject) => {
    console.log('sort',sort)
        try{
            const totalProduct= await Product.estimatedDocumentCount()
            if(filter)
                {
                    const label=filter[0]
                    const allObjecctFilter=await Product.find({[label]:{'$regex':filter[1]}}).limit(limit).skip(page*limit)
                    resolve({
                        status:'OK',
                        message:"Get All Product Success",
                        data:allObjecctFilter,
                        total:totalProduct,
                        currentPage:page+1,
                        totalPage:Math.ceil(totalProduct/limit)
    
                    })
                }
            if(sort)
            {
                const objectSort={}
                objectSort[sort[1]]=sort[0]
                console.log(objectSort)
                const allProductSort=await Product.find().limit(limit).skip(page*limit).sort(objectSort)
                resolve({
                    status:'OK',
                    message:"Get All Product Success",
                    data:allProductSort,
                    total:totalProduct,
                    currentPage:page+1,
                    totalPage:Math.ceil(totalProduct/limit)

                })
            }
            const allProduct=await Product.find().limit(limit).skip(page*limit)
                resolve({
                    status:'OK',
                    message:"Get All Product Success",
                    data:allProduct,
                    total:totalProduct,
                    currentPage:page+1,
                    totalPage:Math.ceil(totalProduct/limit)

                })
        }catch(e){
            reject(e)
        }
    })
}
module.exports={
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct
}