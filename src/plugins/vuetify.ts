import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1F2833',
                secondary: '#C5C6C7',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
