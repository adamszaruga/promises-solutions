var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];

var promises = urls.map(function(url){
    return axios.get(url);
});

Promise.all(promises)
    .then(function (responses) {
        console.log("all the data was fetched!");
    })
  