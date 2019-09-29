function scrollToView(id) {
  var offset = -Math.abs(document.getElementById('navbar').offsetHeight);
  console.log(offset)

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top + offset
    },
    1000
  );
}
