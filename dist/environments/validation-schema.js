"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.default = Joi.object({
    NODE_ENV: Joi.string().valid('local', 'dev', 'prod').default('local'),
    SERVER_PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().required(),
    OAUTH_GITHUB_CLIENT_ID: Joi.string().required(),
    OAUTH_GITHUB_CLIENT_SECRET: Joi.string().required(),
    OAUTH_GITHUB_CALLBACK_URL: Joi.string().required(),
    JWT_SECRET_KEY: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().required(),
    JWT_REFRESH_SECRET_KEY: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().required(),
    REFRESH_COOKIE_HTTP_ONLY: Joi.boolean().required(),
    REFRESH_COOKIE_SECURE: Joi.boolean().required(),
    REFRESH_COOKIE_PATH: Joi.string().required(),
    REFRESH_COOKIE_SAME_SITE: Joi.string().required(),
    REFRESH_COOKIE_DOMAIN: Joi.string().required(),
    REFRESH_COOKIE_MAX_AGE: Joi.number().required(),
    CORS_ORIGIN: Joi.string().required(),
    CORS_METHOD: Joi.string().required(),
    CORS_CREDENTIALS: Joi.boolean().required(),
});
//# sourceMappingURL=validation-schema.js.map