$(function(){

    $('.btn-get').click(function(e) {
        $.ajax({
            url: '/skills',
            type: 'GET',
            success: function (response) {
                var skills = JSON.parse(response);
                $('#answer').text(skills.answer);
            },
            error: function (error) {
                console.log(error);
            }
        });

        e.preventDefault();

    });

    $('.btn-edit').click(function(e) {
        var edit = $('#edit');

        $.ajax({
            url: '/skills',
            type: 'GET',
            success: function (response) {
                edit.fadeIn('slow');
                var skills = JSON.parse(response);
                edit.text(skills.answer);
            },
            error: function (error) {
                console.log(error);
            }
        });

        e.preventDefault();
    });

    $('.btn-put').click(function(e) {
        var edit = $('#edit'),
            updateUser = {};

        updateUser.name = edit.val();

        $.ajax({
            url: '/skills',
            type: 'PUT',
            data: updateUser,
            success: function (response) {
                edit.fadeOut('slow');
                var skills = JSON.parse(response);
                $('#answerPut').append(skills.answer);
                edit.append(skills.answer);
            },
            error: function (error) {
                console.log(error);
            }
        });

        e.preventDefault();
    });

    $('.btn-post').click(function(e) {
        var skill = {};
        skill.name = $('#newSkill').val();

        $.ajax({
            url: '/skills',
            type: 'POST',
            data: skill,
            success: function (response) {
                var skills = JSON.parse(response);
                $('#answerPost').text(skills.answer);
            },
            error: function (error) {
                console.log(error);
            }
        });

        e.preventDefault();
    });

    $('.btn-del').click(function(e) {

        $.ajax({
            url: '/skills',
            type: 'DELETE',
            success: function (response) {
                var skills = JSON.parse(response);
                $('#delete').text(skills.answer);
            },
            error: function (error) {
                console.log(error);
            }
        });

        e.preventDefault();
    })



});