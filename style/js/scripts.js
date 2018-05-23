$(document).ready(function () {
    'use strict'; var headerWrapper = parseInt($('.navbar').height(), 10); var header_height = $('.navbar').height(); var shrinked_header_height = 76; var firstStyle = { 'padding-top': '' + shrinked_header_height + 'px', 'margin-top': '-' + shrinked_header_height + 'px' }; $('.onepage section').css(firstStyle); var secondStyle = { 'padding-top': '' + header_height + 'px', 'margin-top': '-' + header_height + 'px' }; $('.onepage section:first-of-type').css(secondStyle); var offsetTolerance = -(header_height); $(window).scroll(function () { var scrollPosition = parseInt($(this).scrollTop(), 10); $('.onepage .navbar ul.navbar-nav a').each(function () { var thisHref = $(this).attr('href'); var thisTruePosition = parseInt($(thisHref).offset().top, 10); var thisPosition = thisTruePosition - headerWrapper - offsetTolerance; if (scrollPosition >= thisPosition) { $('.current').removeClass('current'); $('.navbar ul.navbar-nav a[href=' + thisHref + ']').parent('li').addClass('current') } }); var bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10); if (scrollPosition == bottomPage || scrollPosition >= bottomPage) { $('.current').removeClass('current'); $('.onepage .navbar ul.navbar-nav a:last').parent('li').addClass('current') } }); $('#grid-container').cubeportfolio({ filters: '#filters-container', loadMore: '#loadMore-container', loadMoreAction: 'click', layoutMode: 'grid', mediaQueries: [{ width: 1100, cols: 3 }, { width: 800, cols: 3 }, { width: 500, cols: 2 }, { width: 320, cols: 1 }], defaultFilter: '*', animationType: 'quicksand', gapHorizontal: 15, gapVertical: 15, gridAdjustment: 'responsive', caption: 'fadeIn', displayType: 'sequentially', displayTypeSpeed: 100, lightboxDelegate: '.cbp-lightbox', lightboxGallery: !0, lightboxTitleSrc: 'data-title', lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>', singlePageInlineDelegate: '.cbp-singlePageInline', singlePageInlinePosition: 'top', singlePageDeeplinking: !0, singlePageInlineInFocus: !0, offsetValue: 100, singlePageInlineCallback: function (url, element) { var t = this; $.ajax({ url: url, type: 'GET', dataType: 'html', timeout: 10000 }).done(function (result) { t.updateSinglePageInline(result) }).fail(function () { t.updateSinglePageInline('AJAX Error! Please refresh the page!') }) }, }); $('#grid-container2').cubeportfolio({ filters: '#filters-container2', loadMore: '#loadMore-container2', loadMoreAction: 'click', layoutMode: 'grid', mediaQueries: [{ width: 1100, cols: 4 }, { width: 800, cols: 3 }, { width: 500, cols: 2 }, { width: 320, cols: 1 }], defaultFilter: '*', animationType: 'quicksand', gapHorizontal: 15, gapVertical: 15, gridAdjustment: 'responsive', caption: 'fadeIn', displayType: 'sequentially', displayTypeSpeed: 100, lightboxDelegate: '.cbp-lightbox', lightboxGallery: !0, lightboxTitleSrc: 'data-title', lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>', singlePageInlineDelegate: '.cbp-singlePageInline', singlePageInlinePosition: 'below', singlePageDeeplinking: !0, singlePageInlineInFocus: !0, offsetValue: 300, singlePageInlineCallback: function (url, element) { var t = this; $.ajax({ url: url, type: 'GET', dataType: 'html', timeout: 10000 }).done(function (result) { t.updateSinglePageInline(result) }).fail(function () { t.updateSinglePageInline('AJAX Error! Please refresh the page!') }) }, }); $('.carousel-boxed').owlCarousel({ loop: !1, margin: 30, nav: !0, navText: ['', ''], dots: !1, responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } } }); $('.basic-slider').owlCarousel({ items: 1, nav: !0, navText: ['', ''], dots: !0, autoHeight: !1, loop: !0, margin: 0 }); $('.clients').owlCarousel({ autoplay: !0, autoplayTimeout: 3000, loop: !0, margin: 50, nav: !1, dots: !1, responsive: { 0: { items: 3 }, 768: { items: 5 }, 1200: { items: 6 } } }); $('.testimonials').owlCarousel({ items: 1, nav: !1, dots: !1, autoHeight: !0, autoplay: !0, autoplayTimeout: 5000, loop: !0, margin: 0 }); $('#share-bar').share({ networks: ['twitter', 'facebook', 'tumblr', 'pinterest', 'googleplus', 'email'], orientation: 'vertical', affix: 'right center' }); var menu = $('.navbar'), pos = menu.offset(); $(window).scroll(function () { if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 300) { menu.fadeOut('fast', function () { $(this).removeClass('default').addClass('fixed').fadeIn('fast') }) } else if ($(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) { menu.fadeOut(0, function () { $(this).removeClass('fixed').addClass('default').fadeIn(0) }) } }); $('.js-activated').dropdownHover({ instantlyCloseOthers: !1, delay: 0 }).dropdown(); $('.btn.responsive-menu').on('click', function () { $(this).toggleClass('opn') }); $('.onepage .navbar .nav li a').on('click', function () { $('.navbar .navbar-collapse.in').collapse('hide'); $('.btn.responsive-menu').removeClass('opn') }); $('.player').fitVids(); $('.icon-overlay a').prepend('<span class="icn-more"></span>'); $('.tp-fullscreen').revolution({ delay: 9000, startwidth: 1170, startheight: 750, hideThumbs: 200, hideArrowsOnMobile: "off", fullWidth: "on", fullScreen: "on", soloArrowLeftHOffset: 0, soloArrowRightHOffset: 0 }); $('.tp-fullwidth').revolution({ delay: 9000, startwidth: 1170, startheight: 650, hideThumbs: 200, hideArrowsOnMobile: "off", fullWidth: "on", fullScreen: "off", soloArrowLeftHOffset: 0, soloArrowRightHOffset: 0 }); $('.tp-banner').revolution({ delay: 9000, startwidth: 1170, startheight: 550, hideThumbs: 200, hideArrowsOnMobile: "off", fullWidth: "off", fullScreen: "off", soloArrowLeftHOffset: 0, soloArrowRightHOffset: 0 }); $(".fancybox-media").fancybox({ arrows: !0, padding: 0, closeBtn: !0, openEffect: 'fade', closeEffect: 'fade', prevEffect: 'fade', nextEffect: 'fade', helpers: { media: {}, overlay: { locked: !1 }, buttons: !1, thumbs: !1, title: { type: 'inside' } }, beforeLoad: function () { var el, id = $(this.element).data('title-id'); if (id) { el = $('#' + id); if (el.length) { this.title = el.html() } } } }); $('.tabs.tabs-top').easytabs({ animationSpeed: 300, updateHash: !1 }); $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active'); $('.panel-group').on('shown.bs.collapse', function (e) { $(e.target).closest('.panel-default').addClass(' panel-active') }).on('hidden.bs.collapse', function (e) { $(e.target).closest('.panel-default').removeClass(' panel-active') }); $('#video-office').backgroundVideo({ $outerWrap: $('.outer-wrap'), pauseVideoOnViewLoss: !1, parallaxOptions: { effect: 1.9 } }); if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) { $('.parallax').addClass('mobile') }
    $('a[data-rel]').each(function () { $(this).attr('rel', $(this).data('rel')) }); $('.navbar, .scroll').localScroll({ hash: !0 }); window.prettyPrint && prettyPrint()
    if ($("[rel=tooltip]").length) { $("[rel=tooltip]").tooltip() }
    assign_bootstrap_mode(); $(window).resize(function () { assign_bootstrap_mode() }); function assign_bootstrap_mode() {
        var width = $(window).width(); var mode = ''; if (width < 768) { mode = "mode-xs" } else if (width < 992) { mode = "mode-sm" } else if (width < 1200) { mode = "mode-md" } else if (width > 1200) { mode = "mode-lg" }
        $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode)
    }
    new WOW().init(); var instagramFeed = new Instafeed({ get: 'user', limit: 8, userId: 1215763826, accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291', resolution: 'low_resolution', template: '<div class="item"><figure><a href="{{link}}"><div class="text-overlay"><div class="info"><span>View</span></div></div><img src="{{image}}" /></a></figure></div>', after: function () { var $portfoliogrid = $('.portfolio-grid .isotope'); $portfoliogrid.isotope({ itemSelector: '.item', transitionDuration: '0.7s', masonry: { columnWidth: $portfoliogrid.width() / 12 }, layoutMode: 'masonry' }); $(window).resize(function () { $portfoliogrid.isotope({ masonry: { columnWidth: $portfoliogrid.width() / 12 } }) }); $portfoliogrid.imagesLoaded(function () { $portfoliogrid.isotope('layout') }) } }); $('#instafeed').each(function () { instagramFeed.run() }); var $gridviewcol3 = $('.grid-view.col3 .isotope'); $gridviewcol3.isotope({ itemSelector: '.grid-view-post', transitionDuration: '0.6s', masonry: { columnWidth: '.col-sm-6.col-md-4' }, layoutMode: 'masonry' }); $(window).resize(function () { $gridviewcol3.isotope({ masonry: { columnWidth: '.col-sm-6.col-md-4' } }) }); $gridviewcol3.imagesLoaded(function () { $gridviewcol3.isotope('layout') }); var $gridviewcol2 = $('.grid-view.col2 .isotope'); $gridviewcol2.isotope({ itemSelector: '.grid-view-post', transitionDuration: '0.6s', masonry: { columnWidth: '.col-md-6.col-sm-12' }, layoutMode: 'masonry' }); $(window).resize(function () { $gridviewcol2.isotope({ masonry: { columnWidth: '.col-md-6.col-sm-12' } }) }); $gridviewcol2.imagesLoaded(function () { $gridviewcol2.isotope('layout') }); var $portfoliogrid = $('.portfolio-grid .isotope'); $portfoliogrid.isotope({ itemSelector: '.item', transitionDuration: '0.7s', masonry: { columnWidth: $portfoliogrid.width() / 12 }, layoutMode: 'masonry' }); $(window).resize(function () { $portfoliogrid.isotope({ masonry: { columnWidth: $portfoliogrid.width() / 12 } }) }); $portfoliogrid.imagesLoaded(function () { $portfoliogrid.isotope('layout') })
}); $(window).load(function () { $('#status').fadeOut(); $('#preloader').delay(350).fadeOut('slow'); $('body').delay(350).css({ 'overflow': 'visible' }) }); document.addEventListener("DOMContentLoaded", function () { var myForm; myForm = new VanillaForm(document.querySelector("form.vanilla")) })