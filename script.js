const $header = $("#header");
const $title = $("#title");
const $excerpt = $("#excerpt");
const $profile_img = $("#profile_img");
const $name = $("#name");
const $date = $("#date");

const $animated_bgs = $(".animated-bg");
const $animated_bg_texts = $(".animated-bg-text");

setTimeout(getDate, 1500);

function getDate() {
  $header.html(
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  );
  $title.html("Lorem ipsum dolor");
  $excerpt.html(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet!"
  );
  $profile_img.html(
    '<img src="https://randomuser.me/api/portraits/men/6.jpg" alt="" />'
  );
  $name.html("Barry Smith");
  $date.html("June 08, 2023");

  $animated_bgs.removeClass("animated-bg");
  $animated_bg_texts.removeClass("animated-bg-text");
}
