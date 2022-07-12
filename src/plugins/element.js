import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Image,
  Message,
  Header,
  Slider,
  Container,
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Image);
Vue.use(Header);
Vue.use(Slider);
Vue.use(Container);
Vue.prototype.$message = Message;
