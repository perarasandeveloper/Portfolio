
    new Typed("#ani", {
        strings: ["Java Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    let theme=document.getElementById("theme")
    function themeChanger() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.textContent = "☀️ Light Mode";
    } else {
        theme.textContent = "🌙 Dark Mode";
    }
}

