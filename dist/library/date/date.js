"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOfLastDate = exports.now = void 0;
const dateFns = require("date-fns");
const date_fns_1 = require("date-fns");
const now = (date) => (date ? new Date(date) : new Date());
exports.now = now;
const arrayOfLastDate = (date, range) => {
    return new Array(range)
        .fill(dateFns.parseISO(`${(0, date_fns_1.formatISO)(date, { representation: 'date' })}T00:00:00.000Z`))
        .map((val, index) => {
        if (index === 0)
            return val;
        return dateFns.subDays(val, index);
    });
};
exports.arrayOfLastDate = arrayOfLastDate;
//# sourceMappingURL=date.js.map