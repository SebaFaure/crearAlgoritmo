let nombre = prompt ("Bienvenidos a Coco Maderas Cordoba. \n  Indica tu nombre:");

while (nombre === "" || nombre === null || nombre === " ") {
    nombre = prompt("Ingrese su nombre por favor:");
  }

let seleccion = prompt ("Hola " + nombre.toUpperCase() + ", deseas comprar algun producto, ¿si o no?");

while (seleccion != "si" && seleccion != "no") {
    alert ("porfavor ingrese si o no para continuar");
    seleccion = prompt ("Hola " + nombre + ", deseas comprar algun producto, ¿si O no?");
}

if (seleccion === "si") {
    producto = prompt ("Contamos con los siguientes productos, seleccione su numero: \n 1)Percheros Nordicos \n 2)Especieros Gourmet \n 3)Mesas Nordicas \n 4)Hueveras \n 5)Tablas");
}   else if (seleccion === "no") {
    alert ("¡¡Gracias por visitarnos de igual manera!!");
} 

if (producto === "1") {
    alert ("Usted selecciono nuestro producto: PERCHEROS NORDICOS");
}  else if (producto === "2") {
    alert ("Usted selecciono nuestro producto: ESPECIERO GOURMET");
}  else if (producto === "3") {
    alert ("Usted selecciono nuestro producto: MESAS NORDICAS");
}  else if (producto === "4") {
    alert ("Usted selecciono nuestro producto: HUEVERAS");
}  else if (producto === "5") {
    alert ("Usted selecciono nuestro producto: TABLAS");
}  else {
    alert ("¡¡no encontramos el producto seleccionado!!");
}

while (producto != "1" && producto != "2" && producto != "3" && producto != "4" && producto != "5") {
    alert ("¡¡Debe seleccionar un producto!!");
    producto = prompt ("Contamos con los siguientes productos, seleccione su numero: \n 1)Percheros Nordicos \n 2)Especieros Gourmet \n 3)Mesas Nordicas \n 4)Hueveras \n 5)Tablas");
    }
    if (producto === "1") {
        alert ("Usted selecciono nuestro producto: PERCHEROS NORDICOS");
    }  else if (producto === "2") {
        alert ("Usted selecciono nuestro producto: ESPECIERO GOURMET");
    }  else if (producto === "3") {
        alert ("Usted selecciono nuestro producto: MESAS NORDICAS");
    }  else if (producto === "4") {
        alert ("Usted selecciono nuestro producto: HUEVERAS");
    }  else if (producto === "5") {
        alert ("Usted selecciono nuestro producto: TABLAS");
    }  else {
        alert ("¡¡no encontramos el producto seleccionado!!");
    }