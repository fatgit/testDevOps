$(function(){

    $('.btn-get').click(function(event)) {
            $.ajax({

                    url: '/skills',
                    data: $(form).serialize(),
                    type: 'GET',
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

        }
    $('.btn-post').click(function(event)) {
            $.ajax({

                    url: '/skills',
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

        }


}