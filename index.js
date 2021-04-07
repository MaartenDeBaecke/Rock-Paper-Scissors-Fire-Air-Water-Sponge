let user_item = "undefined";
let bot_item = "undefined"

let elements = {
	0: "Rock",
  1: "Paper",
	2: "Scissors",
  3: "Fire",
  4: "Air",
  5: "Water",
  6: "Sponge"
};

let winsFrom = {
  "Rock": ["Fire", "Scissors", "Sponge"], //Rock wins from Fire, Scissors and Sponge
  "Paper": ["Air", "Water", "Rock"],
  "Scissors": ["Sponge", "Air", "Paper"],
  "Fire": ["Sponge", "Paper", "Scissors"],
  "Air": ["Water", "Rock", "Fire"],
  "Water": ["Fire", "Rock", "Scissors"],
  "Sponge": ["Water", "Paper", "Air"]
}

let emojiDic = {
  "Rock": "🗿",
  "Paper": "📄",
  "Scissors": "✂️",
  "Fire": "🔥",
  "Air": "💨",
  "Water": "🌊",
  "Sponge": "🧽"
}

function game(){
  botItem();

  let countdown = document.getElementById("countDown");
  let i = 3;
  countdown.innerHTML = i.toString();

  var clock = setInterval(function(){
    i--;
    countdown.innerHTML = i.toString();

    if (i <= 0){
      clearInterval(clock);
    }
  }, 700)




  setTimeout(function(){
    let bot_emoji = document.getElementById("emoji1");
    let user_emoji = document.getElementById("emoji2");
    bot_emoji.innerHTML = emojiDic[user_item];
    user_emoji.innerHTML = emojiDic[bot_item];

    winner(user_item, bot_item);
  }, i * 700);



}

function userItem(item){
 user_item = item;

 let bot_emoji = document.getElementById("emoji1");
 let user_emoji = document.getElementById("emoji2");
 bot_emoji.innerHTML = "👊";
 user_emoji.innerHTML = "👊";
 let subtext = document.getElementById("subtext");
 subtext.classList.add("invisible");

 game();
}

function botItem(){
  let int = Math.floor(Math.random() * (Object.keys(winsFrom).length)); //get random number between len(winsFrom) -1  and 0
  console.log(int);
  bot_item = elements[int];
}

function winner(user, bot){
  let defeats = winsFrom[user];

  let countdown = document.getElementById("countDown");
  let subtext = document.getElementById("subtext");
  subtext.classList.remove("invisible");

  if (user === bot){
    countdown.innerHTML = "You Tie!";
  } else if (defeats.includes(bot)){
    countdown.innerHTML = "Wins from";
    subtext.innerHTML = "You Win!";
  } else {
    countdown.innerHTML = "Loses from";
    subtext.innerHTML = "You Lose!";
  }
}
