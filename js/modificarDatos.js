import {id_user} from  '../js/login.js';

const campo_name =  document.getElementById("name_edit")
const campo_document = document.getElementById("document_edit")
const campo_address = document.getElementById("address_edit")
const campo_phone = document.getElementById("phone_number")
const editar_Perfil = document.getElementById("editar")
const cerrarSesion = document.getElementById("cerrarSesion")


editar_Perfil.addEventListener("click",async function(){
  alert("prueba")
  await editar_user()
})
async function editar_user(){
    let UsuarioModificar= {
        name_edit : campo_name.value,
        document_edit: campo_document.value,
        phone_edit: campo_phone.value,
        address_edit : campo_address.value,
        id : id_user
    }

    try {
        alert(id_user)
        let Datos_usuario = JSON.stringify(UsuarioModificar);
        await fetch(`${urlBackend}edit_user`,
          {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: Datos_usuario
          })
        
      } catch {
        console.log("estoy generando error el el endPoint eliminar")
    }
}

cerrarSesion.addEventListener("click",function(){
  localStorage.clear();
  window.location.href="index.html"
})