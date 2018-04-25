const axios = require('axios');

module.exports = function(keyword, url){
  axios.get( url + keyword)
   .then(function(response){
     console.log(response.data);
    });
}
