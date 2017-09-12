var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, {['prop']: '2'})
}

