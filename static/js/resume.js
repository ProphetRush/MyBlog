$(document).ready(function(){
    $("#modal-default").iziModal({
        title: "My Profile",
        subtitle: "The basic personal information of mine.",
        header: "light",
        headerColor: "#8a9096",
        iconClass: 'icon-announcement',
        width: 500,
        padding: 20
    });
    $(document).on('click', '.trigger-default', function (event) {
        event.preventDefault();
        $('#modal-default').iziModal('open');
    });
});