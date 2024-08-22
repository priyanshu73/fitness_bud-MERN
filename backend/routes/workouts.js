const express = require('express')


const {postWorkout, getAll,  getWorkout, delWorkout, updateWorkout} = require('../controllers/workoutControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()


//require auth for all workout routes so that only authorized users can aceess api routes 
router.use(requireAuth)

// GET ALL WORKOUTS

 router.get('/', getAll)

 // get a single wk
 router.get('/:id', getWorkout)
 
 //post a new wk
 router.post('/',postWorkout )



 //delete a wk 
 router.delete('/:id', delWorkout)

 //update a wk

  
 router.patch('/:id', updateWorkout)



module.exports = router