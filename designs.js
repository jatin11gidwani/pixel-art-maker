//function to make grid of rows and columns in 'table' element
function makeGrid(height,width) {
  let table = $("table");
  //for loop to create no. rows as equal to height
  for (i = 1; i <= height; i++){
    table.append("<tr></tr>");
  }
  let tr = table.children('tr');
  //JQuery each() function to create no. of columns inside rows equal to width
  tr.each(function() {
    for (i = 1; i <= width; i++){
      $(this).append("<td></td>");
    }
  });
}

let submit_button =  $("#sizePicker").children('input').last();
//click event to call the makeGrid() function
//and creating click event on each 'td' tag
submit_button.on('click', function() {
  event.preventDefault();
  // Select size input
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  $("table").children('tr').remove();
  makeGrid(height,width);
  //click event to change the background color of clicked 'td' element
  $( 'td' ).on( 'click', function( evt ) {
    $( evt.target ).css( 'background', $("#colorPicker").val() );
  });
});
