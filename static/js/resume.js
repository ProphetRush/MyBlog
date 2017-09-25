$(document).ready(function(){
    $("#modal-default").iziModal({
        title: "My Profile",
        subtitle: "Simple, complete and lightweight modal plugin with jquery.",
        iconClass: 'icon-announcement',
        width: 500,
        padding: 20
    });
    $(document).on('click', '.trigger-default', function (event) {
        event.preventDefault();
        $('#modal-default').iziModal('open');
    });
});