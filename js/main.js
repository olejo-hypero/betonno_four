$(document).ready(function(){

		$('.slider').slick({
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			slidesToShow: 1,
		});
		$('.objects__slider').slick({
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			slidesToShow: 3,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	    ]
		});
		$('.partners__slider').slick({
			centerMode: true,
			slidesToShow: 7,
			responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	    ]
	});

	var i = $(".slider-nav");
		$(".slider").on("init reInit afterChange", function (e, t, n, o) {
			var r = (n || 0) + 1;
			i.html('<span class="counter-active">' + r + "</span> / " + t.slideCount)
		});

	$('.btn-toggle').click(function(){
		$('.header__mobile-menu').toggleClass('header__mobile-menu--active');
		$('body').toggleClass('body-overflow');
	});

	$(window).load(function(){
		$ (".header").sticky({ topSpacing: 0, className: 'sticky' });
	});

	$('.mask').mask("+380 999-99-99-99");

	$('.nav__link').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
		    	$(".nav__link").removeClass('nav__link--active');
            		$(this).addClass('nav__link--active');
	        }
		    return false; // выключаем стандартное действие
    });

    $('.nav-menu__link').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
		    	$(".nav-menu__link").removeClass('nav-menu__link--active');
            		$(this).addClass('nav-menu__link--active');
	        }
		    return false; // выключаем стандартное действие
    });

    $('.buying__icon').click(function() {
	    $('html, body').animate({
            scrollTop: $(".contracting").offset().top-119
        }, 500);
	});

	$('.competition__btn').click(function() {
	    $('html, body').animate({
            scrollTop: $(".benefit").offset().top-119
        }, 500);
	});

	$( "#slider" ).slider({
		value: 0,
		min: 0,
		max: 50,
		step: 5
	}).each(function() {
	  	var opt = $(this).data().uiSlider.options;

	  	var vals = opt.max - opt.min;
	  
		for (var i = 0; i <= vals; i += 5) {
	    	var el = $('<label>'+(i + 0)+'</label>').css('left',(i/vals*100)+'%');
	    	$( "#slider" ).append(el);
		}
		});

	// select
    $('select').each(function(){
    	var $this = $(this), numberOfOptions = $(this).children('option').length;

    	$this.addClass('select-hidden'); 
    	$this.wrap('<div class="select"></div>');
    	$this.after('<div class="select-styled"></div>');

    	var $styledSelect = $this.next('div.select-styled');
    	$styledSelect.text($this.children('option').eq(0).text());

    	var $list = $('<ul />', {
    		'class': 'select-options'
    	}).insertAfter($styledSelect);

    	for (var i = 0; i < numberOfOptions; i++) {
    		$('<li />', {
    			text: $this.children('option').eq(i).text(),
    			rel: $this.children('option').eq(i).val()
    		}).appendTo($list);
    	}

    	var $listItems = $list.children('li');

    	$styledSelect.click(function(e) {
    		e.stopPropagation();
    		$('div.select-styled.active').not(this).each(function(){
    			$(this).removeClass('active').next('ul.select-options').hide();
    		});
    		$(this).toggleClass('active').next('ul.select-options').toggle();
    	});

    	$listItems.click(function(e) {
    		e.stopPropagation();
    		$styledSelect.text($(this).text()).removeClass('active');
    		$this.val($(this).attr('rel'));
    		$list.hide();
	        //console.log($this.val());
	    });

    	$(document).click(function() {
    		$styledSelect.removeClass('active');
    		$list.hide();
    	});

    });

	$('form').each(function() {
		$(this).submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'form.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            }).done(function(){
            	$('#arcticModal').arcticmodal();
            });;
            return false;
        });

		$(this).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				name2: {
					required: true,
					minlength: 2
				},
				number: {
					required: true,
					minlength: 2
				},
				number2: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					minlength: 2
				},
				email2: {
					required: true,
					minlength: 2
				},
				textarea: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: {
					required: "",
				},
				name2: {
					required: "",
				},
				number: {
					required: "",
				},
				number2: {
					required: "",
				},
				email: {
					required: "",
					email: "" 
				},
				email2: {
					required: "",
					email: "" 
				},
				textarea: {
					required: "",
				},
			}
		});
	});
})