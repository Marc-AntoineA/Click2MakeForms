

function event_obligatory(checkbox, form){
  // Change the color of the question-box accordingly with the checkbox

  const question_box = checkbox.parentNode.parentNode;
  if(checkbox.checked){
    question_box.classList.add('question-box-obligatory');
  }else{
    question_box.classList.remove('question-box-obligatory');
  }
}
