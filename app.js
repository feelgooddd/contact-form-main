const enquirySection = document.getElementById("enquiry-section");
const supportSection = document.getElementById("support-section");

const radioGeneralEnquiry = document.getElementById("general-enquiry");
const radioSupportRequest = document.getElementById("support-request");

const submitButton = document.getElementById("btn-submit");
const checkBox = document.getElementById("submit-checkbox");

const consentError = document.getElementById("consent-error");
const requiredField = document.querySelectorAll(".required-field");
const errorR = document.querySelectorAll(".error");

radioGeneralEnquiry.onclick = function () {
  if (radioSupportRequest.checked === true) {
    radioSupportRequest.checked = false;
  }
  enquirySection.classList.add("bg-light-green");
  supportSection.classList.remove("bg-light-green");
};

radioSupportRequest.onclick = function () {
  if (radioGeneralEnquiry.checked === true) {
    radioGeneralEnquiry.checked = false;
  }
  enquirySection.classList.remove("bg-light-green");
  supportSection.classList.add("bg-light-green");
};

submitButton.addEventListener("click", checkValidity);

function checkValidity() {
  errorR.forEach(function checker() {
    for (i = 0; i <= 3; i++) {
      let x = requiredField[i].value;
      console.log(x);

      if (x == "") {
        errorR[i].classList.remove("hidden");
      } else {
        errorR[i].classList.add("hidden");
      }
    }
  }, this);
  if (!checkBox.checked) {
    consentError.classList.remove("hidden");
  } else {
    consentError.classList.add("hidden");
  }
}
