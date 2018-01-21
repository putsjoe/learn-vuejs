
var vm = new Vue({
    el: '#example1',
    data: {
      message: 'Hello',
      shed: 'Shello'
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      },
      revshed: function() {
        return this.shed.split('')
      }

    }
  })

var nm = new Vue({
    el: '#example2',
    data: {
        messag: 'Cheese'
    },
    methods: {
        revMes: function() {
            return this.messag.split('');
        }
    }

})

var vmdemo = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })

  var vmdemobetter = new Vue({
    el: '#demo2',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  })

setInterval(function() {
    if (vmdemo.lastName == 'Bar') {
        vmdemo.lastName = 'BAR';
        vmdemobetter.lastName = 'BAR';
    } else {
        vmdemo.lastName = 'Bar';
        vmdemobetter.lastName = 'Bar';
    }
}, 2000)

var setvm = new Vue({
    el: '#example4',
    data: {
        firstName: 'Bob',
        lastName: 'Dole'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
})
    

setInterval(function() {
    if (setvm.firstName == 'Bob') {
        setvm.firstName = 'BAB';
    } else {
        setvm.firstName = 'Bob';
    }
}, 2000)



