$(function(){
    sushinize();
});

function sushinize(){
    $("*").each(function(i,elem) {
        console.log($(elem).children().length);
        if ($(elem).children().length == 0){
          var txt = $(elem).text();
          $(elem).text(
              txt.replace(/./g,'🍣')
          );
        }
    });
    var sushiurl = chrome.extension.getURL("sushi.jpg");
    $("img").each(function(i,elem) {
        $(elem).attr("src",sushiurl);
    });
}
