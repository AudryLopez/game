export function result(seleted:any){
  const rules = [
    { paper: "rock" },
    { scissors: "paper" },
    { rock: "scissors" },
  ]
  const number = Math.floor(Math.random() * 3);
  const mine = rules[number]
  
  if (seleted === mine) {
    return "YOU LOSE";
  } else {
    return "YOU WIN";
  }
}