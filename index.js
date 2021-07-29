import { climApp } from './climApp.js'

const searchButton = document.querySelector("#search");
const container = document.querySelector('.container-derecha__resultado');
const input = document.querySelector('#input');

const init = () => {
    if(input.value == ""){
        input.placeholder = "Ubicación no válida";
        input.className = 'bad-input';
        input.focus();
    }else{
        if(container.childNodes.length > 5){
            container.removeChild(container.lastChild);
            climApp(input.value);
            input.classList.remove("bad-input");
            input.className = "container-derecha__busqueda-input";
            input.value = "";
            input.placeholder = "Ingresa una ubicación";
        }else {
            climApp(input.value);
            input.classList.remove("bad-input");
            input.className = "container-derecha__busqueda-input";
            input.value = "";
            input.placeholder = "Ingresa una ubicación";
        }
    }
}

input.addEventListener('keyup', (event) => {
    let key = event.keyCode || event.which;
  
    if (key === 13) {
        if(input.value == ""){
            input.placeholder = "Ubicación no válida";
            input.className = 'bad-input';
            input.focus();
        }else{
            if(container.childNodes.length > 5){
                container.removeChild(container.lastChild);
                climApp(input.value);
                input.classList.remove("bad-input");
                input.className = "container-derecha__busqueda-input";
                input.value = "";
                input.placeholder = "Ingresa una ubicación";
            }else {
                climApp(input.value);
                input.classList.remove("bad-input");
                input.className = "container-derecha__busqueda-input";
                input.value = "";
                input.placeholder = "Ingresa una ubicación";
            }
        }
    }
});
searchButton.addEventListener("click", init);
