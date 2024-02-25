/*===============================
/modules/mod_marqueeaholic/js/jquery.marquee.min.js
================================================================================*/;
/**

 * jQuery.marquee - scrolling text horizontally

 * Date: 11/01/2013

 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin

 * @license - http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL

 */

(function(e){e.fn.marquee=function(t){return this.each(function(){function h(){if(e.fn.pause){i.pause();r.trigger("paused")}}function p(){if(e.fn.resume){i.resume();r.trigger("resumed")}}var n=e.extend({},e.fn.marquee.defaults,t),r=e(this),i,s,o,u,a;if(r.data().delaybeforestart){r.data().delayBeforeStart=r.data().delaybeforestart;delete r.data().delaybeforestart}if(r.data().pauseonhover){r.data().pauseOnHover=r.data().pauseonhover;delete r.data().pauseonhover}if(r.data().pauseoncycle){r.data().pauseOnCycle=r.data().pauseoncycle;delete r.data().pauseoncycle}n=e.extend({},n,r.data());u=n.direction=="up"||n.direction=="down";n.gap=n.duplicated?n.gap:0;r.wrapInner('<div class="js-marquee"></div>');var f=r.find(".js-marquee").css({"margin-right":n.gap,"float":"left"});if(n.duplicated){f.clone().appendTo(r)}r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');i=r.find(".js-marquee-wrapper");if(u){var l=r.height();i.removeAttr("style");r.height(l);r.find(".js-marquee").css({"float":"none","margin-bottom":n.gap,"margin-right":0});if(n.duplicated)r.find(".js-marquee:last").css({"margin-bottom":0});var c=r.find(".js-marquee:first").height()+n.gap;n.speed=(parseInt(c,10)+parseInt(l,10))/parseInt(l,10)*n.speed}else{a=r.find(".js-marquee:first").width()+n.gap;s=r.width();n.speed=(parseInt(a,10)+parseInt(s,10))/parseInt(s,10)*n.speed}if(n.duplicated){n.speed=n.speed/2}var d=function(){if(u){if(n.duplicated){i.css({"margin-top":n.direction=="up"?0:"-"+c+"px"});o={"margin-top":n.direction=="up"?"-"+c+"px":0}}else{i.css({"margin-top":n.direction=="up"?l:"-"+c+"px"});o={"margin-top":n.direction=="up"?"-"+i.height()+"px":l}}}else{if(n.duplicated){i.css("margin-left",n.direction=="left"?0:"-"+a+"px");o={"margin-left":n.direction=="left"?"-"+a+"px":0}}else{i.css("margin-left",n.direction=="left"?s:"-"+a+"px");o={"margin-left":n.direction=="left"?"-"+a+"px":s}}}r.trigger("beforeStarting");i.animate(o,n.speed,n.easing,function(){r.trigger("finished");if(n.pauseOnCycle){setTimeout(d,n.delayBeforeStart)}else{d()}})};r.on("pause",h);r.on("resume",p);if(n.pauseOnHover){r.hover(h,p)}setTimeout(d,n.delayBeforeStart)})};e.fn.marquee.defaults={easing:"linear",speed:5e3,gap:20,delayBeforeStart:0,direction:"left",duplicated:false,pauseOnHover:false,pauseOnCycle:false}})(jQuery)




/*===============================
/modules/mod_marqueeaholic/js/jquery.pause.js
================================================================================*/;
/*!

 * Pause jQuery plugin v0.1

 *

 * Copyright 2010 by Tobia Conforto <tobia.conforto@gmail.com>

 *

 * Based on Pause-resume-animation jQuery plugin by Joe Weitzel

 *

 * This program is free software; you can redistribute it and/or modify it

 * under the terms of the GNU General Public License as published by the Free

 * Software Foundation; either version 2 of the License, or(at your option)

 * any later version.

 *

 * This program is distributed in the hope that it will be useful, but WITHOUT

 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or

 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for

 * more details.

 *

 * You should have received a copy of the GNU General Public License along with

 * this program; if not, write to the Free Software Foundation, Inc., 51

 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

 */
(function(){var $=jQuery,pauseId='jQuery.pause',uuid=1,oldAnimate=$.fn.animate,anims={};function now(){return new Date().getTime();}
$.fn.animate=function(prop,speed,easing,callback){var optall=$.speed(speed,easing,callback);optall.complete=optall.old;return this.each(function(){if(!this[pauseId])
this[pauseId]=uuid++;var opt=$.extend({},optall);oldAnimate.apply($(this),[prop,$.extend({},opt)]);anims[this[pauseId]]={run:true,prop:prop,opt:opt,start:now(),done:0};});};$.fn.pause=function(){return this.each(function(){if(!this[pauseId])
this[pauseId]=uuid++;var data=anims[this[pauseId]];if(data&&data.run){data.done+=now()-data.start;if(data.done>data.opt.duration){delete anims[this[pauseId]];}else{$(this).stop();data.run=false;}}});};$.fn.resume=function(){return this.each(function(){if(!this[pauseId])
this[pauseId]=uuid++;var data=anims[this[pauseId]];if(data&&!data.run){data.opt.duration-=data.done;data.done=0;data.run=true;data.start=now();oldAnimate.apply($(this),[data.prop,$.extend({},data.opt)]);}});};})();


/*===============================
/modules/mod_marqueeaholic/js/jquery.easing.min.js
================================================================================*/;
/*

 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 *

 * Uses the built in easing capabilities added In jQuery 1.1

 * to offer multiple easing options

 *

 * TERMS OF USE - EASING EQUATIONS

 * 

 * Open source under the BSD License. 

 * 

 * Copyright Г‚В© 2001 Robert Penner

 * All rights reserved.

 *

 * TERMS OF USE - jQuery Easing

 * 

 * Open source under the BSD License. 

 * 

 * Copyright Г‚В© 2008 George McGinley Smith

 * All rights reserved.

 *

 * Redistribution and use in source and binary forms, with or without modification, 

 * are permitted provided that the following conditions are met:

 * 

 * Redistributions of source code must retain the above copyright notice, this list of 

 * conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list 

 * of conditions and the following disclaimer in the documentation and/or other materials 

 * provided with the distribution.

 * 

 * Neither the name of the author nor the names of contributors may be used to endorse 

 * or promote products derived from this software without specific prior written permission.

 * 

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 

 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF

 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE

 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,

 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE

 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 

 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING

 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 

 * OF THE POSSIBILITY OF SUCH DAMAGE. 

 *

*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});


