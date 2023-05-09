import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import Assert from "assert";


const assert = Assert.strict;

describe("Prueba Usuario", () => {
  before(function () {
    this.UserDao = new User();
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

  it("1.crear usuario en la bd", async function()  {
    let mockUser={
        first_name: 'Cocer',
        last_name:'Prueba',
        email:'datos1@datos.com',
        password:"123",
    }
    const result = await this.UserDao.save(mockUser);
    assert.ok(result._id)
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
    assert.strictEqual(typeof user, 'object')
  });

  it("4.El dao puede obtener los usuarios en un formato de arreglo", async function() {
    
    //console.log(this.userDao) ;
    const result = await this.UserDao.get();
    assert.strictEqual(Array.isArray(result), true);
  });
});
