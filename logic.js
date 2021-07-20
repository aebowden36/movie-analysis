var full_data = d3.csv("MoviesOnStreamingPlatforms_updated.csv").then(function (data) {
    for (var i = 0; i < data.length; i++) {
        var id = parseInt(data[i].ID)
        var title = data[i].Title
        var year = parseInt(data[i].Year)
        var age = data[i].Age
        //IMDb values with nothing were set to NaN
        var imdb = parseFloat(data[i].IMDb)
        var rottenTomatoes = data[i]["Rotten Tomatoes"]
        var netflix = data[i].Netflix
        var hulu = data[i].Hulu
        var primeVideo = data[i]["Prime Video"]
        var disneyPlus = data[i]["Disney+"]
        var type = data[i].Type
        var directors = data[i].Directors.split(",")
        var genres = data[i].Genres.split(",")
        var country = data[i].Country.split(",")
        var language = data[i].Language.split(",")
        //runtime values with nothing were set to NaN
        var runtime = parseInt(data[i].Runtime)
        
        //This block of code is used to validate if the data is the right type
        //The == is used instead of the === because the data type should be different and only the values are being compared
        var validation = data[i].Runtime
        if (validation == runtime) {
            console.log('working!')
        }
        else {
            console.log('not working at ID:')
            console.log(id)
            console.log("old and new values are:")
            console.log(validation)
            console.log(runtime)
        }
    };
})