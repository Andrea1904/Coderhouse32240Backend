import moment from 'moment';

const fechaActual = moment();

const fecha_nacimiento = moment('1993-02-09','YYYY-MM-DD'); 

if(fecha_nacimiento.isValid()){ // validar si es una fecha valida
    console.log(` # años = ${fechaActual.diff(fecha_nacimiento,'year')} años`);
    console.log(` # días = ${fechaActual.diff(fecha_nacimiento,'days')} días`);    
    console.log(` # horas = ${fechaActual.diff(fecha_nacimiento,'hours')} horas`);
}else{ // 
    console.error("No es valida")
}