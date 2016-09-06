//Will return a list of all the titles//

// var $xhr = $.getJSON('https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//
//     var newsArticles =[];
//     data.articles.map(function(article){
//         // console.log(article.title);
//         // console.log(article.url);
//         // console.log(article.author);
//         // console.log(article.description);
//         // console.log(article.urlToImage);
//         // console.log(article.publishedAt);
//         newsArticles.push(article);
//     });
//     console.log(newsArticles);
// });

//Returns list of headlines for Independent Press
// var $xhr = $.getJSON('https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     //console.log(data);
//     data.articles.map(function(article){
//       console.log(article.title);
//       console.log(article.author);
//       console.log(article.description);
//       console.log(article.urlToImage);
//       console.log(article.url);
//       console.log(article.publishedAt);
//     })

// });

//reddit
var $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    var upliftingArticles = [];

    //$data is an array of the Articles
    var $data = data.data.children;
    console.log($data);
    var image = $data.preview;//.images.source.url;
    console.log(image);
    $data.map(function(article) {
      upliftingArticles.push(article);
     });
     //console.log(upliftingArticles.preview.images.source.url);
});



// function businessNamesAndRatings(result) {
//   return result.businesses.map(function(business) {
//       return {
//         name: business.name,
//         rating: business.rating
//       };
//   });
// }


// $.getJSON(
//        "http://www.reddit.com/r/pics.json?jsonp=?",
//        function foo(data) {
//          $.each(data.data.children.slice(0, 10),
//            function (i, post) {
//              $("#reddit-content").append( '<br>' + post.data.title );
//              $("#reddit-content").append( '<br>' + post.data.url );
//              $("#reddit-content").append( '<br>' + post.data.permalink );
//              $("#reddit-content").append( '<br>' + post.data.ups );
//              $("#reddit-content").append( '<br>' + post.data.downs );
//              $("#reddit-content").append( '<hr>' );
//            });
//        })
//      .success(function() { alert("second success"); })
//      .error(function() { alert("error"); })
//      .complete(function() { alert("complete"); });
//



// var $xhr = $.getJSON();
//     $xhr.done(function(data) {
//         if ($xhr.status !== 200) {
//             return;
//         }
//
//         if (data.Search === undefined) {
//           Materialize.toast(movieData.Error, 2000);
//           return;
//         }
//
//         movies = [];

        // for (var i = 0; i < movieData.Search.length; i++) {
        //   var id = movieData.Search[i].imdbID;
        //   var $idXhr = $.getJSON(`http://www.omdbapi.com/?i=${id}`);
        //   $idXhr.done(function(movie) {
        //     movies.push(movie);
        //     renderMovies();
        //   });
        // }
    //  });
    //   event.preventDefault();
    // }
