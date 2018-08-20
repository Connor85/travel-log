// business logic
function WheelsUp (location, landmark, time) {
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeOfYear = time;
}
// WheelsUp.prototype.location = function(){
//   return this.location
// }
//user interface logic

$(document).ready(function(){
  $("form#new-travel-location").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();

    var newWheelsUp = new WheelsUp (inputtedLocation, inputtedLandmark, inputtedTime);

    $("ul#places").append("<li><span class='place'>" + newWheelsUp.locationName + "</span></li>")

    $(".place").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(newWheelsUp.locationName);      $(".locations").text(newWheelsUp.locationName);
      $(".landmarks").text(newWheelsUp.landmarkName);
      $(".times-of-year").text(newWheelsUp.timeOfYear);

    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");

  });
});
