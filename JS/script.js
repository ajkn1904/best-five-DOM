const selectVHeaderNumber = document.getElementById('selected-v-header');
const playerExpenseText = document.getElementById('player-expense');

// -----------------creating li and inserting them to select-v div------------------
const btns = document.querySelectorAll('.contentsDivBtn');

btns.forEach(contentsDivBtn => {
contentsDivBtn.addEventListener('click', function(event){
    
    const clickedText = event.target.previousElementSibling.innerText;
    event.stopPropagation(clickedText);
    const createChildNode = document.getElementById('selected-v-list');
    const olChildren = document.createElement("li");
    olChildren.innerText = clickedText;
    
    if(createChildNode.childElementCount >= 5){
        alert("Your selector stack is full!");

    }
    else{
        createChildNode.appendChild(olChildren);
        selectVHeaderNumber.innerText = createChildNode.childElementCount;
    }
});
});

document.getElementById('calculate-btn').addEventListener('click', function(){
    const selectdNumber = parseInt(selectVHeaderNumber.innerText);

    const perPlayer = document.getElementById('per-player');
    const perPlayerCost = parseFloat(perPlayer.value);

    const playerExpense = playerExpenseText.innerText;

    const playerExpenses  = perPlayerCost * selectdNumber;

    playerExpenseText.innerText = playerExpenses;

    perPlayer.value ='';

});

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpense = parseFloat(playerExpenseText.innerText);

    const manegerCost = document.getElementById('maneger');
    const manegerCostValue = parseFloat(manegerCost.value);

    const coachCost = document.getElementById('coach');
    const coachCostValue = parseFloat(coachCost.value);

    const getTotalText =  document.getElementById('total');
    
    const totalExpenses = playerExpense + manegerCostValue + coachCostValue;

    getTotalText.innerText = totalExpenses;

    manegerCost.value ='';
    coachCost.value ='';

});

