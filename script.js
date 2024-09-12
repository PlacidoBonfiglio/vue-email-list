const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            randomEmails: [],
        }
    },

    methods: {
        getRandomEmail() {
            for (let i = 0; i < 10; i++)
                axios.get(this.apiUrl)
                    .then((response) => {
                        this.randomEmails.push(response.data.response);
                    });
        }
    },

    computed: {
        EmailGenComplete() {
            return this.randomEmails.length === 10;
        }
    },

    mounted() {
        this.getRandomEmail();
    },

}).mount('#app');