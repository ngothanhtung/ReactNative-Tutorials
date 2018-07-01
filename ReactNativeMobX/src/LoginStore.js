import { observable, action } from 'mobx';

class LoginStore {
  @observable user = {};

  @action
  login(email, password) {
    this.user = { email: email, password: password };
  }
}


const observableLoginStore = new LoginStore();
export default observableLoginStore;
