const welcomeEl = document.getElementById("welcome-el")

//                     parameters
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

//             arguments
greetUser("Welcome back","Goksen","👋")



//NUMBERS AS FUNCTİON PARAMETERES

function add(firstnum, secondnum) {
    sum = firstnum + secondnum
    return sum
}

console.log(add(3,4))
console.log(add(9,102))


// ARRAYS AS PARAMETERS

function getFirst(arr){
    return arr[0]
}

console.log(getFirst([12, 5, 9]))