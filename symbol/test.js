let s = Symbol();
console.log(typeof s);

// Symbol的参数只是为了描述当前Symbol对象使用~
let a = Symbol('aaa');
console.log(a);

let aa = Symbol('aaa');
let bb = Symbol('aaa');
console.log(aa === bb);