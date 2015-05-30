/*
* Tool om tabellen snel te filteren op basis van wat je in een zoekveld invult.
*
* Versie: 0.1
* Datum: 23-04-2015
*
* Gebruiksaanwijzing
* 1) Voeg de class "quick-search" toe aan het zoekveld waar je snel mee wilt zoeken.
* 2) Voeg de class "quick-search-rows" toe aan de rows waarop je wilt zoeken.
*
* Verbeterpunten
* 1) Verwijder noodzaak om elke regel een class mee te geven.
*/

$(function() {

    // Voeg class .hide toe aan DOM
    $("body").before("<style>.hide_quicksearch { display: none; }</style>");


    $(".quick-search").keyup(function() {

        var quickSearch = $(".quick-search").val().toLowerCase();

        if ( $(this).val().length < 2 ) {

            // Specifieke regel code voor SVSbR
            $("input[value='toevoegen']").attr("disabled", "disabled");

            $(".quick-search-rows").each(function() {
                $(this).removeClass("hide_quicksearch");
            });

        } else {

            // Specifieke regel code voor SVSbR
            $("input[value='toevoegen']").removeAttr("disabled");

            $(".quick-search-rows").each(function() {

                var name = $(this).children("td:eq(1)").text().toLowerCase();

                if ( name.indexOf(quickSearch) === -1 ) {
                    $(this).addClass("hide_quicksearch");
                } else {
                    $(this).removeClass("hide_quicksearch");
                }
            });
        }

    });

});
