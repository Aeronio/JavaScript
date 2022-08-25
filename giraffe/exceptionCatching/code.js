// EXCEPTION CATCHING

//var x = y + 9;

try{
    //keyword "throw" just throws a message/error no matter what
    //throw "Something went wrong"
    var x = y + 9;
}catch(err){
    document.write(err)
}finally{
    //This code always gets executed
    document.write("This is executing from the finally block")
}