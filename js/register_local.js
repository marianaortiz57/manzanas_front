const code = document.getElementById('code')
const name = document.getElementById('name')
const addres = document.getElementById('address')
const id_city = document.getElementById('city')
const responsible = document.getElementById('responsible')
const button_save = document.getElementById('save')
const url = 'https://8mmx8wpv-8000.use2.devtunnels.ms/'

button_save.addEventListener('click',async function () {
		let registerManzana = {
		code : code.value,
		name : name.value,
		address : addres.value,
		responsible : responsible.value,
		city : id_city.value	
	}
	try{
		let register = JSON.stringify(registerManzana);
        await fetch(`${url}register_local`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: register 
        })
        alert("Registrado Correctamente")
    }catch(error){
        alert('error:' + error)
        console.log(error)
    }
})