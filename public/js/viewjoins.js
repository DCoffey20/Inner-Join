

$(document).ready(function () {
    const name = $(".name");
    const about = $(".about");
    const email = $(".email");
    const languages = $(".langs")
    const image = $("");
    let logoutUser = $(".logout");
    let deleteUser = $(".delete");
    let memberProfilePage = $(".profile");


    $.get("/api/members/:id/matches").then(function (data) {
        name.text([data.first_name + " " + data.last_name]),
            about.text(data.about_me),
            email.text(data.email),
            image.data("")
    });

    logoutUser.on("click", function (event) {
        event.preventDefault();
        window.location.replace("/");
    });

    deleteUser.on("click", function (event) {
        event.preventDefault();
        window.location.replace("/")
    });

    memberProfilePage.on("click", function (event) {
        event.preventDefault();
        window.location.replace("/memberprofile")
    });

});