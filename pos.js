const finalPosition = function (marr){
  // Your code in here ...
    let pos = [0,0]
    for (const elem of marr){
      switch(elem){
      case 'north':
        pos[1] += 1;
        break;      
      case 'east':
        pos[0] += 1;
        break;      
      case 'south':
        pos[1] -= 1;   
        break;   
      case 'west':
        pos[0] -= 1;
        break;
      }
    }
    return pos; 
  }