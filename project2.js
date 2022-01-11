function submit(){
    let gene = $("#genreee").val();
    $("#dd").html("The movies with title "+gene+" are:");
    $("#gen").html("");
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ott-details.p.rapidapi.com/search?title="+gene,
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