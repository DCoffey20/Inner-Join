

$(document).ready(function(){
    const name = $(".name");
    const about = $(".about");
    const email = $(".email");
    const languages = $(".langs")
    const image = $("");


$.get("/api/members/:id/matches").then(function(data){
name.text([data.first_name + " " + data.last_name]),
about.text(data.about_me),
email.text(data.email),
image.data("")
});


});