const campo_name = document.getElementById("name")
const campo_last_name = document.getElementById("last_name")
//const type_document = document.getElementById("document_type")
const document_number = document.getElementById("document_number")
const campo_city = document.getElementById("city")
const  campo_phone_number = document.getElementById("phone_number")
const campo_address = document.getElementById("address")
const campo_barrio = document.getElementById("distritic")
const campo_occupation  =  document.getElementById("occupation")
const campo_email = document.getElementById("email")
const campo_password= document.getElementById("password")
const botonregistrarse = document.getElementById("Registrarse")
const boton_cancelar = document.getElementById("cancelar")
const urlBackend = 'https://8mmx8wpv-8000.use2.devtunnels.ms/'

botonregistrarse.addEventListener('click',async function () {
   
 await Crearusuario()
 

})

async function Crearusuario (){
    let UsuarioRegistrado = {
        name : campo_name.value,
        last_name: campo_last_name.value,
        //document_type: type_document.value,
        document: document_number.value,
        city : campo_city.value,
        phone_number : campo_phone_number.value,
        address : campo_address.value,
        occupation : campo_occupation.value,
        distritic: campo_barrio.value,
        email : campo_email.value,
        password : campo_password.value
    }
    
    try{
        let usuarionuevo = JSON.stringify(UsuarioRegistrado);
        
       let response =  await fetch(`${urlBackend}register_user`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: usuarionuevo
            
        })
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        let data = await response.json();
        console.log('Respuesta del servidor:', data);
        alert("Registro satisfactorio,Por favor inicie Sesión")
        window.location.href = 'login.html'
    }catch (error){
        alert('error:' + error)
        console.log("catch")
    }
    
}




