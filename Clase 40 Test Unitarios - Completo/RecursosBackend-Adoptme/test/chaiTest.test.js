import UserDTO from "../src/dto/User.dto.js";
import mongoose from "mongoose";
// se debe importar la forma del hash
import { createHash, passwordValidation } from "../src/utils/index.js";
import chai from "chai";

const expect = chai.expect;

const mockUser = {
  first_name: "Cocer",
  last_name: "Prueba",
  email: "datos1@datos.com",
  password: "123",
};

mongoose.connect(
    "mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority"
  );

describe("Pruebas con chai",()=>{  
  before(function () {
    this.UserDTO = new UserDTO();
    mongoose.connect(
      "mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority"
    );
    });
    beforeEach ( function () {
        mongoose.connection.collection('users').deleteMany({})
    })
  after(function () {
    mongoose.connection.close();
    //this.timeout(5000)
  });
  it("5.Capturar los datos en un arreglo para probar el GET", async function() {
    //console.log(this.userDao) ;
    const result = await this.UserDao.get();
   expect(result).to.be.deep.equal([])
  });

  it("1.crear usuario en la bd", async function()  {
    let mockUser={
        first_name: 'Cocer',
        last_name:'Prueba',
        email:'datos1@datos.com',
        password:"123",
    }
    const result = await this.UserDao.save(mockUser);
    expect(mongoose.Types.ObjectId.isValid(result._id)).to.be.true;
    //assert.ok(result._id)
    // .ok decir si esto existe 
  });

  it("2.Insertar un arreglo de mascotas por defencto", async function()  {
    let mockUser={
        first_name: 'Cocer',
        last_name:'Prueba',
        email:'datos6@datos.com',
        password:"123",
    }
    const result = await this.UserDao.save(mockUser);
    assert.deepStrictEqual(result.pets,[])
    // comparar arreglos con deep
  });
  it("3.El Dao obtiene un usuario por mail", async function(){
    let mockUser={
        first_name: 'Cocer',
        last_name:'Prueba',
        email:'datos5@datos.com',
        password:"123",
    }
    const result = await this.UserDao.save(mockUser);
    const user =await this.UserDao.getBy({email: result.email})
    expect(user.email).to.be.equal("");
  });
  
  it("4. Propiedad que obtendra usuarios por email", async function () {

        let mockUser={
            first_name:"Coder",
            last_name:"House",
            email: "@",
            password:"123"
        }
    
        const resultado=await this.UserDao.save(mockUser);
        const user = await this.UserDao.getBy({email: resultado.email})
        //expect(user.email).have.property("@");
        expect(user.email).to.deep.include("@");
      })
    
})