import Vue from 'vue';
export default Vue.extend({
    name: 'Home',
    components: {},
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        test() {
            console.log('123');
        }
    }
});
//# sourceMappingURL=Login.vue.js.map