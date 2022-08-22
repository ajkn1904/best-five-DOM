// -----------------creating li and inserting them to select-v div------------------
document.getElementById('contentsDiv').addEventListener('click', function(event){
    const clickedText = event.target.parentNode.children[0].innerText;
    const createChildNode = document.getElementById('selected-v-list');
    const olChildren = document.createElement("li");
    olChildren.innerText = clickedText;
    
    if(createChildNode.childElementCount >= 5){
        alert("Your selecting stack is full!");
    }
    else{
        createChildNode.appendChild(olChildren);
    }
});