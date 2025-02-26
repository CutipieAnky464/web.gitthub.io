document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector("header");

  const searchBar = document.querySelector(".search-bar");

  const authButtons = document.createElement("div");
  authButtons.classList.add("auth-buttons");

  authButtons.innerHTML = `
    <button class="login-btn">Đăng Nhập</button>
    <button class="signup-btn">Đăng Ký</button>
  `;

  header.insertBefore(authButtons, searchBar.nextSibling);
});
const cartItems = {};
        const totalPriceElement = document.getElementById('total-price');
        const cartItemsElement = document.getElementById('cart-items');
        const commentForm = document.getElementById('comment-form');
        const commentsList = document.getElementById('comments-list');

        function addToCart(productName, productPrice) {
            if (cartItems[productName]) {
                cartItems[productName].quantity += 1;
            } else {
                cartItems[productName] = { price: productPrice, quantity: 1 };
            }
            updateCart();
        }

        function updateCart() {
            cartItemsElement.innerHTML = '';
            let total = 0;
            for (const [name, item] of Object.entries(cartItems)) {
                const li = document.createElement('tr');
                li.innerHTML = `
                    <td>${name}</td>
                    <td>
                        <input type="number" value="${item.quantity}" min="1" data-product="${name}" class="quantity-input">
                    </td>
                    <td>${item.price} VNĐ</td>
                    <td>${item.price * item.quantity} VNĐ</td>
                    <td><button class="remove-button" data-product="${name}">Xóa</button></td>
                `;
                cartItemsElement.appendChild(li);
                total += item.price * item.quantity;
            }
            totalPriceElement.textContent = `Tổng giá: ${total} VNĐ`;
            attachEventListeners();
        }

        function attachEventListeners() {
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (event) => {
                    const productName = event.target.dataset.product;
                    const newQuantity = parseInt(event.target.value);
                    if (newQuantity > 0) {
                        cartItems[productName].quantity = newQuantity;
                    } else {
                        delete cartItems[productName]; // Xóa sản phẩm nếu số lượng là 0
                    }
                    updateCart();
                });
            });

            document.querySelectorAll('.remove-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productName = event.target.dataset.product;
                    delete cartItems[productName];
                    updateCart();
                });
            });
        }

        document.querySelectorAll('.product-item button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productItem = event.target.parentElement;
                const productName = productItem.querySelector('h3').textContent;
                const productPrice = parseInt(productItem.querySelector('p').textContent.replace('Giá: ', '').replace(' VNĐ', ''));
                addToCart(productName, productPrice);
            });
        });

        commentForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Ngăn chặn hành động gửi mặc định
            const commentInput = document.getElementById('forum-comment');
            const commentText = commentInput.value;
            if (commentText) {
                const li = document.createElement('li');
                li.textContent = commentText;
                commentsList.appendChild(li);
                commentInput.value = ''; // Xóa nội dung ô nhập sau khi gửi
            }
        });
        document.addEventListener("DOMContentLoaded", function() {
        // Lấy phần tử header
        const header = document.querySelector("header");
        // Lấy phần search bar để chèn nút kế bên
        const searchBar = document.querySelector(".search-bar");

        // Tạo div chứa hai nút
        const authButtons = document.createElement("div");
        authButtons.classList.add("auth-buttons");

        // Thêm hai nút Đăng Nhập & Đăng Ký
            authButtons.innerHTML = `
        <a href="login.html" class="login-btn">Đăng Nhập</a>
        <a href="login2.html" class="signup-btn">Đăng Ký</a>
        `;


        // Chèn authButtons ngay sau .search-bar
        // (tức là sau khi searchBar kết thúc)
        header.insertBefore(authButtons, searchBar.nextSibling);
        });