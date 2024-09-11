const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            randomMail1: '',
            randomMail2: '',
            randomMail3: '',
            randomMail4: '',
            randomMail5: '',
            randomMail6: '',
            randomMail7: '',
            randomMail8: '',
            randomMail9: '',
            randomMail10: '',

        }
    },

    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail1 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail2 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail3 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail4 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail5 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail6 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail7 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail8 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail9 = response.data.response;
                    console.log(response.data.response);
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomMail10 = response.data.response;
                    console.log(response.data.response);
                });
        },
    },


    mounted() {
        this.getRandomEmail();
    },

}).mount('#app');

