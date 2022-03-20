$(".nft-news-link").mouseover(function(){
    $(".nft-preview").collapse("toggle");
    // }, function() {
    //     $(".nft-preview").collapse("toggle");
});

$(".crypto-news-link").mouseover(function(){
    $(".crypto-preview").collapse("toggle");
    // }, function() {
    //     $(".nft-preview").collapse("toggle");
});

$(".nft-preview").mouseleave(function(){
    $(".nft-preview").collapse("hide");
});

$(".crypto-preview").mouseleave(function(){
    $(".crypto-preview").collapse("hide");
});
