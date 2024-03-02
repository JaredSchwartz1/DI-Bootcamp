const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
let passedStudents=students.filter((val)=>val.isPassed==true)
console.log(passedStudents)

passedStudents=students.filter((val)=>val.isPassed==true).forEach((element,i)=>{
    console.log(`Congrats ${element.name}, you have succeeded in your course ${element.course} and have passed.`)
})
