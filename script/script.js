let cantidad = 0, salario = 0, extra = 0;
let valorHora = 20000
let valorExtra = 30000
let btnCalcular = document.getElementById('boton')

btnCalcular.addEventListener('click', Calcular)

function LeerDatos() {
    cantidad = document.getElementById('cantidad').value;
}

function Calcular() {

    LeerDatos()

    if (cantidad >= 1 && cantidad <= 40) {
        salario = cantidad * valorHora;
        document.getElementById('salario').value = salario;
        document.getElementById('salarioextra').value = 0;
        document.getElementById('total').value = salario;

    } else {
        extra = cantidad - 40;
        salario = (extra * valorHora) + (40 * valorHora);
        document.getElementById('salario').value = 40 * valorHora;
        document.getElementById('salarioextra').value = extra * valorExtra;
        document.getElementById('total').value = salario;
    }
}