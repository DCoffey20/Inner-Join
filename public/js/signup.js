$(document).ready(function () {

  // Inputs for the personal information form section.
  let signUpForm = $("#submit");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");
  let firstNameInput = $("input#first-name-input");
  let lastNameInput = $("input#last-name-input");
  let userNameInput = $("input#user-name-input");
  let aboutMeInput = $("input#about-me-input");
  let genderInput = '';
  let genderOrientationInput = '';

  // The next section of variables are for the language survey section.

  let javascript = null;
  let cPlusPlus = null;
  let c = null;
  let cSharp = null;
  let swift = null;
  let java = null;
  let ruby = null;
  let php = null;
  let perl = null;
  let assembly = null;
  let html = null;
  let css = null;
  let python = null;
  let objectiveC = null;
  let r = null;

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {
    event.preventDefault();
    genderInput = $("input[name=gender]:checked");
    genderOrientationInput = $("input[name='genderPref']:checked");
    let userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      user_name: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      about_me: aboutMeInput.val(),
      gender: genderInput.val(),
      gender_orientation: genderOrientationInput.val()
    };

    if (!userData.email || !userData.password || !userData.first_name || !userData.last_name || !userData.user_name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first_name, userData.last_name, userData.user_name, userData.email, userData.password, userData.about_me, userData.gender, userData.gender_orientation);
    firstNameInput.val("");
    lastNameInput.val("");
    userNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    aboutMeInput.val("");
    genderInput.val("");
    genderOrientationInput.val("");
  });

  // Does a post to the signup route.
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, user_name, email, password, about_me, gender, gender_orientation) {
    $.post("/api/members", {
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      email: email,
      password: password,
      about_me: about_me,
      gender: gender,
      gender_orientation: gender_orientation
    })
      .then(function (data) {
        //returnedData = JSON.stringify(data);
        //console.log(returnedData + "is the returned data from first api call");
        console.log(data.id + "Hello line 79");
        javascript = $("input[id=JS]:checked");
        cPlusPlus = $("input[id=CPlusPlus]:checked");
        c = $("input[id=c]:checked");
        cSharp = $("input[id=csharp]:checked");
        swift = $("input[id=Swift]:checked");
        java = $("input[id=Java]:checked");
        ruby = $("input[id=Ruby]:checked");
        php = $("input[id=PHP]:checked");
        perl = $("input[id=Perl]:checked");
        assembly = $("input[id=Assembly]:checked");
        html = $("input[id=HTML]:checked");
        css = $("input[id=CSS]:checked");
        python = $("input[id=Python]:checked");
        objectiveC = $("input[id=Objectivec]:checked");
        r = $("input[id=R]:checked");
        
        let userSurveyData = {
            member_id: data.id,
            javascript: javascript.val(),
            cPlusPlus: cPlusPlus.val(),
            c: c.val(),
            cSharp: cSharp.val(),
            swift: swift.val(),
            java: java.val(),
            ruby: ruby.val(),
            php: php.val(),
            perl: perl.val(),
            r: r.val(),
            assembly: assembly.val(),
            html: html.val(),
            css: css.val(),
            python: python.val(),
            objectiveC: objectiveC.val(),
        };
        console.log(userSurveyData + "Hello from line 114");
        submitSurvey(userSurveyData.member_id, userSurveyData.javascript, userSurveyData.c, userSurveyData.cSharp,
            userSurveyData.java, userSurveyData.ruby, userSurveyData.php, userSurveyData.swift,
            userSurveyData.cPlusPlus, userSurveyData.r, userSurveyData.perl, userSurveyData.assembly,
            userSurveyData.html, userSurveyData.css, userSurveyData.python, userSurveyData.objectiveC);

        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function submitSurvey(member_id, javascript, c, cSharp, java, ruby,
    php, swift, cPlusPlus, r, perl, assembly, html, css,
    python, objectiveC) {
    $.post("/api/members/languages", {
      member_id: member_id,
      javascript: javascript,
      cPlusPlus: cPlusPlus,
      c: c,
      csharp: cSharp,
      java: java,
      ruby: ruby,
      php: php,
      swift: swift,
      r: r,
      perl: perl,
      assembly: assembly,
      html: html,
      css: css,
      python: python,
      objectiveC: objectiveC
    })
      .then(function () {
        window.location.replace("/memberprofile")
      })
      .catch(function (err) {
        console.log(err)
      });

  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});