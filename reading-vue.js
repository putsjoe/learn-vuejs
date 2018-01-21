
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
            var chunk = 5;
            while (processed.length) {
                portions.push(processed.splice(0, chunk));
            }

            read.portion = portions;
        }
    }
})

