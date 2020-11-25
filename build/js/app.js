// ========== Nav Toggle  toggle effects ==========
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navmenu = document.querySelector(".navbar-nav");
  const burgerborder = document.querySelector(".burger");

  // toggle nav
  burger.addEventListener("click", () => {
    navmenu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    burgerborder.classList.toggle("burg");
  });

  // if (navmenu) {
  //   navmenu.addEventListener.classList.remove("navbar-nav");
  // }
};
navSlide();

// ========== Navbar scroll effects ==========
window.onscroll = function () {
  myFunction();
};
var nav = document.getElementById("navie");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// ==========type js typing effect==========
// var typed = new Typed(".type", {
//   strings: ["Web Developer", "UI-UX Designer", "Web Designer"],
//   typeSpeed: 50,
//   backSpeed: 50,
//   loop: true,
// });

// animate on scroll
AOS.init();

// scroll progress bar
gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
// var rule = CSSRulePlugin.getRule(".intro-text:after");
// // gsap.from(".intro-box", { opacity: 0, duration: 1, y: -50 });
// gsap.to(rule, { cssRule: { scaleX: 0 }, duration: 1.5 , ease: "power2.inOut"});

// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}
// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}
// If a link's href is within the current page, scroll to it instead
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);


// bootstrap scrollspy
$("body").scrollspy({ target: "#navie" });

//back to the top button
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".back-top").fadeIn(1000);
  } else {
    $(".back-top").fadeOut(1000);
  }
});
$(".back-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    { duration: 1500, easing: "swing" }
  );
});

$(".logo-slide").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 500,
});

//  Testimonial Carousel
$("#client-testimonials").owlCarousel({
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoplay: true,
  dots: true,
  autoplayTimeout: 3000,
  smartSpeed: 450,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
});

$(function () {
  FastClick.attach(document.body);
});

// matchheight
$(".card").matchHeight();

// porfolio filter
$(".portfolio-list").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".portfolio-item").show("1000");
  } else {
    $(".portfolio-item")
      .not("." + value)
      .hide("1000");
    $(".portfolio-item")
      .filter("." + value)
      .show("1000");
  }
  $(".portfolio-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});


function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);

        });
    })