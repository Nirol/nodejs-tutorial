

/* ***************************** */
// LEARN ABOUT THE GLOBAL OBJECT IN NODEJS 
// DOC IN https://nodejs.org/docs/latest-v15.x/api/globals.html
/* ***************************** */

// current file/ dir
console.log(__dirname);
console.log(__filename);

// set timeout
setTimeout(function () { console.log("text global vars") }, 3000)

let count = 0
// basic usage of setInterval
const timer = setInterval(function () {

  count = count + 1
  console.log(count);
  if (count > 6) {
    clearInterval(timer)
  }
}, 2000)

/* ***************************** */
/* FUNCTIONS */
/* ***************************** */
function orange() { console.log("orange!") }
orange()

// function expression , putting an annonymous function into a variable red:

let red = function () { console.log("red!") }

// pass function as argument to another function:

function callback(func) {
  func()
}

callback(red)


/* ***************************** */
// moudlues: way to import modules from other files
/* ***************************** */

const helper = require('./helper')
console.log(helper.id('Moishe'))


/* ***************************** */
// THE EVENT module
/* ***************************** */
const events = require('events')

// similar to jquery, example of on click event
// element.on('click', function (){
//   console.log("abc");
// })


// events allow us to create our custon elements  with new events:

const myEmitter = new events.EventEmitter;
// wire up events to myEmitter

myEmitter.on('test', function (arg) {
  console.log(arg)
})
// lets emit this event:
myEmitter.emit('test', 'hello world')


/* ***************************** */
// more on modules and event emitters:
/* ***************************** */


// the util module allow us to inheirent things from objects built in to node js

const util = require('util')

//  object constructer function
const teams = function (name) {
  this.name = name;
}
// now we want any team created by this contructor to inheirent an emitter:
// so we can attach custom events to into
util.inherits(teams, events.EventEmitter)

const Arsenal = new teams('Arsenal')
const Juventus = new teams('Juventus')
const Galatasaray = new teams('Galatasaray')

// wire up event listener to this teams using this custom events

const teamArray = [Arsenal, Juventus, Galatasaray]
teamArray.forEach((team) => {
  team.on('nation', function (nation) { console.log(team.name + 'is ' + nation) })
})
// now we got custom events on our own objects

// emit an event:
Arsenal.emit('nation', 'English')






/* ***************************** */
// reading and writing files
/* ***************************** */

const fs = require('fs');
// sync - read the file before the code countinues, blocking until

const text = fs.readFileSync('file_to_read.txt', 'utf-8')

console.log(text)