var $ = jQuery.noConflict();

function image_preload(selector, parameters) {
	var params = {
		delay: 250,
		transition: 400,
		easing: 'linear'
	};
	$.extend(params, parameters);
		
	$(selector).each(function() {
		var image = $(this);
		image.css({visibility:'hidden', opacity: 0, display:'block'});
		image.wrap('<span class="preloader" />');
		image.one("load", function(evt) {
			$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
				$(this).unwrap('<span class="preloader" />');
			});
		}).each(function() {
			if(this.complete) $(this).trigger("load");
		});
	});
}


jQuery(document).ready(function($) {
                
        
        if ( $().tipsy ) { nTip=function(){ $('.ntip').tipsy({gravity: 's', fade:true}); }; nTip(); }
		if ( $().tipsy ) { sTip=function(){ $('.stip').tipsy({gravity: 'n', fade:true}); }; sTip(); }
		if ( $().tipsy ) { eTip=function(){ $('.etip').tipsy({gravity: 'w', fade:true}); }; eTip(); }
		if ( $().tipsy ) { wTip=function(){ $('.wtip').tipsy({gravity: 'e', fade:true}); }; wTip(); }


        siblingsFader=function(){
		$(".siblings_fade,.flickr_badge_image").hover(function() {
			$(this).siblings().stop().fadeTo(400,0.5);
		}, function() {
			$(this).siblings().stop().fadeTo(400,1);
		});
		};
		siblingsFader();
        
        
        image_preload('.portfolio-image img');
        
        
		imgFade=function(){
		$('.image_fade').hover(function(){
			$(this).filter(':not(:animated)').animate({opacity: 0.6}, 400);
		}, function () {
			$(this).animate({opacity: 1}, 400);
		});
		};
		imgFade();


        imgFadeIn=function(){
        
            $('.clients li').css({opacity: 0.5});

            $('.clients li').hover(function(){
                $(this).filter(':not(:animated)').animate({opacity: 1}, 400);
            }, function () {
                $(this).animate({opacity: 0.5}, 400);
            });
        
        };

        imgFadeIn();
        
        
        $(".togglec").hide();
    	
    	$(".togglet").click(function(){
    	
    	   $(this).toggleClass("toggleta").next(".togglec").slideToggle("normal");
    	   return true;
        
    	});
        
        
        $("#menu-toggle").click(function(e){
    	
            if ($('#side-menu').hasClass('open-menu')){
    			$('#side-menu').removeClass('open-menu');
                $('#menu-toggle').find('i').removeClass().addClass('icon-paragraph-justify-3');
    		} else {
    			$('#side-menu').addClass('open-menu');
                $('#menu-toggle').find('i').removeClass().addClass('icon-close-2');
    		}
            
    		e.preventDefault();
        
    	});


        $('#primary-menu li a').click( function() {
        
            var target = $(this).attr('href'),
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });

            e.preventDefault();

        });


        //Scroll to top
        $(window).scroll(function() {
            if($(this).scrollTop() > 450) {
                $('#gotoTop').fadeIn();
            } else {
                $('#gotoTop').fadeOut();
            }
        });
        
        
        $('#gotoTop').click(function() {
            $('body,html').animate({scrollTop:0},400);
            return false;
        });


        // Accordions
    
        loadAccordions=function(){

        $('.acc_content').hide(); //Hide/close all containers
        $('.acctitle:first').addClass('acctitlec').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

        //On Click
        $('.acctitle').click(function(){
            if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
                $('.acctitle').removeClass('acctitlec').next().slideUp(250); //Remove all "active" state and slide up the immediate next container
                $(this).toggleClass('acctitlec').next().slideDown(250); //Add "active" state to clicked trigger and slide down the immediate next container
            }
            return false; //Prevent the browser jump to the link anchor
        });

        };
        loadAccordions();
        
        
        imgHoverlay=function(){
		$('.portfolio-item').hover(function(){
			$(this).find('.portfolio-overlay').filter(':not(:animated)').animate({opacity: 'show'}, 400);
		}, function () {
			$(this).find('.portfolio-overlay').animate({opacity: 'hide'}, 400);
		});
		};
		imgHoverlay();


        reLoadFitvids=function(){
            if ( $().fitVids ) { $("#content").fitVids( { customSelector: "iframe[src^='http://www.dailymotion.com/embed']"} ); }
        };
        reLoadFitvids();
        

        $("a[data-scrollto]").click(function(){
    	
            var divScrollToAnchor = $(this).attr('data-scrollto');
            
            $('html, body').stop().animate({
                'scrollTop': $( divScrollToAnchor ).offset().top
            }, 900, 'swing');
            
            return false;
        
    	});


        $('.skills li span').hide();
        $('.progress .progress-percent').hide();


        $('.progress').each(function(){
            
            $(this).appear(function () {

                var skillsBar = $(this).parent('li'),
                skillValue = skillsBar.attr('data-percent');
                if (!skillsBar.hasClass('skills-animated')) {
                    skillsBar.addClass('skills-animated');
                    skillsBar.find('.progress-percent').fadeIn(400);
                    skillsBar.find('.progress').animate({
                        width: skillValue + "%"
                    }, 800, function() {
                        skillsBar.find('span').fadeIn(400);
                    });
                }

            },{accX: 0, accY: -80},'easeInCubic');
        
        });


        $('.rounded-skill').each(function() {

            var roundSkillSize = $(this).attr('data-size');
            var roundSkillAnimate = $(this).attr('data-animate');
            var roundSkillWidth = $(this).attr('data-width');
            var roundSkillColor = $(this).attr('data-color');

            if( !roundSkillSize ) { roundSkillSize = 140; }
            if( !roundSkillAnimate ) { roundSkillAnimate = 2000; }
            if( !roundSkillWidth ) { roundSkillWidth = 8; }
            if( !roundSkillColor ) { roundSkillColor = '#57B3DF'; }

            $(this).css({'width':roundSkillSize+'px','height':roundSkillSize+'px'}).animate({opacity: '0'}, 10);

            $(this).appear(function () {

                if (!$(this).hasClass('skills-animated')) {

                    $(this).animate({opacity: '1'}, 500);

                    $(this).easyPieChart({
                        size: Number(roundSkillSize),
                        animate: Number(roundSkillAnimate),
                        scaleColor: false,
                        lineWidth: Number(roundSkillWidth),
                        lineCap: 'round',
                        barColor: roundSkillColor
                    });

                    $(this).addClass('skills-animated');

                }

            },{accX: 0, accY: -155},'easeInCubic');

        });


        $('.counter').each( function() {

            $(this).appear(function () {

                var intRegex = /^\d+$/;
                var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;
                var counterNumber = $(this).attr('data-number');

                if (!$(this).hasClass('skills-animated')) {

                    if(intRegex.test(counterNumber) || floatRegex.test(counterNumber)){
                        
                        $(this).empty();

                        var number = counterNumber;
                        
                        if( number ) {

                            var numArray = number.split("");

                            for(var i=0; i<numArray.length; i++) { 
                                numArray[i] = parseInt(numArray[i], 10);
                                $(this).append('<span class="digit-con"><span class="digit'+i+'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');
                            }

                            var increment = $(this).find('.digit-con').outerHeight();
                            $(this).css({'height':increment+'px'});
                            var speed = 1600;

                            for(var i=0; i<numArray.length; i++) {
                                $(this).find('.digit'+i).animate({top: -(increment * numArray[i])}, speed, 'easeOutQuad');
                            }

                            $(this).addClass('skills-animated');

                        }

                    }

                }

            },{accX: 0, accY: -80},'easeInCubic');

        });


        $('[data-animate]').each(function(){

            var $toAnimateElement = $(this);

            var toAnimateDelay = $(this).attr('data-delay');

            var toAnimateDelayTime = 0;

            if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 500; } else { toAnimateDelayTime = 500; }

            if( !$toAnimateElement.hasClass('animated') ) {

                $toAnimateElement.addClass('not-animated');

                var elementAnimation = $toAnimateElement.attr('data-animate');
                
                $toAnimateElement.appear(function () {

                    setTimeout(function() {
                        $toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
                    }, toAnimateDelayTime);

                },{accX: 0, accY: -80},'easeInCubic');

            }
        
        });


        loadMagnific=function(){

        $('[data-lightbox="image"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                  return openerElement.is('img') ? openerElement : openerElement.parent().parent().find('img');
                }
              }
        });


        $('[data-lightbox="gallery"]').each(function() {

            if( $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
                $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
            }

            $(this).magnificPopup({
                delegate: 'a[data-lightbox="gallery-item"]',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it
                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    opener: function(openerElement) {
                      return openerElement.is('img') ? openerElement : openerElement.parent().parent().find('img');
                    }
                  }
            });

        });


        $('[data-lightbox="iframe"]').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        };
        loadMagnific();


        if( $().jflickrfeed ) {
            
            $('.flickrfeed').each(function() {
                
                var flickrFeedID = $(this).attr('data-id');
                var flickrFeedCount = $(this).attr('data-count');
                var flickrFeedType = $(this).attr('data-type');
                var flickrFeedTypeGet = 'photos_public.gne';
                
                if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }
                
                if( !flickrFeedCount ) { flickrFeedCount = 9; }
            
                $(this).jflickrfeed({
                    feedapi: flickrFeedTypeGet,
            		limit: Number(flickrFeedCount),
            		qstrings: {
            			id: flickrFeedID
            		},
            		itemTemplate: '<div class="flickr_badge_image">'+
            						'<a rel="prettyPhoto[galflickr]" href="{{image}}" title="{{title}}">' +
            							'<img src="{{image_s}}" alt="{{title}}" />' +
            						'</a>' +
            					  '</div>'
            	}, function(data) {
            		if ( $().prettyPhoto ) { initprettyPhoto(); }
            	});
            
            });
            
        }
        
        
        if( $().spectragram ) {
        
            $.fn.spectragram.accessData = {
                accessToken: '36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', // your Instagram Access Token
                clientID: 'b9e559ec7c284375bf41e9a9fb72ae01' // Your Client ID
            };
            
            $('.instagram').each(function() {
                
                var instaGramUsername = $(this).attr('data-user');
                var instaGramTag = $(this).attr('data-tag');
                var instaGramCount = $(this).attr('data-count');
                var instaGramType = $(this).attr('data-type');
                
                if( !instaGramCount ) { instaGramCount = 9; }
                
                if( instaGramType == 'tag' ) {
                
                    $(this).spectragram('getRecentTagged',{
                        query: instaGramTag,
                        max: Number( instaGramCount ),
                        size: 'small',
                        wrapEachWith: '<div class="flickr_badge_image"></div>'
                    });
                
                } else if( instaGramType == 'user' ) {
                    
                    $(this).spectragram('getUserFeed',{
                        query: instaGramUsername,
                        max: Number( instaGramCount ),
                        size: 'small',
                        wrapEachWith: '<div class="flickr_badge_image"></div>'
                    });
                    
                } else {
                    
                    $(this).spectragram('getPopular',{
                        max: Number( instaGramCount ),
                        size: 'small',
                        wrapEachWith: '<div class="flickr_badge_image"></div>'
                    });
                    
                }
            
            });
        
        }
        
        
        if( $().jribbble ) {
            
            
            $('.dribbble').each(function() {
                
                var dribbbleWrap = $(this);
                var dribbbleUsername = $(this).attr('data-user');
                var dribbbleCount = $(this).attr('data-count');
                var dribbbleList = $(this).attr('data-list');
                var dribbbleType = $(this).attr('data-type');
                
                if( !dribbbleCount ) { dribbbleCount = 9; }
            
                if( dribbbleType == 'follows' ) {
                
                    $.jribbble.getShotsThatPlayerFollows( dribbbleUsername , function (followedShots) {
                        var html = [];
                    
                        $.each(followedShots.shots, function (i, shot) {
                            html.push('<div class="flickr_badge_image"><a href="' + shot.url + '" target="_blank">');
                            html.push('<img src="' + shot.image_teaser_url + '" ');
                            html.push('alt="' + shot.title + '"></a></div>');
                        });
                    
                        $(dribbbleWrap).html(html.join(''));
                    }, {page: 1, per_page: Number(dribbbleCount)});
                
                } else if( dribbbleType == 'user' ) {
                
                    $.jribbble.getShotsByPlayerId( dribbbleUsername , function (playerShots) {
                        var html = [];
                    
                        $.each(playerShots.shots, function (i, shot) {
                            html.push('<div class="flickr_badge_image"><a href="' + shot.url + '" target="_blank">');
                            html.push('<img src="' + shot.image_teaser_url + '" ');
                            html.push('alt="' + shot.title + '"></a></div>');
                        });
                    
                        $(dribbbleWrap).html(html.join(''));
                    }, {page: 1, per_page: Number(dribbbleCount)});
                
                } else if( dribbbleType == 'list' ) {
                
                    $.jribbble.getShotsByList( dribbbleList , function (listDetails) {
                        var html = [];
                    
                        $.each(listDetails.shots, function (i, shot) {
                            html.push('<div class="flickr_badge_image"><a href="' + shot.url + '" target="_blank">');
                            html.push('<img src="' + shot.image_teaser_url + '" ');
                            html.push('alt="' + shot.title + '"></a></div>');
                        });
                    
                        $(dribbbleWrap).html(html.join(''));
                    }, {page: 1, per_page: Number(dribbbleCount)});
                
                }
            
            });
            
            
        }


        setColumnWidth();


        function getNumColumns(){       
            var winWidth = jQuery(window).width();      
            var column = 4;
            if (winWidth<400) column = 1;
            else if(winWidth>=400 && winWidth<780) column = 2;
            else if(winWidth>=780 && winWidth<980) column = 3;
            else if(winWidth>=980  && winWidth<1320) column = 4;
            else if(winWidth>=1320) column = 5;
            return column;
        }
        
        function setColumnWidth(){
            var columns = getNumColumns();
            var containerWidth = jQuery(window).width();
            var postWidth = containerWidth/columns;
            postWidth = Math.floor(postWidth);
            jQuery(".portfolio-item").each(function(index){
                jQuery(this).css({"width":postWidth+"px"});
            });
        }
            
        function arrange(){
            setColumnWidth();       
            $('#portfolio').isotope('reLayout'); 
        }


        $(window).resize(function() {
            arrange();
        });


        // Portfolio Details
        
        var portfolioItems = $('#portfolio .portfolio-item');
        var portfolioDetails = $('#portfolio-ajax-wrap');
        var prevPostPortId = '';
        
        
        $('#portfolio .portfolio-item').click( function(e) {
        
            var portPostId = $(this).attr('id').split('portfolio-')[1];
        
            if( !$(this).hasClass('portfolio-active') ) {
                $(this).find('.preloader2').show();
                loadPortfolio(portPostId,prevPostPortId);
            }

            e.preventDefault();
        
        });
        
        
        function newNextPrev(portPostId) {
        
            var portNext = getNextPortfolio(portPostId);
            var portPrev = getPrevPortfolio(portPostId);
            $('#next-portfolio').attr('data-id', portNext);
            $('#prev-portfolio').attr('data-id', portPrev);

        }
        
        
        function loadPortfolio(portPostId, prevPostPortId, getIt) {
        
            if(!getIt) { getIt = false; }
            if(getIt == false) {
                closePortfolio(portfolioDetails);
                $("#portfolio-" + portPostId).find('.preloader2').show();
                var portfolioDataLoader = $("#portfolio-" + portPostId).attr('data-loader');
                portfolioDetails.find('#portfolio-ajax-show').load(portfolioDataLoader, 
                function() {
                    initializePortfolio(portPostId,portfolioDetails);
                    loadAccordions();
                    loadFlexSlider();
                    loadMagnific();
                    reLoadFitvids();
                    openPortfolio(portfolioDetails);
                    portfolioItems.removeClass('portfolio-active');
                    $('#portfolio-' + portPostId).addClass('portfolio-active');
                    $("#portfolio-" + portPostId).find('.preloader2').hide();
                });
            }
        
        }
        
        
        function closePortfolio(portfolioDetails) {
        
            if( portfolioDetails && portfolioDetails.height() > 32 ) {
                portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 0 }, 200);
                portfolioDetails.stop(true).animate({ height: 0 }, 500, 'easeOutQuad');
                portfolioDetails.find('#portfolio-ajax-single').remove();
            }
        
        }
        
        
        function openPortfolio(portfolioDetails) {
            $('html, body').stop().animate({
                'scrollTop': $( portfolioDetails ).offset().top
            }, 900, 'swing');
            portfolioDetails.stop(true).animate({ opacity: 1, height: portfolioDetails.find('#portfolio-ajax-show').outerHeight() }, 650, 'easeOutQuad', function () {
                portfolioDetails.css({ height: 'auto' });
                portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 1 }, 200, function() {
                    var t=setTimeout(function(){ $( '.flexslider .slide' ).resize(); },1000);
                });
            });
        }
        
        
        function getNextPortfolio(portPostId) {
        
            var portNext = '';
            var hasNext = $('#portfolio-' + portPostId).next();
            if(hasNext != null && hasNext.length != 0) {
                portNext = hasNext.attr('id').split('portfolio-')[1];
            }
            return portNext;

        }
        
        
        function getPrevPortfolio(portPostId) {
        
            var portPrev = '';
            var hasPrev = $('#portfolio-' + portPostId).prev();
            if(hasPrev.length != 0) {
                portPrev = hasPrev.attr('id').split('portfolio-')[1];
            }
            return portPrev;
            
        }
        
        
        function initializePortfolio(portPostId,portfolioDetails) {
            
            prevPostPortId = $('#portfolio-' + portPostId);
            
            $('#next-portfolio, #prev-portfolio').click( function() {
                var portPostId = $(this).attr('data-id');
                portfolioItems.removeClass('portfolio-active');
                $('#portfolio-' + portPostId).addClass('portfolio-active');
                loadPortfolio(portPostId,prevPostPortId);
                return false;
            });
            
            $('#close-portfolio').click( function() {
                portfolioDetails.stop(true).animate({ opacity: 0, height: 0 }, 500, 'easeOutQuad', function(){
                    portfolioDetails.find('#portfolio-ajax-show').stop(true).animate({ opacity: 0 }, 200);
                    portfolioDetails.find('#portfolio-ajax-single').remove();
                    $('html, body').stop().animate({
                        'scrollTop': $( '#portfolio-filter' ).offset().top - 40
                    }, 900, 'swing');
                });
                portfolioItems.removeClass('portfolio-active');
                return false;
            });
            
        }


        $window = $(window);

        $('[data-type="background"]').each(function(){

            var $bgobj = $(this); // assigning the object
            
            $(window).scroll(function() {
            
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -($bgobj.scrollTop() / $bgobj.data('speed')); 

                // Put together our final background position
                var coords = '0 '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

                if( $window.width() < 980 ) { $bgobj.css({ 'background-attachment': 'scroll' }); } else { $bgobj.css({ 'background-attachment': 'fixed' }); }

            }); // window scroll Ends

        });


        setTimeout(function() {
          if (location.hash) {
            window.scrollTo(0, 0);
          }
        }, 1);
        

});


$(window).load(function() {
    
    
    siblingsFader();


    if ( $().flexslider ) {
        
        loadFlexSlider=function(){

        $('.fslider .flexslider').each(function() {

            var $flexsSlider = $(this);
            
            var flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation');
            var flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing');
            var flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction');
            var flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow');
            var flexsPause = $flexsSlider.parent('.fslider').attr('data-pause');
            var flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed');
            var flexsVideo = $flexsSlider.parent('.fslider').attr('data-video');
            var flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi');
            var flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows');
            var flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs');
            var flexsSheight = true;
            var flexsUseCSS = false;
            
            if( !flexsAnimation ) { flexsAnimation = 'slide'; }
            if( !flexsEasing || flexsEasing == 'swing' ) {
                flexsEasing = 'swing';
                flexsUseCSS = true;
            }
            if( !flexsDirection ) { flexsDirection = 'horizontal'; }
            if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
            if( !flexsPause ) { flexsPause = 5000; }
            if( !flexsSpeed ) { flexsSpeed = 600; }
            if( !flexsVideo ) { flexsVideo = false; }
            if( flexsDirection == 'vertical' ) { flexsSheight = false; }
            if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
            if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
            if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
            
            $flexsSlider.flexslider({
                
                selector: ".slider-wrap > .slide",
                animation: flexsAnimation,
                easing: flexsEasing,
                direction: flexsDirection,
                slideshow: flexsSlideshow,
                slideshowSpeed: Number(flexsPause),
                animationSpeed: Number(flexsSpeed),
                pauseOnHover: true,
                video: flexsVideo,
                controlNav: flexsPagi,
                directionNav: flexsArrows,
                smoothHeight: flexsSheight,
                useCSS: flexsUseCSS,
                start: function(slider){
                    if( slider.parent().parent().hasClass('portfolio-image') ) {
                        var t = setTimeout( function(){ $('#portfolio').isotope('reLayout'); }, 750 );
                    }
                    loadMagnific();
                }
                
            });
        
        });

        };
        loadFlexSlider();
    
    }


    $(window).delay(1500).queue(function(){
    
        var urlHash = window.location.hash;
        
        if( urlHash != "" ) {
            $('html, body').stop().animate({
                'scrollTop': $( urlHash ).offset().top
            }, 900, 'swing');
                    
        }
        
        $(this).dequeue();
    
    });

});