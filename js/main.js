// ============== Animate navbar ==============
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
// ============== Animate navbar ==============

// ============== Active navbar Link in multi pages ==============
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-links li a');
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"
  }
}
// ============== Active navbar Link in multi pages ==============

// ============== Reating ==============
$(document).ready(function () {

  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
      msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);

  });

});

function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
// ============== Reating ==============

//============= Upload image ============= 
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
  //============= Upload personal image ============= 
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreviewpersonal').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreviewpersonal').hide();
      $('#imagePreviewpersonal').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
  //============= Upload personal image ============= 
}

$("#imageUpload").change(function () {
  readURL(this);
});
$("#imageUploadpersonal").change(function () {
  readURL(this);
});

//============= Upload image =============





