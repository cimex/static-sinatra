/*

  projectName.JS - 0.1
  main js file for the projectName
  author: http://cimex.com

*/


function jigsawPiecesRolloverEffects () {

    $('.jigsaw li').each(function(){

        var $this = $(this),
            $anchor = $this.find('a'),
            href = $anchor.attr('href'),
            $para = $this.find('p');

        var original_position_pair = $anchor.backgroundPosition(),
            original_position_x = parseInt(original_position_pair);

        $this.hover(function(){
            $anchor.css({
                backgroundPosition: original_position_x+'px -236px'
            });
            $para.show();
        }, function(){
            $para.hide();
            $anchor.css({
                backgroundPosition: original_position_x+'px 0px'
            });
        });

        $this.click(function(){
            document.location = href;
        });

    });

}

function initTooltip (tooltip_string) {

    var $tooltipTrigger = $(tooltip_string);

    $tooltipTrigger.tooltip({
        bodyHandler: function() {
            return $($(this).attr("rel")).html();
        },
        fixPNG: true,
        fade: 250,
        top: 20,
        left: 0,
        showURL: false
    });
}

function listStyles (selector) {
    $(selector).find('li:even').not('li ul li').addClass('even');
}

function initJplayer () {

    var jpPlayTime = $("#play_time");
    var jpTotalTime = $("#jplayer_total_time");
        var file_name = $("#jquery_jplayer").attr('rel');

    $("#jquery_jplayer").jPlayer({
      ready: function () {
        this.element.jPlayer("setFile", "../javascripts/library/jplayer/mp3/"+file_name+".mp3", "../javascripts/library/jplayer/ogg/"+file_name+".ogg");
      },
      volume: 50,
      swfPath: "../javascripts/library/jplayer",
      oggSupport: true
    })
    .jPlayer("onProgressChange", function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
      jpPlayTime.text($.jPlayer.convertTime(playedTime));
      jpTotalTime.text($.jPlayer.convertTime(totalTime));
    })
    .jPlayer("onSoundComplete", function() {
      this.element.jPlayer("stop");
    });

}

function roundedCorners (element_to_round_str, config) {

    var corner_class_names = [
        "top-left-white",
        "top-right-white",
        "bottom-left-white",
        "bottom-right-white"
    ];

    $(element_to_round_str).each(function(){

        var $this = $(this);

        $(this).css('position','relative');



        var range = config || "all";

        function appendNewDiv (class_name){
            if ( $this.find("."+class_name).length < 1 ) {
                $('<div class='+class_name.toString()+'></div>').appendTo($this);
            }
        }

        if (range == "all") {
            $.each(corner_class_names, function(){
                appendNewDiv(this);
            });
        }

        else if (range == "top") {
            $.each(corner_class_names.slice(0,2), function(){
                appendNewDiv(this);
            });
        }

        else if (range == "bottom") {
            $.each(corner_class_names.slice(2,4), function(){
                appendNewDiv(this);
            });
        }

        else if (range == "top-left") {
            appendNewDiv(corner_class_names[0]);
         }

        else if (range == "top-right") {
             appendNewDiv(corner_class_names[1]);
        }

        else if (range == "bottom-left") {
            appendNewDiv(corner_class_names[2]);
        }

        else if (range == "bottom-right") {
            appendNewDiv(corner_class_names[3]);
        }

    });

    if ($.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent)) {
        $.each(corner_class_names, function(){
            DD_belatedPNG.fix('.'+this);
        });
    }

}

// ---------- order of execution -----------

$(document).ready(function () {

    (function globalFunctions() {

        jigsawPiecesRolloverEffects();

        $('.tooltip-trigger').each(function(){
            initTooltip(this);
        });

        var js_rel_path = $('li#home a').attr('href').match(/(\.\.\/)*/)[0].replace(/^\.\.\//,'');

        //navigation hack - awkward border removal
        $('div#nav ul li a.selected:first').parent().prev().find('span.border').remove();
        $('div#nav ul > li.four a span.border').remove();


        // for use in roundedCornersInit
        $('.block').each(function(){
            var $this = $(this),
                kids = $this.children();
                node_type = kids[0].nodeName.toLowerCase();

            if (kids.length === 1 && node_type === "img") {
                $this.addClass('block-image-only');
            }
        });

        (function roundedCornersInit (){

            var round_all_selectors = [
                ".portrait",
                ".screen-shot",
                ".top-image",
                ".block-reflection-points",
                ".block-image-only",
                ".block-bubble"
            ];
            var round_top_selectors = [".block-head, ul.six-items li a, #nav > ul > li > a.selected"];
            var round_bottom_selectors = [".block-reflection-points .block-inner, .tab-content"];
            var round_top_left_selectors = ["#nav > ul > li:first a:first"];
            var round_top_right_selectors = ["#nav ul:first > li:last > a:last"];
            var round_bottom_left_selectors = ["#nav ul.nested li:first a"];
            var round_bottom_right_selectors = ["#nav ul.nested li:last a"];

            $.each(round_all_selectors, function(i,string){ roundedCorners(string,"all"); });
            $.each(round_top_selectors, function(i,string){ roundedCorners(string,"top"); });
            $.each(round_bottom_selectors, function(i,string){ roundedCorners(string,"bottom"); });
            $.each(round_top_left_selectors, function(i,string){ roundedCorners(string,"top-left"); });
            $.each(round_top_right_selectors, function(i,string){ roundedCorners(string,"top-right"); });
            $.each(round_bottom_right_selectors, function(i,string){ roundedCorners(string,"bottom-right"); });
            $.each(round_bottom_left_selectors, function(i,string){ roundedCorners(string,"bottom-left"); });

        })();


    })();

    if ( $('body').attr('id') == 'home-page' ) {

        (function homeFunctions() {
             initJplayer();
         })();

    }

    //ie6 pngfix
    if ($.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent)) {
        $('*').filter(function(){
            return $(this).css('backgroundImage').indexOf('.png') >= 0;
        }).addClass('png-fix');
        var png_inline_images = $('img[src$=.png]');
        png_inline_images.addClass('png-fix').css('border', '1px solid blue');
        DD_belatedPNG.fix('.png-fix');
    }


});