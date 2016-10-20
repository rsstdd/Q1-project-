(function() {
  'use strict';
  let $upliftingArticles = [];
  let $newsArticles = [];


  function validate(event) {
    const val = $('#source').val();
    if (val === 'select') {
      Materialize.toast('Select An Agency', 5000);
      $('#source').addClass('invalid');

      return;
    } else {
      const $xhr = $.getJSON(`https://newsapi.org/v1/articles?source=${val}&sortBy=top&apiKey=7ac8963fbab04b74bf07af53f91e3d0d`);

      $xhr.done((data) => {
        if ($xhr.status !== 200) {

          return;
        }
        data.articles.map((article) => {
          $newsArticles.push(article);

          return $newsArticles;
        });
        render();
      });
    }
    event.preventDefault();
  };

  function validateUplifting(event) {
    const $xhr = $.getJSON('https://www.reddit.com/r/UpliftingNews.json');

    $xhr.done((data) => {
      if ($xhr.status !== 200) {

        return Materialize.toast('Select a Valid Source');
      }
      data.data.children.map((article) => {
        $upliftingArticles.push(article);

        return $upliftingArticles;
      });
      renderUplifting();
    });
    event.preventDefault();
  };

  function renderUplifting() {
    $('#article-row').empty();
    $('body').css('background-image', 'none')
    for (const article of $upliftingArticles) {
      const $col = $('<div class="col s12 m12 l6">');
      const $cardDiv = $('<div class="card small">');
      const $card = $('<div class="card-image waves-effect waves-block waves-light">');
      const $upliftImg = $('<img class="activator">');
      const $cardContent = $('<div class="card-content center">');
      const $titleSpan = $(`<p class="card-title activator grey-text text-darken-4 truncate "> ${article.data.title} </p>\
        <i class="material-icons right">more_vert</i>`);
      const $read = $(`<p><a href="${article.data.url}" target="_blank">Read the Full article here</a></p>`);
      const $cardReveal = $('<div class="card-reveal">');
      const $revealTitleSpan = ('<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>');
      const $revealText = $(`<h5>${article.data.title}</h5>`);

      $upliftImg.attr({
        src: article.data.preview.images[0].source.url,
        alt: `${article.data.title} Image`
      }).height('300px');

      $('#article-row').append($col);
      $col.append($cardDiv);
      $cardDiv.append($card);
      $card.append($upliftImg);
      $cardDiv.append($cardContent);
      $cardContent.append($titleSpan);
      $cardContent.append($read);
      $cardReveal.append($revealTitleSpan);
      $cardDiv.append($cardReveal);
      $cardReveal.append($revealText);
      $cardReveal.append($read);
    }
  };

  function render() {
    $('#article-row').empty();
    $('body').css('background', 'none')
    for (const article of $newsArticles) {
      const $col = $('<div class="col s12 m12 l6">');
      const $cardDiv = $('<div class="card small">');
      const $card = $('<div class="card-image waves-effect waves-block waves-light">');
      const $img = $('<img class="activator src=">');
      const $cardContent = $('<div class="card-content center">');
      const $titleSpan = $(`<span class="card-title activator grey-text text-darken-4">${article.title}\
        <i class="material-icons right">more_vert</i>`);
      const $link = $(`<p><a href="${article.url}" target="_blank">Read the full article here</a></p>`);
      const $cardReveal = $('<div class="card-reveal">');
      const $revealTitleSpan = ('<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>');
      const $articleTitle = $(`<h5>${article.title}</h5>`);
      const $revealText = $(`<h6>${article.description}</h6>`);
      const $revealAuthor = $(`<p>${article.author}</a></p>`);
      const $read = $(`<p><a href="${article.url}" target="_blank">Read the Full article here</a></p>`);

      $img.attr({
        src: article.urlToImage,
        alt: `${article.title} Image`
      }).height('350px');

      $('#article-row').append($col);
      $col.append($cardDiv);
      $cardDiv.append($card);
      $card.append($img);
      $cardDiv.append($cardContent);
      $cardContent.append($titleSpan);
      $cardContent.append($link);
      $cardDiv.append($cardReveal);
      $cardReveal.append($revealTitleSpan);
      $cardReveal.append($articleTitle);
      $cardReveal.append($revealText);
      $cardReveal.append($revealAuthor);
      $cardReveal.append($read);
    }
  };

  $('select').material_select();
  $('#newsBtn').on('click', validate);
  $('#upLiftingBtn').on('click', validateUplifting);
})();
