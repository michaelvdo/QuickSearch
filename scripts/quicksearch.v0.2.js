/*
* Tool om tabellen snel te filteren op basis van wat je in een zoekveld invult.
*
* Versie: 0.2
* Datum: 30-05-2015
*
* Gebruiksaanwijzing
* 1) Voeg de class "quick-search" toe aan het zoekveld waar je snel mee wilt zoeken.
* 2) Voeg de class "quick-search-column" toe aan de <th> waarop je wilt zoeken (bijvoorbeeld in de 1e <tr>).
*
* To-do:
* ~ meh ~ Voeg mogelijkheid toe om meerdere kolommen als zoekbaar te markeren.
*
* search date opties?
*
*
*/

$(function() {

    var columnNumber;

    columnIndex();

    function columnIndex () {
        $(".quick-search-column").parent().children().each( function(index) {
            if ( $(this).hasClass("quick-search-column") ) {
                columnNumber =  index;
            }
        });
    }

    $(".quick-search").keyup(function() {

        var quickSearch = $(".quick-search").val().toLowerCase();

        if ( $(this).val().length < 2 ) {

            $("table tr:not(:first-child)").each(function() {
                $(this).show();
            });

        } else {

            $("table tr:not(:first-child)").each(function() {

                var name = $(this).children("td:eq(" + columnNumber + ")").text().toLowerCase();

                if ( name.indexOf(quickSearch) === -1 ) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        }

    });

});
