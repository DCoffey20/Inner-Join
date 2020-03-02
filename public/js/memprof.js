$(document).ready(function () {

    const uploadWidget = $("#upload_widget");
    const firstnameinput = $("#fninput");
    const lastnameinput = $("#lninput");
    const savename = $("#savename");
    const aboutInput = $("#aboutinput");
    const aboutsubmit = $("#aboutsubmit");
    const joininfo = $("#editjoininfo");
    let logoutUser = $(".logout");
    let deleteUser = $(".delete");
    let viewJoins = $(".vyj");

    const javascript = $("#JSedit");
    const cPlusPlus = $("#CPlusPlusedit");
    const c = $("#cedit");
    const cSharp = $("#csharpedit");
    const swift = $("#Swiftedit");
    const java = $("#Javaedit");
    const ruby = $("#Rubyedit");
    const php = $("#PHPedit");
    const perl = $("#Perledit");
    const assembly = $("#Assemblyedit");
    const html = $("#HTMLedit");
    const css = $("#CSSedit");
    const python = $("#Pythonedit");
    const objectiveC = $("#Objectivecedit");
    const r = $("#Redit");

    $.get("/api/members").then(function (data) {
        console.log(data + "remember to delete this");
        firstnameinput.attr("placeholder", data.data[0].first_name);
        lastnameinput.attr("placeholder", data.data[0].last_name);
        aboutInput.attr("placeholder", data.data[0].about_me);
        // javascript.checkbox(data.javascript);
        // cPlusPlus.checkbox(data.cPlusPlus);
        // c.checkbox(data.c);
        // cSharp.checkbox(data.csharp);
        // swift.checkbox(data.swift);
        // java.checkbox(data.java);
        // ruby.checkbox(data.ruby);
        // php.checkbox(data.php);
        // perl.checkbox(data.perl);
        // assembly.checkbox(data.assembly);
        // objectiveC.checkbox(data.objectiveC);
        // html.checkbox(data.html);
        // css.checkbox(data.css);
        // python.checkbox(data.python);
        // firstnameinput.val(data.first_name);

    });


    joininfo.on("click", function (event) {
        event.preventDefault();
        let userData = {
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
            objectiveC: objectiveC.val()

        }
        if (!javascript || !cPlusPlus || !c || !cSharp || !swift || !java ||
            !ruby || !php || !perl || !assembly || !html || !css || !python || !objectiveC) {
            return;
        }

        updateJoinInfo(userData.javascript, userData.c, userData.cSharp,
            userData.java, userData.ruby, userData.php, userData.swift,
            userData.cPlusPlus, userData.r, userData.perl, userData.assembly,
            userData.html, userData.css, userData.python, userData.objectiveC);

    });

    function updateJoinInfo(javascript, c, cSharp, java, ruby,
        php, swift, cPlusPlus, r, perl, assembly, html, css,
        python, objectiveC) {
        $.put("/api/members/languages_edit", {
            javascript: javascript,
            c: c,
            csharp: cSharp,
            java: java,
            ruby: ruby,
            php: php,
            swift: swift,
            cPlusPlus: cPlusPlus,
            r: r,
            perl: perl,
            assembly: assembly,
            html: html,
            css: css,
            python: python,
            objectiveC: objectiveC,
            member_id: req.user.id
        }).catch(function (err) {
            console.log(err);
        });


    }

    savename.on("click", function (event) {
        event.preventDefault();
        let userData = {
            first_name: firstnameinput.val().trim(),
            last_name: lastnameinput.val().trim()
        };

        if (!userData.firstnameinput || !userData.lastnameinput) {
            return;
        }

        updateName(userData.first_name, userData.last_name);

    });

    function updateName(first_name, last_name) {
        $.put("api/members", {
            first_name: first_name,
            last_name: last_name
        })
            .catch(function (err) {
                console.log(err);
            });

    }




    aboutsubmit.on("click", function (event) {
        event.preventDefault();
        let userData = {
            about: aboutInput.val().trim()
        };

        if (!userData.about) {
            return;
        }

        $.put("api/members", {
            about: about
        })
            .catch(function (err) {
                console.log(err);
            });
    });

    console.log('CLOUDINARYYYyyyyyyy');
    const myWidget = cloudinary.createUploadWidget({
        cloudName: 'innerjoindb',
        uploadPreset: 'sample'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            let newProfilePicture = {
                url: result.info.url,
            }
            $.post("api/members/profilePictures", {
                url: newProfilePicture.url
            }).fail(function (err) {
                console.log(err);
                });
        }
    }
    )

        console.log("upload widget", uploadWidget);
        uploadWidget.on("click", function (event) {
            console.log("HI");
            event.preventDefault();
            myWidget.open();
        });

        
        logoutUser.on("click", function (event) {
            event.preventDefault();
            window.location.replace("/");
        });

        deleteUser.on("click", function (event){
            event.preventDefault();
            window.location.replace("/")
        });

        viewJoins.on("click", function (event){
            event.preventDefault();
            window.location.replace("/viewjoins")
        });

    function postProfilePicUrl(response){

    }
});



