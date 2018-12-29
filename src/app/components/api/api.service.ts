import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Todo: non-api request service that ApiService extends?

@Injectable()
export class ApiService {

    protected baseUrl = '';

    protected defaults = {
        method: 'get',
        url: null,
        data: {},
        auth: {
            username: null,
            password: null
        }
    };

    private allowed_methods = ['delete', 'get', 'head', 'jsonp', 'options', 'patch', 'options', 'patch', 'post', 'put'];

    constructor(private http: HttpClient) { }

    request(options) {
        const method = options.method || this.defaults.method;
        const data = options.data || this.defaults.data;


        const url = options.url || this.defaults.url;

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

        return this.http[method](this.baseUrl + '/' + url, { params: data });
    }

    delete(url: String, data?: Object) {
        const options = {
            method: 'delete',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    get(url: String, data?: Object) {
        const options = {
            method: 'get',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    head(url: String, data?: Object) {
        const options = {
            method: 'head',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    jsonp(url: String, data?: Object) {
        const options = {
            method: 'jsonp',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    options(url: String, data?: Object) {
        const options = {
            method: 'options',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    patch(url: String, data?: Object) {
        const options = {
            method: 'patch',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    post(url: String, data?: Object) {
        const options = {
            method: 'post',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }

    put(url: String, data?: Object) {
        const options = {
            method: 'put',
            url: url,
            data: data || {}
        };

        return this.request(options);
    }
}
