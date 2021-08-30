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


  useEffect(() => {
    console.log('func')
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoordinates({lat:coords.latitude, lng:coords.longitude})
    })
  },[])

  useEffect(() => {
    console.log(coordinates, bounds);
    if(bounds){
      getPlacesData(bounds.sw, bounds.ne)
      .then(res => {
        // console.log(res)
        setPlaces(res)})
      .catch(err => console.log(err))
      
    }
  },[coordinates, bounds])
  
// console.log(places)

  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
