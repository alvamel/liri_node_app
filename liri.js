// dependencies
var keys = ('./keys.js');
var twitter = ("twitter");
var spotify = ("spotify");
var request = ("request");
var fs = ('fs');

// command
console.log("my-tweets", "spotify-this-song", "movie-this", "do-what-it-says");
// arguments
var userCommand = process.argv[2];
var secondCommand = process.argv[3];
    for (i=4; i<process.argv.length; i++) {
        secondCommand += '+' + process.argv[i];
    }

function theSwitch() {
    //action
    switch (userCommand) {

        case 'my-tweets':
        fetchTweets();
        break;

        case 'spotify-this-song':
        spotifyMe();
        break;

        case 'movie-this':
        aMovieForMe();
        break;

        case 'do-waht-it-says':
        followTheTextbook();
        break;

    }
};

// fetch
function fetchTweets() {
    console.log("Tweets");
    var client = new twitter({
        consumer_key:
        consumer_secret:
        access_token_key:
        access_token_secret:
});

// tweeter parameters function
var parameters = {
        screen_name: '', 
        count: 20
};

// get method call for client twitter variable
client.get('statuses/user_timeline', parameters, function(error, tweets, responce) {
        if (!error) {
        for (i=0; i<tweets.length; i++) {
            var returnedData = ('Number: ' + (i+1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
            console.log(returnedData);
            console.log("-----");
        }
    };
});
};

function spotifyMe() {
        console.log("");

// variable for search
var searchTrack;
if (secondCommand === undefined) {
    searchTrack = "";
} else {
    searchTrack = secondCommand;
    }
}

// spotify search
spotify.search({type: 'track', queary:searchTrack}, function(err,data) {
    if (err) {
        console.log("Error occured: " + err);
        return;
    } else {
        console.log("Atist: " + data.tracks.items[0].artists[0].name);
        console.log("song: " + data.tracks.items[0].name);
        console.log("Albums: " + data.tracks.items[0].album.name);
        console.log("Preview Here: " + data.tracks.items[0].preview_url);
    }
});

function aMovieForMe() {
        console.log("");

// variable for search
var searchMovie;
if (secondCommand === undefined) {
        searchMovie = "mr. Nobody";
} else {
        searchMovie = secondCommand;
};
}

// this outputs the information in terminal
var url = '';
request(url, function(error, responce, body) {
    if (!error && responce.statusCode == 200) {

    }
});

function followTheTextbook() {
        console.log("Looking at random.txt now");
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                console.log(error);
            } else {

// spli data - declare variables
var dataArr = data.split(',');
userCommand = dataArr[0];
secondCommand = dataArr[1];

for (i = 2; i < dataArr.length; i++) {
    secondCommand = secondCommand + "+" + dataArr[i];
};

        fetchTweets();

        };
    })
}

fetchTweets();
