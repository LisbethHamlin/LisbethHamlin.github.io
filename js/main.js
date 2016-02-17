/*! skinny-bones-jekyll - v0.0.1 - 2016-02-16 */var shuffle=function(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a},generateDaySeed=function(){Math.seedrandom(Math.floor(Date.now()/864e5))},buildOffCanvasSliding=function(a){a("#js-menu-trigger,#js-menu-screen").on("click touchstart",function(b){a("#js-menu, #js-menu-screen").toggleClass("is-visible"),a("#js-menu-trigger").toggleClass("slide close"),b.preventDefault()})},buildToc=function(a){a("#markdown-toc").prepend("<li><h6>Overview</h6></li>")},initPhotoSwipeFromDOM=function(a,b){var c=a(b),d=function(b){var c=[];return b.children().each(function(b,d){var e=a(d).find("a");if(e.length){var f=e.find("img"),g=e.data("size").split("x");c.push({src:e.attr("href"),msrc:f.attr("src"),pid:e.data("index"),title:e.data("title")||" ",desc:e.data("description"),w:parseInt(g[0],10),h:parseInt(g[1],10),el:d})}}),c},e=function(c){return c.preventDefault(),g(c.data.$links.index(this),a(c.target).closest(b)),!1},f=function(){var a=window.location.hash.substring(1),b={};if(a.length<5)return b;for(var c=a.split("&"),d=0;d<c.length;d++)if(c[d]){var e=c[d].split("=");e.length<2||(b[e[0]]=e[1])}return b.gid&&(b.gid=parseInt(b.gid,10)),b},g=function(b,c,e,f){if(c.length){var g,h,i,j=a(".pswp")[0];if(i=d(c),h={galleryUID:c.data("pswp-uid"),galleryPIDs:!0,getThumbBoundsFn:function(a){var b=i[a].el.getElementsByTagName("img")[0],c=window.pageYOffset||document.documentElement.scrollTop,d=b.getBoundingClientRect();return{x:d.left,y:d.top+c,w:d.width}},addCaptionHTMLFn:function(a,b,c){return a.title?(b.children[0].innerHTML="<p>"+a.title+"</p>",a.desc&&(b.children[0].innerHTML+="<p>"+a.desc+"</p>"),!0):(b.children[0].innerText="",!1)}},f)if(h.galleryPIDs){for(var k=0;k<i.length;k++)if(i[k].pid===b){h.index=k;break}}else h.index=parseInt(b,10)-1;else h.index=parseInt(b,10);isNaN(h.index)||(e&&(h.showAnimationDuration=0),g=new PhotoSwipe(j,PhotoSwipeUI_Default,i,h),g.init())}};c.each(function(b,c){var d=a(c);d.data("pswp-uid",b+1),d.on("click",".grid-item a",{$links:d.find(".grid-item a")},e)});var h=f();h.pid&&h.gid&&g(h.pid,a(c[h.gid-1]),!0,!0)},updateUpcomingShows=function(a){var b=a("#show-root");if(b.length){for(var c=Math.floor(Date.now()/1e3),d=a("#current-shows > div"),e=a("#previous-shows"),f=0;f<d.length;++f){var g=a(d[f]),h=+g.data("time");c>h&&(g.detach(),e.prepend(g))}0===a("#current-shows > div").length&&(a("#current-shows").remove(),a("#no-current-shows-message").removeClass("hidden")),b.removeClass("load")}};$.fn.masonryImagesReveal=function(a,b){var c=this.data("masonry"),d=c.options.itemSelector;return a.hide(),this.append(a),a.imagesLoaded().progress(function(a,b){var e=$(b.img).parents(d);e.show(),c.appended(e)}).done(b),this};var configureMasonry=function(a,b){var c=a(".grid").masonry({itemSelector:".grid-item",columnWidth:".grid-sizer",gutter:".gutter-sizer",percentPosition:!0});c.length&&window.IMAGE_DATA&&(window.RANDOMIZE_SETTINGS&&(generateDaySeed(),shuffle(window.IMAGE_DATA),window.IMAGE_DATA=window.IMAGE_DATA.slice(-window.RANDOMIZE_SETTINGS.limit)),c.masonryImagesReveal(a(window.IMAGE_DATA.join("")),b),a("#jsonScript").remove())};!function(a){buildOffCanvasSliding(a),buildToc(a),updateUpcomingShows(a),configureMasonry(a,function(){initPhotoSwipeFromDOM(a,".grid")})}(jQuery);