const axios = require('axios');

module.exports = function(videoID, url){
  axios.get( url + videoID)
   .then(function(response){
     console.log(response.data);
    });
}
