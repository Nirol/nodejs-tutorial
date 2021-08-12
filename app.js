
// LEARN ABOUT THE GLOBAL OBJECT IN NODEJS 
// DOC IN https://nodejs.org/docs/latest-v15.x/api/globals.html

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


