import type { QueryGenqlSelection, Query, MutationGenqlSelection, Mutation } from './schema';
import { type FieldsSelection, type GraphqlOperation, type ClientOptions, GenqlError } from './runtime';
export type { FieldsSelection } from './runtime';
export { GenqlError };
export * from './schema';
export interface Client {
    query<R extends QueryGenqlSelection>(request: R & {
        __name?: string;
    }): Promise<FieldsSelection<Query, R>>;
    mutation<R extends MutationGenqlSelection>(request: R & {
        __name?: string;
    }): Promise<FieldsSelection<Mutation, R>>;
}
export declare const createClient: (options?: ClientOptions) => Client;
export declare const everything: {
    __scalar: boolean;
};
export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<Query, fields>;
export declare const generateQueryOp: (fields: QueryGenqlSelection & {
    __name?: string;
}) => GraphqlOperation;
export type MutationResult<fields extends MutationGenqlSelection> = FieldsSelection<Mutation, fields>;
export declare const generateMutationOp: (fields: MutationGenqlSelection & {
    __name?: string;
}) => GraphqlOperation;
