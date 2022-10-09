// CHECKOUT PAGE DELETE ARTICLES
function deleteArticle1() {
    var element = document.getElementById("articleRow1");
        element.classList.add("hide");
  }
  function deleteArticle2() {
    var element = document.getElementById("articleRow2");
        element.classList.add("hide");
  }
  
// CONTACT FORM SCRIPT VALIDATION
function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var phone = document.forms["contact"]["phone"].value;
    var message = document.forms["contact"]["message"].value;

    if (name == null || name == "") {
        alert("Please enter your name");
        return false;
    } else if (email == null || email == "") {
        alert("Please enter your e-mail");
        return false;
    } else if (phone == null || phone == "") {
        alert("Please enter your phone number");
        return false;
    } else if (message == null || message == "") {
        alert("Please enter your message");
        return false;
    }
}

// IMAGE SLIDE HOME PAGE


const slides = document.querySelectorAll('[data-js="carousel__item"]')
const prevBtn = document.querySelector('[data-js="carousel__button--prev"]')
const nextBtn = document.querySelector('[data-js="carousel__button--next"]')

let currentSlideItem = 0
let lastSlideItem = slides.length - 1 

const manipulatesSlidesClasses = slideIndex => {
  slides.forEach((slide, i) => {
    slide.classList.remove("carousel__item--visible")
  })
  slides[slideIndex].classList.add("carousel__item--visible")
}

nextBtn.addEventListener("click", () => {
  const correctSlideIndex = currentSlideItem === lastSlideItem ? currentSlideItem = 0 : ++currentSlideItem
  
  manipulatesSlidesClasses(correctSlideIndex)
})

prevBtn.addEventListener("click", () => {
  const correctSlideIndex = currentSlideItem === 0 ? currentSlideItem = lastSlideItem : --currentSlideItem
  
  manipulatesSlidesClasses(correctSlideIndex)
})
