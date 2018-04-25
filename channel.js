const axios = require('axios');

module.exports = function(channelID, url){
  axios.get( url + channelID)
   .then(function(response){
     console.log(response.data);
    });
}
