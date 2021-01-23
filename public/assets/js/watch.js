$(document).ready(() => {
  $(document).on("click", ".watchBtn", moviesHaveWatched);
  $(document).on("click", ".notWatchBtn", moviesHaventWatched);
  function moviesHaveWatched() {
    const movieTitle = $(".title");
    const moviePlot = $(".plot");
    const custId = $("#custId").val();
    //console.log(title);
    const dbData = {
      title: movieTitle.text(),
      plot: moviePlot.text(),
      watched: true,
      id: custId
    };
    $.ajax("/api/moviesAdd", {
      type: "POST",
      data: dbData
    }).then(() => {
      //dbData.empty();
      movieTitle.empty();
      moviePlot.empty();
      //console.log("Data sent to the db");
    });
  }

  function moviesHaventWatched() {
    const movieTitle = $(".title");
    const moviePlot = $(".plot");
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
    }).then(() => {
      //dbData.empty();
      movieTitle.empty();
      moviePlot.empty();
      //console.log("Data sent to the db");
    });
  }
});

// $(".watchBtn").on("click", () => {
//     window.location.replace("/watch");
//   });
