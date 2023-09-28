const code = document.getElementById('code')
const name = document.getElementById('name')
const addres = document.getElementById('address')
const id_city = document.getElementById('city')
const locality = document.getElementById('locality')
const button_save = document.getElementById('save')
const url = 'https://8mmx8wpv-8000.use2.devtunnels.ms/'

button_save.addEventListener('click',async function () {
	alert("antes de try")
		let registerManzana = {
		code : code.value,
		name : name.value,
		address : addres.value,
		locality : locality.value,
		city : id_city.value
		
	}
	try{
		let register = JSON.stringify(registerManzana);
		alert("entro al try del registro")
        await fetch(`${url}register_manzana`,{
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