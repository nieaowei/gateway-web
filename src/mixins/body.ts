import Vue from 'vue'
import {BodyTabItem} from '@/mixins/model'

export default Vue.extend({
    name: 'BodyBase',
    props: {
        bodyTabItem: {
            type: Object,
            default: () => new BodyTabItem([])
        },
        clickTab: {
            type: Function,
            default: function () {
                console.log()
            }
        },
        addTab: {
            type: Function,
            default: function () {
                console.log()
            }
        },
        removeTab: {
            type: Function,
            default: function (): void {
                console.log()
            }
        }
    }
})
