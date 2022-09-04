"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let CookieService = class CookieService {
    constructor(configService) {
        this.configService = configService;
    }
    setRefreshTokenCookie({ response, refreshToken, }) {
        return response.cookie('refreshToken', refreshToken, this.refreshCookieOptions());
    }
    clearRefreshTokenCookie({ response }) {
        return response.clearCookie('refreshToken', this.refreshCookieOptions());
    }
    refreshCookieOptions() {
        return {
            httpOnly: this.configService.get('REFRESH_COOKIE_HTTP_ONLY', true),
            secure: this.configService.get('REFRESH_COOKIE_SECURE', true),
            path: this.configService.get('REFRESH_COOKIE_PATH', '/'),
            domain: this.configService.get('REFRESH_COOKIE_DOMAIN', '/'),
            maxAge: this.configService.get('REFRESH_COOKIE_MAX_AGE', 3600),
            sameSite: this.configService.get('REFRESH_COOKIE_SAME_SITE', 'strict'),
        };
    }
    isInRefreshTokenCookie(object) {
        if (!object)
            return false;
        return 'refreshToken' in object;
    }
};
CookieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CookieService);
exports.CookieService = CookieService;
//# sourceMappingURL=cookie.service.js.map