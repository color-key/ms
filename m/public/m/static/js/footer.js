window.onload = function () {
  $('a').each(function () {
      $(this).attr('href', 'javascript:void(0);').attr('onclick', 'openK(this);return false;');
  });
}