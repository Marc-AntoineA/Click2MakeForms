'use strict'

// functions to download and upload a typeform
function get_form(form_label){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/' + form_label + '.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if(xhr.status === 200)
      {
        resolve(JSON.parse(xhr.responseText));
      }
      else
      {
        reject(Error(xhr.responseText));
      }
    };
    xhr.onerror = () => reject(Error(xhr.responseText));
    xhr.send();
  });
}

function to_form_with_conditionnal_questions(form){
  var new_form = new Array();

  // First, we keep only non-sub questions
  for(var i = 0; i < form.length; i++){
    const question = form[i];
    if(!question.isSub){
      question.subs = new Array()
      new_form.push(question);
    }
  }

  // Then, we add each subquestion to his parent question (tree view)
  for(var i = 0; i < form.length; i++){
    const question = form[i];
    if(question.isSub){
      const parentsPosition = question.parentsQuestionPosition;
      for(var j = 0; j < new_form.length; j++){
        const parentsQuestion = new_form[j];
        if(parentsQuestion.position == parentsPosition){
          parentsQuestion.subs.push(question);
        }
      }
    }
  }

  return new_form;
}
