import express from 'express';
import tripsDestinationsController from '../controllers/tripDestinations.js';

const router = express.Router();

router.post('/', tripsDestinationsController.createTripDestination);
router.get('/', tripsDestinationsController.getTripsDestinations);
router.get('/trips/:destination_id', tripsDestinationsController.getAllTrips);
router.get('/destinations/:trip_id', tripsDestinationsController.getAllDestinations);

export default router;