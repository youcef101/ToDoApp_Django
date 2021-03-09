$(document).ready(function () {

$('#list-items').html(localStorage.getItem('listItems'));

$('.add-items').click(function(event)
{

event.preventDefault();

var item = $('#todo-list-item').val();

if(item)
{
$('#list-items').append("<li><input class='checkbox' type='checkbox' /> <span class='todo-text'>" + item + "</span><a class='remove text-right'><i class='fa fa-trash'></i></a><hr></li>");

localStorage.setItem('listItems', $('#list-items').html());

$('#todo-list-item').val("");
}

});

$(document).on('change', '.checkbox', function()
{
if($(this).attr('checked'))
{
    $(this).removeAttr('checked');




}
else
{
$(this).attr('checked', 'checked');




}

$(this).parent().toggleClass('completed');

localStorage.setItem('listItems', $('#list-items').html());
});

$(document).on('click', '.remove', function()
{
$(this).parent().remove();

localStorage.setItem('listItems', $('#list-items').html());
});


});