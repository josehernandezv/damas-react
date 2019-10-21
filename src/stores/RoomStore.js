import { observable } from 'mobx';
import * as constants from 'utils/constants';
import UserStore from './UserStore';

class RoomStore {
    @observable
    user1;

    @observable
    user2;

    constructor() {
        this.user1 = new UserStore('User 1', constants.WHITE);
        this.user2 = new UserStore('User 2', constants.BLACK);
    }
}

export default RoomStore;
