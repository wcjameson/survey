
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    const foods = $("input:radio[name=foods]:checked").val();
    const DOB = $("#born").val();
    const color = $("#colors").val();
    
    const result = beverage + foods + DOB + color;
    $(".output").text(result);
  });
});