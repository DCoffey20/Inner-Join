$(document).ready(function() {
  
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    console.log("test");
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        console.log("test");
        window.location.replace("/memberprofile");
        // If there's an error, log the error
      });
  }
});