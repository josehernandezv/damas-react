import { observable } from 'mobx';

class UserStore {
    username;

    color;

    @observable
    remainingPieces = [];

    @observable
    capturedPieces = [];

    constructor(username, color) {
        this.username = username;
        this.color = color;
    }
}

export default UserStore;
