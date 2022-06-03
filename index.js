const guessGame =()=>{
  const username = prompt('Enter your username: ')
  if(!username){
    console.log('Please enter a valid username')
  }
  console.log('Welcome to stage 1', username)
let stage = 1
   let range = 2
  while(true){

     console.log('Generate a number between 1 and ', range)
    let hiddenNo = Math.floor(Math.random() * range) +1
    console.log(hiddenNo,'hiddenNo')
    const guessNumber = parseInt(prompt('Your Guess: '))
    if(guessNumber === hiddenNo){
         console.log("You're in stage", stage++, username)
      range++
      continue
    } else{
      console.log('Incorrect Guess! Game Over',username)
      break
    }
    
  }
  
}

guessGame()