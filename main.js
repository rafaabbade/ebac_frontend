$(document).ready(function(){
    


    //outro evento com o JQuery, dessa vez com o button do tipo submit
    $('form').on('submit', function(e){
        e.preventDefault();
        //ao invés do .value, no jquery usamos a função .val
        const novatarefa = $('#nova-tarefa').val();
        const novoitem = $('<li class="clickable"></li>');
        //antes do appendTo estamos criando uma tag com a imagem inserida e o o appendTo insere esse texto dentro de outra tag
        $(novatarefa).appendTo(novoitem);

        $(`
        <li>
            ${novatarefa}
        </li>
        `).appendTo(novoitem);
        $(novoitem).appendTo('ul');
        $('#nova-tarefa').val('');

    })

    //traçar uma linha sobre o item de uma lista
    //usando um id na ul e organizando dessa forma para alterar apenas um li
    $('ul').on('click', 'li', function() {
        $(this).addClass('cortar')
    });
})

