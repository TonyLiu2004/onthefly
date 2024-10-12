import express from 'express'
import activitiesController from '../controllers/activities.js'

const router = express.Router()

router.get('/', activitiesController.getActivities)
router.get('/:trip_id', activitiesController.getTripActivities)
router.post('/:trip_id', activitiesController.createActivity)
router.delete('/:id', activitiesController.deleteActivity)
router.patch('/:id', activitiesController.updateActivityLikes)

export default router