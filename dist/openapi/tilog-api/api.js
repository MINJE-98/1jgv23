"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = exports.DefaultApiFactory = exports.DefaultApiFp = exports.DefaultApiAxiosParamCreator = void 0;
const axios_1 = require("axios");
const common_1 = require("./common");
const base_1 = require("./base");
const DefaultApiAxiosParamCreator = function (configuration) {
    return {
        usersAuthControllerDeleteRefreshToken: async (options = {}) => {
            const localVarPath = `/auth/logout`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        usersAuthControllerGetAccessTokenUsingRefreshToken: async (userAgent, options = {}) => {
            (0, common_1.assertParamExists)('usersAuthControllerGetAccessTokenUsingRefreshToken', 'userAgent', userAgent);
            const localVarPath = `/auth/access-token`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (userAgent !== undefined && userAgent !== null) {
                localVarHeaderParameter['user-agent'] = String(userAgent);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        usersAuthControllerGetId: async (options = {}) => {
            const localVarPath = `/auth/get-id`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        usersAuthControllerGithubLogin: async (options = {}) => {
            const localVarPath = `/auth/github/login`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        usersAuthControllerGithubLoginCallback: async (userAgent, options = {}) => {
            (0, common_1.assertParamExists)('usersAuthControllerGithubLoginCallback', 'userAgent', userAgent);
            const localVarPath = `/auth/github/callback`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (userAgent !== undefined && userAgent !== null) {
                localVarHeaderParameter['user-agent'] = String(userAgent);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.DefaultApiAxiosParamCreator = DefaultApiAxiosParamCreator;
const DefaultApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.DefaultApiAxiosParamCreator)(configuration);
    return {
        async usersAuthControllerDeleteRefreshToken(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersAuthControllerDeleteRefreshToken(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        async usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        async usersAuthControllerGetId(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersAuthControllerGetId(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        async usersAuthControllerGithubLogin(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersAuthControllerGithubLogin(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        async usersAuthControllerGithubLoginCallback(userAgent, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersAuthControllerGithubLoginCallback(userAgent, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.DefaultApiFp = DefaultApiFp;
const DefaultApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.DefaultApiFp)(configuration);
    return {
        usersAuthControllerDeleteRefreshToken(options) {
            return localVarFp.usersAuthControllerDeleteRefreshToken(options).then((request) => request(axios, basePath));
        },
        usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options) {
            return localVarFp.usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options).then((request) => request(axios, basePath));
        },
        usersAuthControllerGetId(options) {
            return localVarFp.usersAuthControllerGetId(options).then((request) => request(axios, basePath));
        },
        usersAuthControllerGithubLogin(options) {
            return localVarFp.usersAuthControllerGithubLogin(options).then((request) => request(axios, basePath));
        },
        usersAuthControllerGithubLoginCallback(userAgent, options) {
            return localVarFp.usersAuthControllerGithubLoginCallback(userAgent, options).then((request) => request(axios, basePath));
        },
    };
};
exports.DefaultApiFactory = DefaultApiFactory;
class DefaultApi extends base_1.BaseAPI {
    usersAuthControllerDeleteRefreshToken(options) {
        return (0, exports.DefaultApiFp)(this.configuration).usersAuthControllerDeleteRefreshToken(options).then((request) => request(this.axios, this.basePath));
    }
    usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options) {
        return (0, exports.DefaultApiFp)(this.configuration).usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent, options).then((request) => request(this.axios, this.basePath));
    }
    usersAuthControllerGetId(options) {
        return (0, exports.DefaultApiFp)(this.configuration).usersAuthControllerGetId(options).then((request) => request(this.axios, this.basePath));
    }
    usersAuthControllerGithubLogin(options) {
        return (0, exports.DefaultApiFp)(this.configuration).usersAuthControllerGithubLogin(options).then((request) => request(this.axios, this.basePath));
    }
    usersAuthControllerGithubLoginCallback(userAgent, options) {
        return (0, exports.DefaultApiFp)(this.configuration).usersAuthControllerGithubLoginCallback(userAgent, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=api.js.map