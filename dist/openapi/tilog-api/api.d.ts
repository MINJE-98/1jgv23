import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from './base';
export interface GetAccessTokenUsingRefreshTokenResponse {
    'accessToken': string;
}
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration) => {
    usersAuthControllerDeleteRefreshToken: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    usersAuthControllerGetAccessTokenUsingRefreshToken: (userAgent: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    usersAuthControllerGetId: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    usersAuthControllerGithubLogin: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    usersAuthControllerGithubLoginCallback: (userAgent: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DefaultApiFp: (configuration?: Configuration) => {
    usersAuthControllerDeleteRefreshToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccessTokenUsingRefreshTokenResponse>>;
    usersAuthControllerGetId(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    usersAuthControllerGithubLogin(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    usersAuthControllerGithubLoginCallback(userAgent: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const DefaultApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    usersAuthControllerDeleteRefreshToken(options?: any): AxiosPromise<void>;
    usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent: string, options?: any): AxiosPromise<GetAccessTokenUsingRefreshTokenResponse>;
    usersAuthControllerGetId(options?: any): AxiosPromise<void>;
    usersAuthControllerGithubLogin(options?: any): AxiosPromise<void>;
    usersAuthControllerGithubLoginCallback(userAgent: string, options?: any): AxiosPromise<void>;
};
export declare class DefaultApi extends BaseAPI {
    usersAuthControllerDeleteRefreshToken(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    usersAuthControllerGetAccessTokenUsingRefreshToken(userAgent: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetAccessTokenUsingRefreshTokenResponse, any>>;
    usersAuthControllerGetId(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    usersAuthControllerGithubLogin(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    usersAuthControllerGithubLoginCallback(userAgent: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
