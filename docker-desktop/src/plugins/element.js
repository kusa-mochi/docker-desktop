import Vue from "vue";
import Element from "element-ui";
import "../element-variables.scss";
import locale from "element-ui/lib/locale/lang/ja";

import "../element-override.scss";

Vue.use(Element, { locale });
