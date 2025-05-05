console.log("Inicio");

const boton = document.getElementById("btnEnviar");
boton.addEventListener("click", 
    () => {
        console.log("los parametros");
        let user = document.getElementById("user").value;
        let pass = document.getElementById("password").value;
        alert(user + " " + pass);
    }
);

