//  cu phap khai báo 1 mảng.
//  mảng để lưu trữ một danh sách or tập hợp 1 giá trị.
let arrayInt = [5, 9, 3, 33, 6, 9, 2, 1, 10];
console.log(arrayInt);
let arrayString = ["apple", "banana"];
console.log(arrayString);

//  khai bao mang su dung tu khoa new
//  co the nhan vao so luong or phan tu
let array = new Array(8, 9, 10);
console.log(array);


// lay ra phan tu tai vi tri index=7 cua mang arrayInt
console.log("phan tu tai vi tri index =8 la " + arrayInt[8]);

arrayString[3] = "pineapple";

//          for in    vi tri/chi so
//          for in    vi tri/chi so
for (let item in arrayInt) {  //dung de lay ra lan luot cac chi so cua phan tu trong mang.
    // console.log(arrayInt[item]);
    console.log(item);
}
//  vi du :ting tong cac phan tu trong mang
// let sum = 0;
// for (const i in arrayInt) {
//     sum += arrayInt[i]
// }
// console.log(sum);



//          for of     phan tu
//          for of     phan tu
// tinh tich cua cac phan tu trong mang
let multi = 1;
for (const element of arrayInt) {  // duyet theo phan tu mang.
    multi *= element;
}
console.log(multi);


//           for i
for (let i = 0; i < arrayInt.length; i++) {
    console.log(arrayInt[i]);
}

// vidu : tim nhung phan tu chia het cho 3.
for (let i = 0; i < arrayInt.length; i++) {
    if (arrayInt[i] % 3 == 0) {
        console.log(arrayInt[i]);
    }
}

// them moi 1 phan tu vao cuoi cua mang    push
// them moi 1 phan tu vao cuoi cua mang    push
let arrayAnimals = [];
arrayAnimals.push("dog");
arrayAnimals.push("cat");
arrayAnimals.push("fish");
arrayAnimals.push("dug");
arrayAnimals.push("batman");
arrayAnimals.push("ironman");
arrayAnimals.push("superman");
arrayAnimals.push("monkey");
arrayAnimals.push("fashman");
arrayAnimals.push("blue");
console.log(arrayAnimals);

// cach push hoat dong
arrayAnimals[arrayAnimals.length] = "cow"
console.log(arrayAnimals);
let arrayAns = ["monkey", "chicken", "dog"]
for (let i = 0; i < arrayAns.length; i++) {
    // them lan luot cac phan tu vao cuoi mang
    arrayAnimals[arrayAnimals.length] = arrayAns[i]
}
console.log(arrayAnimals);


// chuyen mang thanh chuoi                 join
// chuyen mang thanh chuoi                 join
let arrJoin = [1, 2, 3, 4];
let string = arrJoin.join(" ");
console.log(string);

// dao nguoc cac phan tu trong mang        reverse
// dao nguoc cac phan tu trong mang        reverse
console.log(arrJoin.reverse());

// sap xep mang theo thu tu tang dan       sort
// sap xep mang theo thu tu tang dan       sort
arrayInt.sort(function (a, b) {
    return a - b;
})
console.log(arrayInt);

//  noi cac mang vs nhau                   concat
//  noi cac mang vs nhau                   concat
console.log(arrJoin.concat(arrayInt, [33, 44, 55]));

// lay va xoa phan tu cuoi                 pop
// lay va xoa phan tu cuoi                 pop
let elementDelete = arrayInt.pop()
console.log(elementDelete);

//  vi du :
let arrdemo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.push(6, 7, 8);
arrdemo.pop();
arrdemo.pop();
let deleteItem = arrdemo.pop();
console.log(arrdemo);
console.log(deleteItem);

// unshift       để nối phần tử đầu tiên của mảng
// shift         để xóa phần tử vào đầu mảng

arrdemo.unshift(7, 8, 9);
arrdemo.shift()  //xoa di lan 1
arrdemo.shift()  //xoa di lan 2
console.log(arrdemo);

// toString    chuyen doi thanh chuoi toString
console.log(arrdemo.toString());



//                                Mảng đa chiều
//                                Mảng đa chiều
//                                Mảng đa chiều
let arr2size = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2size[0][0]);

let arr2 = [[5, 8, 9, 2, 10, 3], [4, 2, 6, 8, 1, 0], [5, 9, 11, 2, 4, 6]]
console.log(arr2);
console.log(arr2[2][2]);   // lay ra phan tu


//   duyet mang 2 chieu
// for (let i = 0; i < arr2.length; i++) {
//     // arr2[i]  la mot mang
//     for (let j = 0; j < arr2[i].length; i++) {
//         console.log(arr2[i][j]);
//     }
// }

// tao 1 bang hai chieu m*n voi cac phan tu co gia tri ngau nhien tu 1-99
// m  hang
// n  cot
// fill  lam day

// Math.round(Math.random() * 98 + 1)
// Math.round   lam tron mot so thap phan thanh 1 so nguyen
// Math.random  tao mot so ngau nhien co gia tri tu 0-1         0《 Math.random*98《1
// let arrayRandom = new Array(10).fill(new Array(15));

let m = 10, n = 15;               //10 hang, 15 cot
let arrRandom = new Array(m);     //khai bao 1 cai mang co bn phan tu
console.log(arrRandom);

for (let i = 0; i < m; i++) {     //duyet arrRandom
    arrRandom[i = new Array(n)];  //phan tu tai vi tri cua mang arrRandom
    for (let j = 0; j < n; j++) { //duyet cac phan tu ben trong cua mang  arrRandom[i = new Array(n)];
        arrRandom[i][j] = Math.round(Math.random() * 98 + 1);  // gan cho bang gia tri ngau nhien tu 1-99
    }
}
console.log(arrRandom);



