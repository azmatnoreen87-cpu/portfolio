
const themeBtn = document.getElementById("themeBtn");
// CHECK SAVED THEME
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    // Body
    document.body.style.background =
        "linear-gradient(135deg, #ffffff, #f3efff, #eafcff)";
    document.body.style.color = "#1f2937";
    // Text colors
    document.querySelectorAll(".text-white").forEach(element => {
        element.style.color = "#1f2937";
    });
    document.querySelectorAll(".text-gray-300").forEach(element => {
        element.style.color = "#374151";
    });
    document.querySelectorAll(".text-gray-400").forEach(element => {
        element.style.color = "#4b5563";
    });
    document.querySelectorAll(".text-gray-500").forEach(element => {
        element.style.color = "#6b7280";
    });
    // Cards / sections
    document.querySelectorAll(".bg-white\\/5").forEach(element => {
        element.style.background = "rgba(0, 0, 0, 0.05)";
    });

    document.querySelectorAll(".border-white\\/10").forEach(element => {
        element.style.borderColor = "rgba(0, 0, 0, 0.1)";
    });

    // Contact Form
    document.querySelectorAll(".contact-form").forEach(element => {
        element.style.background = "rgba(255, 255, 255, 0.65)";
        element.style.borderColor = "rgba(0, 0, 0, 0.1)";
    });

    // Contact inputs
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    ).forEach(element => {
        element.style.background = "rgba(255, 255, 255, 0.8)";
        element.style.color = "#1f2937";
        element.style.borderColor = "rgba(0, 0, 0, 0.1)";
    });

    themeBtn.innerHTML = "☀️";

} else {

    themeBtn.innerHTML = "🌙";
}


// ===============================
// BUTTON CLICK
// ===============================

themeBtn.addEventListener("click", function () {

    const isLight = localStorage.getItem("theme") === "light";


    // ===============================
    // LIGHT MODE
    // ===============================

    if (!isLight) {

        localStorage.setItem("theme", "light");

        // Body
        document.body.style.background =
            "linear-gradient(135deg, #ffffff, #f3efff, #eafcff)";
        document.body.style.color = "#1f2937";


        // Text
        document.querySelectorAll(".text-white").forEach(element => {
            element.style.color = "#1f2937";
        });

        document.querySelectorAll(".text-gray-300").forEach(element => {
            element.style.color = "#374151";
        });

        document.querySelectorAll(".text-gray-400").forEach(element => {
            element.style.color = "#4b5563";
        });

        document.querySelectorAll(".text-gray-500").forEach(element => {
            element.style.color = "#6b7280";
        });


        // Cards
        document.querySelectorAll(".bg-white\\/5").forEach(element => {
            element.style.background = "rgba(0, 0, 0, 0.05)";
        });


        // Borders
        document.querySelectorAll(".border-white\\/10").forEach(element => {
            element.style.borderColor = "rgba(0, 0, 0, 0.1)";
        });


        // Contact Form
        document.querySelectorAll(".contact-form").forEach(element => {
            element.style.background = "rgba(255, 255, 255, 0.65)";
            element.style.borderColor = "rgba(0, 0, 0, 0.1)";
        });


        // Inputs + Textarea
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        ).forEach(element => {
            element.style.background = "rgba(255, 255, 255, 0.8)";
            element.style.color = "#1f2937";
            element.style.borderColor = "rgba(0, 0, 0, 0.1)";
        });


        themeBtn.innerHTML = "☀️";

    }


    // ===============================
    // DARK MODE
    // ===============================

    else {

        localStorage.setItem("theme", "dark");

        // Body
        document.body.style.background = "";
        document.body.style.color = "";


        // Text
        document.querySelectorAll(".text-white").forEach(element => {
            element.style.color = "";
        });

        document.querySelectorAll(".text-gray-300").forEach(element => {
            element.style.color = "";
        });

        document.querySelectorAll(".text-gray-400").forEach(element => {
            element.style.color = "";
        });

        document.querySelectorAll(".text-gray-500").forEach(element => {
            element.style.color = "";
        });


        // Cards
        document.querySelectorAll(".bg-white\\/5").forEach(element => {
            element.style.background = "";
        });


        // Borders
        document.querySelectorAll(".border-white\\/10").forEach(element => {
            element.style.borderColor = "";
        });


        // Contact Form
        document.querySelectorAll(".contact-form").forEach(element => {
            element.style.background = "";
            element.style.borderColor = "";
        });


        // Inputs
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        ).forEach(element => {
            element.style.background = "";
            element.style.color = "";
            element.style.borderColor = "";
        });

         themeBtn.innerHTML = "🌙";
    }

});