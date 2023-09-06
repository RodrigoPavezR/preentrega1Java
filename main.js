alert("Bienvenidos a CITYCELL");
alert("Cotizamos tu celular");


const cotizador = () => {
    let marca = "";
    let memoria = "";
    let pantalla = "";
    let desperfectos = true;
    let descontarValor = 0;
    let subtotal = 0;
    let repetir = true;


    do {
        marca = prompt("¿Que marca es tu celular? SAMSUNG - APPLE").toUpperCase();
        memoria = prompt("¿Cuantos GB de memoria tiene tu celular? 256 - 512");


        if ((marca === "SAMSUNG") && (memoria === "256")) {
            console.log(subtotal = 7000);
        } else if ((marca === "SAMSUNG") && (memoria === "512")) {
            subtotal = 9000;
        } else if ((marca === "APPLE") && (memoria === "256")) {
            subtotal = 8000;
        } else if ((marca === "APPLE") && (memoria === "512")) {
            subtotal = 12000;
        } else {
            alert("No trabajamos con ese modelo de celular");
            repetir = confirm("¿Deseas cotizar otro modelo?");

            if (repetir) {
                cotizador(); break;
            } else {
                alert("Gracias por confiar en City Cell"); break
            }

        }


        alert("El precio inicial de tu celular es de " + subtotal);

        desperfectos = confirm("¿Tu celular tiene algun desperfecto?");

        if (desperfectos) {
            pantalla = prompt("¿Tu celular tiene la pantalla rota? SI - NO").toUpperCase()
            switch (pantalla) {
                case "SI":
                    descontarValor = 2000
                    break;

                default:
                    descontarValor = 0;
            }
        } else { descontarValor = 0; }


        let precioTotal = subtotal - descontarValor;

        alert("El precio total de tu celular es de " + precioTotal);

        repetir = confirm("¿Deseas cotizar otro modelo?");
        if (repetir != true) {
            alert("Gracias por confiar en City Cell, te esperamos!");
        }
    } while (repetir)
}
cotizador();

