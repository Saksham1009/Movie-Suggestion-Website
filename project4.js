var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
function submit(){
    let min=slider.value;
    let max=slider2.value;
    $("#dd").html("The Movies/Shows we found from "+min+" to "+max+" are:");
    $("#gen").html("");
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ott-details.p.rapidapi.com/advancedsearch?start_year="+min+"&end_year="+max,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "fa2d7c4b71msha8057ea96460d3ap1364f5jsne637742ac4e4"
        }
    };
    
    $.ajax(settings).done(function (response) {
        for(let j=0;j<response.results.length;j++){
            if("imageurl" in response.results[j]){
            let sr=response.results[j].imageurl[0];
            let tit = response.results[j].title;
            let rel = response.results[j].released;
            let syn = response.results[j].synopsis;
            let h2 = "<li class='hom'>"+"<img src="+sr+" alt='Image not available' width=200 height=300>"+"</li>";
            let t = "<li class='title'>"+"Title:"+tit+"<br>";
            let r2 = "Release Year:"+rel+"<br>";
            let sy = "Synopsis:"+syn+"</li>";
            let f = h2+t+r2+sy;
            $("#gen").append(f);
            }else{
            //let sr=response.results[j].imageurl[0];
            let tit = response.results[j].title;
            let rel = response.results[j].released;
            let syn = response.results[j].synopsis;
            let h2 = "<li class='hom'>"+"<img src=''  alt='Image not available' width=200 height=300>"+"</li>";
            let t = "<li class='title'>"+"Title:"+tit+"<br>";
            let r2 = "Release Year:"+rel+"<br>";
            let sy = "Synopsis:"+syn+"</li>";
            let f = h2+t+r2+sy;
            $("#gen").append(f);
            }
        }
    });
}