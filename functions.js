function greetuser(greet,username='user'){
    console.log(greet+" "+username+"!")
}
greetuser('hi','sai');
greetuser('hi');

function sumup(...numbers){
    let result=0;
    for(const number of numbers){
        result+=number;
    }
    return result;
}
//const inputnumbers=;
console.log(sumup(5,8,32,4,9,3,41,8));

let a={ab:20};
function get(p){
    p.ab-=18;
    return p.ab;
}
console.log(get({...a}));
console.log(a);