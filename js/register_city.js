const name = document.getElementById('name')
const button_save = document.getElementById('save')
const url = 'https://8mmx8wpv-8000.use2.devtunnels.ms/'

button_save.addEventListener('click',async function () {
		let registerManzana = {
		name : name.value,
	}
	try{
		let register = JSON.stringify(registerManzana);
        await fetch(`${url}register_city`,{
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