const enquirySection = document.getElementById("enquiry-section");
const supportSection = document.getElementById("support-section");
const successMessage = document.getElementById("success-message-section");

const radioGeneralEnquiry = document.getElementById("general-enquiry");
const radioSupportRequest = document.getElementById("support-request");

const submitButton = document.getElementById("btn-submit");
const checkBox = document.getElementById("submit-checkbox");
const radioDivs = document.querySelectorAll(".query-section__query");

const consentError = document.getElementById("consent-error");
const requiredField = document.querySelectorAll(".required-field");
const erroR = document.querySelectorAll(".error");

const radioError = document.getElementById("radio-error");
const errorEmail = document.getElementById("error-email");

const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const emailInput = document.getElementById("email");

submitButton.addEventListener("click", checkValidity);

const changeRadioBg = () => {
  let radioDivArray = [];
  let i = 0;
  //run this loop for as many radioDivs exist on the page.
  radioDivs.forEach((radioDiv) => {
    radioDivArray.push(radioDiv);
    //add a function for the radioDiv element and store
    // it in an array
    radioDivArray[i].onclick = function () {
      for (let j = 0; j < 2; j++) {
        //check THIS radio button aka the button
        //which is clicked.
        this.firstElementChild.checked = true;

        if (radioDivArray[j].firstElementChild.checked == true) {
          this.classList.add("bg-light-green");
        } else {
          radioDivArray[j].classList.remove("bg-light-green");
        }
      }
    };

    i++;
  });
};

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  console.log(emailField.value);
  if (reg.test(emailField.value) == false) {
    alert("Invalid Email Address");
    return false;
  }

  return true;
}

function checkValidity() {
  let valid = true;

  //Add error message for Input fields.
  erroR.forEach(function checker() {
    for (i = 0; i <= 3; i++) {
      let x = requiredField[i].value;
      if (x == "") {
        erroR[i].classList.remove("hidden");
        valid = false;
      } else {
        erroR[i].classList.add("hidden");
      }
    }
  }, this);

  //error message for radio buttons
  if (!radioGeneralEnquiry.checked && !radioSupportRequest.checked) {
    radioError.classList.remove("hidden");
    valid = false;
  } else {
    radioError.classList.add("hidden");
  }
  //error message for checkbox
  if (!checkBox.checked) {
    consentError.classList.remove("hidden");
    valid = false;
  } else {
    consentError.classList.add("hidden");
  }
  //store a function in varaible which returns a boolean
  // to determine if the email is valid.
  emailValid = validateEmail(emailInput);
  if (!emailValid) {
    valid = false;
    errorEmail.classList.remove("hidden");
  } else {
    errorEmail.classList.add("hidden");
  }

  //send email if all is valid.
  // and display toast success message.
  if (valid == true) {
    successMessage.style.display = "block";
    sendMail();
  }
}

function sendMail() {
  let subject = "";
  if (radioGeneralEnquiry.checked == true) {
    subject = "General Enquiry";
  } else if (radioSupportRequest.checked == true) {
    subject = "Support Request";
  }

  let params = {
    name: firstName.value + " " + lastName.value,
    email: document.getElementById("email").value,
    subject: subject,
    message: document.getElementById("message-text").value,
  };

  emailjs
    .send("service_xy4daip", "template_gzw3he8", params)
    .then(alert("Email Sent"));
}

changeRadioBg();

//old method for radio buttons.

// radioGeneralEnquiry.onclick = function () {
//   if (radioSupportRequest.checked === true) {
//     radioSupportRequest.checked = false;
//   }
//   enquirySection.classList.add("bg-light-green");
//   supportSection.classList.remove("bg-light-green");
// };

// radioSupportRequest.onclick = function () {
//   if (radioGeneralEnquiry.checked === true) {
//     radioGeneralEnquiry.checked = false;
//   }
//   enquirySection.classList.remove("bg-light-green");
//   supportSection.classList.add("bg-light-green");
// };
