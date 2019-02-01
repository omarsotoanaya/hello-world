"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
var LikeComponent_1 = require("./LikeComponent");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
var component = new LikeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("LikesConunt: " + component.likesCount + " isSelected: " + component.isSelected);
