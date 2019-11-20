(function($){
$(document).ready(function(){
	
	
//iOS detection
if( navigator.userAgent.match(/iP(hone|od|ad)/i) ) {
     jQuery('body').addClass('browser-ios');
}

//navigation toggle funcs
function openNav() {
    $(".navbar.navbar--").addClass("closed");
    $(".navbar-overlay").addClass("overlay-open");
}
function closeNav() {
    $(".navbar.navbar--").removeClass("open");
    $(".navbar-overlay").removeClass("overlay-open");  
}

//navigation toggle calls
$(".hamburger-icon.site-header__nav-trigger").on("click", openNav);
$(".navbar-close").on("click", closeNav);
$(".navbar-overlay").on("click", closeNav);

//Search toggle funcs
function openSearch() {
    $(".search-form").addClass("search-open");
    $(".search-form").fadeIn("fast");
}
function closeSearch() {
    $(".search-form").removeClass("search-open");
    $(".search-form").fadeOut("fast");
}

//Search toggle calls
$(".navbar-search").on("click", openSearch);
$(".search-form__fieldset .search-close").on("click", closeSearch);

//Signup toggle funcs
function openSignup() {
    $(".signup-form").addClass("signup-open");
    $(".signup-form").fadeIn("fast");
}
function closeSignup() {
    $(".signup-form").removeClass("signup-open");
    $(".signup-form").fadeOut("fast");
}

//Scrolled nav funcs
var $document = $(document),
    $element = $('body:not(.single-article) header'),
    $articleElememt = $('body:not(.browser-ios).single-article header'),
    $iosElement = $('body.browser-ios header')
    className = 'site-header site-header--home site-header__container dsp-flex-xs grd-algn-center-xs col-12-xs p-l-4-xs p-l-5-m p-r-4-xs p-r-5-m visible-bottom-edge hed-s';

$document.scroll(function() {
  $element.toggleClass(className, $document.scrollTop() >= 1);
  $articleElememt.toggleClass(className, $document.scrollTop() >= 400);
  $iosElement.toggleClass(className, $document.scrollTop() >= 1);
});

//Scrolled feature title
var fadeStart=1,fadeUntil=200,fading = $('.parallax-wrapper .lead-title');

//Scrolled feature image on 20qs
var fadeStartb=1,fadeUntilb=200,fadingb = $('body.postid-100404 .parallax-wrapper .lead-image');

//Article title fade calls
$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0;
    
    //at start
    if( offset<=fadeStart ){
        opacity=1;
        $('.lead-image').css("background-position","50% 0");
        $('.lead-image').css("background-attachment", "fixed");
    }
    //during fade
    else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
        $('.lead-image').css("background-position","50% 0");
        $('.lead-image').css("background-attachment", "fixed");
    }
    //after fade
    else if( offset>=fadeUntil + 200 ) {
	    var newOffset = offset - 400;
        $('.lead-image').css("background-position","50% -" + newOffset / 2 + "px");
        $('.lead-image').css("background-attachment", "fixed");
	}
	else {
        $('.lead-image').css("background-position","50% 0");
        $('.lead-image').css("background-attachment", "fixed");
	}
	
	//set opacity
    fading.css('opacity',opacity);
    fadingb.css('opacity',opacity);

});

//Flexslider init
$('.flexslider-home').flexslider({
    animation: "slide",
    slideshow: true,
    controlNav: true,
    animationSpeed: 600,
    startAt: 0,
   	directionNav: false,
   	keyboard: false,
   	touch: false,
   	start: function(){
   	        $('.slides li').css('visibility', 'visible');
   	   },
   	after: function(){
   		var href = $('.flex-active-slide .banner-link').attr('href');
   		$(".home-banner-buttons .article-link.click-through").attr("href", href);
   	
   	}              	
});


/********************************************************************************
 * jQuery.nextOrFirst()
 *
 * PURPOSE:  Works like next(), except gets the first item from siblings if there is no "next" sibling to get.
 ********************************************************************************/
jQuery.fn.nextOrFirst = function(selector){
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
}

/********************************************************************************
 * jQuery.prevOrLast()
 * PURPOSE:
 * Works like prev(), except gets the last item from siblings if there is no "prev" sibling to get.
 ********************************************************************************/
jQuery.fn.prevOrLast = function(selector){
    var prev = this.prev(selector);
    return (prev.length) ? prev : this.nextAll(selector).last();
}	

var loc = window.location.href;
    $(".subnav ul li a").each(function() {
        if (loc.indexOf($(this).attr("href")) != -1) {
            $(this).addClass("active");
        }
    });


 $('.albums .albums__slider').slick({
    centerMode: true,
    infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	draggable: false,
	touchMove: false,
	 responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  });
  
   $('.mixes .mix__slider').slick({
    centerMode: true,
    infinite: true,
	slidesToShow: 3,
	centerPadding: '160px',
	slidesToScroll: 1,
	 responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px'
      }
    }
  ]
  });

//Legacy scripts

//Parallax quote script
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    $('.article-parallax-quote').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance) < scrollTop ) {
	        var scrollDiff = (( scrollTop - 200 ) - topDistance) / 3;
	        //turn scroll into opacity decimal
			var scrollOpacity = 0 + scrollDiff;
			if (scrollOpacity < 0) {
				scrollOpacity = 0;
			}
			scrollOpacityDec = scrollOpacity / 100;
            $(this).addClass('fixed');

			if ( (scrollOpacity > 0) && (scrollOpacity < 100)) {
	            $('.parallax-quote-inner', this).css({'opacity' : ''+scrollOpacityDec+''});			
			}
			
			else if ( (scrollOpacity >= 100) && (scrollOpacity < 200)) {
	            $('.parallax-quote-inner', this).css({'opacity' : '1'});			
			}
			
			else if (scrollOpacity >= 200) {
				scrollOpacity = 200;
				var scrollOpacityDiff2 = scrollDiff - 200;
				var scrollOpacityDec2 = (200 - scrollOpacityDiff2) / 100;
				//console.log(scrollOpacityDec2);
				$('.parallax-quote-inner', this).css({'opacity' : ''+scrollOpacityDec2+''});			
			}
            
        }
        else {
            $(this).removeClass('fixed');	
            $('.parallax-quote-inner', this).css({'opacity' : '0'});      
        }
    });
});

// Infinite scroll init
$('.load-more').infinitescroll({
  loading: {
    finished: undefined,
    finishedMsg: "<em>No more posts.</em>",
    img: null,
    msg: null,
    msgText: "<em>Loading...</em>",
    selector: null,
    speed: 'fast',
    start: undefined
  },
  state: {
    isDuringAjax: false,
    isInvalidPage: false,
    isDestroyed: false,
    isDone: false, // For when it goes all the way through the archive.
    isPaused: false,
    currPage: 1
  },
  behavior: undefined,
  binder: $(window), // used to cache the selector for the element that will be scrolling
  nextSelector: ".prev-posts-link a",
  navSelector: ".prev-next-posts",
  contentSelector: '.load-more', // rename to pageFragment
  extraScrollPx: 150,
  itemSelector: ".load-more div.loader",
  animate: false,
  pathParse: undefined,
  dataType: 'html',
  appendCallback: true,
  bufferPx: 40,
  errorCallback: function () { },
  infid: 0, //Instance ID
  pixelsFromNavToBottom: undefined,
  path: undefined, // Can either be an array of URL parts (e.g. ["/page/", "/"]) or a function that accepts the page number and returns a URL
  maxPage:undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
});

// Legacy scroll funcs
$(window).on('scroll', function() {

var distanceFromBottom = $(document).height() - $(window).height() - $(document).scrollTop();

var scroll = $(this).scrollTop();

var titleOpacity = (1 - ((scroll - 200) / 100));

// EOTY title fade out
$('h1.eoyl').css({'opacity': titleOpacity });

if (distanceFromBottom < 1500) {	
	  	$('.prev-post').stop().animate({'opacity':'0'},300);
	  	$('.next-post').stop().animate({'opacity':'0'},300);
	  	//console.log('fade out'); 
	   }

else if (scroll > 1000) {	
		$('.prev-post').stop().animate({'opacity':'0.3'},300);
	   	$('.next-post').stop().animate({'opacity':'0.3'},300);
	   	$('.prev-post.2016').stop().animate({'opacity':'1'},300);
	   	$('.next-post.2016').stop().animate({'opacity':'1'},300);
	   //console.log('fade in');
	   }	
	      
else {	
	  	$('.prev-post').stop().animate({'opacity':'0'},300);
	  	$('.next-post').stop().animate({'opacity':'0'},300);
	  	//console.log('fade out'); 
	   }
   
});

jQuery(document).on('click','.thumbnails .zoom', function(){
        var photo_fullsize =  jQuery(this).find('img').attr('src').replace('-600x600','');
        jQuery('.woocommerce-main-image img').attr('src', photo_fullsize);
        return false;
    });
		

	// Homepage splash scrolling
	$(window).on('scroll', function() {
    	var scroll = $(this).scrollTop();
    	var windHeight = $(window).height()
   		var realscroll = (scroll / 20);
   		var homeScroll = (scroll - windHeight);
    	//console.log(scroll); 
    
    if (scroll >= 0) {
    
	//$('.home-lead-image').css("-webkit-transform", "translate3d(0," + (scroll/2.5) +"px,0px)");
	//$('.flexslider-home .lead-title').css("-webkit-transform", "translate3d(0,-" + (scroll/2.5) +"px,0px)");		
	
	if ($('body').hasClass("home")) {		
		if ($('body').hasClass("no-splash")) {		
			$('.home-lead-image').css("-webkit-transform", "translate3d(0," + (scroll/2.5) +"px,0px)");
			$('.flexslider-home .lead-title').css("-webkit-transform", "translate3d(0,-" + (scroll/2.5) +"px,0px)");
		}
	}
	else {
		$('.home-lead-image').css("-webkit-transform", "translate3d(0," + (scroll/2.5) +"px,0px)");
		$('.flexslider-home .lead-title').css("-webkit-transform", "translate3d(0,-" + (scroll/2.5) +"px,0px)");
		//$('.lead-image').css("-webkit-transform", "translate3d(0," + (scroll/2.5) +"px,0px)");
		
	}
    
    $('.info').css({right:  realscroll + '%'});	 
   	$('.info').css({top:  realscroll + 50 + '%'});	    
    
   	$('.info-right').css({left:  realscroll + '%'});
   	$('.info-right').css({top:  realscroll + 50 + '%'});	
   	
   	} 
   	
   	$('.navbar-default').addClass('navbar-fixed-top');
   	$('body').addClass('navbar-fixed-body no-splash');     
   	
   	//If not home
   	if (!($('body').hasClass("home"))) {
   	$('.navbar-default').addClass('navbar-fixed-top');
   		$('body').addClass('navbar-fixed-body no-splash');
   	}
   	
   	else if (scroll > windHeight) {
   	   	
   	if (!($('body').hasClass("no-splash"))) {
   		$('.navbar-default').addClass('navbar-fixed-top');
   	   	$('body').addClass('navbar-fixed-body no-splash');   	   	
   	    //$('.header-bg').hide();  	   		
   	   	   	//$("html, body").animate({ scrollTop: 0 }, 1);
   	   	
   	}		   	
  	  
   	}
   	
   	else {
   	//$('.navbar-default').removeClass('navbar-fixed-top');	
   	//$('body').removeClass('navbar-fixed-body');	   		   			   		   		   	
   	}
   	
   	$('.article-parallax').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		if ( $window.scrollTop() >= distance ) {
   		$('img', this).css("-webkit-transform", "translate3d(0,"+ (featureScroll/2.5) +"px,0px)");	
   		}

   	});
   	
   	   	$('#plinth_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "0px "+ (featureScroll/1.5) +"px");	
   	   	});
   	   	
   	   	$('#st_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "0px "+ (featureScroll / 4) +"px");	
   	   	});
   	   	
   	   	$('#at_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "center "+ (featureScroll / 4) +"px");	
   	   	});
   	   	
   	   	$('#asap_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "center "+ (featureScroll / 4) +"px");	
   	   	});
   	   	
   	   	$('#mk_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "center "+ (featureScroll / 4) +"px");	
   	   	});
   	   	
   	   	$('#aphex_ad').each(function(){
   	
   	var distance = $(this).offset().top,	
   		$window = $(window);
   		
   		var featureScroll = (scroll - distance);
   		
   		$(this).css("background-position", "center "+ (featureScroll / 4) +"px");	
   	   	});
   	   	
   	   	
   	
   	 
	});
	
	$('.flexslider').flexslider({
	    animation: "slide",
	    slideshow: false,
	    controlNav: false,
	    animationSpeed: 400,
	    startAt: 0,
	   	directionNav: false,
	   	keyboard: false,
	});
	
	$('.flexslider-link').flexslider({
	    animation: "slide",
	    slideshow: false,
	    controlNav: false,
	    animationSpeed: 600,
	    startAt: 0,
	   	directionNav: false,
	   	keyboard: false,
	  	}); 
	
	
});

$(".scroll-down").click(function(e) {
e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $(".ad-wrapper").offset().top - 50
    }, 600);
}); 

$(".scroll-down-vids").click(function(e) {
e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $(".video-wrap").offset().top - 50
    }, 600);
}); 


})(jQuery);


(function($){	
$(document).ready(function() {

//Facebook share
function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}

jQuery('#get-more-posts').click(function(){
    jQuery('.load-more').infinitescroll('retrieve');
 return false;
});

$('.navbar-button').click(function() {
  $('.mobile-nav').fadeToggle('fast');
});

if (!($('body').hasClass("home"))) {
	$('.navbar-default').addClass('navbar-fixed-top');
		$('body').addClass('navbar-fixed-body');
	}
	  
	/** Change caption on slide **/
	//TODO: Stop multiple clicks
	$('.direction-nav .prev').on('click', function(){
		$(this).parent().prev('.flexslider').flexslider('prev');
	  	$($(this).parent().parent().parent().next('div').children('.captions').children('.active')).fadeOut('fast', function() {
	  	    $(this).removeClass('active').prevOrLast().fadeIn().addClass('active');
	  	});
	    return false;
	})
	  
	$('.direction-nav .next').on('click', function(){
		$(this).parent().prev('.flexslider').flexslider('next');
	  	$($(this).parent().parent().parent().next('div').children('.captions').children('.active')).fadeOut('fast', function() {
	  		    $(this).removeClass('active').nextOrFirst().fadeIn().addClass('active');
	  		});
	  		})
	
	/** Change caption on slide **/
	//TODO: Stop multiple clicks
	$('.banner-direction-nav .prev').on('click', function(){
		$('.flexslider-home').flexslider('prev');
	    return false;
	})
	  
	$('.banner-direction-nav .next').on('click', function(){
		$('.flexslider-home').flexslider('next');
	    return false;
	})
	
	/** Change caption on slide **/
	//TODO: Stop multiple clicks
	$('.link-direction-nav .prev').on('click', function(){
		$('.flexslider-link').flexslider('prev');
	    return false;
	})
	  
	$('.link-direction-nav .next').on('click', function(){
		$('.flexslider-link').flexslider('next');
	    return false;
	})
	  
	//On slide click, go to next
	$('.flexslider .slides').on('click', function(){
		$(this).parent().parent().flexslider('next');
		$(this).parent().parent().parent().parent().next('div').children('.captions').children('.active').fadeOut('fast', function() {
		$(this).removeClass('active').nextOrFirst().fadeIn().addClass('active');
	    return false;
	    });
	  });
	  
	  
	  //Play Soundcloud button
	  
	  //To do: deal with multiples
	  if($('#SC-embed iframe').eq(0).length > 0) {
	  		console.log('embed 1 exists');
	  		var widget1 = SC.Widget($('body').find('#SC-embed iframe')[0]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(1).length > 0) {
	  		console.log('embed 2 exists');
	  		var widget2 = SC.Widget($('body').find('#SC-embed iframe')[1]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(2).length > 0) {
			console.log('embed 3 exists');
	  		var widget3 = SC.Widget($('body').find('#SC-embed iframe')[2]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(3).length > 0) {
	  		console.log('embed 4 exists');
	  		var widget4 = SC.Widget($('body').find('#SC-embed iframe')[3]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(4).length > 0) {
	  	  console.log('embed 5 exists');
	  		var widget5 = SC.Widget($('body').find('#SC-embed iframe')[4]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(5).length > 0) {
	  		var widget6 = SC.Widget($('body').find('#SC-embed iframe')[5]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(6).length > 0) {
	  		var widget7 = SC.Widget($('body').find('#SC-embed iframe')[6]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(7).length > 0) {
	  		var widget8 = SC.Widget($('body').find('#SC-embed iframe')[7]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(8).length > 0) {
	  		var widget9 = SC.Widget($('body').find('#SC-embed iframe')[8]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(9).length > 0) {
	  		var widget10 = SC.Widget($('body').find('#SC-embed iframe')[9]);		  		 
	  	}
	  if($('#SC-embed iframe').eq(10).length > 0) {
	  		var widget11 = SC.Widget($('body').find('#SC-embed iframe')[10]);		  		 
	  	}									
	  	
	  		
	  	
	  	$( ".playTrack:eq(0)" ).click(function() {
	      widget1.toggle();
	  	});
	  	
	  	$( ".playTrack:eq(1)" ).click(function() {
	  	  widget2.toggle();
	  		});
	  	$( ".playTrack:eq(2)" ).click(function() {
	  		  widget3.toggle();
	  			});
	  	$( ".playTrack:eq(3)" ).click(function() {
	  		  widget4.toggle();
	  			});
	  	$( ".playTrack:eq(4)" ).click(function() {
	  		  widget5.toggle();
	  			});
	  	$( ".playTrack:eq(5)" ).click(function() {
	  		  widget6.toggle();
	  			});
	  	$( ".playTrack:eq(6)" ).click(function() {
	  		  widget7.toggle();
	  			});	
	  	$( ".playTrack:eq(7)" ).click(function() {
	  		  widget8.toggle();
	  			});	
	  	$( ".playTrack:eq(8)" ).click(function() {
	  		  widget9.toggle();
	  			});	
	  	$( ".playTrack:eq(9)" ).click(function() {
	  		  widget10.toggle();
	  			});	
	  	$( ".playTrack:eq(10)" ).click(function() {
	  		  widget11.toggle();
	  			});													

	  
	      $(".playTrack").click(function() {
	          
	          if ( $( this ).hasClass( "active" ) ) {
	                          $(this).removeClass('active');
	                  }
	                  else {
	                          $('.playTrack').removeClass('active');
	                          $(this).addClass('active');
	                  }
	          
	          //widget1.toggle();
	      });

//FadeIn code
$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight(true);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var half_of_object = $(this).outerHeight(true) / 2;
                                    
            bottom_of_window = bottom_of_window + half_of_object;  

          
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('visible');
                    
            }
            
            else {
                $(this).removeClass('visible');
            }
        }); 
    
    });
});	 
	  
})
})(jQuery);

(function($){
//Homepage fixed block
$(window).on("load", function() {

window.windowWidth = $(window).width();

if(windowWidth > 991){

	window.$el = $('#content-start');
	window.bottom = $el.position().top + $el.outerHeight(true);	
	
	window.fixedHeight = $("#content-start #main > div").height();	
	window.fixedHeight = bottom - fixedHeight;
	
	window.topDistance = $('#content-start').offset().top;

	
	$(window).resize(function(){
		window.bottom = $el.position().top + $el.outerHeight(true);
		window.fixedHeight = $("#content-start #main > div").height();	
		window.fixedHeight = bottom - fixedHeight;
		window.topDistance = $('#content-start').offset().top;
	});


	$(window).on('scroll', function() {
		
    	var scrollTop = $(this).scrollTop();
        
        if ( (topDistance-94) < scrollTop ) {
	        window.bottom = $el.position().top + $el.outerHeight(true);
			window.fixedHeight = $("#content-start #main > div").height();	
			window.fixedHeight = bottom - fixedHeight;
			window.topDistance = $('#content-start').offset().top;
	        
	        var parentwidth = $("#content-start #main").width();      
            $('#content-start #main > div').addClass('fixed').width(parentwidth); 
            $('#content-start #main').removeClass('fixedtobottom');
                      
        }
        
        if ( (fixedHeight-124) < scrollTop ) {
            $('#content-start #main > div').removeClass('fixed');
            $('#content-start #main').addClass('fixedtobottom');
        }
        
        if ( (topDistance-94) > scrollTop ) {
          
            $('#content-start #main > div').removeClass('fixed');
            $('#content-start #main').removeClass('fixedtobottom');            
        } 
	});
	
}
 
})
})(jQuery);