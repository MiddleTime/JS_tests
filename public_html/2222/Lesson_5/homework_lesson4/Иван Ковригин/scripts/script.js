'use strict';

$(document).ready(function () {

  $('.tab').on('click', function () {
    $('.selected-tab').removeClass('selected-tab');
    $('.selected-content').removeClass('selected-content');
    let $index = $(this).index();
    $(this).addClass('selected-tab');
    $('.content:eq(' + $index + ')').addClass('selected-content');
  });


  //----------------------------------------------------------------


  $('#input-form').click(function () {

    if (event.target.tagName !== 'INPUT') return;
    $('#input-form').on('keyup', function () {
      let $inputCity = $(this).val();
      if ($inputCity.length >= 3) {
        $.getJSON('./json/cities.json', function (data) {
          let $maskCities = '';
          $('option').remove();
          for (let i = 0; i < data.city.length; i++) {
            if (data.city[i].includes($inputCity)) {
              $maskCities += '<option value="' + data.city[i] + '">';
            }
          }
          $('#mask').append($maskCities);

          $('#input-form').change(function () {
            $('#input-form').off('keyup');
          });
        });
      }
    });
  });


});