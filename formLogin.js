// Script para controlar a visibilidade da senha
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o ícone de olho e o campo de senha
    const eyeIcon = document.querySelector('.eye-icon');
    const passwordField = document.getElementById('signinPassword');
    
    // Adiciona evento de clique ao ícone do olho
    eyeIcon.addEventListener('click', function() {
        // Alterna o tipo do campo entre "password" e "text"
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        
        // Alterna o ícone entre olho aberto e fechado
        this.classList.toggle('bx-hide');
        this.classList.toggle('bx-show');
    });
});
