const express = require('express');
const router = express.Router();
const Student = require('./model/student')
const mongoose = require('mongoose');

// this is get call
router.get('/', (request, response, next) => {
    Student.find()
        .then(result => {
            response.status(200).json({
                studentData: result
            })
        })
        .catch(error => {
            console.log(error);
            responde.status(500).json({
                error: error
            })
        })

})

// get data a/c to id
router.get('/:id', (request, response, next) => {
console.log(request.params.id)

Student.findById(request.params.id)
.then(result=>{
    response.status(200).json({
        studentData:result
    })
})
.catch(error=>{
    console.log("No data found")
    response.status(500).json({
        error:error
    })
})

})


// this is post call

router.post('/', (request, response, next) => {

    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: request.body.name,
        email: request.body.email,
        mobile: request.body.mobile,
        gender: request.body.gender
    })

    student.save()
        .then(result => {
            console.log(result);
            response.status(200).json({
                data: request.body
            })

        })
        .catch(error => {
            console.log("Data not saved")
            response.status(500).json({
                error: error
            })
        })

})

module.exports = router;