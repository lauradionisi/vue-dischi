Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        titles: [],
        authors: [],
        images: [],
        years: [],
        counter: 0

    },

    methods: {
        activeAlbum: function(index) {
            this.counter = index;
            console.log(this.counter);
        }
    },

    mounted() {  
 
            axios 
                .get('https://flynn.boolean.careers/exercises/api/array/music')

                .then( (result) => {
                    var image = result.data.response[this.counter].poster;
                    this.images.push(image);
                    console.log(image);

                    var title = result.data.response[this.counter].title;
                    this.titles.push(title);
                    console.log(title);

                    var author = result.data.response[this.counter].author;
                    this.authors.push(author);
                    console.log(author);

                    var year = result.data.response[this.counter].year;
                    this.years.push(year);
                    console.log(year);


                console.log(result.data.response);
        
        });      
    }, 
});
