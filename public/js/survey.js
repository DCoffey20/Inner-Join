$(document).ready(function () {

    const submitlang = $("#surveysubmit");

    let javascript = ''
    let cPlusPlus = ''
    let c = ''
    let cSharp = ''
    let swift = ''
    let java = ''
    let ruby = ''
    let php = ''
    let perl = ''
    let assembly = ''
    let html = ''
    let css = ''
    let python = ''
    let objectiveC = ''
    let r = ''
    

    submitlang.on("click", function (event) {
        // console.log("HELLO");
        event.preventDefault();
        javascript = $("input[id=JS]:checked");
        cPlusPlus = $("input[id=C++]:checked")
        c = $("input[id=c]:checked")
        cSharp = $("input[id=csharp]:checked")
        swift = $("input[id=Swift]:checked")
        java = $("input[id=Java]:checked")
        ruby = $("input[id=Ruby]:checked")
        php = $("input[id=PHP]:checked")
        perl = $("input[id=Perl]:checked")
        assembly = $("input[id=Assembly]:checked")
        html = $("input[id=HTML]:checked")
        css = $("input[id=CSS]:checked")
        python = $("input[id=Python]:checked")
        objectiveC = $("input[id=Objectivec]:checked")
        r = $("input[id=R]:checked")
        
        let userData = {
            member_id: [...window.location.split('/')].pop(),
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
