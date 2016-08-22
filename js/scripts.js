// back
function todo(activity, place, details, priority) {
  this.activity = activity;
  this.place = place;
  this.details = details;
  this.priority = priority;
}

// front
$("form").submit(function(event){
  event.preventDefault();
  var inputActivity = $("#activity").val();
  var inputLocation = $("#location").val();
  var inputDetails = $("#details").val();
  var inputPriority = $("#priority").val();

  var newToDo = new todo(inputActivity, inputLocation, inputDetails, inputPriority);

  $(".output ul").append("<li>" + inputActivity + "  " + '<input type="checkbox" id="checkbox" name="done"/>' + "</li>");



  $("ul li").last().click(function(){
    $(".details h2").toggle();
    $(".details p").toggle();
    $("#complete").toggle();
    $(".details h2").text(newToDo.activity);
    $("#itemLocation").text(newToDo.place);
    $("#itemDetails").text(newToDo.details);
    $("#itemPriority").text(newToDo.priority);
  });

  $("#activity").val("");
  $("#location").val("");
  $("#details").val("");

});

$("#complete").click(function(){
  var checkedCheckboxItem = $("input[name='done']:checked").parent();
  checkedCheckboxItem.remove();
});
