 var b int
 fmt.Print("Enter a number for the multiplication table: ")
 fmt.Scanln(&b)
 for i := 1; i < 10; i++ {
	fmt.Println(b ,"x",i,"=",b*i)
}

















 const a = ["abdullah", "umer", "ali"]
const b = [1, 2, 3, 4]

 var c = a.concat(b)
  var d= c.join("/")
 document.write(d)


 const a = ["abdullah", "umer", "ali","Test","Amar"];

 var d = a.slice(1,4)

 document.write(d)


const a = ["abdullah", "umer", "ali","Test","Amar"];

 a.splice(1,2,"ok")

document.write(a)
