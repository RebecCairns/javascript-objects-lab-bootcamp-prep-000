const recipes  = {Pizza: "cheese"};

function updateObjectWithKeyAndValue(object, key, value){
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}