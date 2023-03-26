"use strict";
var common_vendor = require("../common/vendor.js");
var store_modules_user = require("./modules/user.js");
var store = common_vendor.createStore({
  modules: {
    userStore: store_modules_user.userStore
  }
});
exports.store = store;
