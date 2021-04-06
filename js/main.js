$(document).ready(function () {

    $(".serch-another-area-button").click(function () {
        $(".search-another-area-popup").slideDown();
    });

    $(".search-another-area-popup-cross-cancel-icon").click(function () {
        $(".search-another-area-popup").hide();
      
    });

    $(".serch-another-area-button").click(function () {
        $('body').css({
            "background": "#7F7F7F"
        });
    });


    $(".sort-by-pop-side-bar").click(function () {
        $(".listing-sort-by-boom-main").slideDown();
    });

    $(".listing-sort-by-cross-java-cancel").click(function () {
        $(".listing-sort-by-boom-main").hide();
      
    });

    $(".sort-by-pop-side-bar").click(function () {
        $('body').css({
            "background": "#7F7F7F"
        });
    });

    $(".dashboard-sidebar-drop-down-toggle-1").click(function () {
        $(".dashboard-sidebar-content-dropdown-button-content-1").toggle(1000);
    });

    $(".dashboard-sidebar-drop-down-toggle-2").click(function () {
        $(".dashboard-sidebar-content-dropdown-button-content-2").toggle(1000);
    });

    $(".dashboard-sidebar-drop-down-toggle-3").click(function () {
        $(".dashboard-sidebar-content-dropdown-button-content-3").toggle(1000);
    });

    $(".dashboard-sidebar-drop-down-toggle-4").click(function () {
        $(".dashboard-sidebar-content-dropdown-button-content-4").toggle(1000);
    });



});