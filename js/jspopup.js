let Names = []

//function impresionnombres(){
//   document.getElementById("impresionarray").innerHTML = Names;
//}


function pushnames(){
    Names.push(document.getElementById("inputnombres").value);
}


//let fps = 30;

//setInterval(function(){
//    impresionnombres()
//}, 1000/fps)

function mostrarnombres(){
    let localizacion = document.getElementById("impresionarray");
    let todolist = ""
    Names.forEach(elemento => {
            todolist += `<li>${elemento} <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button> </li>`
    });
    localizacion.innerHTML = todolist;
}
function abrirpopup(){
    document.getElementById("popup").style.display = "flex"
    document.getElementById("inicio").style.display = "none"
}
function cerrarpopup(){
    document.getElementById("popup").style.display = "none"
    document.getElementById("inicio").style.display = "flex"
}

////////////////////
function borrarVictimaArray(victima){
for (let i = 0; i < Names.length; i++) {
    if (victima == Names[i]) {
        Names.splice(i, 1)
        console.log(Names)
    }
    
}
console.log(Names)
}
borrarVictimaArray("hola")

function borrarVictimas(elementoThis) {
    let localizacion = document.getElementById("borrar");
    let nombreVictima = elementoThis.previousSibling;
    let elementoLi = nombreVictima.parentElement;
    //elementoLi.remove();
    borrarVictimaArray(nombreVictima)
  console.log(typeof)
    
    //console.log(elementoLi);
  }
  