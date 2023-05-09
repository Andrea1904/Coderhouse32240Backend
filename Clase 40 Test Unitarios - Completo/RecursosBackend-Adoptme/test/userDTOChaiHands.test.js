import UserDTO from "../src/dto/User.dto.js";
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

// hasheo efectivo para verificar

describe("Test el hash del DTO", async () => {
  // describe general
  describe("Pruebas de hash", () => {
    it("Comparar pass y hash dif", async () => {
      const hash = await createHash(mockUser.password);
      expect(hash).to.not.equal(mockUser.password);
      // validar si el password No es igual
      // y para validar un hash lo q hacemos es que sea un string y tenga un alongitud de 60
      expect(hash).to.have.length(60);
      expect(hash).to.be.a("string");
    });

    it("Comparar pass y hash sean validos", async () => {
      const hash = await createHash(mockUser.password);
      const match = await passwordValidation(mockUser, hash);
      expect(match).to.be.true;
    });

    it("Comparar pass y hash alterados y q no sean validos", async () => {
      let hash = await createHash(mockUser.password);
      // alteramos el hash
      hash = hash + "b";
      const match = await passwordValidation(mockUser, hash);
      expect(match).to.be.false;
    });
  });

  // el main del DTO esta junto osea tomamos los datos completos
  describe("Prueba DTO", () => {
    it("Unificacion de nombre del DTO", () => {
      const user = UserDTO.getUserTokenFrom(mockUser);
      expect(user.name).to.be.equal(
        `${mockUser.first_name} ${mockUser.last_name}`
      );
    });

    it("Eliminacion de propiedades del DTO", () => {
        const user = UserDTO.getUserTokenFrom(mockUser);
        // osea que cuando pase el usuario por el DTO ya no tenga datos

        expect(user).to.not.have.property("first_name")
        expect(user).to.not.have.property("last_name")     
        expect(user).to.not.have.property("password")      
      });
  });
});
