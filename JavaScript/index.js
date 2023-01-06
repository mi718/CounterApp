let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
 count = count + 1
 countEl.innerText = count
 console.log(count)
}

function decrease(){
 count = count -1
 countEl.innerText = count
 console.log(count)
}

let id = 1
let day = document.getElementById(id)
let average = document.getElementById("average-th")
let globalCount = 0

function save(){
 globalCount += count
 countEl.innerText = 0
 average.innerText = globalCount / id
 day.innerText = count
 id+=1
 count = 0
 day = document.getElementById(id)
 average = document.getElementById("average-th")
 if(id > 7)
 {document.getElementById("options").style.display ='block'}
}
