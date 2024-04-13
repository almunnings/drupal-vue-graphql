// @ts-nocheck
export class GenqlError extends Error {
    errors = [];
    /**
     * Partial data returned by the server
     */
    data;
    constructor(errors, data) {
        let message = Array.isArray(errors)
            ? errors.map((x) => x?.message || '').join('\n')
            : '';
        if (!message) {
            message = 'GraphQL error';
        }
        super(message);
        this.errors = errors;
        this.data = data;
    }
}
