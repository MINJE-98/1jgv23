"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExceptionMessageInterface = void 0;
const constants_1 = require("../../constants");
const isExceptionMessageInterface = (object) => {
    if (!object)
        return false;
    if (!(object instanceof Object))
        return false;
    return Object.keys(object).some((key) => key in constants_1.COUNTRY);
};
exports.isExceptionMessageInterface = isExceptionMessageInterface;
//# sourceMappingURL=exception-message.interface.js.map