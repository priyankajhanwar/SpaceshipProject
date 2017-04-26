  
  <!-- grid making with hexadecimal id-->
   $(function() {
    for (var columnPointer = 0; columnPointer < 16; columnPointer++) {
        for (var rowPointer = 0; rowPointer< 16; rowPointer++) {

             var hex=columnPointer.toString(16);
             var hex1=rowPointer.toString(16);

             $("<div>").addClass("unit").attr('id',hex+''+hex1).appendTo("#container").text(" ");
        }
    }

    <!-- call to print spaceShips on grid-->
        showSpaceships(); 
      
});