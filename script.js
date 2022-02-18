let ulTask = document.getElementById('ulTask');
let addBtn = document.getElementById('addBtn');
let clearBtn = document.getElementById('clearBtn');
let inpNewtask = document.getElementById('inpNewtask');
let clearAllBtn = document.getElementById('clearAll');
let darkMode = document.getElementById('darkMode');

function addList(){  
    if(inpNewtask.value != ""){
        var listItem = document.createElement('li');
        listItem.classList.add("list-group-item");
        ulTask.append(listItem);
        listItem.textContent = inpNewtask.value;
        inpNewtask.value = "";
    }
     
}

addBtn.addEventListener('click',()=>{
    addList();
});

clearBtn.addEventListener('click',()=>{
    inpNewtask.value = "";
})

inpNewtask.addEventListener("keypress", function(event) {
    if(event.keyCode === 13){
        addList();
    }
});

clearAllBtn.addEventListener('click',()=>{
    const elements = document.getElementsByClassName("list-group-item");

    while(elements.length > 0){
      elements[0].remove();
    }
    // while (elements.length > 0) elements[4].remove();
})

darkMode.addEventListener('click',()=>{
    document.body.style.backgroundColor = "blue";
    console.log('mode is changed');
})