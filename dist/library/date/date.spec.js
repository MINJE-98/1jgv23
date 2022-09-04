"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("./date");
describe('Date Service ', () => {
    const testTimeString = '1995-12-17T03:24:00';
    const testDate = new Date(testTimeString);
    describe('.now()', () => {
        jest.useFakeTimers().setSystemTime(testDate);
        it('[기능]현재 시간을 Date 타입으로 반환한다', () => {
            expect((0, date_1.now)()).toEqual(testDate);
        });
        it('[기능]지정된 시간을 Date 타입으로 반환한다', () => {
            expect((0, date_1.now)(testTimeString)).toEqual(testDate);
        });
    });
    describe('.arrayOfLastDate()', () => {
        it('[기능]첫 번째 인자 지정일부터 두 번째 인자만큼의 이전일을 배열에 담아 반환한다 (ISO 8610 T00:00:00.000Z)', () => {
            const dates = [
                new Date('1995-12-17T00:00:00.000Z'),
                new Date('1995-12-16T00:00:00.000Z'),
                new Date('1995-12-15T00:00:00.000Z'),
            ];
            expect((0, date_1.arrayOfLastDate)(testDate, dates.length)).toEqual(expect.arrayContaining(dates));
        });
        it('[검증]음수를 매개변수로 요청시 실패한다', () => {
            expect(() => (0, date_1.arrayOfLastDate)(testDate, -1)).toThrow();
        });
        it('[검증]0을 매개변수로 요청시 빈 배열을 반환한다', () => {
            expect((0, date_1.arrayOfLastDate)(testDate, 0)).toEqual([]);
        });
    });
});
//# sourceMappingURL=date.spec.js.map