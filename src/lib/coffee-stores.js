export const fetchCoffeeStores = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3dTWcwuSOo9ZLGG5vmiwbwyZrZBZyuGqkJodpMxtQLsk='
        }
      };
      
    //   fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=7.199123255674527%2C80.66143377793499&limit=10', options)
    //     .then(response => response.json())
    //     .then((data) => {
    //       setData(data.results)
    //       setLoading(false)
    //     })
    //     .catch(err => console.error(err));

    const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=7.199123255674527%2C80.66143377793499&limit=10', options);
    const data = await response.json();
    return data.results;
}