var id;
var tmp = 20;
function onDetailsLoad(){
    var url = window.location.href
    id = url.split("?").pop()
    recalculateRatings();
    loadComments();
    var json = JSON.parse(localStorage.getItem("json"));
    var details = json[id-1];
    document.querySelector("#id").innerHTML = details.id;
    document.querySelector("#name").innerHTML = details.name;
    document.querySelector("#price").innerHTML = details.price;
    document.querySelector("#quantity").innerHTML = details.quantity;
    document.querySelector("#type").innerHTML = details.type;
    document.querySelector("#sex").innerHTML = details.sex;
    document.querySelector("#color").innerHTML = details.color;
    document.querySelector("#discount").innerHTML = details.discount;
    document.querySelector("#demo_img").src = details.img;

    document.getElementById("rateProduct").addEventListener("click", function (event) {
        event.preventDefault();
        var ele = document.getElementsByName('rating');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                var storedRatings = JSON.parse(localStorage.getItem("ratings"));
                var numberOfRatings = 0;
                var storedRatingProductID = JSON.parse(localStorage.getItem("ratingsid"));
                if (storedRatings === null) {
                    storedRatings = [];
                }
                if (localStorage.getItem("nor") !== null) {
                    numberOfRatings = parseInt(localStorage.getItem("nor"));
                }
                if (storedRatingProductID === null) {
                    storedRatingProductID = [];
                }
                storedRatings.push(ele[i].value);
                numberOfRatings += 1;
                storedRatingProductID.push(id);
                localStorage.setItem("ratings", JSON.stringify(storedRatings));
                localStorage.setItem("nor", numberOfRatings.toString());
                localStorage.setItem("ratingsid", JSON.stringify(storedRatingProductID));
                recalculateRatings();
            }
        }
    });
    document.getElementById("commentBtn").addEventListener("click", function (event) {
        event.preventDefault();
        var commentText = document.getElementById('commentTextArea').value;
        var storedComments = JSON.parse(localStorage.getItem("comments"));
        var storedCommentsDate = JSON.parse(localStorage.getItem("commentsdate"));
        var storedCommentProductID = JSON.parse(localStorage.getItem("commentsid"));
        if (storedComments === null) {
            storedComments = [];
        }
        if (storedCommentsDate === null) {
            storedCommentsDate = [];
        }
        if (storedCommentProductID === null) {
            storedCommentProductID = [];
        }

        today = new Date().toLocaleString()

        storedCommentsDate.push(today)
        storedComments.push(commentText);
        storedCommentProductID.push(id);
        document.getElementById('commentTextArea').value = "";
        localStorage.setItem("comments", JSON.stringify(storedComments));
        localStorage.setItem("commentsdate", JSON.stringify(storedCommentsDate));
        localStorage.setItem("commentsid", JSON.stringify(storedCommentProductID));
        loadComments();

    });
}


function recalculateRatings(){

    var ratingArr = JSON.parse(localStorage.getItem("ratings"));
    var storedRatingProductID = JSON.parse(localStorage.getItem("ratingsid"));

    var sum = 0;
    if (ratingArr === null) {
        return;
    }
    var counter = 0;
    for (i = 0; i < ratingArr.length; i++) {
        if (storedRatingProductID[i]==id){
            sum += parseInt(ratingArr[i]);
            counter+=1
        }
        
    }
    if (counter==0){
        document.getElementById("rating").innerHTML = "No one rated this product yet";
        return;
    }
    var avg = sum / counter;
    avg = avg.toFixed(2);
    document.getElementById("rating").innerHTML = avg.toString();
}



function loadComments(){
    var commentContainer = document.getElementById('comment_container');
    while (commentContainer.firstChild) {
        commentContainer.removeChild(commentContainer.lastChild);
    }
    var storedComments = JSON.parse(localStorage.getItem("comments"));
    var storedCommentsDate = JSON.parse(localStorage.getItem("commentsdate"));
    if (storedComments===null){
        return;
    }
    for (i = 0; i <storedComments.length; i++){
        var storedCommentProductID = JSON.parse(localStorage.getItem("commentsid"));
        if (storedCommentProductID[i]==id){
            var clone = document.querySelector("#cmtTemplate").content.cloneNode(true);
            clone.querySelector(".commentDate").innerHTML = storedCommentsDate[i];
            clone.querySelector(".commentText").innerHTML = storedComments[i];
            commentContainer.prepend(clone);
        }
        
    }
}
