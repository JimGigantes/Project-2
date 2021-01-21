//const { default: axios } = require("axios");
$(document).ready(() => {
  const lookUpForm = $("form.lookup");
  const movieInput = $("input#movie-input");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.email);
  });

  lookUpForm.on("submit", event => {
    event.preventDefault();
    //console.log("hello");
    const movieData = {
      movie: movieInput.val().trim()
    };
    if (!movieInput.val().trim()) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    lookUpMovie(movieData);
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function lookUpMovie(movieData) {
    movieData.movie.replace(/\s+/g, "+");
    const movieName = movieData.movie;
    const URL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=Trilogy";

    axios.get(URL).then(response => {
      //.get("http://www.omdbapi.com/?t=" + URL + "&apikey=Trilogy")
      
      console.log(response);
    });
    //.catch(handleSearchErr);
  }

  function handleSearchErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
