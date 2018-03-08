'use strict'

// Display a new question (first time)
function display_new_question(q){

  var question = document.createElement("DIV");
  var label = document.createElement("H4");
  label.innerHTML = q.label;




  var question = document.createElement("h2");
  question.innerHTML = q.label;

  form_place.appendChild(question);
}

// arrow-up, add, delete
function layout_toolbar_up(){
  var toolbar = document.createElement("DIV");
  toolbar.className = "toolbar toolbar-up";

  var move_up_button = document.createElement("BUTTON");
  var icon_arrow_up = document.createElement("IMG");
  icon_arrow_up.src = "icons/arrow-up.png";
  icon_arrow_up.className = "icon";
  move_up_button.appendChild(icon_arrow_up);
  toolbar.appendChild(move_up_button);

  var add_button = document.createElement("BUTTON");
  var icon_add = document.createElement("IMG");
  icon_add.src = "icons/add.png";
  icon_add.className = "icon";
  add_button.appendChild(icon_add);
  toolbar.appendChild(add_button);

  var delete_button = document.createElement("BUTTON");
  var icon_delete = document.createElement("IMG");
  icon_delete.src = "icons/delete.png";
  icon_delete.className = "icon";
  delete_button.appendChild(icon_delete);
  toolbar.appendChild(delete_button);

  return toolbar;
}

function layout_toolbar_down(){
  var toolbar = document.createElement("DIV");
  toolbar.className = "toolbar toolbar-down";

  var move_up_button = document.createElement("BUTTON");
  var icon_arrow_up = document.createElement("IMG");
  icon_arrow_up.src = "icons/arrow-down.png";
  icon_arrow_up.className = "icon";
  move_up_button.appendChild(icon_arrow_up);
  toolbar.appendChild(move_up_button);

  var add_button = document.createElement("BUTTON");
  var icon_add = document.createElement("IMG");
  icon_add.src = "icons/add.png";
  icon_add.className = "icon";
  add_button.appendChild(icon_add);
  toolbar.appendChild(add_button);

  var delete_button = document.createElement("BUTTON");
  var icon_delete = document.createElement("IMG");
  icon_delete.src = "icons/delete.png";
  icon_delete.className = "icon";
  delete_button.appendChild(icon_delete);
  toolbar.appendChild(delete_button);

  return toolbar;
}

function layout_label_question(label_str, sub = false){
  var legend = document.createElement("LABEL");
  legend.className = "legend";
  legend.innerHTML = "Intitulé de la question"

  var label = document.createElement("INPUT");
  if(sub){
    label.className = "label sub-label"
  }else{
    label.className = "label";
  }
  label.value = label_str;

  var container = document.createElement("DIV");
  container.appendChild(legend);
  container.appendChild(label);

  return container;
}

function layout_middle_toolbar(obligatory_bool, type_question){
    var toolbar = document.createElement("DIV");
    toolbar.className = "toolbar";

    var legend = document.createElement("LABEL");
    legend.className = "legend";
    legend.innerHTML = "Type de la question";

    var select = document.createElement("SELECT");
    select.name = "type_question";
    select.size = "1";
    //-- Values
      var option1 = document.createElement("OPTION");
      option1.value = "selectOne";
      option1.innerHTML = "Question à choix unique";
      if(type_question == "selectOne"){
        option1.selected = "selected";
      }
      select.appendChild(option1);

      var option2 = document.createElement("OPTION");
      option2.value = "select";
      if(type_question == "select"){
        option2.selected = "selected";
      }
      option2.innerHTML = "Question à choix multiples";
      select.appendChild(option2);

      var option3 = document.createElement("OPTION");
      option3.value = "number";
      if(type_question == "number"){
        option3.selected = "selected";
      }
      option3.innerHTML = "Nombre";
      select.appendChild(option3);

      var option4 = document.createElement("OPTION");
      option4.value = "text";
      if(type_question == "text"){
        option4.selected = "selected";
      }
      option4.innerHTML = "Texte libre";
      select.appendChild(option4);

      var option5 = document.createElement("OPTION");
      option5.value = "inline";
      if(type_question == "inline"){
        option5.selected = "selected";
          console.log("y");
      }
      option5.innerHTML = "Texte court";
      select.appendChild(option5);

    var obligatory_label = document.createElement("LABEL");
    obligatory_label.className = "legend margin-left";
    obligatory_label.innerHTML = "Question obligatoire ? ";

    var checkbox = document.createElement("INPUT");
    checkbox.id = "obligatory";
    checkbox.className = "obligatory";
    checkbox.type = "checkbox";

    if(obligatory_bool){
      checkbox.checked = "checked";
    }

    toolbar.appendChild(legend);
    toolbar.appendChild(select);
    toolbar.appendChild(obligatory_label);
    toolbar.appendChild(checkbox);

    return toolbar;
}

function layout_question(questions, id){
  const question = questions[id];

  var question_box = document.createElement("DIV");
  question_box.className = "question-box";
  question_box.id = id;

  const toolbar_up_box = layout_toolbar_up();
  const label_box = layout_label_question(question.label);
  const toolbar_middle_box = layout_middle_toolbar(
    question.obligatory, question.type_question);
  const toolbar_down_box = layout_toolbar_down();
  question_box.appendChild(toolbar_up_box);
  question_box.appendChild(label_box);
  question_box.appendChild(toolbar_middle_box);

  if(question.type_question == "number"){
    const type_data = question.type_data.split(";");
    const type_data_box = layout_number(type_data[0], type_data[1]);
    question_box.appendChild(type_data_box);
  }

  if (question.type_question == "select" ||
        question.type_question == "selectOne"){
    const choices = question.type_data.split(";");
    const type_data_box = layout_choices(choices, question.subs);
    question_box.appendChild(type_data_box);
  }

  question_box.appendChild(toolbar_down_box);
  return question_box;
}

function layout_number(minimum, maximum){
  var container = document.createElement("DIV");
  container.className = "type-data";

  var label_inf = document.createElement("LABEL");
  label_inf.className = "legend";
  label_inf.innerHTML = "Minimum :";

  var input_inf = document.createElement("INPUT");
  input_inf.id = "min";
  input_inf.type = "number";
  input_inf.value = minimum;

  var label_sup = document.createElement("LABEL");
  label_sup.className = "legend";
  label_sup.innerHTML = "Maximum : ";

  var input_sup = document.createElement("INPUT");
  input_sup.id = "max";
  input_sup.type = "number";
  input_sup.value = maximum;

  container.appendChild(label_inf);
  container.appendChild(input_inf);
  container.appendChild(label_sup);
  container.appendChild(input_sup);

  return container;
}

function layout_choices(choices, subs){
  var container = document.createElement("DIV");
  container.className = "type-data";
  for(var i = 0; i < choices.length; i++){
    const choice_box = layout_choice(choices, subs, i);
    container.appendChild(choice_box);
  }

  return container;
}

function layout_choice_sub(choices){
  var container = document.createElement("DIV");
  container.className = "type-data";

  var list = document.createElement("UL");
  for(var i = 0; i < choices.length; i++){
    var item = document.createElement("LI");
    item.innerHTML = choices[i];
    list.appendChild(item);
  }

  container.appendChild(list);
  return container;
}

function layout_toolbar_choice(conditionnal_bool){
  var toolbar = document.createElement("DIV");
  toolbar.className = "toolbar";

  var move_up_button = document.createElement("BUTTON");
  var icon_arrow_up = document.createElement("IMG");
  icon_arrow_up.src = "icons/arrow-up.png";
  icon_arrow_up.className = "icon";
  move_up_button.appendChild(icon_arrow_up);
  toolbar.appendChild(move_up_button);

  var move_down_button = document.createElement("BUTTON");
  var icon_arrow_down = document.createElement("IMG");
  icon_arrow_down.src = "icons/arrow-down.png";
  icon_arrow_down.className = "icon";
  move_down_button.appendChild(icon_arrow_down);
  toolbar.appendChild(move_down_button);

  var add_button = document.createElement("BUTTON");
  var icon_add = document.createElement("IMG");
  icon_add.src = "icons/add.png";
  icon_add.className = "icon";
  add_button.appendChild(icon_add);
  toolbar.appendChild(add_button);

  var delete_button = document.createElement("BUTTON");
  var icon_delete = document.createElement("IMG");
  icon_delete.src = "icons/delete.png";
  icon_delete.className = "icon";
  delete_button.appendChild(icon_delete);
  toolbar.appendChild(delete_button);

  return toolbar;
}

function layout_choice_label(label){
    var container = document.createElement("DIV");

    var label_answer = document.createElement("LABEL");
    label_answer.className = "legend";
    label_answer.innerHTML = "Réponse possible : "
    container.appendChild(label_answer);

    var input_answer = document.createElement("INPUT");
    input_answer.type = "text";
    input_answer.className = "label sub-label";
    input_answer.value = label;
    container.appendChild(input_answer);

    return container;
}

function layout_choice(choices, subs, i){
    const choice = choices[i];
    var container = document.createElement("DIV");
    container.className = "question-box choice";

    const toolbar_up_box = layout_toolbar_choice();
    const choice_label_box = layout_choice_label(choice);
    container.appendChild(toolbar_up_box);
    container.appendChild(choice_label_box);


    var j = 0;
    while(j < subs.length && subs[j].parentsQuestionsValue != i){
      j++;
    }
    if(j < subs.length){
      const conditionnal_block = layout_conditionnal_question(true);
      const conditionnal_question = subs[j];
      const question_label_box = layout_label_question(conditionnal_question.label, true);
      const type_question_box = layout_middle_toolbar(conditionnal_question.obligatory, conditionnal_question.type_question)

      container.appendChild(conditionnal_block);
      container.appendChild(question_label_box);
      container.appendChild(type_question_box);
    }else{
      const conditionnal_block = layout_conditionnal_question(false);
      container.appendChild(conditionnal_block);
    }
    return container;
}

function layout_conditionnal_question(conditionnal_bool){
  var container = document.createElement("DIV");

  var conditionnal_label = document.createElement("LABEL");
  conditionnal_label.className = "legend";
  conditionnal_label.innerHTML = "Question conditionnelle ? ";
  container.appendChild(conditionnal_label);

  var checkbox = document.createElement("INPUT");
  checkbox.id = "conditionnal";
  checkbox.className = "conditionnal";
  checkbox.type = "checkbox";
  if(conditionnal_bool){
    checkbox.checked = "checked";
  }
  container.appendChild(checkbox);

  return container;
}
