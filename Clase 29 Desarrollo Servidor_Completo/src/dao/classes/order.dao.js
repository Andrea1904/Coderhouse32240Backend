import orderModel from "../models/order.model.js";

export default class Order {
  getOrders = async () => {
    try {
      let orders = await orderModel.find();
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getOrderById = async (id)=> {
    try {
      let orders = await orderModel.findOne({_id:id});
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createOrder = async (order)=> {
    try {
      let orders = await orderModel.create(order);
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

 resolveOrder =async (id,order)=>{

    try {
        let orders = await orderModel.updateOne({_id:id},{$set:order});
        return orders;
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  


}
