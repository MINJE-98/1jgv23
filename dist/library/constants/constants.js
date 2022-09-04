"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSearchSortScope = exports.PostSearchDateScope = exports.COUNTRY = void 0;
exports.COUNTRY = {
    ko: 'ko',
    en: 'en',
};
var PostSearchDateScope;
(function (PostSearchDateScope) {
    PostSearchDateScope[PostSearchDateScope["Daily"] = 1] = "Daily";
    PostSearchDateScope[PostSearchDateScope["Weekly"] = 7] = "Weekly";
    PostSearchDateScope[PostSearchDateScope["Monthly"] = 30] = "Monthly";
    PostSearchDateScope[PostSearchDateScope["All"] = 0] = "All";
})(PostSearchDateScope = exports.PostSearchDateScope || (exports.PostSearchDateScope = {}));
var PostSearchSortScope;
(function (PostSearchSortScope) {
    PostSearchSortScope["like"] = "likes";
    PostSearchSortScope["view"] = "viewCounts";
    PostSearchSortScope["recently"] = "createdAt";
})(PostSearchSortScope = exports.PostSearchSortScope || (exports.PostSearchSortScope = {}));
//# sourceMappingURL=constants.js.map