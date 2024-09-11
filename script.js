const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            randomMail: '',

        }
    },

    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail = response.data.response;
                    console.log(response.data.response);
                });
        }
    },

    mounted() {
        this.getRandomEmail()
    },

}).mount('#app');

