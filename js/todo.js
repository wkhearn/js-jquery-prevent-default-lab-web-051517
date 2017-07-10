$(document).ready(function(){
  submitFormEvent()
})

function submitFormEvent(){
  document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    var listItem = document.querySelector('#item').value
    document.querySelector('ol').innerHTML += ( '<li>' + listItem + '</li>' )
  })
}
// function submitFormEvent(){
//   $('form').on('submit', function(event){
//     var listItem = $('#item').val();
//     $('ol').append( '<li>' + listItem + '</li>' );
//     event.preventDefault();
//   });
// }
