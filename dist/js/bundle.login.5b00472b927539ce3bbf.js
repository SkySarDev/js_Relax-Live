!function(){"use strict";var e=function(e){document.location.replace(e)},n=function(n){var t="demo",o="demo",i=document.getElementById("login-form"),a=document.getElementById("name"),s=document.getElementById("pass"),d=document.getElementById("name-warning"),m=document.getElementById("pass-warning");i.addEventListener("submit",(function(r){r.preventDefault();var c=a.value.trim(),l=s.value.trim();if(c&&l){if(c!==t||l!==o)return c!==t&&d.classList.add("show"),l!==o&&m.classList.add("show"),void i.reset();!function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=encodeURIComponent(e)+"="+encodeURIComponent(n);for(var i in t.expires instanceof Date&&(t.expires=t.expires.toUTCString()),t){o+="; "+i;var a=t[i];!0!==a&&(o+="="+a)}document.cookie=o}("user","demo",{secure:!1,"max-age":86400}),e(n+"/admin/table.html")}})),i.addEventListener("focusin",(function(){d.classList.remove("show"),m.classList.remove("show")}))},t=window.location.origin+"/relax-life";new RegExp("demo").test(document.cookie)?e(t+"/admin/table.html"):n(t)}();