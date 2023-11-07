const express = require('express')
const router = express.Router()


const {createStudent,getStudent,updateStudent,deleteStudent,getOneStudent,getOneStudentMentor,getOneStudentplacement} = require('../controller/student')

router.post('/student',createStudent)

router.get('/student',getStudent)

router.get('/student/:id',getOneStudent)
router.get('/student-mentor/:id',getOneStudentMentor)
router.get('/student-placement/:id',getOneStudentplacement)


router.put('/student/:id',updateStudent)
router.delete('/student/:id',deleteStudent)


module.exports = router;