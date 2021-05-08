const User = require("../model/user")

const express = require('express')

//create route
exports.Create = async(req,res,next)=> {
    const {name,email,country,password} = req.body
  

    try{
        const user = await User.create({
            name,email,country,password
        });

        res.json({
            "message": "user created successfully",
            "data": user
        })
    }catch (error){
        res.send(error.message)

    }
}


//read route
exports.Read = async(req,res,next)=> {
   
  

    try{
        const user = await User.find({
            
        });

        res.json({
            "message": "Users retrieved successfully",
            "data": user
        })
    }catch (error){
        res.send(error.message)

    }
}


//readone
exports.ReadOne = async(req,res,next)=> {
   
    const id = req.params.id

    try{
        const user = await User.findById(id);

        if(!user){
            res.status(404).send("User not found")
        }

        res.json({
            "message": "User retrieved successfully",
            "data": user
        })
    }catch (error){
        res.send(error.message)

    }
}

//update route
exports.Update = async(req,res,next)=> {
   
    const id = req.params.id

    try{
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})

        if(!user){
            res.status(404).send("User not found")
        }

        res.json({
            "message": "User updated successfully",
            "data": user
        })
    }catch (error){
        res.send(error.message)

    }
}


//delete route
exports.Delete = async(req,res,next)=> {
   
    const id = req.params.id

    try{
        const user = await User.findByIdAndDelete(id)

        if(!user){
            res.status(404).send("User not found")
        }

        res.json({
            "message": "User Deleted successfully"
            
            
        })
    }catch (error){
        res.send(error.message)

    }
}