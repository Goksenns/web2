// document.getElementById("count-el").innerText = 5

// let firstBatch= 5
// let secondBatch= 7

// let count= firstBatch + secondBatch

// console.log(count)

// let bonusPoints= 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count+=1
    countEl.textContent=count
}

function save() {

     let countStr= count + " - "
     saveEl.textContent += countStr
     countEl.textContent=0
     count=0

}

let myPoints= 3

 function add3Points() {
    myPoints+=3
 }
 function remove1Points() {
    myPoints-=1
 }










