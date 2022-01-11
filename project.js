const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ott-details.p.rapidapi.com/getParams?param=genre",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ott-details.p.rapidapi.com",
		"x-rapidapi-key": "fa2d7c4b71msha8057ea96460d3ap1364f5jsne637742ac4e4"
	}
    
};

$.ajax(settings).done(function (response) {
	for(let i=0;i<response.length;i++){
        let h = "<li class='hom'>"+response[i]+"</li>";
        $("#gen").append(h);
    }
});
function submit(){
    let gene = $("#genreee").val();
    $("#tj").html("The movies in the "+gene+" genre are:");
    $("#gen").html("");
    const settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://ott-details.p.rapidapi.com/advancedsearch?genre="+gene,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "fa2d7c4b71msha8057ea96460d3ap1364f5jsne637742ac4e4"
        }
    };
    $.ajax(settings2).done(function (response2) {
        for(let j=0;j<response2.results.length;j++){
            let sr=response2.results[j].imageurl[0];
            let tit = response2.results[j].title;
            let rel = response2.results[j].released;
            let syn = response2.results[j].synopsis;
            let h2 = "<li class='hom'>"+"<img src="+sr+" alt='Image Not Available' width=200 height=300>"+"</li>";
            let t = "<li class='title'>"+"Title:"+tit+"<br>";
            let r2 = "Release Year:"+rel+"<br>";
            let sy = "Synopsis:"+syn+"</li>";
            let f = h2+t+r2+sy;
            $("#gen").append(f);
            
        }
    });
}