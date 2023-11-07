const express=require('express')
const Student=require('../model/student')
const placement = require('../model/placement')

exports.createStudent = async (req,res)=>{
    try{
        const student = new Student(req.body)
        await student.save()
        res.status(201).json({msg:"Succesfully Created",student})
    
    }catch(error){
        console.log(error)
        res.status(404).json({msg:"Error",error})
    }
  
}

exports.getStudent = async (req,res)=>{
    try{

        const student = await Student.find()
         res.status(200).json({msg:"Succesfully Fetched All Student",student})

    }catch(error){
        console.log("Error",error)
    }

}

exports.getOneStudent = async (req,res)=>{
    try{

        const student = await Student.findById(req.params.id)
         res.status(200).json({msg:"Succesfully Fetched One Student",student})

    }catch(error){
        console.log("Error",error)
        res.status(404).json({Msg:"Error",error})
    }

}

exports.getOneStudentMentor = async (req,res)=>{
    try{

        const student = await Student.find({teacher:req.params.id}).populate('teacher')
        // 
        student.map(item =>{
            console.log(item.teacher.name)
          
        })
         res.status(200).json({msg:"Succesfully Fetched One Student",student})


    }catch(error){
        console.log("Error",error)
        res.status(404).json({Msg:"Error",error})
    }

}
exports.getOneStudentplacement = async (req,res)=>{
    try{

        const student = await Student.find({placement:req.params.id}).populate('placement')
        // 
        student.map(item =>{
            console.log("Student" +" " +item.first_name+ " "+item.last_name+ " "+ "is assigned to" +" " +item.placement.name)
            
          
        })
         res.status(200).json({msg:"Succesfully Fetched One Student",student})


    }catch(error){
        console.log("Error",error)
        res.status(404).json({Msg:"Error",error})
    }

}
exports.updateStudent = async (req,res)=>{
    console.log(req.body)
    try{
            const student = await Student.findByIdAndUpdate({_id:req.params.id},req.body)
            console.log(student)
            res.status(200).json({msg:"Update Succesfull",student})

    }catch(error){
        console.log("Error",error)
    }

}


exports.deleteStudent = async (req,res)=>{
    try{
        const student = await Student.findByIdAndDelete({_id:req.params.id})            
        console.log(student)
        res.status(500).json({msg:"Delete Succesfull",student})

    }catch(error){
        console.log("Error",error)
    }

}

