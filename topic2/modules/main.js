import Movie from './movie';
import Logger from './logger';
import Social from './social';
import Actor from './actor';

let movieOne = new Movie('Mulholland Drive', '2001', '147');
let logger = new Logger();

movieOne.on('play', logger.log);
movieOne.on('resume', logger.log);
movieOne.on('pause', logger.log);
movieOne.play();

Object.assign(movieOne, Social);
movieOne.share('Paula');

let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast); //Movie must contain an array of 4 actors