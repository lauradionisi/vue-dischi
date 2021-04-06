Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        albums: [],
        counter: 0

    },


    mounted() {  
        const self = this;
 
            axios 
                .get('https://flynn.boolean.careers/exercises/api/array/music')

                .then(function(result) {
                    const albums = result.data.response;

                    self.albums = albums;
                    console.log(albums);
            
        
        });      
    }, 
});
