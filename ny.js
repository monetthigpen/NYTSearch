$( document ).ready(function() {
    console.log( "ready!" );

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var query = "lady gaga"
    url += '?' + $.param({
        'api-key': "f6b4a928541d4f01a9ebfdf2b35e66a5",
        'q': query
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result.response.docs);
        
        var articleCount = 5;
        // articleCount will be what the user inputs as how many articles they want to see
        for (let i = 1; i < articleCount; i++) {
            console.log('article' + i);

            let articleDiv = $("<div>");
            let article = result.response.docs[i].snippet;

            console.log(article);

            let li = $("<li>").text("Snippet: " + article);

            articleDiv.prepend(li);
            
            $("#results").prepend(articleDiv);











            
        }





    }).fail(function (err) {
        throw err;
    });
        
});


