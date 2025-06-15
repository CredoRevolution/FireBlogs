import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import { getAuth} from "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app

getAuth().onAuthStateChanged((user) => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }

    if (user) {
        store.dispatch("getCurrentUser");
    }
});
