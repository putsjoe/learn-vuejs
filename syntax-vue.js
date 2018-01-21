
var hello = new Vue({
    el: '#hello',
    data: {
        msg: 'Cheese',
        htmlmsg: '<span style="color:red"> Cheese </span>',
        testid: 'that-id',
        someval: 21,
        seen: true,
        thingy: 'blahb',
                
    }
})

setTimeout(
    function() {
        hello.$data.msg = 'No CHeese';
        hello.$data.seen = false;
    },
    2000  // 2 seconds
)


