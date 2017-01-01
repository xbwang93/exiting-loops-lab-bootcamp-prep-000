
function breakOut (array,changeValue,stopValue){
  for(let i = 0, l = array.length; i < l; i++){
    if (array[i] === stopValue){
      return array
      }
    array[i] = changeValue
    }
  }

function keepGoing (array, changeValue, skipValue){
  for(let i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue){
      continue;
    }
  array[i] = changeValue
  }
return array
}

function findBy (array, findFN){
  for(let i = 0, l = array.length; i < l; i++){
    if (findFN(array[i])){
      return array[i]
    }
  }
}