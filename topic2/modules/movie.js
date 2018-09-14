import EventEmitter from './eventemitter';
import Actor from './actor';

export default class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){
        this.emit('play', "The 'play' event has been emitted");
    }
    pause(){
        this.emit('pause', "The 'pause' event has been emitted");
    }
    resume(){
        this.emit('resume', "The 'resume' event has been emitted");
    }
    addCast(name){
        otherCast.push(new Actor(name));
    }
}