/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from 'url';
import * as portableFetch from 'portable-fetch';
import {Configuration} from './configuration';

const BASE_PATH = 'https://localhost'.replace(/\/+$/, '');

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ',',
    ssv: ' ',
    tsv: '\t',
    pipes: '|',
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: 'RequiredError';

    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 *
 * @export
 * @interface Licence
 */
export interface Licence {
    /**
     *
     * @type {number}
     * @memberof Licence
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    licenceNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    gender?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    club?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    dept?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    birthYear?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    catea?: string;
    /**
     *
     * @type {string}
     * @memberof Licence
     */
    catev?: string;
    /**
     *
     * @type {any}
     * @memberof Licence
     */
    fede?: any;
}

/**
 *
 * @export
 * @interface PassportCtrlLoginPayload
 */
export interface PassportCtrlLoginPayload {
    /**
     *
     * @type {string}
     * @memberof PassportCtrlLoginPayload
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof PassportCtrlLoginPayload
     */
    password: string;
}

/**
 *
 * @export
 * @interface PassportCtrlSignupPayload
 */
export interface PassportCtrlSignupPayload {
    /**
     *
     * @type {string}
     * @memberof PassportCtrlSignupPayload
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof PassportCtrlSignupPayload
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof PassportCtrlSignupPayload
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof PassportCtrlSignupPayload
     */
    lastName: string;
}


/**
 * LicencesCtrlApi - fetch parameter creator
 * @export
 */
export const LicencesCtrlApiFetchParamCreator = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGet(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id', 'Required parameter id was null or undefined when calling licencesCtrlGet.');
            }
            const localVarPath = `/api/licences/{id}`
                .replace(`{${'id'}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'GET'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGetAllLicences(options: any = {}): FetchArgs {
            const localVarPath = `/api/licences`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'GET'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {Licence} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlSave(body?: Licence, options: any = {}): FetchArgs {
            const localVarPath = `/api/licences`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'PUT'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any> 'Licence' !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || '');

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};

/**
 * LicencesCtrlApi - functional programming interface
 * @export
 */
export const LicencesCtrlApiFp = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGet(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = LicencesCtrlApiFetchParamCreator(configuration).licencesCtrlGet(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGetAllLicences(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Licence>> {
            const localVarFetchArgs = LicencesCtrlApiFetchParamCreator(configuration).licencesCtrlGetAllLicences(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {Licence} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlSave(body?: Licence, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = LicencesCtrlApiFetchParamCreator(configuration).licencesCtrlSave(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    };
};

/**
 * LicencesCtrlApi - factory interface
 * @export
 */
export const LicencesCtrlApiFactory = function(configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         *
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGet(id: string, options?: any) {
            return LicencesCtrlApiFp(configuration).licencesCtrlGet(id, options)(fetch, basePath);
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlGetAllLicences(options?: any) {
            return LicencesCtrlApiFp(configuration).licencesCtrlGetAllLicences(options)(fetch, basePath);
        },
        /**
         *
         * @param {Licence} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        licencesCtrlSave(body?: Licence, options?: any) {
            return LicencesCtrlApiFp(configuration).licencesCtrlSave(body, options)(fetch, basePath);
        },
    };
};

/**
 * LicencesCtrlApi - object-oriented interface
 * @export
 * @class LicencesCtrlApi
 * @extends {BaseAPI}
 */
export class LicencesCtrlApi extends BaseAPI {
    /**
     *
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicencesCtrlApi
     */
    public licencesCtrlGet(id: string, options?: any) {
        return LicencesCtrlApiFp(this.configuration).licencesCtrlGet(id, options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicencesCtrlApi
     */
    public licencesCtrlGetAllLicences(options?: any) {
        return LicencesCtrlApiFp(this.configuration).licencesCtrlGetAllLicences(options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {Licence} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicencesCtrlApi
     */
    public licencesCtrlSave(body?: Licence, options?: any) {
        return LicencesCtrlApiFp(this.configuration).licencesCtrlSave(body, options)(this.fetch, this.basePath);
    }

}

/**
 * PassportCtrlApi - fetch parameter creator
 * @export
 */
export const PassportCtrlApiFetchParamCreator = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {PassportCtrlLoginPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogin(body: PassportCtrlLoginPayload, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling passportCtrlLogin.');
            }
            const localVarPath = `/api/passport/login`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'POST'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any> 'PassportCtrlLoginPayload' !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || '');

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogout(options: any = {}): FetchArgs {
            const localVarPath = `/api/passport/logout`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'GET'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {PassportCtrlSignupPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlSignup(body: PassportCtrlSignupPayload, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling passportCtrlSignup.');
            }
            const localVarPath = `/api/passport/signup`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'POST'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any> 'PassportCtrlSignupPayload' !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || '');

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};

/**
 * PassportCtrlApi - functional programming interface
 * @export
 */
export const PassportCtrlApiFp = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {PassportCtrlLoginPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogin(body: PassportCtrlLoginPayload, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = PassportCtrlApiFetchParamCreator(configuration).passportCtrlLogin(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogout(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = PassportCtrlApiFetchParamCreator(configuration).passportCtrlLogout(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {PassportCtrlSignupPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlSignup(body: PassportCtrlSignupPayload, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = PassportCtrlApiFetchParamCreator(configuration).passportCtrlSignup(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    };
};

/**
 * PassportCtrlApi - factory interface
 * @export
 */
export const PassportCtrlApiFactory = function(configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         *
         * @param {PassportCtrlLoginPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogin(body: PassportCtrlLoginPayload, options?: any) {
            return PassportCtrlApiFp(configuration).passportCtrlLogin(body, options)(fetch, basePath);
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlLogout(options?: any) {
            return PassportCtrlApiFp(configuration).passportCtrlLogout(options)(fetch, basePath);
        },
        /**
         *
         * @param {PassportCtrlSignupPayload} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passportCtrlSignup(body: PassportCtrlSignupPayload, options?: any) {
            return PassportCtrlApiFp(configuration).passportCtrlSignup(body, options)(fetch, basePath);
        },
    };
};

/**
 * PassportCtrlApi - object-oriented interface
 * @export
 * @class PassportCtrlApi
 * @extends {BaseAPI}
 */
export class PassportCtrlApi extends BaseAPI {
    /**
     *
     * @param {PassportCtrlLoginPayload} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PassportCtrlApi
     */
    public passportCtrlLogin(body: PassportCtrlLoginPayload, options?: any) {
        return PassportCtrlApiFp(this.configuration).passportCtrlLogin(body, options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PassportCtrlApi
     */
    public passportCtrlLogout(options?: any) {
        return PassportCtrlApiFp(this.configuration).passportCtrlLogout(options)(this.fetch, this.basePath);
    }

    /**
     *
     * @param {PassportCtrlSignupPayload} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PassportCtrlApi
     */
    public passportCtrlSignup(body: PassportCtrlSignupPayload, options?: any) {
        return PassportCtrlApiFp(this.configuration).passportCtrlSignup(body, options)(this.fetch, this.basePath);
    }

}

/**
 * RestCtrlApi - fetch parameter creator
 * @export
 */
export const RestCtrlApiFetchParamCreator = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restCtrlGetRoutes(options: any = {}): FetchArgs {
            const localVarPath = `/api`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({method: 'GET'}, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};

/**
 * RestCtrlApi - functional programming interface
 * @export
 */
export const RestCtrlApiFp = function(configuration?: Configuration) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restCtrlGetRoutes(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = RestCtrlApiFetchParamCreator(configuration).restCtrlGetRoutes(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    };
};

/**
 * RestCtrlApi - factory interface
 * @export
 */
export const RestCtrlApiFactory = function(configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restCtrlGetRoutes(options?: any) {
            return RestCtrlApiFp(configuration).restCtrlGetRoutes(options)(fetch, basePath);
        },
    };
};

/**
 * RestCtrlApi - object-oriented interface
 * @export
 * @class RestCtrlApi
 * @extends {BaseAPI}
 */
export class RestCtrlApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RestCtrlApi
     */
    public restCtrlGetRoutes(options?: any) {
        return RestCtrlApiFp(this.configuration).restCtrlGetRoutes(options)(this.fetch, this.basePath);
    }

}

