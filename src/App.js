import {CssBaseline, Grid} from "@material-ui/core"
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map"
import {getPlacesData} from './api/index'
import { useEffect, useState } from "react";


function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lng:0, lat:0});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])


  // get location & set location
  useEffect(() => {
    // console.log('func')
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoordinates({lat:coords.latitude, lng:coords.longitude})
    })
  },[])

  useEffect(() => {
    const filtered = places.filter(place => place.rating > rating)
    setPlaces(filtered)
  },[rating])



  // get data from API
  useEffect(() => {
    setIsLoading(true)
    // console.log(coordinates, bounds);
    if(bounds){
      getPlacesData(type,bounds.sw, bounds.ne)
      .then(res => {
        // console.log(res)
        setPlaces(res)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
      
    }
  },[type,coordinates, bounds])
  
// console.log(places)

  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlaces.length ? filteredPlaces : places} 
            childClicked={childClicked} 
            isLoading={isLoading} 
            type={type} 
            setType={setType} 
            rating={rating} 
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
