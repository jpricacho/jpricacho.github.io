$(".nft-news-link").mouseover(function(){
    $(".nft-preview").collapse("show");
    $(".crypto-preview").collapse("hide");
});

$(".crypto-news-link").mouseover(function(){
    $(".nft-preview").collapse("hide");
    $(".crypto-preview").collapse("show");
});

$(".nft-preview").mouseleave(function(){
    $(".nft-preview").collapse("hide");
});

$(".crypto-preview").mouseleave(function(){
    $(".crypto-preview").collapse("hide");
});

$(".home-link").mouseover(function(){
    $(".crypto-preview").collapse("hide");
    $(".nft-preview").collapse("hide");
});

$(".about-link").mouseover(function(){
    $(".crypto-preview").collapse("hide");
    $(".nft-preview").collapse("hide");
});
