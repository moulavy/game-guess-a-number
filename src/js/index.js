import Game from './game.js';
import Controller from './controller.js';
import View from './view.js';


const game = new Game(1,100);
const view = new View();
const controller = new Controller(game,view);


//для того чтобы game было глобально, так как const не попадает в глобальное пространство имен из за использования  модулей
window.game = game;
window.controller = controller;
window.view = view;
console.log(game);