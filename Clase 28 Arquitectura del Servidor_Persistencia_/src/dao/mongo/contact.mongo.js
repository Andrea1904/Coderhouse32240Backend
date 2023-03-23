import contactModel from "../models/Contacts.js";

export default class Contacts {
  constructor() {}
  get = async () => {
    let contacts = await contactModel.find();
    return contacts;
  };
}
