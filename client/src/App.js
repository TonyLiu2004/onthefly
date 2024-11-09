import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadTrips from './pages/ReadTrips'
import CreateTrip from './pages/CreateTrip'
import EditTrip from './pages/EditTrip'
import CreateDestination from './pages/CreateDestination';
import ReadDestinations from './pages/ReadDestinations'
import TripDetails from './pages/TripDetails'
import { Link } from 'react-router-dom'
import CreateActivity from './pages/CreateActivity';
import AddToTrip from './pages/AddToTrip';
import Login from './pages/Login'
import Avatar from './components/Avatar'

const App = () => {
  
  const API_URL = 'https://onthefly-production-319d.up.railway.app/';
  const CLIENT_URL = 'https://client-production-73a9.up.railway.app/'
  console.log("qweqwewqewqewqewqewqewqewqewqewqewqewqewqewqewqewqewqewq")
  const [trips, setTrips] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("2", user, user.id, trips, API_URL)
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${API_URL}/destinations`)
        const data = await response.json()
        setDestinations(data)
      } catch (error) {
        console.log("Error: " + error.message)
      }
    }
    const fetchTrips = async () => {
      try {
        const response = await fetch(`${API_URL}/trips`);
        const data = await response.json(); 
        setTrips(data);
      } 
      catch (error) {
        console.error("Error: " + error.message);
      };
    }
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
      const json = await response.json()
      setUser(json.user)
    }
    console.log("3", user, user.id, trips, API_URL)
    getUser()
    fetchTrips();
    fetchDestinations();
    console.log("4", user, user.id, trips, API_URL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = async () => {
    const url = `${API_URL}/auth/logout`
    const response = await fetch(url, { credentials: 'include' })
    const json = await response.json()
    console.log("logout json: ",json)
    window.location.href = CLIENT_URL
  }
  // Sets up routes

  let element = useRoutes([
    {
      path: "/",
      element: user && user.id ?
      <ReadTrips user={user} data={trips} /> : <Login api_url={API_URL} />
    },
    {
      path:"/trip/new",
      element: user && user.id ?
      <CreateTrip user={user} api_url={API_URL}/> : <Login api_url={API_URL} />
    },
    {
      path:"/edit/:id",
      element: user && user.id ?
      <EditTrip data={trips} api_url={API_URL}/> : <Login api_url={API_URL} />
    },
    {
      path:"/destinations",
      element: user && user.id ?
      <ReadDestinations data={destinations}/> : <Login api_url={API_URL} />
    },
    {
      path:"/trip/get/:id",
      element: user && user.id ?
      <TripDetails data={trips} api_url={API_URL}/> : <Login api_url={API_URL} />
    },
    {
      path:"/destination/new/:trip_id",
      element: user && user.id ?
      <CreateDestination api_url={API_URL}/> : <Login api_url={API_URL} />
    },
    {
      path:"/activity/create/:trip_id",
      element: user && user.id ?
      <CreateActivity api_url={API_URL}/> : <Login api_url={API_URL} />
    },
    {
      path:"/destinations/add/:destination_id",
      element: user && user.id ?
      <AddToTrip data={trips} api_url={API_URL}/> : <Login api_url={API_URL} />
    }
  ]);

  
  return ( 

    <div className="App">
      {
          user && user.id ?
              <div className='header'>
                  <h1>On The Fly ✈️</h1>
                  <Link to='/'><button className='headerBtn'>Explore Trips</button></Link>
                  <Link to='/destinations'><button className='headerBtn'>Explore Destinations</button></Link>
                  <Link to='/trip/new'><button className='headerBtn'> + Add Trip </button></Link>
                  <button onClick={logout} className='headerBtn'>Logout</button>
                  <Avatar className='avatar' user={user} />
              </div>
          : <></>
      }
        {element}
    </div>

  );
}

export default App;
