var password = Symbol("password");


let user = {
    name:"Trang",
    age:21,
    address:{
        city:"Ha Noi",
        street:"Tay Son"
    },
    [password]: 34453,

    [Symbol.toPrimitive](hint){
        // alert(`hint: ${hint}`);
        return hint == "string" ? this.name : this.age;
    }
}



console.log(user+1)