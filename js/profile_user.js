const cerrarSesion = document.getElementById("cerrar").addEventListener("click", function(){
    
        localStorage.clear();
        window.location.href="index.html"
 });
