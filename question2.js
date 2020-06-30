function solution(N, users) {
  let answer = [];
  let rate = {};
  var user = {};
  for (var i = 0; i < users.length; i++){
    if(user.hasOwnProperty(users[i])){
      user[users[i]]++;
    } else {
      user[users[i]] = 1;
    }
  }
  var countUser = users.length;
  for (var i = 1; i <= N; i++){
    let index = i.toString();
    if(user.hasOwnProperty(index)){
      rate[i] = (user[index]/countUser);
      countUser -= user[i+1]
    } else {
      rate[i] = 0;
    }
  }
  answer = Object.keys(rate).sort(function(a,b){return rate[b]-rate[a]})
  return answer;
}