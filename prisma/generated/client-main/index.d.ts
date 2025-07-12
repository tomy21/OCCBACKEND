
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
 * Model OccCategory
 * 
 */
export type OccCategory = $Result.DefaultSelection<Prisma.$OccCategoryPayload>
/**
 * Model OccDescription
 * 
 */
export type OccDescription = $Result.DefaultSelection<Prisma.$OccDescriptionPayload>
/**
 * Model OccIssue
 * 
 */
export type OccIssue = $Result.DefaultSelection<Prisma.$OccIssuePayload>
/**
 * Model OccRefLocation
 * 
 */
export type OccRefLocation = $Result.DefaultSelection<Prisma.$OccRefLocationPayload>
/**
 * Model OccTransaction
 * 
 */
export type OccTransaction = $Result.DefaultSelection<Prisma.$OccTransactionPayload>
/**
 * Model OccGate
 * 
 */
export type OccGate = $Result.DefaultSelection<Prisma.$OccGatePayload>
/**
 * Model OccIntercome
 * 
 */
export type OccIntercome = $Result.DefaultSelection<Prisma.$OccIntercomePayload>
/**
 * Model RefIssuer
 * 
 */
export type RefIssuer = $Result.DefaultSelection<Prisma.$RefIssuerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const statusIssue: {
  new: 'new',
  progress: 'progress',
  solved: 'solved'
};

export type statusIssue = (typeof statusIssue)[keyof typeof statusIssue]


export const record: {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  DELETE: 'DELETE'
};

export type record = (typeof record)[keyof typeof record]

}

export type statusIssue = $Enums.statusIssue

export const statusIssue: typeof $Enums.statusIssue

export type record = $Enums.record

export const record: typeof $Enums.record

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OccCategories
 * const occCategories = await prisma.occCategory.findMany()
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
   * // Fetch zero or more OccCategories
   * const occCategories = await prisma.occCategory.findMany()
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
   * `prisma.occCategory`: Exposes CRUD operations for the **OccCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccCategories
    * const occCategories = await prisma.occCategory.findMany()
    * ```
    */
  get occCategory(): Prisma.OccCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occDescription`: Exposes CRUD operations for the **OccDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccDescriptions
    * const occDescriptions = await prisma.occDescription.findMany()
    * ```
    */
  get occDescription(): Prisma.OccDescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occIssue`: Exposes CRUD operations for the **OccIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccIssues
    * const occIssues = await prisma.occIssue.findMany()
    * ```
    */
  get occIssue(): Prisma.OccIssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occRefLocation`: Exposes CRUD operations for the **OccRefLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccRefLocations
    * const occRefLocations = await prisma.occRefLocation.findMany()
    * ```
    */
  get occRefLocation(): Prisma.OccRefLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occTransaction`: Exposes CRUD operations for the **OccTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccTransactions
    * const occTransactions = await prisma.occTransaction.findMany()
    * ```
    */
  get occTransaction(): Prisma.OccTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occGate`: Exposes CRUD operations for the **OccGate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccGates
    * const occGates = await prisma.occGate.findMany()
    * ```
    */
  get occGate(): Prisma.OccGateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occIntercome`: Exposes CRUD operations for the **OccIntercome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccIntercomes
    * const occIntercomes = await prisma.occIntercome.findMany()
    * ```
    */
  get occIntercome(): Prisma.OccIntercomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refIssuer`: Exposes CRUD operations for the **RefIssuer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefIssuers
    * const refIssuers = await prisma.refIssuer.findMany()
    * ```
    */
  get refIssuer(): Prisma.RefIssuerDelegate<ExtArgs, ClientOptions>;
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
    OccCategory: 'OccCategory',
    OccDescription: 'OccDescription',
    OccIssue: 'OccIssue',
    OccRefLocation: 'OccRefLocation',
    OccTransaction: 'OccTransaction',
    OccGate: 'OccGate',
    OccIntercome: 'OccIntercome',
    RefIssuer: 'RefIssuer'
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
      modelProps: "occCategory" | "occDescription" | "occIssue" | "occRefLocation" | "occTransaction" | "occGate" | "occIntercome" | "refIssuer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OccCategory: {
        payload: Prisma.$OccCategoryPayload<ExtArgs>
        fields: Prisma.OccCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          findFirst: {
            args: Prisma.OccCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          findMany: {
            args: Prisma.OccCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>[]
          }
          create: {
            args: Prisma.OccCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          createMany: {
            args: Prisma.OccCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          update: {
            args: Prisma.OccCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          deleteMany: {
            args: Prisma.OccCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccCategoryPayload>
          }
          aggregate: {
            args: Prisma.OccCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccCategory>
          }
          groupBy: {
            args: Prisma.OccCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<OccCategoryCountAggregateOutputType> | number
          }
        }
      }
      OccDescription: {
        payload: Prisma.$OccDescriptionPayload<ExtArgs>
        fields: Prisma.OccDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          findFirst: {
            args: Prisma.OccDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          findMany: {
            args: Prisma.OccDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>[]
          }
          create: {
            args: Prisma.OccDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          createMany: {
            args: Prisma.OccDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          update: {
            args: Prisma.OccDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.OccDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccDescriptionPayload>
          }
          aggregate: {
            args: Prisma.OccDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccDescription>
          }
          groupBy: {
            args: Prisma.OccDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<OccDescriptionCountAggregateOutputType> | number
          }
        }
      }
      OccIssue: {
        payload: Prisma.$OccIssuePayload<ExtArgs>
        fields: Prisma.OccIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          findFirst: {
            args: Prisma.OccIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          findMany: {
            args: Prisma.OccIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>[]
          }
          create: {
            args: Prisma.OccIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          createMany: {
            args: Prisma.OccIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          update: {
            args: Prisma.OccIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          deleteMany: {
            args: Prisma.OccIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIssuePayload>
          }
          aggregate: {
            args: Prisma.OccIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccIssue>
          }
          groupBy: {
            args: Prisma.OccIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccIssueCountArgs<ExtArgs>
            result: $Utils.Optional<OccIssueCountAggregateOutputType> | number
          }
        }
      }
      OccRefLocation: {
        payload: Prisma.$OccRefLocationPayload<ExtArgs>
        fields: Prisma.OccRefLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccRefLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccRefLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          findFirst: {
            args: Prisma.OccRefLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccRefLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          findMany: {
            args: Prisma.OccRefLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>[]
          }
          create: {
            args: Prisma.OccRefLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          createMany: {
            args: Prisma.OccRefLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccRefLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          update: {
            args: Prisma.OccRefLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          deleteMany: {
            args: Prisma.OccRefLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccRefLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccRefLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccRefLocationPayload>
          }
          aggregate: {
            args: Prisma.OccRefLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccRefLocation>
          }
          groupBy: {
            args: Prisma.OccRefLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccRefLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccRefLocationCountArgs<ExtArgs>
            result: $Utils.Optional<OccRefLocationCountAggregateOutputType> | number
          }
        }
      }
      OccTransaction: {
        payload: Prisma.$OccTransactionPayload<ExtArgs>
        fields: Prisma.OccTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          findFirst: {
            args: Prisma.OccTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          findMany: {
            args: Prisma.OccTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>[]
          }
          create: {
            args: Prisma.OccTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          createMany: {
            args: Prisma.OccTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          update: {
            args: Prisma.OccTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OccTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccTransactionPayload>
          }
          aggregate: {
            args: Prisma.OccTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccTransaction>
          }
          groupBy: {
            args: Prisma.OccTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OccTransactionCountAggregateOutputType> | number
          }
        }
      }
      OccGate: {
        payload: Prisma.$OccGatePayload<ExtArgs>
        fields: Prisma.OccGateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccGateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccGateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          findFirst: {
            args: Prisma.OccGateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccGateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          findMany: {
            args: Prisma.OccGateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>[]
          }
          create: {
            args: Prisma.OccGateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          createMany: {
            args: Prisma.OccGateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccGateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          update: {
            args: Prisma.OccGateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          deleteMany: {
            args: Prisma.OccGateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccGateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccGateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccGatePayload>
          }
          aggregate: {
            args: Prisma.OccGateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccGate>
          }
          groupBy: {
            args: Prisma.OccGateGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccGateGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccGateCountArgs<ExtArgs>
            result: $Utils.Optional<OccGateCountAggregateOutputType> | number
          }
        }
      }
      OccIntercome: {
        payload: Prisma.$OccIntercomePayload<ExtArgs>
        fields: Prisma.OccIntercomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccIntercomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccIntercomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          findFirst: {
            args: Prisma.OccIntercomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccIntercomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          findMany: {
            args: Prisma.OccIntercomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>[]
          }
          create: {
            args: Prisma.OccIntercomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          createMany: {
            args: Prisma.OccIntercomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccIntercomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          update: {
            args: Prisma.OccIntercomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          deleteMany: {
            args: Prisma.OccIntercomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccIntercomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccIntercomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccIntercomePayload>
          }
          aggregate: {
            args: Prisma.OccIntercomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccIntercome>
          }
          groupBy: {
            args: Prisma.OccIntercomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccIntercomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccIntercomeCountArgs<ExtArgs>
            result: $Utils.Optional<OccIntercomeCountAggregateOutputType> | number
          }
        }
      }
      RefIssuer: {
        payload: Prisma.$RefIssuerPayload<ExtArgs>
        fields: Prisma.RefIssuerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefIssuerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefIssuerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          findFirst: {
            args: Prisma.RefIssuerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefIssuerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          findMany: {
            args: Prisma.RefIssuerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>[]
          }
          create: {
            args: Prisma.RefIssuerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          createMany: {
            args: Prisma.RefIssuerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefIssuerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          update: {
            args: Prisma.RefIssuerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          deleteMany: {
            args: Prisma.RefIssuerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefIssuerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefIssuerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefIssuerPayload>
          }
          aggregate: {
            args: Prisma.RefIssuerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefIssuer>
          }
          groupBy: {
            args: Prisma.RefIssuerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefIssuerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefIssuerCountArgs<ExtArgs>
            result: $Utils.Optional<RefIssuerCountAggregateOutputType> | number
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
    occCategory?: OccCategoryOmit
    occDescription?: OccDescriptionOmit
    occIssue?: OccIssueOmit
    occRefLocation?: OccRefLocationOmit
    occTransaction?: OccTransactionOmit
    occGate?: OccGateOmit
    occIntercome?: OccIntercomeOmit
    refIssuer?: RefIssuerOmit
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
   * Count Type OccCategoryCountOutputType
   */

  export type OccCategoryCountOutputType = {
    occCategory: number
  }

  export type OccCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occCategory?: boolean | OccCategoryCountOutputTypeCountOccCategoryArgs
  }

  // Custom InputTypes
  /**
   * OccCategoryCountOutputType without action
   */
  export type OccCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategoryCountOutputType
     */
    select?: OccCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccCategoryCountOutputType without action
   */
  export type OccCategoryCountOutputTypeCountOccCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccDescriptionWhereInput
  }


  /**
   * Count Type OccRefLocationCountOutputType
   */

  export type OccRefLocationCountOutputType = {
    location: number
  }

  export type OccRefLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | OccRefLocationCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes
  /**
   * OccRefLocationCountOutputType without action
   */
  export type OccRefLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocationCountOutputType
     */
    select?: OccRefLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccRefLocationCountOutputType without action
   */
  export type OccRefLocationCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccGateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OccCategory
   */

  export type AggregateOccCategory = {
    _count: OccCategoryCountAggregateOutputType | null
    _avg: OccCategoryAvgAggregateOutputType | null
    _sum: OccCategorySumAggregateOutputType | null
    _min: OccCategoryMinAggregateOutputType | null
    _max: OccCategoryMaxAggregateOutputType | null
  }

  export type OccCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type OccCategorySumAggregateOutputType = {
    id: number | null
  }

  export type OccCategoryMinAggregateOutputType = {
    id: number | null
    category: string | null
    createdBy: string | null
    modifyBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccCategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    createdBy: string | null
    modifyBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccCategoryCountAggregateOutputType = {
    id: number
    category: number
    createdBy: number
    modifyBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OccCategoryAvgAggregateInputType = {
    id?: true
  }

  export type OccCategorySumAggregateInputType = {
    id?: true
  }

  export type OccCategoryMinAggregateInputType = {
    id?: true
    category?: true
    createdBy?: true
    modifyBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccCategoryMaxAggregateInputType = {
    id?: true
    category?: true
    createdBy?: true
    modifyBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccCategoryCountAggregateInputType = {
    id?: true
    category?: true
    createdBy?: true
    modifyBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OccCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccCategory to aggregate.
     */
    where?: OccCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccCategories to fetch.
     */
    orderBy?: OccCategoryOrderByWithRelationInput | OccCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccCategories
    **/
    _count?: true | OccCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccCategoryMaxAggregateInputType
  }

  export type GetOccCategoryAggregateType<T extends OccCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOccCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccCategory[P]>
      : GetScalarType<T[P], AggregateOccCategory[P]>
  }




  export type OccCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccCategoryWhereInput
    orderBy?: OccCategoryOrderByWithAggregationInput | OccCategoryOrderByWithAggregationInput[]
    by: OccCategoryScalarFieldEnum[] | OccCategoryScalarFieldEnum
    having?: OccCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccCategoryCountAggregateInputType | true
    _avg?: OccCategoryAvgAggregateInputType
    _sum?: OccCategorySumAggregateInputType
    _min?: OccCategoryMinAggregateInputType
    _max?: OccCategoryMaxAggregateInputType
  }

  export type OccCategoryGroupByOutputType = {
    id: number
    category: string
    createdBy: string
    modifyBy: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OccCategoryCountAggregateOutputType | null
    _avg: OccCategoryAvgAggregateOutputType | null
    _sum: OccCategorySumAggregateOutputType | null
    _min: OccCategoryMinAggregateOutputType | null
    _max: OccCategoryMaxAggregateOutputType | null
  }

  type GetOccCategoryGroupByPayload<T extends OccCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], OccCategoryGroupByOutputType[P]>
        }
      >
    >


  export type OccCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    createdBy?: boolean
    modifyBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    occCategory?: boolean | OccCategory$occCategoryArgs<ExtArgs>
    _count?: boolean | OccCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occCategory"]>



  export type OccCategorySelectScalar = {
    id?: boolean
    category?: boolean
    createdBy?: boolean
    modifyBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OccCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "createdBy" | "modifyBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["occCategory"]>
  export type OccCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occCategory?: boolean | OccCategory$occCategoryArgs<ExtArgs>
    _count?: boolean | OccCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OccCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccCategory"
    objects: {
      occCategory: Prisma.$OccDescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      createdBy: string
      modifyBy: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["occCategory"]>
    composites: {}
  }

  type OccCategoryGetPayload<S extends boolean | null | undefined | OccCategoryDefaultArgs> = $Result.GetResult<Prisma.$OccCategoryPayload, S>

  type OccCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccCategoryCountAggregateInputType | true
    }

  export interface OccCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccCategory'], meta: { name: 'OccCategory' } }
    /**
     * Find zero or one OccCategory that matches the filter.
     * @param {OccCategoryFindUniqueArgs} args - Arguments to find a OccCategory
     * @example
     * // Get one OccCategory
     * const occCategory = await prisma.occCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccCategoryFindUniqueArgs>(args: SelectSubset<T, OccCategoryFindUniqueArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccCategoryFindUniqueOrThrowArgs} args - Arguments to find a OccCategory
     * @example
     * // Get one OccCategory
     * const occCategory = await prisma.occCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OccCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryFindFirstArgs} args - Arguments to find a OccCategory
     * @example
     * // Get one OccCategory
     * const occCategory = await prisma.occCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccCategoryFindFirstArgs>(args?: SelectSubset<T, OccCategoryFindFirstArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryFindFirstOrThrowArgs} args - Arguments to find a OccCategory
     * @example
     * // Get one OccCategory
     * const occCategory = await prisma.occCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OccCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccCategories
     * const occCategories = await prisma.occCategory.findMany()
     * 
     * // Get first 10 OccCategories
     * const occCategories = await prisma.occCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occCategoryWithIdOnly = await prisma.occCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccCategoryFindManyArgs>(args?: SelectSubset<T, OccCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccCategory.
     * @param {OccCategoryCreateArgs} args - Arguments to create a OccCategory.
     * @example
     * // Create one OccCategory
     * const OccCategory = await prisma.occCategory.create({
     *   data: {
     *     // ... data to create a OccCategory
     *   }
     * })
     * 
     */
    create<T extends OccCategoryCreateArgs>(args: SelectSubset<T, OccCategoryCreateArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccCategories.
     * @param {OccCategoryCreateManyArgs} args - Arguments to create many OccCategories.
     * @example
     * // Create many OccCategories
     * const occCategory = await prisma.occCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccCategoryCreateManyArgs>(args?: SelectSubset<T, OccCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccCategory.
     * @param {OccCategoryDeleteArgs} args - Arguments to delete one OccCategory.
     * @example
     * // Delete one OccCategory
     * const OccCategory = await prisma.occCategory.delete({
     *   where: {
     *     // ... filter to delete one OccCategory
     *   }
     * })
     * 
     */
    delete<T extends OccCategoryDeleteArgs>(args: SelectSubset<T, OccCategoryDeleteArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccCategory.
     * @param {OccCategoryUpdateArgs} args - Arguments to update one OccCategory.
     * @example
     * // Update one OccCategory
     * const occCategory = await prisma.occCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccCategoryUpdateArgs>(args: SelectSubset<T, OccCategoryUpdateArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccCategories.
     * @param {OccCategoryDeleteManyArgs} args - Arguments to filter OccCategories to delete.
     * @example
     * // Delete a few OccCategories
     * const { count } = await prisma.occCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccCategoryDeleteManyArgs>(args?: SelectSubset<T, OccCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccCategories
     * const occCategory = await prisma.occCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccCategoryUpdateManyArgs>(args: SelectSubset<T, OccCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccCategory.
     * @param {OccCategoryUpsertArgs} args - Arguments to update or create a OccCategory.
     * @example
     * // Update or create a OccCategory
     * const occCategory = await prisma.occCategory.upsert({
     *   create: {
     *     // ... data to create a OccCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccCategory we want to update
     *   }
     * })
     */
    upsert<T extends OccCategoryUpsertArgs>(args: SelectSubset<T, OccCategoryUpsertArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryCountArgs} args - Arguments to filter OccCategories to count.
     * @example
     * // Count the number of OccCategories
     * const count = await prisma.occCategory.count({
     *   where: {
     *     // ... the filter for the OccCategories we want to count
     *   }
     * })
    **/
    count<T extends OccCategoryCountArgs>(
      args?: Subset<T, OccCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccCategoryAggregateArgs>(args: Subset<T, OccCategoryAggregateArgs>): Prisma.PrismaPromise<GetOccCategoryAggregateType<T>>

    /**
     * Group by OccCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccCategoryGroupByArgs} args - Group by arguments.
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
      T extends OccCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccCategoryGroupByArgs['orderBy'] }
        : { orderBy?: OccCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccCategory model
   */
  readonly fields: OccCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    occCategory<T extends OccCategory$occCategoryArgs<ExtArgs> = {}>(args?: Subset<T, OccCategory$occCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OccCategory model
   */
  interface OccCategoryFieldRefs {
    readonly id: FieldRef<"OccCategory", 'Int'>
    readonly category: FieldRef<"OccCategory", 'String'>
    readonly createdBy: FieldRef<"OccCategory", 'String'>
    readonly modifyBy: FieldRef<"OccCategory", 'String'>
    readonly createdAt: FieldRef<"OccCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"OccCategory", 'DateTime'>
    readonly deletedAt: FieldRef<"OccCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OccCategory findUnique
   */
  export type OccCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OccCategory to fetch.
     */
    where: OccCategoryWhereUniqueInput
  }

  /**
   * OccCategory findUniqueOrThrow
   */
  export type OccCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OccCategory to fetch.
     */
    where: OccCategoryWhereUniqueInput
  }

  /**
   * OccCategory findFirst
   */
  export type OccCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OccCategory to fetch.
     */
    where?: OccCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccCategories to fetch.
     */
    orderBy?: OccCategoryOrderByWithRelationInput | OccCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccCategories.
     */
    cursor?: OccCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccCategories.
     */
    distinct?: OccCategoryScalarFieldEnum | OccCategoryScalarFieldEnum[]
  }

  /**
   * OccCategory findFirstOrThrow
   */
  export type OccCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OccCategory to fetch.
     */
    where?: OccCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccCategories to fetch.
     */
    orderBy?: OccCategoryOrderByWithRelationInput | OccCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccCategories.
     */
    cursor?: OccCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccCategories.
     */
    distinct?: OccCategoryScalarFieldEnum | OccCategoryScalarFieldEnum[]
  }

  /**
   * OccCategory findMany
   */
  export type OccCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OccCategories to fetch.
     */
    where?: OccCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccCategories to fetch.
     */
    orderBy?: OccCategoryOrderByWithRelationInput | OccCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccCategories.
     */
    cursor?: OccCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccCategories.
     */
    skip?: number
    distinct?: OccCategoryScalarFieldEnum | OccCategoryScalarFieldEnum[]
  }

  /**
   * OccCategory create
   */
  export type OccCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OccCategory.
     */
    data: XOR<OccCategoryCreateInput, OccCategoryUncheckedCreateInput>
  }

  /**
   * OccCategory createMany
   */
  export type OccCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccCategories.
     */
    data: OccCategoryCreateManyInput | OccCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccCategory update
   */
  export type OccCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OccCategory.
     */
    data: XOR<OccCategoryUpdateInput, OccCategoryUncheckedUpdateInput>
    /**
     * Choose, which OccCategory to update.
     */
    where: OccCategoryWhereUniqueInput
  }

  /**
   * OccCategory updateMany
   */
  export type OccCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccCategories.
     */
    data: XOR<OccCategoryUpdateManyMutationInput, OccCategoryUncheckedUpdateManyInput>
    /**
     * Filter which OccCategories to update
     */
    where?: OccCategoryWhereInput
    /**
     * Limit how many OccCategories to update.
     */
    limit?: number
  }

  /**
   * OccCategory upsert
   */
  export type OccCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OccCategory to update in case it exists.
     */
    where: OccCategoryWhereUniqueInput
    /**
     * In case the OccCategory found by the `where` argument doesn't exist, create a new OccCategory with this data.
     */
    create: XOR<OccCategoryCreateInput, OccCategoryUncheckedCreateInput>
    /**
     * In case the OccCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccCategoryUpdateInput, OccCategoryUncheckedUpdateInput>
  }

  /**
   * OccCategory delete
   */
  export type OccCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
    /**
     * Filter which OccCategory to delete.
     */
    where: OccCategoryWhereUniqueInput
  }

  /**
   * OccCategory deleteMany
   */
  export type OccCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccCategories to delete
     */
    where?: OccCategoryWhereInput
    /**
     * Limit how many OccCategories to delete.
     */
    limit?: number
  }

  /**
   * OccCategory.occCategory
   */
  export type OccCategory$occCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    where?: OccDescriptionWhereInput
    orderBy?: OccDescriptionOrderByWithRelationInput | OccDescriptionOrderByWithRelationInput[]
    cursor?: OccDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccDescriptionScalarFieldEnum | OccDescriptionScalarFieldEnum[]
  }

  /**
   * OccCategory without action
   */
  export type OccCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccCategory
     */
    select?: OccCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccCategory
     */
    omit?: OccCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccCategoryInclude<ExtArgs> | null
  }


  /**
   * Model OccDescription
   */

  export type AggregateOccDescription = {
    _count: OccDescriptionCountAggregateOutputType | null
    _avg: OccDescriptionAvgAggregateOutputType | null
    _sum: OccDescriptionSumAggregateOutputType | null
    _min: OccDescriptionMinAggregateOutputType | null
    _max: OccDescriptionMaxAggregateOutputType | null
  }

  export type OccDescriptionAvgAggregateOutputType = {
    id: number | null
    id_category: number | null
  }

  export type OccDescriptionSumAggregateOutputType = {
    id: number | null
    id_category: number | null
  }

  export type OccDescriptionMinAggregateOutputType = {
    id: number | null
    id_category: number | null
    object: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdBy: string | null
    modifyBy: string | null
  }

  export type OccDescriptionMaxAggregateOutputType = {
    id: number | null
    id_category: number | null
    object: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdBy: string | null
    modifyBy: string | null
  }

  export type OccDescriptionCountAggregateOutputType = {
    id: number
    id_category: number
    object: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    createdBy: number
    modifyBy: number
    _all: number
  }


  export type OccDescriptionAvgAggregateInputType = {
    id?: true
    id_category?: true
  }

  export type OccDescriptionSumAggregateInputType = {
    id?: true
    id_category?: true
  }

  export type OccDescriptionMinAggregateInputType = {
    id?: true
    id_category?: true
    object?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    modifyBy?: true
  }

  export type OccDescriptionMaxAggregateInputType = {
    id?: true
    id_category?: true
    object?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    modifyBy?: true
  }

  export type OccDescriptionCountAggregateInputType = {
    id?: true
    id_category?: true
    object?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    modifyBy?: true
    _all?: true
  }

  export type OccDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccDescription to aggregate.
     */
    where?: OccDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccDescriptions to fetch.
     */
    orderBy?: OccDescriptionOrderByWithRelationInput | OccDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccDescriptions
    **/
    _count?: true | OccDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccDescriptionMaxAggregateInputType
  }

  export type GetOccDescriptionAggregateType<T extends OccDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOccDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccDescription[P]>
      : GetScalarType<T[P], AggregateOccDescription[P]>
  }




  export type OccDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccDescriptionWhereInput
    orderBy?: OccDescriptionOrderByWithAggregationInput | OccDescriptionOrderByWithAggregationInput[]
    by: OccDescriptionScalarFieldEnum[] | OccDescriptionScalarFieldEnum
    having?: OccDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccDescriptionCountAggregateInputType | true
    _avg?: OccDescriptionAvgAggregateInputType
    _sum?: OccDescriptionSumAggregateInputType
    _min?: OccDescriptionMinAggregateInputType
    _max?: OccDescriptionMaxAggregateInputType
  }

  export type OccDescriptionGroupByOutputType = {
    id: number
    id_category: number
    object: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    createdBy: string
    modifyBy: string | null
    _count: OccDescriptionCountAggregateOutputType | null
    _avg: OccDescriptionAvgAggregateOutputType | null
    _sum: OccDescriptionSumAggregateOutputType | null
    _min: OccDescriptionMinAggregateOutputType | null
    _max: OccDescriptionMaxAggregateOutputType | null
  }

  type GetOccDescriptionGroupByPayload<T extends OccDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], OccDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type OccDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_category?: boolean
    object?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    modifyBy?: boolean
    category?: boolean | OccCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occDescription"]>



  export type OccDescriptionSelectScalar = {
    id?: boolean
    id_category?: boolean
    object?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    modifyBy?: boolean
  }

  export type OccDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_category" | "object" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "modifyBy", ExtArgs["result"]["occDescription"]>
  export type OccDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OccCategoryDefaultArgs<ExtArgs>
  }

  export type $OccDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccDescription"
    objects: {
      category: Prisma.$OccCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_category: number
      object: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      createdBy: string
      modifyBy: string | null
    }, ExtArgs["result"]["occDescription"]>
    composites: {}
  }

  type OccDescriptionGetPayload<S extends boolean | null | undefined | OccDescriptionDefaultArgs> = $Result.GetResult<Prisma.$OccDescriptionPayload, S>

  type OccDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccDescriptionCountAggregateInputType | true
    }

  export interface OccDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccDescription'], meta: { name: 'OccDescription' } }
    /**
     * Find zero or one OccDescription that matches the filter.
     * @param {OccDescriptionFindUniqueArgs} args - Arguments to find a OccDescription
     * @example
     * // Get one OccDescription
     * const occDescription = await prisma.occDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccDescriptionFindUniqueArgs>(args: SelectSubset<T, OccDescriptionFindUniqueArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccDescriptionFindUniqueOrThrowArgs} args - Arguments to find a OccDescription
     * @example
     * // Get one OccDescription
     * const occDescription = await prisma.occDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OccDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionFindFirstArgs} args - Arguments to find a OccDescription
     * @example
     * // Get one OccDescription
     * const occDescription = await prisma.occDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccDescriptionFindFirstArgs>(args?: SelectSubset<T, OccDescriptionFindFirstArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionFindFirstOrThrowArgs} args - Arguments to find a OccDescription
     * @example
     * // Get one OccDescription
     * const occDescription = await prisma.occDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OccDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccDescriptions
     * const occDescriptions = await prisma.occDescription.findMany()
     * 
     * // Get first 10 OccDescriptions
     * const occDescriptions = await prisma.occDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occDescriptionWithIdOnly = await prisma.occDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccDescriptionFindManyArgs>(args?: SelectSubset<T, OccDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccDescription.
     * @param {OccDescriptionCreateArgs} args - Arguments to create a OccDescription.
     * @example
     * // Create one OccDescription
     * const OccDescription = await prisma.occDescription.create({
     *   data: {
     *     // ... data to create a OccDescription
     *   }
     * })
     * 
     */
    create<T extends OccDescriptionCreateArgs>(args: SelectSubset<T, OccDescriptionCreateArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccDescriptions.
     * @param {OccDescriptionCreateManyArgs} args - Arguments to create many OccDescriptions.
     * @example
     * // Create many OccDescriptions
     * const occDescription = await prisma.occDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccDescriptionCreateManyArgs>(args?: SelectSubset<T, OccDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccDescription.
     * @param {OccDescriptionDeleteArgs} args - Arguments to delete one OccDescription.
     * @example
     * // Delete one OccDescription
     * const OccDescription = await prisma.occDescription.delete({
     *   where: {
     *     // ... filter to delete one OccDescription
     *   }
     * })
     * 
     */
    delete<T extends OccDescriptionDeleteArgs>(args: SelectSubset<T, OccDescriptionDeleteArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccDescription.
     * @param {OccDescriptionUpdateArgs} args - Arguments to update one OccDescription.
     * @example
     * // Update one OccDescription
     * const occDescription = await prisma.occDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccDescriptionUpdateArgs>(args: SelectSubset<T, OccDescriptionUpdateArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccDescriptions.
     * @param {OccDescriptionDeleteManyArgs} args - Arguments to filter OccDescriptions to delete.
     * @example
     * // Delete a few OccDescriptions
     * const { count } = await prisma.occDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccDescriptionDeleteManyArgs>(args?: SelectSubset<T, OccDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccDescriptions
     * const occDescription = await prisma.occDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccDescriptionUpdateManyArgs>(args: SelectSubset<T, OccDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccDescription.
     * @param {OccDescriptionUpsertArgs} args - Arguments to update or create a OccDescription.
     * @example
     * // Update or create a OccDescription
     * const occDescription = await prisma.occDescription.upsert({
     *   create: {
     *     // ... data to create a OccDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccDescription we want to update
     *   }
     * })
     */
    upsert<T extends OccDescriptionUpsertArgs>(args: SelectSubset<T, OccDescriptionUpsertArgs<ExtArgs>>): Prisma__OccDescriptionClient<$Result.GetResult<Prisma.$OccDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionCountArgs} args - Arguments to filter OccDescriptions to count.
     * @example
     * // Count the number of OccDescriptions
     * const count = await prisma.occDescription.count({
     *   where: {
     *     // ... the filter for the OccDescriptions we want to count
     *   }
     * })
    **/
    count<T extends OccDescriptionCountArgs>(
      args?: Subset<T, OccDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccDescriptionAggregateArgs>(args: Subset<T, OccDescriptionAggregateArgs>): Prisma.PrismaPromise<GetOccDescriptionAggregateType<T>>

    /**
     * Group by OccDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccDescriptionGroupByArgs} args - Group by arguments.
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
      T extends OccDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: OccDescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccDescription model
   */
  readonly fields: OccDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends OccCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccCategoryDefaultArgs<ExtArgs>>): Prisma__OccCategoryClient<$Result.GetResult<Prisma.$OccCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OccDescription model
   */
  interface OccDescriptionFieldRefs {
    readonly id: FieldRef<"OccDescription", 'Int'>
    readonly id_category: FieldRef<"OccDescription", 'Int'>
    readonly object: FieldRef<"OccDescription", 'String'>
    readonly createdAt: FieldRef<"OccDescription", 'DateTime'>
    readonly updatedAt: FieldRef<"OccDescription", 'DateTime'>
    readonly deletedAt: FieldRef<"OccDescription", 'DateTime'>
    readonly createdBy: FieldRef<"OccDescription", 'String'>
    readonly modifyBy: FieldRef<"OccDescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OccDescription findUnique
   */
  export type OccDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which OccDescription to fetch.
     */
    where: OccDescriptionWhereUniqueInput
  }

  /**
   * OccDescription findUniqueOrThrow
   */
  export type OccDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which OccDescription to fetch.
     */
    where: OccDescriptionWhereUniqueInput
  }

  /**
   * OccDescription findFirst
   */
  export type OccDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which OccDescription to fetch.
     */
    where?: OccDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccDescriptions to fetch.
     */
    orderBy?: OccDescriptionOrderByWithRelationInput | OccDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccDescriptions.
     */
    cursor?: OccDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccDescriptions.
     */
    distinct?: OccDescriptionScalarFieldEnum | OccDescriptionScalarFieldEnum[]
  }

  /**
   * OccDescription findFirstOrThrow
   */
  export type OccDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which OccDescription to fetch.
     */
    where?: OccDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccDescriptions to fetch.
     */
    orderBy?: OccDescriptionOrderByWithRelationInput | OccDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccDescriptions.
     */
    cursor?: OccDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccDescriptions.
     */
    distinct?: OccDescriptionScalarFieldEnum | OccDescriptionScalarFieldEnum[]
  }

  /**
   * OccDescription findMany
   */
  export type OccDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which OccDescriptions to fetch.
     */
    where?: OccDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccDescriptions to fetch.
     */
    orderBy?: OccDescriptionOrderByWithRelationInput | OccDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccDescriptions.
     */
    cursor?: OccDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccDescriptions.
     */
    skip?: number
    distinct?: OccDescriptionScalarFieldEnum | OccDescriptionScalarFieldEnum[]
  }

  /**
   * OccDescription create
   */
  export type OccDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a OccDescription.
     */
    data: XOR<OccDescriptionCreateInput, OccDescriptionUncheckedCreateInput>
  }

  /**
   * OccDescription createMany
   */
  export type OccDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccDescriptions.
     */
    data: OccDescriptionCreateManyInput | OccDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccDescription update
   */
  export type OccDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a OccDescription.
     */
    data: XOR<OccDescriptionUpdateInput, OccDescriptionUncheckedUpdateInput>
    /**
     * Choose, which OccDescription to update.
     */
    where: OccDescriptionWhereUniqueInput
  }

  /**
   * OccDescription updateMany
   */
  export type OccDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccDescriptions.
     */
    data: XOR<OccDescriptionUpdateManyMutationInput, OccDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which OccDescriptions to update
     */
    where?: OccDescriptionWhereInput
    /**
     * Limit how many OccDescriptions to update.
     */
    limit?: number
  }

  /**
   * OccDescription upsert
   */
  export type OccDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the OccDescription to update in case it exists.
     */
    where: OccDescriptionWhereUniqueInput
    /**
     * In case the OccDescription found by the `where` argument doesn't exist, create a new OccDescription with this data.
     */
    create: XOR<OccDescriptionCreateInput, OccDescriptionUncheckedCreateInput>
    /**
     * In case the OccDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccDescriptionUpdateInput, OccDescriptionUncheckedUpdateInput>
  }

  /**
   * OccDescription delete
   */
  export type OccDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
    /**
     * Filter which OccDescription to delete.
     */
    where: OccDescriptionWhereUniqueInput
  }

  /**
   * OccDescription deleteMany
   */
  export type OccDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccDescriptions to delete
     */
    where?: OccDescriptionWhereInput
    /**
     * Limit how many OccDescriptions to delete.
     */
    limit?: number
  }

  /**
   * OccDescription without action
   */
  export type OccDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccDescription
     */
    select?: OccDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccDescription
     */
    omit?: OccDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccDescriptionInclude<ExtArgs> | null
  }


  /**
   * Model OccIssue
   */

  export type AggregateOccIssue = {
    _count: OccIssueCountAggregateOutputType | null
    _avg: OccIssueAvgAggregateOutputType | null
    _sum: OccIssueSumAggregateOutputType | null
    _min: OccIssueMinAggregateOutputType | null
    _max: OccIssueMaxAggregateOutputType | null
  }

  export type OccIssueAvgAggregateOutputType = {
    id: number | null
  }

  export type OccIssueSumAggregateOutputType = {
    id: number | null
  }

  export type OccIssueMinAggregateOutputType = {
    id: number | null
    ticket: string | null
    category: string | null
    lokasi: string | null
    description: string | null
    gate: string | null
    action: string | null
    foto_in: string | null
    foto_out: string | null
    number_plate: string | null
    TrxNo: string | null
    status: $Enums.statusIssue | null
    createdBy: string | null
    modifiedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccIssueMaxAggregateOutputType = {
    id: number | null
    ticket: string | null
    category: string | null
    lokasi: string | null
    description: string | null
    gate: string | null
    action: string | null
    foto_in: string | null
    foto_out: string | null
    number_plate: string | null
    TrxNo: string | null
    status: $Enums.statusIssue | null
    createdBy: string | null
    modifiedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccIssueCountAggregateOutputType = {
    id: number
    ticket: number
    category: number
    lokasi: number
    description: number
    gate: number
    action: number
    foto_in: number
    foto_out: number
    number_plate: number
    TrxNo: number
    status: number
    createdBy: number
    modifiedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OccIssueAvgAggregateInputType = {
    id?: true
  }

  export type OccIssueSumAggregateInputType = {
    id?: true
  }

  export type OccIssueMinAggregateInputType = {
    id?: true
    ticket?: true
    category?: true
    lokasi?: true
    description?: true
    gate?: true
    action?: true
    foto_in?: true
    foto_out?: true
    number_plate?: true
    TrxNo?: true
    status?: true
    createdBy?: true
    modifiedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccIssueMaxAggregateInputType = {
    id?: true
    ticket?: true
    category?: true
    lokasi?: true
    description?: true
    gate?: true
    action?: true
    foto_in?: true
    foto_out?: true
    number_plate?: true
    TrxNo?: true
    status?: true
    createdBy?: true
    modifiedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccIssueCountAggregateInputType = {
    id?: true
    ticket?: true
    category?: true
    lokasi?: true
    description?: true
    gate?: true
    action?: true
    foto_in?: true
    foto_out?: true
    number_plate?: true
    TrxNo?: true
    status?: true
    createdBy?: true
    modifiedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OccIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccIssue to aggregate.
     */
    where?: OccIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIssues to fetch.
     */
    orderBy?: OccIssueOrderByWithRelationInput | OccIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccIssues
    **/
    _count?: true | OccIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccIssueMaxAggregateInputType
  }

  export type GetOccIssueAggregateType<T extends OccIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateOccIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccIssue[P]>
      : GetScalarType<T[P], AggregateOccIssue[P]>
  }




  export type OccIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccIssueWhereInput
    orderBy?: OccIssueOrderByWithAggregationInput | OccIssueOrderByWithAggregationInput[]
    by: OccIssueScalarFieldEnum[] | OccIssueScalarFieldEnum
    having?: OccIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccIssueCountAggregateInputType | true
    _avg?: OccIssueAvgAggregateInputType
    _sum?: OccIssueSumAggregateInputType
    _min?: OccIssueMinAggregateInputType
    _max?: OccIssueMaxAggregateInputType
  }

  export type OccIssueGroupByOutputType = {
    id: number
    ticket: string
    category: string | null
    lokasi: string | null
    description: string | null
    gate: string | null
    action: string | null
    foto_in: string | null
    foto_out: string | null
    number_plate: string | null
    TrxNo: string | null
    status: $Enums.statusIssue
    createdBy: string
    modifiedBy: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OccIssueCountAggregateOutputType | null
    _avg: OccIssueAvgAggregateOutputType | null
    _sum: OccIssueSumAggregateOutputType | null
    _min: OccIssueMinAggregateOutputType | null
    _max: OccIssueMaxAggregateOutputType | null
  }

  type GetOccIssueGroupByPayload<T extends OccIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccIssueGroupByOutputType[P]>
            : GetScalarType<T[P], OccIssueGroupByOutputType[P]>
        }
      >
    >


  export type OccIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket?: boolean
    category?: boolean
    lokasi?: boolean
    description?: boolean
    gate?: boolean
    action?: boolean
    foto_in?: boolean
    foto_out?: boolean
    number_plate?: boolean
    TrxNo?: boolean
    status?: boolean
    createdBy?: boolean
    modifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["occIssue"]>



  export type OccIssueSelectScalar = {
    id?: boolean
    ticket?: boolean
    category?: boolean
    lokasi?: boolean
    description?: boolean
    gate?: boolean
    action?: boolean
    foto_in?: boolean
    foto_out?: boolean
    number_plate?: boolean
    TrxNo?: boolean
    status?: boolean
    createdBy?: boolean
    modifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OccIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticket" | "category" | "lokasi" | "description" | "gate" | "action" | "foto_in" | "foto_out" | "number_plate" | "TrxNo" | "status" | "createdBy" | "modifiedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["occIssue"]>

  export type $OccIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccIssue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticket: string
      category: string | null
      lokasi: string | null
      description: string | null
      gate: string | null
      action: string | null
      foto_in: string | null
      foto_out: string | null
      number_plate: string | null
      TrxNo: string | null
      status: $Enums.statusIssue
      createdBy: string
      modifiedBy: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["occIssue"]>
    composites: {}
  }

  type OccIssueGetPayload<S extends boolean | null | undefined | OccIssueDefaultArgs> = $Result.GetResult<Prisma.$OccIssuePayload, S>

  type OccIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccIssueCountAggregateInputType | true
    }

  export interface OccIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccIssue'], meta: { name: 'OccIssue' } }
    /**
     * Find zero or one OccIssue that matches the filter.
     * @param {OccIssueFindUniqueArgs} args - Arguments to find a OccIssue
     * @example
     * // Get one OccIssue
     * const occIssue = await prisma.occIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccIssueFindUniqueArgs>(args: SelectSubset<T, OccIssueFindUniqueArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccIssueFindUniqueOrThrowArgs} args - Arguments to find a OccIssue
     * @example
     * // Get one OccIssue
     * const occIssue = await prisma.occIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, OccIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueFindFirstArgs} args - Arguments to find a OccIssue
     * @example
     * // Get one OccIssue
     * const occIssue = await prisma.occIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccIssueFindFirstArgs>(args?: SelectSubset<T, OccIssueFindFirstArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueFindFirstOrThrowArgs} args - Arguments to find a OccIssue
     * @example
     * // Get one OccIssue
     * const occIssue = await prisma.occIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, OccIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccIssues
     * const occIssues = await prisma.occIssue.findMany()
     * 
     * // Get first 10 OccIssues
     * const occIssues = await prisma.occIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occIssueWithIdOnly = await prisma.occIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccIssueFindManyArgs>(args?: SelectSubset<T, OccIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccIssue.
     * @param {OccIssueCreateArgs} args - Arguments to create a OccIssue.
     * @example
     * // Create one OccIssue
     * const OccIssue = await prisma.occIssue.create({
     *   data: {
     *     // ... data to create a OccIssue
     *   }
     * })
     * 
     */
    create<T extends OccIssueCreateArgs>(args: SelectSubset<T, OccIssueCreateArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccIssues.
     * @param {OccIssueCreateManyArgs} args - Arguments to create many OccIssues.
     * @example
     * // Create many OccIssues
     * const occIssue = await prisma.occIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccIssueCreateManyArgs>(args?: SelectSubset<T, OccIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccIssue.
     * @param {OccIssueDeleteArgs} args - Arguments to delete one OccIssue.
     * @example
     * // Delete one OccIssue
     * const OccIssue = await prisma.occIssue.delete({
     *   where: {
     *     // ... filter to delete one OccIssue
     *   }
     * })
     * 
     */
    delete<T extends OccIssueDeleteArgs>(args: SelectSubset<T, OccIssueDeleteArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccIssue.
     * @param {OccIssueUpdateArgs} args - Arguments to update one OccIssue.
     * @example
     * // Update one OccIssue
     * const occIssue = await prisma.occIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccIssueUpdateArgs>(args: SelectSubset<T, OccIssueUpdateArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccIssues.
     * @param {OccIssueDeleteManyArgs} args - Arguments to filter OccIssues to delete.
     * @example
     * // Delete a few OccIssues
     * const { count } = await prisma.occIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccIssueDeleteManyArgs>(args?: SelectSubset<T, OccIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccIssues
     * const occIssue = await prisma.occIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccIssueUpdateManyArgs>(args: SelectSubset<T, OccIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccIssue.
     * @param {OccIssueUpsertArgs} args - Arguments to update or create a OccIssue.
     * @example
     * // Update or create a OccIssue
     * const occIssue = await prisma.occIssue.upsert({
     *   create: {
     *     // ... data to create a OccIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccIssue we want to update
     *   }
     * })
     */
    upsert<T extends OccIssueUpsertArgs>(args: SelectSubset<T, OccIssueUpsertArgs<ExtArgs>>): Prisma__OccIssueClient<$Result.GetResult<Prisma.$OccIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueCountArgs} args - Arguments to filter OccIssues to count.
     * @example
     * // Count the number of OccIssues
     * const count = await prisma.occIssue.count({
     *   where: {
     *     // ... the filter for the OccIssues we want to count
     *   }
     * })
    **/
    count<T extends OccIssueCountArgs>(
      args?: Subset<T, OccIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccIssueAggregateArgs>(args: Subset<T, OccIssueAggregateArgs>): Prisma.PrismaPromise<GetOccIssueAggregateType<T>>

    /**
     * Group by OccIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIssueGroupByArgs} args - Group by arguments.
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
      T extends OccIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccIssueGroupByArgs['orderBy'] }
        : { orderBy?: OccIssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccIssue model
   */
  readonly fields: OccIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OccIssue model
   */
  interface OccIssueFieldRefs {
    readonly id: FieldRef<"OccIssue", 'Int'>
    readonly ticket: FieldRef<"OccIssue", 'String'>
    readonly category: FieldRef<"OccIssue", 'String'>
    readonly lokasi: FieldRef<"OccIssue", 'String'>
    readonly description: FieldRef<"OccIssue", 'String'>
    readonly gate: FieldRef<"OccIssue", 'String'>
    readonly action: FieldRef<"OccIssue", 'String'>
    readonly foto_in: FieldRef<"OccIssue", 'String'>
    readonly foto_out: FieldRef<"OccIssue", 'String'>
    readonly number_plate: FieldRef<"OccIssue", 'String'>
    readonly TrxNo: FieldRef<"OccIssue", 'String'>
    readonly status: FieldRef<"OccIssue", 'statusIssue'>
    readonly createdBy: FieldRef<"OccIssue", 'String'>
    readonly modifiedBy: FieldRef<"OccIssue", 'String'>
    readonly createdAt: FieldRef<"OccIssue", 'DateTime'>
    readonly updatedAt: FieldRef<"OccIssue", 'DateTime'>
    readonly deletedAt: FieldRef<"OccIssue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OccIssue findUnique
   */
  export type OccIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter, which OccIssue to fetch.
     */
    where: OccIssueWhereUniqueInput
  }

  /**
   * OccIssue findUniqueOrThrow
   */
  export type OccIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter, which OccIssue to fetch.
     */
    where: OccIssueWhereUniqueInput
  }

  /**
   * OccIssue findFirst
   */
  export type OccIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter, which OccIssue to fetch.
     */
    where?: OccIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIssues to fetch.
     */
    orderBy?: OccIssueOrderByWithRelationInput | OccIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccIssues.
     */
    cursor?: OccIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccIssues.
     */
    distinct?: OccIssueScalarFieldEnum | OccIssueScalarFieldEnum[]
  }

  /**
   * OccIssue findFirstOrThrow
   */
  export type OccIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter, which OccIssue to fetch.
     */
    where?: OccIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIssues to fetch.
     */
    orderBy?: OccIssueOrderByWithRelationInput | OccIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccIssues.
     */
    cursor?: OccIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccIssues.
     */
    distinct?: OccIssueScalarFieldEnum | OccIssueScalarFieldEnum[]
  }

  /**
   * OccIssue findMany
   */
  export type OccIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter, which OccIssues to fetch.
     */
    where?: OccIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIssues to fetch.
     */
    orderBy?: OccIssueOrderByWithRelationInput | OccIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccIssues.
     */
    cursor?: OccIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIssues.
     */
    skip?: number
    distinct?: OccIssueScalarFieldEnum | OccIssueScalarFieldEnum[]
  }

  /**
   * OccIssue create
   */
  export type OccIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * The data needed to create a OccIssue.
     */
    data: XOR<OccIssueCreateInput, OccIssueUncheckedCreateInput>
  }

  /**
   * OccIssue createMany
   */
  export type OccIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccIssues.
     */
    data: OccIssueCreateManyInput | OccIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccIssue update
   */
  export type OccIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * The data needed to update a OccIssue.
     */
    data: XOR<OccIssueUpdateInput, OccIssueUncheckedUpdateInput>
    /**
     * Choose, which OccIssue to update.
     */
    where: OccIssueWhereUniqueInput
  }

  /**
   * OccIssue updateMany
   */
  export type OccIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccIssues.
     */
    data: XOR<OccIssueUpdateManyMutationInput, OccIssueUncheckedUpdateManyInput>
    /**
     * Filter which OccIssues to update
     */
    where?: OccIssueWhereInput
    /**
     * Limit how many OccIssues to update.
     */
    limit?: number
  }

  /**
   * OccIssue upsert
   */
  export type OccIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * The filter to search for the OccIssue to update in case it exists.
     */
    where: OccIssueWhereUniqueInput
    /**
     * In case the OccIssue found by the `where` argument doesn't exist, create a new OccIssue with this data.
     */
    create: XOR<OccIssueCreateInput, OccIssueUncheckedCreateInput>
    /**
     * In case the OccIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccIssueUpdateInput, OccIssueUncheckedUpdateInput>
  }

  /**
   * OccIssue delete
   */
  export type OccIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
    /**
     * Filter which OccIssue to delete.
     */
    where: OccIssueWhereUniqueInput
  }

  /**
   * OccIssue deleteMany
   */
  export type OccIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccIssues to delete
     */
    where?: OccIssueWhereInput
    /**
     * Limit how many OccIssues to delete.
     */
    limit?: number
  }

  /**
   * OccIssue without action
   */
  export type OccIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIssue
     */
    select?: OccIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIssue
     */
    omit?: OccIssueOmit<ExtArgs> | null
  }


  /**
   * Model OccRefLocation
   */

  export type AggregateOccRefLocation = {
    _count: OccRefLocationCountAggregateOutputType | null
    _avg: OccRefLocationAvgAggregateOutputType | null
    _sum: OccRefLocationSumAggregateOutputType | null
    _min: OccRefLocationMinAggregateOutputType | null
    _max: OccRefLocationMaxAggregateOutputType | null
  }

  export type OccRefLocationAvgAggregateOutputType = {
    id: number | null
    DateNext: number | null
  }

  export type OccRefLocationSumAggregateOutputType = {
    id: number | null
    DateNext: number | null
  }

  export type OccRefLocationMinAggregateOutputType = {
    id: number | null
    Code: string | null
    Name: string | null
    Region: string | null
    Vendor: string | null
    VendorParkingCode: string | null
    ShortName: string | null
    Address: string | null
    StartTime: Date | null
    EndTime: Date | null
    DateNext: number | null
    TimeZone: string | null
    UrlServer: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    recordStatus: $Enums.record | null
  }

  export type OccRefLocationMaxAggregateOutputType = {
    id: number | null
    Code: string | null
    Name: string | null
    Region: string | null
    Vendor: string | null
    VendorParkingCode: string | null
    ShortName: string | null
    Address: string | null
    StartTime: Date | null
    EndTime: Date | null
    DateNext: number | null
    TimeZone: string | null
    UrlServer: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    recordStatus: $Enums.record | null
  }

  export type OccRefLocationCountAggregateOutputType = {
    id: number
    Code: number
    Name: number
    Region: number
    Vendor: number
    VendorParkingCode: number
    ShortName: number
    Address: number
    StartTime: number
    EndTime: number
    DateNext: number
    TimeZone: number
    UrlServer: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    recordStatus: number
    _all: number
  }


  export type OccRefLocationAvgAggregateInputType = {
    id?: true
    DateNext?: true
  }

  export type OccRefLocationSumAggregateInputType = {
    id?: true
    DateNext?: true
  }

  export type OccRefLocationMinAggregateInputType = {
    id?: true
    Code?: true
    Name?: true
    Region?: true
    Vendor?: true
    VendorParkingCode?: true
    ShortName?: true
    Address?: true
    StartTime?: true
    EndTime?: true
    DateNext?: true
    TimeZone?: true
    UrlServer?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    recordStatus?: true
  }

  export type OccRefLocationMaxAggregateInputType = {
    id?: true
    Code?: true
    Name?: true
    Region?: true
    Vendor?: true
    VendorParkingCode?: true
    ShortName?: true
    Address?: true
    StartTime?: true
    EndTime?: true
    DateNext?: true
    TimeZone?: true
    UrlServer?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    recordStatus?: true
  }

  export type OccRefLocationCountAggregateInputType = {
    id?: true
    Code?: true
    Name?: true
    Region?: true
    Vendor?: true
    VendorParkingCode?: true
    ShortName?: true
    Address?: true
    StartTime?: true
    EndTime?: true
    DateNext?: true
    TimeZone?: true
    UrlServer?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    recordStatus?: true
    _all?: true
  }

  export type OccRefLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccRefLocation to aggregate.
     */
    where?: OccRefLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccRefLocations to fetch.
     */
    orderBy?: OccRefLocationOrderByWithRelationInput | OccRefLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccRefLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccRefLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccRefLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccRefLocations
    **/
    _count?: true | OccRefLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccRefLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccRefLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccRefLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccRefLocationMaxAggregateInputType
  }

  export type GetOccRefLocationAggregateType<T extends OccRefLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateOccRefLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccRefLocation[P]>
      : GetScalarType<T[P], AggregateOccRefLocation[P]>
  }




  export type OccRefLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccRefLocationWhereInput
    orderBy?: OccRefLocationOrderByWithAggregationInput | OccRefLocationOrderByWithAggregationInput[]
    by: OccRefLocationScalarFieldEnum[] | OccRefLocationScalarFieldEnum
    having?: OccRefLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccRefLocationCountAggregateInputType | true
    _avg?: OccRefLocationAvgAggregateInputType
    _sum?: OccRefLocationSumAggregateInputType
    _min?: OccRefLocationMinAggregateInputType
    _max?: OccRefLocationMaxAggregateInputType
  }

  export type OccRefLocationGroupByOutputType = {
    id: number
    Code: string
    Name: string
    Region: string | null
    Vendor: string | null
    VendorParkingCode: string | null
    ShortName: string | null
    Address: string | null
    StartTime: Date | null
    EndTime: Date | null
    DateNext: number | null
    TimeZone: string | null
    UrlServer: string | null
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    recordStatus: $Enums.record
    _count: OccRefLocationCountAggregateOutputType | null
    _avg: OccRefLocationAvgAggregateOutputType | null
    _sum: OccRefLocationSumAggregateOutputType | null
    _min: OccRefLocationMinAggregateOutputType | null
    _max: OccRefLocationMaxAggregateOutputType | null
  }

  type GetOccRefLocationGroupByPayload<T extends OccRefLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccRefLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccRefLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccRefLocationGroupByOutputType[P]>
            : GetScalarType<T[P], OccRefLocationGroupByOutputType[P]>
        }
      >
    >


  export type OccRefLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Code?: boolean
    Name?: boolean
    Region?: boolean
    Vendor?: boolean
    VendorParkingCode?: boolean
    ShortName?: boolean
    Address?: boolean
    StartTime?: boolean
    EndTime?: boolean
    DateNext?: boolean
    TimeZone?: boolean
    UrlServer?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    recordStatus?: boolean
    location?: boolean | OccRefLocation$locationArgs<ExtArgs>
    _count?: boolean | OccRefLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occRefLocation"]>



  export type OccRefLocationSelectScalar = {
    id?: boolean
    Code?: boolean
    Name?: boolean
    Region?: boolean
    Vendor?: boolean
    VendorParkingCode?: boolean
    ShortName?: boolean
    Address?: boolean
    StartTime?: boolean
    EndTime?: boolean
    DateNext?: boolean
    TimeZone?: boolean
    UrlServer?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    recordStatus?: boolean
  }

  export type OccRefLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Code" | "Name" | "Region" | "Vendor" | "VendorParkingCode" | "ShortName" | "Address" | "StartTime" | "EndTime" | "DateNext" | "TimeZone" | "UrlServer" | "CreatedAt" | "UpdatedAt" | "DeletedAt" | "recordStatus", ExtArgs["result"]["occRefLocation"]>
  export type OccRefLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | OccRefLocation$locationArgs<ExtArgs>
    _count?: boolean | OccRefLocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OccRefLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccRefLocation"
    objects: {
      location: Prisma.$OccGatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Code: string
      Name: string
      Region: string | null
      Vendor: string | null
      VendorParkingCode: string | null
      ShortName: string | null
      Address: string | null
      StartTime: Date | null
      EndTime: Date | null
      DateNext: number | null
      TimeZone: string | null
      UrlServer: string | null
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      recordStatus: $Enums.record
    }, ExtArgs["result"]["occRefLocation"]>
    composites: {}
  }

  type OccRefLocationGetPayload<S extends boolean | null | undefined | OccRefLocationDefaultArgs> = $Result.GetResult<Prisma.$OccRefLocationPayload, S>

  type OccRefLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccRefLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccRefLocationCountAggregateInputType | true
    }

  export interface OccRefLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccRefLocation'], meta: { name: 'OccRefLocation' } }
    /**
     * Find zero or one OccRefLocation that matches the filter.
     * @param {OccRefLocationFindUniqueArgs} args - Arguments to find a OccRefLocation
     * @example
     * // Get one OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccRefLocationFindUniqueArgs>(args: SelectSubset<T, OccRefLocationFindUniqueArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccRefLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccRefLocationFindUniqueOrThrowArgs} args - Arguments to find a OccRefLocation
     * @example
     * // Get one OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccRefLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, OccRefLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccRefLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationFindFirstArgs} args - Arguments to find a OccRefLocation
     * @example
     * // Get one OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccRefLocationFindFirstArgs>(args?: SelectSubset<T, OccRefLocationFindFirstArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccRefLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationFindFirstOrThrowArgs} args - Arguments to find a OccRefLocation
     * @example
     * // Get one OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccRefLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, OccRefLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccRefLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccRefLocations
     * const occRefLocations = await prisma.occRefLocation.findMany()
     * 
     * // Get first 10 OccRefLocations
     * const occRefLocations = await prisma.occRefLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occRefLocationWithIdOnly = await prisma.occRefLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccRefLocationFindManyArgs>(args?: SelectSubset<T, OccRefLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccRefLocation.
     * @param {OccRefLocationCreateArgs} args - Arguments to create a OccRefLocation.
     * @example
     * // Create one OccRefLocation
     * const OccRefLocation = await prisma.occRefLocation.create({
     *   data: {
     *     // ... data to create a OccRefLocation
     *   }
     * })
     * 
     */
    create<T extends OccRefLocationCreateArgs>(args: SelectSubset<T, OccRefLocationCreateArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccRefLocations.
     * @param {OccRefLocationCreateManyArgs} args - Arguments to create many OccRefLocations.
     * @example
     * // Create many OccRefLocations
     * const occRefLocation = await prisma.occRefLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccRefLocationCreateManyArgs>(args?: SelectSubset<T, OccRefLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccRefLocation.
     * @param {OccRefLocationDeleteArgs} args - Arguments to delete one OccRefLocation.
     * @example
     * // Delete one OccRefLocation
     * const OccRefLocation = await prisma.occRefLocation.delete({
     *   where: {
     *     // ... filter to delete one OccRefLocation
     *   }
     * })
     * 
     */
    delete<T extends OccRefLocationDeleteArgs>(args: SelectSubset<T, OccRefLocationDeleteArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccRefLocation.
     * @param {OccRefLocationUpdateArgs} args - Arguments to update one OccRefLocation.
     * @example
     * // Update one OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccRefLocationUpdateArgs>(args: SelectSubset<T, OccRefLocationUpdateArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccRefLocations.
     * @param {OccRefLocationDeleteManyArgs} args - Arguments to filter OccRefLocations to delete.
     * @example
     * // Delete a few OccRefLocations
     * const { count } = await prisma.occRefLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccRefLocationDeleteManyArgs>(args?: SelectSubset<T, OccRefLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccRefLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccRefLocations
     * const occRefLocation = await prisma.occRefLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccRefLocationUpdateManyArgs>(args: SelectSubset<T, OccRefLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccRefLocation.
     * @param {OccRefLocationUpsertArgs} args - Arguments to update or create a OccRefLocation.
     * @example
     * // Update or create a OccRefLocation
     * const occRefLocation = await prisma.occRefLocation.upsert({
     *   create: {
     *     // ... data to create a OccRefLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccRefLocation we want to update
     *   }
     * })
     */
    upsert<T extends OccRefLocationUpsertArgs>(args: SelectSubset<T, OccRefLocationUpsertArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccRefLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationCountArgs} args - Arguments to filter OccRefLocations to count.
     * @example
     * // Count the number of OccRefLocations
     * const count = await prisma.occRefLocation.count({
     *   where: {
     *     // ... the filter for the OccRefLocations we want to count
     *   }
     * })
    **/
    count<T extends OccRefLocationCountArgs>(
      args?: Subset<T, OccRefLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccRefLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccRefLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccRefLocationAggregateArgs>(args: Subset<T, OccRefLocationAggregateArgs>): Prisma.PrismaPromise<GetOccRefLocationAggregateType<T>>

    /**
     * Group by OccRefLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccRefLocationGroupByArgs} args - Group by arguments.
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
      T extends OccRefLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccRefLocationGroupByArgs['orderBy'] }
        : { orderBy?: OccRefLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccRefLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccRefLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccRefLocation model
   */
  readonly fields: OccRefLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccRefLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccRefLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends OccRefLocation$locationArgs<ExtArgs> = {}>(args?: Subset<T, OccRefLocation$locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OccRefLocation model
   */
  interface OccRefLocationFieldRefs {
    readonly id: FieldRef<"OccRefLocation", 'Int'>
    readonly Code: FieldRef<"OccRefLocation", 'String'>
    readonly Name: FieldRef<"OccRefLocation", 'String'>
    readonly Region: FieldRef<"OccRefLocation", 'String'>
    readonly Vendor: FieldRef<"OccRefLocation", 'String'>
    readonly VendorParkingCode: FieldRef<"OccRefLocation", 'String'>
    readonly ShortName: FieldRef<"OccRefLocation", 'String'>
    readonly Address: FieldRef<"OccRefLocation", 'String'>
    readonly StartTime: FieldRef<"OccRefLocation", 'DateTime'>
    readonly EndTime: FieldRef<"OccRefLocation", 'DateTime'>
    readonly DateNext: FieldRef<"OccRefLocation", 'Int'>
    readonly TimeZone: FieldRef<"OccRefLocation", 'String'>
    readonly UrlServer: FieldRef<"OccRefLocation", 'String'>
    readonly CreatedAt: FieldRef<"OccRefLocation", 'DateTime'>
    readonly UpdatedAt: FieldRef<"OccRefLocation", 'DateTime'>
    readonly DeletedAt: FieldRef<"OccRefLocation", 'DateTime'>
    readonly recordStatus: FieldRef<"OccRefLocation", 'record'>
  }
    

  // Custom InputTypes
  /**
   * OccRefLocation findUnique
   */
  export type OccRefLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter, which OccRefLocation to fetch.
     */
    where: OccRefLocationWhereUniqueInput
  }

  /**
   * OccRefLocation findUniqueOrThrow
   */
  export type OccRefLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter, which OccRefLocation to fetch.
     */
    where: OccRefLocationWhereUniqueInput
  }

  /**
   * OccRefLocation findFirst
   */
  export type OccRefLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter, which OccRefLocation to fetch.
     */
    where?: OccRefLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccRefLocations to fetch.
     */
    orderBy?: OccRefLocationOrderByWithRelationInput | OccRefLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccRefLocations.
     */
    cursor?: OccRefLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccRefLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccRefLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccRefLocations.
     */
    distinct?: OccRefLocationScalarFieldEnum | OccRefLocationScalarFieldEnum[]
  }

  /**
   * OccRefLocation findFirstOrThrow
   */
  export type OccRefLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter, which OccRefLocation to fetch.
     */
    where?: OccRefLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccRefLocations to fetch.
     */
    orderBy?: OccRefLocationOrderByWithRelationInput | OccRefLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccRefLocations.
     */
    cursor?: OccRefLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccRefLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccRefLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccRefLocations.
     */
    distinct?: OccRefLocationScalarFieldEnum | OccRefLocationScalarFieldEnum[]
  }

  /**
   * OccRefLocation findMany
   */
  export type OccRefLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter, which OccRefLocations to fetch.
     */
    where?: OccRefLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccRefLocations to fetch.
     */
    orderBy?: OccRefLocationOrderByWithRelationInput | OccRefLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccRefLocations.
     */
    cursor?: OccRefLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccRefLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccRefLocations.
     */
    skip?: number
    distinct?: OccRefLocationScalarFieldEnum | OccRefLocationScalarFieldEnum[]
  }

  /**
   * OccRefLocation create
   */
  export type OccRefLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a OccRefLocation.
     */
    data: XOR<OccRefLocationCreateInput, OccRefLocationUncheckedCreateInput>
  }

  /**
   * OccRefLocation createMany
   */
  export type OccRefLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccRefLocations.
     */
    data: OccRefLocationCreateManyInput | OccRefLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccRefLocation update
   */
  export type OccRefLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a OccRefLocation.
     */
    data: XOR<OccRefLocationUpdateInput, OccRefLocationUncheckedUpdateInput>
    /**
     * Choose, which OccRefLocation to update.
     */
    where: OccRefLocationWhereUniqueInput
  }

  /**
   * OccRefLocation updateMany
   */
  export type OccRefLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccRefLocations.
     */
    data: XOR<OccRefLocationUpdateManyMutationInput, OccRefLocationUncheckedUpdateManyInput>
    /**
     * Filter which OccRefLocations to update
     */
    where?: OccRefLocationWhereInput
    /**
     * Limit how many OccRefLocations to update.
     */
    limit?: number
  }

  /**
   * OccRefLocation upsert
   */
  export type OccRefLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the OccRefLocation to update in case it exists.
     */
    where: OccRefLocationWhereUniqueInput
    /**
     * In case the OccRefLocation found by the `where` argument doesn't exist, create a new OccRefLocation with this data.
     */
    create: XOR<OccRefLocationCreateInput, OccRefLocationUncheckedCreateInput>
    /**
     * In case the OccRefLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccRefLocationUpdateInput, OccRefLocationUncheckedUpdateInput>
  }

  /**
   * OccRefLocation delete
   */
  export type OccRefLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
    /**
     * Filter which OccRefLocation to delete.
     */
    where: OccRefLocationWhereUniqueInput
  }

  /**
   * OccRefLocation deleteMany
   */
  export type OccRefLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccRefLocations to delete
     */
    where?: OccRefLocationWhereInput
    /**
     * Limit how many OccRefLocations to delete.
     */
    limit?: number
  }

  /**
   * OccRefLocation.location
   */
  export type OccRefLocation$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    where?: OccGateWhereInput
    orderBy?: OccGateOrderByWithRelationInput | OccGateOrderByWithRelationInput[]
    cursor?: OccGateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccGateScalarFieldEnum | OccGateScalarFieldEnum[]
  }

  /**
   * OccRefLocation without action
   */
  export type OccRefLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccRefLocation
     */
    select?: OccRefLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccRefLocation
     */
    omit?: OccRefLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccRefLocationInclude<ExtArgs> | null
  }


  /**
   * Model OccTransaction
   */

  export type AggregateOccTransaction = {
    _count: OccTransactionCountAggregateOutputType | null
    _avg: OccTransactionAvgAggregateOutputType | null
    _sum: OccTransactionSumAggregateOutputType | null
    _min: OccTransactionMinAggregateOutputType | null
    _max: OccTransactionMaxAggregateOutputType | null
  }

  export type OccTransactionAvgAggregateOutputType = {
    Id: number | null
  }

  export type OccTransactionSumAggregateOutputType = {
    Id: number | null
  }

  export type OccTransactionMinAggregateOutputType = {
    Id: number | null
    PlateNumberIn: string | null
    PlateNumberOut: string | null
    PathIn: string | null
    PathOut: string | null
    Location: string | null
    GateName: string | null
    InTime: Date | null
    OutTime: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type OccTransactionMaxAggregateOutputType = {
    Id: number | null
    PlateNumberIn: string | null
    PlateNumberOut: string | null
    PathIn: string | null
    PathOut: string | null
    Location: string | null
    GateName: string | null
    InTime: Date | null
    OutTime: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type OccTransactionCountAggregateOutputType = {
    Id: number
    PlateNumberIn: number
    PlateNumberOut: number
    PathIn: number
    PathOut: number
    Location: number
    GateName: number
    InTime: number
    OutTime: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type OccTransactionAvgAggregateInputType = {
    Id?: true
  }

  export type OccTransactionSumAggregateInputType = {
    Id?: true
  }

  export type OccTransactionMinAggregateInputType = {
    Id?: true
    PlateNumberIn?: true
    PlateNumberOut?: true
    PathIn?: true
    PathOut?: true
    Location?: true
    GateName?: true
    InTime?: true
    OutTime?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type OccTransactionMaxAggregateInputType = {
    Id?: true
    PlateNumberIn?: true
    PlateNumberOut?: true
    PathIn?: true
    PathOut?: true
    Location?: true
    GateName?: true
    InTime?: true
    OutTime?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type OccTransactionCountAggregateInputType = {
    Id?: true
    PlateNumberIn?: true
    PlateNumberOut?: true
    PathIn?: true
    PathOut?: true
    Location?: true
    GateName?: true
    InTime?: true
    OutTime?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type OccTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccTransaction to aggregate.
     */
    where?: OccTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccTransactions to fetch.
     */
    orderBy?: OccTransactionOrderByWithRelationInput | OccTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccTransactions
    **/
    _count?: true | OccTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccTransactionMaxAggregateInputType
  }

  export type GetOccTransactionAggregateType<T extends OccTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOccTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccTransaction[P]>
      : GetScalarType<T[P], AggregateOccTransaction[P]>
  }




  export type OccTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccTransactionWhereInput
    orderBy?: OccTransactionOrderByWithAggregationInput | OccTransactionOrderByWithAggregationInput[]
    by: OccTransactionScalarFieldEnum[] | OccTransactionScalarFieldEnum
    having?: OccTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccTransactionCountAggregateInputType | true
    _avg?: OccTransactionAvgAggregateInputType
    _sum?: OccTransactionSumAggregateInputType
    _min?: OccTransactionMinAggregateInputType
    _max?: OccTransactionMaxAggregateInputType
  }

  export type OccTransactionGroupByOutputType = {
    Id: number
    PlateNumberIn: string
    PlateNumberOut: string | null
    PathIn: string
    PathOut: string | null
    Location: string | null
    GateName: string | null
    InTime: Date | null
    OutTime: Date | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: OccTransactionCountAggregateOutputType | null
    _avg: OccTransactionAvgAggregateOutputType | null
    _sum: OccTransactionSumAggregateOutputType | null
    _min: OccTransactionMinAggregateOutputType | null
    _max: OccTransactionMaxAggregateOutputType | null
  }

  type GetOccTransactionGroupByPayload<T extends OccTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OccTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OccTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    PlateNumberIn?: boolean
    PlateNumberOut?: boolean
    PathIn?: boolean
    PathOut?: boolean
    Location?: boolean
    GateName?: boolean
    InTime?: boolean
    OutTime?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["occTransaction"]>



  export type OccTransactionSelectScalar = {
    Id?: boolean
    PlateNumberIn?: boolean
    PlateNumberOut?: boolean
    PathIn?: boolean
    PathOut?: boolean
    Location?: boolean
    GateName?: boolean
    InTime?: boolean
    OutTime?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type OccTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "PlateNumberIn" | "PlateNumberOut" | "PathIn" | "PathOut" | "Location" | "GateName" | "InTime" | "OutTime" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["occTransaction"]>

  export type $OccTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      PlateNumberIn: string
      PlateNumberOut: string | null
      PathIn: string
      PathOut: string | null
      Location: string | null
      GateName: string | null
      InTime: Date | null
      OutTime: Date | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["occTransaction"]>
    composites: {}
  }

  type OccTransactionGetPayload<S extends boolean | null | undefined | OccTransactionDefaultArgs> = $Result.GetResult<Prisma.$OccTransactionPayload, S>

  type OccTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccTransactionCountAggregateInputType | true
    }

  export interface OccTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccTransaction'], meta: { name: 'OccTransaction' } }
    /**
     * Find zero or one OccTransaction that matches the filter.
     * @param {OccTransactionFindUniqueArgs} args - Arguments to find a OccTransaction
     * @example
     * // Get one OccTransaction
     * const occTransaction = await prisma.occTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccTransactionFindUniqueArgs>(args: SelectSubset<T, OccTransactionFindUniqueArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccTransactionFindUniqueOrThrowArgs} args - Arguments to find a OccTransaction
     * @example
     * // Get one OccTransaction
     * const occTransaction = await prisma.occTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OccTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionFindFirstArgs} args - Arguments to find a OccTransaction
     * @example
     * // Get one OccTransaction
     * const occTransaction = await prisma.occTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccTransactionFindFirstArgs>(args?: SelectSubset<T, OccTransactionFindFirstArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionFindFirstOrThrowArgs} args - Arguments to find a OccTransaction
     * @example
     * // Get one OccTransaction
     * const occTransaction = await prisma.occTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OccTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccTransactions
     * const occTransactions = await prisma.occTransaction.findMany()
     * 
     * // Get first 10 OccTransactions
     * const occTransactions = await prisma.occTransaction.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const occTransactionWithIdOnly = await prisma.occTransaction.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends OccTransactionFindManyArgs>(args?: SelectSubset<T, OccTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccTransaction.
     * @param {OccTransactionCreateArgs} args - Arguments to create a OccTransaction.
     * @example
     * // Create one OccTransaction
     * const OccTransaction = await prisma.occTransaction.create({
     *   data: {
     *     // ... data to create a OccTransaction
     *   }
     * })
     * 
     */
    create<T extends OccTransactionCreateArgs>(args: SelectSubset<T, OccTransactionCreateArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccTransactions.
     * @param {OccTransactionCreateManyArgs} args - Arguments to create many OccTransactions.
     * @example
     * // Create many OccTransactions
     * const occTransaction = await prisma.occTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccTransactionCreateManyArgs>(args?: SelectSubset<T, OccTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccTransaction.
     * @param {OccTransactionDeleteArgs} args - Arguments to delete one OccTransaction.
     * @example
     * // Delete one OccTransaction
     * const OccTransaction = await prisma.occTransaction.delete({
     *   where: {
     *     // ... filter to delete one OccTransaction
     *   }
     * })
     * 
     */
    delete<T extends OccTransactionDeleteArgs>(args: SelectSubset<T, OccTransactionDeleteArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccTransaction.
     * @param {OccTransactionUpdateArgs} args - Arguments to update one OccTransaction.
     * @example
     * // Update one OccTransaction
     * const occTransaction = await prisma.occTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccTransactionUpdateArgs>(args: SelectSubset<T, OccTransactionUpdateArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccTransactions.
     * @param {OccTransactionDeleteManyArgs} args - Arguments to filter OccTransactions to delete.
     * @example
     * // Delete a few OccTransactions
     * const { count } = await prisma.occTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccTransactionDeleteManyArgs>(args?: SelectSubset<T, OccTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccTransactions
     * const occTransaction = await prisma.occTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccTransactionUpdateManyArgs>(args: SelectSubset<T, OccTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccTransaction.
     * @param {OccTransactionUpsertArgs} args - Arguments to update or create a OccTransaction.
     * @example
     * // Update or create a OccTransaction
     * const occTransaction = await prisma.occTransaction.upsert({
     *   create: {
     *     // ... data to create a OccTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OccTransactionUpsertArgs>(args: SelectSubset<T, OccTransactionUpsertArgs<ExtArgs>>): Prisma__OccTransactionClient<$Result.GetResult<Prisma.$OccTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionCountArgs} args - Arguments to filter OccTransactions to count.
     * @example
     * // Count the number of OccTransactions
     * const count = await prisma.occTransaction.count({
     *   where: {
     *     // ... the filter for the OccTransactions we want to count
     *   }
     * })
    **/
    count<T extends OccTransactionCountArgs>(
      args?: Subset<T, OccTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccTransactionAggregateArgs>(args: Subset<T, OccTransactionAggregateArgs>): Prisma.PrismaPromise<GetOccTransactionAggregateType<T>>

    /**
     * Group by OccTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccTransactionGroupByArgs} args - Group by arguments.
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
      T extends OccTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OccTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccTransaction model
   */
  readonly fields: OccTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OccTransaction model
   */
  interface OccTransactionFieldRefs {
    readonly Id: FieldRef<"OccTransaction", 'Int'>
    readonly PlateNumberIn: FieldRef<"OccTransaction", 'String'>
    readonly PlateNumberOut: FieldRef<"OccTransaction", 'String'>
    readonly PathIn: FieldRef<"OccTransaction", 'String'>
    readonly PathOut: FieldRef<"OccTransaction", 'String'>
    readonly Location: FieldRef<"OccTransaction", 'String'>
    readonly GateName: FieldRef<"OccTransaction", 'String'>
    readonly InTime: FieldRef<"OccTransaction", 'DateTime'>
    readonly OutTime: FieldRef<"OccTransaction", 'DateTime'>
    readonly CreatedAt: FieldRef<"OccTransaction", 'DateTime'>
    readonly UpdatedAt: FieldRef<"OccTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OccTransaction findUnique
   */
  export type OccTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter, which OccTransaction to fetch.
     */
    where: OccTransactionWhereUniqueInput
  }

  /**
   * OccTransaction findUniqueOrThrow
   */
  export type OccTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter, which OccTransaction to fetch.
     */
    where: OccTransactionWhereUniqueInput
  }

  /**
   * OccTransaction findFirst
   */
  export type OccTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter, which OccTransaction to fetch.
     */
    where?: OccTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccTransactions to fetch.
     */
    orderBy?: OccTransactionOrderByWithRelationInput | OccTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccTransactions.
     */
    cursor?: OccTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccTransactions.
     */
    distinct?: OccTransactionScalarFieldEnum | OccTransactionScalarFieldEnum[]
  }

  /**
   * OccTransaction findFirstOrThrow
   */
  export type OccTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter, which OccTransaction to fetch.
     */
    where?: OccTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccTransactions to fetch.
     */
    orderBy?: OccTransactionOrderByWithRelationInput | OccTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccTransactions.
     */
    cursor?: OccTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccTransactions.
     */
    distinct?: OccTransactionScalarFieldEnum | OccTransactionScalarFieldEnum[]
  }

  /**
   * OccTransaction findMany
   */
  export type OccTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter, which OccTransactions to fetch.
     */
    where?: OccTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccTransactions to fetch.
     */
    orderBy?: OccTransactionOrderByWithRelationInput | OccTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccTransactions.
     */
    cursor?: OccTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccTransactions.
     */
    skip?: number
    distinct?: OccTransactionScalarFieldEnum | OccTransactionScalarFieldEnum[]
  }

  /**
   * OccTransaction create
   */
  export type OccTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a OccTransaction.
     */
    data: XOR<OccTransactionCreateInput, OccTransactionUncheckedCreateInput>
  }

  /**
   * OccTransaction createMany
   */
  export type OccTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccTransactions.
     */
    data: OccTransactionCreateManyInput | OccTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccTransaction update
   */
  export type OccTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a OccTransaction.
     */
    data: XOR<OccTransactionUpdateInput, OccTransactionUncheckedUpdateInput>
    /**
     * Choose, which OccTransaction to update.
     */
    where: OccTransactionWhereUniqueInput
  }

  /**
   * OccTransaction updateMany
   */
  export type OccTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccTransactions.
     */
    data: XOR<OccTransactionUpdateManyMutationInput, OccTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OccTransactions to update
     */
    where?: OccTransactionWhereInput
    /**
     * Limit how many OccTransactions to update.
     */
    limit?: number
  }

  /**
   * OccTransaction upsert
   */
  export type OccTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the OccTransaction to update in case it exists.
     */
    where: OccTransactionWhereUniqueInput
    /**
     * In case the OccTransaction found by the `where` argument doesn't exist, create a new OccTransaction with this data.
     */
    create: XOR<OccTransactionCreateInput, OccTransactionUncheckedCreateInput>
    /**
     * In case the OccTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccTransactionUpdateInput, OccTransactionUncheckedUpdateInput>
  }

  /**
   * OccTransaction delete
   */
  export type OccTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
    /**
     * Filter which OccTransaction to delete.
     */
    where: OccTransactionWhereUniqueInput
  }

  /**
   * OccTransaction deleteMany
   */
  export type OccTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccTransactions to delete
     */
    where?: OccTransactionWhereInput
    /**
     * Limit how many OccTransactions to delete.
     */
    limit?: number
  }

  /**
   * OccTransaction without action
   */
  export type OccTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccTransaction
     */
    select?: OccTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccTransaction
     */
    omit?: OccTransactionOmit<ExtArgs> | null
  }


  /**
   * Model OccGate
   */

  export type AggregateOccGate = {
    _count: OccGateCountAggregateOutputType | null
    _avg: OccGateAvgAggregateOutputType | null
    _sum: OccGateSumAggregateOutputType | null
    _min: OccGateMinAggregateOutputType | null
    _max: OccGateMaxAggregateOutputType | null
  }

  export type OccGateAvgAggregateOutputType = {
    id: number | null
    id_location: number | null
    arduino: number | null
    statusGate: number | null
  }

  export type OccGateSumAggregateOutputType = {
    id: number | null
    id_location: number | null
    arduino: number | null
    statusGate: number | null
  }

  export type OccGateMinAggregateOutputType = {
    id: number | null
    id_location: number | null
    gate: string | null
    channel_cctv: string | null
    arduino: number | null
    statusGate: number | null
    id_tele: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccGateMaxAggregateOutputType = {
    id: number | null
    id_location: number | null
    gate: string | null
    channel_cctv: string | null
    arduino: number | null
    statusGate: number | null
    id_tele: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OccGateCountAggregateOutputType = {
    id: number
    id_location: number
    gate: number
    channel_cctv: number
    arduino: number
    statusGate: number
    id_tele: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OccGateAvgAggregateInputType = {
    id?: true
    id_location?: true
    arduino?: true
    statusGate?: true
  }

  export type OccGateSumAggregateInputType = {
    id?: true
    id_location?: true
    arduino?: true
    statusGate?: true
  }

  export type OccGateMinAggregateInputType = {
    id?: true
    id_location?: true
    gate?: true
    channel_cctv?: true
    arduino?: true
    statusGate?: true
    id_tele?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccGateMaxAggregateInputType = {
    id?: true
    id_location?: true
    gate?: true
    channel_cctv?: true
    arduino?: true
    statusGate?: true
    id_tele?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OccGateCountAggregateInputType = {
    id?: true
    id_location?: true
    gate?: true
    channel_cctv?: true
    arduino?: true
    statusGate?: true
    id_tele?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OccGateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccGate to aggregate.
     */
    where?: OccGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccGates to fetch.
     */
    orderBy?: OccGateOrderByWithRelationInput | OccGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccGates
    **/
    _count?: true | OccGateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccGateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccGateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccGateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccGateMaxAggregateInputType
  }

  export type GetOccGateAggregateType<T extends OccGateAggregateArgs> = {
        [P in keyof T & keyof AggregateOccGate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccGate[P]>
      : GetScalarType<T[P], AggregateOccGate[P]>
  }




  export type OccGateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccGateWhereInput
    orderBy?: OccGateOrderByWithAggregationInput | OccGateOrderByWithAggregationInput[]
    by: OccGateScalarFieldEnum[] | OccGateScalarFieldEnum
    having?: OccGateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccGateCountAggregateInputType | true
    _avg?: OccGateAvgAggregateInputType
    _sum?: OccGateSumAggregateInputType
    _min?: OccGateMinAggregateInputType
    _max?: OccGateMaxAggregateInputType
  }

  export type OccGateGroupByOutputType = {
    id: number
    id_location: number
    gate: string
    channel_cctv: string
    arduino: number
    statusGate: number
    id_tele: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OccGateCountAggregateOutputType | null
    _avg: OccGateAvgAggregateOutputType | null
    _sum: OccGateSumAggregateOutputType | null
    _min: OccGateMinAggregateOutputType | null
    _max: OccGateMaxAggregateOutputType | null
  }

  type GetOccGateGroupByPayload<T extends OccGateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccGateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccGateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccGateGroupByOutputType[P]>
            : GetScalarType<T[P], OccGateGroupByOutputType[P]>
        }
      >
    >


  export type OccGateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_location?: boolean
    gate?: boolean
    channel_cctv?: boolean
    arduino?: boolean
    statusGate?: boolean
    id_tele?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    location?: boolean | OccRefLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occGate"]>



  export type OccGateSelectScalar = {
    id?: boolean
    id_location?: boolean
    gate?: boolean
    channel_cctv?: boolean
    arduino?: boolean
    statusGate?: boolean
    id_tele?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OccGateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_location" | "gate" | "channel_cctv" | "arduino" | "statusGate" | "id_tele" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["occGate"]>
  export type OccGateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | OccRefLocationDefaultArgs<ExtArgs>
  }

  export type $OccGatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccGate"
    objects: {
      location: Prisma.$OccRefLocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_location: number
      gate: string
      channel_cctv: string
      arduino: number
      statusGate: number
      id_tele: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["occGate"]>
    composites: {}
  }

  type OccGateGetPayload<S extends boolean | null | undefined | OccGateDefaultArgs> = $Result.GetResult<Prisma.$OccGatePayload, S>

  type OccGateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccGateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccGateCountAggregateInputType | true
    }

  export interface OccGateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccGate'], meta: { name: 'OccGate' } }
    /**
     * Find zero or one OccGate that matches the filter.
     * @param {OccGateFindUniqueArgs} args - Arguments to find a OccGate
     * @example
     * // Get one OccGate
     * const occGate = await prisma.occGate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccGateFindUniqueArgs>(args: SelectSubset<T, OccGateFindUniqueArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccGate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccGateFindUniqueOrThrowArgs} args - Arguments to find a OccGate
     * @example
     * // Get one OccGate
     * const occGate = await prisma.occGate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccGateFindUniqueOrThrowArgs>(args: SelectSubset<T, OccGateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccGate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateFindFirstArgs} args - Arguments to find a OccGate
     * @example
     * // Get one OccGate
     * const occGate = await prisma.occGate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccGateFindFirstArgs>(args?: SelectSubset<T, OccGateFindFirstArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccGate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateFindFirstOrThrowArgs} args - Arguments to find a OccGate
     * @example
     * // Get one OccGate
     * const occGate = await prisma.occGate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccGateFindFirstOrThrowArgs>(args?: SelectSubset<T, OccGateFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccGates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccGates
     * const occGates = await prisma.occGate.findMany()
     * 
     * // Get first 10 OccGates
     * const occGates = await prisma.occGate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occGateWithIdOnly = await prisma.occGate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccGateFindManyArgs>(args?: SelectSubset<T, OccGateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccGate.
     * @param {OccGateCreateArgs} args - Arguments to create a OccGate.
     * @example
     * // Create one OccGate
     * const OccGate = await prisma.occGate.create({
     *   data: {
     *     // ... data to create a OccGate
     *   }
     * })
     * 
     */
    create<T extends OccGateCreateArgs>(args: SelectSubset<T, OccGateCreateArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccGates.
     * @param {OccGateCreateManyArgs} args - Arguments to create many OccGates.
     * @example
     * // Create many OccGates
     * const occGate = await prisma.occGate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccGateCreateManyArgs>(args?: SelectSubset<T, OccGateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccGate.
     * @param {OccGateDeleteArgs} args - Arguments to delete one OccGate.
     * @example
     * // Delete one OccGate
     * const OccGate = await prisma.occGate.delete({
     *   where: {
     *     // ... filter to delete one OccGate
     *   }
     * })
     * 
     */
    delete<T extends OccGateDeleteArgs>(args: SelectSubset<T, OccGateDeleteArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccGate.
     * @param {OccGateUpdateArgs} args - Arguments to update one OccGate.
     * @example
     * // Update one OccGate
     * const occGate = await prisma.occGate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccGateUpdateArgs>(args: SelectSubset<T, OccGateUpdateArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccGates.
     * @param {OccGateDeleteManyArgs} args - Arguments to filter OccGates to delete.
     * @example
     * // Delete a few OccGates
     * const { count } = await prisma.occGate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccGateDeleteManyArgs>(args?: SelectSubset<T, OccGateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccGates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccGates
     * const occGate = await prisma.occGate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccGateUpdateManyArgs>(args: SelectSubset<T, OccGateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccGate.
     * @param {OccGateUpsertArgs} args - Arguments to update or create a OccGate.
     * @example
     * // Update or create a OccGate
     * const occGate = await prisma.occGate.upsert({
     *   create: {
     *     // ... data to create a OccGate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccGate we want to update
     *   }
     * })
     */
    upsert<T extends OccGateUpsertArgs>(args: SelectSubset<T, OccGateUpsertArgs<ExtArgs>>): Prisma__OccGateClient<$Result.GetResult<Prisma.$OccGatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccGates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateCountArgs} args - Arguments to filter OccGates to count.
     * @example
     * // Count the number of OccGates
     * const count = await prisma.occGate.count({
     *   where: {
     *     // ... the filter for the OccGates we want to count
     *   }
     * })
    **/
    count<T extends OccGateCountArgs>(
      args?: Subset<T, OccGateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccGateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccGate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccGateAggregateArgs>(args: Subset<T, OccGateAggregateArgs>): Prisma.PrismaPromise<GetOccGateAggregateType<T>>

    /**
     * Group by OccGate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccGateGroupByArgs} args - Group by arguments.
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
      T extends OccGateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccGateGroupByArgs['orderBy'] }
        : { orderBy?: OccGateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccGateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccGateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccGate model
   */
  readonly fields: OccGateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccGate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccGateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends OccRefLocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccRefLocationDefaultArgs<ExtArgs>>): Prisma__OccRefLocationClient<$Result.GetResult<Prisma.$OccRefLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OccGate model
   */
  interface OccGateFieldRefs {
    readonly id: FieldRef<"OccGate", 'Int'>
    readonly id_location: FieldRef<"OccGate", 'Int'>
    readonly gate: FieldRef<"OccGate", 'String'>
    readonly channel_cctv: FieldRef<"OccGate", 'String'>
    readonly arduino: FieldRef<"OccGate", 'Int'>
    readonly statusGate: FieldRef<"OccGate", 'Int'>
    readonly id_tele: FieldRef<"OccGate", 'String'>
    readonly createdAt: FieldRef<"OccGate", 'DateTime'>
    readonly updatedAt: FieldRef<"OccGate", 'DateTime'>
    readonly deletedAt: FieldRef<"OccGate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OccGate findUnique
   */
  export type OccGateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter, which OccGate to fetch.
     */
    where: OccGateWhereUniqueInput
  }

  /**
   * OccGate findUniqueOrThrow
   */
  export type OccGateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter, which OccGate to fetch.
     */
    where: OccGateWhereUniqueInput
  }

  /**
   * OccGate findFirst
   */
  export type OccGateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter, which OccGate to fetch.
     */
    where?: OccGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccGates to fetch.
     */
    orderBy?: OccGateOrderByWithRelationInput | OccGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccGates.
     */
    cursor?: OccGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccGates.
     */
    distinct?: OccGateScalarFieldEnum | OccGateScalarFieldEnum[]
  }

  /**
   * OccGate findFirstOrThrow
   */
  export type OccGateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter, which OccGate to fetch.
     */
    where?: OccGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccGates to fetch.
     */
    orderBy?: OccGateOrderByWithRelationInput | OccGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccGates.
     */
    cursor?: OccGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccGates.
     */
    distinct?: OccGateScalarFieldEnum | OccGateScalarFieldEnum[]
  }

  /**
   * OccGate findMany
   */
  export type OccGateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter, which OccGates to fetch.
     */
    where?: OccGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccGates to fetch.
     */
    orderBy?: OccGateOrderByWithRelationInput | OccGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccGates.
     */
    cursor?: OccGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccGates.
     */
    skip?: number
    distinct?: OccGateScalarFieldEnum | OccGateScalarFieldEnum[]
  }

  /**
   * OccGate create
   */
  export type OccGateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * The data needed to create a OccGate.
     */
    data: XOR<OccGateCreateInput, OccGateUncheckedCreateInput>
  }

  /**
   * OccGate createMany
   */
  export type OccGateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccGates.
     */
    data: OccGateCreateManyInput | OccGateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccGate update
   */
  export type OccGateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * The data needed to update a OccGate.
     */
    data: XOR<OccGateUpdateInput, OccGateUncheckedUpdateInput>
    /**
     * Choose, which OccGate to update.
     */
    where: OccGateWhereUniqueInput
  }

  /**
   * OccGate updateMany
   */
  export type OccGateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccGates.
     */
    data: XOR<OccGateUpdateManyMutationInput, OccGateUncheckedUpdateManyInput>
    /**
     * Filter which OccGates to update
     */
    where?: OccGateWhereInput
    /**
     * Limit how many OccGates to update.
     */
    limit?: number
  }

  /**
   * OccGate upsert
   */
  export type OccGateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * The filter to search for the OccGate to update in case it exists.
     */
    where: OccGateWhereUniqueInput
    /**
     * In case the OccGate found by the `where` argument doesn't exist, create a new OccGate with this data.
     */
    create: XOR<OccGateCreateInput, OccGateUncheckedCreateInput>
    /**
     * In case the OccGate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccGateUpdateInput, OccGateUncheckedUpdateInput>
  }

  /**
   * OccGate delete
   */
  export type OccGateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
    /**
     * Filter which OccGate to delete.
     */
    where: OccGateWhereUniqueInput
  }

  /**
   * OccGate deleteMany
   */
  export type OccGateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccGates to delete
     */
    where?: OccGateWhereInput
    /**
     * Limit how many OccGates to delete.
     */
    limit?: number
  }

  /**
   * OccGate without action
   */
  export type OccGateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccGate
     */
    select?: OccGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccGate
     */
    omit?: OccGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccGateInclude<ExtArgs> | null
  }


  /**
   * Model OccIntercome
   */

  export type AggregateOccIntercome = {
    _count: OccIntercomeCountAggregateOutputType | null
    _avg: OccIntercomeAvgAggregateOutputType | null
    _sum: OccIntercomeSumAggregateOutputType | null
    _min: OccIntercomeMinAggregateOutputType | null
    _max: OccIntercomeMaxAggregateOutputType | null
  }

  export type OccIntercomeAvgAggregateOutputType = {
    Id: number | null
    Count: number | null
  }

  export type OccIntercomeSumAggregateOutputType = {
    Id: number | null
    Count: number | null
  }

  export type OccIntercomeMinAggregateOutputType = {
    Id: number | null
    GateName: string | null
    Locations: string | null
    Count: number | null
    CreatedAt: Date | null
  }

  export type OccIntercomeMaxAggregateOutputType = {
    Id: number | null
    GateName: string | null
    Locations: string | null
    Count: number | null
    CreatedAt: Date | null
  }

  export type OccIntercomeCountAggregateOutputType = {
    Id: number
    GateName: number
    Locations: number
    Count: number
    CreatedAt: number
    _all: number
  }


  export type OccIntercomeAvgAggregateInputType = {
    Id?: true
    Count?: true
  }

  export type OccIntercomeSumAggregateInputType = {
    Id?: true
    Count?: true
  }

  export type OccIntercomeMinAggregateInputType = {
    Id?: true
    GateName?: true
    Locations?: true
    Count?: true
    CreatedAt?: true
  }

  export type OccIntercomeMaxAggregateInputType = {
    Id?: true
    GateName?: true
    Locations?: true
    Count?: true
    CreatedAt?: true
  }

  export type OccIntercomeCountAggregateInputType = {
    Id?: true
    GateName?: true
    Locations?: true
    Count?: true
    CreatedAt?: true
    _all?: true
  }

  export type OccIntercomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccIntercome to aggregate.
     */
    where?: OccIntercomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIntercomes to fetch.
     */
    orderBy?: OccIntercomeOrderByWithRelationInput | OccIntercomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccIntercomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIntercomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIntercomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccIntercomes
    **/
    _count?: true | OccIntercomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccIntercomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccIntercomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccIntercomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccIntercomeMaxAggregateInputType
  }

  export type GetOccIntercomeAggregateType<T extends OccIntercomeAggregateArgs> = {
        [P in keyof T & keyof AggregateOccIntercome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccIntercome[P]>
      : GetScalarType<T[P], AggregateOccIntercome[P]>
  }




  export type OccIntercomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccIntercomeWhereInput
    orderBy?: OccIntercomeOrderByWithAggregationInput | OccIntercomeOrderByWithAggregationInput[]
    by: OccIntercomeScalarFieldEnum[] | OccIntercomeScalarFieldEnum
    having?: OccIntercomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccIntercomeCountAggregateInputType | true
    _avg?: OccIntercomeAvgAggregateInputType
    _sum?: OccIntercomeSumAggregateInputType
    _min?: OccIntercomeMinAggregateInputType
    _max?: OccIntercomeMaxAggregateInputType
  }

  export type OccIntercomeGroupByOutputType = {
    Id: number
    GateName: string
    Locations: string
    Count: number
    CreatedAt: Date
    _count: OccIntercomeCountAggregateOutputType | null
    _avg: OccIntercomeAvgAggregateOutputType | null
    _sum: OccIntercomeSumAggregateOutputType | null
    _min: OccIntercomeMinAggregateOutputType | null
    _max: OccIntercomeMaxAggregateOutputType | null
  }

  type GetOccIntercomeGroupByPayload<T extends OccIntercomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccIntercomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccIntercomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccIntercomeGroupByOutputType[P]>
            : GetScalarType<T[P], OccIntercomeGroupByOutputType[P]>
        }
      >
    >


  export type OccIntercomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    GateName?: boolean
    Locations?: boolean
    Count?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["occIntercome"]>



  export type OccIntercomeSelectScalar = {
    Id?: boolean
    GateName?: boolean
    Locations?: boolean
    Count?: boolean
    CreatedAt?: boolean
  }

  export type OccIntercomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "GateName" | "Locations" | "Count" | "CreatedAt", ExtArgs["result"]["occIntercome"]>

  export type $OccIntercomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccIntercome"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      GateName: string
      Locations: string
      Count: number
      CreatedAt: Date
    }, ExtArgs["result"]["occIntercome"]>
    composites: {}
  }

  type OccIntercomeGetPayload<S extends boolean | null | undefined | OccIntercomeDefaultArgs> = $Result.GetResult<Prisma.$OccIntercomePayload, S>

  type OccIntercomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccIntercomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccIntercomeCountAggregateInputType | true
    }

  export interface OccIntercomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccIntercome'], meta: { name: 'OccIntercome' } }
    /**
     * Find zero or one OccIntercome that matches the filter.
     * @param {OccIntercomeFindUniqueArgs} args - Arguments to find a OccIntercome
     * @example
     * // Get one OccIntercome
     * const occIntercome = await prisma.occIntercome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccIntercomeFindUniqueArgs>(args: SelectSubset<T, OccIntercomeFindUniqueArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccIntercome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccIntercomeFindUniqueOrThrowArgs} args - Arguments to find a OccIntercome
     * @example
     * // Get one OccIntercome
     * const occIntercome = await prisma.occIntercome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccIntercomeFindUniqueOrThrowArgs>(args: SelectSubset<T, OccIntercomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccIntercome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeFindFirstArgs} args - Arguments to find a OccIntercome
     * @example
     * // Get one OccIntercome
     * const occIntercome = await prisma.occIntercome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccIntercomeFindFirstArgs>(args?: SelectSubset<T, OccIntercomeFindFirstArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccIntercome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeFindFirstOrThrowArgs} args - Arguments to find a OccIntercome
     * @example
     * // Get one OccIntercome
     * const occIntercome = await prisma.occIntercome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccIntercomeFindFirstOrThrowArgs>(args?: SelectSubset<T, OccIntercomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccIntercomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccIntercomes
     * const occIntercomes = await prisma.occIntercome.findMany()
     * 
     * // Get first 10 OccIntercomes
     * const occIntercomes = await prisma.occIntercome.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const occIntercomeWithIdOnly = await prisma.occIntercome.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends OccIntercomeFindManyArgs>(args?: SelectSubset<T, OccIntercomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccIntercome.
     * @param {OccIntercomeCreateArgs} args - Arguments to create a OccIntercome.
     * @example
     * // Create one OccIntercome
     * const OccIntercome = await prisma.occIntercome.create({
     *   data: {
     *     // ... data to create a OccIntercome
     *   }
     * })
     * 
     */
    create<T extends OccIntercomeCreateArgs>(args: SelectSubset<T, OccIntercomeCreateArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccIntercomes.
     * @param {OccIntercomeCreateManyArgs} args - Arguments to create many OccIntercomes.
     * @example
     * // Create many OccIntercomes
     * const occIntercome = await prisma.occIntercome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccIntercomeCreateManyArgs>(args?: SelectSubset<T, OccIntercomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OccIntercome.
     * @param {OccIntercomeDeleteArgs} args - Arguments to delete one OccIntercome.
     * @example
     * // Delete one OccIntercome
     * const OccIntercome = await prisma.occIntercome.delete({
     *   where: {
     *     // ... filter to delete one OccIntercome
     *   }
     * })
     * 
     */
    delete<T extends OccIntercomeDeleteArgs>(args: SelectSubset<T, OccIntercomeDeleteArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccIntercome.
     * @param {OccIntercomeUpdateArgs} args - Arguments to update one OccIntercome.
     * @example
     * // Update one OccIntercome
     * const occIntercome = await prisma.occIntercome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccIntercomeUpdateArgs>(args: SelectSubset<T, OccIntercomeUpdateArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccIntercomes.
     * @param {OccIntercomeDeleteManyArgs} args - Arguments to filter OccIntercomes to delete.
     * @example
     * // Delete a few OccIntercomes
     * const { count } = await prisma.occIntercome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccIntercomeDeleteManyArgs>(args?: SelectSubset<T, OccIntercomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccIntercomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccIntercomes
     * const occIntercome = await prisma.occIntercome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccIntercomeUpdateManyArgs>(args: SelectSubset<T, OccIntercomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OccIntercome.
     * @param {OccIntercomeUpsertArgs} args - Arguments to update or create a OccIntercome.
     * @example
     * // Update or create a OccIntercome
     * const occIntercome = await prisma.occIntercome.upsert({
     *   create: {
     *     // ... data to create a OccIntercome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccIntercome we want to update
     *   }
     * })
     */
    upsert<T extends OccIntercomeUpsertArgs>(args: SelectSubset<T, OccIntercomeUpsertArgs<ExtArgs>>): Prisma__OccIntercomeClient<$Result.GetResult<Prisma.$OccIntercomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccIntercomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeCountArgs} args - Arguments to filter OccIntercomes to count.
     * @example
     * // Count the number of OccIntercomes
     * const count = await prisma.occIntercome.count({
     *   where: {
     *     // ... the filter for the OccIntercomes we want to count
     *   }
     * })
    **/
    count<T extends OccIntercomeCountArgs>(
      args?: Subset<T, OccIntercomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccIntercomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccIntercome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccIntercomeAggregateArgs>(args: Subset<T, OccIntercomeAggregateArgs>): Prisma.PrismaPromise<GetOccIntercomeAggregateType<T>>

    /**
     * Group by OccIntercome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccIntercomeGroupByArgs} args - Group by arguments.
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
      T extends OccIntercomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccIntercomeGroupByArgs['orderBy'] }
        : { orderBy?: OccIntercomeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccIntercomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccIntercomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccIntercome model
   */
  readonly fields: OccIntercomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccIntercome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccIntercomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OccIntercome model
   */
  interface OccIntercomeFieldRefs {
    readonly Id: FieldRef<"OccIntercome", 'Int'>
    readonly GateName: FieldRef<"OccIntercome", 'String'>
    readonly Locations: FieldRef<"OccIntercome", 'String'>
    readonly Count: FieldRef<"OccIntercome", 'Int'>
    readonly CreatedAt: FieldRef<"OccIntercome", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OccIntercome findUnique
   */
  export type OccIntercomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter, which OccIntercome to fetch.
     */
    where: OccIntercomeWhereUniqueInput
  }

  /**
   * OccIntercome findUniqueOrThrow
   */
  export type OccIntercomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter, which OccIntercome to fetch.
     */
    where: OccIntercomeWhereUniqueInput
  }

  /**
   * OccIntercome findFirst
   */
  export type OccIntercomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter, which OccIntercome to fetch.
     */
    where?: OccIntercomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIntercomes to fetch.
     */
    orderBy?: OccIntercomeOrderByWithRelationInput | OccIntercomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccIntercomes.
     */
    cursor?: OccIntercomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIntercomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIntercomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccIntercomes.
     */
    distinct?: OccIntercomeScalarFieldEnum | OccIntercomeScalarFieldEnum[]
  }

  /**
   * OccIntercome findFirstOrThrow
   */
  export type OccIntercomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter, which OccIntercome to fetch.
     */
    where?: OccIntercomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIntercomes to fetch.
     */
    orderBy?: OccIntercomeOrderByWithRelationInput | OccIntercomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccIntercomes.
     */
    cursor?: OccIntercomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIntercomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIntercomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccIntercomes.
     */
    distinct?: OccIntercomeScalarFieldEnum | OccIntercomeScalarFieldEnum[]
  }

  /**
   * OccIntercome findMany
   */
  export type OccIntercomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter, which OccIntercomes to fetch.
     */
    where?: OccIntercomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccIntercomes to fetch.
     */
    orderBy?: OccIntercomeOrderByWithRelationInput | OccIntercomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccIntercomes.
     */
    cursor?: OccIntercomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccIntercomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccIntercomes.
     */
    skip?: number
    distinct?: OccIntercomeScalarFieldEnum | OccIntercomeScalarFieldEnum[]
  }

  /**
   * OccIntercome create
   */
  export type OccIntercomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * The data needed to create a OccIntercome.
     */
    data: XOR<OccIntercomeCreateInput, OccIntercomeUncheckedCreateInput>
  }

  /**
   * OccIntercome createMany
   */
  export type OccIntercomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccIntercomes.
     */
    data: OccIntercomeCreateManyInput | OccIntercomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccIntercome update
   */
  export type OccIntercomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * The data needed to update a OccIntercome.
     */
    data: XOR<OccIntercomeUpdateInput, OccIntercomeUncheckedUpdateInput>
    /**
     * Choose, which OccIntercome to update.
     */
    where: OccIntercomeWhereUniqueInput
  }

  /**
   * OccIntercome updateMany
   */
  export type OccIntercomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccIntercomes.
     */
    data: XOR<OccIntercomeUpdateManyMutationInput, OccIntercomeUncheckedUpdateManyInput>
    /**
     * Filter which OccIntercomes to update
     */
    where?: OccIntercomeWhereInput
    /**
     * Limit how many OccIntercomes to update.
     */
    limit?: number
  }

  /**
   * OccIntercome upsert
   */
  export type OccIntercomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * The filter to search for the OccIntercome to update in case it exists.
     */
    where: OccIntercomeWhereUniqueInput
    /**
     * In case the OccIntercome found by the `where` argument doesn't exist, create a new OccIntercome with this data.
     */
    create: XOR<OccIntercomeCreateInput, OccIntercomeUncheckedCreateInput>
    /**
     * In case the OccIntercome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccIntercomeUpdateInput, OccIntercomeUncheckedUpdateInput>
  }

  /**
   * OccIntercome delete
   */
  export type OccIntercomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
    /**
     * Filter which OccIntercome to delete.
     */
    where: OccIntercomeWhereUniqueInput
  }

  /**
   * OccIntercome deleteMany
   */
  export type OccIntercomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccIntercomes to delete
     */
    where?: OccIntercomeWhereInput
    /**
     * Limit how many OccIntercomes to delete.
     */
    limit?: number
  }

  /**
   * OccIntercome without action
   */
  export type OccIntercomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccIntercome
     */
    select?: OccIntercomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccIntercome
     */
    omit?: OccIntercomeOmit<ExtArgs> | null
  }


  /**
   * Model RefIssuer
   */

  export type AggregateRefIssuer = {
    _count: RefIssuerCountAggregateOutputType | null
    _avg: RefIssuerAvgAggregateOutputType | null
    _sum: RefIssuerSumAggregateOutputType | null
    _min: RefIssuerMinAggregateOutputType | null
    _max: RefIssuerMaxAggregateOutputType | null
  }

  export type RefIssuerAvgAggregateOutputType = {
    id: number | null
    RecordStatus: number | null
  }

  export type RefIssuerSumAggregateOutputType = {
    id: number | null
    RecordStatus: number | null
  }

  export type RefIssuerMinAggregateOutputType = {
    id: number | null
    issuerId: string | null
    issuerName: string | null
    IssuerLongName: string | null
    Color: string | null
    LogoUrl: string | null
    SettlementPath: string | null
    SettlementExtensionFile: string | null
    FlagRecon: string | null
    CreatedOn: Date | null
    CreatedBy: string | null
    UpdatedOn: Date | null
    UpdatedBy: Date | null
    DeletedOn: string | null
    DeletedBy: string | null
    RecordStatus: number | null
  }

  export type RefIssuerMaxAggregateOutputType = {
    id: number | null
    issuerId: string | null
    issuerName: string | null
    IssuerLongName: string | null
    Color: string | null
    LogoUrl: string | null
    SettlementPath: string | null
    SettlementExtensionFile: string | null
    FlagRecon: string | null
    CreatedOn: Date | null
    CreatedBy: string | null
    UpdatedOn: Date | null
    UpdatedBy: Date | null
    DeletedOn: string | null
    DeletedBy: string | null
    RecordStatus: number | null
  }

  export type RefIssuerCountAggregateOutputType = {
    id: number
    issuerId: number
    issuerName: number
    IssuerLongName: number
    Color: number
    LogoUrl: number
    SettlementPath: number
    SettlementExtensionFile: number
    FlagRecon: number
    CreatedOn: number
    CreatedBy: number
    UpdatedOn: number
    UpdatedBy: number
    DeletedOn: number
    DeletedBy: number
    RecordStatus: number
    _all: number
  }


  export type RefIssuerAvgAggregateInputType = {
    id?: true
    RecordStatus?: true
  }

  export type RefIssuerSumAggregateInputType = {
    id?: true
    RecordStatus?: true
  }

  export type RefIssuerMinAggregateInputType = {
    id?: true
    issuerId?: true
    issuerName?: true
    IssuerLongName?: true
    Color?: true
    LogoUrl?: true
    SettlementPath?: true
    SettlementExtensionFile?: true
    FlagRecon?: true
    CreatedOn?: true
    CreatedBy?: true
    UpdatedOn?: true
    UpdatedBy?: true
    DeletedOn?: true
    DeletedBy?: true
    RecordStatus?: true
  }

  export type RefIssuerMaxAggregateInputType = {
    id?: true
    issuerId?: true
    issuerName?: true
    IssuerLongName?: true
    Color?: true
    LogoUrl?: true
    SettlementPath?: true
    SettlementExtensionFile?: true
    FlagRecon?: true
    CreatedOn?: true
    CreatedBy?: true
    UpdatedOn?: true
    UpdatedBy?: true
    DeletedOn?: true
    DeletedBy?: true
    RecordStatus?: true
  }

  export type RefIssuerCountAggregateInputType = {
    id?: true
    issuerId?: true
    issuerName?: true
    IssuerLongName?: true
    Color?: true
    LogoUrl?: true
    SettlementPath?: true
    SettlementExtensionFile?: true
    FlagRecon?: true
    CreatedOn?: true
    CreatedBy?: true
    UpdatedOn?: true
    UpdatedBy?: true
    DeletedOn?: true
    DeletedBy?: true
    RecordStatus?: true
    _all?: true
  }

  export type RefIssuerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefIssuer to aggregate.
     */
    where?: RefIssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefIssuers to fetch.
     */
    orderBy?: RefIssuerOrderByWithRelationInput | RefIssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefIssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefIssuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefIssuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefIssuers
    **/
    _count?: true | RefIssuerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefIssuerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefIssuerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefIssuerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefIssuerMaxAggregateInputType
  }

  export type GetRefIssuerAggregateType<T extends RefIssuerAggregateArgs> = {
        [P in keyof T & keyof AggregateRefIssuer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefIssuer[P]>
      : GetScalarType<T[P], AggregateRefIssuer[P]>
  }




  export type RefIssuerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefIssuerWhereInput
    orderBy?: RefIssuerOrderByWithAggregationInput | RefIssuerOrderByWithAggregationInput[]
    by: RefIssuerScalarFieldEnum[] | RefIssuerScalarFieldEnum
    having?: RefIssuerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefIssuerCountAggregateInputType | true
    _avg?: RefIssuerAvgAggregateInputType
    _sum?: RefIssuerSumAggregateInputType
    _min?: RefIssuerMinAggregateInputType
    _max?: RefIssuerMaxAggregateInputType
  }

  export type RefIssuerGroupByOutputType = {
    id: number
    issuerId: string | null
    issuerName: string | null
    IssuerLongName: string | null
    Color: string | null
    LogoUrl: string | null
    SettlementPath: string | null
    SettlementExtensionFile: string | null
    FlagRecon: string | null
    CreatedOn: Date
    CreatedBy: string | null
    UpdatedOn: Date
    UpdatedBy: Date | null
    DeletedOn: string | null
    DeletedBy: string | null
    RecordStatus: number
    _count: RefIssuerCountAggregateOutputType | null
    _avg: RefIssuerAvgAggregateOutputType | null
    _sum: RefIssuerSumAggregateOutputType | null
    _min: RefIssuerMinAggregateOutputType | null
    _max: RefIssuerMaxAggregateOutputType | null
  }

  type GetRefIssuerGroupByPayload<T extends RefIssuerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefIssuerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefIssuerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefIssuerGroupByOutputType[P]>
            : GetScalarType<T[P], RefIssuerGroupByOutputType[P]>
        }
      >
    >


  export type RefIssuerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issuerId?: boolean
    issuerName?: boolean
    IssuerLongName?: boolean
    Color?: boolean
    LogoUrl?: boolean
    SettlementPath?: boolean
    SettlementExtensionFile?: boolean
    FlagRecon?: boolean
    CreatedOn?: boolean
    CreatedBy?: boolean
    UpdatedOn?: boolean
    UpdatedBy?: boolean
    DeletedOn?: boolean
    DeletedBy?: boolean
    RecordStatus?: boolean
  }, ExtArgs["result"]["refIssuer"]>



  export type RefIssuerSelectScalar = {
    id?: boolean
    issuerId?: boolean
    issuerName?: boolean
    IssuerLongName?: boolean
    Color?: boolean
    LogoUrl?: boolean
    SettlementPath?: boolean
    SettlementExtensionFile?: boolean
    FlagRecon?: boolean
    CreatedOn?: boolean
    CreatedBy?: boolean
    UpdatedOn?: boolean
    UpdatedBy?: boolean
    DeletedOn?: boolean
    DeletedBy?: boolean
    RecordStatus?: boolean
  }

  export type RefIssuerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issuerId" | "issuerName" | "IssuerLongName" | "Color" | "LogoUrl" | "SettlementPath" | "SettlementExtensionFile" | "FlagRecon" | "CreatedOn" | "CreatedBy" | "UpdatedOn" | "UpdatedBy" | "DeletedOn" | "DeletedBy" | "RecordStatus", ExtArgs["result"]["refIssuer"]>

  export type $RefIssuerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefIssuer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issuerId: string | null
      issuerName: string | null
      IssuerLongName: string | null
      Color: string | null
      LogoUrl: string | null
      SettlementPath: string | null
      SettlementExtensionFile: string | null
      FlagRecon: string | null
      CreatedOn: Date
      CreatedBy: string | null
      UpdatedOn: Date
      UpdatedBy: Date | null
      DeletedOn: string | null
      DeletedBy: string | null
      RecordStatus: number
    }, ExtArgs["result"]["refIssuer"]>
    composites: {}
  }

  type RefIssuerGetPayload<S extends boolean | null | undefined | RefIssuerDefaultArgs> = $Result.GetResult<Prisma.$RefIssuerPayload, S>

  type RefIssuerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefIssuerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefIssuerCountAggregateInputType | true
    }

  export interface RefIssuerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefIssuer'], meta: { name: 'RefIssuer' } }
    /**
     * Find zero or one RefIssuer that matches the filter.
     * @param {RefIssuerFindUniqueArgs} args - Arguments to find a RefIssuer
     * @example
     * // Get one RefIssuer
     * const refIssuer = await prisma.refIssuer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefIssuerFindUniqueArgs>(args: SelectSubset<T, RefIssuerFindUniqueArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefIssuer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefIssuerFindUniqueOrThrowArgs} args - Arguments to find a RefIssuer
     * @example
     * // Get one RefIssuer
     * const refIssuer = await prisma.refIssuer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefIssuerFindUniqueOrThrowArgs>(args: SelectSubset<T, RefIssuerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefIssuer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerFindFirstArgs} args - Arguments to find a RefIssuer
     * @example
     * // Get one RefIssuer
     * const refIssuer = await prisma.refIssuer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefIssuerFindFirstArgs>(args?: SelectSubset<T, RefIssuerFindFirstArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefIssuer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerFindFirstOrThrowArgs} args - Arguments to find a RefIssuer
     * @example
     * // Get one RefIssuer
     * const refIssuer = await prisma.refIssuer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefIssuerFindFirstOrThrowArgs>(args?: SelectSubset<T, RefIssuerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefIssuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefIssuers
     * const refIssuers = await prisma.refIssuer.findMany()
     * 
     * // Get first 10 RefIssuers
     * const refIssuers = await prisma.refIssuer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refIssuerWithIdOnly = await prisma.refIssuer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefIssuerFindManyArgs>(args?: SelectSubset<T, RefIssuerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefIssuer.
     * @param {RefIssuerCreateArgs} args - Arguments to create a RefIssuer.
     * @example
     * // Create one RefIssuer
     * const RefIssuer = await prisma.refIssuer.create({
     *   data: {
     *     // ... data to create a RefIssuer
     *   }
     * })
     * 
     */
    create<T extends RefIssuerCreateArgs>(args: SelectSubset<T, RefIssuerCreateArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefIssuers.
     * @param {RefIssuerCreateManyArgs} args - Arguments to create many RefIssuers.
     * @example
     * // Create many RefIssuers
     * const refIssuer = await prisma.refIssuer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefIssuerCreateManyArgs>(args?: SelectSubset<T, RefIssuerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefIssuer.
     * @param {RefIssuerDeleteArgs} args - Arguments to delete one RefIssuer.
     * @example
     * // Delete one RefIssuer
     * const RefIssuer = await prisma.refIssuer.delete({
     *   where: {
     *     // ... filter to delete one RefIssuer
     *   }
     * })
     * 
     */
    delete<T extends RefIssuerDeleteArgs>(args: SelectSubset<T, RefIssuerDeleteArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefIssuer.
     * @param {RefIssuerUpdateArgs} args - Arguments to update one RefIssuer.
     * @example
     * // Update one RefIssuer
     * const refIssuer = await prisma.refIssuer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefIssuerUpdateArgs>(args: SelectSubset<T, RefIssuerUpdateArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefIssuers.
     * @param {RefIssuerDeleteManyArgs} args - Arguments to filter RefIssuers to delete.
     * @example
     * // Delete a few RefIssuers
     * const { count } = await prisma.refIssuer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefIssuerDeleteManyArgs>(args?: SelectSubset<T, RefIssuerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefIssuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefIssuers
     * const refIssuer = await prisma.refIssuer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefIssuerUpdateManyArgs>(args: SelectSubset<T, RefIssuerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefIssuer.
     * @param {RefIssuerUpsertArgs} args - Arguments to update or create a RefIssuer.
     * @example
     * // Update or create a RefIssuer
     * const refIssuer = await prisma.refIssuer.upsert({
     *   create: {
     *     // ... data to create a RefIssuer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefIssuer we want to update
     *   }
     * })
     */
    upsert<T extends RefIssuerUpsertArgs>(args: SelectSubset<T, RefIssuerUpsertArgs<ExtArgs>>): Prisma__RefIssuerClient<$Result.GetResult<Prisma.$RefIssuerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefIssuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerCountArgs} args - Arguments to filter RefIssuers to count.
     * @example
     * // Count the number of RefIssuers
     * const count = await prisma.refIssuer.count({
     *   where: {
     *     // ... the filter for the RefIssuers we want to count
     *   }
     * })
    **/
    count<T extends RefIssuerCountArgs>(
      args?: Subset<T, RefIssuerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefIssuerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefIssuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefIssuerAggregateArgs>(args: Subset<T, RefIssuerAggregateArgs>): Prisma.PrismaPromise<GetRefIssuerAggregateType<T>>

    /**
     * Group by RefIssuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefIssuerGroupByArgs} args - Group by arguments.
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
      T extends RefIssuerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefIssuerGroupByArgs['orderBy'] }
        : { orderBy?: RefIssuerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefIssuerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefIssuerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefIssuer model
   */
  readonly fields: RefIssuerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefIssuer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefIssuerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RefIssuer model
   */
  interface RefIssuerFieldRefs {
    readonly id: FieldRef<"RefIssuer", 'Int'>
    readonly issuerId: FieldRef<"RefIssuer", 'String'>
    readonly issuerName: FieldRef<"RefIssuer", 'String'>
    readonly IssuerLongName: FieldRef<"RefIssuer", 'String'>
    readonly Color: FieldRef<"RefIssuer", 'String'>
    readonly LogoUrl: FieldRef<"RefIssuer", 'String'>
    readonly SettlementPath: FieldRef<"RefIssuer", 'String'>
    readonly SettlementExtensionFile: FieldRef<"RefIssuer", 'String'>
    readonly FlagRecon: FieldRef<"RefIssuer", 'String'>
    readonly CreatedOn: FieldRef<"RefIssuer", 'DateTime'>
    readonly CreatedBy: FieldRef<"RefIssuer", 'String'>
    readonly UpdatedOn: FieldRef<"RefIssuer", 'DateTime'>
    readonly UpdatedBy: FieldRef<"RefIssuer", 'DateTime'>
    readonly DeletedOn: FieldRef<"RefIssuer", 'String'>
    readonly DeletedBy: FieldRef<"RefIssuer", 'String'>
    readonly RecordStatus: FieldRef<"RefIssuer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RefIssuer findUnique
   */
  export type RefIssuerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter, which RefIssuer to fetch.
     */
    where: RefIssuerWhereUniqueInput
  }

  /**
   * RefIssuer findUniqueOrThrow
   */
  export type RefIssuerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter, which RefIssuer to fetch.
     */
    where: RefIssuerWhereUniqueInput
  }

  /**
   * RefIssuer findFirst
   */
  export type RefIssuerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter, which RefIssuer to fetch.
     */
    where?: RefIssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefIssuers to fetch.
     */
    orderBy?: RefIssuerOrderByWithRelationInput | RefIssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefIssuers.
     */
    cursor?: RefIssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefIssuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefIssuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefIssuers.
     */
    distinct?: RefIssuerScalarFieldEnum | RefIssuerScalarFieldEnum[]
  }

  /**
   * RefIssuer findFirstOrThrow
   */
  export type RefIssuerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter, which RefIssuer to fetch.
     */
    where?: RefIssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefIssuers to fetch.
     */
    orderBy?: RefIssuerOrderByWithRelationInput | RefIssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefIssuers.
     */
    cursor?: RefIssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefIssuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefIssuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefIssuers.
     */
    distinct?: RefIssuerScalarFieldEnum | RefIssuerScalarFieldEnum[]
  }

  /**
   * RefIssuer findMany
   */
  export type RefIssuerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter, which RefIssuers to fetch.
     */
    where?: RefIssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefIssuers to fetch.
     */
    orderBy?: RefIssuerOrderByWithRelationInput | RefIssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefIssuers.
     */
    cursor?: RefIssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefIssuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefIssuers.
     */
    skip?: number
    distinct?: RefIssuerScalarFieldEnum | RefIssuerScalarFieldEnum[]
  }

  /**
   * RefIssuer create
   */
  export type RefIssuerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * The data needed to create a RefIssuer.
     */
    data: XOR<RefIssuerCreateInput, RefIssuerUncheckedCreateInput>
  }

  /**
   * RefIssuer createMany
   */
  export type RefIssuerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefIssuers.
     */
    data: RefIssuerCreateManyInput | RefIssuerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefIssuer update
   */
  export type RefIssuerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * The data needed to update a RefIssuer.
     */
    data: XOR<RefIssuerUpdateInput, RefIssuerUncheckedUpdateInput>
    /**
     * Choose, which RefIssuer to update.
     */
    where: RefIssuerWhereUniqueInput
  }

  /**
   * RefIssuer updateMany
   */
  export type RefIssuerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefIssuers.
     */
    data: XOR<RefIssuerUpdateManyMutationInput, RefIssuerUncheckedUpdateManyInput>
    /**
     * Filter which RefIssuers to update
     */
    where?: RefIssuerWhereInput
    /**
     * Limit how many RefIssuers to update.
     */
    limit?: number
  }

  /**
   * RefIssuer upsert
   */
  export type RefIssuerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * The filter to search for the RefIssuer to update in case it exists.
     */
    where: RefIssuerWhereUniqueInput
    /**
     * In case the RefIssuer found by the `where` argument doesn't exist, create a new RefIssuer with this data.
     */
    create: XOR<RefIssuerCreateInput, RefIssuerUncheckedCreateInput>
    /**
     * In case the RefIssuer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefIssuerUpdateInput, RefIssuerUncheckedUpdateInput>
  }

  /**
   * RefIssuer delete
   */
  export type RefIssuerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
    /**
     * Filter which RefIssuer to delete.
     */
    where: RefIssuerWhereUniqueInput
  }

  /**
   * RefIssuer deleteMany
   */
  export type RefIssuerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefIssuers to delete
     */
    where?: RefIssuerWhereInput
    /**
     * Limit how many RefIssuers to delete.
     */
    limit?: number
  }

  /**
   * RefIssuer without action
   */
  export type RefIssuerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefIssuer
     */
    select?: RefIssuerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefIssuer
     */
    omit?: RefIssuerOmit<ExtArgs> | null
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


  export const OccCategoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    createdBy: 'createdBy',
    modifyBy: 'modifyBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OccCategoryScalarFieldEnum = (typeof OccCategoryScalarFieldEnum)[keyof typeof OccCategoryScalarFieldEnum]


  export const OccDescriptionScalarFieldEnum: {
    id: 'id',
    id_category: 'id_category',
    object: 'object',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    modifyBy: 'modifyBy'
  };

  export type OccDescriptionScalarFieldEnum = (typeof OccDescriptionScalarFieldEnum)[keyof typeof OccDescriptionScalarFieldEnum]


  export const OccIssueScalarFieldEnum: {
    id: 'id',
    ticket: 'ticket',
    category: 'category',
    lokasi: 'lokasi',
    description: 'description',
    gate: 'gate',
    action: 'action',
    foto_in: 'foto_in',
    foto_out: 'foto_out',
    number_plate: 'number_plate',
    TrxNo: 'TrxNo',
    status: 'status',
    createdBy: 'createdBy',
    modifiedBy: 'modifiedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OccIssueScalarFieldEnum = (typeof OccIssueScalarFieldEnum)[keyof typeof OccIssueScalarFieldEnum]


  export const OccRefLocationScalarFieldEnum: {
    id: 'id',
    Code: 'Code',
    Name: 'Name',
    Region: 'Region',
    Vendor: 'Vendor',
    VendorParkingCode: 'VendorParkingCode',
    ShortName: 'ShortName',
    Address: 'Address',
    StartTime: 'StartTime',
    EndTime: 'EndTime',
    DateNext: 'DateNext',
    TimeZone: 'TimeZone',
    UrlServer: 'UrlServer',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    recordStatus: 'recordStatus'
  };

  export type OccRefLocationScalarFieldEnum = (typeof OccRefLocationScalarFieldEnum)[keyof typeof OccRefLocationScalarFieldEnum]


  export const OccTransactionScalarFieldEnum: {
    Id: 'Id',
    PlateNumberIn: 'PlateNumberIn',
    PlateNumberOut: 'PlateNumberOut',
    PathIn: 'PathIn',
    PathOut: 'PathOut',
    Location: 'Location',
    GateName: 'GateName',
    InTime: 'InTime',
    OutTime: 'OutTime',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type OccTransactionScalarFieldEnum = (typeof OccTransactionScalarFieldEnum)[keyof typeof OccTransactionScalarFieldEnum]


  export const OccGateScalarFieldEnum: {
    id: 'id',
    id_location: 'id_location',
    gate: 'gate',
    channel_cctv: 'channel_cctv',
    arduino: 'arduino',
    statusGate: 'statusGate',
    id_tele: 'id_tele',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OccGateScalarFieldEnum = (typeof OccGateScalarFieldEnum)[keyof typeof OccGateScalarFieldEnum]


  export const OccIntercomeScalarFieldEnum: {
    Id: 'Id',
    GateName: 'GateName',
    Locations: 'Locations',
    Count: 'Count',
    CreatedAt: 'CreatedAt'
  };

  export type OccIntercomeScalarFieldEnum = (typeof OccIntercomeScalarFieldEnum)[keyof typeof OccIntercomeScalarFieldEnum]


  export const RefIssuerScalarFieldEnum: {
    id: 'id',
    issuerId: 'issuerId',
    issuerName: 'issuerName',
    IssuerLongName: 'IssuerLongName',
    Color: 'Color',
    LogoUrl: 'LogoUrl',
    SettlementPath: 'SettlementPath',
    SettlementExtensionFile: 'SettlementExtensionFile',
    FlagRecon: 'FlagRecon',
    CreatedOn: 'CreatedOn',
    CreatedBy: 'CreatedBy',
    UpdatedOn: 'UpdatedOn',
    UpdatedBy: 'UpdatedBy',
    DeletedOn: 'DeletedOn',
    DeletedBy: 'DeletedBy',
    RecordStatus: 'RecordStatus'
  };

  export type RefIssuerScalarFieldEnum = (typeof RefIssuerScalarFieldEnum)[keyof typeof RefIssuerScalarFieldEnum]


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


  export const OccCategoryOrderByRelevanceFieldEnum: {
    category: 'category',
    createdBy: 'createdBy',
    modifyBy: 'modifyBy'
  };

  export type OccCategoryOrderByRelevanceFieldEnum = (typeof OccCategoryOrderByRelevanceFieldEnum)[keyof typeof OccCategoryOrderByRelevanceFieldEnum]


  export const OccDescriptionOrderByRelevanceFieldEnum: {
    object: 'object',
    createdBy: 'createdBy',
    modifyBy: 'modifyBy'
  };

  export type OccDescriptionOrderByRelevanceFieldEnum = (typeof OccDescriptionOrderByRelevanceFieldEnum)[keyof typeof OccDescriptionOrderByRelevanceFieldEnum]


  export const OccIssueOrderByRelevanceFieldEnum: {
    ticket: 'ticket',
    category: 'category',
    lokasi: 'lokasi',
    description: 'description',
    gate: 'gate',
    action: 'action',
    foto_in: 'foto_in',
    foto_out: 'foto_out',
    number_plate: 'number_plate',
    TrxNo: 'TrxNo',
    createdBy: 'createdBy',
    modifiedBy: 'modifiedBy'
  };

  export type OccIssueOrderByRelevanceFieldEnum = (typeof OccIssueOrderByRelevanceFieldEnum)[keyof typeof OccIssueOrderByRelevanceFieldEnum]


  export const OccRefLocationOrderByRelevanceFieldEnum: {
    Code: 'Code',
    Name: 'Name',
    Region: 'Region',
    Vendor: 'Vendor',
    VendorParkingCode: 'VendorParkingCode',
    ShortName: 'ShortName',
    Address: 'Address',
    TimeZone: 'TimeZone',
    UrlServer: 'UrlServer'
  };

  export type OccRefLocationOrderByRelevanceFieldEnum = (typeof OccRefLocationOrderByRelevanceFieldEnum)[keyof typeof OccRefLocationOrderByRelevanceFieldEnum]


  export const OccTransactionOrderByRelevanceFieldEnum: {
    PlateNumberIn: 'PlateNumberIn',
    PlateNumberOut: 'PlateNumberOut',
    PathIn: 'PathIn',
    PathOut: 'PathOut',
    Location: 'Location',
    GateName: 'GateName'
  };

  export type OccTransactionOrderByRelevanceFieldEnum = (typeof OccTransactionOrderByRelevanceFieldEnum)[keyof typeof OccTransactionOrderByRelevanceFieldEnum]


  export const OccGateOrderByRelevanceFieldEnum: {
    gate: 'gate',
    channel_cctv: 'channel_cctv',
    id_tele: 'id_tele'
  };

  export type OccGateOrderByRelevanceFieldEnum = (typeof OccGateOrderByRelevanceFieldEnum)[keyof typeof OccGateOrderByRelevanceFieldEnum]


  export const OccIntercomeOrderByRelevanceFieldEnum: {
    GateName: 'GateName',
    Locations: 'Locations'
  };

  export type OccIntercomeOrderByRelevanceFieldEnum = (typeof OccIntercomeOrderByRelevanceFieldEnum)[keyof typeof OccIntercomeOrderByRelevanceFieldEnum]


  export const RefIssuerOrderByRelevanceFieldEnum: {
    issuerId: 'issuerId',
    issuerName: 'issuerName',
    IssuerLongName: 'IssuerLongName',
    Color: 'Color',
    LogoUrl: 'LogoUrl',
    SettlementPath: 'SettlementPath',
    SettlementExtensionFile: 'SettlementExtensionFile',
    FlagRecon: 'FlagRecon',
    CreatedBy: 'CreatedBy',
    DeletedOn: 'DeletedOn',
    DeletedBy: 'DeletedBy'
  };

  export type RefIssuerOrderByRelevanceFieldEnum = (typeof RefIssuerOrderByRelevanceFieldEnum)[keyof typeof RefIssuerOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'statusIssue'
   */
  export type EnumstatusIssueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusIssue'>
    


  /**
   * Reference to a field of type 'record'
   */
  export type EnumrecordFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'record'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OccCategoryWhereInput = {
    AND?: OccCategoryWhereInput | OccCategoryWhereInput[]
    OR?: OccCategoryWhereInput[]
    NOT?: OccCategoryWhereInput | OccCategoryWhereInput[]
    id?: IntFilter<"OccCategory"> | number
    category?: StringFilter<"OccCategory"> | string
    createdBy?: StringFilter<"OccCategory"> | string
    modifyBy?: StringNullableFilter<"OccCategory"> | string | null
    createdAt?: DateTimeFilter<"OccCategory"> | Date | string
    updatedAt?: DateTimeFilter<"OccCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccCategory"> | Date | string | null
    occCategory?: OccDescriptionListRelationFilter
  }

  export type OccCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    occCategory?: OccDescriptionOrderByRelationAggregateInput
    _relevance?: OccCategoryOrderByRelevanceInput
  }

  export type OccCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccCategoryWhereInput | OccCategoryWhereInput[]
    OR?: OccCategoryWhereInput[]
    NOT?: OccCategoryWhereInput | OccCategoryWhereInput[]
    category?: StringFilter<"OccCategory"> | string
    createdBy?: StringFilter<"OccCategory"> | string
    modifyBy?: StringNullableFilter<"OccCategory"> | string | null
    createdAt?: DateTimeFilter<"OccCategory"> | Date | string
    updatedAt?: DateTimeFilter<"OccCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccCategory"> | Date | string | null
    occCategory?: OccDescriptionListRelationFilter
  }, "id">

  export type OccCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OccCategoryCountOrderByAggregateInput
    _avg?: OccCategoryAvgOrderByAggregateInput
    _max?: OccCategoryMaxOrderByAggregateInput
    _min?: OccCategoryMinOrderByAggregateInput
    _sum?: OccCategorySumOrderByAggregateInput
  }

  export type OccCategoryScalarWhereWithAggregatesInput = {
    AND?: OccCategoryScalarWhereWithAggregatesInput | OccCategoryScalarWhereWithAggregatesInput[]
    OR?: OccCategoryScalarWhereWithAggregatesInput[]
    NOT?: OccCategoryScalarWhereWithAggregatesInput | OccCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccCategory"> | number
    category?: StringWithAggregatesFilter<"OccCategory"> | string
    createdBy?: StringWithAggregatesFilter<"OccCategory"> | string
    modifyBy?: StringNullableWithAggregatesFilter<"OccCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OccCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OccCategory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OccCategory"> | Date | string | null
  }

  export type OccDescriptionWhereInput = {
    AND?: OccDescriptionWhereInput | OccDescriptionWhereInput[]
    OR?: OccDescriptionWhereInput[]
    NOT?: OccDescriptionWhereInput | OccDescriptionWhereInput[]
    id?: IntFilter<"OccDescription"> | number
    id_category?: IntFilter<"OccDescription"> | number
    object?: StringFilter<"OccDescription"> | string
    createdAt?: DateTimeFilter<"OccDescription"> | Date | string
    updatedAt?: DateTimeFilter<"OccDescription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccDescription"> | Date | string | null
    createdBy?: StringFilter<"OccDescription"> | string
    modifyBy?: StringNullableFilter<"OccDescription"> | string | null
    category?: XOR<OccCategoryScalarRelationFilter, OccCategoryWhereInput>
  }

  export type OccDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    id_category?: SortOrder
    object?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrderInput | SortOrder
    category?: OccCategoryOrderByWithRelationInput
    _relevance?: OccDescriptionOrderByRelevanceInput
  }

  export type OccDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccDescriptionWhereInput | OccDescriptionWhereInput[]
    OR?: OccDescriptionWhereInput[]
    NOT?: OccDescriptionWhereInput | OccDescriptionWhereInput[]
    id_category?: IntFilter<"OccDescription"> | number
    object?: StringFilter<"OccDescription"> | string
    createdAt?: DateTimeFilter<"OccDescription"> | Date | string
    updatedAt?: DateTimeFilter<"OccDescription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccDescription"> | Date | string | null
    createdBy?: StringFilter<"OccDescription"> | string
    modifyBy?: StringNullableFilter<"OccDescription"> | string | null
    category?: XOR<OccCategoryScalarRelationFilter, OccCategoryWhereInput>
  }, "id">

  export type OccDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    id_category?: SortOrder
    object?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrderInput | SortOrder
    _count?: OccDescriptionCountOrderByAggregateInput
    _avg?: OccDescriptionAvgOrderByAggregateInput
    _max?: OccDescriptionMaxOrderByAggregateInput
    _min?: OccDescriptionMinOrderByAggregateInput
    _sum?: OccDescriptionSumOrderByAggregateInput
  }

  export type OccDescriptionScalarWhereWithAggregatesInput = {
    AND?: OccDescriptionScalarWhereWithAggregatesInput | OccDescriptionScalarWhereWithAggregatesInput[]
    OR?: OccDescriptionScalarWhereWithAggregatesInput[]
    NOT?: OccDescriptionScalarWhereWithAggregatesInput | OccDescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccDescription"> | number
    id_category?: IntWithAggregatesFilter<"OccDescription"> | number
    object?: StringWithAggregatesFilter<"OccDescription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OccDescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OccDescription"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OccDescription"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"OccDescription"> | string
    modifyBy?: StringNullableWithAggregatesFilter<"OccDescription"> | string | null
  }

  export type OccIssueWhereInput = {
    AND?: OccIssueWhereInput | OccIssueWhereInput[]
    OR?: OccIssueWhereInput[]
    NOT?: OccIssueWhereInput | OccIssueWhereInput[]
    id?: IntFilter<"OccIssue"> | number
    ticket?: StringFilter<"OccIssue"> | string
    category?: StringNullableFilter<"OccIssue"> | string | null
    lokasi?: StringNullableFilter<"OccIssue"> | string | null
    description?: StringNullableFilter<"OccIssue"> | string | null
    gate?: StringNullableFilter<"OccIssue"> | string | null
    action?: StringNullableFilter<"OccIssue"> | string | null
    foto_in?: StringNullableFilter<"OccIssue"> | string | null
    foto_out?: StringNullableFilter<"OccIssue"> | string | null
    number_plate?: StringNullableFilter<"OccIssue"> | string | null
    TrxNo?: StringNullableFilter<"OccIssue"> | string | null
    status?: EnumstatusIssueFilter<"OccIssue"> | $Enums.statusIssue
    createdBy?: StringFilter<"OccIssue"> | string
    modifiedBy?: StringNullableFilter<"OccIssue"> | string | null
    createdAt?: DateTimeFilter<"OccIssue"> | Date | string
    updatedAt?: DateTimeFilter<"OccIssue"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccIssue"> | Date | string | null
  }

  export type OccIssueOrderByWithRelationInput = {
    id?: SortOrder
    ticket?: SortOrder
    category?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    gate?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    foto_in?: SortOrderInput | SortOrder
    foto_out?: SortOrderInput | SortOrder
    number_plate?: SortOrderInput | SortOrder
    TrxNo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: OccIssueOrderByRelevanceInput
  }

  export type OccIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccIssueWhereInput | OccIssueWhereInput[]
    OR?: OccIssueWhereInput[]
    NOT?: OccIssueWhereInput | OccIssueWhereInput[]
    ticket?: StringFilter<"OccIssue"> | string
    category?: StringNullableFilter<"OccIssue"> | string | null
    lokasi?: StringNullableFilter<"OccIssue"> | string | null
    description?: StringNullableFilter<"OccIssue"> | string | null
    gate?: StringNullableFilter<"OccIssue"> | string | null
    action?: StringNullableFilter<"OccIssue"> | string | null
    foto_in?: StringNullableFilter<"OccIssue"> | string | null
    foto_out?: StringNullableFilter<"OccIssue"> | string | null
    number_plate?: StringNullableFilter<"OccIssue"> | string | null
    TrxNo?: StringNullableFilter<"OccIssue"> | string | null
    status?: EnumstatusIssueFilter<"OccIssue"> | $Enums.statusIssue
    createdBy?: StringFilter<"OccIssue"> | string
    modifiedBy?: StringNullableFilter<"OccIssue"> | string | null
    createdAt?: DateTimeFilter<"OccIssue"> | Date | string
    updatedAt?: DateTimeFilter<"OccIssue"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccIssue"> | Date | string | null
  }, "id">

  export type OccIssueOrderByWithAggregationInput = {
    id?: SortOrder
    ticket?: SortOrder
    category?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    gate?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    foto_in?: SortOrderInput | SortOrder
    foto_out?: SortOrderInput | SortOrder
    number_plate?: SortOrderInput | SortOrder
    TrxNo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OccIssueCountOrderByAggregateInput
    _avg?: OccIssueAvgOrderByAggregateInput
    _max?: OccIssueMaxOrderByAggregateInput
    _min?: OccIssueMinOrderByAggregateInput
    _sum?: OccIssueSumOrderByAggregateInput
  }

  export type OccIssueScalarWhereWithAggregatesInput = {
    AND?: OccIssueScalarWhereWithAggregatesInput | OccIssueScalarWhereWithAggregatesInput[]
    OR?: OccIssueScalarWhereWithAggregatesInput[]
    NOT?: OccIssueScalarWhereWithAggregatesInput | OccIssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccIssue"> | number
    ticket?: StringWithAggregatesFilter<"OccIssue"> | string
    category?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    lokasi?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    description?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    gate?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    action?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    foto_in?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    foto_out?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    number_plate?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    TrxNo?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    status?: EnumstatusIssueWithAggregatesFilter<"OccIssue"> | $Enums.statusIssue
    createdBy?: StringWithAggregatesFilter<"OccIssue"> | string
    modifiedBy?: StringNullableWithAggregatesFilter<"OccIssue"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OccIssue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OccIssue"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OccIssue"> | Date | string | null
  }

  export type OccRefLocationWhereInput = {
    AND?: OccRefLocationWhereInput | OccRefLocationWhereInput[]
    OR?: OccRefLocationWhereInput[]
    NOT?: OccRefLocationWhereInput | OccRefLocationWhereInput[]
    id?: IntFilter<"OccRefLocation"> | number
    Code?: StringFilter<"OccRefLocation"> | string
    Name?: StringFilter<"OccRefLocation"> | string
    Region?: StringNullableFilter<"OccRefLocation"> | string | null
    Vendor?: StringNullableFilter<"OccRefLocation"> | string | null
    VendorParkingCode?: StringNullableFilter<"OccRefLocation"> | string | null
    ShortName?: StringNullableFilter<"OccRefLocation"> | string | null
    Address?: StringNullableFilter<"OccRefLocation"> | string | null
    StartTime?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    EndTime?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    DateNext?: IntNullableFilter<"OccRefLocation"> | number | null
    TimeZone?: StringNullableFilter<"OccRefLocation"> | string | null
    UrlServer?: StringNullableFilter<"OccRefLocation"> | string | null
    CreatedAt?: DateTimeFilter<"OccRefLocation"> | Date | string
    UpdatedAt?: DateTimeFilter<"OccRefLocation"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    recordStatus?: EnumrecordFilter<"OccRefLocation"> | $Enums.record
    location?: OccGateListRelationFilter
  }

  export type OccRefLocationOrderByWithRelationInput = {
    id?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Region?: SortOrderInput | SortOrder
    Vendor?: SortOrderInput | SortOrder
    VendorParkingCode?: SortOrderInput | SortOrder
    ShortName?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    StartTime?: SortOrderInput | SortOrder
    EndTime?: SortOrderInput | SortOrder
    DateNext?: SortOrderInput | SortOrder
    TimeZone?: SortOrderInput | SortOrder
    UrlServer?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    recordStatus?: SortOrder
    location?: OccGateOrderByRelationAggregateInput
    _relevance?: OccRefLocationOrderByRelevanceInput
  }

  export type OccRefLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccRefLocationWhereInput | OccRefLocationWhereInput[]
    OR?: OccRefLocationWhereInput[]
    NOT?: OccRefLocationWhereInput | OccRefLocationWhereInput[]
    Code?: StringFilter<"OccRefLocation"> | string
    Name?: StringFilter<"OccRefLocation"> | string
    Region?: StringNullableFilter<"OccRefLocation"> | string | null
    Vendor?: StringNullableFilter<"OccRefLocation"> | string | null
    VendorParkingCode?: StringNullableFilter<"OccRefLocation"> | string | null
    ShortName?: StringNullableFilter<"OccRefLocation"> | string | null
    Address?: StringNullableFilter<"OccRefLocation"> | string | null
    StartTime?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    EndTime?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    DateNext?: IntNullableFilter<"OccRefLocation"> | number | null
    TimeZone?: StringNullableFilter<"OccRefLocation"> | string | null
    UrlServer?: StringNullableFilter<"OccRefLocation"> | string | null
    CreatedAt?: DateTimeFilter<"OccRefLocation"> | Date | string
    UpdatedAt?: DateTimeFilter<"OccRefLocation"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"OccRefLocation"> | Date | string | null
    recordStatus?: EnumrecordFilter<"OccRefLocation"> | $Enums.record
    location?: OccGateListRelationFilter
  }, "id">

  export type OccRefLocationOrderByWithAggregationInput = {
    id?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Region?: SortOrderInput | SortOrder
    Vendor?: SortOrderInput | SortOrder
    VendorParkingCode?: SortOrderInput | SortOrder
    ShortName?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    StartTime?: SortOrderInput | SortOrder
    EndTime?: SortOrderInput | SortOrder
    DateNext?: SortOrderInput | SortOrder
    TimeZone?: SortOrderInput | SortOrder
    UrlServer?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    recordStatus?: SortOrder
    _count?: OccRefLocationCountOrderByAggregateInput
    _avg?: OccRefLocationAvgOrderByAggregateInput
    _max?: OccRefLocationMaxOrderByAggregateInput
    _min?: OccRefLocationMinOrderByAggregateInput
    _sum?: OccRefLocationSumOrderByAggregateInput
  }

  export type OccRefLocationScalarWhereWithAggregatesInput = {
    AND?: OccRefLocationScalarWhereWithAggregatesInput | OccRefLocationScalarWhereWithAggregatesInput[]
    OR?: OccRefLocationScalarWhereWithAggregatesInput[]
    NOT?: OccRefLocationScalarWhereWithAggregatesInput | OccRefLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccRefLocation"> | number
    Code?: StringWithAggregatesFilter<"OccRefLocation"> | string
    Name?: StringWithAggregatesFilter<"OccRefLocation"> | string
    Region?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    Vendor?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    VendorParkingCode?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    ShortName?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    Address?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    StartTime?: DateTimeNullableWithAggregatesFilter<"OccRefLocation"> | Date | string | null
    EndTime?: DateTimeNullableWithAggregatesFilter<"OccRefLocation"> | Date | string | null
    DateNext?: IntNullableWithAggregatesFilter<"OccRefLocation"> | number | null
    TimeZone?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    UrlServer?: StringNullableWithAggregatesFilter<"OccRefLocation"> | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"OccRefLocation"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"OccRefLocation"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"OccRefLocation"> | Date | string | null
    recordStatus?: EnumrecordWithAggregatesFilter<"OccRefLocation"> | $Enums.record
  }

  export type OccTransactionWhereInput = {
    AND?: OccTransactionWhereInput | OccTransactionWhereInput[]
    OR?: OccTransactionWhereInput[]
    NOT?: OccTransactionWhereInput | OccTransactionWhereInput[]
    Id?: IntFilter<"OccTransaction"> | number
    PlateNumberIn?: StringFilter<"OccTransaction"> | string
    PlateNumberOut?: StringNullableFilter<"OccTransaction"> | string | null
    PathIn?: StringFilter<"OccTransaction"> | string
    PathOut?: StringNullableFilter<"OccTransaction"> | string | null
    Location?: StringNullableFilter<"OccTransaction"> | string | null
    GateName?: StringNullableFilter<"OccTransaction"> | string | null
    InTime?: DateTimeNullableFilter<"OccTransaction"> | Date | string | null
    OutTime?: DateTimeNullableFilter<"OccTransaction"> | Date | string | null
    CreatedAt?: DateTimeFilter<"OccTransaction"> | Date | string
    UpdatedAt?: DateTimeFilter<"OccTransaction"> | Date | string
  }

  export type OccTransactionOrderByWithRelationInput = {
    Id?: SortOrder
    PlateNumberIn?: SortOrder
    PlateNumberOut?: SortOrderInput | SortOrder
    PathIn?: SortOrder
    PathOut?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    GateName?: SortOrderInput | SortOrder
    InTime?: SortOrderInput | SortOrder
    OutTime?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _relevance?: OccTransactionOrderByRelevanceInput
  }

  export type OccTransactionWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: OccTransactionWhereInput | OccTransactionWhereInput[]
    OR?: OccTransactionWhereInput[]
    NOT?: OccTransactionWhereInput | OccTransactionWhereInput[]
    PlateNumberIn?: StringFilter<"OccTransaction"> | string
    PlateNumberOut?: StringNullableFilter<"OccTransaction"> | string | null
    PathIn?: StringFilter<"OccTransaction"> | string
    PathOut?: StringNullableFilter<"OccTransaction"> | string | null
    Location?: StringNullableFilter<"OccTransaction"> | string | null
    GateName?: StringNullableFilter<"OccTransaction"> | string | null
    InTime?: DateTimeNullableFilter<"OccTransaction"> | Date | string | null
    OutTime?: DateTimeNullableFilter<"OccTransaction"> | Date | string | null
    CreatedAt?: DateTimeFilter<"OccTransaction"> | Date | string
    UpdatedAt?: DateTimeFilter<"OccTransaction"> | Date | string
  }, "Id">

  export type OccTransactionOrderByWithAggregationInput = {
    Id?: SortOrder
    PlateNumberIn?: SortOrder
    PlateNumberOut?: SortOrderInput | SortOrder
    PathIn?: SortOrder
    PathOut?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    GateName?: SortOrderInput | SortOrder
    InTime?: SortOrderInput | SortOrder
    OutTime?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: OccTransactionCountOrderByAggregateInput
    _avg?: OccTransactionAvgOrderByAggregateInput
    _max?: OccTransactionMaxOrderByAggregateInput
    _min?: OccTransactionMinOrderByAggregateInput
    _sum?: OccTransactionSumOrderByAggregateInput
  }

  export type OccTransactionScalarWhereWithAggregatesInput = {
    AND?: OccTransactionScalarWhereWithAggregatesInput | OccTransactionScalarWhereWithAggregatesInput[]
    OR?: OccTransactionScalarWhereWithAggregatesInput[]
    NOT?: OccTransactionScalarWhereWithAggregatesInput | OccTransactionScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"OccTransaction"> | number
    PlateNumberIn?: StringWithAggregatesFilter<"OccTransaction"> | string
    PlateNumberOut?: StringNullableWithAggregatesFilter<"OccTransaction"> | string | null
    PathIn?: StringWithAggregatesFilter<"OccTransaction"> | string
    PathOut?: StringNullableWithAggregatesFilter<"OccTransaction"> | string | null
    Location?: StringNullableWithAggregatesFilter<"OccTransaction"> | string | null
    GateName?: StringNullableWithAggregatesFilter<"OccTransaction"> | string | null
    InTime?: DateTimeNullableWithAggregatesFilter<"OccTransaction"> | Date | string | null
    OutTime?: DateTimeNullableWithAggregatesFilter<"OccTransaction"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"OccTransaction"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"OccTransaction"> | Date | string
  }

  export type OccGateWhereInput = {
    AND?: OccGateWhereInput | OccGateWhereInput[]
    OR?: OccGateWhereInput[]
    NOT?: OccGateWhereInput | OccGateWhereInput[]
    id?: IntFilter<"OccGate"> | number
    id_location?: IntFilter<"OccGate"> | number
    gate?: StringFilter<"OccGate"> | string
    channel_cctv?: StringFilter<"OccGate"> | string
    arduino?: IntFilter<"OccGate"> | number
    statusGate?: IntFilter<"OccGate"> | number
    id_tele?: StringNullableFilter<"OccGate"> | string | null
    createdAt?: DateTimeFilter<"OccGate"> | Date | string
    updatedAt?: DateTimeFilter<"OccGate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccGate"> | Date | string | null
    location?: XOR<OccRefLocationScalarRelationFilter, OccRefLocationWhereInput>
  }

  export type OccGateOrderByWithRelationInput = {
    id?: SortOrder
    id_location?: SortOrder
    gate?: SortOrder
    channel_cctv?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
    id_tele?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    location?: OccRefLocationOrderByWithRelationInput
    _relevance?: OccGateOrderByRelevanceInput
  }

  export type OccGateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccGateWhereInput | OccGateWhereInput[]
    OR?: OccGateWhereInput[]
    NOT?: OccGateWhereInput | OccGateWhereInput[]
    id_location?: IntFilter<"OccGate"> | number
    gate?: StringFilter<"OccGate"> | string
    channel_cctv?: StringFilter<"OccGate"> | string
    arduino?: IntFilter<"OccGate"> | number
    statusGate?: IntFilter<"OccGate"> | number
    id_tele?: StringNullableFilter<"OccGate"> | string | null
    createdAt?: DateTimeFilter<"OccGate"> | Date | string
    updatedAt?: DateTimeFilter<"OccGate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccGate"> | Date | string | null
    location?: XOR<OccRefLocationScalarRelationFilter, OccRefLocationWhereInput>
  }, "id">

  export type OccGateOrderByWithAggregationInput = {
    id?: SortOrder
    id_location?: SortOrder
    gate?: SortOrder
    channel_cctv?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
    id_tele?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OccGateCountOrderByAggregateInput
    _avg?: OccGateAvgOrderByAggregateInput
    _max?: OccGateMaxOrderByAggregateInput
    _min?: OccGateMinOrderByAggregateInput
    _sum?: OccGateSumOrderByAggregateInput
  }

  export type OccGateScalarWhereWithAggregatesInput = {
    AND?: OccGateScalarWhereWithAggregatesInput | OccGateScalarWhereWithAggregatesInput[]
    OR?: OccGateScalarWhereWithAggregatesInput[]
    NOT?: OccGateScalarWhereWithAggregatesInput | OccGateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccGate"> | number
    id_location?: IntWithAggregatesFilter<"OccGate"> | number
    gate?: StringWithAggregatesFilter<"OccGate"> | string
    channel_cctv?: StringWithAggregatesFilter<"OccGate"> | string
    arduino?: IntWithAggregatesFilter<"OccGate"> | number
    statusGate?: IntWithAggregatesFilter<"OccGate"> | number
    id_tele?: StringNullableWithAggregatesFilter<"OccGate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OccGate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OccGate"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OccGate"> | Date | string | null
  }

  export type OccIntercomeWhereInput = {
    AND?: OccIntercomeWhereInput | OccIntercomeWhereInput[]
    OR?: OccIntercomeWhereInput[]
    NOT?: OccIntercomeWhereInput | OccIntercomeWhereInput[]
    Id?: IntFilter<"OccIntercome"> | number
    GateName?: StringFilter<"OccIntercome"> | string
    Locations?: StringFilter<"OccIntercome"> | string
    Count?: IntFilter<"OccIntercome"> | number
    CreatedAt?: DateTimeFilter<"OccIntercome"> | Date | string
  }

  export type OccIntercomeOrderByWithRelationInput = {
    Id?: SortOrder
    GateName?: SortOrder
    Locations?: SortOrder
    Count?: SortOrder
    CreatedAt?: SortOrder
    _relevance?: OccIntercomeOrderByRelevanceInput
  }

  export type OccIntercomeWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: OccIntercomeWhereInput | OccIntercomeWhereInput[]
    OR?: OccIntercomeWhereInput[]
    NOT?: OccIntercomeWhereInput | OccIntercomeWhereInput[]
    GateName?: StringFilter<"OccIntercome"> | string
    Locations?: StringFilter<"OccIntercome"> | string
    Count?: IntFilter<"OccIntercome"> | number
    CreatedAt?: DateTimeFilter<"OccIntercome"> | Date | string
  }, "Id">

  export type OccIntercomeOrderByWithAggregationInput = {
    Id?: SortOrder
    GateName?: SortOrder
    Locations?: SortOrder
    Count?: SortOrder
    CreatedAt?: SortOrder
    _count?: OccIntercomeCountOrderByAggregateInput
    _avg?: OccIntercomeAvgOrderByAggregateInput
    _max?: OccIntercomeMaxOrderByAggregateInput
    _min?: OccIntercomeMinOrderByAggregateInput
    _sum?: OccIntercomeSumOrderByAggregateInput
  }

  export type OccIntercomeScalarWhereWithAggregatesInput = {
    AND?: OccIntercomeScalarWhereWithAggregatesInput | OccIntercomeScalarWhereWithAggregatesInput[]
    OR?: OccIntercomeScalarWhereWithAggregatesInput[]
    NOT?: OccIntercomeScalarWhereWithAggregatesInput | OccIntercomeScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"OccIntercome"> | number
    GateName?: StringWithAggregatesFilter<"OccIntercome"> | string
    Locations?: StringWithAggregatesFilter<"OccIntercome"> | string
    Count?: IntWithAggregatesFilter<"OccIntercome"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"OccIntercome"> | Date | string
  }

  export type RefIssuerWhereInput = {
    AND?: RefIssuerWhereInput | RefIssuerWhereInput[]
    OR?: RefIssuerWhereInput[]
    NOT?: RefIssuerWhereInput | RefIssuerWhereInput[]
    id?: IntFilter<"RefIssuer"> | number
    issuerId?: StringNullableFilter<"RefIssuer"> | string | null
    issuerName?: StringNullableFilter<"RefIssuer"> | string | null
    IssuerLongName?: StringNullableFilter<"RefIssuer"> | string | null
    Color?: StringNullableFilter<"RefIssuer"> | string | null
    LogoUrl?: StringNullableFilter<"RefIssuer"> | string | null
    SettlementPath?: StringNullableFilter<"RefIssuer"> | string | null
    SettlementExtensionFile?: StringNullableFilter<"RefIssuer"> | string | null
    FlagRecon?: StringNullableFilter<"RefIssuer"> | string | null
    CreatedOn?: DateTimeFilter<"RefIssuer"> | Date | string
    CreatedBy?: StringNullableFilter<"RefIssuer"> | string | null
    UpdatedOn?: DateTimeFilter<"RefIssuer"> | Date | string
    UpdatedBy?: DateTimeNullableFilter<"RefIssuer"> | Date | string | null
    DeletedOn?: StringNullableFilter<"RefIssuer"> | string | null
    DeletedBy?: StringNullableFilter<"RefIssuer"> | string | null
    RecordStatus?: IntFilter<"RefIssuer"> | number
  }

  export type RefIssuerOrderByWithRelationInput = {
    id?: SortOrder
    issuerId?: SortOrderInput | SortOrder
    issuerName?: SortOrderInput | SortOrder
    IssuerLongName?: SortOrderInput | SortOrder
    Color?: SortOrderInput | SortOrder
    LogoUrl?: SortOrderInput | SortOrder
    SettlementPath?: SortOrderInput | SortOrder
    SettlementExtensionFile?: SortOrderInput | SortOrder
    FlagRecon?: SortOrderInput | SortOrder
    CreatedOn?: SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    UpdatedOn?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedOn?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    RecordStatus?: SortOrder
    _relevance?: RefIssuerOrderByRelevanceInput
  }

  export type RefIssuerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefIssuerWhereInput | RefIssuerWhereInput[]
    OR?: RefIssuerWhereInput[]
    NOT?: RefIssuerWhereInput | RefIssuerWhereInput[]
    issuerId?: StringNullableFilter<"RefIssuer"> | string | null
    issuerName?: StringNullableFilter<"RefIssuer"> | string | null
    IssuerLongName?: StringNullableFilter<"RefIssuer"> | string | null
    Color?: StringNullableFilter<"RefIssuer"> | string | null
    LogoUrl?: StringNullableFilter<"RefIssuer"> | string | null
    SettlementPath?: StringNullableFilter<"RefIssuer"> | string | null
    SettlementExtensionFile?: StringNullableFilter<"RefIssuer"> | string | null
    FlagRecon?: StringNullableFilter<"RefIssuer"> | string | null
    CreatedOn?: DateTimeFilter<"RefIssuer"> | Date | string
    CreatedBy?: StringNullableFilter<"RefIssuer"> | string | null
    UpdatedOn?: DateTimeFilter<"RefIssuer"> | Date | string
    UpdatedBy?: DateTimeNullableFilter<"RefIssuer"> | Date | string | null
    DeletedOn?: StringNullableFilter<"RefIssuer"> | string | null
    DeletedBy?: StringNullableFilter<"RefIssuer"> | string | null
    RecordStatus?: IntFilter<"RefIssuer"> | number
  }, "id">

  export type RefIssuerOrderByWithAggregationInput = {
    id?: SortOrder
    issuerId?: SortOrderInput | SortOrder
    issuerName?: SortOrderInput | SortOrder
    IssuerLongName?: SortOrderInput | SortOrder
    Color?: SortOrderInput | SortOrder
    LogoUrl?: SortOrderInput | SortOrder
    SettlementPath?: SortOrderInput | SortOrder
    SettlementExtensionFile?: SortOrderInput | SortOrder
    FlagRecon?: SortOrderInput | SortOrder
    CreatedOn?: SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    UpdatedOn?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedOn?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    RecordStatus?: SortOrder
    _count?: RefIssuerCountOrderByAggregateInput
    _avg?: RefIssuerAvgOrderByAggregateInput
    _max?: RefIssuerMaxOrderByAggregateInput
    _min?: RefIssuerMinOrderByAggregateInput
    _sum?: RefIssuerSumOrderByAggregateInput
  }

  export type RefIssuerScalarWhereWithAggregatesInput = {
    AND?: RefIssuerScalarWhereWithAggregatesInput | RefIssuerScalarWhereWithAggregatesInput[]
    OR?: RefIssuerScalarWhereWithAggregatesInput[]
    NOT?: RefIssuerScalarWhereWithAggregatesInput | RefIssuerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefIssuer"> | number
    issuerId?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    issuerName?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    IssuerLongName?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    Color?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    LogoUrl?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    SettlementPath?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    SettlementExtensionFile?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    FlagRecon?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    CreatedOn?: DateTimeWithAggregatesFilter<"RefIssuer"> | Date | string
    CreatedBy?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    UpdatedOn?: DateTimeWithAggregatesFilter<"RefIssuer"> | Date | string
    UpdatedBy?: DateTimeNullableWithAggregatesFilter<"RefIssuer"> | Date | string | null
    DeletedOn?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    DeletedBy?: StringNullableWithAggregatesFilter<"RefIssuer"> | string | null
    RecordStatus?: IntWithAggregatesFilter<"RefIssuer"> | number
  }

  export type OccCategoryCreateInput = {
    category: string
    createdBy: string
    modifyBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    occCategory?: OccDescriptionCreateNestedManyWithoutCategoryInput
  }

  export type OccCategoryUncheckedCreateInput = {
    id?: number
    category: string
    createdBy: string
    modifyBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    occCategory?: OccDescriptionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type OccCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occCategory?: OccDescriptionUpdateManyWithoutCategoryNestedInput
  }

  export type OccCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    occCategory?: OccDescriptionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OccCategoryCreateManyInput = {
    id?: number
    category: string
    createdBy: string
    modifyBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccDescriptionCreateInput = {
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
    category: OccCategoryCreateNestedOneWithoutOccCategoryInput
  }

  export type OccDescriptionUncheckedCreateInput = {
    id?: number
    id_category: number
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
  }

  export type OccDescriptionUpdateInput = {
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    category?: OccCategoryUpdateOneRequiredWithoutOccCategoryNestedInput
  }

  export type OccDescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccDescriptionCreateManyInput = {
    id?: number
    id_category: number
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
  }

  export type OccDescriptionUpdateManyMutationInput = {
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccDescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccIssueCreateInput = {
    ticket: string
    category?: string | null
    lokasi?: string | null
    description?: string | null
    gate?: string | null
    action?: string | null
    foto_in?: string | null
    foto_out?: string | null
    number_plate?: string | null
    TrxNo?: string | null
    status?: $Enums.statusIssue
    createdBy: string
    modifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccIssueUncheckedCreateInput = {
    id?: number
    ticket: string
    category?: string | null
    lokasi?: string | null
    description?: string | null
    gate?: string | null
    action?: string | null
    foto_in?: string | null
    foto_out?: string | null
    number_plate?: string | null
    TrxNo?: string | null
    status?: $Enums.statusIssue
    createdBy: string
    modifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccIssueUpdateInput = {
    ticket?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    foto_in?: NullableStringFieldUpdateOperationsInput | string | null
    foto_out?: NullableStringFieldUpdateOperationsInput | string | null
    number_plate?: NullableStringFieldUpdateOperationsInput | string | null
    TrxNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusIssueFieldUpdateOperationsInput | $Enums.statusIssue
    createdBy?: StringFieldUpdateOperationsInput | string
    modifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccIssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    foto_in?: NullableStringFieldUpdateOperationsInput | string | null
    foto_out?: NullableStringFieldUpdateOperationsInput | string | null
    number_plate?: NullableStringFieldUpdateOperationsInput | string | null
    TrxNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusIssueFieldUpdateOperationsInput | $Enums.statusIssue
    createdBy?: StringFieldUpdateOperationsInput | string
    modifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccIssueCreateManyInput = {
    id?: number
    ticket: string
    category?: string | null
    lokasi?: string | null
    description?: string | null
    gate?: string | null
    action?: string | null
    foto_in?: string | null
    foto_out?: string | null
    number_plate?: string | null
    TrxNo?: string | null
    status?: $Enums.statusIssue
    createdBy: string
    modifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccIssueUpdateManyMutationInput = {
    ticket?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    foto_in?: NullableStringFieldUpdateOperationsInput | string | null
    foto_out?: NullableStringFieldUpdateOperationsInput | string | null
    number_plate?: NullableStringFieldUpdateOperationsInput | string | null
    TrxNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusIssueFieldUpdateOperationsInput | $Enums.statusIssue
    createdBy?: StringFieldUpdateOperationsInput | string
    modifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccIssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    foto_in?: NullableStringFieldUpdateOperationsInput | string | null
    foto_out?: NullableStringFieldUpdateOperationsInput | string | null
    number_plate?: NullableStringFieldUpdateOperationsInput | string | null
    TrxNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusIssueFieldUpdateOperationsInput | $Enums.statusIssue
    createdBy?: StringFieldUpdateOperationsInput | string
    modifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccRefLocationCreateInput = {
    Code: string
    Name: string
    Region?: string | null
    Vendor?: string | null
    VendorParkingCode?: string | null
    ShortName?: string | null
    Address?: string | null
    StartTime?: Date | string | null
    EndTime?: Date | string | null
    DateNext?: number | null
    TimeZone?: string | null
    UrlServer?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    recordStatus: $Enums.record
    location?: OccGateCreateNestedManyWithoutLocationInput
  }

  export type OccRefLocationUncheckedCreateInput = {
    id?: number
    Code: string
    Name: string
    Region?: string | null
    Vendor?: string | null
    VendorParkingCode?: string | null
    ShortName?: string | null
    Address?: string | null
    StartTime?: Date | string | null
    EndTime?: Date | string | null
    DateNext?: number | null
    TimeZone?: string | null
    UrlServer?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    recordStatus: $Enums.record
    location?: OccGateUncheckedCreateNestedManyWithoutLocationInput
  }

  export type OccRefLocationUpdateInput = {
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
    location?: OccGateUpdateManyWithoutLocationNestedInput
  }

  export type OccRefLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
    location?: OccGateUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type OccRefLocationCreateManyInput = {
    id?: number
    Code: string
    Name: string
    Region?: string | null
    Vendor?: string | null
    VendorParkingCode?: string | null
    ShortName?: string | null
    Address?: string | null
    StartTime?: Date | string | null
    EndTime?: Date | string | null
    DateNext?: number | null
    TimeZone?: string | null
    UrlServer?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    recordStatus: $Enums.record
  }

  export type OccRefLocationUpdateManyMutationInput = {
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
  }

  export type OccRefLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
  }

  export type OccTransactionCreateInput = {
    PlateNumberIn: string
    PlateNumberOut?: string | null
    PathIn: string
    PathOut?: string | null
    Location?: string | null
    GateName?: string | null
    InTime?: Date | string | null
    OutTime?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type OccTransactionUncheckedCreateInput = {
    Id?: number
    PlateNumberIn: string
    PlateNumberOut?: string | null
    PathIn: string
    PathOut?: string | null
    Location?: string | null
    GateName?: string | null
    InTime?: Date | string | null
    OutTime?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type OccTransactionUpdateInput = {
    PlateNumberIn?: StringFieldUpdateOperationsInput | string
    PlateNumberOut?: NullableStringFieldUpdateOperationsInput | string | null
    PathIn?: StringFieldUpdateOperationsInput | string
    PathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    GateName?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccTransactionUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PlateNumberIn?: StringFieldUpdateOperationsInput | string
    PlateNumberOut?: NullableStringFieldUpdateOperationsInput | string | null
    PathIn?: StringFieldUpdateOperationsInput | string
    PathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    GateName?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccTransactionCreateManyInput = {
    Id?: number
    PlateNumberIn: string
    PlateNumberOut?: string | null
    PathIn: string
    PathOut?: string | null
    Location?: string | null
    GateName?: string | null
    InTime?: Date | string | null
    OutTime?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type OccTransactionUpdateManyMutationInput = {
    PlateNumberIn?: StringFieldUpdateOperationsInput | string
    PlateNumberOut?: NullableStringFieldUpdateOperationsInput | string | null
    PathIn?: StringFieldUpdateOperationsInput | string
    PathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    GateName?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccTransactionUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PlateNumberIn?: StringFieldUpdateOperationsInput | string
    PlateNumberOut?: NullableStringFieldUpdateOperationsInput | string | null
    PathIn?: StringFieldUpdateOperationsInput | string
    PathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    GateName?: NullableStringFieldUpdateOperationsInput | string | null
    InTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccGateCreateInput = {
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    location: OccRefLocationCreateNestedOneWithoutLocationInput
  }

  export type OccGateUncheckedCreateInput = {
    id?: number
    id_location: number
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccGateUpdateInput = {
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: OccRefLocationUpdateOneRequiredWithoutLocationNestedInput
  }

  export type OccGateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccGateCreateManyInput = {
    id?: number
    id_location: number
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccGateUpdateManyMutationInput = {
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccGateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_location?: IntFieldUpdateOperationsInput | number
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccIntercomeCreateInput = {
    GateName: string
    Locations: string
    Count: number
    CreatedAt?: Date | string
  }

  export type OccIntercomeUncheckedCreateInput = {
    Id?: number
    GateName: string
    Locations: string
    Count: number
    CreatedAt?: Date | string
  }

  export type OccIntercomeUpdateInput = {
    GateName?: StringFieldUpdateOperationsInput | string
    Locations?: StringFieldUpdateOperationsInput | string
    Count?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccIntercomeUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    GateName?: StringFieldUpdateOperationsInput | string
    Locations?: StringFieldUpdateOperationsInput | string
    Count?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccIntercomeCreateManyInput = {
    Id?: number
    GateName: string
    Locations: string
    Count: number
    CreatedAt?: Date | string
  }

  export type OccIntercomeUpdateManyMutationInput = {
    GateName?: StringFieldUpdateOperationsInput | string
    Locations?: StringFieldUpdateOperationsInput | string
    Count?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccIntercomeUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    GateName?: StringFieldUpdateOperationsInput | string
    Locations?: StringFieldUpdateOperationsInput | string
    Count?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefIssuerCreateInput = {
    issuerId?: string | null
    issuerName?: string | null
    IssuerLongName?: string | null
    Color?: string | null
    LogoUrl?: string | null
    SettlementPath?: string | null
    SettlementExtensionFile?: string | null
    FlagRecon?: string | null
    CreatedOn?: Date | string
    CreatedBy?: string | null
    UpdatedOn?: Date | string
    UpdatedBy?: Date | string | null
    DeletedOn?: string | null
    DeletedBy?: string | null
    RecordStatus?: number
  }

  export type RefIssuerUncheckedCreateInput = {
    id?: number
    issuerId?: string | null
    issuerName?: string | null
    IssuerLongName?: string | null
    Color?: string | null
    LogoUrl?: string | null
    SettlementPath?: string | null
    SettlementExtensionFile?: string | null
    FlagRecon?: string | null
    CreatedOn?: Date | string
    CreatedBy?: string | null
    UpdatedOn?: Date | string
    UpdatedBy?: Date | string | null
    DeletedOn?: string | null
    DeletedBy?: string | null
    RecordStatus?: number
  }

  export type RefIssuerUpdateInput = {
    issuerId?: NullableStringFieldUpdateOperationsInput | string | null
    issuerName?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerLongName?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    LogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementPath?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementExtensionFile?: NullableStringFieldUpdateOperationsInput | string | null
    FlagRecon?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedOn?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: IntFieldUpdateOperationsInput | number
  }

  export type RefIssuerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuerId?: NullableStringFieldUpdateOperationsInput | string | null
    issuerName?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerLongName?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    LogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementPath?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementExtensionFile?: NullableStringFieldUpdateOperationsInput | string | null
    FlagRecon?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedOn?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: IntFieldUpdateOperationsInput | number
  }

  export type RefIssuerCreateManyInput = {
    id?: number
    issuerId?: string | null
    issuerName?: string | null
    IssuerLongName?: string | null
    Color?: string | null
    LogoUrl?: string | null
    SettlementPath?: string | null
    SettlementExtensionFile?: string | null
    FlagRecon?: string | null
    CreatedOn?: Date | string
    CreatedBy?: string | null
    UpdatedOn?: Date | string
    UpdatedBy?: Date | string | null
    DeletedOn?: string | null
    DeletedBy?: string | null
    RecordStatus?: number
  }

  export type RefIssuerUpdateManyMutationInput = {
    issuerId?: NullableStringFieldUpdateOperationsInput | string | null
    issuerName?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerLongName?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    LogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementPath?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementExtensionFile?: NullableStringFieldUpdateOperationsInput | string | null
    FlagRecon?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedOn?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: IntFieldUpdateOperationsInput | number
  }

  export type RefIssuerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuerId?: NullableStringFieldUpdateOperationsInput | string | null
    issuerName?: NullableStringFieldUpdateOperationsInput | string | null
    IssuerLongName?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    LogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementPath?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementExtensionFile?: NullableStringFieldUpdateOperationsInput | string | null
    FlagRecon?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedOn?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    RecordStatus?: IntFieldUpdateOperationsInput | number
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type OccDescriptionListRelationFilter = {
    every?: OccDescriptionWhereInput
    some?: OccDescriptionWhereInput
    none?: OccDescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OccDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccCategoryOrderByRelevanceInput = {
    fields: OccCategoryOrderByRelevanceFieldEnum | OccCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OccCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccCategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type OccCategoryScalarRelationFilter = {
    is?: OccCategoryWhereInput
    isNot?: OccCategoryWhereInput
  }

  export type OccDescriptionOrderByRelevanceInput = {
    fields: OccDescriptionOrderByRelevanceFieldEnum | OccDescriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    id_category?: SortOrder
    object?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
  }

  export type OccDescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_category?: SortOrder
  }

  export type OccDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_category?: SortOrder
    object?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
  }

  export type OccDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    id_category?: SortOrder
    object?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    modifyBy?: SortOrder
  }

  export type OccDescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    id_category?: SortOrder
  }

  export type EnumstatusIssueFilter<$PrismaModel = never> = {
    equals?: $Enums.statusIssue | EnumstatusIssueFieldRefInput<$PrismaModel>
    in?: $Enums.statusIssue[]
    notIn?: $Enums.statusIssue[]
    not?: NestedEnumstatusIssueFilter<$PrismaModel> | $Enums.statusIssue
  }

  export type OccIssueOrderByRelevanceInput = {
    fields: OccIssueOrderByRelevanceFieldEnum | OccIssueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccIssueCountOrderByAggregateInput = {
    id?: SortOrder
    ticket?: SortOrder
    category?: SortOrder
    lokasi?: SortOrder
    description?: SortOrder
    gate?: SortOrder
    action?: SortOrder
    foto_in?: SortOrder
    foto_out?: SortOrder
    number_plate?: SortOrder
    TrxNo?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccIssueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OccIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket?: SortOrder
    category?: SortOrder
    lokasi?: SortOrder
    description?: SortOrder
    gate?: SortOrder
    action?: SortOrder
    foto_in?: SortOrder
    foto_out?: SortOrder
    number_plate?: SortOrder
    TrxNo?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccIssueMinOrderByAggregateInput = {
    id?: SortOrder
    ticket?: SortOrder
    category?: SortOrder
    lokasi?: SortOrder
    description?: SortOrder
    gate?: SortOrder
    action?: SortOrder
    foto_in?: SortOrder
    foto_out?: SortOrder
    number_plate?: SortOrder
    TrxNo?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccIssueSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumstatusIssueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusIssue | EnumstatusIssueFieldRefInput<$PrismaModel>
    in?: $Enums.statusIssue[]
    notIn?: $Enums.statusIssue[]
    not?: NestedEnumstatusIssueWithAggregatesFilter<$PrismaModel> | $Enums.statusIssue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusIssueFilter<$PrismaModel>
    _max?: NestedEnumstatusIssueFilter<$PrismaModel>
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

  export type EnumrecordFilter<$PrismaModel = never> = {
    equals?: $Enums.record | EnumrecordFieldRefInput<$PrismaModel>
    in?: $Enums.record[]
    notIn?: $Enums.record[]
    not?: NestedEnumrecordFilter<$PrismaModel> | $Enums.record
  }

  export type OccGateListRelationFilter = {
    every?: OccGateWhereInput
    some?: OccGateWhereInput
    none?: OccGateWhereInput
  }

  export type OccGateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccRefLocationOrderByRelevanceInput = {
    fields: OccRefLocationOrderByRelevanceFieldEnum | OccRefLocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccRefLocationCountOrderByAggregateInput = {
    id?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Region?: SortOrder
    Vendor?: SortOrder
    VendorParkingCode?: SortOrder
    ShortName?: SortOrder
    Address?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    DateNext?: SortOrder
    TimeZone?: SortOrder
    UrlServer?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    recordStatus?: SortOrder
  }

  export type OccRefLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    DateNext?: SortOrder
  }

  export type OccRefLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Region?: SortOrder
    Vendor?: SortOrder
    VendorParkingCode?: SortOrder
    ShortName?: SortOrder
    Address?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    DateNext?: SortOrder
    TimeZone?: SortOrder
    UrlServer?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    recordStatus?: SortOrder
  }

  export type OccRefLocationMinOrderByAggregateInput = {
    id?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Region?: SortOrder
    Vendor?: SortOrder
    VendorParkingCode?: SortOrder
    ShortName?: SortOrder
    Address?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    DateNext?: SortOrder
    TimeZone?: SortOrder
    UrlServer?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    recordStatus?: SortOrder
  }

  export type OccRefLocationSumOrderByAggregateInput = {
    id?: SortOrder
    DateNext?: SortOrder
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

  export type EnumrecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.record | EnumrecordFieldRefInput<$PrismaModel>
    in?: $Enums.record[]
    notIn?: $Enums.record[]
    not?: NestedEnumrecordWithAggregatesFilter<$PrismaModel> | $Enums.record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrecordFilter<$PrismaModel>
    _max?: NestedEnumrecordFilter<$PrismaModel>
  }

  export type OccTransactionOrderByRelevanceInput = {
    fields: OccTransactionOrderByRelevanceFieldEnum | OccTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccTransactionCountOrderByAggregateInput = {
    Id?: SortOrder
    PlateNumberIn?: SortOrder
    PlateNumberOut?: SortOrder
    PathIn?: SortOrder
    PathOut?: SortOrder
    Location?: SortOrder
    GateName?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type OccTransactionAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type OccTransactionMaxOrderByAggregateInput = {
    Id?: SortOrder
    PlateNumberIn?: SortOrder
    PlateNumberOut?: SortOrder
    PathIn?: SortOrder
    PathOut?: SortOrder
    Location?: SortOrder
    GateName?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type OccTransactionMinOrderByAggregateInput = {
    Id?: SortOrder
    PlateNumberIn?: SortOrder
    PlateNumberOut?: SortOrder
    PathIn?: SortOrder
    PathOut?: SortOrder
    Location?: SortOrder
    GateName?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type OccTransactionSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type OccRefLocationScalarRelationFilter = {
    is?: OccRefLocationWhereInput
    isNot?: OccRefLocationWhereInput
  }

  export type OccGateOrderByRelevanceInput = {
    fields: OccGateOrderByRelevanceFieldEnum | OccGateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccGateCountOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
    gate?: SortOrder
    channel_cctv?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
    id_tele?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccGateAvgOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
  }

  export type OccGateMaxOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
    gate?: SortOrder
    channel_cctv?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
    id_tele?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccGateMinOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
    gate?: SortOrder
    channel_cctv?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
    id_tele?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OccGateSumOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
    arduino?: SortOrder
    statusGate?: SortOrder
  }

  export type OccIntercomeOrderByRelevanceInput = {
    fields: OccIntercomeOrderByRelevanceFieldEnum | OccIntercomeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccIntercomeCountOrderByAggregateInput = {
    Id?: SortOrder
    GateName?: SortOrder
    Locations?: SortOrder
    Count?: SortOrder
    CreatedAt?: SortOrder
  }

  export type OccIntercomeAvgOrderByAggregateInput = {
    Id?: SortOrder
    Count?: SortOrder
  }

  export type OccIntercomeMaxOrderByAggregateInput = {
    Id?: SortOrder
    GateName?: SortOrder
    Locations?: SortOrder
    Count?: SortOrder
    CreatedAt?: SortOrder
  }

  export type OccIntercomeMinOrderByAggregateInput = {
    Id?: SortOrder
    GateName?: SortOrder
    Locations?: SortOrder
    Count?: SortOrder
    CreatedAt?: SortOrder
  }

  export type OccIntercomeSumOrderByAggregateInput = {
    Id?: SortOrder
    Count?: SortOrder
  }

  export type RefIssuerOrderByRelevanceInput = {
    fields: RefIssuerOrderByRelevanceFieldEnum | RefIssuerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefIssuerCountOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
    issuerName?: SortOrder
    IssuerLongName?: SortOrder
    Color?: SortOrder
    LogoUrl?: SortOrder
    SettlementPath?: SortOrder
    SettlementExtensionFile?: SortOrder
    FlagRecon?: SortOrder
    CreatedOn?: SortOrder
    CreatedBy?: SortOrder
    UpdatedOn?: SortOrder
    UpdatedBy?: SortOrder
    DeletedOn?: SortOrder
    DeletedBy?: SortOrder
    RecordStatus?: SortOrder
  }

  export type RefIssuerAvgOrderByAggregateInput = {
    id?: SortOrder
    RecordStatus?: SortOrder
  }

  export type RefIssuerMaxOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
    issuerName?: SortOrder
    IssuerLongName?: SortOrder
    Color?: SortOrder
    LogoUrl?: SortOrder
    SettlementPath?: SortOrder
    SettlementExtensionFile?: SortOrder
    FlagRecon?: SortOrder
    CreatedOn?: SortOrder
    CreatedBy?: SortOrder
    UpdatedOn?: SortOrder
    UpdatedBy?: SortOrder
    DeletedOn?: SortOrder
    DeletedBy?: SortOrder
    RecordStatus?: SortOrder
  }

  export type RefIssuerMinOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
    issuerName?: SortOrder
    IssuerLongName?: SortOrder
    Color?: SortOrder
    LogoUrl?: SortOrder
    SettlementPath?: SortOrder
    SettlementExtensionFile?: SortOrder
    FlagRecon?: SortOrder
    CreatedOn?: SortOrder
    CreatedBy?: SortOrder
    UpdatedOn?: SortOrder
    UpdatedBy?: SortOrder
    DeletedOn?: SortOrder
    DeletedBy?: SortOrder
    RecordStatus?: SortOrder
  }

  export type RefIssuerSumOrderByAggregateInput = {
    id?: SortOrder
    RecordStatus?: SortOrder
  }

  export type OccDescriptionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput> | OccDescriptionCreateWithoutCategoryInput[] | OccDescriptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OccDescriptionCreateOrConnectWithoutCategoryInput | OccDescriptionCreateOrConnectWithoutCategoryInput[]
    createMany?: OccDescriptionCreateManyCategoryInputEnvelope
    connect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
  }

  export type OccDescriptionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput> | OccDescriptionCreateWithoutCategoryInput[] | OccDescriptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OccDescriptionCreateOrConnectWithoutCategoryInput | OccDescriptionCreateOrConnectWithoutCategoryInput[]
    createMany?: OccDescriptionCreateManyCategoryInputEnvelope
    connect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OccDescriptionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput> | OccDescriptionCreateWithoutCategoryInput[] | OccDescriptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OccDescriptionCreateOrConnectWithoutCategoryInput | OccDescriptionCreateOrConnectWithoutCategoryInput[]
    upsert?: OccDescriptionUpsertWithWhereUniqueWithoutCategoryInput | OccDescriptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OccDescriptionCreateManyCategoryInputEnvelope
    set?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    disconnect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    delete?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    connect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    update?: OccDescriptionUpdateWithWhereUniqueWithoutCategoryInput | OccDescriptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OccDescriptionUpdateManyWithWhereWithoutCategoryInput | OccDescriptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OccDescriptionScalarWhereInput | OccDescriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OccDescriptionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput> | OccDescriptionCreateWithoutCategoryInput[] | OccDescriptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OccDescriptionCreateOrConnectWithoutCategoryInput | OccDescriptionCreateOrConnectWithoutCategoryInput[]
    upsert?: OccDescriptionUpsertWithWhereUniqueWithoutCategoryInput | OccDescriptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OccDescriptionCreateManyCategoryInputEnvelope
    set?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    disconnect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    delete?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    connect?: OccDescriptionWhereUniqueInput | OccDescriptionWhereUniqueInput[]
    update?: OccDescriptionUpdateWithWhereUniqueWithoutCategoryInput | OccDescriptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OccDescriptionUpdateManyWithWhereWithoutCategoryInput | OccDescriptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OccDescriptionScalarWhereInput | OccDescriptionScalarWhereInput[]
  }

  export type OccCategoryCreateNestedOneWithoutOccCategoryInput = {
    create?: XOR<OccCategoryCreateWithoutOccCategoryInput, OccCategoryUncheckedCreateWithoutOccCategoryInput>
    connectOrCreate?: OccCategoryCreateOrConnectWithoutOccCategoryInput
    connect?: OccCategoryWhereUniqueInput
  }

  export type OccCategoryUpdateOneRequiredWithoutOccCategoryNestedInput = {
    create?: XOR<OccCategoryCreateWithoutOccCategoryInput, OccCategoryUncheckedCreateWithoutOccCategoryInput>
    connectOrCreate?: OccCategoryCreateOrConnectWithoutOccCategoryInput
    upsert?: OccCategoryUpsertWithoutOccCategoryInput
    connect?: OccCategoryWhereUniqueInput
    update?: XOR<XOR<OccCategoryUpdateToOneWithWhereWithoutOccCategoryInput, OccCategoryUpdateWithoutOccCategoryInput>, OccCategoryUncheckedUpdateWithoutOccCategoryInput>
  }

  export type EnumstatusIssueFieldUpdateOperationsInput = {
    set?: $Enums.statusIssue
  }

  export type OccGateCreateNestedManyWithoutLocationInput = {
    create?: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput> | OccGateCreateWithoutLocationInput[] | OccGateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: OccGateCreateOrConnectWithoutLocationInput | OccGateCreateOrConnectWithoutLocationInput[]
    createMany?: OccGateCreateManyLocationInputEnvelope
    connect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
  }

  export type OccGateUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput> | OccGateCreateWithoutLocationInput[] | OccGateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: OccGateCreateOrConnectWithoutLocationInput | OccGateCreateOrConnectWithoutLocationInput[]
    createMany?: OccGateCreateManyLocationInputEnvelope
    connect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumrecordFieldUpdateOperationsInput = {
    set?: $Enums.record
  }

  export type OccGateUpdateManyWithoutLocationNestedInput = {
    create?: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput> | OccGateCreateWithoutLocationInput[] | OccGateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: OccGateCreateOrConnectWithoutLocationInput | OccGateCreateOrConnectWithoutLocationInput[]
    upsert?: OccGateUpsertWithWhereUniqueWithoutLocationInput | OccGateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: OccGateCreateManyLocationInputEnvelope
    set?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    disconnect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    delete?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    connect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    update?: OccGateUpdateWithWhereUniqueWithoutLocationInput | OccGateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: OccGateUpdateManyWithWhereWithoutLocationInput | OccGateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: OccGateScalarWhereInput | OccGateScalarWhereInput[]
  }

  export type OccGateUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput> | OccGateCreateWithoutLocationInput[] | OccGateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: OccGateCreateOrConnectWithoutLocationInput | OccGateCreateOrConnectWithoutLocationInput[]
    upsert?: OccGateUpsertWithWhereUniqueWithoutLocationInput | OccGateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: OccGateCreateManyLocationInputEnvelope
    set?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    disconnect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    delete?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    connect?: OccGateWhereUniqueInput | OccGateWhereUniqueInput[]
    update?: OccGateUpdateWithWhereUniqueWithoutLocationInput | OccGateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: OccGateUpdateManyWithWhereWithoutLocationInput | OccGateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: OccGateScalarWhereInput | OccGateScalarWhereInput[]
  }

  export type OccRefLocationCreateNestedOneWithoutLocationInput = {
    create?: XOR<OccRefLocationCreateWithoutLocationInput, OccRefLocationUncheckedCreateWithoutLocationInput>
    connectOrCreate?: OccRefLocationCreateOrConnectWithoutLocationInput
    connect?: OccRefLocationWhereUniqueInput
  }

  export type OccRefLocationUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<OccRefLocationCreateWithoutLocationInput, OccRefLocationUncheckedCreateWithoutLocationInput>
    connectOrCreate?: OccRefLocationCreateOrConnectWithoutLocationInput
    upsert?: OccRefLocationUpsertWithoutLocationInput
    connect?: OccRefLocationWhereUniqueInput
    update?: XOR<XOR<OccRefLocationUpdateToOneWithWhereWithoutLocationInput, OccRefLocationUpdateWithoutLocationInput>, OccRefLocationUncheckedUpdateWithoutLocationInput>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumstatusIssueFilter<$PrismaModel = never> = {
    equals?: $Enums.statusIssue | EnumstatusIssueFieldRefInput<$PrismaModel>
    in?: $Enums.statusIssue[]
    notIn?: $Enums.statusIssue[]
    not?: NestedEnumstatusIssueFilter<$PrismaModel> | $Enums.statusIssue
  }

  export type NestedEnumstatusIssueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusIssue | EnumstatusIssueFieldRefInput<$PrismaModel>
    in?: $Enums.statusIssue[]
    notIn?: $Enums.statusIssue[]
    not?: NestedEnumstatusIssueWithAggregatesFilter<$PrismaModel> | $Enums.statusIssue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusIssueFilter<$PrismaModel>
    _max?: NestedEnumstatusIssueFilter<$PrismaModel>
  }

  export type NestedEnumrecordFilter<$PrismaModel = never> = {
    equals?: $Enums.record | EnumrecordFieldRefInput<$PrismaModel>
    in?: $Enums.record[]
    notIn?: $Enums.record[]
    not?: NestedEnumrecordFilter<$PrismaModel> | $Enums.record
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

  export type NestedEnumrecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.record | EnumrecordFieldRefInput<$PrismaModel>
    in?: $Enums.record[]
    notIn?: $Enums.record[]
    not?: NestedEnumrecordWithAggregatesFilter<$PrismaModel> | $Enums.record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrecordFilter<$PrismaModel>
    _max?: NestedEnumrecordFilter<$PrismaModel>
  }

  export type OccDescriptionCreateWithoutCategoryInput = {
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
  }

  export type OccDescriptionUncheckedCreateWithoutCategoryInput = {
    id?: number
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
  }

  export type OccDescriptionCreateOrConnectWithoutCategoryInput = {
    where: OccDescriptionWhereUniqueInput
    create: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput>
  }

  export type OccDescriptionCreateManyCategoryInputEnvelope = {
    data: OccDescriptionCreateManyCategoryInput | OccDescriptionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type OccDescriptionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: OccDescriptionWhereUniqueInput
    update: XOR<OccDescriptionUpdateWithoutCategoryInput, OccDescriptionUncheckedUpdateWithoutCategoryInput>
    create: XOR<OccDescriptionCreateWithoutCategoryInput, OccDescriptionUncheckedCreateWithoutCategoryInput>
  }

  export type OccDescriptionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: OccDescriptionWhereUniqueInput
    data: XOR<OccDescriptionUpdateWithoutCategoryInput, OccDescriptionUncheckedUpdateWithoutCategoryInput>
  }

  export type OccDescriptionUpdateManyWithWhereWithoutCategoryInput = {
    where: OccDescriptionScalarWhereInput
    data: XOR<OccDescriptionUpdateManyMutationInput, OccDescriptionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type OccDescriptionScalarWhereInput = {
    AND?: OccDescriptionScalarWhereInput | OccDescriptionScalarWhereInput[]
    OR?: OccDescriptionScalarWhereInput[]
    NOT?: OccDescriptionScalarWhereInput | OccDescriptionScalarWhereInput[]
    id?: IntFilter<"OccDescription"> | number
    id_category?: IntFilter<"OccDescription"> | number
    object?: StringFilter<"OccDescription"> | string
    createdAt?: DateTimeFilter<"OccDescription"> | Date | string
    updatedAt?: DateTimeFilter<"OccDescription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccDescription"> | Date | string | null
    createdBy?: StringFilter<"OccDescription"> | string
    modifyBy?: StringNullableFilter<"OccDescription"> | string | null
  }

  export type OccCategoryCreateWithoutOccCategoryInput = {
    category: string
    createdBy: string
    modifyBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccCategoryUncheckedCreateWithoutOccCategoryInput = {
    id?: number
    category: string
    createdBy: string
    modifyBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccCategoryCreateOrConnectWithoutOccCategoryInput = {
    where: OccCategoryWhereUniqueInput
    create: XOR<OccCategoryCreateWithoutOccCategoryInput, OccCategoryUncheckedCreateWithoutOccCategoryInput>
  }

  export type OccCategoryUpsertWithoutOccCategoryInput = {
    update: XOR<OccCategoryUpdateWithoutOccCategoryInput, OccCategoryUncheckedUpdateWithoutOccCategoryInput>
    create: XOR<OccCategoryCreateWithoutOccCategoryInput, OccCategoryUncheckedCreateWithoutOccCategoryInput>
    where?: OccCategoryWhereInput
  }

  export type OccCategoryUpdateToOneWithWhereWithoutOccCategoryInput = {
    where?: OccCategoryWhereInput
    data: XOR<OccCategoryUpdateWithoutOccCategoryInput, OccCategoryUncheckedUpdateWithoutOccCategoryInput>
  }

  export type OccCategoryUpdateWithoutOccCategoryInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccCategoryUncheckedUpdateWithoutOccCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccGateCreateWithoutLocationInput = {
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccGateUncheckedCreateWithoutLocationInput = {
    id?: number
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccGateCreateOrConnectWithoutLocationInput = {
    where: OccGateWhereUniqueInput
    create: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput>
  }

  export type OccGateCreateManyLocationInputEnvelope = {
    data: OccGateCreateManyLocationInput | OccGateCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type OccGateUpsertWithWhereUniqueWithoutLocationInput = {
    where: OccGateWhereUniqueInput
    update: XOR<OccGateUpdateWithoutLocationInput, OccGateUncheckedUpdateWithoutLocationInput>
    create: XOR<OccGateCreateWithoutLocationInput, OccGateUncheckedCreateWithoutLocationInput>
  }

  export type OccGateUpdateWithWhereUniqueWithoutLocationInput = {
    where: OccGateWhereUniqueInput
    data: XOR<OccGateUpdateWithoutLocationInput, OccGateUncheckedUpdateWithoutLocationInput>
  }

  export type OccGateUpdateManyWithWhereWithoutLocationInput = {
    where: OccGateScalarWhereInput
    data: XOR<OccGateUpdateManyMutationInput, OccGateUncheckedUpdateManyWithoutLocationInput>
  }

  export type OccGateScalarWhereInput = {
    AND?: OccGateScalarWhereInput | OccGateScalarWhereInput[]
    OR?: OccGateScalarWhereInput[]
    NOT?: OccGateScalarWhereInput | OccGateScalarWhereInput[]
    id?: IntFilter<"OccGate"> | number
    id_location?: IntFilter<"OccGate"> | number
    gate?: StringFilter<"OccGate"> | string
    channel_cctv?: StringFilter<"OccGate"> | string
    arduino?: IntFilter<"OccGate"> | number
    statusGate?: IntFilter<"OccGate"> | number
    id_tele?: StringNullableFilter<"OccGate"> | string | null
    createdAt?: DateTimeFilter<"OccGate"> | Date | string
    updatedAt?: DateTimeFilter<"OccGate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"OccGate"> | Date | string | null
  }

  export type OccRefLocationCreateWithoutLocationInput = {
    Code: string
    Name: string
    Region?: string | null
    Vendor?: string | null
    VendorParkingCode?: string | null
    ShortName?: string | null
    Address?: string | null
    StartTime?: Date | string | null
    EndTime?: Date | string | null
    DateNext?: number | null
    TimeZone?: string | null
    UrlServer?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    recordStatus: $Enums.record
  }

  export type OccRefLocationUncheckedCreateWithoutLocationInput = {
    id?: number
    Code: string
    Name: string
    Region?: string | null
    Vendor?: string | null
    VendorParkingCode?: string | null
    ShortName?: string | null
    Address?: string | null
    StartTime?: Date | string | null
    EndTime?: Date | string | null
    DateNext?: number | null
    TimeZone?: string | null
    UrlServer?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    recordStatus: $Enums.record
  }

  export type OccRefLocationCreateOrConnectWithoutLocationInput = {
    where: OccRefLocationWhereUniqueInput
    create: XOR<OccRefLocationCreateWithoutLocationInput, OccRefLocationUncheckedCreateWithoutLocationInput>
  }

  export type OccRefLocationUpsertWithoutLocationInput = {
    update: XOR<OccRefLocationUpdateWithoutLocationInput, OccRefLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<OccRefLocationCreateWithoutLocationInput, OccRefLocationUncheckedCreateWithoutLocationInput>
    where?: OccRefLocationWhereInput
  }

  export type OccRefLocationUpdateToOneWithWhereWithoutLocationInput = {
    where?: OccRefLocationWhereInput
    data: XOR<OccRefLocationUpdateWithoutLocationInput, OccRefLocationUncheckedUpdateWithoutLocationInput>
  }

  export type OccRefLocationUpdateWithoutLocationInput = {
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
  }

  export type OccRefLocationUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    Code?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Region?: NullableStringFieldUpdateOperationsInput | string | null
    Vendor?: NullableStringFieldUpdateOperationsInput | string | null
    VendorParkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    ShortName?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    StartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateNext?: NullableIntFieldUpdateOperationsInput | number | null
    TimeZone?: NullableStringFieldUpdateOperationsInput | string | null
    UrlServer?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordStatus?: EnumrecordFieldUpdateOperationsInput | $Enums.record
  }

  export type OccDescriptionCreateManyCategoryInput = {
    id?: number
    object: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy: string
    modifyBy?: string | null
  }

  export type OccDescriptionUpdateWithoutCategoryInput = {
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccDescriptionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccDescriptionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    modifyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccGateCreateManyLocationInput = {
    id?: number
    gate: string
    channel_cctv: string
    arduino?: number
    statusGate?: number
    id_tele?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OccGateUpdateWithoutLocationInput = {
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccGateUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OccGateUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    gate?: StringFieldUpdateOperationsInput | string
    channel_cctv?: StringFieldUpdateOperationsInput | string
    arduino?: IntFieldUpdateOperationsInput | number
    statusGate?: IntFieldUpdateOperationsInput | number
    id_tele?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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