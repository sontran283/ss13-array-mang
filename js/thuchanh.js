// thuc hanh 2: dao nguoc cac phan tu trong mang
// cach 1:
let ten = "le van an"
let doDai = ten.length   //lay do dai cua chuoi
let aaa2 = ""            //chuoi ket qua
for (let i = doDai - 1; i >= 0; i--) {
    // i = doDai-1 : la giu vi tri o cuoi chuoi
    // i--: lui dan ve dau chuoi
    // i >= 0 van con chuoi de lui

    //  them cac phan tu cho chuoi ket qua bang cac phan tu cua chuoi ban dau.
    //  theo thu tu tu cuoi ve dau vi , mk lap tu cuoi chuoi ve dau chuoi.
    aaa2 += ten[i]
}
console.log(aaa2);
// console.log(aaa2.split("")); or

// cach 2:
// console.log(ten.split("").reverse().join(""));



// thuc hanh 3: tim gia tri trong mang
// const arr = ["nam", "minh", "huy", "tuan", "anh"] // khai bao mang cac ten
// const namez = prompt("nhap ten mot nguoi") //nguoi dung nhap ten ho muon
// // dùng hàm indexOf để tìm kiếm vị trị của namez trong mảng arr
// // nếu tìm thấy sẽ trả ra vị trí của namez trong mảng arr
// // nếu không thấy sẽ trả ra -1
// let index = arr.IndexOf(namez)
// // kiểm tra vị trí tìm thấy
// // nếu khác -1 tức là tìm thấy thì in ra vị trí + 1 vì trong arr đánh chỉ số từ 0
// // nếu = -1 tức là ko tìm thấy
// if (index != -1) {
//     console.log("vi tri", index + 1);
// } else {
//     console.log("khong co!");
// }


// thuc hanh 4: LUYỆN TẬP VÀ THAO TÁC MẢNG
// let array = [];
// for (let i = 0; i < 5; i++) {
//     array.push(i);
// }
// console.log("Sử dụng phương thức push()", array);

// let a = 10;
// array.unshift(a);
// console.log("Sử dụng phương thức unshift()", array);

// array.pop();
// console.log("Sử dụng phương thức pop()", array);

// array.shift()
// console.log("Sử dụng phương thức shift()", array);

// array.splice(1, 2)
// console.log("Sử dụng phương thức splice()", array);


// thuc hanh 5: TÌM GIÁ TRỊ TRONG MẢNG
// Tìm giá trị trong mảng
// let array = [1, 2, 3, 4, 5, 6];
// let n = prompt("Nhập vào số bất kỳ");

// let check = false;
// for (let i = 0; i < array.length; i++) {
//     if (n == array[i]) {
//         check = true;
//     }
// }
// if (check == true) {
//     alert("Bingo");
// } else {
//     alert("Chúc bạn may mắn lần sau");
// }


// thuc hanh 6 :ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG
// let n = "hello word";
// let convert = n.split(' ');
// console.log(convert.reverse());


// let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
// let convert = n.split(",");
// consoloe.log("Chuyển đổi string sang array", convert);

// let array = [];
// for (i = convert.length - 1; i >= 0; i--) {
//     array.push(convert[i]);
// }
// console.log("Đảo ngược các phần tử", array);


// thuc hanh 7:TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG
// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu phẩy");
// let convert = a.split(",");
// console.log(convert);

// let max = convert[0];
// for (let i = 0; i < convert.length; i++) {
//     if (max < convert[i]) {
//         max = convert[i]
//     }
// }
// console.log(max);



