import Bussiness from "../dao/classes/bussiness.dao.js";

const bussinessService = new Bussiness();
export const getBussiness = async (req, res) => {
  let result = await bussinessService.getBussiness();
  if (!result)
    return res
      .status(500)
      .send({ status: "error", error: "No pudo conectarse" });
  res.send({ status: "success", result });
};
export const createBussiness = async (req, res) => {
  const bussiness = req.body;
  console.log("------------->"+{bussiness})
  let result = await bussinessService.saveBussiness(bussiness);
  if (!result)
    return res
      .status(500)
      .send({ status: "error", error: "No pudo conectarse <---->" });
  res.send({ status: "success", result: result });
};

export const getBussinessById = async (req, res) => {
  const { bid } = req.param;
  let result = await bussinessService.getBussinessById(bid);
  if (!result)
    return res
      .status(500)
      .send({ status: "error", error: "No pudo conectarse" });
  res.send({ status: "success", result: result });
};
export const addProduct = async (req, res) => {
  let result = req.body;
  let bussiness = await bussinessService.getBussinessById(req.params.bid);
  //bussiness.product.push(result);
  bussiness.products.push(result);
  await bussinessService.addProduct(bussiness._id, bussiness);

  res.send({ status: "success", result: "Producto agregado" });
};
