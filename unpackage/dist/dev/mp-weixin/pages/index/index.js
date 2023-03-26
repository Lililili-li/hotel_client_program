"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user_index = require("../../store/user/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    store_user_index.useUserStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.open && _ctx.open(...args)),
        b: common_vendor.o((...args) => _ctx.getUserInfo && _ctx.getUserInfo(...args)),
        c: common_vendor.o((...args) => _ctx.login && _ctx.login(...args)),
        d: common_vendor.o((...args) => _ctx.getPhoneNumber && _ctx.getPhoneNumber(...args)),
        e: common_vendor.o((...args) => _ctx.getStep && _ctx.getStep(...args)),
        f: common_vendor.o((...args) => _ctx.getLocation && _ctx.getLocation(...args)),
        g: common_vendor.o((...args) => _ctx.openMap && _ctx.openMap(...args))
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u6587\u6863/backtage-wx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
