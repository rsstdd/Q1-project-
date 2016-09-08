(function() {
  'use strict';

  $('.carousel.carousel-slider').carousel({full_width: true});
  $('select').material_select();
  $('.button-collapse').sideNav();



  $('#source').on('blur', validate);
  $('button').on('click', validate);
  $('#upliftingBtn').on('click', validate);

  $('.tooltipped').tooltip({delay: 50});


  var $newsArticles = [];
  var $upliftingArticles = [];


  //Will return an array of all the top headlines from selected source//
//associated-press
function validate(event) {
  var $val = $('#source').val();
  var $target = $(event.target);
  var $articlerow = $('#article-row');

  if ($val === 'select') {
    Materialize.toast('Select An Agency', 2000);
    $('#source').addClass('invalid');
    return;
  } else if ($val === 'uplifting-news') {

    var $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');
    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }
      var $upliftingArticles = [];

      //$data is an array of the Articles
      var $data = data.data.children;
      console.log($data);
      var image = data.data.children[0].data.preview.images[0].source;//this finds the image
      console.log(image);
      $data.map(function(article) {
        $upliftingArticles.push(article);
       });
       //console.log(upliftingArticles.preview.images.source.url);
    });
  } else {
    var $xhr = $.getJSON(`https://newsapi.org/v1/articles?source=${$val}&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d`);

      $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        $newsArticles =[];
        data.articles.map(function(article) {
            $newsArticles.push(article);
        });
        render();
      });
      event.preventDefault();
    }
  }
  function render() {

    $('#articles').empty();

    var $firstDiv = $('<div class="carousel carousel-slider center" data-indicators="true">');
    $('#articles').append($firstDiv);

    for (var article of $newsArticles) {
      var $carouselBtnDiv = $('<div class="carousel-fixed-item center">');//this is appending
      var $carouselBtn = $('<a class="btn waves-effect white grey-text darken-text-2">Select</a>');
      var $carouselImage = $('<img>');
      var $carouselPanel = $('<div class="carousel-item red white-text">');
      var $title = $('<h2>');
      var $description = $('<p>');


      $carouselBtn.text(article.title);
      $carouselBtn.attr('href', article.url);
      $carouselBtnDiv.append($carouselBtn);

      $carouselImage.attr('src', article.urlToImage);
      $carouselBtnDiv.append($carouselImage);
      // $carouselImage.attr('src', article.urlToImage);
      // $carouselPanel.attr('href', article.url);



      $title.text(article.title);
      $description.text(article.description);
      $carouselPanel.append($title);
      $carouselPanel.append($description);
      $firstDiv.append($carouselPanel);
      $firstDiv.append($carouselPanel);
      $firstDiv.append($carouselBtnDiv);


    }

  }
})();
