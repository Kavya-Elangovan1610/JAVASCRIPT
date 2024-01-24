//LOOPING

//FOR LOOP

sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)

//WHILE
/*
i=0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum)

//do..while

i=0
while(i<10)
{
    i++
    sum+=i
}
while(i<10)
console.log(sum) */

/*arr=[10,20,30]
console.log(arr.length)
for(var i=0;i,arr.length;i++)
{
    console.log(arr[i])
}*/


//for in loop->based on index

arr=[10,20,"string","kongu",20,true]
for (const index in arr) {
    console.log("the value present",index,"is",arr[index])
        
    }

//for of-->it is used to access the element directly

arr=[10,20,"string","kongu",20,true]
for(const value of arr)
{
    console.log(value)
}

//for each loop

arr=[10,"string","kongu",20,true]
arr.forEach(value=>{
    console.log(value)
})
//Need to be rectified
kongu["fees"]=1000000
kongu["accomdation"]="Excellant"
kongu["Food"]="pretty worst"
kongu["Hostelcount"]="10"
console.log(kongu)

//for in

 /*for (key in kongu){
    console.log(key,kongu[key])
 }*/


