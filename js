 var b int
 fmt.Print("Enter a number for the multiplication table: ")
 fmt.Scanln(&b)
 for i := 1; i < 10; i++ {
	fmt.Println(b ,"x",i,"=",b*i)
}
















////////////////////////join
 const a = ["abdullah", "umer", "ali"]
const b = [1, 2, 3, 4]

 var c = a.concat(b)
  var d= c.join("/")
 document.write(d)

////////////////////////slice
 const a = ["abdullah", "umer", "ali","Test","Amar"];

 var d = a.slice(1,4)

 document.write(d)

////////////////////////splice
const a = ["abdullah", "umer", "ali","Test","Amar"];

 a.splice(1,2,"ok")

document.write(a)






////////////////////////isArray


const a = ["abdullah", "umer", "ali","Test","Amar"];

 const  b=Array.isArray(a)

document.write(b)
















////////////////////////indexOf

// const a = ["abdullah", "umer", "ali","Test","Amar"];

//  const  b=a.indexOf("umer")
// document.write(b)

////////////////////////includes
// const a = ["abdullah", "umer", "ali", "Test", "Amar"];

// const b = a.includes("umer");
// document.write(b);

////////////////////////lastIndexOf
// const a = ["abdullah", "umer", "ali", "Test", "Amar"];

// var b = a.lastIndexOf("ali");
// document.write(b);



////////////////////////forEach
//  const a = ["abdullah", "umer", "ali","Test","Amar"];


// a.forEach(
//    function (value,index) {
//      document.write(  index,value+"<br/>")
//    }
//  )

////////////////////////Object()
// var person = new Object()

// person.age = 18
// person.id = 1;
// person.name = "name";


// document.write(person.age)



////////////////////////foreachloop

const a = [{ name: "abdullah" }, { name: "umer" }, { name: "ali" }];


a.forEach((item) => {
  document.write(item.name);
});


////////////////////////loop
 const a = [{ name: "abdullah" }, { name: "umer" }, { name: "ali" }];
for (let i = 0; i < a.length; i++) {
  document.write(a[i].name+"<br/>");
}





////////////////////////table

<input type="text" placeholder="enter a value" id="value">
<button onclick="generateTable()">Generate Table</button>

function generateTable() {
  const value = parseInt(document.getElementById("value").value);

  for (let i = 1; i <11; i++) {
    document.write(value + " x " + i + " = " + i * value + "<br>");
  }
}


/////////////////////Fiter



const age = [1, 5, 3, 47, 2, 1, 56, 7, 10, 93, 6, 1, 47, 99, 1,]
const ages= age.filter((age,index) => age >50 )

     console.log(ages)


////////////



const age = [1, 5, 3, 47, 2, 1, 56, 7, 10, 93, 6, 1, 47, 99, 1,]
const ages= age.filter((age,index) => age >50 )

     console.log(ages)

     const dataArray = [
       {
         name: "Event 1",
         category: "Conference",
         start: "2024-05-01",
         end: "2024-05-03",
       },
       {
         name: "Event 2",
         category: "Workshop",
         start: "2024-06-10",
         end: "2024-06-12",
       },
       {
         name: "Event 3",
         category: "Seminar",
         start: "2024-07-15",
         end: "2024-07-16",
       },
       {
         name: "Event 4",
         category: "Webinar",
         start: "2024-08-05",
         end: "2024-08-05",
       },
       {
         name: "Event 5",
         category: "Conference",
         start: "2024-09-20",
         end: "2024-09-20",
       },
       {
         name: "Event 6",
         category: "Symposium",
         start: "2024-10-10",
         end: "2024-10-12",
       },
       {
         name: "Event 7",
         category: "Expo",
         start: "2024-11-05",
         end: "2024-11-07",
       },
       {
         name: "Event 8",
         category: "Summit",
         start: "2024-12-01",
         end: "2024-12-02",
       },
       {
         name: "Event 9",
         category: "Hackathon",
         start: "2024-12-15",
         end: "2024-12-17",
       },
       {
         name: "Event 10",
         category: "Forum",
         start: "2025-01-10",
         end: "2025-01-11",
       },
     ];
     
const company = dataArray.filter((name) => {
    if (name.category === "Conference") {
        return true
    }
})

console.log('====================================');
console.log(company);
console.log('====================================');



const map = dataArray.map((item,index) => {
 return `${item.category} ${item.start}`
})

console.log('====================================');
console.log(map);
console.log('====================================');
