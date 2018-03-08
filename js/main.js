'use strict'



//---------------------------------------
//           MAIN SCRIPT
//---------------------------------------

//1. Get the label of the form
const form_label = document.getElementById("form-label").innerHTML;
console.log("form_label ", form_label)

//2. Get the form
const form_data = get_form(form_label);
form_data.then(form => {
  var new_form = to_form_with_conditionnal_questions(form);


  var container = document.getElementById("form");
  for (var i = 0; i < new_form.length; i++) {
      container.appendChild(layout_question(new_form, i));
  }

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

});

// Init the tooltips
