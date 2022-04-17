import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: _ctx.ns.b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
export { _sfc_main as default };
