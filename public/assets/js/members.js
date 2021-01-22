//const { default: axios } = require("axios");
$(document).ready(() => {
  const lookUpForm = $("form.lookup");
  const movieInput = $("input#movie-input");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.email + "User ID" + data.id);
    $("#custId").val(data.id);
  });

  lookUpForm.on("submit", event => {
    event.preventDefault();
    $("#movieInfo").empty();
    //console.log("hello");
    const movieData = {
      movie: movieInput.val().trim()
    };
    if (!movieInput.val().trim()) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    lookUpMovie(movieData);
    $("input#movie-input").val("");
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function lookUpMovie(movieData) {
    movieData.movie.replace(/\s+/g, "+");
    const movieName = movieData.movie;
    const URL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=Trilogy";

    axios.get(URL).then(allData => {
      // $.get("http://www.omdbapi.com/?t=" + URL + "&apikey=Trilogy")
      //console.log(allData);
      //console.log(allData.data.Title);
      //console.log(allData.data.Plot);
      const movieTitle = allData.data.Title;
      const moviePlot = allData.data.Plot;
      const h2El = `<li><h2 class="plot">${moviePlot}</h2>
      <button class="watchBtn">Watched It</button></li>
      <button class="notWatchBtn">Not Watched</button></li>`;
      $("#movieInfo").prepend(h2El);
      const h1El = `<li><h1 class="title">${movieTitle}</h1>
      </li>`;
      $("#movieInfo").prepend(h1El);
    });
    // $.catch(handleSearchErr);
  }

  // function handleSearchErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});
