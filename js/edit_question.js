

function event_obligatory(checkbox){
  // Change the color of the question-box accordingly with the checkbox

  const question_box = checkbox.parentNode.parentNode;
  if(checkbox.checked){
    question_box.classList.add('question-box-obligatory');
  }else{
    question_box.classList.remove('question-box-obligatory');
  }
}

function event_conditional(checkbox){
  // Add or remove the box for a conditional question (label, type_data...)
  const question_box = checkbox.parentNode.parentNode;
  console.log(question_box);
  // true for sub
  if(checkbox.checked){
    const question_label_box = layout_label_question("Votre question", true);
    const type_question_box = layout_middle_toolbar(false,
      "number", true);
    const type_data_box = layout_type_data("number", "", []);
    question_box.appendChild(question_label_box);
    question_box.appendChild(type_question_box);
    question_box.appendChild(type_data_box);
  }else{
    question_box.removeChild(question_box.childNodes[5]);
    question_box.removeChild(question_box.childNodes[4]);
    question_box.removeChild(question_box.childNodes[3]);
    // if the question was obligatory
    question_box.classList.remove('question-box-obligatory');
  }

}

function event_type_question(select_node, position){
  // Change the type of the question. Position is used for conditional questions

  const question_box = select_node.parentNode.parentNode;
  var type_data_box = question_box.children[position];
  const new_type_data_box = layout_type_data(select_node.value, "", []);
  question_box.replaceChild(new_type_data_box, question_box.children[position]);
}
