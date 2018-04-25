const axios = require('axios');
const comments = require('./comments');
const channel = require('./channel');
const search = require('./search');


function YoutubeData(){

  this.args = process.argv.slice(2);
  this.keyword = process.argv.slice(3);
  this.searchfor= this.keyword.join(' ');
  this.videoID = "pZyfN4p8K_o";
  this.channelID = "UCpdK1NLHxEUGXc1gq2NxkTw";
  this.URLsearch="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBlpwLuQ8YLHNtG67JgrUZa7UvSf0uKyaI&q=";
  this.URLcomments="https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyA5tPLfpA8V0isrm9cZoiKDhQKpRyR7kJk&textFormat=plainText&part=snippet&videoId=";
  this.URLchannel="https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=10&key=AIzaSyA5tPLfpA8V0isrm9cZoiKDhQKpRyR7kJk&channelId=";

}


YoutubeData.prototype.callAPIs = function(){

  if(this.args[0] == 'search')
    search(this.searchfor, this.URLsearch);

  else if (this.args[0] == 'comments')
    comments(this.videoID, this.URLcomments);

  else if(this.args[0] == 'channel')
    channel(this.channelID, this.URLchannel);
}

var searchdata = new YoutubeData();
searchdata.callAPIs();
