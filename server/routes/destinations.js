import express from 'express';
import DestinationsController from '../controllers/destinations.js';

const router = express.Router();

router.post('/', DestinationsController.createDestination);
router.get('/', DestinationsController.getDestinations);
router.get('/:id', DestinationsController.getDestination);
router.patch('/:id', DestinationsController.updateDestination);
router.delete('/:id', DestinationsController.deleteDestination);

export default router;