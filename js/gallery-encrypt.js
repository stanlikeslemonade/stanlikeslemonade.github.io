"use strict";function decryptAES(e){try{var t=String(document.getElementById("decryptionError").innerHTML),n=String(document.getElementById("noContentError").innerHTML)}catch(e){t="Incorrect Password!",n="No content to display!"}try{var o=CryptoJS.AES.decrypt(document.getElementById("encrypt-blog").innerHTML.trim(),e);if(o=decodeBase64(o=o.toString(CryptoJS.enc.Utf8)),""===(o=unescape(o)))throw new Error(n);document.getElementById("encrypt-blog").style.display="inline",document.getElementById("encrypt-blog").innerHTML="";try{$("#encrypt-blog").html(o)}catch(e){console.error(e),$("#encrypt-blog").html("<p>Some errors occurred, check the original file please.Detailed exceptions are shown in console.</p>")}if(document.getElementById("hbe-security").style.display="none",document.getElementById("toc-div")&&(document.getElementById("toc-div").style.display="inline"),"undefined"!=typeof MathJax)try{MathJax.Hub.Queue(["resetEquationNumbers",MathJax.InputJax.TeX],["PreProcess",MathJax.Hub],["Reprocess",MathJax.Hub])}catch(e){console.log("Can't render with MathJax")}}catch(e){return alert(t),console.log(e),!1}return!0}function htmlDecode(e){return 0==e.length?"":e.replace(/&gt;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g,"    ").replace(/'/g,"'").replace(/&quot;/g,'"').replace(/<br>/g,"\n")}function decodeBase64(e){return e=CryptoJS.enc.Base64.parse(e),e=CryptoJS.enc.Utf8.stringify(e)}function setCookie(e,t,n){var o=new Date((new Date).getTime()+6e4*n);document.cookie=e+"="+escape(t)+(null==n?"":";expires="+o.toGMTString())}function getCookie(e){if(0<document.cookie.length){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;e=document.cookie.indexOf(";",t);return-1==e&&(e=document.cookie.length),unescape(document.cookie.substring(t,e))}}return""}function GetUrlRelativePath(){var e=document.location.toString().split("//"),t=e[1].indexOf("/"),t=e[1].substring(t);return-1!=t.indexOf("?")&&(t=t.split("?")[0]),t}function GenerateCookieName(){return"HBE-PASSWORD"+GetUrlRelativePath()}$(document).ready(function(){var t=String(getCookie(GenerateCookieName()));console.log("Get password from Cookie:"+t),""!=t&&(decryptAES(t)?(document.getElementById("encrypt-blog").removeAttribute("style"),$("#encrypt-blog").justifiedGallery({margins:5,rowHeight:150})):setCookie(COOKIE_NAME,t,-5)),document.getElementById("pass").onkeypress=function(e){t=String(document.getElementById("pass").value),13===e.keyCode&&decryptAES(t)&&(document.getElementById("encrypt-blog").removeAttribute("style"),$("#encrypt-blog").justifiedGallery({margins:5,rowHeight:150}),setCookie(GenerateCookieName(),t,30))},$("#btn_decrypt").on("click",function(){decryptAES(t=String(document.getElementById("pass").value))&&(document.getElementById("encrypt-blog").removeAttribute("style"),$("#encrypt-blog").justifiedGallery({margins:5,rowHeight:150}),setCookie(GenerateCookieName(),t,30))})});