const campo_email = document.getElementById("email")
const campo_password = document.getElementById("password")
const btn_ingresar = document.getElementById("ingresar")
const urlBackend = 'https://8mmx8wpv-8000.use2.devtunnels.ms/'
let id_user = ''

btn_ingresar.addEventListener("click",async function(){
    let token = await validarUsuario();
    if (token['token'].length > 0){
        id_user = token['id']
        localStorage.setItem("token", token)
        window.location.href = "profile_user.html"
    }
    else{
        let message = token['message']
    }
   
})

async function validarUsuario (){
    let datos = {
        email: campo_email.value,
        password: campo_password.value
    }
    let datos_stringify = JSON.stringify(datos)
    try {
        let response = await fetch(`${urlBackend}login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:datos_stringify

        });

        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }

        let respuestalogin = await response.json();
        alert(respuestalogin)
        return respuestalogin


    } catch (error) {
        console.log("Se generó un error - Estoy en el catch", error);
    }
}
