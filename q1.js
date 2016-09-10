(function() {
  'use strict';
  let $newsArticles = [];
  let $upliftingArticles = [];

  //Will return an array of all the top headlines from selected source//
function validate(event) {
  let $val = $('#source').val();
  let $target = $(event.target);
  let $articlerow = $('#article-row');

  if ($val === 'select') {
    Materialize.toast('Select An Agency', 5000);
    $('#source').addClass('invalid');
    return;
    } else {

    let $xhr = $.getJSON(`https://newsapi.org/v1/articles?source=${$val}&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d`);
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
    }
    event.preventDefault();
  }

  function validateUplifting(event) {
     let $val = $('#source').val();
     let $target = $(event.target);
     let $articlerow = $('#article-row');
     const $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

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
      //create col; append to row; create card; append to col//
      let $col = $('<div class="col s12 m6">');
      let $cardDiv = $('<div class="card small">');
      let $card = $('<div class="card-image waves-effect waves-block waves-light">');
      $('#article-row').append($col);
      $col.append($cardDiv);
      $cardDiv.append($card);

      //create img; assign url and alt as attr; append to img/
      let $img = $('<img class="activator src=">');
      $img.attr({
        src: article.urlToImage,
        alt: `${article.title} Image`,
      }).height('350px');
      $card.append($img);

      //create cardContent; create title; append to card//
      //assign article title to titleSpan; append title//
      let $cardContent = $('<div class="card-content center">');
      $cardDiv.append($cardContent);
      let $titleSpan = $(`<span class="card-title activator grey-text text-darken-4">${article.title}<i class="material-icons right">more_vert</i>`);
      $cardContent.append($titleSpan);
      //<a href="${article.url}" target="_blank">
      //create link; assign attr; assign text; apped to cardContent//
      let $link = $(`<p><a href="${article.url}" target="_blank">Read the full article here</a></p>`);
      $cardContent.append($link);

      //create cardRevealDiv; append to $card;
      let $cardReveal = $('<div class="card-reveal">');
      $cardDiv.append($cardReveal);
      let $revealTitleSpan = ('<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>');
      $cardReveal.append($revealTitleSpan);

      let $articleTitle = $(`<h5>${article.title}</h5>`)
      let $revealText = $(`<h6>${article.description}</h6>`);
      // $revealText.text(article.description);
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
