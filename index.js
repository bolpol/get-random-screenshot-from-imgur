const fs = require('fs');
const request = require('request');
const http = require('http');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        if(!err) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);
        } else {
            console.log(err.message);
        }
    });
};

let lowercase = 'abcdefghijklmnopqrstuvwxyz'.split("");
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
let nums = '0123456789'.split("");
let defic = '_';

let rand1 = () => {
    let i = Math.floor(Math.random()*3);
    if(0 === i) return lowercase[Math.floor(Math.random()*lowercase.length)];
    if(1 === i) return uppercase[Math.floor(Math.random()*uppercase.length)];
    if(2 === i) return nums[Math.floor(Math.random()*nums.length)];
};

let rand2 = () => {
    let i = Math.floor(Math.random()*2);
    if(0 === i) return lowercase[Math.floor(Math.random()*lowercase.length)];
    if(1 === i) return nums[Math.floor(Math.random()*nums.length)];
};

function init() {

    let N = 22;
    let hashname = '';

    for(let i=0; i<N; i++) {
        hashname += rand1();
    }
    let arr = hashname.split('');
    //console.log(arr[Math.floor(Math.random()*N)]);
    if(Math.floor(Math.random()*2) === 1) {
        arr.splice(Math.floor(Math.random()*N), 2, defic, defic);
    } else {
        arr.splice(Math.floor(Math.random()*N), 1, defic);
    }

    //console.log(arr);
    hashname = arr.join('');
    //console.log(hashname);

    let printsc = "https://prnt.sc/" + hashname + ".png";

    download(printsc, __dirname + '/result/' + hashname + '.png', function(){
        console.log(printsc, 'done');
        init();
    });

/*    let options = {
        host: 'image.prntscr.com',
        path: '/image/v9f86_QaSwOKQNGysxxtFQ.jpg',
        head: headers
    };
    let request = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            console.log(data);
        });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();*/


    let amount = Math.round(Math.random()*2);
    if (amount === 2) {
        let N = 7;
        let hashname = '';
        let hashname2 = '';
        for(let i=0; i<N; i++) {
            hashname += rand1();
        }
        let printsc = "https://i.imgur.com/" + "" + hashname + ".png";
        download(printsc, __dirname + '/result/' + hashname + '.png', function(){
            console.log(printsc, 'done');
            init()
        });

    }
    if (amount === 1) {
        let N = 3;
        let hashname = '';
        let hashname2 = '';
        for(let i=0; i<N; i++) {
            hashname += rand1();
        }
        for(let i=0; i<N; i++) {
            hashname2 += rand2();
        }
        let printsc = "http://img.prntscr.com/img?url=http://i.imgur.com/" + "" + hashname + hashname2 + ".jpg";

        download(printsc, __dirname + '/result/' + hashname + hashname2 + '.jpg', function(){
            console.log(printsc, 'done');
            init()
        });
    }
    if(amount === 0) {
        let N = 5;
        let hashname = '';
        for(let i=0; i<N; i++) {
            hashname += rand1();
        }
        let printsc = "http://i.imgur.com/" + "" + hashname + ".jpg";
        download(printsc, __dirname + '/result/' + hashname + '.jpg', function(){
            console.log(printsc, 'done');
            init()
        });
    }
}

init();

function init2() {
    let N = 22;
    let hashname = '';

    for(let i=0; i<N; i++) {
        hashname += rand1();
    }
    let arr = hashname.split('');
    //console.log(arr[Math.floor(Math.random()*N)]);
    if(Math.floor(Math.random()*2) === 1) {
        arr.splice(Math.floor(Math.random()*N), 2, defic, defic);
    } else {
        arr.splice(Math.floor(Math.random()*N), 1, defic);
    }

    //console.log(arr);
    hashname = arr.join('');
    //console.log(hashname);

    let printsc = "https://prnt.sc/" + hashname + ".png";

    download(printsc, __dirname + '/result/' + hashname + '.png', function(){
        console.log(printsc, 'done');
        download(printsc, __dirname + '/result/' + hashname + '.jpg', function(){
            console.log(printsc, 'done');
            init2();
        });
    });
}

//init2();