var answer = Math.floor((Math.random() * 100) + 1);
$(document).ready(function(){
    $("#result").hide();
    $("#lost").hide();
    $("#foolish").hide();
    $("#kush").hide();
    $("#soccer").hide();
    $("#tennis").hide();
    $("#script").click(function(){
        bob()
    });
    $("#ed").click(function(){
       $("#result").hide();
        $("#lost").hide();
        $("#foolish").hide();
        $("#kush").hide();
        $("#soccer").hide();
        $("#tennis").hide();
        var password=$("input").val();
        var number = parseInt(password);
        console.log(number);
        if(number > answer){
            console.log(number)
            $("#kush").show();
        }
        else if(number < answer){
            console.log(number);
            $("#soccer").show();
        }
        if(number === answer){
            console.log(number);
            $("#result").show();
        }    
        else if(isNaN(number)){
            console.log(number);
            $("#tennis").show();
        }
    });
    $
        
        
    })
function bob(){
     $("#result").hide();
     answer =Math.floor((Math.random() * 10) + 1);
   $("#lost").hide();
    $("#foolish").hide();
    $("#kush").hide();
    $("#soccer").hide();
    $("#tennis").hide();
    $("input").val("");
}
