// Efeito de animação na imagem ao passar o mouse
const projectImage = document.getElementById("project-image");
projectImage.addEventListener("mouseover", () => {
    projectImage.style.transform = "scale(1.1)";
});

projectImage.addEventListener("mouseout", () => {
    projectImage.style.transform = "scale(1)";
});

// Mensagem de interação ao clicar no botão "Ver Projeto"
const btnViewProject = document.getElementById("btn-view-project");

btnViewProject.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Você está prestes a ser redirecionado para o projeto!");
    window.location.href = btnViewProject.href; // Redireciona o usuário para o projeto
});
