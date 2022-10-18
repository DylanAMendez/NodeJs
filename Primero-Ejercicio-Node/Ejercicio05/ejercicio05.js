let altura_cm = 165;
let altura_m = 1.65;
let peso_kg = 62.5;

let altura_redondeada = Math.round((altura_m * 100) /100);
let altura_r = Math.ceil(altura_m);
console.log(altura_r)
console.log(altura_redondeada);

let peso_r = Math.floor(peso_kg);
console.log(peso_r);

let maxMin = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(maxMin);
