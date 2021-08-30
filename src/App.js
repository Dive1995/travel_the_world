import {CssBaseline, Grid} from "@material-ui/core"
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map"


function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
