								//when everthing has been loaded
								$(window).load(function () {
										
								    //loading dribbble shots 
								    var callback = function (playerShots) {
								        var html = '';

								        $('h2 b').text(playerShots.shots[0].player.name);

								        $.each(playerShots.shots, function (i, shot) {
								            html += '<a href="' + shot.url + '" class="item" target="_blank" style="background-image: url(' + shot.image_url + ');">';
								            html += '<div class="shot-info"><h1>' + shot.title + '</h1><h2><span class="icon-eye"> ' + shot.views_count + '</span> <span class="icon-heart"> ' + shot.likes_count + '</span></h2></div>';
								            html += '</a>';

								        });

								        //appending dribbble shots to container
								        $('#grid-a-licious').append(html);

								        //calling grid-a-licious on container
								        $("#grid-a-licious").gridalicious({
								            gutter: 30,
								            width: 350,
								            selector: '.item',
								            animate: true,
								            animationOptions: {
								                queue: true,
								                speed: 250,
								                duration: 200,
								                effect: 'fadeInOnAppear'
								            }
								        });

								        //all set! let there be the light
								        $('body').fadeIn();
								    };

								    //how many of your shots, Sir?
								    $.jribbble.getShotsByPlayerId('paolotripodi', callback, {
								        page: 1,
								        per_page: 6
								    });

								    //focusing on links in header h1 on hover
										function focusing() {
									    $('header h1 span a').hover(function () {
									        $('header h1 span').toggleClass('focus');
									    });
										}

										focusing();
								    
								    //toggling about texts in header
								    function moreAboutMe(callback){
								    	$('header').on('click', 'a', function () {

								        if ($('header h1').hasClass('first-sentence')) {


								            $('header a.first span').animate({
								                opacity: 0,
								            }, 'slow', function () {
								                $('header a.first span').html('Got it');
								                $('header a.first span').animate({
								                    opacity: 1,
								                }, 'slow');

								            });

								            $('header h1 span').animate({
								                opacity: 0,
								            }, 'slow', function () {
								            		$('header h1').removeClass('first-sentence');
								            		$('header h1').addClass('second-sentence');
								                $('header h1 span').html('MA in Visual design, designs in Sketch3, masters the Adobe CS.<br />Writes HTML5, SASS and JQuery, but only in Espresso.<br/>Speaks Italian and English.');
								            		$('header h1 span').animate({
								                    opacity: 1,
								                }, 'slow');
								                callback();
								            });


								        } else {

								            $('header a.first span').animate({
								                opacity: 0,
								            }, 'slow', function () {
								                $('header a.first span').html('More about me');
								                $('header a.first span').animate({
								                    opacity: 1,
								                }, 'slow');

								            });

								            $('header h1 span').animate({
								                opacity: 0,
								            }, 'slow', function () {
								            		$('header h1').addClass('first-sentence');
								                $('header h1').removeClass('second-sentence');
								                $('header h1 span').html('Full stack digital designer, front end ninja.<br />Currently web designer <a href="http://www.zetalab.com" target="_blank">@zetalab</a>, Milan');
								                $('header h1 span').animate({
								                    opacity: 1,
								                }, 'slow');
								           			callback();

								            });


								        }


								   		 });
								    }

								    moreAboutMe(focusing);    


								});