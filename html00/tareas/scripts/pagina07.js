document.getElementById('btnEnviar').addEventListener('click', (event) => {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    console.log(`Usuario: ${user}, Contraseña: ${password}`);
});
