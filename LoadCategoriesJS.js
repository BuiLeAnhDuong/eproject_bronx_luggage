let tmpurl = window.location.href;

['popstate', 'onload'].forEach(evt =>
    window.addEventListener(evt, function () {
        requestAnimationFrame(() => {
            if (location.href.includes("category")) {     
                $.getJSON("./Categories_detail/Categories.json", function (json) {
                    localStorage.setItem('json', JSON.stringify(json));
                    onCategoryLoad();
                });
            }else if (location.href.includes("details")){
                $.getJSON("./Categories_detail/Categories.json", function (json) {
                    localStorage.setItem('json', JSON.stringify(json));
                    onDetailsLoad();
                });
            }
            tmpurl = location.href;
        });
    }, true)
);
