import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'b11f52b2b2mshc6f1b68034a6affp1ba519jsn6940eef1015b'
//   }
// };


export const getPlacesData = async (sw,ne) => {
    try{
        const resp = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '74edde9f52msh46430a917b793b5p1fd78cjsn15306cf069f8'
            }
            // headers: {
            //   'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            //   'x-rapidapi-key': 'b11f52b2b2mshc6f1b68034a6affp1ba519jsn6940eef1015b'
            // }
          })
        // console.log(resp.data.data);
        const data = resp.data.data
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}
