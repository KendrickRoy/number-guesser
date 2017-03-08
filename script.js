$(document).ready(function(){
    $("#result").hide();
    $("#lost").hide();
    $("#foolish").hide();
    $("#kush").hide();
    $("#soccer").hide();
    $("#tennis").hide();
    $("button").click(function(){
       $("#result").hide();
        $("#lost").hide();
        $("#foolish").hide();
        $("#kush").hide();
        $("#soccer").hide();
        $("#tennis").hide();
        var password=$("input").val();
        var number = parseInt(password);
        console.log(number);
        if(number > 5){
            console.log(number)
            $("#kush").show();
        }
        else if(number < 5){
            console.log(number);
            $("#soccer").show();
        }
        if(number === 5){
            console.log(number);
            $("#result").show();
        }    
        else if(password !== number){
            console.log(number);
            $("#tennis").show();
        }
        
    });
    $
        
        
    })
