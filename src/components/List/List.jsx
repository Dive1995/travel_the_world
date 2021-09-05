import React, { useEffect, useState, createRef} from 'react'
import { Typography, FormControl, InputLabel, CircularProgress, MenuItem, Grid, Select} from '@material-ui/core'
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import useStyles from './style'


function List({places, childClicked, isLoading, type ,setType,rating, setRating}) {
    const classes = useStyles();
    const [elementRefs, setElementRefs] = useState([])


    useEffect(() => {
        setElementRefs((refs) => Array(places?.length).fill().map((_,i) => refs[i] || createRef()))
    },[places])

    // const places = [
    //     {name:"Summer Resort"},
    //     {name:"Cool Bar"},
    //     {name:"KFC"},
    // ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">Resturants, Hotels & Attractions around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="resturants">Resturants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.4}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid item ref={elementRefs[i]} key={i} xs={12}>
                                <PlaceDetails place={place} refProp={elementRefs[i]} selected={Number(childClicked) === i}/>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default List
