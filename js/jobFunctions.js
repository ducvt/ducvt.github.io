const viewMoreButtons =
    document.querySelectorAll(".view-more-btn");

viewMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const header = button.parentElement;
        const jobCard = header.parentElement;

        const content =
            jobCard.querySelector(".job-card-content");

        const isHidden =
            content.classList.contains("hide");

        if (isHidden) {
            content.classList.remove("hide");
            button.textContent = "▲ VIEW LESS";
        } else {
            content.classList.add("hide");
            button.textContent = "▼ VIEW MORE";
        }
    });
});