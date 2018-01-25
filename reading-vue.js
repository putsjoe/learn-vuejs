
Vue.component('history-item', {
    template: '<li>{{ historytitle }}</li>',
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
            while (processed.length) {
                portions.push(processed.splice(0, chunks));
            };
    
            nowread(portions, 500);
        }
    }
})

function push_history(data) {
    var history_title = data.substring(0, 15);
    Vue.set(hist.read_history, history_title, data);
    hist.history_titles = Object.keys(hist.read_history)
    console.log(hist.history_titles);
}

function calc_charspeed(char_count, word_speed) {
    settings.speed_char = calc_charspeed(add.char_count, settings.speed_word);

    // var a = 

};

function calc_wordspeed() {
    return true;
}

function convert(chunks, wordspm) {
    return 1000 * (chunks / (wordspm / 60))
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function nowread(portions, speed) {
    for (var i = 0; i < portions.length; i++) {
        read.portion = portions[i].join(' ');
        await sleep(speed);
    }
};
