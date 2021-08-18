for (let iter = 100; iter <= 200; iter++){
  if (iter % 3 === 0 && iter % 4 === 0){
    console.log('LoopyLighthouse')
  } else if (iter % 3 === 0){
    console.log('Loopy')
  } else if (iter % 4 === 0){
    console.log('Lighthouse')
  } else {
    console.log(iter)
  }
}