$(document).ready(function(){
    $("#modal-profile").iziModal({
        title: "My Profile",
        subtitle: "The basic personal information of mine.",
        header: "light",
        headerColor: "#8a9096",
        iconClass: 'icon-announcement',
        width: 500,
        padding: 20
    });
    $(document).on('click', '.trigger-profile', function (event) {
        event.preventDefault();
        $('#modal-profile').iziModal('open');
    });


    $("#modal-skills").iziModal({
        title: "My Skills",
        subtitle: "The self-evaluation of my skills.",
        header: "light",
        headerColor: "#8a9096",
        iconClass: 'icon-announcement',
        width: 700,
        padding: 20
    });
    $(document).on('click', '.trigger-skills', function (event) {
        event.preventDefault();
        $('#modal-skills').iziModal('open');
    });

    $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'butt',
        barColor: '#313131',
        trackColor:	"#a1a1a1",
        size: 140,
        animate: 1000
    });
});

