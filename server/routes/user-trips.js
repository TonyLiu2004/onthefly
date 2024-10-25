import express from 'express'
import { createTripUser, getTripUsers, getUserTrips } from '../controllers/users-trips.js'

const router = express.Router()

router.post('/create/:trip_id', createTripUser)
router.get('/users/:trip_id', getUserTrips)
router.get('/trips/:username', getTripUsers)

export default router