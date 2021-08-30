import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, useMediaQuery, Typography} from '@material-ui/core'
import Rating from "@material-ui/lab/Rating"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './style'

function Map() {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')
    const cordinates = {lat: 0, lng: 0}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyBamYLihOC2mmakGAQxW9djrakZtgkHQ-0'}}
                margin={[50, 50, 50, 50]}
                defaultCenter={cordinates}
                center={cordinates}
                defaultZoom={14}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map