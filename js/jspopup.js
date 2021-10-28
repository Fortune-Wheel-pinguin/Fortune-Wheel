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

