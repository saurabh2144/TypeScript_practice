let a = "saurabh";


let arr : [number , string]=[ 22 , "sau"] ;
let pp : [number] = [1]

let b : number | string ;

b= 12;
b="sss";
console.log(b);

function  show (a :number ,b :string) :void {
    console.log(a,b);
}

show(3 ,"sj");

interface obj1 {
    name:string,
    age: number,
    address : string,
    gender ?: string 
}


function join (obj : obj1) : void {
    if ( obj.age > 18) {
        console.log(obj.age);
        
    }
    console.log('====================================');
    console.log("number is not  greater than 18 ");
    console.log('====================================');
}

join({name:"saurabh" ,age:14 ,address:"hayatganj"});