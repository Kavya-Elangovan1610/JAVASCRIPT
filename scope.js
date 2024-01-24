//LOCAL SCOPE
for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)

//BLOCK SCOPE

 var a=10
 console.log(a)
 {
    let a=5;   //LET refer only the block
    let b=5;
    console.log(b)
 }
 console.log(a)    




 