var Company = (function Module(employee){
    var publicAccess = {askMe};
    return publicAccess;
    function askMe(question){
        console.log(employee, question);
    }
})("Truder, ");

Company.askMe("Still are you being loyal ?");