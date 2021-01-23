$(document).ready(() => {
  $(document).on("click", ".watchBtn", moviesHaveWatched);
  $(document).on("click", ".notWatchBtn", moviesHaventWatched);
  function moviesHaveWatched() {
    const movieTitle = $(".card-title");
    const moviePlot = $(".card-text");
    const custId = $("#custId").val();
    //console.log(title);
    const dbData = {
      title: movieTitle.text(),
      plot: moviePlot.text(),
      watched: true,
      id: custId
    };
    console.log(dbData);
    $.ajax("/api/moviesAdd", {
      type: "POST",
      data: dbData
    }).then(movies => {
      //dbData.empty();
      movieTitle.empty();
      moviePlot.empty();
      $("#watchedUl").empty();
      $("#notWatchedUl").empty();
      $("#movieInfo").empty();
      console.log(movies);
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].watched) {
          $("#watchedUl").append(`<li>${movies[i].title}</li>`);
          // plot
          // buttons
          // etc
        } else {
          // movies not watched
          $("#notWatchedUl").append(`<li>${movies[i].title}</li>`);
        }
      }
      //console.log("Data sent to the db");
    });
  }

  function moviesHaventWatched() {
    const movieTitle = $(".card-title");
    const moviePlot = $(".card-text");
    const custId = $("#custId").val();
    //console.log(title);
    const dbData = {
      title: movieTitle.text(),
      plot: moviePlot.text(),
      watched: false,
      id: custId
    };
    $.ajax("/api/moviesAdd", {
      type: "POST",
      data: dbData
    }).then(movies => {
      //dbData.empty();
      movieTitle.empty();
      moviePlot.empty();
      $("#watchedUl").empty();
      $("#notWatchedUl").empty();
      $("#movieInfo").empty();
      console.log(movies);
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].watched) {
          $("#watchedUl").append(`<li>${movies[i].title}</li>`);
          // plot
          // buttons
          // etc
        } else {
          // movies not watched
          $("#notWatchedUl").append(`<li>${movies[i].title}</li>`);
        }
      }
    });
  }
});

// $(".watchBtn").on("click", () => {
//     window.location.replace("/watch");
//   });
