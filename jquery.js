
(function (window, undefined) {
    console.log("step 1")
    var rootjQuery;
    console.log("step 2")
    jQuery = function (selector, context) { 
        console.log("jQuery begin")
        return new jQuery.fn.init( selector, context, rootjQuery );
    }
    console.log("step 3")
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function (selector, context, rootjQuery) { 
            console.log("jQuery fn begin")
            // return jQuery.makeArray( selector, this );
            return this;
        }
    }
    console.log("step 4")
    rootjQuery = jQuery(document);
    console.log("step 5")
    jQuery.fn.init.prototype = jQuery.fn;
    console.log("step 6")
    if (typeof window === "object" && typeof window.document === "object") {
        console.log("jQuery window ")
        window.jQuery = window.$ = jQuery;
    }
    console.log("step 7")
})( window );
    