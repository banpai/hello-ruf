'use strict';

var fetch = require('fetch');



function postState(state) {
    // fetch("http://banpai.vicp.io/ruff-code.html").then(function (response) {
    //     if (response.status !== 200) {
    //         console.log("存在一个问题，状态码为：" + response.status);
    //         return;
    //     }
    //     //检查响应文本
    //     response.json().then(function (data) {
    //         console.log(data);
    //     });
    // }).catch(function (err) {
    //     console.log("Fetch错误:" + err);
    // })

    fetch('http://banpai.vicp.io/ruff-code.html')
    .then(function (response) {
        return response.text();
    })
    .then(function (json) {
        console.log(json.substring(10, 11));
        if(json.substring(10, 11) == '1'){
            $('#led-r').turnOn();
        }else{
            $('#led-r').turnOff();
        }
    });
}

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('l2232');

    // setInterval(function(){
    //     postState();
    // }, 1000);

    // $('#button').on('push', function () {
    //     console.log('按钮按下。');
    //     $('#led-r').turnOn(function () {
    //         postState('turn on');
    //     });
    // });

    // $('#button').on('release', function () {
    //     console.log('松开按钮。');
    //     $('#led-r').turnOff(function () {
    //         postState('turn off');
    //     });
    // })

     $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
