//async
/*
async function asAw(){
    var promise=new Pr(omise(function(response){
            setTimeout(function(){
                response("example of As");
            },1000);
        });

    
    console.log(await promise)
}
asAw();
*/
//kinf of our instagram
async function comment(){
    return new Promise(
        function (commentValue){
            setTimeout(function(){
                commentValue("This is my 1 st post")
            },1000);
            
        }
    );

}
async function like(){
    return new Promise(
        function (likeValue){
            setTimeout(function(){
                likeValue("This is my 1 st post")
            },1000);
            
        }
    );
}
async function post(){
    return new Promise(
        function (postResponse){
            setTimeout(function(){
                postResponse("This is my 1 st post")
            },1000);
            
        }
    );

var [feed,comment,like]=await Promise.all(post,commentCode(),like())
console.log(feed);
console.log(comment);
console.log(like);
}