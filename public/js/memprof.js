$(document).ready(function(){

    const picupload = $("#picupload");
    const firstnameinput = $("#fninput");
    const lastnameinput = $("#lninput");
    const savename = $("#savename");
    const aboutInput = $("#aboutinput");
    const aboutsubmit = $("#aboutsubmit");
    const joininfo = $("#editjoininfo");

    const Javascript = $("#JSedit");
    const Cplusplus =  $("#C++edit");
    const C = $("#cedit");
    const Csharp = $("#csharpedit");
    const Swift = $("#Swiftedit");
    const Java = $("#Javaedit");
    const Ruby = $("#Rubyedit");
    const php = $("#PHPedit");
    const Perl = $("#Perledit");
    const Assembly = $("#Assemblyedit");
    const html = $("#HTMLedit");
    const css = $("#CSSedit");
    const Python = $("#Pythonedit");
    const Objectivec = $("#Objectivecedit");
    const r = $("#Redit");
    
    $.get("/api/memberprofile").then(function(data){

        $("#JSedit").checkbox(data.javascript);
        $("#C++edit").checkbox(data.CPlusPlus);
        $("#cedit").checkbox(data.c);
        $("#csharpedit").checkbox(data.csharp);
        $("#Swiftedit").checkbox(data.swift);
        $("#Javaedit").checkbox(data.java);
        $("#Rubyedit").checkbox(data.ruby);
        $("#PHPedit").checkbox(data.PHP);
        $("#Perledit").checkbox(data.perl);
        $("#Assemblyedit").checkbox(data.assembly);
        $("#Objectivecedit").checkbox(data.objectivec);
        // $("#HTMLedit").checkbox(data.HTML);
        // $("#CSSedit").checkbox(data.CSS);
        // $("#Pythonedit").checkbox(data.python);

    });


joininfo.on("click", function(event){
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
        Assembly: Assembly.val(),
        html: html.val(),
        css: css.val(),
        Python: Python.val(),
        Objectivec: objectivec.val()

    }
    if (!Javascript || !Cplusplus || !C || !Csharp || !Swift || !Java || 
    !Ruby || !php || !Perl || !Assembly || !html || !css || !Python || !Objectivec){
    return;
        }  
        
    $.put("api/memberprofile", {
        javascript: Javascript,
        c: C,
        csharp: Csharp,
        java: Java,
        ruby: Ruby,
        PHP: php,
        swift: Swift,
        CPlusPlus: Cplusplus,
        R: r,
        perl: Perl,
        assembly: Assembly,
        HTML: html,
        CSS: css,
        python: Python,
        objectivec: Objectivec
    }).catch(function(err){
        console.log(err);
    });
});
    

    savename.on("click", function(event){
        event.preventDefault();
        let userData = {
            firstname: firstnameinput.val().trim(),
            lastname: lastnameinput.val().trim()
        };
    
        if (!userData.firstnameinput || !userData.lastnameinput){
            return;
        }
    
        $.put("api/memberprofile", {
            firstname: firstname,
            lastname: lastname
        })
        .catch(function(err){
            console.log(err);
        });
    });
        

  

    aboutsubmit.on("click", function(event){
        event.preventDefault();
        let userData = {
            about: aboutInput.val().trim()
        };
    
        if (!userData.about){
            return;
        }
    
        $.put("api/memberprofile", {
            about: about
        })
        .catch(function(err){
            console.log(err);
        });
    });


});



