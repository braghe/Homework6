 $(document).ready(function(){
    $("#submitBtn").click(function(){
        var city = $("#city").val();
        if(city != ""){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5//weather?q=" + city + "&units= imperial" + "&APPID=81e9101aa1d2d23f9cf18f880a4c3d29" ,
                type :"GET",
                dataType: "json",
                success: function(response){
                    var result= display(response);
                    $("#display").html(result);
                    $("#city").val('');
                }
            });
        }else{
            $("error").html('field required');
        }
    });
 });
 function display(response){
       return   "<h2> "+ response.name +" <img src='http://openweathermap.org/img/wn/"+response.weather[0].icon+".png'> " +"</h2>" +
                "<br>Temperature: " + response.main.temp +" &deg;F</br> " +
                "<br>Humidity: " + response.main.humidity +" %</br> " +
                "<br>Speed: " + response.wind.speed +" MPH</br> "              
 };
                
 
 
    

    
    

