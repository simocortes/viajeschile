

window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
   (window.scrollY > 30)  
        ? nav.classList.add("bg-dark")
        : nav.classList.remove("bg-dark")
})

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date(Date.now());
    const poput = documeent.getElementById('popup');
    document.getElementById("date").textContent = data.tLocaleString();
    const toast = boostrap.Toast.getOrCreateIn(popup);
    toast.show()
    setTimeout(() => {
        toast.hide()
    }, 2500)
    e.target.reset();
})
$(document).ready(function (){
    $('[data-bs-toggle="tooltip"]').tooltip()
})

