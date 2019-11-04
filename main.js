// Create a Vue instance
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    cssClass: '',
    counter: 0,
    clicks: 0,
    show: true,
    persons: [
      { name: 'Steve', age: 27 },
      { name: 'Tony', age: 37 },
      { name: 'Sue', age: 23 }
    ]
  },
  methods: {
    changeTitle() {
      this.title = 'Changed Title';
    },
    increment() {
      // this.counter = this.counter + 2;
      this.clicks++;
      // this.counter = this.clicks * 2;
    }
  },
  computed: {
    counter() {
      return this.clicks * 2;
    }
  }
});
