import EventEmitter from './eventemitter';
import Actor from './actor';

export default class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
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
    addCast(actors){
        if (actors.length) {
            Array.prototype.push.apply(this.cast, actors);
        }
        else {
            this.cast.push(actors);
        }
    }
}