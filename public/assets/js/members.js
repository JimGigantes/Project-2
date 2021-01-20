$(document).ready(() => {
  const LookUpForm = $("form.lookup");
  const movieInput = $("input#movie-input");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    $(".member-name").text(data.email);

    LookUpForm.on("search", event => {
      event.preventDefault();
      const movieData = {
        movie: movieInput.val().trim(),
       };
  
      if (!movieInput.val().trim()) {
        return;
      }
      // If we have an email and password, run the signUpUser function
     lookUpMovie(movieInput.val().trim());
           
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function lookUpMovie(movie) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(() => {
          //window.location.replace("/members");
          location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleSearchErr);
    }

    function handleSearchErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
});
