import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Button, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import { Rating } from '@material-ui/lab'

import useStyles from './style'

function PlaceDetails({place, selected, refProp}) {
    const classes = useStyles();

    if(selected) {
        // console.log(selected)
        // console.log(refProp.current)
        refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <Card elevation={6}>
            <CardMedia
                style={{height:300}}
                image={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.title}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    {/* <Typography variant="subtitle1">Rating</Typography> */}
                    <Rating name="read-only"   value={Number(place.rating)} readOnly />
                    <Typography variant="subtitle1" gutterBottom>out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                        <img src={award.images.small} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name}) =>{
                    <Chip key={name} label={name} size="small" className={classes.chip}/>
                })}
                {place?.address && (
                    <Typography variant="subtitle2" gutterBottom color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon/>{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography variant="subtitle2" gutterBottom color='textSecondary' className={classes.subtitle}>
                        <PhoneIcon/>{place.phone}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
                    Website
                </Button>
            </CardActions>
        </Card>
    )
}

export default PlaceDetails
