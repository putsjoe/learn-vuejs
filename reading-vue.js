
read = new Vue({
    el: '#read',
    data: {
        reading: '',
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
    methods: {
        readit: function(event) {
            console.log('HEllo');
        }
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    // define methods under the `methods` object
    methods: {
      greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  })
  
