

function activeTab() {
  $(".tab-link").click(function(){
    // $(this).toggleClass("active");
    $('.tab-link').addClass('active')
    $('.tab-link').not(this).removeClass('active')
  });
}

function filterBlogs() {
  const buttons = document.querySelectorAll(".tab-link-btn");
  const cards = document.querySelectorAll(".blog-card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      // console.log(currentCategory);
      filter(currentCategory, cards);
    });
  });
}