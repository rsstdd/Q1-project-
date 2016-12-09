// Returns list of headlines for Independent Press
var $xhr = $.getJSON('https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    data.articles.map(function(article){
      console.log(article.title);
      console.log(article.author);
      console.log(article.description);
      console.log(article.urlToImage);
      console.log(article.url);
      console.log(article.publishedAt);
    });

});

//reddit
var $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    var upliftingArticles = [];

    var $data = data.data.children;
    console.log(image);
    $data.map(function(article) {
      upliftingArticles.push(article);
      console.log(data.data.children[0].data.preview.images[0].source);
     });
     console.log(upliftingArticles);
});

$title.attr({
  'data-tooltip': article.title
});


      $title.text(article.title);

      var $image = $('<img class="activator">');

      $image.attr({
        src: article.urlToImage,
        alt: `${article.title} Image`
      });

      $content.append($title, $image);
      $card.append($content);

      $content.text('article.description');


      $image.append($cardImage);
      $cardImage.append($card);
      $cardTitle.append($cardReveal);
      $revealText.append($cardReveal);
      $cardReveal.append($card);
      $title.append($cardContent);
      $link.append($cardContent);
      $cardTitle.append($cardContent);
      $cardContent.append($card);
      $image.append($cardImage);
      $cardImage.append($card);
      $card.append($cardContent);


      function render() {
        $('#article-row').empty();
        for (var article of $newsArticles) {
          var $col = $('<div class="col s12">');
          var $card = $('<div class="card-image waves-effect waves-block waves-light">');
          var $cardImage = $('<div class="card-image waves-effect waves-block waves-light">');
          var $image = $('<img class="activator">');
          var $cardContent = $('<div class="card-content center">');
          var $title = $('<span class="card-title activator grey-text text-darken-4"></i class="material-icons-right>more_vert');
          var $link = $('<p><a href="">');
          var $cardReveal = $('<div class="card-reveal">');
          var $cardTitle = $('<span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>');
          var $revealText = $('<p>');


          $title.text = article.title;
          $image.attr({
            src: article.urlToImage,
            alt: `${article.title} Image`
          }).height('150px').width('');

          console.log($title);
          $cardTitle.text(article.title);

          $cardImage.append($image);
          $card.append($cardTitle);
          $cardReveal.append($cardTitle);
          $cardReveal.append($revealText);
          $card.append($cardReveal);
          $cardContent.append($title);
          $cardContent.append($link);
          $cardContent.append($cardTitle);
          $card.append($cardContent);
          $cardImage.append($image);
          $card.append($cardImage);
          $card.append($cardContent);

          $col.append($card);
          $('#article-row').append($col);
        }
      }



      function renderCarousel() {

        $('#articles').empty();

        var $firstDiv = $('<div class="carousel carousel-slider center" data-indicators="true">');
        $('#articles').append($firstDiv).show();

        for (var article of $newsArticles) {
          var $carouselBtnDiv = $('<div class="carousel-fixed-item center"></div>');//this is appending
          var $carouselBtn = $('<a class="btn waves-effect white grey-text darken-text-2">Select</a>');
          var $carouselPanel = $('<div class="carousel-item red white-text"></div>');
          var $title = $('<h2></h2>');
          var $description = $('<p></p>');


          $carouselBtn.text(article.title);
          $carouselBtn.attr('href', article.url);
          $carouselBtnDiv.append($carouselBtn);

          $title.text(article.title);
          $description.text(article.description);
          $carouselPanel.append($title);
          $carouselPanel.append($description);
          $firstDiv.append($carouselPanel);
          $firstDiv.append($carouselPanel);
          $firstDiv.append($carouselBtnDiv);
        }
      }




        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }
            var upliftingArticles = [];
            var $data = data.data.children;
            $data.map(function(article) {
            upliftingArticles.push(article);
             });
           });



        function renderUplifting() {
               $('#article-row').empty();
               for (var article of $upliftingArticles) {
                 var $col = $('<div class="col s6">');
                 var $card = $('<div class="card-image card-small waves-effect waves-block waves-light">');
                 var $cardImage = $('<div class="card-image waves-effect waves-block waves-light center">');
                 var $image = $('<img class="activator">');
                 var $cardContent = $('<div class="card-content center">');
                 var $title = $('<span class="card-title activator grey-text text-darken-4"></i class="material-icons-right>more_vert');
                 var $link = $('<p><a href="">');
                 var $cardReveal = $('<div class="card-reveal">');
                 var $cardTitle = $('<span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>');
                 var $revealText = $('<p>');

                 $title.text = $data.title;
                 $image.attr({
                   src: data.data.children[0].data.preview.images[0].source,
                   alt: `${article.title} Image`,
                   href: $data.url
                 }).height('150px');

                 $cardTitle.text($data.title);

                 $cardImage.append($image);
                 $card.append($cardTitle);
                 $cardReveal.append($cardTitle);
                 $cardReveal.append($revealText);
                 $card.append($cardReveal);
                 $cardContent.append($title);
                 $cardContent.append($link);
                 $cardContent.append($cardTitle);
                 $card.append($cardContent);
                 $cardImage.append($image);
                 $card.append($cardImage);
                 $card.append($cardContent);

                 $col.append($card);

                 $('#article-row').append($col);
               }
             }

        function validateUplifting(event) {
           var $val = $('#source').val();
           var $target = $(event.target);
           var $articlerow = $('#article-row');
           var $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

           $xhr.done(function(data) {
               if ($xhr.status !== 200) {
                   return;
               }
               var upliftingArticles = [];
               var $data = data.data.children;
               var image = data.data.children[0].data.preview.images[0].source;//this finds the image
               $data.map(function(article) {
                 upliftingArticles.push(article);
                });
                renderUplifting();
              });
               event.preventDefault();
           }


           // function renderUplifting() {
               $('#article-row').empty();
               for (var article of $upliftingArticles) {
                 var $col = $('<div class="col s6">');
                 var $card = $('<div class="card-image card-small waves-effect waves-block waves-light">');
                 var $cardImage = $('<div class="card-image waves-effect waves-block waves-light center">');
                 var $image = $('<img class="activator">');
                 var $cardContent = $('<div class="card-content center">');
                 var $title = $('<span class="card-title activator grey-text text-darken-4"></i class="material-icons-right>more_vert');
                 var $link = $('<p><a href="">');
                 var $cardReveal = $('<div class="card-reveal">');
                 var $cardTitle = $('<span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>');
                 var $revealText = $('<p>');

                 $title.text = $data.title;
                 $image.attr({
                   src: data.data.children[0].data.preview.images[0].source,
                   alt: `${article.title} Image`,
                   href: article.url
                 }).height('150px');

                 $cardTitle.text($data.title);
                //  $revealText.text($data.description);

                 $cardImage.append($image);
                 $card.append($cardTitle);
                 $cardReveal.append($cardTitle);
                 $cardReveal.append($revealText);
                 $card.append($cardReveal);
                 $cardContent.append($title);
                 $cardContent.append($link);
                 $cardContent.append($cardTitle);
                 $card.append($cardContent);
                 $cardImage.append($image);
                 $card.append($cardImage);
                 $card.append($cardContent);

                 $col.append($card);

                 $('#article-row').append($col);
               }
             }


             var $data = data.data.children;
             var image = data.data.children[0].data.preview.images[0].source;//this finds the image
             <option value="bild">Bild</option>
             <option value="bloomberg">Bloomberg</option>
             <option value="reuters">Reuters</option>
             <option value="bbc-news">BBC</option>




             (function() {
               'use strict';
               let $newsArticles = [];
               let $upliftingArticles = [];

             function validate(event) {
               let $val = $('#source').val();
               let $target = $(event.target);
               let $articlerow = $('#article-row');

               if ($val === 'select') {
                 Materialize.toast('Select An Agency', 2000);
                 $('#source').addClass('invalid');
                 return;
                 } else {

                 let $xhr = $.getJSON(`https://newsapi.org/v1/articles?source=${$val}&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d`);
                 $xhr.done(function(data) {
                   if ($xhr.status !== 200) {
                       return;
                   }
                   data.articles.map(function(article) {
                       $newsArticles.push(article);
                   });
                   render();
                   });
                 }
                 event.preventDefault();
               }

               function validateUplifting(event) {
                  let $val = $('#source').val();
                  let $target = $(event.target);
                  let $articlerow = $('#article-row');
                  let $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

                  $xhr.done(function(data) {
                      if ($xhr.status !== 200) {
                          return;
                      }
                      data.data.children.map(function(article) {
                        $upliftingArticles.push(article);
                       });
                       renderUplifting();
                     });
                     event.preventDefault();
               }

               function renderUplifting() {
                 $('#article-row').empty();
                 for (let article of $upliftingArticles) {
                   let $col = $('<div class="col s12 m6">');
                   let $cardDiv = $('<div class="card small">');
                   let $card = $('<div class="card-image waves-effect waves-block waves-light">');
                   $('#article-row').append($col);
                   $col.append($cardDiv);
                   $cardDiv.append($card);

                   let $upliftImg = $('<img class="activator">');
                   $upliftImg.attr({
                     src: article.data.preview.images[0].source.url,
                     alt: `${article.data.title} Image`,
                   }).height('350px');
                   $card.append($upliftImg);

                   let $cardContent = $('<div class="card-content center">');
                   let $titleSpan = $(`<p class="card-title activator grey-text text-darken-4 truncate "> ${article.data.title} </p><i class="material-icons right">more_vert</i>`);
                   let $read = $(`<p><a href="${article.data.url}" target="_blank">Read the Full article here</a></p>`);
                   $cardDiv.append($cardContent);
                   $cardContent.append($titleSpan);
                   $cardContent.append($read);

                   let $cardReveal = $('<div class="card-reveal">');
                   let $revealTitleSpan = ('<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>');
                   let $revealText = $(`<h5>${article.data.title}</h5>`);
                   $cardReveal.append($revealTitleSpan);
                   $cardDiv.append($cardReveal);
                   $cardReveal.append($revealText);
                   $cardReveal.append($read);
                    }
                 }

               function render() {
                 $('#article-row').empty();
                 for (const article of $newsArticles) {
                   let $col = $('<div class="col s12 m6">');
                   let $cardDiv = $('<div class="card small">');
                   let $card = $('<div class="card-image waves-effect waves-block waves-light">');
                   $('#article-row').append($col);
                   $col.append($cardDiv);
                   $cardDiv.append($card);

                   let $img = $('<img class="activator src=">');
                   $img.attr({
                     src: article.urlToImage,
                     alt: `${article.title} Image`,
                   }).height('350px');
                   $card.append($img);

                   let $cardContent = $('<div class="card-content center">');
                   $cardDiv.append($cardContent);
                   let $titleSpan = $(`<span class="card-title activator grey-text text-darken-4">${article.title}<i class="material-icons right">more_vert</i>`);
                   $cardContent.append($titleSpan);
                   let $link = $(`<p><a href="${article.url}" target="_blank">Read the full article here</a></p>`);
                   $cardContent.append($link);

                   let $cardReveal = $('<div class="card-reveal">');
                   let $revealTitleSpan = ('<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>');
                   $cardDiv.append($cardReveal);
                   $cardReveal.append($revealTitleSpan);

                   let $articleTitle = $(`<h5>${article.title}</h5>`)
                   let $revealText = $(`<h6>${article.description}</h6>`);
                   let $revealAuthor = $(`<p>${article.author}</a></p>`);
                   let $read = $(`<p><a href="${article.url}" target="_blank">Read the Full article here</a></p>`);
                   $cardReveal.append($articleTitle);
                   $cardReveal.append($revealText);
                   $cardReveal.append($revealAuthor);
                   $cardReveal.append($read);
                 }
               }

               $('select').material_select();
               $('#newsBtn').on('click', validate);
               $('#upLiftingBtn').on('click', validateUplifting);
             })();
