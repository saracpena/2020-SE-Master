$(function () {
  $("#add").on("click", function () {
    var val = $("input").val();
    if (val !== "") {
      var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
      $("#mylist").append(elem);
      $("input").val("");
      $(".rem").on("click", function () {
        $(this).parent().remove();
      });
    }
  });
});
