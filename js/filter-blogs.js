    $(document).ready(function(){

      $(".tab-link").click(function(){
        // $(this).toggleClass("active");
        $('.tab-link').addClass('active')
        $('.tab-link').not(this).removeClass('active')
      });

      // ------------------------------------------------
      $(".tab-link-all").click(function(){
        $(".blog-card").animate({
        'opacity' : '1'
        },200);

        $('.card-annoucement').removeClass('show')
        $('.card-annoucement').removeClass('hide')

        $('.card-news').removeClass('show')
        $('.card-news').removeClass('hide')

        $('.card-events').removeClass('show')
        $('.card-events').removeClass('hide')
      });

      // ------------------------------------------------
      $(".tab-link-annoucement").click(function(){
        $(".card-annoucement").animate({
        'opacity' : '1'
        },200);
        $('.card-annoucement').addClass('show')
        $('.card-annoucement').removeClass('hide')

        $(".card-news").animate({
        'opacity' : '0'
        },200);
        $('.card-news').removeClass('show')
        $('.card-news').addClass('hide')

        $(".card-events").animate({
        'opacity' : '0'
        },200);
        $('.card-events').removeClass('show')
        $('.card-events').addClass('hide')
      });

      // ------------------------------------------------
      $(".tab-link-news").click(function(){
        $(".card-news").animate({
        'opacity' : '1'
        },200);
        $('.card-news').addClass('show')
        $('.card-news').removeClass('hide')

        $(".card-annoucement").animate({
        'opacity' : '0'
        },200);
        $('.card-annoucement').removeClass('show')
        $('.card-annoucement').addClass('hide')

        $(".card-events").animate({
        'opacity' : '0'
        },200);
        $('.card-events').removeClass('show')
        $('.card-events').addClass('hide')
      });

      // ------------------------------------------------
      $(".tab-link-events").click(function(){
        $(".card-events").animate({
        'opacity' : '1'
        },200);
        $('.card-events').addClass('show')
        $('.card-events').removeClass('hide')

        $(".card-annoucement").animate({
        'opacity' : '0'
        },200);
        $('.card-annoucement').removeClass('show')
        $('.card-annoucement').addClass('hide')

        $(".card-news").animate({
        'opacity' : '0'
        },200);
        $('.card-news').removeClass('show')
        $('.card-news').addClass('hide')
      });

    }); 