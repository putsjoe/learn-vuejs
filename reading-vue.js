
Vue.component('history-item', {
    template: '<li><a onclick="load_history(this.text);">{{ historytitle }}</a></li>',
    props: ['historytitle']
});

hist = new Vue({
    el: '#history',
    data: {
        read_history: {},
        history_titles: null,
    },
})

read = new Vue({
    el: '#read',
    data: {
        reading: '',
        portion: ''
    },
});

settings = new Vue({
    el: '#reading',
    data: {
        speed_char: 0,
        speed_word: 200,
        avg_word: 0,
        pause: false,
    },
    watch: {
        speed_word: function() {
            true;
        }
    }
});

add = new Vue({
    el: '#add',
    data: {
        addedtext: '',
        name: 'Hello',
        char_count: 0,
        word_count: 0,
    },
    watch: {
        addedtext: function() {
            read.reading = add.addedtext;
            add.char_count = add.addedtext.replace(/ /g,'').length;
            add.word_count = add.addedtext.split(' ').filter(String).length;  
            settings.avg_word = (add.char_count / add.word_count).toFixed(2);

            var calc_speed_char = function () {
                var average_word_len = settings.avg_word;
                var avg_chars_per_second = function() {
                    var avg_char_pm = settings.speed_word * average_word_len;
                    return avg_char_pm / 60
                };
                return (average_word_len * settings.speed_word)
            };

            settings.speed_char = calc_speed_char().toFixed(0);
            // settings.speed_char = add.char_count;
            // settings.speed_char = calc_charspeed(add.char_count, settings.speed_word);
        }
    },
    methods: {
        onEnterClick: function() {add.readin()},
        readin: function() {
            push_history(read.reading);
            var processed = read.reading.split(' ');
            
            // Slice up array
            var portions = [];
            var chunks = 5;
            var char_limit = 12;

            // HERE
            // Either just grab 200 words and average them out
            // Or divide the letters by avg_word_l to get an avg_char,
            //   Use this when displaying each word.

            
            // for (var i = 0; i < portions.length; i++) {
                // -        read.portion = portions[i].join(' ');
                // -        await sleep(speed);
                
                // Attempt at chunking words together to get an average
            /*    var coll_len = 0;
                wpm / 60 = w_p_sec
                return w_p_sec * avg_w_l
            */
            /*
            var coll = [];
            for (var i=0; i < processed.length; i++) {
                console.log('coll len - ' + coll_len);
                console.log(coll.length);
                // if (coll_len > 0) {
                    // console.log('HEllo getting length')
                coll_len = coll.map(function(w){return w.length }).reduce(function(a,b) {return a+b}, 0);
                // }
                console.log(coll_len);
                console.log(processed[i].length);
                if (coll_len + processed[i].length <= char_limit ) {
                    console.log('Got here');
                    coll.push(processed[i])
                    console.log(coll);
                } else {
                    portions.push(coll);
                    console.log('HEllo');
                    console.log(coll);
                    console.log(portions);
                    var coll = [];
                }
            }
            console.log(portions);
            // while (processed.length) {
                // portions.push(processed.splice(0, chunks));
            // };
            */
            nowread(portions, 1000);
        }
    }
})

function push_history(data) {
    var history_title = data.substring(0, 50);
    Vue.set(hist.read_history, history_title, data);
    hist.history_titles = Object.keys(hist.read_history)
}

function load_history(text) {
    console.log(text);
    console.log(hist.read_history[text]);
    add.addedtext = hist.read_history[text];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
function nowread(portions, speed) {

    async function loop(ar, indx, speed) {
        read.portion = ar[indx].join(' ');
        await sleep(speed);
        loop(ar, indx + 1, speed);
    }
    loop(portions, 0, speed)
};

// Attempts at a pause button below with help from an example.
/*
function achan(ar, callback) {
    var index;
    index = 0;
    loop();
    console.log(ar);

    function loop() {
        if ( index < ar.length ) {
            console.log(ar[index])
            read.portion = ar[index].join(' ');
            // changeto(portions, index);
            setTimeout(loop, 0);
        } else {
            callback();
        }
    }

}

function loopArrayAsync(ar, callback) {
    var index;

    index = 0;
    loop();

    function loop() {
        if (index < ar.length) {
            console.log(ar[index++]);
            setTimeout(loop, 0);
        }
        else {
            callback();
        }
    }
};
// loopArrayAsync(a, function() {console.log('DOne');});

async function changeto(portions, index) {
    read.portion = portions[index];
}
*/
