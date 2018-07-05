import { observable, action } from 'mobx';
import { getMoviesService } from './LoginService';

class LoginStore {
  @observable loading = false;
  @observable user = {};
  @observable movies = [];

  @action
  login(email, password) {
    this.user = { email: email, password: password };
  }

  @action
  getMovies() {
    this.loading = true;
    getMoviesService()
      .then(action((data) => {
        this.movies = data;
      }))
      .finally(action(() => {
        this.loading = false;
      }));
  }
}

const observableLoginStore = new LoginStore();
export default observableLoginStore;
