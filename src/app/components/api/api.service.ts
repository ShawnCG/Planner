import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Todo: non-api request service that ApiService extends?

@Injectable()
export class ApiService {

    protected static baseUrl = '';

    protected static defaults = {
        method: 'get',
        url: null,
        data: {},
        secure: false,
        auth: {
            username: null,
            password: null
        }
    };

    private allowed_methods = ['delete', 'get', 'head', 'jsonp', 'options', 'patch', 'options', 'patch', 'post', 'put'];

    // This allows us to reference the static class within a non-static method, even if the class is extended.
    'constructor': Pick<typeof ApiService, keyof typeof ApiService>;

    constructor(private http: HttpClient) {
        // Static methods don't compile unless they are called somewhere in the class.
        this.constructor.setBaseUrl(this.constructor.getBaseUrl());
    }

    static getBaseUrl() {
        return this.baseUrl;
    }

    static setBaseUrl(url) {
        this.baseUrl = url;
    }

    static getDefaults() {
        return this.defaults;
    }

    static assignDefaults(...sources) {
        sources.unshift(this.getDefaults());
        return Object.assign.apply(null, sources);
    }

    request(options) {
        const defaults = this.constructor.getDefaults();
        const method = options.method || defaults.method;
        const data = options.data || defaults.data;
        const secure = options.secure || defaults.secure;

        const url = options.url || defaults.url;

        let scheme = 'http';

        // Doing some type checking
        if (typeof method !== 'string') {
            throw new Error('method must be a string');
        }

        if (typeof url !== 'string') {
            throw new Error('url must be a string');
        }

        if (typeof data !== 'object') {
            throw new Error('data must be a plain object');
        }

        // We don't want to allow a method we don't recognize.
        if (this.allowed_methods.indexOf(method) === -1) {
            throw new Error('Invalid request method.');
        }

        // Todo: Add authentication
        if (secure === true) {
            scheme = 'https';
        }

        return this.http[method](scheme + '://' + this.constructor.getBaseUrl() + url, { params: data });
    }

    delete(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'delete',
            url
        }, options);

        return this.request(options);
    }

    get(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'get',
            url
        }, options);

        return this.request(options);
    }

    head(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'head',
            url
        }, options);

        return this.request(options);
    }

    jsonp(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'jsonp',
            url
        }, options);

        return this.request(options);
    }

    options(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'options',
            url
        }, options);

        return this.request(options);
    }

    patch(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'patch',
            url
        }, options);

        return this.request(options);
    }

    post(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'post',
            url
        }, options);

        return this.request(options);
    }

    put(url: String, options?: Object) {
        options = options || {};
        options = Object.assign({
            method: 'put',
            url
        }, options);

        return this.request(options);
    }
}
