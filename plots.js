function buildPlot() {
    d3.csv("MoviesOnStreamingPlatforms_original.csv").then(function (data) {
      var idList = []
      var titleList = []
      var yearList = []
      var ageList =[]
      var imdbList = []
      var rottenTomatoesList = []
      var netflixList = []
      var huluList = []
      var primeVideoList = []
      var disneyPlusList = []
      var typeList = []
      var directorsList = []
      var genresList = []
      var countryList = []
      var languageList = []
      var runtimeList = []
      
      for (var i = 0; i < data.length; i++) {
        var id = parseInt(data[i].ID)
        var title = data[i].Title
        var year = parseInt(data[i].Year)
        var age = data[i].Age
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
        var runtime = parseInt(data[i].Runtime)
        
          idList.push(id);
          titleList.push(title)
          yearList.push(year);
          ageList.push(age)
          // IMDb values with nothing were set to NaN
          imdbList.push(imdb);
          rottenTomatoesList.push(rottenTomatoes);
          if (netflix == 1) {
            netflixList.push(netflix)
          }
          if(hulu == 1) {
            huluList.push(hulu)
          }
          if (primeVideo == 1){
            primeVideoList.push(primeVideo)
          }
          if (disneyPlus == 1){
            disneyPlusList.push(disneyPlus)
          }
          typeList.push(type)
          directorsList.push(directors)
          genresList.push(genres)
          countryList.push(country)
          languageList.push(language)
          // runtime values with nothing were set to NaN
          runtimeList.push(parseInt(data[i].Runtime));
          
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
      var traceNetflix = {
        x: netflixList,
        y: imdbList.reduce((a, b) => a + b, 0)/imdbList.length,
        type: 'bar'
      }
  
      var traceHulu = {
        x: huluList,
        y: imdbList,
        type: 'bar'
      }
  
      var tracePrime = {
        x: primeVideoList,
        y: imdbList,
        type: 'bar'
      }
  
      var traceDisney = {
        x: disneyPlusList,
        y: imdbList,
        type: 'bar'
      }
      
      var data = [traceNetflix, traceHulu, tracePrime, traceDisney]
      var layout = {
        title: "IMDb Ratings Across Platforms"
      }
      Plotly.newPlot("plot", data, layout);
    })
  }
  buildPlot();