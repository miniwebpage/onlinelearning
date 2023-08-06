
function paginationBlog() {
    var paginationCon = $('#pagination-container');
    var items = $(".blog-card");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();
    // items.slice(perPage).removeClass('d-none');

    if (numItems == perPage) {
        paginationCon.hide();
    } else if (perPage > numItems) {
        paginationCon.hide();
    } else {
        paginationCon.show();
    }

    var hash = window.location.hash.substring(1);
    var newhashValue = hash.replace('page-', '');

    paginationCon.pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&lt;",
        nextText: "&gt;",
        onPageClick: function (pageNumber, event) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            // items.addClass('d-none').slice(showFrom, showTo).removeClass('d-none');
            $(".main-block").get(0).scrollIntoView({behavior: 'smooth'});
        },
        onInit: function (pageNumber, event) {
            if (window.location.hash) {
                if(window.location.hash == '#page-1') {
                    console.log('#page-1');
                } else {
                    var hashValue = 'a[href="' + window.location.hash + '"]';
                    document.querySelector(hashValue).click();
                    console.log(window.location.hash);
                }
            }
        },
    });
}