let input = document.getElementById('inputbox')
let lists = document.getElementById('list')


function addTask(){
    if(input.value ==""){
        window.alert("Please Enter Your Task");
    }
    else{
        let add = document.createElement('LI')
        add.textContent = input.value
        lists.appendChild(add)

        let spans = document.createElement('span');
        spans.textContent ="\u00d7"
        add.appendChild(spans)
    }
    input.value = ""
    saveData()
}




lists.addEventListener('click',(e)=>{
    if(e.target.tagName =="LI"){
    e.target.classList.toggle('checked')
    saveData()
    }
    else if(e.target.tagName =="SPAN") {
        e.target.parentElement.remove()
        saveData()

    }
  

    
})


function saveData(){
    localStorage.setItem("Tasks",lists.innerHTML)
    
}
function showData(){
    lists.innerHTML = localStorage.getItem("Tasks")
}

showData()

