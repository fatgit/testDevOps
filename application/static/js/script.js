$(function(){
var $table = $('.table');
var end = $table.find('tbody');
console.log(end);
$('.form').each(function(i, form){
    $(form).submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/user_info',
			data: $(form).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
				end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })
});


$('.backup').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/backup',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
				end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })
$('.modsec').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/modsec',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
                end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.user_info').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/user_info',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
                end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.csf_allow').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/csf_allow',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
                end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.cxs_show').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/cxs_show',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
                end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })
$('.cxs_show_file').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/cxs_show_file',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.check_inodes').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/check_inodes',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.user_load').submit(function(event) {
    var tr = [];
    event.preventDefault();

    $.ajax({
			url: '/user_load',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
//			    $('.load').hide();
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })
$('.imap').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/imap',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.se').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/se',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.haproxy').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/haproxy',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             $('.response-area').text(tr.answer)
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.imapip').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/imapip',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             $('.response-area').text(tr.answer)
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })
$('.mailturn').submit(function(event) {
    var tr = [];
    event.preventDefault();
    $.ajax({
			url: '/mailturn',
			data: $(this).serialize(),
			type: 'POST',
			success: function(response){
			console.log(response);
				tr.push(response) ;
				tr = JSON.parse(tr[0]);
				console.log(tr.answer);
             $('.response-area').text(tr.answer)
             end.append('<div class="masthead">' + tr.answer + '</div>')
				},
			error: function(error){
				console.log(error);
			}
		});
    })

$('.btn-clear').click(function(){
    $('#data').find('tbody').html('');
});

$.ajaxSetup({
beforeSend: function(){
				$('.load').show();},

complete: function(response){
			    $('.load').hide();
}});

});