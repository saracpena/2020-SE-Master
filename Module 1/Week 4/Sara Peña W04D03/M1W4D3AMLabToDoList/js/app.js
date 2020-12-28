// key listener reference: https://www.techiedelight.com/detect-enter-key-press-javascript/#:~:text=In%20plain%20JavaScript%2C%20you%20can,an%20Enter%20key%20is%20pressed.

$(() => {

	// add item on press enter
	$('#task').on('keydown',(e)=>{
		if (e.which === 13) {
			$('#add').click();
		}
	});
	// adding items to the list
	$("#add").on("click",()=>{
		// get the input
		const newItem = $("#task").val();
		//clear the input
		$('#task').val("");
		// add it to the todo list
		const $newListItem = $('<li>');
		$newListItem.addClass('to-do-item');
		$newListItem.addClass('list-item');
		$newListItem.append($('<span>').text(newItem));
		// $newListItem.text(newItem);
		// add a button to mark as done as well
		const $doneButton = $('<button>');
		$doneButton.addClass('list-item-control');
		$doneButton.text('Mark Done');
		// consider only having a single event handler on the whole list
		// https://ehsangazar.com/optimizing-javascript-event-listeners-for-performance-e28406ad406c
		$doneButton.on('click', ()=>{
			$newListItem.detach().appendTo($('#done-list'));
			$newListItem.removeClass('to-do-item');
			$newListItem.addClass('done-item');

			$doneButton.text('Remove Item');
			// doing this inside really seems wrong
			// I could remove the original button and add a new one  
			$doneButton.on('click', ()=>{
				$newListItem.remove();
			});
		});

		$newListItem.append($doneButton);

		$('#to-do-list').append($newListItem);

	});

});


// // const toDos = [];
// // const done = [];

// // const completeButton = "<input type = 'submit' value = 'COMPLETED'>;
// // const removeButton = "<input type = ''

// // $('form').on('#add', (e) => {
// //   console.log($('#task').val());

// //   todos.push($('#task').val());
// //   // list.push($('#input-box-mn').val());
// //   // list.push($('#input-box-ln').val());
// //   console.log(todos); //test it
// //   e.preventDefault();

// //   $(e.currentTarget).trigger('reset');
// //   render();
// // });
// // const render = () => { //prints the item
// //   // console.log('list:', list);
// //   // $('ul').empty();
// //   // list.forEach((item) => { //it iterates the array
// //   //     console.log(item);
// //   $('ul').append('<li>' + todos[todos.length - 1] + '</li>');
// //   // });
// //   $('li').on('click', (e) => {

// //       $(e.currentTarget).css('text-decoration', 'line-through');
// //       $(e.currentTarget).effect('shake');
// //   });

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