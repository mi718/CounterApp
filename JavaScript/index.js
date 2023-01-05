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

}

let id = 1
let day = document.getElementById(id)
let average = document.getElementById("average-th")
let globalCount = 0
 console.log(globalCount)


function save(){
 globalCount += count
 average.innerText = globalCount / id
 day.innerText = count
 id+=1
 day = document.getElementById(id)
 average = document.getElementById("average-th")
}
