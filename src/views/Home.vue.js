import Vue from 'vue';
export default Vue.extend({
    name: 'Home',
    components: {},
    data() {
        return {
            data1: {}
        };
    },
    methods: {
        test() {
            console.log('123');
            this.$axios.get('api/ping').then(value => {
                console.log(value);
            }).catch(reason => {
                console.log('ssss');
                console.log(reason.data);
            });
            const res = this.$axios.post('api/service/http/add', this.data1);
            res.then(value => {
                console.log(value.data);
            }).catch(reason => {
                console.log(reason);
            });
        }
    }
});
//# sourceMappingURL=Home.vue.js.map