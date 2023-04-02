import Order from "../dao/classes/order.dao.js";
import Bussiness from "../dao/classes/bussiness.dao.js";
import User from "../dao/classes/user.dao.js";

const userService = new User();
const orderService = new Order();
const bussinessService = new Bussiness();

export const getOrders = async (req, res) => {
  let result = await orderService.getOrders();
  res.send({ status: "success", result });
};

export const getOrderById = async (req, res) => {
  const { oid } = req.params;
  //let result = await orderService.getOrderById(oid);
  let orden = await orderService.getOrderById(oid);
  res.send({ status: "success", result: orden });
};

export const createOrder = async (req, res) => {
  const { user, bussiness, products } = req.body;
  const resultUser = await userService.getUserById(user);

  const resultBussiness = await bussinessService.getBussinessById(bussiness);
  let actualOrders = resultBussiness.products.filter(product =>products.includes(product.id));
  let sum = actualOrders.reduce((acc, prev) => 
    {
    //acc += prev.prev;
    acc += prev.price;
    return acc;
  },0);
 console.log("suma "+"------------------>"+sum) 
 // let orderNumber = Data.now() + Math.floor(Math.random() * 100000 + 1);
  let orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);
  let order = {
    //numer: orderNumber,
    number: orderNumber,
    bussiness,
    user,
    status: "pediente",
    products: actualOrders.map((product) => product.id),
    totalPrice: sum,
  };

  let orderResult = await orderService.createOrder(order);
  console.log("ordenes"+"------------------>"+{order})

  res.send({ status: "success", orderResult });
};

export const resolveOrder = async (req, res) => {
  const { resolve } = req.query;
  let result = await orderService.getOrderById(req.params.oid);
  result.status = resolve;
  await orderService.resolveOrder(result._id, result);
  res.send({ status: "success", result: "Orden resuelta" });
};
