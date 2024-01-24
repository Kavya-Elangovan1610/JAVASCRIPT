function fun(a,b){
    console.log("Function with argument and without argument:")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number",i,"is even")
        }
        else
        {
            console.log("The number" ,i, "is odd")
        }
    }
}
fun(5,10)

//function with return type

function eve(a,b)
{
    return a,b
}
console.log(eve(1,2))

function arr(a){
    return a=10      //var a=10
                     //return a
}
console.log(arr())