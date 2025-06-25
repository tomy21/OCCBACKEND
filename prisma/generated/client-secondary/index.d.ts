
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TransactionParkingIntegration
 * 
 */
export type TransactionParkingIntegration = $Result.DefaultSelection<Prisma.$TransactionParkingIntegrationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TransactionParkingIntegrations
 * const transactionParkingIntegrations = await prisma.transactionParkingIntegration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TransactionParkingIntegrations
   * const transactionParkingIntegrations = await prisma.transactionParkingIntegration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.transactionParkingIntegration`: Exposes CRUD operations for the **TransactionParkingIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionParkingIntegrations
    * const transactionParkingIntegrations = await prisma.transactionParkingIntegration.findMany()
    * ```
    */
  get transactionParkingIntegration(): Prisma.TransactionParkingIntegrationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TransactionParkingIntegration: 'TransactionParkingIntegration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "transactionParkingIntegration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TransactionParkingIntegration: {
        payload: Prisma.$TransactionParkingIntegrationPayload<ExtArgs>
        fields: Prisma.TransactionParkingIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionParkingIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionParkingIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          findFirst: {
            args: Prisma.TransactionParkingIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionParkingIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          findMany: {
            args: Prisma.TransactionParkingIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>[]
          }
          create: {
            args: Prisma.TransactionParkingIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          createMany: {
            args: Prisma.TransactionParkingIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionParkingIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          update: {
            args: Prisma.TransactionParkingIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.TransactionParkingIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionParkingIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionParkingIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionParkingIntegrationPayload>
          }
          aggregate: {
            args: Prisma.TransactionParkingIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionParkingIntegration>
          }
          groupBy: {
            args: Prisma.TransactionParkingIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionParkingIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionParkingIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionParkingIntegrationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    transactionParkingIntegration?: TransactionParkingIntegrationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TransactionParkingIntegration
   */

  export type AggregateTransactionParkingIntegration = {
    _count: TransactionParkingIntegrationCountAggregateOutputType | null
    _avg: TransactionParkingIntegrationAvgAggregateOutputType | null
    _sum: TransactionParkingIntegrationSumAggregateOutputType | null
    _min: TransactionParkingIntegrationMinAggregateOutputType | null
    _max: TransactionParkingIntegrationMaxAggregateOutputType | null
  }

  export type TransactionParkingIntegrationAvgAggregateOutputType = {
    id: number | null
    TrxRefId: number | null
    GracePeriodIn: number | null
    Duration: number | null
    TariffAmount: Decimal | null
    VoucherAmount: Decimal | null
    PaymentAmount: Decimal | null
    PrepaidCardInitialBalance: Decimal | null
    PrepaidCardRemainingBalance: Decimal | null
    GracePeriodPayment: number | null
    RecordStatus: number | null
  }

  export type TransactionParkingIntegrationSumAggregateOutputType = {
    id: number | null
    TrxRefId: number | null
    GracePeriodIn: number | null
    Duration: number | null
    TariffAmount: Decimal | null
    VoucherAmount: Decimal | null
    PaymentAmount: Decimal | null
    PrepaidCardInitialBalance: Decimal | null
    PrepaidCardRemainingBalance: Decimal | null
    GracePeriodPayment: number | null
    RecordStatus: number | null
  }

  export type TransactionParkingIntegrationMinAggregateOutputType = {
    id: number | null
    TrxRefId: number | null
    TransactionNo: string | null
    ReferenceNo: string | null
    LicensePlateIn: string | null
    LocationCode: string | null
    SubLocationCode: string | null
    InTime: Date | null
    GateInCode: string | null
    VehicleType: string | null
    ProductName: string | null
    GracePeriodIn: number | null
    QRTicket: string | null
    Duration: number | null
    TariffAmount: Decimal | null
    VoucherAmount: Decimal | null
    PaymentAmount: Decimal | null
    PaymentStatus: string | null
    PaymentDate: Date | null
    PaymentMethod: string | null
    IssuerID: string | null
    PaymentReferenceNo: string | null
    RetrievalReferenceNo: string | null
    PrepaidCardName: string | null
    PrepaidCardNo: string | null
    PrepaidCardMID: string | null
    PrepaidCardTID: string | null
    PrepaidCardInitialBalance: Decimal | null
    PrepaidCardRemainingBalance: Decimal | null
    ReferenceTransactionNo: string | null
    GracePeriodPayment: number | null
    LicensePlateOut: string | null
    OutTime: Date | null
    GateOutCode: string | null
    MerchantDataRequestIN: string | null
    MerchantDataResponseIN: string | null
    POSTDataRequestIN: string | null
    POSTDataResponseIN: string | null
    MerchantDataRequestPAY: string | null
    MerchantDataResponsePAY: string | null
    POSTDataRequestPAY: string | null
    POSTDataResponsePAY: string | null
    MerchantDataRequestOUT: string | null
    MerchantDataResponseOUT: string | null
    POSTDataRequestOUT: string | null
    POSTDataResponseOUT: string | null
    RecordStatus: number | null
    CreatedBy: string | null
    CreatedOn: Date | null
    UpdatedBy: string | null
    UpdatedOn: Date | null
  }

  export type TransactionParkingIntegrationMaxAggregateOutputType = {
    id: number | null
    TrxRefId: number | null
    TransactionNo: string | null
    ReferenceNo: string | null
    LicensePlateIn: string | null
    LocationCode: string | null
    SubLocationCode: string | null
    InTime: Date | null
    GateInCode: string | null
    VehicleType: string | null
    ProductName: string | null
    GracePeriodIn: number | null
    QRTicket: string | null
    Duration: number | null
    TariffAmount: Decimal | null
    VoucherAmount: Decimal | null
    PaymentAmount: Decimal | null
    PaymentStatus: string | null
    PaymentDate: Date | null
    PaymentMethod: string | null
    IssuerID: string | null
    PaymentReferenceNo: string | null
    RetrievalReferenceNo: string | null
    PrepaidCardName: string | null
    PrepaidCardNo: string | null
    PrepaidCardMID: string | null
    PrepaidCardTID: string | null
    PrepaidCardInitialBalance: Decimal | null
    PrepaidCardRemainingBalance: Decimal | null
    ReferenceTransactionNo: string | null
    GracePeriodPayment: number | null
    LicensePlateOut: string | null
    OutTime: Date | null
    GateOutCode: string | null
    MerchantDataRequestIN: string | null
    MerchantDataResponseIN: string | null
    POSTDataRequestIN: string | null
    POSTDataResponseIN: string | null
    MerchantDataRequestPAY: string | null
    MerchantDataResponsePAY: string | null
    POSTDataRequestPAY: string | null
    POSTDataResponsePAY: string | null
    MerchantDataRequestOUT: string | null
    MerchantDataResponseOUT: string | null
    POSTDataRequestOUT: string | null
    POSTDataResponseOUT: string | null
    RecordStatus: number | null
    CreatedBy: string | null
    CreatedOn: Date | null
    UpdatedBy: string | null
    UpdatedOn: Date | null
  }

  export type TransactionParkingIntegrationCountAggregateOutputType = {
    id: number
    TrxRefId: number
    TransactionNo: number
    ReferenceNo: number
    LicensePlateIn: number
    LocationCode: number
    SubLocationCode: number
    InTime: number
    GateInCode: number
    VehicleType: number
    ProductName: number
    GracePeriodIn: number
    QRTicket: number
    Duration: number
    TariffAmount: number
    VoucherAmount: number
    PaymentAmount: number
    PaymentStatus: number
    PaymentDate: number
    PaymentMethod: number
    IssuerID: number
    PaymentReferenceNo: number
    RetrievalReferenceNo: number
    PrepaidCardName: number
    PrepaidCardNo: number
    PrepaidCardMID: number
    PrepaidCardTID: number
    PrepaidCardInitialBalance: number
    PrepaidCardRemainingBalance: number
    ReferenceTransactionNo: number
    GracePeriodPayment: number
    LicensePlateOut: number
    OutTime: number
    GateOutCode: number
    MerchantDataRequestIN: number
    MerchantDataResponseIN: number
    POSTDataRequestIN: number
    POSTDataResponseIN: number
    MerchantDataRequestPAY: number
    MerchantDataResponsePAY: number
    POSTDataRequestPAY: number
    POSTDataResponsePAY: number
    MerchantDataRequestOUT: number
    MerchantDataResponseOUT: number
    POSTDataRequestOUT: number
    POSTDataResponseOUT: number
    RecordStatus: number
    CreatedBy: number
    CreatedOn: number
    UpdatedBy: number
    UpdatedOn: number
    _all: number
  }


  export type TransactionParkingIntegrationAvgAggregateInputType = {
    id?: true
    TrxRefId?: true
    GracePeriodIn?: true
    Duration?: true
    TariffAmount?: true
    VoucherAmount?: true
    PaymentAmount?: true
    PrepaidCardInitialBalance?: true
    PrepaidCardRemainingBalance?: true
    GracePeriodPayment?: true
    RecordStatus?: true
  }

  export type TransactionParkingIntegrationSumAggregateInputType = {
    id?: true
    TrxRefId?: true
    GracePeriodIn?: true
    Duration?: true
    TariffAmount?: true
    VoucherAmount?: true
    PaymentAmount?: true
    PrepaidCardInitialBalance?: true
    PrepaidCardRemainingBalance?: true
    GracePeriodPayment?: true
    RecordStatus?: true
  }

  export type TransactionParkingIntegrationMinAggregateInputType = {
    id?: true
    TrxRefId?: true
    TransactionNo?: true
    ReferenceNo?: true
    LicensePlateIn?: true
    LocationCode?: true
    SubLocationCode?: true
    InTime?: true
    GateInCode?: true
    VehicleType?: true
    ProductName?: true
    GracePeriodIn?: true
    QRTicket?: true
    Duration?: true
    TariffAmount?: true
    VoucherAmount?: true
    PaymentAmount?: true
    PaymentStatus?: true
    PaymentDate?: true
    PaymentMethod?: true
    IssuerID?: true
    PaymentReferenceNo?: true
    RetrievalReferenceNo?: true
    PrepaidCardName?: true
    PrepaidCardNo?: true
    PrepaidCardMID?: true
    PrepaidCardTID?: true
    PrepaidCardInitialBalance?: true
    PrepaidCardRemainingBalance?: true
    ReferenceTransactionNo?: true
    GracePeriodPayment?: true
    LicensePlateOut?: true
    OutTime?: true
    GateOutCode?: true
    MerchantDataRequestIN?: true
    MerchantDataResponseIN?: true
    POSTDataRequestIN?: true
    POSTDataResponseIN?: true
    MerchantDataRequestPAY?: true
    MerchantDataResponsePAY?: true
    POSTDataRequestPAY?: true
    POSTDataResponsePAY?: true
    MerchantDataRequestOUT?: true
    MerchantDataResponseOUT?: true
    POSTDataRequestOUT?: true
    POSTDataResponseOUT?: true
    RecordStatus?: true
    CreatedBy?: true
    CreatedOn?: true
    UpdatedBy?: true
    UpdatedOn?: true
  }

  export type TransactionParkingIntegrationMaxAggregateInputType = {
    id?: true
    TrxRefId?: true
    TransactionNo?: true
    ReferenceNo?: true
    LicensePlateIn?: true
    LocationCode?: true
    SubLocationCode?: true
    InTime?: true
    GateInCode?: true
    VehicleType?: true
    ProductName?: true
    GracePeriodIn?: true
    QRTicket?: true
    Duration?: true
    TariffAmount?: true
    VoucherAmount?: true
    PaymentAmount?: true
    PaymentStatus?: true
    PaymentDate?: true
    PaymentMethod?: true
    IssuerID?: true
    PaymentReferenceNo?: true
    RetrievalReferenceNo?: true
    PrepaidCardName?: true
    PrepaidCardNo?: true
    PrepaidCardMID?: true
    PrepaidCardTID?: true
    PrepaidCardInitialBalance?: true
    PrepaidCardRemainingBalance?: true
    ReferenceTransactionNo?: true
    GracePeriodPayment?: true
    LicensePlateOut?: true
    OutTime?: true
    GateOutCode?: true
    MerchantDataRequestIN?: true
    MerchantDataResponseIN?: true
    POSTDataRequestIN?: true
    POSTDataResponseIN?: true
    MerchantDataRequestPAY?: true
    MerchantDataResponsePAY?: true
    POSTDataRequestPAY?: true
    POSTDataResponsePAY?: true
    MerchantDataRequestOUT?: true
    MerchantDataResponseOUT?: true
    POSTDataRequestOUT?: true
    POSTDataResponseOUT?: true
    RecordStatus?: true
    CreatedBy?: true
    CreatedOn?: true
    UpdatedBy?: true
    UpdatedOn?: true
  }

  export type TransactionParkingIntegrationCountAggregateInputType = {
    id?: true
    TrxRefId?: true
    TransactionNo?: true
    ReferenceNo?: true
    LicensePlateIn?: true
    LocationCode?: true
    SubLocationCode?: true
    InTime?: true
    GateInCode?: true
    VehicleType?: true
    ProductName?: true
    GracePeriodIn?: true
    QRTicket?: true
    Duration?: true
    TariffAmount?: true
    VoucherAmount?: true
    PaymentAmount?: true
    PaymentStatus?: true
    PaymentDate?: true
    PaymentMethod?: true
    IssuerID?: true
    PaymentReferenceNo?: true
    RetrievalReferenceNo?: true
    PrepaidCardName?: true
    PrepaidCardNo?: true
    PrepaidCardMID?: true
    PrepaidCardTID?: true
    PrepaidCardInitialBalance?: true
    PrepaidCardRemainingBalance?: true
    ReferenceTransactionNo?: true
    GracePeriodPayment?: true
    LicensePlateOut?: true
    OutTime?: true
    GateOutCode?: true
    MerchantDataRequestIN?: true
    MerchantDataResponseIN?: true
    POSTDataRequestIN?: true
    POSTDataResponseIN?: true
    MerchantDataRequestPAY?: true
    MerchantDataResponsePAY?: true
    POSTDataRequestPAY?: true
    POSTDataResponsePAY?: true
    MerchantDataRequestOUT?: true
    MerchantDataResponseOUT?: true
    POSTDataRequestOUT?: true
    POSTDataResponseOUT?: true
    RecordStatus?: true
    CreatedBy?: true
    CreatedOn?: true
    UpdatedBy?: true
    UpdatedOn?: true
    _all?: true
  }

  export type TransactionParkingIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionParkingIntegration to aggregate.
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParkingIntegrations to fetch.
     */
    orderBy?: TransactionParkingIntegrationOrderByWithRelationInput | TransactionParkingIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionParkingIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParkingIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParkingIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionParkingIntegrations
    **/
    _count?: true | TransactionParkingIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionParkingIntegrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionParkingIntegrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionParkingIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionParkingIntegrationMaxAggregateInputType
  }

  export type GetTransactionParkingIntegrationAggregateType<T extends TransactionParkingIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionParkingIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionParkingIntegration[P]>
      : GetScalarType<T[P], AggregateTransactionParkingIntegration[P]>
  }




  export type TransactionParkingIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionParkingIntegrationWhereInput
    orderBy?: TransactionParkingIntegrationOrderByWithAggregationInput | TransactionParkingIntegrationOrderByWithAggregationInput[]
    by: TransactionParkingIntegrationScalarFieldEnum[] | TransactionParkingIntegrationScalarFieldEnum
    having?: TransactionParkingIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionParkingIntegrationCountAggregateInputType | true
    _avg?: TransactionParkingIntegrationAvgAggregateInputType
    _sum?: TransactionParkingIntegrationSumAggregateInputType
    _min?: TransactionParkingIntegrationMinAggregateInputType
    _max?: TransactionParkingIntegrationMaxAggregateInputType
  }

  export type TransactionParkingIntegrationGroupByOutputType = {
    id: number
    TrxRefId: number
    TransactionNo: string | null
    ReferenceNo: string | null
    LicensePlateIn: string | null
    LocationCode: string | null
    SubLocationCode: string | null
    InTime: Date | null
    GateInCode: string | null
    VehicleType: string | null
    ProductName: string | null
    GracePeriodIn: number | null
    QRTicket: string | null
    Duration: number | null
    TariffAmount: Decimal | null
    VoucherAmount: Decimal | null
    PaymentAmount: Decimal | null
    PaymentStatus: string | null
    PaymentDate: Date | null
    PaymentMethod: string | null
    IssuerID: string | null
    PaymentReferenceNo: string | null
    RetrievalReferenceNo: string | null
    PrepaidCardName: string | null
    PrepaidCardNo: string | null
    PrepaidCardMID: string | null
    PrepaidCardTID: string | null
    PrepaidCardInitialBalance: Decimal | null
    PrepaidCardRemainingBalance: Decimal | null
    ReferenceTransactionNo: string | null
    GracePeriodPayment: number | null
    LicensePlateOut: string | null
    OutTime: Date | null
    GateOutCode: string | null
    MerchantDataRequestIN: string | null
    MerchantDataResponseIN: string | null
    POSTDataRequestIN: string | null
    POSTDataResponseIN: string | null
    MerchantDataRequestPAY: string | null
    MerchantDataResponsePAY: string | null
    POSTDataRequestPAY: string | null
    POSTDataResponsePAY: string | null
    MerchantDataRequestOUT: string | null
    MerchantDataResponseOUT: string | null
    POSTDataRequestOUT: string | null
    POSTDataResponseOUT: string | null
    RecordStatus: number | null
    CreatedBy: string | null
    CreatedOn: Date | null
    UpdatedBy: string | null
    UpdatedOn: Date | null
    _count: TransactionParkingIntegrationCountAggregateOutputType | null
    _avg: TransactionParkingIntegrationAvgAggregateOutputType | null
    _sum: TransactionParkingIntegrationSumAggregateOutputType | null
    _min: TransactionParkingIntegrationMinAggregateOutputType | null
    _max: TransactionParkingIntegrationMaxAggregateOutputType | null
  }

  type GetTransactionParkingIntegrationGroupByPayload<T extends TransactionParkingIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionParkingIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionParkingIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionParkingIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionParkingIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type TransactionParkingIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    TrxRefId?: boolean
    TransactionNo?: boolean
    ReferenceNo?: boolean
    LicensePlateIn?: boolean
    LocationCode?: boolean
    SubLocationCode?: boolean
    InTime?: boolean
    GateInCode?: boolean
    VehicleType?: boolean
    ProductName?: boolean
    GracePeriodIn?: boolean
    QRTicket?: boolean
    Duration?: boolean
    TariffAmount?: boolean
    VoucherAmount?: boolean
    PaymentAmount?: boolean
    PaymentStatus?: boolean
    PaymentDate?: boolean
    PaymentMethod?: boolean
    IssuerID?: boolean
    PaymentReferenceNo?: boolean
    RetrievalReferenceNo?: boolean
    PrepaidCardName?: boolean
    PrepaidCardNo?: boolean
    PrepaidCardMID?: boolean
    PrepaidCardTID?: boolean
    PrepaidCardInitialBalance?: boolean
    PrepaidCardRemainingBalance?: boolean
    ReferenceTransactionNo?: boolean
    GracePeriodPayment?: boolean
    LicensePlateOut?: boolean
    OutTime?: boolean
    GateOutCode?: boolean
    MerchantDataRequestIN?: boolean
    MerchantDataResponseIN?: boolean
    POSTDataRequestIN?: boolean
    POSTDataResponseIN?: boolean
    MerchantDataRequestPAY?: boolean
    MerchantDataResponsePAY?: boolean
    POSTDataRequestPAY?: boolean
    POSTDataResponsePAY?: boolean
    MerchantDataRequestOUT?: boolean
    MerchantDataResponseOUT?: boolean
    POSTDataRequestOUT?: boolean
    POSTDataResponseOUT?: boolean
    RecordStatus?: boolean
    CreatedBy?: boolean
    CreatedOn?: boolean
    UpdatedBy?: boolean
    UpdatedOn?: boolean
  }, ExtArgs["result"]["transactionParkingIntegration"]>



  export type TransactionParkingIntegrationSelectScalar = {
    id?: boolean
    TrxRefId?: boolean
    TransactionNo?: boolean
    ReferenceNo?: boolean
    LicensePlateIn?: boolean
    LocationCode?: boolean
    SubLocationCode?: boolean
    InTime?: boolean
    GateInCode?: boolean
    VehicleType?: boolean
    ProductName?: boolean
    GracePeriodIn?: boolean
    QRTicket?: boolean
    Duration?: boolean
    TariffAmount?: boolean
    VoucherAmount?: boolean
    PaymentAmount?: boolean
    PaymentStatus?: boolean
    PaymentDate?: boolean
    PaymentMethod?: boolean
    IssuerID?: boolean
    PaymentReferenceNo?: boolean
    RetrievalReferenceNo?: boolean
    PrepaidCardName?: boolean
    PrepaidCardNo?: boolean
    PrepaidCardMID?: boolean
    PrepaidCardTID?: boolean
    PrepaidCardInitialBalance?: boolean
    PrepaidCardRemainingBalance?: boolean
    ReferenceTransactionNo?: boolean
    GracePeriodPayment?: boolean
    LicensePlateOut?: boolean
    OutTime?: boolean
    GateOutCode?: boolean
    MerchantDataRequestIN?: boolean
    MerchantDataResponseIN?: boolean
    POSTDataRequestIN?: boolean
    POSTDataResponseIN?: boolean
    MerchantDataRequestPAY?: boolean
    MerchantDataResponsePAY?: boolean
    POSTDataRequestPAY?: boolean
    POSTDataResponsePAY?: boolean
    MerchantDataRequestOUT?: boolean
    MerchantDataResponseOUT?: boolean
    POSTDataRequestOUT?: boolean
    POSTDataResponseOUT?: boolean
    RecordStatus?: boolean
    CreatedBy?: boolean
    CreatedOn?: boolean
    UpdatedBy?: boolean
    UpdatedOn?: boolean
  }

  export type TransactionParkingIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "TrxRefId" | "TransactionNo" | "ReferenceNo" | "LicensePlateIn" | "LocationCode" | "SubLocationCode" | "InTime" | "GateInCode" | "VehicleType" | "ProductName" | "GracePeriodIn" | "QRTicket" | "Duration" | "TariffAmount" | "VoucherAmount" | "PaymentAmount" | "PaymentStatus" | "PaymentDate" | "PaymentMethod" | "IssuerID" | "PaymentReferenceNo" | "RetrievalReferenceNo" | "PrepaidCardName" | "PrepaidCardNo" | "PrepaidCardMID" | "PrepaidCardTID" | "PrepaidCardInitialBalance" | "PrepaidCardRemainingBalance" | "ReferenceTransactionNo" | "GracePeriodPayment" | "LicensePlateOut" | "OutTime" | "GateOutCode" | "MerchantDataRequestIN" | "MerchantDataResponseIN" | "POSTDataRequestIN" | "POSTDataResponseIN" | "MerchantDataRequestPAY" | "MerchantDataResponsePAY" | "POSTDataRequestPAY" | "POSTDataResponsePAY" | "MerchantDataRequestOUT" | "MerchantDataResponseOUT" | "POSTDataRequestOUT" | "POSTDataResponseOUT" | "RecordStatus" | "CreatedBy" | "CreatedOn" | "UpdatedBy" | "UpdatedOn", ExtArgs["result"]["transactionParkingIntegration"]>

  export type $TransactionParkingIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionParkingIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      TrxRefId: number
      TransactionNo: string | null
      ReferenceNo: string | null
      LicensePlateIn: string | null
      LocationCode: string | null
      SubLocationCode: string | null
      InTime: Date | null
      GateInCode: string | null
      VehicleType: string | null
      ProductName: string | null
      GracePeriodIn: number | null
      QRTicket: string | null
      Duration: number | null
      TariffAmount: Prisma.Decimal | null
      VoucherAmount: Prisma.Decimal | null
      PaymentAmount: Prisma.Decimal | null
      PaymentStatus: string | null
      PaymentDate: Date | null
      PaymentMethod: string | null
      IssuerID: string | null
      PaymentReferenceNo: string | null
      RetrievalReferenceNo: string | null
      PrepaidCardName: string | null
      PrepaidCardNo: string | null
      PrepaidCardMID: string | null
      PrepaidCardTID: string | null
      PrepaidCardInitialBalance: Prisma.Decimal | null
      PrepaidCardRemainingBalance: Prisma.Decimal | null
      ReferenceTransactionNo: string | null
      GracePeriodPayment: number | null
      LicensePlateOut: string | null
      OutTime: Date | null
      GateOutCode: string | null
      MerchantDataRequestIN: string | null
      MerchantDataResponseIN: string | null
      POSTDataRequestIN: string | null
      POSTDataResponseIN: string | null
      MerchantDataRequestPAY: string | null
      MerchantDataResponsePAY: string | null
      POSTDataRequestPAY: string | null
      POSTDataResponsePAY: string | null
      MerchantDataRequestOUT: string | null
      MerchantDataResponseOUT: string | null
      POSTDataRequestOUT: string | null
      POSTDataResponseOUT: string | null
      RecordStatus: number | null
      CreatedBy: string | null
      CreatedOn: Date | null
      UpdatedBy: string | null
      UpdatedOn: Date | null
    }, ExtArgs["result"]["transactionParkingIntegration"]>
    composites: {}
  }

  type TransactionParkingIntegrationGetPayload<S extends boolean | null | undefined | TransactionParkingIntegrationDefaultArgs> = $Result.GetResult<Prisma.$TransactionParkingIntegrationPayload, S>

  type TransactionParkingIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionParkingIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionParkingIntegrationCountAggregateInputType | true
    }

  export interface TransactionParkingIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionParkingIntegration'], meta: { name: 'TransactionParkingIntegration' } }
    /**
     * Find zero or one TransactionParkingIntegration that matches the filter.
     * @param {TransactionParkingIntegrationFindUniqueArgs} args - Arguments to find a TransactionParkingIntegration
     * @example
     * // Get one TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionParkingIntegrationFindUniqueArgs>(args: SelectSubset<T, TransactionParkingIntegrationFindUniqueArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionParkingIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionParkingIntegrationFindUniqueOrThrowArgs} args - Arguments to find a TransactionParkingIntegration
     * @example
     * // Get one TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionParkingIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionParkingIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionParkingIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationFindFirstArgs} args - Arguments to find a TransactionParkingIntegration
     * @example
     * // Get one TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionParkingIntegrationFindFirstArgs>(args?: SelectSubset<T, TransactionParkingIntegrationFindFirstArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionParkingIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationFindFirstOrThrowArgs} args - Arguments to find a TransactionParkingIntegration
     * @example
     * // Get one TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionParkingIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionParkingIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionParkingIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionParkingIntegrations
     * const transactionParkingIntegrations = await prisma.transactionParkingIntegration.findMany()
     * 
     * // Get first 10 TransactionParkingIntegrations
     * const transactionParkingIntegrations = await prisma.transactionParkingIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionParkingIntegrationWithIdOnly = await prisma.transactionParkingIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionParkingIntegrationFindManyArgs>(args?: SelectSubset<T, TransactionParkingIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionParkingIntegration.
     * @param {TransactionParkingIntegrationCreateArgs} args - Arguments to create a TransactionParkingIntegration.
     * @example
     * // Create one TransactionParkingIntegration
     * const TransactionParkingIntegration = await prisma.transactionParkingIntegration.create({
     *   data: {
     *     // ... data to create a TransactionParkingIntegration
     *   }
     * })
     * 
     */
    create<T extends TransactionParkingIntegrationCreateArgs>(args: SelectSubset<T, TransactionParkingIntegrationCreateArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionParkingIntegrations.
     * @param {TransactionParkingIntegrationCreateManyArgs} args - Arguments to create many TransactionParkingIntegrations.
     * @example
     * // Create many TransactionParkingIntegrations
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionParkingIntegrationCreateManyArgs>(args?: SelectSubset<T, TransactionParkingIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionParkingIntegration.
     * @param {TransactionParkingIntegrationDeleteArgs} args - Arguments to delete one TransactionParkingIntegration.
     * @example
     * // Delete one TransactionParkingIntegration
     * const TransactionParkingIntegration = await prisma.transactionParkingIntegration.delete({
     *   where: {
     *     // ... filter to delete one TransactionParkingIntegration
     *   }
     * })
     * 
     */
    delete<T extends TransactionParkingIntegrationDeleteArgs>(args: SelectSubset<T, TransactionParkingIntegrationDeleteArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionParkingIntegration.
     * @param {TransactionParkingIntegrationUpdateArgs} args - Arguments to update one TransactionParkingIntegration.
     * @example
     * // Update one TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionParkingIntegrationUpdateArgs>(args: SelectSubset<T, TransactionParkingIntegrationUpdateArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionParkingIntegrations.
     * @param {TransactionParkingIntegrationDeleteManyArgs} args - Arguments to filter TransactionParkingIntegrations to delete.
     * @example
     * // Delete a few TransactionParkingIntegrations
     * const { count } = await prisma.transactionParkingIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionParkingIntegrationDeleteManyArgs>(args?: SelectSubset<T, TransactionParkingIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionParkingIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionParkingIntegrations
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionParkingIntegrationUpdateManyArgs>(args: SelectSubset<T, TransactionParkingIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionParkingIntegration.
     * @param {TransactionParkingIntegrationUpsertArgs} args - Arguments to update or create a TransactionParkingIntegration.
     * @example
     * // Update or create a TransactionParkingIntegration
     * const transactionParkingIntegration = await prisma.transactionParkingIntegration.upsert({
     *   create: {
     *     // ... data to create a TransactionParkingIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionParkingIntegration we want to update
     *   }
     * })
     */
    upsert<T extends TransactionParkingIntegrationUpsertArgs>(args: SelectSubset<T, TransactionParkingIntegrationUpsertArgs<ExtArgs>>): Prisma__TransactionParkingIntegrationClient<$Result.GetResult<Prisma.$TransactionParkingIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionParkingIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationCountArgs} args - Arguments to filter TransactionParkingIntegrations to count.
     * @example
     * // Count the number of TransactionParkingIntegrations
     * const count = await prisma.transactionParkingIntegration.count({
     *   where: {
     *     // ... the filter for the TransactionParkingIntegrations we want to count
     *   }
     * })
    **/
    count<T extends TransactionParkingIntegrationCountArgs>(
      args?: Subset<T, TransactionParkingIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionParkingIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionParkingIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionParkingIntegrationAggregateArgs>(args: Subset<T, TransactionParkingIntegrationAggregateArgs>): Prisma.PrismaPromise<GetTransactionParkingIntegrationAggregateType<T>>

    /**
     * Group by TransactionParkingIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionParkingIntegrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionParkingIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionParkingIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: TransactionParkingIntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionParkingIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionParkingIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionParkingIntegration model
   */
  readonly fields: TransactionParkingIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionParkingIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionParkingIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionParkingIntegration model
   */
  interface TransactionParkingIntegrationFieldRefs {
    readonly id: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly TrxRefId: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly TransactionNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly ReferenceNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly LicensePlateIn: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly LocationCode: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly SubLocationCode: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly InTime: FieldRef<"TransactionParkingIntegration", 'DateTime'>
    readonly GateInCode: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly VehicleType: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly ProductName: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly GracePeriodIn: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly QRTicket: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly Duration: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly TariffAmount: FieldRef<"TransactionParkingIntegration", 'Decimal'>
    readonly VoucherAmount: FieldRef<"TransactionParkingIntegration", 'Decimal'>
    readonly PaymentAmount: FieldRef<"TransactionParkingIntegration", 'Decimal'>
    readonly PaymentStatus: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PaymentDate: FieldRef<"TransactionParkingIntegration", 'DateTime'>
    readonly PaymentMethod: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly IssuerID: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PaymentReferenceNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly RetrievalReferenceNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PrepaidCardName: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PrepaidCardNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PrepaidCardMID: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PrepaidCardTID: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly PrepaidCardInitialBalance: FieldRef<"TransactionParkingIntegration", 'Decimal'>
    readonly PrepaidCardRemainingBalance: FieldRef<"TransactionParkingIntegration", 'Decimal'>
    readonly ReferenceTransactionNo: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly GracePeriodPayment: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly LicensePlateOut: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly OutTime: FieldRef<"TransactionParkingIntegration", 'DateTime'>
    readonly GateOutCode: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataRequestIN: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataResponseIN: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataRequestIN: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataResponseIN: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataRequestPAY: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataResponsePAY: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataRequestPAY: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataResponsePAY: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataRequestOUT: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly MerchantDataResponseOUT: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataRequestOUT: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly POSTDataResponseOUT: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly RecordStatus: FieldRef<"TransactionParkingIntegration", 'Int'>
    readonly CreatedBy: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly CreatedOn: FieldRef<"TransactionParkingIntegration", 'DateTime'>
    readonly UpdatedBy: FieldRef<"TransactionParkingIntegration", 'String'>
    readonly UpdatedOn: FieldRef<"TransactionParkingIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionParkingIntegration findUnique
   */
  export type TransactionParkingIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which TransactionParkingIntegration to fetch.
     */
    where: TransactionParkingIntegrationWhereUniqueInput
  }

  /**
   * TransactionParkingIntegration findUniqueOrThrow
   */
  export type TransactionParkingIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which TransactionParkingIntegration to fetch.
     */
    where: TransactionParkingIntegrationWhereUniqueInput
  }

  /**
   * TransactionParkingIntegration findFirst
   */
  export type TransactionParkingIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which TransactionParkingIntegration to fetch.
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParkingIntegrations to fetch.
     */
    orderBy?: TransactionParkingIntegrationOrderByWithRelationInput | TransactionParkingIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionParkingIntegrations.
     */
    cursor?: TransactionParkingIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParkingIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParkingIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionParkingIntegrations.
     */
    distinct?: TransactionParkingIntegrationScalarFieldEnum | TransactionParkingIntegrationScalarFieldEnum[]
  }

  /**
   * TransactionParkingIntegration findFirstOrThrow
   */
  export type TransactionParkingIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which TransactionParkingIntegration to fetch.
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParkingIntegrations to fetch.
     */
    orderBy?: TransactionParkingIntegrationOrderByWithRelationInput | TransactionParkingIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionParkingIntegrations.
     */
    cursor?: TransactionParkingIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParkingIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParkingIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionParkingIntegrations.
     */
    distinct?: TransactionParkingIntegrationScalarFieldEnum | TransactionParkingIntegrationScalarFieldEnum[]
  }

  /**
   * TransactionParkingIntegration findMany
   */
  export type TransactionParkingIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which TransactionParkingIntegrations to fetch.
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionParkingIntegrations to fetch.
     */
    orderBy?: TransactionParkingIntegrationOrderByWithRelationInput | TransactionParkingIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionParkingIntegrations.
     */
    cursor?: TransactionParkingIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionParkingIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionParkingIntegrations.
     */
    skip?: number
    distinct?: TransactionParkingIntegrationScalarFieldEnum | TransactionParkingIntegrationScalarFieldEnum[]
  }

  /**
   * TransactionParkingIntegration create
   */
  export type TransactionParkingIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionParkingIntegration.
     */
    data: XOR<TransactionParkingIntegrationCreateInput, TransactionParkingIntegrationUncheckedCreateInput>
  }

  /**
   * TransactionParkingIntegration createMany
   */
  export type TransactionParkingIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionParkingIntegrations.
     */
    data: TransactionParkingIntegrationCreateManyInput | TransactionParkingIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionParkingIntegration update
   */
  export type TransactionParkingIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionParkingIntegration.
     */
    data: XOR<TransactionParkingIntegrationUpdateInput, TransactionParkingIntegrationUncheckedUpdateInput>
    /**
     * Choose, which TransactionParkingIntegration to update.
     */
    where: TransactionParkingIntegrationWhereUniqueInput
  }

  /**
   * TransactionParkingIntegration updateMany
   */
  export type TransactionParkingIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionParkingIntegrations.
     */
    data: XOR<TransactionParkingIntegrationUpdateManyMutationInput, TransactionParkingIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which TransactionParkingIntegrations to update
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * Limit how many TransactionParkingIntegrations to update.
     */
    limit?: number
  }

  /**
   * TransactionParkingIntegration upsert
   */
  export type TransactionParkingIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionParkingIntegration to update in case it exists.
     */
    where: TransactionParkingIntegrationWhereUniqueInput
    /**
     * In case the TransactionParkingIntegration found by the `where` argument doesn't exist, create a new TransactionParkingIntegration with this data.
     */
    create: XOR<TransactionParkingIntegrationCreateInput, TransactionParkingIntegrationUncheckedCreateInput>
    /**
     * In case the TransactionParkingIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionParkingIntegrationUpdateInput, TransactionParkingIntegrationUncheckedUpdateInput>
  }

  /**
   * TransactionParkingIntegration delete
   */
  export type TransactionParkingIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
    /**
     * Filter which TransactionParkingIntegration to delete.
     */
    where: TransactionParkingIntegrationWhereUniqueInput
  }

  /**
   * TransactionParkingIntegration deleteMany
   */
  export type TransactionParkingIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionParkingIntegrations to delete
     */
    where?: TransactionParkingIntegrationWhereInput
    /**
     * Limit how many TransactionParkingIntegrations to delete.
     */
    limit?: number
  }

  /**
   * TransactionParkingIntegration without action
   */
  export type TransactionParkingIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionParkingIntegration
     */
    select?: TransactionParkingIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionParkingIntegration
     */
    omit?: TransactionParkingIntegrationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TransactionParkingIntegrationScalarFieldEnum: {
    id: 'id',
    TrxRefId: 'TrxRefId',
    TransactionNo: 'TransactionNo',
    ReferenceNo: 'ReferenceNo',
    LicensePlateIn: 'LicensePlateIn',
    LocationCode: 'LocationCode',
    SubLocationCode: 'SubLocationCode',
    InTime: 'InTime',
    GateInCode: 'GateInCode',
    VehicleType: 'VehicleType',
    ProductName: 'ProductName',
    GracePeriodIn: 'GracePeriodIn',
    QRTicket: 'QRTicket',
    Duration: 'Duration',
    TariffAmount: 'TariffAmount',
    VoucherAmount: 'VoucherAmount',
    PaymentAmount: 'PaymentAmount',
    PaymentStatus: 'PaymentStatus',
    PaymentDate: 'PaymentDate',
    PaymentMethod: 'PaymentMethod',
    IssuerID: 'IssuerID',
    PaymentReferenceNo: 'PaymentReferenceNo',
    RetrievalReferenceNo: 'RetrievalReferenceNo',
    PrepaidCardName: 'PrepaidCardName',
    PrepaidCardNo: 'PrepaidCardNo',
    PrepaidCardMID: 'PrepaidCardMID',
    PrepaidCardTID: 'PrepaidCardTID',
    PrepaidCardInitialBalance: 'PrepaidCardInitialBalance',
    PrepaidCardRemainingBalance: 'PrepaidCardRemainingBalance',
    ReferenceTransactionNo: 'ReferenceTransactionNo',
    GracePeriodPayment: 'GracePeriodPayment',
    LicensePlateOut: 'LicensePlateOut',
    OutTime: 'OutTime',
    GateOutCode: 'GateOutCode',
    MerchantDataRequestIN: 'MerchantDataRequestIN',
    MerchantDataResponseIN: 'MerchantDataResponseIN',
    POSTDataRequestIN: 'POSTDataRequestIN',
    POSTDataResponseIN: 'POSTDataResponseIN',
    MerchantDataRequestPAY: 'MerchantDataRequestPAY',
    MerchantDataResponsePAY: 'MerchantDataResponsePAY',
    POSTDataRequestPAY: 'POSTDataRequestPAY',
    POSTDataResponsePAY: 'POSTDataResponsePAY',
    MerchantDataRequestOUT: 'MerchantDataRequestOUT',
    MerchantDataResponseOUT: 'MerchantDataResponseOUT',
    POSTDataRequestOUT: 'POSTDataRequestOUT',
    POSTDataResponseOUT: 'POSTDataResponseOUT',
    RecordStatus: 'RecordStatus',
    CreatedBy: 'CreatedBy',
    CreatedOn: 'CreatedOn',
    UpdatedBy: 'UpdatedBy',
    UpdatedOn: 'UpdatedOn'
  };

  export type TransactionParkingIntegrationScalarFieldEnum = (typeof TransactionParkingIntegrationScalarFieldEnum)[keyof typeof TransactionParkingIntegrationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TransactionParkingIntegrationOrderByRelevanceFieldEnum: {
    TransactionNo: 'TransactionNo',
    ReferenceNo: 'ReferenceNo',
    LicensePlateIn: 'LicensePlateIn',
    LocationCode: 'LocationCode',
    SubLocationCode: 'SubLocationCode',
    GateInCode: 'GateInCode',
    VehicleType: 'VehicleType',
    ProductName: 'ProductName',
    QRTicket: 'QRTicket',
    PaymentStatus: 'PaymentStatus',
    PaymentMethod: 'PaymentMethod',
    IssuerID: 'IssuerID',
    PaymentReferenceNo: 'PaymentReferenceNo',
    RetrievalReferenceNo: 'RetrievalReferenceNo',
    PrepaidCardName: 'PrepaidCardName',
    PrepaidCardNo: 'PrepaidCardNo',
    PrepaidCardMID: 'PrepaidCardMID',
    PrepaidCardTID: 'PrepaidCardTID',
    ReferenceTransactionNo: 'ReferenceTransactionNo',
    LicensePlateOut: 'LicensePlateOut',
    GateOutCode: 'GateOutCode',
    MerchantDataRequestIN: 'MerchantDataRequestIN',
    MerchantDataResponseIN: 'MerchantDataResponseIN',
    POSTDataRequestIN: 'POSTDataRequestIN',
    POSTDataResponseIN: 'POSTDataResponseIN',
    MerchantDataRequestPAY: 'MerchantDataRequestPAY',
    MerchantDataResponsePAY: 'MerchantDataResponsePAY',
    POSTDataRequestPAY: 'POSTDataRequestPAY',
    POSTDataResponsePAY: 'POSTDataResponsePAY',
    MerchantDataRequestOUT: 'MerchantDataRequestOUT',
    MerchantDataResponseOUT: 'MerchantDataResponseOUT',
    POSTDataRequestOUT: 'POSTDataRequestOUT',
    POSTDataResponseOUT: 'POSTDataResponseOUT',
    CreatedBy: 'CreatedBy',
    UpdatedBy: 'UpdatedBy'
  };

  export type TransactionParkingIntegrationOrderByRelevanceFieldEnum = (typeof TransactionParkingIntegrationOrderByRelevanceFieldEnum)[keyof typeof TransactionParkingIntegrationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TransactionParkingIntegrationWhereInput = {
    AND?: TransactionParkingIntegrationWhereInput | TransactionParkingIntegrationWhereInput[]
    OR?: TransactionParkingIntegrationWhereInput[]
    NOT?: TransactionParkingIntegrationWhereInput | TransactionParkingIntegrationWhereInput[]
    id?: IntFilter<"TransactionParkingIntegration"> | number
    TrxRefId?: IntFilter<"TransactionParkingIntegration"> | number
    TransactionNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    ReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    LicensePlateIn?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    LocationCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    SubLocationCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    InTime?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    GateInCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    VehicleType?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    ProductName?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodIn?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    QRTicket?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    Duration?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    TariffAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PaymentDate?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    PaymentMethod?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    IssuerID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PaymentReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    RetrievalReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardName?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardMID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardTID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardInitialBalance?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodPayment?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    LicensePlateOut?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    OutTime?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    GateOutCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestPAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponsePAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestPAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponsePAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    RecordStatus?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    CreatedBy?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    CreatedOn?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    UpdatedBy?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    UpdatedOn?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
  }

  export type TransactionParkingIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    TransactionNo?: SortOrderInput | SortOrder
    ReferenceNo?: SortOrderInput | SortOrder
    LicensePlateIn?: SortOrderInput | SortOrder
    LocationCode?: SortOrderInput | SortOrder
    SubLocationCode?: SortOrderInput | SortOrder
    InTime?: SortOrderInput | SortOrder
    GateInCode?: SortOrderInput | SortOrder
    VehicleType?: SortOrderInput | SortOrder
    ProductName?: SortOrderInput | SortOrder
    GracePeriodIn?: SortOrderInput | SortOrder
    QRTicket?: SortOrderInput | SortOrder
    Duration?: SortOrderInput | SortOrder
    TariffAmount?: SortOrderInput | SortOrder
    VoucherAmount?: SortOrderInput | SortOrder
    PaymentAmount?: SortOrderInput | SortOrder
    PaymentStatus?: SortOrderInput | SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrderInput | SortOrder
    IssuerID?: SortOrderInput | SortOrder
    PaymentReferenceNo?: SortOrderInput | SortOrder
    RetrievalReferenceNo?: SortOrderInput | SortOrder
    PrepaidCardName?: SortOrderInput | SortOrder
    PrepaidCardNo?: SortOrderInput | SortOrder
    PrepaidCardMID?: SortOrderInput | SortOrder
    PrepaidCardTID?: SortOrderInput | SortOrder
    PrepaidCardInitialBalance?: SortOrderInput | SortOrder
    PrepaidCardRemainingBalance?: SortOrderInput | SortOrder
    ReferenceTransactionNo?: SortOrderInput | SortOrder
    GracePeriodPayment?: SortOrderInput | SortOrder
    LicensePlateOut?: SortOrderInput | SortOrder
    OutTime?: SortOrderInput | SortOrder
    GateOutCode?: SortOrderInput | SortOrder
    MerchantDataRequestIN?: SortOrderInput | SortOrder
    MerchantDataResponseIN?: SortOrderInput | SortOrder
    POSTDataRequestIN?: SortOrderInput | SortOrder
    POSTDataResponseIN?: SortOrderInput | SortOrder
    MerchantDataRequestPAY?: SortOrderInput | SortOrder
    MerchantDataResponsePAY?: SortOrderInput | SortOrder
    POSTDataRequestPAY?: SortOrderInput | SortOrder
    POSTDataResponsePAY?: SortOrderInput | SortOrder
    MerchantDataRequestOUT?: SortOrderInput | SortOrder
    MerchantDataResponseOUT?: SortOrderInput | SortOrder
    POSTDataRequestOUT?: SortOrderInput | SortOrder
    POSTDataResponseOUT?: SortOrderInput | SortOrder
    RecordStatus?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedOn?: SortOrderInput | SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    UpdatedOn?: SortOrderInput | SortOrder
    _relevance?: TransactionParkingIntegrationOrderByRelevanceInput
  }

  export type TransactionParkingIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionParkingIntegrationWhereInput | TransactionParkingIntegrationWhereInput[]
    OR?: TransactionParkingIntegrationWhereInput[]
    NOT?: TransactionParkingIntegrationWhereInput | TransactionParkingIntegrationWhereInput[]
    TrxRefId?: IntFilter<"TransactionParkingIntegration"> | number
    TransactionNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    ReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    LicensePlateIn?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    LocationCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    SubLocationCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    InTime?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    GateInCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    VehicleType?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    ProductName?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodIn?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    QRTicket?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    Duration?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    TariffAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PaymentDate?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    PaymentMethod?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    IssuerID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PaymentReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    RetrievalReferenceNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardName?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardMID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardTID?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardInitialBalance?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: DecimalNullableFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodPayment?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    LicensePlateOut?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    OutTime?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    GateOutCode?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseIN?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestPAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponsePAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestPAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponsePAY?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseOUT?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    RecordStatus?: IntNullableFilter<"TransactionParkingIntegration"> | number | null
    CreatedBy?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    CreatedOn?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
    UpdatedBy?: StringNullableFilter<"TransactionParkingIntegration"> | string | null
    UpdatedOn?: DateTimeNullableFilter<"TransactionParkingIntegration"> | Date | string | null
  }, "id">

  export type TransactionParkingIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    TransactionNo?: SortOrderInput | SortOrder
    ReferenceNo?: SortOrderInput | SortOrder
    LicensePlateIn?: SortOrderInput | SortOrder
    LocationCode?: SortOrderInput | SortOrder
    SubLocationCode?: SortOrderInput | SortOrder
    InTime?: SortOrderInput | SortOrder
    GateInCode?: SortOrderInput | SortOrder
    VehicleType?: SortOrderInput | SortOrder
    ProductName?: SortOrderInput | SortOrder
    GracePeriodIn?: SortOrderInput | SortOrder
    QRTicket?: SortOrderInput | SortOrder
    Duration?: SortOrderInput | SortOrder
    TariffAmount?: SortOrderInput | SortOrder
    VoucherAmount?: SortOrderInput | SortOrder
    PaymentAmount?: SortOrderInput | SortOrder
    PaymentStatus?: SortOrderInput | SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrderInput | SortOrder
    IssuerID?: SortOrderInput | SortOrder
    PaymentReferenceNo?: SortOrderInput | SortOrder
    RetrievalReferenceNo?: SortOrderInput | SortOrder
    PrepaidCardName?: SortOrderInput | SortOrder
    PrepaidCardNo?: SortOrderInput | SortOrder
    PrepaidCardMID?: SortOrderInput | SortOrder
    PrepaidCardTID?: SortOrderInput | SortOrder
    PrepaidCardInitialBalance?: SortOrderInput | SortOrder
    PrepaidCardRemainingBalance?: SortOrderInput | SortOrder
    ReferenceTransactionNo?: SortOrderInput | SortOrder
    GracePeriodPayment?: SortOrderInput | SortOrder
    LicensePlateOut?: SortOrderInput | SortOrder
    OutTime?: SortOrderInput | SortOrder
    GateOutCode?: SortOrderInput | SortOrder
    MerchantDataRequestIN?: SortOrderInput | SortOrder
    MerchantDataResponseIN?: SortOrderInput | SortOrder
    POSTDataRequestIN?: SortOrderInput | SortOrder
    POSTDataResponseIN?: SortOrderInput | SortOrder
    MerchantDataRequestPAY?: SortOrderInput | SortOrder
    MerchantDataResponsePAY?: SortOrderInput | SortOrder
    POSTDataRequestPAY?: SortOrderInput | SortOrder
    POSTDataResponsePAY?: SortOrderInput | SortOrder
    MerchantDataRequestOUT?: SortOrderInput | SortOrder
    MerchantDataResponseOUT?: SortOrderInput | SortOrder
    POSTDataRequestOUT?: SortOrderInput | SortOrder
    POSTDataResponseOUT?: SortOrderInput | SortOrder
    RecordStatus?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedOn?: SortOrderInput | SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    UpdatedOn?: SortOrderInput | SortOrder
    _count?: TransactionParkingIntegrationCountOrderByAggregateInput
    _avg?: TransactionParkingIntegrationAvgOrderByAggregateInput
    _max?: TransactionParkingIntegrationMaxOrderByAggregateInput
    _min?: TransactionParkingIntegrationMinOrderByAggregateInput
    _sum?: TransactionParkingIntegrationSumOrderByAggregateInput
  }

  export type TransactionParkingIntegrationScalarWhereWithAggregatesInput = {
    AND?: TransactionParkingIntegrationScalarWhereWithAggregatesInput | TransactionParkingIntegrationScalarWhereWithAggregatesInput[]
    OR?: TransactionParkingIntegrationScalarWhereWithAggregatesInput[]
    NOT?: TransactionParkingIntegrationScalarWhereWithAggregatesInput | TransactionParkingIntegrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionParkingIntegration"> | number
    TrxRefId?: IntWithAggregatesFilter<"TransactionParkingIntegration"> | number
    TransactionNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    ReferenceNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    LicensePlateIn?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    LocationCode?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    SubLocationCode?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    InTime?: DateTimeNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Date | string | null
    GateInCode?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    VehicleType?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    ProductName?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodIn?: IntNullableWithAggregatesFilter<"TransactionParkingIntegration"> | number | null
    QRTicket?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    Duration?: IntNullableWithAggregatesFilter<"TransactionParkingIntegration"> | number | null
    TariffAmount?: DecimalNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: DecimalNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: DecimalNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PaymentDate?: DateTimeNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Date | string | null
    PaymentMethod?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    IssuerID?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PaymentReferenceNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    RetrievalReferenceNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardName?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardMID?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardTID?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    PrepaidCardInitialBalance?: DecimalNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: DecimalNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    GracePeriodPayment?: IntNullableWithAggregatesFilter<"TransactionParkingIntegration"> | number | null
    LicensePlateOut?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    OutTime?: DateTimeNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Date | string | null
    GateOutCode?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestIN?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseIN?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestIN?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseIN?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestPAY?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponsePAY?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestPAY?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponsePAY?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataRequestOUT?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    MerchantDataResponseOUT?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataRequestOUT?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    POSTDataResponseOUT?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    RecordStatus?: IntNullableWithAggregatesFilter<"TransactionParkingIntegration"> | number | null
    CreatedBy?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    CreatedOn?: DateTimeNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Date | string | null
    UpdatedBy?: StringNullableWithAggregatesFilter<"TransactionParkingIntegration"> | string | null
    UpdatedOn?: DateTimeNullableWithAggregatesFilter<"TransactionParkingIntegration"> | Date | string | null
  }

  export type TransactionParkingIntegrationCreateInput = {
    TrxRefId: number
    TransactionNo?: string | null
    ReferenceNo?: string | null
    LicensePlateIn?: string | null
    LocationCode?: string | null
    SubLocationCode?: string | null
    InTime?: Date | string | null
    GateInCode?: string | null
    VehicleType?: string | null
    ProductName?: string | null
    GracePeriodIn?: number | null
    QRTicket?: string | null
    Duration?: number | null
    TariffAmount?: Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: string | null
    PaymentDate?: Date | string | null
    PaymentMethod?: string | null
    IssuerID?: string | null
    PaymentReferenceNo?: string | null
    RetrievalReferenceNo?: string | null
    PrepaidCardName?: string | null
    PrepaidCardNo?: string | null
    PrepaidCardMID?: string | null
    PrepaidCardTID?: string | null
    PrepaidCardInitialBalance?: Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: string | null
    GracePeriodPayment?: number | null
    LicensePlateOut?: string | null
    OutTime?: Date | string | null
    GateOutCode?: string | null
    MerchantDataRequestIN?: string | null
    MerchantDataResponseIN?: string | null
    POSTDataRequestIN?: string | null
    POSTDataResponseIN?: string | null
    MerchantDataRequestPAY?: string | null
    MerchantDataResponsePAY?: string | null
    POSTDataRequestPAY?: string | null
    POSTDataResponsePAY?: string | null
    MerchantDataRequestOUT?: string | null
    MerchantDataResponseOUT?: string | null
    POSTDataRequestOUT?: string | null
    POSTDataResponseOUT?: string | null
    RecordStatus?: number | null
    CreatedBy?: string | null
    CreatedOn?: Date | string | null
    UpdatedBy?: string | null
    UpdatedOn?: Date | string | null
  }

  export type TransactionParkingIntegrationUncheckedCreateInput = {
    id?: number
    TrxRefId: number
    TransactionNo?: string | null
    ReferenceNo?: string | null
    LicensePlateIn?: string | null
    LocationCode?: string | null
    SubLocationCode?: string | null
    InTime?: Date | string | null
    GateInCode?: string | null
    VehicleType?: string | null
    ProductName?: string | null
    GracePeriodIn?: number | null
    QRTicket?: string | null
    Duration?: number | null
    TariffAmount?: Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: string | null
    PaymentDate?: Date | string | null
    PaymentMethod?: string | null
    IssuerID?: string | null
    PaymentReferenceNo?: string | null
    RetrievalReferenceNo?: string | null
    PrepaidCardName?: string | null
    PrepaidCardNo?: string | null
    PrepaidCardMID?: string | null
    PrepaidCardTID?: string | null
    PrepaidCardInitialBalance?: Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: string | null
    GracePeriodPayment?: number | null
    LicensePlateOut?: string | null
    OutTime?: Date | string | null
    GateOutCode?: string | null
    MerchantDataRequestIN?: string | null
    MerchantDataResponseIN?: string | null
    POSTDataRequestIN?: string | null
    POSTDataResponseIN?: string | null
    MerchantDataRequestPAY?: string | null
    MerchantDataResponsePAY?: string | null
    POSTDataRequestPAY?: string | null
    POSTDataResponsePAY?: string | null
    MerchantDataRequestOUT?: string | null
    MerchantDataResponseOUT?: string | null
    POSTDataRequestOUT?: string | null
    POSTDataResponseOUT?: string | null
    RecordStatus?: number | null
    CreatedBy?: string | null
    CreatedOn?: Date | string | null
    UpdatedBy?: string | null
    UpdatedOn?: Date | string | null
  }

  export type TransactionParkingIntegrationUpdateInput = {
    TrxRefId?: IntFieldUpdateOperationsInput | number
    TransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    ReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    LicensePlateIn?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    SubLocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateInCode?: NullableStringFieldUpdateOperationsInput | string | null
    VehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodIn?: NullableIntFieldUpdateOperationsInput | number | null
    QRTicket?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    TariffAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerID?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    RetrievalReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardName?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardMID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardTID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardInitialBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodPayment?: NullableIntFieldUpdateOperationsInput | number | null
    LicensePlateOut?: NullableStringFieldUpdateOperationsInput | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateOutCode?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionParkingIntegrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    TrxRefId?: IntFieldUpdateOperationsInput | number
    TransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    ReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    LicensePlateIn?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    SubLocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateInCode?: NullableStringFieldUpdateOperationsInput | string | null
    VehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodIn?: NullableIntFieldUpdateOperationsInput | number | null
    QRTicket?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    TariffAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerID?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    RetrievalReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardName?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardMID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardTID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardInitialBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodPayment?: NullableIntFieldUpdateOperationsInput | number | null
    LicensePlateOut?: NullableStringFieldUpdateOperationsInput | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateOutCode?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionParkingIntegrationCreateManyInput = {
    id?: number
    TrxRefId: number
    TransactionNo?: string | null
    ReferenceNo?: string | null
    LicensePlateIn?: string | null
    LocationCode?: string | null
    SubLocationCode?: string | null
    InTime?: Date | string | null
    GateInCode?: string | null
    VehicleType?: string | null
    ProductName?: string | null
    GracePeriodIn?: number | null
    QRTicket?: string | null
    Duration?: number | null
    TariffAmount?: Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: string | null
    PaymentDate?: Date | string | null
    PaymentMethod?: string | null
    IssuerID?: string | null
    PaymentReferenceNo?: string | null
    RetrievalReferenceNo?: string | null
    PrepaidCardName?: string | null
    PrepaidCardNo?: string | null
    PrepaidCardMID?: string | null
    PrepaidCardTID?: string | null
    PrepaidCardInitialBalance?: Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: string | null
    GracePeriodPayment?: number | null
    LicensePlateOut?: string | null
    OutTime?: Date | string | null
    GateOutCode?: string | null
    MerchantDataRequestIN?: string | null
    MerchantDataResponseIN?: string | null
    POSTDataRequestIN?: string | null
    POSTDataResponseIN?: string | null
    MerchantDataRequestPAY?: string | null
    MerchantDataResponsePAY?: string | null
    POSTDataRequestPAY?: string | null
    POSTDataResponsePAY?: string | null
    MerchantDataRequestOUT?: string | null
    MerchantDataResponseOUT?: string | null
    POSTDataRequestOUT?: string | null
    POSTDataResponseOUT?: string | null
    RecordStatus?: number | null
    CreatedBy?: string | null
    CreatedOn?: Date | string | null
    UpdatedBy?: string | null
    UpdatedOn?: Date | string | null
  }

  export type TransactionParkingIntegrationUpdateManyMutationInput = {
    TrxRefId?: IntFieldUpdateOperationsInput | number
    TransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    ReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    LicensePlateIn?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    SubLocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateInCode?: NullableStringFieldUpdateOperationsInput | string | null
    VehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodIn?: NullableIntFieldUpdateOperationsInput | number | null
    QRTicket?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    TariffAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerID?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    RetrievalReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardName?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardMID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardTID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardInitialBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodPayment?: NullableIntFieldUpdateOperationsInput | number | null
    LicensePlateOut?: NullableStringFieldUpdateOperationsInput | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateOutCode?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionParkingIntegrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    TrxRefId?: IntFieldUpdateOperationsInput | number
    TransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    ReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    LicensePlateIn?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    SubLocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateInCode?: NullableStringFieldUpdateOperationsInput | string | null
    VehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    ProductName?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodIn?: NullableIntFieldUpdateOperationsInput | number | null
    QRTicket?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    TariffAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    VoucherAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerID?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    RetrievalReferenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardName?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardNo?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardMID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardTID?: NullableStringFieldUpdateOperationsInput | string | null
    PrepaidCardInitialBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    PrepaidCardRemainingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ReferenceTransactionNo?: NullableStringFieldUpdateOperationsInput | string | null
    GracePeriodPayment?: NullableIntFieldUpdateOperationsInput | number | null
    LicensePlateOut?: NullableStringFieldUpdateOperationsInput | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GateOutCode?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestIN?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseIN?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestPAY?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponsePAY?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    MerchantDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataRequestOUT?: NullableStringFieldUpdateOperationsInput | string | null
    POSTDataResponseOUT?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionParkingIntegrationOrderByRelevanceInput = {
    fields: TransactionParkingIntegrationOrderByRelevanceFieldEnum | TransactionParkingIntegrationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionParkingIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    TransactionNo?: SortOrder
    ReferenceNo?: SortOrder
    LicensePlateIn?: SortOrder
    LocationCode?: SortOrder
    SubLocationCode?: SortOrder
    InTime?: SortOrder
    GateInCode?: SortOrder
    VehicleType?: SortOrder
    ProductName?: SortOrder
    GracePeriodIn?: SortOrder
    QRTicket?: SortOrder
    Duration?: SortOrder
    TariffAmount?: SortOrder
    VoucherAmount?: SortOrder
    PaymentAmount?: SortOrder
    PaymentStatus?: SortOrder
    PaymentDate?: SortOrder
    PaymentMethod?: SortOrder
    IssuerID?: SortOrder
    PaymentReferenceNo?: SortOrder
    RetrievalReferenceNo?: SortOrder
    PrepaidCardName?: SortOrder
    PrepaidCardNo?: SortOrder
    PrepaidCardMID?: SortOrder
    PrepaidCardTID?: SortOrder
    PrepaidCardInitialBalance?: SortOrder
    PrepaidCardRemainingBalance?: SortOrder
    ReferenceTransactionNo?: SortOrder
    GracePeriodPayment?: SortOrder
    LicensePlateOut?: SortOrder
    OutTime?: SortOrder
    GateOutCode?: SortOrder
    MerchantDataRequestIN?: SortOrder
    MerchantDataResponseIN?: SortOrder
    POSTDataRequestIN?: SortOrder
    POSTDataResponseIN?: SortOrder
    MerchantDataRequestPAY?: SortOrder
    MerchantDataResponsePAY?: SortOrder
    POSTDataRequestPAY?: SortOrder
    POSTDataResponsePAY?: SortOrder
    MerchantDataRequestOUT?: SortOrder
    MerchantDataResponseOUT?: SortOrder
    POSTDataRequestOUT?: SortOrder
    POSTDataResponseOUT?: SortOrder
    RecordStatus?: SortOrder
    CreatedBy?: SortOrder
    CreatedOn?: SortOrder
    UpdatedBy?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type TransactionParkingIntegrationAvgOrderByAggregateInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    GracePeriodIn?: SortOrder
    Duration?: SortOrder
    TariffAmount?: SortOrder
    VoucherAmount?: SortOrder
    PaymentAmount?: SortOrder
    PrepaidCardInitialBalance?: SortOrder
    PrepaidCardRemainingBalance?: SortOrder
    GracePeriodPayment?: SortOrder
    RecordStatus?: SortOrder
  }

  export type TransactionParkingIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    TransactionNo?: SortOrder
    ReferenceNo?: SortOrder
    LicensePlateIn?: SortOrder
    LocationCode?: SortOrder
    SubLocationCode?: SortOrder
    InTime?: SortOrder
    GateInCode?: SortOrder
    VehicleType?: SortOrder
    ProductName?: SortOrder
    GracePeriodIn?: SortOrder
    QRTicket?: SortOrder
    Duration?: SortOrder
    TariffAmount?: SortOrder
    VoucherAmount?: SortOrder
    PaymentAmount?: SortOrder
    PaymentStatus?: SortOrder
    PaymentDate?: SortOrder
    PaymentMethod?: SortOrder
    IssuerID?: SortOrder
    PaymentReferenceNo?: SortOrder
    RetrievalReferenceNo?: SortOrder
    PrepaidCardName?: SortOrder
    PrepaidCardNo?: SortOrder
    PrepaidCardMID?: SortOrder
    PrepaidCardTID?: SortOrder
    PrepaidCardInitialBalance?: SortOrder
    PrepaidCardRemainingBalance?: SortOrder
    ReferenceTransactionNo?: SortOrder
    GracePeriodPayment?: SortOrder
    LicensePlateOut?: SortOrder
    OutTime?: SortOrder
    GateOutCode?: SortOrder
    MerchantDataRequestIN?: SortOrder
    MerchantDataResponseIN?: SortOrder
    POSTDataRequestIN?: SortOrder
    POSTDataResponseIN?: SortOrder
    MerchantDataRequestPAY?: SortOrder
    MerchantDataResponsePAY?: SortOrder
    POSTDataRequestPAY?: SortOrder
    POSTDataResponsePAY?: SortOrder
    MerchantDataRequestOUT?: SortOrder
    MerchantDataResponseOUT?: SortOrder
    POSTDataRequestOUT?: SortOrder
    POSTDataResponseOUT?: SortOrder
    RecordStatus?: SortOrder
    CreatedBy?: SortOrder
    CreatedOn?: SortOrder
    UpdatedBy?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type TransactionParkingIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    TransactionNo?: SortOrder
    ReferenceNo?: SortOrder
    LicensePlateIn?: SortOrder
    LocationCode?: SortOrder
    SubLocationCode?: SortOrder
    InTime?: SortOrder
    GateInCode?: SortOrder
    VehicleType?: SortOrder
    ProductName?: SortOrder
    GracePeriodIn?: SortOrder
    QRTicket?: SortOrder
    Duration?: SortOrder
    TariffAmount?: SortOrder
    VoucherAmount?: SortOrder
    PaymentAmount?: SortOrder
    PaymentStatus?: SortOrder
    PaymentDate?: SortOrder
    PaymentMethod?: SortOrder
    IssuerID?: SortOrder
    PaymentReferenceNo?: SortOrder
    RetrievalReferenceNo?: SortOrder
    PrepaidCardName?: SortOrder
    PrepaidCardNo?: SortOrder
    PrepaidCardMID?: SortOrder
    PrepaidCardTID?: SortOrder
    PrepaidCardInitialBalance?: SortOrder
    PrepaidCardRemainingBalance?: SortOrder
    ReferenceTransactionNo?: SortOrder
    GracePeriodPayment?: SortOrder
    LicensePlateOut?: SortOrder
    OutTime?: SortOrder
    GateOutCode?: SortOrder
    MerchantDataRequestIN?: SortOrder
    MerchantDataResponseIN?: SortOrder
    POSTDataRequestIN?: SortOrder
    POSTDataResponseIN?: SortOrder
    MerchantDataRequestPAY?: SortOrder
    MerchantDataResponsePAY?: SortOrder
    POSTDataRequestPAY?: SortOrder
    POSTDataResponsePAY?: SortOrder
    MerchantDataRequestOUT?: SortOrder
    MerchantDataResponseOUT?: SortOrder
    POSTDataRequestOUT?: SortOrder
    POSTDataResponseOUT?: SortOrder
    RecordStatus?: SortOrder
    CreatedBy?: SortOrder
    CreatedOn?: SortOrder
    UpdatedBy?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type TransactionParkingIntegrationSumOrderByAggregateInput = {
    id?: SortOrder
    TrxRefId?: SortOrder
    GracePeriodIn?: SortOrder
    Duration?: SortOrder
    TariffAmount?: SortOrder
    VoucherAmount?: SortOrder
    PaymentAmount?: SortOrder
    PrepaidCardInitialBalance?: SortOrder
    PrepaidCardRemainingBalance?: SortOrder
    GracePeriodPayment?: SortOrder
    RecordStatus?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}