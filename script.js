document.querySelectorAll('.input-user-data').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.classList.add('not-empty');
        } else {
            this.classList.remove('not-empty');
        }
    });
});

const lightMode = document.getElementById("chk")
const themeSystem = localStorage.getItem("themeSystem") || "light"

defineCurrentTheme(themeSystem);

lightMode.checked = themeSystem === "dark";

lightMode.addEventListener('click', () => {
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)
    lightMode.checked = newTheme === "dark";
})

function defineCurrentTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}