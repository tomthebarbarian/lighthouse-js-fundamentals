//function urlDecode takes a url string(text) and returns it converted into an
// object. 

// str -> obj
const urlDecode = function(text) {
  // Put your solution here
  let ansobj = {}

  //split into key value
  let keys = text.split('&')
  //console.log(keys)

  // assign keys to value
  for (let iter = 0; iter < keys.length; iter++){
    keys[iter] = keys[iter].split('=')
    ansobj[keys[iter][0]] = keys[iter][1]
    
    let tempval = ''
    for (let elem of keys[iter][1].split('%20')){
      if (tempval !== ''){
        tempval += ' '
      }
      tempval += elem
    }
    ansobj[keys[iter][0]] = tempval
  //console.log(keys)
  //console.log(ansobj)
  }
  return ansobj
};


//console.log(urlDecode("duck=rubber"));
//console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);