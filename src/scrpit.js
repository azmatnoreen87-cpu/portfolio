
const themeBtn = document.getElementById("themeBtn");
const body = document.body;
themeBtn.addEventListener("click", () => {

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

});