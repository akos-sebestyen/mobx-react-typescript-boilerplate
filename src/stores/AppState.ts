import {action, observable, runInAction} from "mobx";

export class AppState {

    @observable
    public timer: number;

    constructor() {
        this.timer = 0;

        setInterval(() => {
            runInAction("AppendTimer", () => this.timer += 1)
        }, 1000);
    }

    @action
    resetTimer() {
        this.timer = 0;
    }
}