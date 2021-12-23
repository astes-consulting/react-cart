import firebase from "../firebase";

const db = firebase.ref("/customers");

class CustomerDataService {
  getAll() {
    return db;
  }

  create(customer) {
    return db.push(customer);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new CustomerDataService();
