export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.596201',
      bl_lng: '25.826312',
      tr_lat: '43.693244',
      tr_lng: '44.822849',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '00788b38a8msh5c061cd9019e583p196158jsnf511a125b622',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

   export const options2 = {
    headers: {
      'X-RapidAPI-Key': '00788b38a8msh5c061cd9019e583p196158jsnf511a125b622',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };