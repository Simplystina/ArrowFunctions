const guessGame =()=>{
  
  const username = prompt('Enter your username: ')
  if(!username){ //checks if user enters a username
    console.log('Please enter a valid username')
    return
  }
  
  console.log()
  let stage = 1
   let range = 2
  console.log('Welcome to stage', stage, username)
  console.log()
  
  while(true){  //loops runs until user enters a wrong input

     console.log('Generate a number between 1 and ', range)
    let hiddenNo = Math.floor(Math.random() * range) +1 //generates number within specified range
   
    const guessNumber = parseInt(prompt('Your Guess: ')) //accepts users input
    if(guessNumber === hiddenNo){ //compares input to the hiddenNo
        stage++  //increase users stage if correct
         console.log("You're in stage", stage, username)
      console.log()
      range++  //increase range if correct
      continue
    } else{
      console.log('Incorrect Guess! Game Over',username,'You stopped at stage', stage) 
      break //ended loop if input is not equal to hiddenNo
    }
    
  }
  
}

guessGame()