"use strict";
var common_vendor = require("../../common/vendor.js");
const useUserStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      count: 0
    };
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
exports.useUserStore = useUserStore;
