var idleTime = 0;
    $(document).ready(function () {
        // Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

        // Zero the idle timer on mouse movement.
        $(this).mousemove(function (event) {
            idleTime = 0;
        });
        $(this).keypress(function (event) {
            idleTime = 0;
        });
    });

    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 9)
	req.session.destroy(() => {
      	res.status(204).end();
    });
            window.location.replace('/login/'); 
        };
