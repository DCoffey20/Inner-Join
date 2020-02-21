$(document).ready(function() {
    // Getting references to our form and input
    let signUpForm = $("#submit");
    let emailInput = $("input#email-input");
    let passwordInput = $("input#password-input");
    let firstNameInput = $("input#first-name-input");
    let lastNameInput = $("input#last-name-input");
    let userNameInput = $("input#user-name-input");
    let aboutMeInput = $("input#about-me-input");
    let genderOrientation = [];
    let gender = [];
    $.each($("input[name='gender']:checked"), function(){
        gender.push($(this).val())
    });
    $.each($("input[name='genderPref']:checked"), function(){
        genderOrientation.push($(this).val())
    });
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", function(event) {
      event.preventDefault();
      console.log("button has been clicked")
      let userData = {
        first_name: firstNameInput.val().trim(),
        last_name: lastNameInput.val().trim(),
        user_name: userNameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        about_me: aboutMeInput.val(),
        gender: gender.val(),
        gender_orientation: genderOrientation.val(),
      };
  
      if (!userData.email || !userData.password || !userData.first_name || !userData.last_name || !userData.user_name) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.first_name, userData.last_name, userData.user_name, userData.email, userData.password, userData.about_me, userData.gender, userData.gender_orientation);
      console.log(userData);
      firstNameInput.val("");
      lastNameInput.val("");
      userNameInput.val("");
      emailInput.val("");
      passwordInput.val("");
      aboutMeInput.val("");
      gender.val("");
      gender_orientation.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(first_name, last_name, user_name, email, password, about_me, gender, gender_orientation) {
      console.log("ahhh");
      $.post("/api/members", {
        first_name:first_name,
        last_name: last_name,
        user_name: user_name,
        email: email,
        password: password,
        about_me: about_me,
        gender: gender,
        gender_orientation: gender_orientation
      })
        .then(function(data) {
          window.location.replace("/survey");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });