document.getElementById("registrar").style.visibility="hidden";
const arrayUsuarios =[
    {user:"melissa", password:"1234"},
    {user:"elissa", password:"12345"}
]


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
        // alert("El usuario no existe")

        //propiedad style.visibility me permite mostras o ocultar una etiqueta
        document.getElementById("registrar").style.visibility="visible";
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
    document.getElementById("registrar").style.visibility="hidden";
    document.getElementById("BRS").style.display="none";
    document.getElementById("BRN").style.display="none";
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    console.log("paputa",nuevoUsuario);
    
}












    const arrayProductos =[
        {imagen1: "https://www.regalarflores.net/wp-content/uploads/2018/04/trabajos-de-jardineria-para-realizar-en-octubre-3.jpg" , titulo1:"rosas",descripcion:"rositas"},
        {imagen2:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/09/que-significan-los-colores-de-las-orquideas.jpg"},
        {imagen3:"https://okdiario.com/img/2018/11/23/como-cuidar-una-margarita-gerbera.jpg"},
        {imagen4:"https://gentenayarit.com/wp-content/uploads/2020/03/C1mLpE7WEAEp5A8.jpg"}
    ]


//tarjeta1
document.getElementById("img1").src = arrayProductos[0].imagen1;
document.getElementById("title1").innerText = arrayProductos[0].titulo1;

//tarjeta2
document.getElementById("img2").src = arrayProductos[1].imagen2;

//tarjeta3
document.getElementById("img3").src = arrayProductos[2].imagen3;

//tarjeta4
document.getElementById("img4").src= arrayProductos[3].imagen4;