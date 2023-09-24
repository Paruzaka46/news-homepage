$("nav input").click((e) => {
  e.preventDefault();
  console.log("clicked");
  $(".back").addClass("wide");
});

$(".mobile-nav input").click((e) => {
  e.preventDefault();
  $(".back").removeClass("wide");
});
