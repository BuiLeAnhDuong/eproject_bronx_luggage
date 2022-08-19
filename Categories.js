var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
$http.get("Categories.json").then(function (rspt) {
    $scope.productList = rspt.data;
})
});
var form = document.querySelector('form');
form.addEventListener('change', function() {
    search();
});
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
    if (colorList.length==0){
        colorList = ["red", "blue", "green", "black", "white", "gray"]
    }
    for (let i=0; i<colorRows.length; i++){
        let flag = true;
        for (let j=0; j<colorList.length; j++){
            if (colorRows[i].innerHTML.includes(colorList[j])){
                flag = false;
            }
        }
        if (flag==true){
            colorRows[i].parentNode.style.display = "none";
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
    console.log(priceRange);
    for (let i=0; i<priceRows.length; i++){
        if (!(priceRows[i].innerHTML>=min && priceRows[i].innerHTML<max)){
            priceRows[i].parentNode.style.display = "none";
        }
    }
}