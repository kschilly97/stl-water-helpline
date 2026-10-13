/* ===== PHONE NUMBER: edit ONLY these two lines when the tracking number is ready =====
   Example: PHONE_DISPLAY = "(314) 555-0000"; PHONE_TEL = "+13145550000";  */
var PHONE_DISPLAY = "";
var PHONE_TEL = "";
/* ===================================================================================== */
(function(){
  if(!PHONE_TEL) return; // keeps "Call number coming soon" placeholders
  document.querySelectorAll("[data-call]").forEach(function(el){
    el.setAttribute("href","tel:"+PHONE_TEL);
    el.removeAttribute("aria-disabled");
    var t=el.querySelector("[data-call-text]");
    if(t) t.textContent=(el.dataset.call==="short"?"Call ":"Call 24/7: ")+PHONE_DISPLAY;
  });
})();
