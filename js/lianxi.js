// 111
let abc = [3, 4, 5, 64, 3, 7, 6, 10, 23];
console.log(abc);
console.log("phan tu tai vi tri index 8 la " + abc[8]);
console.log("phan tu cua vi tri index 3 la " + abc[3]);


// 222
let string = ["blue", "red"];
console.log(string);


// 333
let arr = new Array(6, 8, 9,);
console.log(arr);


// 444      for in      vi tri/chi so
console.log("for in---vi tri");
for (let key in abc) {
    // console.log(key);
    console.log(abc[key]);
}
//  tim tong cac phan tu trong mang
console.log("tim tong cac phan tu trong mang");
let aaa = [11, 4, 5, 64, 3, 7, 6, 20, 22];
let sum = 0;
for (let key in aaa) {
    // (for in) no se hien ra vi tri 0,1,2,3...,
    //cho nen can ghi aaa[key].
    sum += aaa[key]
}
console.log(sum);


// 555    for of      tim phan tu
console.log("for of--phan tu");
console.log("tinh tích cua cac phan tu trong mang");
let bbb = [1, 2, 3, 6, 7, 8, 9, 10];
let all = 1;
for (let kkk of bbb) {
    // (for of)hien ra tung phan tu ben trong mang 1,2,3.
    // cho nen can ghi thang luon kkk  (ko phai bbb[kkkF]).
    all *= kkk;
}
console.log(all);


//   for i
console.log("for i");
for (let i = 0; i < bbb.length; i++) {
    if (bbb[i] % 3 == 0) {
        console.log(bbb[i]);
    }
}


//   push
console.log("push---them mot phan tu vao trong mang");
let cacConVat = [];
cacConVat.push("dog");
cacConVat.push("cat");
cacConVat.push("chicken");
console.log(cacConVat);
//  cach thuc hoat dong cua   push
// cacConVat[cacConVat.length] = "birt" = cacConVat.push("birt")
let aaabbb = ["monkey", "money", "dola"]
for (let i = 0; i < aaabbb.length; i++) {
    cacConVat.push(aaabbb[i])
}
console.log(cacConVat);


//  pop
console.log("pop---lay va xoa phan tu cuoi");
let deletee = [2, 3, 4, 5, 6, 7, 666, 665, 777, 888];
console.log(deletee.pop());
console.log(deletee);


//  join
console.log("join---chuyen mang thanh chuoi");
let qwe = [1, 2, 3, 4, 5, 6, 7, 8];
let stringstring = qwe.join(" ");
console.log(stringstring);
// console.log(qwe.toString());


// reverse
console.log("reverse---dao nguoc cac phan tu trong mang");
console.log(qwe.reverse());


// sort
console.log("sort---sap xep mang theo thu tu tang dan");
let arry = new Array("banana", "cherry", "apple");
console.log(arry.sort());


// concat
console.log("concat---noi cac mang voi nhau");
console.log(qwe.concat([9, 10], [11, 12]));


// unshift       để nối phần tử đầu tiên của mảng
// shift         để xóa phần tử vào đầu mảng
let arrdemo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrdemo.unshift(10, 20, 30);
// arrdemo.shift()
arrdemo.splice(4, 1)
console.log(arrdemo);













