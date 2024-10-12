import express from 'express'
import cors from 'cors'
import tripRoutes from './routes/trips.js'
import ActivityRoutes from './routes/activities.js'
import DestinationRoutes from './routes/destinations.js'
import TripDestinationRoutes from './routes/tripDestinations.js'


const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
})

app.use('/trips', tripRoutes)
app.use('/activities', ActivityRoutes)
app.use('/destinations', DestinationRoutes)
app.use('/tripDestinations', TripDestinationRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})