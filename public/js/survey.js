$(document).ready(function () {

    const submitSurvey = $("#surveysubmit");

    const javascript ='';
    const cPlusPlus = '';
    const c = '';
    const cSharp = '';
    const swift = '';
    const java = '';
    const ruby = '';
    const php = '';
    const perl = '';
    const assembly = '';
    const html = '';
    const css = '';
    const python = '';
    const objectiveC = '';
    const r = '';

    submitSurvey.on("click", function (event) {

        event.preventDefault();

        javascript = $("input[name=JS]:checked");
        cPlusPlus = $("input[name=C++]:checked");
        c = $("input[name=c]:checked");
        cSharp = $("input[name=csharp]:checked");
        swift = $("input[name=swift]:checked");
        java = $("input[name=Java]:checked");
        ruby = $("input[name=Ruby]:checked");
        php = $("input[name=PHP]:checked");
        perl = $("input[name=Perl]:checked");
        assembly = $("input[name=Assembly]:checked");
        html = $("input[name=HTML]:checked");
        css = $("input[name=CSS]:checked");
        python = $("input[name=Python]:checked");
        objectiveC = $("input[name=Objectivec]:checked");
        r = $("input[name=R]:checked");

        console.log(html);

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
