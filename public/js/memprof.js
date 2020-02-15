$(document).ready(function(){

    const picupload = $("#picupload");
    const firstnameinput = $("#fninput");
    const lastnameinput = $("#lninput");
    const savename = $("#savename");
    const aboutInput = $("#aboutinput");
    const aboutsubmit = $("#aboutsubmit");
    
    
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

