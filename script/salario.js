// Dado como dato el sueldo de un empleado, aplique un aumento del 12%
// Si su sueldo es menor a un minimo, imprimir el nuevo sueldo del empleado 

let aumento, salarioEmp, total;
const salarioM = 1000000

salarioEmp = Number(prompt('Ingrese salario del empleado'))

if(salarioEmp < salarioM){

    aumento = (salarioEmp * 0.12)
    total = salarioEmp + aumento
    alert(`El aumento es ${aumento} y el sueldo total es: ${total}`)
}else{
    alert(`El salario ${salarioEmp} no supera el minimo`)
}




