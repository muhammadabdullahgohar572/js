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
