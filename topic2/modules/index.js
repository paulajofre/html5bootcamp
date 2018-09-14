import Movie from './modules/movie';
import Logger from './modules/logger';
import Social from './modules/social';
import Actor from './modules/actor';

let movieOne = new Movie('Mulholland Drive', '2001', '147');
let logger = new Logger();

movieOne.on('play', logger.log);
movieOne.on('resume', logger.log);
movieOne.on('pause', logger.log);
movieOne.play();

Object.assign(movieOne, Social);
movieOne.share('Paula');

let actor = new Actor('Kyle MacLachlan');
let otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

movieOne.addCast('Paula the best');