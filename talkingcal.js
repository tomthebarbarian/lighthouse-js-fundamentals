// Function talkingCalendar takes in a str(date) representing a date
// and returns a human readable date.

const talkingCalendar = function(date) {
  // Your code here
  const year = date.substring(0,4)
  //console.log(year)
  let month = date.substring(5,7)
  let day = date.substring(8,10)

  switch (month){
  case '01':
    month = 'January'
    break;
  case '02':
    month = 'February'
    break;  
  case '03':
    month = 'March'
    break;  
  case '04':
    month = 'April'
    break;  
  case '05':
    month = 'May'
    break;  
  case '06':
    month = 'June'
    break;  
  case '07':
    month = 'July'
    break;  
  case '08':
    month = 'August'
    break;  
  case '09':
    month = 'September'
    break;  
  case '10':
    month = 'October'
    break;  
  case '11':
    month = 'November'
    break;  
  case '12':
    month = 'December'
    break;
  }
  // Add day suffix
  switch(day){
  case '01'||'21'||'31':
    day = day + 'st'
    break;
  case '02'||'22':
    day = day + 'nd'
    break;
  case '03'||'23': 
    day = day + 'rd'
    break;
  default:
    day = day + 'th'
    break;
  }
  //Remove leading 0
  //console.log(day)
  if (day[0] === '0'){
    day = day.substring(1, day.length)
  }

  return `${month} ${day}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));