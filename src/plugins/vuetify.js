import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        titleColor : "#36302b",
        mainColor : "#524A44",
        footerColor : "#36302b",
        black : "000",
        hover : "#EBE4DE",
        accent: "#524A44",
      },
    },
  },
});
