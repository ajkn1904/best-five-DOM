function afterAddToList(element){
    element.disabled = true;
  }



const selectVHeaderNumber = document.getElementById('selected-v-header');
const playerExpenseText = document.getElementById('player-expense');



// ---------creating li and inserting them to select-v div--------
const btns = document.querySelectorAll('.contentsDivBtn');

btns.forEach(contentsDivBtn => {
contentsDivBtn.addEventListener('click', function(event){
    const clickedText = event.target.previousElementSibling.innerText;
    const createChildNode = document.getElementById('selected-v-list');
    const olChildren = document.createElement("li");
    olChildren.innerText = clickedText;
    
    if(createChildNode.childElementCount >= 5){
        alert("You can't select more than five. Your selector stack is full!");       
    }
    else{
        afterAddToList(this);
        createChildNode.appendChild(olChildren);
        selectVHeaderNumber.innerText = createChildNode.childElementCount;
    }

   });
});



document.getElementById('calculate-btn').addEventListener('click', function(){
    const selectedNumber = parseInt(selectVHeaderNumber.innerText);

    const perPlayer = document.getElementById('per-player');
    const perPlayerCostString = perPlayer.value;
    

    if(isNaN(perPlayerCostString) || (perPlayerCostString == '')){
        alert("Please enter a number.");
    }else{
        const perPlayerCost = parseFloat(perPlayerCostString)
    
        const playerExpense = playerExpenseText.innerText;
    
        const playerExpenses  = perPlayerCost * selectedNumber;
    
        playerExpenseText.innerText = playerExpenses;
    }


    perPlayer.value ='';

});



document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpense = parseFloat(playerExpenseText.innerText);

    const manegerCost = document.getElementById('maneger');
    const manegerCostValueString = manegerCost.value;

    const coachCost = document.getElementById('coach');
    const coachCostValueString = coachCost.value;


    if(isNaN(manegerCostValueString) || isNaN(coachCostValueString) || (manegerCostValueString=='') || (coachCostValueString=='')){
        alert("Please enter a number.");  
    }
    else{
        const manegerCostValue = parseFloat(manegerCostValueString);
        const coachCostValue = parseFloat(coachCostValueString);
        const getTotalText =  document.getElementById('total');
        
        const totalExpenses = playerExpense + manegerCostValue + coachCostValue;
    
        getTotalText.innerText = totalExpenses;
    }


    manegerCost.value ='';
    coachCost.value ='';

});

