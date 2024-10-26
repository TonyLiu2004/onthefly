# onthefly

* npm init -y in server folder
* trailing comma in package.json
* config folder is in server folder
* USE DATABASE_PUBLIC_URL FOR .env
* In trips.js use backticks for the query
* Step 7 should be const updateTrip = async (req, res)

* make sure frontend proxy target != backend port
* for post trip, make sure date is in iso format
* make sure fetch paths are correct
* in client/src/pages/TipDetails.js, ActivityBtn and DestinationBtn needs a key, just set to the same id
* added "const votes = num_votes === null ? num_votes : 1;" to createActivity in server/controllers/activities.js so they dont initialize to null
* In the /pages/TripDetails.jsx file, fetchDestinations requires  the database to include destination name when fetching.
* remove proxy from client/package.json

* user-trip's router.get('/users/:trip_id', getUserTrips) uses trip_id but in code, it used username.

later:
* When deploying: server/routes/auth.js has /github/callback as successRedirect: 'http://localhost:3000/.' Need to change later to client website
* When deploying: client/components/AddTripOptionCard, change the fetch to the client website
