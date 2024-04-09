function load(selector, path) {
    // lấy kiểm tra xem có cache trong local storage không 
    // getItem là lấy dữ liệu từ LOCALSTORAGE
    const cached = localStorage.getItem(path);
    // Nếu có cache 
    if (cached) {
        // Hiển thị lên giao diện 
        document.querySelector(selector).innerHTML = cached;
    }

    // Fetch dữ liệu mới (Call API)//
    // fetch là phuong thức đế GỬI YÊU CẦU　lên server thông qua API 
    fetch(path)
        // Chuyển sữ liệu sang kiểu text
        // phương thức THEN() được thực thi khi có PHANT HỒI từ máy chủ trả về
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                // So sánh dữ liệu cache vừa lấy ra ở bên trên nếu khác nhau thì mới hiển thị 
                document.querySelector(selector).innerHTML = html;
                // Lưu vào cache
                localStorage.setItem(path, html);
            }
        });
}