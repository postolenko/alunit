var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var tabsParent;
var tabParent;
var attrForTabLink;
var activeTabRadio;
var nextTab;
var indexActiveTab;

$(window).load(function() {

    // $("select").each(function() {

    //     var parentBlock = $(this).closest(".select-block");

    //     parentBlock.find(".select2-container").css({
    //         "width" : parentBlock.width() + "px"
    //     });

    // });

     getArticleBg();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getArticleBg();

    getPromoSliderPaddingTop();

    getAdaptivePositionElements();

});

$(document).ready(function() {

    getPromoSliderPaddingTop();

    getAdaptivePositionElements();

    // Tabs 

    $(function() {

        // var tabsParent;
        // var tabParent;
        // var attrForTabLink;
        // var activeTabRadio;
        // var nextTab;
        // var indexActiveTab;

        $(".tabs").each(function() {

            $(this).find(".tab-link").each(function() {

                if( $(this).hasClass("active") ) {

                    indexActiveTab = $(this).index(".tab-link");

                    $(this).click();

                    return false;

                } else {

                    indexActiveTab = 0;

                }

            });

            $(this).find(".tab-link").eq(indexActiveTab).click();
            $(this).find(".tab-link").eq(indexActiveTab).addClass("active");

        });


        $(".tab-link").click(function (e) {

            if( $(this).hasClass("active") ) {

                e.preventDefault();

            } else {

                tabsParent = $(this).closest(".tabs");
                attrForTabLink = $(this).attr("for");
                activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
                activeTabRadio.prop("checked", true);

                tabsParent.find(".tab-link").each(function () {
                    
                    if( $(this).hasClass("active") ) {

                        $(this).removeClass("active")

                    }

                });

                $(this).addClass("active");

            }

        });

    });

    $(function() {

        var calcName;
        var priceInput;
        var priceVal;
        var countInput;
        var countVal ;
        var priceTotal;

        $(".count_goods .count-btn").click(function(e) {

            e.preventDefault();

            parentBlock = $(this).closest(".count_goods");

            calcName = parentBlock.attr("data-count-calc");

            priceInput = $("[data-input-calc = '"+ calcName +"']");

            priceVal = parseInt( priceInput.attr("data-price-val") );

            countInput = parentBlock.find(".count");

            countVal = countInput.val();

            if(countVal == "") {

                countVal = 1;

            }

            if( $(this).hasClass("minus-btn") && countVal > 1 ) {

                countVal--;

            } else if( $(this).hasClass("plus-btn")) {

                countVal++;

            }

            countInput.val(countVal);

            priceTotal = priceVal * countVal;

            priceInput.val(priceTotal);

            $("[data-calc-price = '"+ calcName +"']").text(priceTotal);

        });

        $(document).keyup(function() {

            if( $("[data-count-calc]").length > 0 ) {

                $("[data-count-calc]").each(function() {

                    calcName = $(this).attr("data-count-calc");

                    priceInput = $("[data-input-calc = '"+ calcName +"']");

                    priceVal = parseInt( priceInput.attr("data-price-val") );

                    countInput = $(this).find(".count");

                    countVal = countInput.val();

                    if(countVal == "") {

                        countVal = 1;

                    }

                    countInput.val(countVal);

                    priceTotal = priceVal * countVal;

                    priceInput.val(priceTotal);

                    $("[data-calc-price = '"+ calcName +"']").text(priceTotal);

                });

            }

        });

    });

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_wrapp").is(":hidden") ) {

                $(".main-nav_wrapp").fadeIn(300);

                $(this).addClass("active");

            } else {

                $(".main-nav_wrapp").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".main-nav_wrapp").is(":visible") ) {

                    $(".main-nav_wrapp").fadeOut(300);

                    $(".respmenubtn").removeClass("active");

            }

        });

    });

});

function getArticleBg() {

    $(".article_2").each(function() {        

        var articleContent = $(this).find(".article_2_content");

        if( $(this).find(".article_2_left_bg").length > 0 ) {

            var leftBg = $(this).find(".article_2_left_bg");

            leftBg.css({
                "width" : articleContent.offset().left + "px"
            });

        }

        if( $(this).find(".article_2_right_bg").length > 0 ) {

            var rightBg = $(this).find(".article_2_right_bg");

            rightBg.css({
                "width" : bodyWidth - articleContent.offset().left + "px"
            });

        }

    });

}

function getPromoSliderPaddingTop() {

    if( $(".promo-slider").length > 0) {

        if(bodyWidth >= 1024) {

            $("#header").addClass("fixed");

            $(".promo-slider").css({
                "padding-top" : $("#header").height() + "px"
            });

        } else {

            $("#header").removeClass("fixed");

            $(".promo-slider").css({
                "padding-top" : 0
            });

        }

    }

}

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}