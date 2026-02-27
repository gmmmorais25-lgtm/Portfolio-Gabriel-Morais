let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const form = document.querySelector('.contact form'); // 

form.addEventListener('submit', function(e) {
    e.preventDefault();  

    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset(); 
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    })
    .catch(error => {
        alert("Erro ao enviar. Tente novamente.");
    });
});



    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        const progress = parseInt(bar.getAttribute("data-progress"));
        const text = bar.parentElement.nextElementSibling;

        
        bar.style.width = progress + "%";
        
        text.textContent = progress + "% concluído"

        if(progress <= 50){
            bar.style.backgroundColor = "#ff1616"
        }else if(progress < 80){
            bar.style.backgroundColor = "#ffc107"
        }else if(progress < 100){
            bar.style.backgroundColor = "#77e663"
        }else {
            bar.style.backgroundColor = "rgb(42, 255, 155)"
        }
    });




