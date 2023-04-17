import {faker} from '@faker-js/faker';

faker.locale='es';

export const generateUser =() => {
 let numProductos = parseInt(faker.random.numeric(1,{bannedDigits:['0']}))
 let productos=[];
 for(let i=0; i<numProductos ;i++){
    productos.push(generateProduct());
 }
 return{
    name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    sex:faker.name.sex(),
    birhDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
    productos
 }
}

export const generateProduct = () =>{
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        deparment: faker.commerce.department(),
        image: faker.image.image(),
        id: faker.database.mongodbObjectId()
    }
}