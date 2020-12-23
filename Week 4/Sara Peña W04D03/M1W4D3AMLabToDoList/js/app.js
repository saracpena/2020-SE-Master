
const todos = [];
$('#add').on('click', (e) => {
  console.log($('#task').val());

  todos.push($('#task').val());
  console.log(todos);
  e.preventDefault();

  $(e.currentTarget).trigger('reset');
  render();
});
const render = () => { //prints the item
  // console.log('list:', list);
  // $('ul').empty();
  // list.forEach((item) => { //it iterates the array
  //     console.log(item);
  $('ul').append('<li>' + list[list.length - 1] + '</li>');
  // });
  $('li').on('click', (e) => {

      $(e.currentTarget).css('text-decoration', 'line-through');
      $(e.currentTarget).effect('shake');
  });

// $(function() {
//   $("#add").on("click", function() {
//       var val = $("input").val();
//       if (val !== "") {
//           var elem = $("<li></li>").text(val);
//           $(elem).append("<button class='rem'>Completed</button>");
//           $("#mylist").append(elem);

//           $("input").val("");
//           $(".rem").on("click", function() {
//             for(let i=0; i<=10; i++){
//               var j = $("li").eq().remove();//Number($('li:eq(i)'));
//               //console.log(j);
//             }
//             var j = $("li").eq(1);//$('li:eq(2)');
//             console.log(j);
//             for(let i = 0; i <= i.length; i++){
//               $('rem').parent().remove(eq[j]);
//             }
//           });
//       }
//       $('.rem').on('click', function(){
//         $('#mylist-1').append(elem);
//         $(elem).append("<button class='item'>Remove</button>");
//         $('.rem').remove();
//         $('li').css('backgroundColor', '#ED6495');
//       })
//     });
//   });