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
      //let bussiness = await bussinessModel.find({ _id: id });
      let bussiness = await bussinessModel.findOne({ _id: id });
      return bussiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  //createBussiness = async (bussiness) => {
    saveBussiness = async (bussiness) => {
    try {
      let result = await bussinessModel.create(bussiness);
      return result;
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
