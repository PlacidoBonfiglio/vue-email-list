const { createApp } = Vue;
const element = document.getElementById('email-div');

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            randomEmail1: '',
            randomEmail2: '',
            randomEmail3: '',
            randomEmail4: '',
            randomEmail5: '',
            randomEmail6: '',
            randomEmail7: '',
            randomEmail8: '',
            randomEmail9: '',
            randomEmail10: '',
        }
    },

    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail1 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail2 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail3 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail4 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail5 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail6 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail7 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail8 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail9 = response.data.response;
                });
            axios.get(this.apiUrl)
                .then((response) => {
                    this.randomEmail10 = response.data.response;
                });
        }
    },

    waitForEmailGen() {
        setTimeout(() => {
            element.classList.remove('d-none');
        }, 2000);
    },

    mounted() {
        this.getRandomEmail();
    },

}).mount('#app');