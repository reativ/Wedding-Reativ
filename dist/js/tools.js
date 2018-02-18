//Menu Toggle===================================================================
$(function () {
	$('.hamburger').click(function (e) {
		e.stopPropagation();
		toggleNav();
	});

	//Ao clicar fora do menu ele se fecha
	$('#fullpage').click(function (e) {
		var target = $(e.target);
		if (!target.closest('#nav').length && $('#nav').hasClass('showNav')) {
			toggleNav();
			$("#menuIcon").removeClass("is-active");
          $("body").removeClass("noscroll");
		}
	});

	function toggleNav() {
		if ($('#nav').hasClass('showNav')) {
			$('#nav').removeClass('showNav');
          $('body').removeClass('noscroll');
		} else {
			$('#nav').addClass('showNav');
          $('body').addClass('noscroll');
		}
	}

	//Ao clicar no link o menu some
	$('#nav li').on('click', function () {
		$("#nav").removeClass("showNav");
		$("#menuIcon").removeClass("is-active");
      $("body").removeClass("noscroll");
	});
});

//Scroll =======================================================================

(function ($) {
	$.scrollTo = $.fn.scrollTo = function (x, y, options) {
		if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

		options = $.extend({}, {
			gap: {
				x: 0,
				y: 0
			},
			animation: {
				easing: 'swing',
				duration: 500,
				complete: $.noop,
				step: $.noop
			}
		}, options);

		//This way we can scroll to one element
		y = y || x;

		return this.each(function () {
			var elem = $(this);
			elem.stop().animate({
				scrollLeft: !isNaN(Number(x)) ? x : $(x).offset().left + options.gap.x,
				scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
			}, options.animation);
		});
	};
})(jQuery);


// Scroll e mudar menu================================================
$(document).ready(function () {

	/**
	 * This part causes smooth scrolling using scrollto.js
	 * We target all a tags inside the nav, and apply the scrollto.js to it.
	 */
	$('a[href^="#"]').click(function (evn) {
		evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash);
	});

	/**
	 * This part handles the highlighting functionality.
	 * We use the scroll functionality again, some array creation and 
	 * manipulation, class adding and class removing, and conditional testing
	 */
	var aChildren = $("nav li").children(); // find the a children of the list items
	var aArray = []; // create the empty aArray
	for (var i = 0; i < aChildren.length; i++) {
		var aChild = aChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	} // this for loop fills the aArray with attribute href values

	$(window).scroll(function () {
		var windowPos = $(window).scrollTop() + 100; // get the offset of the window from the top of page
		var windowHeight = $(window).height(); // get the height of the window
		var docHeight = $(document).height();

		for (var i = 0; i < aArray.length; i++) {
			var theID = aArray[i];
			var divPos = $(theID).offset().top; // get the offset of the div from the top of page
			var divHeight = $(theID).height(); // get the height of the div in question
			if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
				$("a[href='" + theID + "']").addClass("nav-active");
			} else {
				$("a[href='" + theID + "']").removeClass("nav-active");
			}
		}

		if (windowPos + windowHeight == docHeight) {
			if (!$("nav li:last-child a").hasClass("nav-active")) {
				var navActiveCurrent = $(".nav-active").attr("href");
				$("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
				$("nav li:last-child a").addClass("nav-active");
			}
		}
	});
});



// Muda menu no scroll ======================================================
window.onscroll = () => {
  const nav = document.querySelector('#nav');
  if(this.scrollY <= 100) nav.className = 'nav'; else nav.className = 'nav scroll';
};



// Formulario de contato =====================================================
(function () {
	emailjs.init("user_02Q55fCkOMDRjuaPsA4Yw");
})();
var myform = $("form#myform");
myform.submit(function (event) {
	event.preventDefault();

	$(".error").hide();
	$("input").removeClass("inputError");
	var hasError = false;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	var emailaddressVal = $("#email").val();
	var nameVal = $("#name").val();
	var messageVal = $("#message").val();
	if (nameVal == '' || messageVal == '' || emailaddressVal == '') {
		$(".error").remove();
		$("#send").before('<span class="error">Por favor, preencha todos os campos.</span>');
		hasError = true;
	} else if (!emailReg.test(emailaddressVal)) {
		$(".error").remove();
		$("#send").before('<span class="error">Insira um e-mail válido.</span>');
		hasError = true;
	}

	if (hasError == true) {
		return false;
	}

	var params = myform.serializeArray().reduce(function (obj, item) {
		obj[item.name] = item.value;
		return obj;
	}, {});

	// Change to your service ID, or keep using the default service
	var service_id = "gmail";

	var template_id = "wedding";
	$("#send").text("Enviando...");
	emailjs.send(service_id, template_id, params)
		.then(function () {
			myform.find("button").addClass('active').text("Mensagem Enviada com Sucesso!");
			myform.find(":input").val('');
		});
	return false;
});




// parallax ==========================================
 $("[data-paroller-factor]").paroller({
   type: 'foreground',
 });



// mapa ======================================================

    function initMap() {
      var uluru = {
        lat: -23.148373,
        lng: -46.966505
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "weight": "0.01"
            },
            {
                "gamma": "1"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#442529"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": "2"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-8"
            },
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "weight": "1.09"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cbc4c5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -97
            },
            {
                "color": "#96787c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            },
            {
                "hue": "#ff0000"
            }
        ]
    }
]
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'imgs/heart.png',
        animation: google.maps.Animation.DROP,
      });
    }


