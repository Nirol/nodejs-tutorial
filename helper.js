const user = function (userData) {
  return `${userData} logged in`
}
let id = function (id) {
  return `${id}`
}
let email = function (email) {
  return `${email}`
}
// export only one function from the module:
// module.exports = user;

// export multiple functions:
module.exports.id = id;
module.exports.email = email;

// export an object containing all functions
module.export = {

  user,
  id,
  email
}


