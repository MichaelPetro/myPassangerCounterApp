let saveEl = document.getElementById("save-el")
let countEl=document.getElementById("count")
console.log(countEl)
console.log(saveEl)

let counter=0


function increment(){
    counter+=1
    countEl.innerText=counter
}

function decrement(){
    counter-=1
    countEl.innerText=counter
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStrg = counter + " - "
    saveEl.textContent +=countStrg
    console.log(counter)
    countEl.textContent=0
    counter.textContent=0
    counter=0
}
