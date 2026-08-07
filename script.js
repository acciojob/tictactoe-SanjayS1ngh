//your JS code here. If required.
let msg=document.querySelector("#message");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
let currentPlayer;
let board=["","","","","","","","",""]
let gameOver=false;
let btn=document.querySelector("#submit");
btn.addEventListener("click",()=>{
	currentPlayer=player1.value;
	document.querySelector("#message").innerText=`${currentPlayer}, you're up`;
	let set=document.querySelector(".setup");
	set.style.display="none";
	document.querySelector(".game").style.display="block"
})

let cells=document.querySelectorAll(".cell");
cells.forEach((cell)=>{
	cell.addEventListener("click",()=>{
		if(gameOver)return;
		let index=cell.id-1;
		if(board[index]!==""){
			return;
		}
		if(currentPlayer==player1.value){
			board[index]="X";
			cell.innerText="X";
			if(checkWinner("X")){
				msg.innerText=`${player1.value} congratulations you won!`;
				gameOver=true;
				
			}
			currentPlayer=player2.value;

		}
		else{

            board[index]="O";
            cell.innerHTML="O";

            if(checkWinner("O")){
                msg.innerText=`${player2.value} congratulations you won!`;
				gameOver=true;
                return;
            }

            currentPlayer=player1.value;
        }
		msg.innerText=`${currentPlayer}, you're up`;
	})
})
function checkWinner(symbol){
	let winningPatterns=[

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];
	for(let pattern of winningPatterns){
		let a=pattern[0];
		let b=pattern[1];
		let c=pattern[2];
		if(board[a]==symbol &&board[b]==symbol && board[c]==symbol){
			return true;
		}
	}
	return false;
}