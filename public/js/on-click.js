"use strict";

$(document).ready(function() {
  $('button#load-cars').on("click", function(){
    fetchJSON();
  });
});