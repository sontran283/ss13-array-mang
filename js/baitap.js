// Bài 2:
// Bài 2:
// Viết một chương trình nhận một số nhập vào và chèn dấu(_) giữa 2 số chẵn.
// Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8.
// b1: cho ng dung nhap vao 1 chuoi so
// b2: chuyen doi chuoi thanh mang, theo dk nao do
// b3: dung join de noi dau "-"


// cach 1:
// chuoi trong js cung la mot mang, chuoi la mot tap hop ky tu
// let string = "24546834356565256"
// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     //charAt ky tu tai vi tri nay
//     // console.log(string.charAt(i) % 2 == 0);
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0) {
//         arr.push(string.charAt(i));
//     } else {
//         let temp = string.charAt(i);
//         for (let j = i + 1; j < string.length - 1; j++) {
//             temp += string.charAt(j)
//             if (string.charAt(j) % 2 == 0 && string.charAt(j + 1) % 2 == 0) {
//                 i = j;
//                 break;
//             }
//         }
//         arr.push(temp)
//     }
// }
// console.log(arr.join("-"));

// cach 2:
// nhap vao
// duyet tung ki tu cua chuoi
// neu phat hien 2 ki tu chan, thi pust them dau "-"
// let string = "24546834356565256"
// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     arr.push(string.charAt(i))
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0 && i != (string.length - 1)) {
//         arr.push("-")
//     }
// }
// console.log(arr.join(""));



// Bài 9:
// Bài 9:
// Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường
// trong chuỗi vừa nhập sang thành dạng chữ hoa.
// Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On'
// kết quả của chương trình là 'kEEP cALM aND cODE oN'.

// let chuHoa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // khai báo bảng chữ hoa
// let chuThuong = 'abcdefghijklmnopqrstuvwxyz'; // khai báo bảng chữ thường
// // ==> độ dài hai bảng như nhau và vị trí các chữ tương ứng như nhau

// let chuoi = prompt("Nhap vao mot chuoi ma ban muon") // cho người dùng nhập
// let ketQua = [] // biến lưu kết quả

// // vòng lặp để kiểm tra từng chữ trong chuỗi nhập và chuyển đổi nó thành hoa thường
// for (let i = 0; i < chuoi.length; i++) {
//     // nếu là dấu khoảng trắng thì thêm luôn vào kết quả mà ko cần kiểm tra
//     if (chuoi[i] == " ") {
//         ketQua.push(" ")
//         continue
//     }

//     // nếu là chữ thì đi kiểm tra với từng chữ trong bảng chữ cái
//     for (let j = 0; j < chuHoa.length; j++) {
//         // nếu là chữ Hoa thì đổi thành chữ Thường
//         // nếu là chữ Thường thì đổi thành chữ Hoa
//         if (chuoi[i] == chuHoa[j]) {
//             ketQua.push(chuThuong[j])
//         } else if (chuoi[i] == chuThuong[j]) {
//             ketQua.push(chuHoa[j])
//         }
//     }
// }
// console.log(ketQua.join(""));



// BAI 10:
// BAI 10:
// Ứng dụng Todo list
// tạo ghi chú mới (C)
// xem tất cả ghi chú (R)
// sửa một ghi chú nào đấy(U)
// xóa một ghi chú nào đấy(D)
// người dùng sẽ được liên tục C/R/U/D cho đến khi nhập 0 thì thoát chương trình

// const todoList = ["rua rau", "giat do"] // Khai báo mảng ghi chú có sẵn

// let hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // nhập hành động muốn làm lần đầu
// // vòng lặp kiểm tra xem muốn làm hành động nào,
// //sau khi làm xong hành động đó thì cho nhập để thực hiện hành động khác
// while (true) {


//     if (hanhdong == "C") {  // nếu là C thì thêm ghi chú
//         let congViec = prompt("Nhap cong viec ban muon lam") // cho người dùng nhập ghi chú của họ
//         todoList.push(congViec) // thêm ghi chú vào mảng
//         console.log(todoList); // in ghi chú cho người dùng xem đã thêm được chưa


//     } else if (hanhdong == "R") { // nếu là R thì in ra danh sách ghi chú
//         console.log(todoList);


//     } else if (hanhdong == "U") { // nếu là U thì sẽ cho sửa một ghi chú nào đó
//         let vitri // biến lưu vị trí mà người dùng muốn sửa
//         // vòng lặp để cho người dùng nhập vị trí cho đúng, sai là bắt nhập lại
//         do {
//             vitri = Number(prompt(`Nhap vi tri ban muon sua ( 0 - ${todoList.length - 1})`))
//         } while (vitri < 0 || vitri >= todoList.length)
//         // sau khi có vị trí thì cho người dùng nhập công việc mà họ muốn đổi
//         let suaCongViec = prompt("Nhap cong viec ban muon sua thanh")
//         todoList[vitri] = suaCongViec // sửa lại công việc trong mảng
//         console.log(todoList); // in ra danh sách công việc


//     } else if (hanhdong == "D") { // nếu là D thì sẽ xóa một ghi chú nào đấy
//         let vitri   // vị trí muốn xóa
//         // vòng lặp để bắt nhập đúng vị trị cho phép
//         do {
//             vitri = Number(prompt(`Nhap vi tri ban muon xoa ( 0 - ${todoList.length - 1})`))
//         } while (vitri < 0 || vitri >= todoList.length)
//         todoList.splice(vitri, 1) // xóa công việc tại vị trí đã chọn
//         console.log(todoList); // in lại danh sách ghi chú


//     } else if (hanhdong == 0) { // thoát chương trình
//         break;


//     } else { } // khi người dùng nhập khác C/R/U/D/0 thì bắt nhập lại
//     hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // cho người dùng nhập lại hành động để thực hiện cho lần sau
// }



// Bài tập 11: Ứng dụng shopping cart
// Bài tập 11: Ứng dụng shopping cart
// Bài tập 11: Ứng dụng shopping cart

// mảng các sản phẩm có ở cửa hàng
const bakery = ["socola", "chuoi", "cam", "tao", "xoai"];
// mảng các sản phẩm đã mua
const cart = []

// in ra các sản phẩm có ở cửa hàng
console.log(bakery);

let traLoi = "" // lưu câu trả lời để biết xem có mua nữa hay không
while (traLoi != "no") {
    // nhập sản phẩm muốn mua
    let sanPham = prompt("Nhap vao san pham ban muon")

    // dùng làm includes để xem sản phẩm đó có trong mảng bakery hay không (hàm này mọi người tự tìm hiểu)
    // nếu có thì tiến hành thêm hoặc cập nhật
    if (bakery.includes(sanPham)) {
        let check = false // biến lưu kết quả xem có trong giở hay chưa
        let vitri // biến lưu vị trí của sản phẩm trong giỏ nếu sản phẩm đã có
        // vòng lặp kiểm tra xem có trong giỏ hay chưa
        for (let i = 0; i < cart.length; i++) {
            // nếu có trong giỏ thì lưu lại vị trí trong giỏ và cập nhật true để xác nhận đã có
            if (sanPham == cart[i][0]) {
                check = true
                vitri = i
            }
        }

        // nếu chưa có trong giỏ thì thêm vào giở với số lượng ban đầu là 1
        if (check == false) {
            cart.push([sanPham, 1])
        } else { // nếu có rồi thì tăng số lượng lên 1
            cart[vitri][1] += 1
        }

        console.log(cart); // sau khi thêm hoặc cập nhật lại giỏ thì in ra giỏ để xem

        // vòng lặp nhập câu trả lời
        do {
            traLoi = prompt("Ban co muon mua nua khong")
        } while (traLoi != "yes" && traLoi != "no")
        // nếu yes thì mua tiếp
        // nếu no thì thoát chương trình
        if (traLoi == "yes") {
            continue
        } else {
            break;
        }
    } else { // nếu ko có sản phẩm bạn muốn trong cửa hàng thì in ra là không có
        console.log("Cua hang ko co san pham nay");
    }
}



