import type { App } from "vue";
// components
import BIcon from "./icon";

const components = [BIcon];

const install = (app: App) => {
  // 注册组件
  components.forEach((component) => app.component(component.name, component));
};

export default {
  install,
  ...components,
};
