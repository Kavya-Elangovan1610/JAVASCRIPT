//callback

/*function ramusomu(WelcomeMessage,callback)
{
    setTimeout(function(){
        console.log(WelcomeMessage)
        callback();
    },2000)
}
function miniAni()
{
    console.log("Odi poiru vanthudatha da thambi!!!")
}
ramusomu("Hello ramusomu\n welcome to kongu engineerng college",miniAni)*/

//Form submission

function submitForm(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick);
        db();
    },2000)
}
function database(){
    console.log("Form submitted successfully")
}
submitForm("Form submit button clicked",database)
