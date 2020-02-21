

// function engStartup() {
//     var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=hh8LJpb49GiBE4VMM6TKst92CHnrv9cy";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(response);
//             myText = $("<div class='card-columns'></div>"); // reset div with articles
//             for (var j = 0; j < 10; j++) {
//                 var headline = response.results[j].title;
//                 var url = response.results[j].url;
//                 var author = response.results[j].byline;
//                 var content = response.results[j].abstract;
//                 renderHTML(url, headline, author, content);
//             };
//         })
// }
