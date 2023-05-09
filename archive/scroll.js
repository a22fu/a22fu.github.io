/* Alexander Fu's Personal Website - JS */

$(document).ready(function () {
/* Set the positions of the about and contact pages */
  var about = $(".about").position();
  var contact = $(".Contact").position();

/* Mouseenter and Mouseleave function to change the navbar links to gray when moused over */
  $(".rlink").mouseenter(function () {
    $(this).css("color", "gray");
  });
  $(".rlink").mouseleave(function () {
    if ($(window).scrollTop() >= about.top - 38 && $(window).scrollTop() <= contact.top) {
      $(this).css("color", "black");
    } else {
      $(this).css("color", "white");
  }});

  $(window).scroll(function () {
  /* Scroll function for various purposes */
    if (
    /* If the user scrolls into the about section, change colour to black, otherwise white */
      $(window).scrollTop() >= about.top - 38 &&
      $(window).scrollTop() <= contact.top + 15
    ) {
      $(".rlink").css("color", "black");
    } else {
      $(".rlink").css("color", "white");
    }

    if (
  /* If the user scrolls into midway between either sections, make navbar transparent, */
      ($(window).scrollTop() >= about.top - 68 &&
        $(window).scrollTop() <= about.top - 8) ||
      ($(window).scrollTop() > contact.top - 30 &&
        $(window).scrollTop() <= contact.top + 47)
    ) {
      $("#nav").css("background-color", "transparent");
    } else if (
  /* Otherwise make navbar black or white depending on which section user has scrolled to */
      $(window).scrollTop() >= about.top - 38 &&
      $(window).scrollTop() <= contact.top
    ) {
      $("#nav").css("background-color", "white");
    } else {
      $("#nav").css("background-color", "rgb(28, 28, 28)");
    }

    if ($(window).scrollTop() <= 50) {
  /* Make the home scroll button fadeout after you scroll away */
      if ($("#scrollimg").css("opacity") == 1) {
      } else {
        $("#scrollimg").fadeTo(100, 1);
        $("#scrolllink").css("pointer-events", "auto");
        $("#scrollimg").css("pointer-events", "auto");

        setTimeout(100);
      }
    } else {
      if ($("#scrollimg").css("opacity") == 0) {
      } else {
        $("#scrollimg").fadeTo(100, 0);
        $("#scrolllink").css("pointer-events", "none");
        $("#scrollimg").css("pointer-events", "none");

        setTimeout(100);
      }
    }

    if (
  /* Make the about scroll button fadeout after you scroll away */
      $(window).scrollTop() <= about.top + 100 &&
      $(window).scrollTop() >= about.top
    ) {
      if ($("#scrollimg2").css("opacity") == 1) {
      } else {
        $("#scrollimg2").fadeTo(100, 1);
        $("#scrolllink2").css("pointer-events", "auto");
        $("#scrollimg2").css("pointer-events", "auto");

        setTimeout(100);
      }
    } else {
      if ($("#scrollimg2").css("opacity") == 0) {
      } else {
        $("#scrollimg2").fadeTo(100, 0);
        $("#scrolllink2").css("pointer-events", "none");
        $("#scrollimg2").css("pointer-events", "none");

        setTimeout(100);
      }
    }
  });
});
