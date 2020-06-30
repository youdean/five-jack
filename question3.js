function solution(relation) {
  var answer = 0;
  var unique = {};
  var notUnique = [];
  for(var i = 0; i < 4; i++){
    let ketemu = 0;
    for(var j = 0; j < relation.length; j++){
      if(unique.hasOwnProperty(relation[j][i])){
        ketemu = 1;
        notUnique.push(i);
        break;
      } else {
        unique[relation[j][i]] = 1;
      }
    }
    if(ketemu == 1){
      unique = {};
    } else {
      answer++;
    }
  }
  const lengthNotUnique = notUnique.length;
  //2 Combination
  var notUnique2 = notUnique;
  var k = 0;
  for(var i = 1; i <= lengthNotUnique; i++){
    let ketemu = 0;
    if(k+i >= lengthNotUnique){
      k++;
    }
    for(var j = 0; j < relation.length; j++){
      if(unique.hasOwnProperty(relation[j][notUnique2[k]]+relation[j][notUnique2[i-k]])){
        ketemu = 1;
        break;
      } else {
        unique[relation[j][notUnique2[k]]+relation[j][notUnique2[i-k]]] = 1;
      }
    }
    if(ketemu == 1){
      unique = {};
    } else {
      answer++;
      delete notUnique2[k]
      delete notUnique2[i-k]
    }
  }
  //3 Combination
  var notUnique3 = notUnique2;
  var k = 0;
  for(var i = 2; i <= lengthNotUnique; i++){
    let ketemu = 0;
    if(k+i >= lengthNotUnique){
      k++;
    }
    for(var j = 0; j < relation.length; j++){
      if(unique.hasOwnProperty(relation[j][notUnique3[k]]+relation[j][notUnique3[i-k-1]]+relation[j][notUnique3[i-k]])){
        ketemu = 1;
        break;
      } else {
        unique[relation[j][notUnique3[k]]+relation[j][notUnique3[i-k-1]]+relation[j][notUnique3[i-k]]] = 1;
      }
    }
    if(ketemu == 1){
      unique = {};
    } else {
      answer++;
      delete notUnique3[k]
      delete notUnique3[i-k-1]
      delete notUnique3[i-k]
    }
  }
  //4 Combination
  var notUnique4 = notUnique3;
  var k = 0;
  for(var i = 3; i <= lengthNotUnique; i++){
    let ketemu = 0;
    if(k+i >= lengthNotUnique){
      k++;
    }
    for(var j = 0; j < relation.length; j++){
      if(unique.hasOwnProperty(relation[j][notUnique4[k]]+relation[j][notUnique4[i-k-2]]+relation[j][notUnique4[i-k-1]]+relation[j][notUnique4[i-k]])){
        ketemu = 1;
        break;
      } else {
        unique[relation[j][notUnique4[k]]+relation[j][notUnique4[i-k-2]]+relation[j][notUnique4[i-k-1]]+relation[j][notUnique4[i-k]]] = 1;
      }
    }
    if(ketemu == 1){
      unique = {};
    } else {
      answer++;
      delete notUnique4[k]
      delete notUnique4[i-k-2]
      delete notUnique4[i-k-1]
      delete notUnique4[i-k]
    }
  }
  return answer;
}