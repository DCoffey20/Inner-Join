$(document).ready(function () {

    const submitSurvey = $("#surveysubmit");

    const javascript = $("#JS");
    const cPlusPlus = $("#C++");
    const c = $("#c");
    const cSharp = $("#csharp");
    const swift = $("#swift");
    const java = $("#Java");
    const ruby = $("#Ruby");
    const php = $("#PHP");
    const perl = $("#Perl");
    const assembly = $("#Assembly");
    const html = $("#HTML");
    const css = $("#CSS");
    const python = $("#Python");
    const objectiveC = $("#Objectivec");
    const r = $("#R");

    submitSurvey.on("click", function (event) {
        console.log("HELLO");
        event.preventDefault();
        let userData = {
            member_id: req.user.id,
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
        }

        submitSurvey(userData.member_id, userData.javascript, userData.c, userData.cSharp,
            userData.java, userData.ruby, userData.php, userData.swift,
            userData.cPlusPlus, userData.r, userData.perl, userData.assembly,
            userData.html, userData.css, userData.python, userData.objectiveC);

    });

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


});
