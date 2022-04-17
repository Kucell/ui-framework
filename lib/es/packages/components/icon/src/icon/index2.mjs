import { buildProps, definePropType } from "../../../../utils/vue/props/index.mjs";
buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
