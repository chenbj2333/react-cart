import { action, observable } from 'mobx';

export class UserStore {
  @observable userInfo: any;

  @action.bound setUserInfo(info: any) {
    this.userInfo = info;
  }
}

export default UserStore;
