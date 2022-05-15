

let listaFlores=document.getElementById("listaFlores");

const arrayUsuarios =[
    {user:"Pikachu", password:"pikachu1234"},
    {user:"Bulbasaur", password:"bulbasaur1234"}
];

const arrayFlores=["Rosas","Tulipanes","Claveles","Gerbera","Orquideas","Lilis","Alcatraces"]
document.getElementById("nuevaFlor" ).style.visibility="hidden"
document.getElementById("enviarFlor").style.visibility="hidden"
document.getElementById("campoRequerido").style.visibility="hidden"



function login(){

    let usuario= document.getElementById("usuario").value;
    let contraseña= document.getElementById("contraseña").value;
    let validarUsuario = false;

    arrayUsuarios.forEach(Object=> {
        if(Object.user==usuario && Object.password==contraseña) {
           validarUsuario = true;
        }

    });
    
    if(validarUsuario){
        window.location.href = "/flores.html"
    }else{

        //propiedad style.visibility me permite mostras o ocultar una etiqueta
        document.getElementById("registrar").style.display="block";
        document.getElementById("BRS").style.display="block";
        document.getElementById("BRN").style.display="block";
     
    }
    
}

function registro(){
    let usuario= document.getElementById("usuario").value;
    let contraseña= document.getElementById("contraseña").value;
    let nuevoUsuario = {
        user:usuario,
        password:contraseña
    }
    
    arrayUsuarios.push(nuevoUsuario);
    document.getElementById("registrar").style.display="none";
    document.getElementById("BRS").style.display="none";
    document.getElementById("BRN").style.display="none";
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("registrado").style.display="block"
    
}


for (let i = 0; i < arrayFlores.length; i++) {
    const flor = arrayFlores[i];
    let li=document.createElement("li");
    li.textContent=flor;
    listaFlores.appendChild(li);
    
}

function limpiar(){
    document.getElementById("registrar").style.display="none";
    document.getElementById("BRS").style.display="none";
    document.getElementById("BRN").style.display="none";
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    
}

function agregarFlor(){
    
    document.getElementById("nuevaFlor").style.visibility="visible"
    document.getElementById("enviarFlor").style.visibility="visible"

   

}

function guardarFlor(){
    let nuevaFlor=document.getElementById("nuevaFlor").value;
    if(nuevaFlor === ""){ 
        document.getElementById("campoRequerido").style.visibility="visible" 
    }else{
        arrayFlores.push(nuevaFlor)
        console.log("flores: ",arrayFlores)
        let li=document.createElement("li");
        listaFlores.appendChild(li)
        let ultimaFlor=arrayFlores.pop();
        li.textContent=ultimaFlor;
        document.getElementById("campoRequerido").style.visibility="hidden" ;
        document.getElementById("enviarFlor").style.visibility="hidden";
        document.getElementById("nuevaFlor").style.visibility="hidden"
        
    }    
}


