var submitForm = function (ev) {
    ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target);
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="sent">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#form').on('submit', submitForm);