var navbar = $("#navbar");
var about = $("#about");

$(window).on("scroll", function () {
  let introHeight = $("#intro").height();
  let scrolled = $(window).scrollTop();

  if (scrolled >= introHeight) {
    navbar.addClass("sticky");
    about.addClass("move");
  } else {
    navbar.removeClass("sticky");
    about.removeClass("move");
  }
});

$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();
  let marginAboutSection = parseInt(
    $("#about").css("marginTop").replace("px", "")
  );
  if (scrolled + $(window).height() == $(document).height()) {
    $(".content").each(function () {
      let id = $(this).attr("id");

      if (id != "contact") {
        $(".navbar-link[href$=" + id + "]").removeClass("selected");
      } else {
        $(".navbar-link[href$=" + id + "]").addClass("selected");
      }
    });
  } else {
    $(".content").each(function () {
      let target = $(this).offset().top - marginAboutSection;
      let id = $(this).attr("id");
      let targetBottom = target + $(this).innerHeight();

      if (scrolled >= target) {
        $(".navbar-link[href$=" + id + "]").addClass("selected");
      } else {
        $(".navbar-link[href$=" + id + "]").removeClass("selected");
      }

      if (scrolled >= targetBottom) {
        $(".navbar-link[href$=" + id + "]").removeClass("selected");
      }
    });
  }
});
