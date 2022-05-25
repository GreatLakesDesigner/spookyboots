$(function(){"use strict";if($('[data-wm-plugin="subnav"]').length){$('head').prepend('<link href="https://assets.codepen.io/3198845/WMSecondNavFREEv1-4.css" rel="stylesheet">');function SubNavBlock(subNav){let thisObj=this;thisObj.subNav=$(subNav);let mainHeader=$('.header .header-announcement-bar-wrapper')[0],linkSetup=$(thisObj.subNav).attr('data-nav-setup'),subNavPos=$(thisObj.subNav).attr('data-position'),isSticky=$(thisObj.subNav).attr('data-sticky'),links=[],headerStyles,headerPaddingLeft,headerPaddingRight,headerPaddingTop,headerPaddingBottom,mainHeaderHeight,subHeaderHeight,linkSpacing,scrollPos,downArrowSvg,dropdownNav,currentUrl=window.location.pathname;if(isSticky==="true"){$('body').addClass('tweak-sticky-subnav');}
downArrowSvg='<div class="secondary-nav-dropdown-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Angle Down</title><desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer1"fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M20 26l11.994 14L44 26"stroke-linejoin="round" stroke-linecap="round"></path></svg></div>';$('body').addClass('wm-subnav-active');$(thisObj.subNav).addClass('cloned-subnav');$(thisObj.subNav).wrapInner('<nav class="header-nav-wrapper"></nav>');$('a[href="/secondary-nav"]').parent().addClass('hide-link');links=$('.header-nav-folder-title[href="/secondary-nav"]').first().next();$(links).find('.header-nav-folder-item').each(function(){let linkUrl=$(this).find('a').attr('href');let linkNewWindow=$(this).find('a').attr('target');let linkText=$(this).find('a').text();let newLink;if(linkNewWindow){newLink='<a href="'+linkUrl+'" target="_blank">'+linkText+'</a>';}else{newLink='<a href="'+linkUrl+'">'+linkText+'</a>';}
$(thisObj.subNav).find('.header-nav-wrapper').append(newLink)});$(thisObj.subNav).find('a').addClass('wm-subnav-item fadeIn');$(thisObj.subNav).find('a.wm-subnav-item').wrap('<div class="header-nav-item"></div>');$(thisObj.subNav).attr('id','wm-subnav');thisObj.subNavMobile=$(subNav).clone();$(thisObj.subNavMobile).attr('id','');$(downArrowSvg).insertAfter($('#wm-subnav a:not(.cta):last').parent());dropdownNav='<div class="secondary-nav-dropdown"></div>';$('#wm-subnav').append(dropdownNav);$('#wm-subnav .header-nav-wrapper a:not(.cta)').parent().each(function(){let clonedLink=$(this).clone();$('.secondary-nav-dropdown').append(clonedLink);})
$('[data-folder="root"] > .header-menu-nav-folder-content').append($(thisObj.subNavMobile));$(thisObj.subNavMobile).addClass('mobile-subnav');$('.secondary-nav-dropdown-icon').on('click',function(){if($('.secondary-nav-dropdown.open-dropdown').length){closeSecondaryNavDropdown();}else{openSecondaryNavDropdown()}})
function closeSecondaryNavDropdown(){$('.secondary-nav-dropdown').removeClass('open-dropdown');}
function openSecondaryNavDropdown(){$('.secondary-nav-dropdown').addClass('open-dropdown');}
if(subNavPos==="top-right"){$('#header .header-announcement-bar-wrapper').prepend($(thisObj.subNav));$(thisObj.subNav).find('.header-nav-wrapper').css({'justify-content':'flex-end'});$('body').addClass('tweak-subnav-position-top');}else if(subNavPos==="top-left"){$('#header .header-announcement-bar-wrapper').prepend($(thisObj.subNav));$(thisObj.subNav).find('.header-nav-wrapper').css({'justify-content':'flex-start'});$('body').addClass('tweak-subnav-position-top');}else{$('#header .header-announcement-bar-wrapper').prepend($(thisObj.subNav));$(thisObj.subNav).find('.header-nav-wrapper').css({'justify-content':'center'});$('body').addClass('tweak-subnav-position-top');}
$('a.wm-subnav-item').each(function(){if($(this).attr('href')===currentUrl){$(this).closest('.header-nav-item').addClass('header-nav-item--active')}});function resizePadding(){headerPaddingLeft=$('#header .header-announcement-bar-wrapper').css('padding-left');headerPaddingRight=$('#header .header-announcement-bar-wrapper').css('padding-right');headerPaddingTop=$('#header .header-announcement-bar-wrapper').css('padding-top');headerPaddingBottom=$('#header .header-announcement-bar-wrapper').css('padding-bottom');mainHeaderHeight=$('#header .header-inner').outerHeight();subHeaderHeight=$('#wm-subnav').outerHeight();$(':root').css('--headerPaddingLeft',headerPaddingLeft);$(':root').css('--headerPaddingRight',headerPaddingRight);$(':root').css('--headerPaddingTop',headerPaddingTop);$(':root').css('--headerPaddingBottom',headerPaddingBottom);$(':root').css('--wmHeaderHeight',mainHeaderHeight+"px");$(':root').css('--wmSubNavHeight',subHeaderHeight+"px");}
window.addEventListener('resize',function(){closeSecondaryNavDropdown();setTimeout(function(){resizePadding();},150);});window.dispatchEvent(new Event('resize'));$('#wm-subnav').addClass('secondary-nav-loaded');}
let subNav=$('[data-wm-plugin="subnav"]').first();$(subNav).css({'display':'none'})
new SubNavBlock(subNav);}});
