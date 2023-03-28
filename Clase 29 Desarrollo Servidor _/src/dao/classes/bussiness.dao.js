import bussinessModel from "../models/bussiness.model.js";

export default class Bussiness {
  getBussiness = async () => {
    try {
      let bussiness = await bussinessModel.find();
      return bussiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  getBussinessById = async (id) => {
    try {
      let bussiness = await bussinessModel.find({ _id: id });
      return bussiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  createBussiness = async (bussiness) => {
    try {
      let bussiness = await bussinessModel.create(bussiness);
      return bussiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addProduct = async (id,bussiness)=>{
    try {
        let bussiness = await bussinessModel.updateOne({_id:id},{$set:bussiness});
        return bussiness;
      } catch (error) {
        console.log(error);
        return null;
      }

  }
}
