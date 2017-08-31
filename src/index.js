'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('l2232');
    // $('#led-r').turnOn();

    $('#button').on('push', function(){
        console.log('按钮按下。');
        $('#led-r').turnOn();
    });

    $('#button').on('release', function(){
        console.log('松开按钮。');
        $('#led-r').turnOff();
    })

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
