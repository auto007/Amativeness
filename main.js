function show_date_time(){window.setTimeout("show_date_time()",1e3),BirthDay=new Date("2/9/2014 11:30:00"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),sectimeold=timeold/1e3,secondsold=Math.floor(sectimeold),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=Math.floor(e_hrsold),e_minsold=60*(e_hrsold-hrsold),minsold=Math.floor(60*(e_hrsold-hrsold)),seconds=Math.floor(60*(e_minsold-minsold)),span_dt_dt.innerHTML="博客已萌萌哒运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒"}$(document).ready(function($){$.scrollto=function(scrolldom,scrolltime){$(scrolldom).click(function(){var scrolltodom=$(this).attr("data-scroll");return $(this).addClass("active").siblings().removeClass("active"),$("html, body").animate({scrollTop:$(scrolltodom).offset().top},scrolltime),!1})},$(window).scroll(function(){$(window).scrollTop()>700?$("#back-to-top").fadeIn(800):$("#back-to-top").fadeOut(800)}),$.scrollto("#back-to-top",800),$(".post a").attr("target","_blank"),$("#comment-content").keydown(function(event){return event.ctrlKey&&13==event.keyCode?($("#submit").click(),!1):void 0}),$(".side .block .label").click(function(){$(this).siblings(".list").slideToggle("slow")}),$(".main .block .comments").click(function(){$(this).siblings(".comment-list").slideToggle("slow")}),$(".main .block .round-date").click(function(){$(this).siblings(".label").slideToggle("slow"),$(this).siblings(".article-content").slideToggle("slow")});var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="shortcut icon"]').attr("href","//www.anotherhome.net/wp-content/themes/Amativeness/fail.ico"),document.title="(●—●)喔哟，崩溃啦！",clearTimeout(titleTime)):($('[rel="shortcut icon"]').attr("href","//www.anotherhome.net/wp-content/themes/Amativeness/favicon.ico"),document.title="(/≧▽≦/)咦！又好了！"+OriginTitile,titleTime=setTimeout(function(){document.title=OriginTitile},2e3))}),$("#pagination a").on("click",function(){return $(this).addClass("loading").text("文章列表加载中..."),$.ajax({type:"POST",url:$(this).attr("href")+"#thumbs",success:function(data){result=$(data).find("#thumbs .post"),nextHref=$(data).find("#pagination a").attr("href"),$("#thumbs").append(result.fadeIn(300)),$("#pagination a").removeClass("loading").text("点击加载更多"),void 0!=nextHref?$("#pagination a").attr("href",nextHref):$("#pagination").remove()}}),!1}),document.getElementsByClassName("avatar")[0].onmouseover=function(){this.classList.add("animated","tada")},document.getElementsByClassName("avatar")[0].onmouseout=function(){this.classList.remove("animated","tada")},$.getJSON("https://www.anotherhome.net/api/vote/like.php?action=get",function(data){$(".like-vote span").html(data.like)}),$(".like-vote").click(function(){"Do you like me?"===$(".like-title").html()&&$.getJSON("https://www.anotherhome.net/api/vote/like.php?action=add",function(data){data.success?($(".like-vote span").html(data.like),$(".like-title").html("我也喜欢你 (*≧▽≦)")):$(".like-title").html("你的爱我已经感受到了~")})}),show_date_time()});