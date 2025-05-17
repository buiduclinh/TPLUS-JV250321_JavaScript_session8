//B9
// Cửa hàng sẽ bán các sản phẩm:



// Khởi tạo giỏ hàng let cart=[].

// Viết chương trình  cho phép người dùng:

// 1.Hiển thị các sản phẩm theo tên danh mục.
// 2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
//      -Sản phẩm không có trong cửa hàng hiển thị thông báo.
//      -Sản phẩm có trong cửa hàng
//          +Cho người dùng nhập số lượng sản phẩm muốn mua, 
//           mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
//          +Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
// 3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
//      -Tăng dần.
//      -Giảm dần.
// 4.Tính số tiền thanh toán trong giỏ hàng.
// 5.Thoát.
let loop = true;
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc kinh"
    }
];

let cart = [];
let n = 2;
let inputidcart = 0;
let stcnumbers = 0;
let guessprice = 0;
let cartquantity = 0;
switch (n) {
    case 1:
        displayProducts(products)
        break;
    case 2:
        inputidcart = 2;
        stcnumbers = 3;
        guessprice = 1800000;
        addToCart(products)
        break;
    case 3:
        //nhập choise = có hoặc không?!
        sortProducts(products)
        break;
    case 4:
        calculateTotal(cart)
        break;
    case 5:
        loop = false;
        break;

    default:
        console.log("Giá trị nhập không hợp lệ");
        break;
}

function displayProducts(products) {
    for (let key in products) {
        console.log(products[key]);
    }
}
function addToCart(products) {
    let found = false;
    for (let key in products) {
        let newproduct = {...products[key] };
        if (inputidcart === products[key].id) {
            found = true;
            cart.push(newproduct);
            if (stcnumbers <= products[key].quantity
                && products[key].quantity > 0
                && guessprice >= (products[key].price) * inputidcart) {
                products[key].quantity = products[key].quantity - stcnumbers;
                for (let i = 0; i <= cart.length - 1; i = i + 1) {
                    newproduct.quantity = stcnumbers;
                }
                console.log("Giỏ hàng hiện tại:", cart);
            } else {
                console.log("Số lượng không hợp lệ hoặc giá tiền không đủ!");;
            }
        }
    }
    if (found === false) {
        console.log("Sản phẩm không có trong cửa hàng");
    }
}

function sortProducts(products) {
    let choise = true;
    for (let i = 0; i <= products.length - 1; i = i + 1) {
        for (let j = 0; j <= products.length - 1; j = j + 1) {
            if (choise === true) {
                if (products[i].price > products[j].price) {
                    [products[i], products[j]] = [products[j], products[i]];
                    //sắp xếp theo thứ tự giảm dần theo giá
                }
            }
            if (choise === false) {
                if (products[i].price < products[j].price) {
                    [products[i], products[j]] = [products[j], products[i]];
                    //sắp xếp theo thứ tự tăng dần theo giá
                }
            }
        }
    }
}
function calculateTotal(cart) {
    let total = 0;
    cart.quantity = stcnumbers;
    for (let i = 0; i <= cart.length - 1; i = i + 1) {
        total = total + cartquantity * cart[i].price;
    } console.log(total);
}
console.log(products);