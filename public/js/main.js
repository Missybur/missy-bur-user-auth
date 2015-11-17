'use strict';

$(document).ready(init);

function init() {
  $('#logout').click(logout);
  $('#edit').click(editInfo);




}


function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });

  function editInfo(){
   $('#edit').click(function(){
    $('div').attr('contenteditable','true');
})
  });
}

