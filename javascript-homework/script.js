// first homework
function math(num1, operator ,num2 ) {
    if (operator === "+") { 
        return num1 + num2;
    }else if (operator === "-") { 
        return num1 - num2;
    }else if (operator === "*") { 
        return num1 * num2;
    }else if (operator === "/") { 
        return num1 / num2;
    }
}

console.log(math(5,'*',3));
//second homework
let user = {
    A: {Name:'Ali', Email:'ali@outlook.com', BirthDate:'2004-21-01', Password:'123'},
    B: {Name:'Behzad', Email:'behzad@gmail.com', BirthDate:'2005-22-02', Password:'456'},
    C: {Name:'korosh', Email:'korosh@yahoo.com', BirthDate:'2006-23-03', Password:'789'},
    D: {Name:'Dariush', Email:'dariush@outlook.com', BirthDate:'2007-24-04', Password:'012'},
    E: {Name:'Ehsan', Email:'ehsan@gmail.com', BirthDate:'2008-25-05', Password:'345'},
    F: {Name:'Farhad', Email:'farhad@outlook.com', BirthDate:'2009-26-06', Password:'678'}
};
function searchObj(Obj,Keyword) {
    for(const[key,value] of Object.entries(Obj)){
        for(const [key2,value2] of Object.entries(value)){
            if(value2 == Keyword){
                console.log(key,key2)
            }
        }
    }
}
searchObj(user,'Ali');
//third homework
function mix(Obj,Func,Keyword){
    return Func(Obj, Keyword)
}
mix(user,searchObj,'Ehsan');
