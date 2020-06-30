function solution(record) {
  let answer = [];
  var user = {};
  let list = [];
  record.forEach(myFunction);
  for (var i= 0; i < list.length; i = i+2){
    let nickname = user[list[i]];
    answer.push(nickname+" "+list[i+1]) 
  }
  function myFunction(item, index) {
    let split = item.split(" ");
    switch (split[0]){
      case "Enter":
        user[split[1]] = split[2];
        list.push(split[1]);
        list.push("came in.");
        break;
      case "Leave":
        list.push(split[1]);
        list.push("has left.");
        break;
      case "Change":
        user[split[1]] = split[2];
        break;
      default:
    }
  }
  return answer
}