const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("email-submit");

const emailForm = document.querySelector(".email-form");
const personalInfoContent =
    document.querySelector(".personal-info-content");

const emailMessage =
    document.querySelector(".email-message");

const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.addEventListener("click", function () {
    const email = emailInput.value;

    const isValid = regex.test(email);

    if (!isValid) {
        emailMessage.textContent = "Email không hợp lệ";
        return;
    }

    emailForm.classList.add("hide");
    personalInfoContent.classList.remove("hide");
});

