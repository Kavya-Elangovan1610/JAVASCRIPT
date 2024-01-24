//PROMISE

console.log("\nPromise location example")
function isLocationValid(loc)
{
   var v = "coimbatore"
   if(v===loc)
   return true
   else
   return false
}
function location()
{
  return new Promise(function(response,errormsg)
  {
    setTimeout(function(){
      loc="coimbatore"
      if(isLocationValid(loc))
      response()
      else
      errormsg()
    },2000)
  })
}
location()
.then(function (response){
  console.log("Location Found !!!")
})
.catch(function (errormsg){
  console.log("Location not found !!!")
})
