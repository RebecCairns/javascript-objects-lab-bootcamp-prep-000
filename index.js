//const playlist  = {Queen: "Bohemian Rhapsody"};
const recipes  = {Pizza: "cheese"};



function updateObjectWithKeyAndValue(object, key, value){
  object [key] = value;
  return object;
  ///this one is wrong
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}