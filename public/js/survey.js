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
            objectiveC: objectiveC.val(),
            member_id: req.user.id
        }

        submitSurvey(userData.javascript, userData.c, userData.cSharp,
            userData.java, userData.ruby, userData.php, userData.swift,
            userData.cPlusPlus, userData.r, userData.perl, userData.assembly,
            userData.html, userData.css, userData.python, userData.objectiveC, userData.member_id);

    });

    function submitSurvey(javascript, c, cSharp, java, ruby,
        php, swift, cPlusPlus, r, perl, assembly, html, css,
        python, objectiveC, member_id) {
        $.post("/api/members/languages", {
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
            objectiveC: objectiveC,
            member_id: member_id
        })
            .then(function () {
                window.location.replace("/memprof")
            })
            .catch(function (err) {
                console.log(err)
            });

    }


});
