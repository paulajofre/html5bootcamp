export default class EventEmitter {
    constructor() {
        this.callbacks = {};
    }
    on(event, cb){
        this.callbacks[event] = cb;
    }
    emit(event, params){
            this.callbacks[event](params);
    }
    off(event){
        delete this.callbacks[event];
    }
}