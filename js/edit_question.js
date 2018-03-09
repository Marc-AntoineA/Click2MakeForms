

function event_obligatory(checkbox){
  // Change the color of the question-box accordingly with the checkbox

  const question_box = checkbox.parentNode.parentNode;
  if(checkbox.checked){
    question_box.classList.add('question-box-obligatory');
  }else{
    question_box.classList.remove('question-box-obligatory');
  }
}

function event_conditionnal(){

}

function event_type_question(select_node){

  const question_box = select_node.parentNode.parentNode;
  var type_data_box = question_box.children[3];
  console.log(select_node.value);
  const new_type_data_box = layout_type_data(select_node.value, "", []);
  console.log(new_type_data_box);
  question_box.replaceChild(new_type_data_box, question_box.children[3]);

}
