 var b int
 fmt.Print("Enter a number for the multiplication table: ")
 fmt.Scanln(&b)
 for i := 1; i < 10; i++ {
	fmt.Println(b ,"x",i,"=",b*i)
}
