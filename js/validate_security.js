function validate_security(){
    const token = localStorage.getItem('token')
    if(!token){
        alert("no estas autenticado")
        window.location.href = 'login.html'
    }
}

