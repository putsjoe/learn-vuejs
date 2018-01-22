
read = new Vue({
    el: '#read',
    data: {
        reading: '',
        portion: ''
    }
});

add = new Vue({
    el: '#add',
    data: {
        addedtext: '',
        name: 'Hello',
    },
    watch: {
        addedtext: function() {
            read.reading = add.addedtext;
        }
    },
})

reading = new Vue({
    el: '#reading',
    methods: {
        readin: function() {
            var processed = read.reading.split(' ');
            
            // Slice up array
            var portions = [];
            var chunks = 5;
            while (processed.length) {
                portions.push(processed.splice(0, chunks));
            };

            nowread(portions, wpm(chunks, 200));
        }
    }
})

function wpm(chunks, wordspm) {
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
