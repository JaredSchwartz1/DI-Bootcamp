const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
let username = []
let volumeScorers =[]
let sum=0;
let exclam=gameInfo.forEach((obj, i, arr) => {
    obj.username = `${obj.username}!`
    username.push(obj.username)
    if (i == arr.length - 1) {
        console.log(username)
    }
})
let Scorers=gameInfo.forEach((obj, i, arr)=>{
obj.score>5?volumeScorers.push(obj.username.slice(0,obj.username.length-1)):null
if (i == arr.length - 1) {
    console.log(volumeScorers)
}
})

let score=gameInfo.forEach((obj, i, arr)=>{
sum+=obj.score
if (i == arr.length - 1) {
    console.log(sum)
}
})