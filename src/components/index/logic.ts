function result(seleted:string){
  const rules = {
    paper: "rock" ,
    scissors: "paper" ,
    rock: "scissors" 
  }
  const answer = ["paper", "scissors", "rock"];
  const number = answer[Math.floor(Math.random() * 3)];
  let myresult: string = "";
  
  if (seleted === number) {
    myresult = "YOU LOSE";
  } else {
    myresult = "YOU WIN";
  }
  return({myresult, seleted})
}

export default result;