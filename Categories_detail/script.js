function onCategoryLoad(){
    var form = document.querySelector('form');
    form.addEventListener('change', function () {
        search();
    });
    var json =JSON.parse(localStorage.getItem("json"));
    var table = document.querySelector('#product-table')
    if (table.rows.length === 1){
        for (var i = json.length - 1; i >= 0; i--) {
            var row = table.insertRow(1);
            row.classList.add("productRow");
            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            cell1.innerHTML = json[i].id;
            cell1.classList.add("id");
            var link = document.createElement('a');
            link.innerHTML = json[i].name;
            link.href = "#!/!details?" + json[i].id;
            cell2.appendChild(link);
            cell2.classList.add("name");
            cell3.innerHTML = json[i].quantity;
            cell3.classList.add("quantity");
            cell4.innerHTML = json[i].type;
            cell4.classList.add("type");
            var color = json[i].color;
            color = color.toString()
            cell5.innerHTML = color.replaceAll(",",", ");
            cell5.classList.add("color");
            cell6.innerHTML = json[i].price;
            cell6.classList.add("price");
            cell7.innerHTML = json[i].sex;
            cell7.classList.add("sex");
        }
    }
    
}
function search(){
    //Reset bảng
    var productRows = document.querySelectorAll(".productRow");
    for (let i=0; i<productRows.length; i++){
        productRows[i].style.display = "table-row";
    }
    //Xử lý màu sắc
    var colorRows = document.querySelectorAll(".color");
    var colorCheckboxes = document.querySelectorAll(".color-checkbox");
    var colorList = [];
    for (let i=0; i<colorCheckboxes.length; i++){
        if (colorCheckboxes[i].checked == true)
        {
            colorList.push(colorCheckboxes[i].value);
        }
    }
    if (colorList.length!=0){
        for (let i = 0; i < colorRows.length; i++) {
            let flag = true;
            for (let j = 0; j < colorList.length; j++) {
                if (colorRows[i].innerHTML.includes(colorList[j])) {
                    flag = false;
                }
            }
            if (flag == true) {
                colorRows[i].parentNode.style.display = "none";
            }
        }
    }
    
    //Xử lý loại
    var typeFormSelect = document.querySelector('.type-select');
    var typeRows = document.querySelectorAll(".type");
    for (let i=0; i<typeRows.length; i++){
        if (!typeRows[i].innerHTML.includes(typeFormSelect.value)){
            typeRows[i].parentNode.style.display = "none";
        }
    }
    //Xử lý mức giá
    var priceRange = document.querySelector('.price-select').value;
    var priceRows = document.querySelectorAll(".price");
    var min = 0;
    var max = Infinity;
    if (priceRange==1){
        max = 100000;
    }else if (priceRange==2){
        min = 100000;
        max = 500000;
    }else if (priceRange==3){
        min = 500000;
        max = 1000000;
    }else if (priceRange==4){
        min = 1000000;
        max = 3000000;
    }else if (priceRange==5){
        min = 3000000;
        max = 5000000;
    }else if (priceRange==6){
        min = 5000000;
        max = Infinity;
    }
    for (let i=0; i<priceRows.length; i++){
        if (!(priceRows[i].innerHTML>=min && priceRows[i].innerHTML<max)){
            priceRows[i].parentNode.style.display = "none";
        }
    }
    var sexFormSelect = document.querySelector('.sex-select');
    var sexRows = document.querySelectorAll(".sex");
    for (let i = 0; i < sexRows.length; i++) {
        if (!sexRows[i].innerHTML.includes(sexFormSelect.value)) {
            sexRows[i].parentNode.style.display = "none";
        }
    }
}

