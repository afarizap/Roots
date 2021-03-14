import React from "react"
import WithBackgroundImage from "./Hero"

/* Rotating Text - Morphtext */
(function($) {
    "use strict"; 
    
    $("#js-rotating").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});
})(jQuery);