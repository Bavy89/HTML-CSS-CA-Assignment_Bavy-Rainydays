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
