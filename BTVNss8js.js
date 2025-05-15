//B1
// let person = {
//     name: "John Doe",
//     age: 25,
//     job: "Developer"
// }
// console.log(person);
// for(let key in person) {
//     console.log(person[key]);
// }

// //B2
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
// }
// car.color = "red";
// car.year = "2022";

// console.log(car);

//B3
// let book = {
//     title: "JavaScript Basics",
//     author: "John Smith",
//     page: 200
// }

// delete book.page;
// console.log(book);

//B4
// const company = {

//     name: "RikkeiSoft",

//     location: "Hà Nội",

//     employees: [

//         { name: "Nguyễn Văn Luận", position: "Developer" },

//         { name: "Nguyễn Văn Hoàng", position: "Tester" },

//         { name: "Hoàng Nam Cao", position: "Manager" }

//     ]

// };
// for(let key in company){
// console.log(company[key]);
// }

//B5

// const cart = [

//     { name: "Mèn mén", price: 30000, quantity: 2 },

//     { name: "Mì tôm", price: 5000, quantity: 1 },

//     { name: "Bánh bao", price: 15000, quantity: 3 }

// ];

// function carttotal(cart) {
//     let total = 0;
//     for (let key in cart) {
//         total = total + cart[key].price * cart[key].quantity;
//     } return total
//     // let total = 0;
//     // for (let i = 0; i <= cart.length - 1; i = i + 1) {
//     //     total = total + cart[i].price * cart[i].quantity;
//     // }
//     // return total
// } console.log(carttotal(cart));

//B6
//Cho mảng sinh viên sau:
// let students = [

//     { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

//     { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

//     { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

// ];
// function averagescore(students) {
//     let averages = 0;
//     let arr = [];
//     // for (let i = 0; i <= students.length - 1; i = i + 1) {
//     //     averages = (students[i].scores.math + students[i].scores.english + students[i].scores.literature) / 3;
//     //     if (averages >= 8) {
//     //         arr.push(students[i].name + " " + averages);
//     //     }
//     // }
//     for (let key in students) {
//         averages = (students[key].scores.math + students[key].scores.english + students[key].scores.literature) / 3;
//          if (averages >= 8) {
//             arr.push(students[key].name + " " + averages);
//         }
//     }
//     return arr;
// } console.log(averagescore(students));
//Viết hàm lọc danh sách sinh viên có điểm trung bình 3 môn Toán, Anh, Văn  >= 8.

//B7
// let tarkmanager = [
//     { id: "1", name: "A", position: "F", salary: "10" },
//     { id: "2", name: "B", position: "G", salary: "10" },
//     { id: "3", name: "C", position: "H", salary: "10" },
//     { id: "4", name: "D", position: "I", salary: "10" },
//     { id: "5", name: "E", position: "K", salary: "10" },
// ]

// tarkmanager.push({ id: "6", name: "Z", position: "F", salary: "10" });

// for (let key in tarkmanager) {
//     let search = "A";
//     let n = "";
//     let del = false;
//     if (search.toLowerCase() === tarkmanager[key].name.toLowerCase()) {
//         console.log(tarkmanager[key]);
//     }
//     if (n !== tarkmanager[key].id) {
//         console.log(`Không tìm thấy nhân viên có id`);
//     }
//     if (n === tarkmanager[key].id) {
//         let design = prompt(`Bạn muốn "xóa" hay "tăng lương"?(nhập "xóa" hoặc "tăng lương"!`)
//         if (design.toLowerCase() === "xóa") {
//             let design1 = prompt(`Bạn có muốn xóa hay không?(Nhập "có hoặc "không)`);
//             if (design1.toLowerCase() === "có") {
//                 tarkmanager.splice(key, 1);
//                 del = true;
//             }
//             if (design1.toLowerCase() === "không") {
//                 tarkmanager.splice(key, 0);
//             } else {
//                 console.log("Lỗi cú pháp");
//             }
//         } if (design.toLowerCase() === "tăng lương") {
//             tarkmanager[key].salary = "100";
//         } else {
//             console.log(`sai cú pháp`);
//         }
//     }
// }


// console.log(tarkmanager);

//B8
//id: Mã sách (số nguyên duy nhất).

// title: Tên sách.

// author: Tác giả.

// year: Năm xuất bản.

// price: Giá sách.

// isAvailable: Trạng thái mượn sách (true/false).
let loop = true;
let books = [
    { id: "1", title: "A", author: "X", year: "11", price: "11", isAvailable: true },
    { id: "2", title: "B", author: "Y", year: "22", price: "12", isAvailable: false },
    { id: "3", title: "C", author: "Z", year: "33", price: "13", isAvailable: true },
    { id: "4", title: "D", author: "M", year: "44", price: "14", isAvailable: false },
    { id: "5", title: "E", author: "N", year: "55", price: "15", isAvailable: true },
]

let choise = 6;
// 1. Thêm sách mới.
// 2. Hiển thị danh sách sách.
// 3. Tìm kiếm sách theo tiêu đề.
// 4. Cập nhật trạng thái mượn/trả sách theo id sách.
// 5. Xóa sách theo id sách ra khỏi danh sách.
// 6. Sắp xếp sách theo giá tăng dần.
// 7. Thoát.
switch (choise) {
    case 1:
        books.push({ id: "6", title: "F", author: "FF", year: "66", price: "16", isAvailable: false })
        break;
    case 2:
        for (const key in books) {
            console.log(books[key]);
        }
        break;
    case 3:
        let searchtitle = "A";
        for (const key in books) {
            if (searchtitle.toLowerCase() === books[key].title.toLowerCase()) {
                console.log(books[key]);
            }
        }
        break;
    case 4:
        let searchid = "";
        for (const key in books) {
            if (searchid.toLowerCase() === books[key].id.toLowerCase()) {
                console.log(books[key].isAvailable);
                let bore = "";
                if (bore === "0") {
                    books[key].isAvailable = false;
                    console.log(books[key].isAvailable);
                } if (bore === "1") {
                    books[key].isAvailable = true;
                    console.log(books[key].isAvailable);
                } else {
                    console.log("error");
                }
            }
        }
        break;
    case 5:
        let delid = "";
        for (const key in books) {
            if (delid.toLowerCase() === books[key].id) {
                books.splice(key, 1);
            }
        }
        break;
    case 6:
        // for (const key1 in books) {
        //     for (const key2 in books)
        for (let i = 0; i <= books.length - 1; i = i + 1) {
            for (let j = 0; j <= books.length - 1; j = j + 1) {
                if (books[i].price > books[j].price) {
                    [books[i], books[j]] = [books[j], books[i]]
                }
            }
        }
        break;
    case 7:
        loop = false;
        break;

    default:
        console.log("error");
        break;
}

console.log(books);