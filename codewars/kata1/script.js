//my resolve
const data = [[59, 12],[55,-1],[12, -2],[12, 12]]
function openOrSenior(data){
    const newAr = []
    for (let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
            if( data[i][j] >= 55 && data[i][j+1] > 7){
               newAr[i]="Senior"
            }
            else
            newAr[i] = "Open"
            break;    
        }
    }
    console.log(newAr)
  }
  openOrSenior(data);

  //through the map
  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

  //through the foreach
  function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
  }
  console.log("-----------------------")
  
  //the best resolve
  const openOr = (data) => data.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')
  console.log(openOr(data))