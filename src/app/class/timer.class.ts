export class Timer {

    private func;
    private context;

    constructor(func: Function, context?) {
        this.func = func;
        this.context = context || null;
    }

    throttle(limit) {
        const func = this.func;
        const context = this.context;
        let inThrottle
        return function() {
            const args = arguments
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true
                setTimeout(() => inThrottle = false, limit)
            }
        }
    }

    debounce(delay) {
        const func = this.func;
        const context = this.context;
        let inDebounce
        return function() {
            const args = arguments
            clearTimeout(inDebounce)
            inDebounce = setTimeout(() => func.apply(context, args), delay)
        }
    }
}