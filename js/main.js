


//Enter functions
var adder = function() {
	console.log('button clicked!');
	var blankItem = $('<span>');
	var checkRemove = $('<button>').attr('type', 'button');
	$(checkRemove).attr('class', 'delete');
	var blankText = $('<li>');
	$('#list').append(blankText);
	$(blankText).append(checkRemove);
	$(blankText).append(blankItem);
	var newItem = $('#newItem').val();
	$(blankItem).html(newItem);
	//call event listener
	$('.delete').on('click', remover);
	

};

var remover = function(e) {
	console.log('remover is removing!');
	$(e.target).parent().remove()
}


//Event Listeners
$('#enterNew').on('click', adder);
