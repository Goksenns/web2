let data = [
    {
        player: "jane",
        score: 52
    },
    {
        player : "mark",
        score:41
    }
]

const logBtn = document.getElementById("log-btn")

logBtn.addEventListener("click", function() {
    console.log(data[0].score)
})