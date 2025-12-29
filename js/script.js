window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

function copyEmail() {
    navigator.clipboard.writeText("dhamandadiya@email.com");
    alert("Email copied!");
}
