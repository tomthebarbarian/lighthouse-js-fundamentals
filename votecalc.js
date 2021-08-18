const chooseStations = (stationsarr) => {
  let answarr = [];
  for (const stations of stationsarr){
    if (stations[1] >= 20 && ['school', 'community centre'].includes(stations[2])){
      answarr.push(stations[0])
      //console.log(answarr)
    }
  }
  return answarr;
}