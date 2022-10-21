const fechaHoy = new Date();
const fechaNacimiento = new Date(2000, 1, 1);
console.log(fechaNacimiento)

const masTarde = fechaHoy > fechaNacimiento;
console.log(masTarde)

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento)

const yearNacimiento = fechaNacimiento.getFullYear();
console.log(yearNacimiento)