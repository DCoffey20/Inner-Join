$(document).ready(function(){

    const SubmitSurvey = $("#surveysubmit");

    const Javascript = $("#JS");
    const Cplusplus =  $("#C++");
    const C = $("#c");
    const Csharp = $("#csharp");
    const Swift = $("#Swift");
    const Java = $("#Java");
    const Ruby = $("#Ruby");
    const php = $("#PHP");
    const Perl = $("#Perl");
    const Assembly = $("#Assembly");
    const html = $("#HTML");
    const css = $("#CSS");
    const Python = $("#Python");
    const Objectivec = $("#Objectivec");
    const r = $("#R");

    const Gender = $("#gender");
    const InterestedIn = $("#interestedin");
    const FirstName = $("#firstname");
    const LastName = $("#lastname");


SubmitSurvey.on("click", function(event){

event.preventDefault();
let userData = {
    Javascript: Javascript.val(),
    Cplusplus: Cplusplus.val(),
    C: C.val(),
    Csharp: Csharp.val(),
    Swift: Swift.val(),
    Java: Java.val(),
    Ruby: Ruby.val(),
    php: php.val(),
    Perl: Perl.val(),
    r: r.val(),
    Assembly: Assembly.val(),
    html: html.val(),
    css: css.val(),
    Python: Python.val(),
    Objectivec: Objectivec.val(),
    Gender: Gender.val(),
    InterestedIn: InterestedIn.val(),
    FirstName: FirstName.val(),
    LastName: LastName.val()
}

submitSurvey(userData.Javascript, userData.C, userData.Csharp,
    userData.Java, userData.Ruby, userData.php, userData.Swift,
    userData.Cplusplus, userData.r, userData.Perl, userData.Assembly,
    userData.html, userData.css, userData.Python, userData.Objectivec,
    userData.Gender, userData.InterestedIn, userData.FirstName,
    userData.LastName);

});

function submitSurvey(Javascript, C, Csharp, Java, Ruby, 
php, Swift, Cplusplus, r, Perl, Assembly, html, css, 
Python, Objectivec, Gender, InterestedIn, FirstName,
LastName){
    $.post("api/memberprofile", {

    javascript: Javascript,
    CPlusPlus: Cplusplus,
    c: C,
    csharp: Csharp,
    java: Java,
    ruby: Ruby,
    PHP: php,
    swift: Swift,
    R: r,
    perl: Perl,
    assembly: Assembly,
    HTML: html,
    CSS: css,
    python: Python,
    objectivec: Objectivec,

    gender: Gender,
    gender_orientation: InterestedIn,
    first_name: FirstName,
    last_name: LastName
})
.then(function(){
    window.location.replace("/memberprofile")
})
.catch(function(err){
    console.log(err)
});

}


});
