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
    //title is tricky with the url
    let genre = $("#genreee2").val();
    let lang = $("#genreee3").val();
    let min = slider.value;
    let max = slider2.value;
    $("#gen").html("");
    let g = "https://ott-details.p.rapidapi.com/advancedsearch?"; 
    if(genre!=""){
        if(g=="https://ott-details.p.rapidapi.com/advancedsearch?"){
        g=g+"genre="+genre;
    }else{
        g=g+"&genre="+genre;
    }
    }
    if(lang!=""){
        if(g=="https://ott-details.p.rapidapi.com/advancedsearch?"){
        g=g+"language="+lang;
    }else{
        g=g+"&language="+lang;
    }
    }
    if(min!=1970 || max!=1971){
        if(g=="https://ott-details.p.rapidapi.com/advancedsearch?"){
        g=g+"start_year="+min+"&end_year="+max;
    }else{
        g=g+"&start_year="+min+"&end_year="+max;
    }
    }
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": g,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "fa2d7c4b71msha8057ea96460d3ap1364f5jsne637742ac4e4"
        }
    };
    
    $.ajax(settings).done(function (response) {
        for(let j=0;j<response.results.length;j++){
            if("imageurl" in response.results[j]){
            let tit = response.results[j].title;
            let sr=response.results[j].imageurl[0];
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
            let tit=response.results[j].title;
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