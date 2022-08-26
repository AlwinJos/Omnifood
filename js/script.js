console.log("Hello World!");

///////////////////////////////////////////////////////////

// Make Current Year
const new_year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
new_year.textContent = currentYear;

// Mobile Navigation

// const menu = document.querySelector(".menu-btn");
// const need = document.querySelector(".king");
// menu.addEventListener("click", () => {
//   need.classList.add("nav-open");
// });

// const close = document.querySelector(".close-btn");
// close.addEventListener("click", () => {
//   need.classList.remove("nav-open");
// });

const nav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".king");

nav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//Smooth Scrolling Animation

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll to Top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionel = document.querySelector(href);
      sectionel.scrollIntoView({
        behavior: "smooth",
      });
    }

    //Close Mobile Navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//Sticky navigation

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //In the viewport
    threshold: 0, // just like timimg
    rootMargin: "-80px", // it trigger before the end like before 80px
    // it only on "px"
  }
);
obs.observe(document.querySelector(".section-hero"));

// Fixing flexbox gap property missing in some Safari versions
// U need to use it all websites

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/* 
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
