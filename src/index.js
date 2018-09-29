module.exports = function check(str, bracketsConfig) {

  let left = [], right = [], strarr = [], box = [],
      leftsum = 0, rightsum = 0,  answer = true; 
  
  for (let i = 0; i < bracketsConfig.length; i++){ 
    left.push(bracketsConfig[i][0]); 
    right.push(bracketsConfig[i][1]); 
  };
  
  for (let i = 0; i < str.length; i++){ 
    strarr.push(str[i]); 
    for (let j = 0; j < left.length; j++){ 
      if (strarr[i] == left[j]){ 
      leftsum = leftsum + 1; 
      } 
      if (strarr[i] == right[j]){ 
      rightsum = rightsum + 1; 
      } 
    } 
  }; 
  
  if (rightsum == leftsum){ 
  box.push(true); 
  } 
  else { 
  box.push(false); 
  };
  
  if (strarr.length%2 == 0){ 
  box.push(true); 
  } 
  else { 
  box.push(false); 
  }; 
  
  while (strarr.length > 1){ 
    let flag2 = false, a; 
    for (let i = 0; i < strarr.length; i++){ 
      for (let j = 0; j < left.length; j++){ 
        if(strarr[i] == left[j]){ 
        a = right[j]; 
        } 
        if (strarr[i] == right[j] && strarr[i] != "|" 
        && strarr[i] != "7" && strarr[i] != "8"){ 
        a = 0; 
        } 
      } 
      if (strarr[i+1] == a){ 
        strarr.splice(i,2); 
        box.push(true); 
        flag2 = true; 
      } 
     }
    if (flag2 == true){ 
    continue; 
    } 
    else { 
    box.push(false); 
    break; 
    } 
  }; 

  for(let i = 0; i < box.length; i++){ 
    answer = answer * box[i]; 
  } 
  return answer; 
}