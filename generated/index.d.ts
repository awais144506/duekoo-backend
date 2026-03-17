
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model UserCurrentPosition
 * 
 */
export type UserCurrentPosition = $Result.DefaultSelection<Prisma.$UserCurrentPositionPayload>
/**
 * Model LevelProgress
 * 
 */
export type LevelProgress = $Result.DefaultSelection<Prisma.$LevelProgressPayload>
/**
 * Model SectionStatus
 * 
 */
export type SectionStatus = $Result.DefaultSelection<Prisma.$SectionStatusPayload>
/**
 * Model ModuleStatus
 * 
 */
export type ModuleStatus = $Result.DefaultSelection<Prisma.$ModuleStatusPayload>
/**
 * Model PartStatus
 * 
 */
export type PartStatus = $Result.DefaultSelection<Prisma.$PartStatusPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Intake: {
  SUMMER: 'SUMMER',
  WINTER: 'WINTER'
};

export type Intake = (typeof Intake)[keyof typeof Intake]


export const VisaType: {
  STUDENT: 'STUDENT',
  FAMILY: 'FAMILY',
  VISIT: 'VISIT'
};

export type VisaType = (typeof VisaType)[keyof typeof VisaType]


export const Gender: {
  F: 'F',
  M: 'M'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ProgressStatus: {
  LOCKED: 'LOCKED',
  UNLOCKED: 'UNLOCKED',
  COMPLETED: 'COMPLETED'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]


export const Programs: {
  CS: 'CS',
  BUSINESS: 'BUSINESS',
  ENGINEER: 'ENGINEER',
  SOCIAL: 'SOCIAL',
  NATURAL: 'NATURAL'
};

export type Programs = (typeof Programs)[keyof typeof Programs]

}

export type Intake = $Enums.Intake

export const Intake: typeof $Enums.Intake

export type VisaType = $Enums.VisaType

export const VisaType: typeof $Enums.VisaType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

export type Programs = $Enums.Programs

export const Programs: typeof $Enums.Programs

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCurrentPosition`: Exposes CRUD operations for the **UserCurrentPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCurrentPositions
    * const userCurrentPositions = await prisma.userCurrentPosition.findMany()
    * ```
    */
  get userCurrentPosition(): Prisma.UserCurrentPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levelProgress`: Exposes CRUD operations for the **LevelProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelProgresses
    * const levelProgresses = await prisma.levelProgress.findMany()
    * ```
    */
  get levelProgress(): Prisma.LevelProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionStatus`: Exposes CRUD operations for the **SectionStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionStatuses
    * const sectionStatuses = await prisma.sectionStatus.findMany()
    * ```
    */
  get sectionStatus(): Prisma.SectionStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleStatus`: Exposes CRUD operations for the **ModuleStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleStatuses
    * const moduleStatuses = await prisma.moduleStatus.findMany()
    * ```
    */
  get moduleStatus(): Prisma.ModuleStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partStatus`: Exposes CRUD operations for the **PartStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartStatuses
    * const partStatuses = await prisma.partStatus.findMany()
    * ```
    */
  get partStatus(): Prisma.PartStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    UserProfile: 'UserProfile',
    Level: 'Level',
    Section: 'Section',
    Module: 'Module',
    Part: 'Part',
    UserCurrentPosition: 'UserCurrentPosition',
    LevelProgress: 'LevelProgress',
    SectionStatus: 'SectionStatus',
    ModuleStatus: 'ModuleStatus',
    PartStatus: 'PartStatus',
    Certificate: 'Certificate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "level" | "section" | "module" | "part" | "userCurrentPosition" | "levelProgress" | "sectionStatus" | "moduleStatus" | "partStatus" | "certificate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      UserCurrentPosition: {
        payload: Prisma.$UserCurrentPositionPayload<ExtArgs>
        fields: Prisma.UserCurrentPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCurrentPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCurrentPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          findFirst: {
            args: Prisma.UserCurrentPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCurrentPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          findMany: {
            args: Prisma.UserCurrentPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>[]
          }
          create: {
            args: Prisma.UserCurrentPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          createMany: {
            args: Prisma.UserCurrentPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCurrentPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>[]
          }
          delete: {
            args: Prisma.UserCurrentPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          update: {
            args: Prisma.UserCurrentPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          deleteMany: {
            args: Prisma.UserCurrentPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCurrentPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCurrentPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>[]
          }
          upsert: {
            args: Prisma.UserCurrentPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCurrentPositionPayload>
          }
          aggregate: {
            args: Prisma.UserCurrentPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCurrentPosition>
          }
          groupBy: {
            args: Prisma.UserCurrentPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCurrentPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCurrentPositionCountArgs<ExtArgs>
            result: $Utils.Optional<UserCurrentPositionCountAggregateOutputType> | number
          }
        }
      }
      LevelProgress: {
        payload: Prisma.$LevelProgressPayload<ExtArgs>
        fields: Prisma.LevelProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          findFirst: {
            args: Prisma.LevelProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          findMany: {
            args: Prisma.LevelProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>[]
          }
          create: {
            args: Prisma.LevelProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          createMany: {
            args: Prisma.LevelProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>[]
          }
          delete: {
            args: Prisma.LevelProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          update: {
            args: Prisma.LevelProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          deleteMany: {
            args: Prisma.LevelProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>[]
          }
          upsert: {
            args: Prisma.LevelProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelProgressPayload>
          }
          aggregate: {
            args: Prisma.LevelProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelProgress>
          }
          groupBy: {
            args: Prisma.LevelProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LevelProgressCountAggregateOutputType> | number
          }
        }
      }
      SectionStatus: {
        payload: Prisma.$SectionStatusPayload<ExtArgs>
        fields: Prisma.SectionStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          findFirst: {
            args: Prisma.SectionStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          findMany: {
            args: Prisma.SectionStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>[]
          }
          create: {
            args: Prisma.SectionStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          createMany: {
            args: Prisma.SectionStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>[]
          }
          delete: {
            args: Prisma.SectionStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          update: {
            args: Prisma.SectionStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          deleteMany: {
            args: Prisma.SectionStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>[]
          }
          upsert: {
            args: Prisma.SectionStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionStatusPayload>
          }
          aggregate: {
            args: Prisma.SectionStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionStatus>
          }
          groupBy: {
            args: Prisma.SectionStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionStatusCountArgs<ExtArgs>
            result: $Utils.Optional<SectionStatusCountAggregateOutputType> | number
          }
        }
      }
      ModuleStatus: {
        payload: Prisma.$ModuleStatusPayload<ExtArgs>
        fields: Prisma.ModuleStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          findFirst: {
            args: Prisma.ModuleStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          findMany: {
            args: Prisma.ModuleStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>[]
          }
          create: {
            args: Prisma.ModuleStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          createMany: {
            args: Prisma.ModuleStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>[]
          }
          delete: {
            args: Prisma.ModuleStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          update: {
            args: Prisma.ModuleStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          deleteMany: {
            args: Prisma.ModuleStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>[]
          }
          upsert: {
            args: Prisma.ModuleStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleStatusPayload>
          }
          aggregate: {
            args: Prisma.ModuleStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleStatus>
          }
          groupBy: {
            args: Prisma.ModuleStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleStatusCountAggregateOutputType> | number
          }
        }
      }
      PartStatus: {
        payload: Prisma.$PartStatusPayload<ExtArgs>
        fields: Prisma.PartStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          findFirst: {
            args: Prisma.PartStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          findMany: {
            args: Prisma.PartStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>[]
          }
          create: {
            args: Prisma.PartStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          createMany: {
            args: Prisma.PartStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>[]
          }
          delete: {
            args: Prisma.PartStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          update: {
            args: Prisma.PartStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          deleteMany: {
            args: Prisma.PartStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>[]
          }
          upsert: {
            args: Prisma.PartStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartStatusPayload>
          }
          aggregate: {
            args: Prisma.PartStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartStatus>
          }
          groupBy: {
            args: Prisma.PartStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PartStatusCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    level?: LevelOmit
    section?: SectionOmit
    module?: ModuleOmit
    part?: PartOmit
    userCurrentPosition?: UserCurrentPositionOmit
    levelProgress?: LevelProgressOmit
    sectionStatus?: SectionStatusOmit
    moduleStatus?: ModuleStatusOmit
    partStatus?: PartStatusOmit
    certificate?: CertificateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    levelProgress: number
    sectionStatus: number
    moduleStatus: number
    partStatus: number
    certificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    levelProgress?: boolean | UserCountOutputTypeCountLevelProgressArgs
    sectionStatus?: boolean | UserCountOutputTypeCountSectionStatusArgs
    moduleStatus?: boolean | UserCountOutputTypeCountModuleStatusArgs
    partStatus?: boolean | UserCountOutputTypeCountPartStatusArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLevelProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSectionStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    sections: number
    progress: number
    certificates: number
    currentPos: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | LevelCountOutputTypeCountSectionsArgs
    progress?: boolean | LevelCountOutputTypeCountProgressArgs
    certificates?: boolean | LevelCountOutputTypeCountCertificatesArgs
    currentPos?: boolean | LevelCountOutputTypeCountCurrentPosArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelProgressWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountCurrentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCurrentPositionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    modules: number
    status: number
    currentPos: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | SectionCountOutputTypeCountModulesArgs
    status?: boolean | SectionCountOutputTypeCountStatusArgs
    currentPos?: boolean | SectionCountOutputTypeCountCurrentPosArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionStatusWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountCurrentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCurrentPositionWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    parts: number
    statuses: number
    currentPos: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | ModuleCountOutputTypeCountPartsArgs
    statuses?: boolean | ModuleCountOutputTypeCountStatusesArgs
    currentPos?: boolean | ModuleCountOutputTypeCountCurrentPosArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleStatusWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountCurrentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCurrentPositionWhereInput
  }


  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    status: number
    currentPos: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | PartCountOutputTypeCountStatusArgs
    currentPos?: boolean | PartCountOutputTypeCountCurrentPosArgs
  }

  // Custom InputTypes
  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartStatusWhereInput
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountCurrentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCurrentPositionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    hasSeenWelcome: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    hasSeenWelcome: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    imageUrl: number
    hasSeenWelcome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    hasSeenWelcome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    hasSeenWelcome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    hasSeenWelcome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    imageUrl: string | null
    hasSeenWelcome: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    hasSeenWelcome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    currentPos?: boolean | User$currentPosArgs<ExtArgs>
    levelProgress?: boolean | User$levelProgressArgs<ExtArgs>
    sectionStatus?: boolean | User$sectionStatusArgs<ExtArgs>
    moduleStatus?: boolean | User$moduleStatusArgs<ExtArgs>
    partStatus?: boolean | User$partStatusArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    hasSeenWelcome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    hasSeenWelcome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    hasSeenWelcome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "imageUrl" | "hasSeenWelcome" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    currentPos?: boolean | User$currentPosArgs<ExtArgs>
    levelProgress?: boolean | User$levelProgressArgs<ExtArgs>
    sectionStatus?: boolean | User$sectionStatusArgs<ExtArgs>
    moduleStatus?: boolean | User$moduleStatusArgs<ExtArgs>
    partStatus?: boolean | User$partStatusArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      currentPos: Prisma.$UserCurrentPositionPayload<ExtArgs> | null
      levelProgress: Prisma.$LevelProgressPayload<ExtArgs>[]
      sectionStatus: Prisma.$SectionStatusPayload<ExtArgs>[]
      moduleStatus: Prisma.$ModuleStatusPayload<ExtArgs>[]
      partStatus: Prisma.$PartStatusPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      imageUrl: string | null
      hasSeenWelcome: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentPos<T extends User$currentPosArgs<ExtArgs> = {}>(args?: Subset<T, User$currentPosArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    levelProgress<T extends User$levelProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$levelProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectionStatus<T extends User$sectionStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$sectionStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleStatus<T extends User$moduleStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partStatus<T extends User$partStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$partStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly hasSeenWelcome: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.currentPos
   */
  export type User$currentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    where?: UserCurrentPositionWhereInput
  }

  /**
   * User.levelProgress
   */
  export type User$levelProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    where?: LevelProgressWhereInput
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    cursor?: LevelProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelProgressScalarFieldEnum | LevelProgressScalarFieldEnum[]
  }

  /**
   * User.sectionStatus
   */
  export type User$sectionStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    where?: SectionStatusWhereInput
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    cursor?: SectionStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionStatusScalarFieldEnum | SectionStatusScalarFieldEnum[]
  }

  /**
   * User.moduleStatus
   */
  export type User$moduleStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    where?: ModuleStatusWhereInput
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    cursor?: ModuleStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleStatusScalarFieldEnum | ModuleStatusScalarFieldEnum[]
  }

  /**
   * User.partStatus
   */
  export type User$partStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    where?: PartStatusWhereInput
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    cursor?: PartStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartStatusScalarFieldEnum | PartStatusScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dob: Date | null
    visaType: $Enums.VisaType | null
    program: $Enums.Programs | null
    gender: $Enums.Gender | null
    universityName: string | null
    country: string | null
    phoneNo: string | null
    intake: $Enums.Intake | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dob: Date | null
    visaType: $Enums.VisaType | null
    program: $Enums.Programs | null
    gender: $Enums.Gender | null
    universityName: string | null
    country: string | null
    phoneNo: string | null
    intake: $Enums.Intake | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    dob: number
    visaType: number
    program: number
    gender: number
    universityName: number
    country: number
    phoneNo: number
    intake: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    dob?: true
    visaType?: true
    program?: true
    gender?: true
    universityName?: true
    country?: true
    phoneNo?: true
    intake?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    dob?: true
    visaType?: true
    program?: true
    gender?: true
    universityName?: true
    country?: true
    phoneNo?: true
    intake?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    dob?: true
    visaType?: true
    program?: true
    gender?: true
    universityName?: true
    country?: true
    phoneNo?: true
    intake?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    dob: Date | null
    visaType: $Enums.VisaType
    program: $Enums.Programs
    gender: $Enums.Gender
    universityName: string | null
    country: string | null
    phoneNo: string | null
    intake: $Enums.Intake | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dob?: boolean
    visaType?: boolean
    program?: boolean
    gender?: boolean
    universityName?: boolean
    country?: boolean
    phoneNo?: boolean
    intake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dob?: boolean
    visaType?: boolean
    program?: boolean
    gender?: boolean
    universityName?: boolean
    country?: boolean
    phoneNo?: boolean
    intake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dob?: boolean
    visaType?: boolean
    program?: boolean
    gender?: boolean
    universityName?: boolean
    country?: boolean
    phoneNo?: boolean
    intake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    dob?: boolean
    visaType?: boolean
    program?: boolean
    gender?: boolean
    universityName?: boolean
    country?: boolean
    phoneNo?: boolean
    intake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dob" | "visaType" | "program" | "gender" | "universityName" | "country" | "phoneNo" | "intake" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dob: Date | null
      visaType: $Enums.VisaType
      program: $Enums.Programs
      gender: $Enums.Gender
      universityName: string | null
      country: string | null
      phoneNo: string | null
      intake: $Enums.Intake | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly dob: FieldRef<"UserProfile", 'DateTime'>
    readonly visaType: FieldRef<"UserProfile", 'VisaType'>
    readonly program: FieldRef<"UserProfile", 'Programs'>
    readonly gender: FieldRef<"UserProfile", 'Gender'>
    readonly universityName: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'String'>
    readonly phoneNo: FieldRef<"UserProfile", 'String'>
    readonly intake: FieldRef<"UserProfile", 'Intake'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    order: number | null
  }

  export type LevelSumAggregateOutputType = {
    order: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    deTitle: string | null
    order: number | null
  }

  export type LevelMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    deTitle: string | null
    order: number | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    deTitle: number
    order: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    order?: true
  }

  export type LevelSumAggregateInputType = {
    order?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    deTitle?: true
    order?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    deTitle?: true
    order?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    deTitle?: true
    order?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: string
    slug: string
    title: string
    deTitle: string | null
    order: number
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    deTitle?: boolean
    order?: boolean
    sections?: boolean | Level$sectionsArgs<ExtArgs>
    progress?: boolean | Level$progressArgs<ExtArgs>
    certificates?: boolean | Level$certificatesArgs<ExtArgs>
    currentPos?: boolean | Level$currentPosArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    deTitle?: boolean
    order?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    deTitle?: boolean
    order?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    deTitle?: boolean
    order?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "deTitle" | "order", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Level$sectionsArgs<ExtArgs>
    progress?: boolean | Level$progressArgs<ExtArgs>
    certificates?: boolean | Level$certificatesArgs<ExtArgs>
    currentPos?: boolean | Level$currentPosArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
      progress: Prisma.$LevelProgressPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      currentPos: Prisma.$UserCurrentPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      deTitle: string | null
      order: number
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Level$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Level$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Level$progressArgs<ExtArgs> = {}>(args?: Subset<T, Level$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends Level$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Level$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentPos<T extends Level$currentPosArgs<ExtArgs> = {}>(args?: Subset<T, Level$currentPosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'String'>
    readonly slug: FieldRef<"Level", 'String'>
    readonly title: FieldRef<"Level", 'String'>
    readonly deTitle: FieldRef<"Level", 'String'>
    readonly order: FieldRef<"Level", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.sections
   */
  export type Level$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Level.progress
   */
  export type Level$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    where?: LevelProgressWhereInput
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    cursor?: LevelProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelProgressScalarFieldEnum | LevelProgressScalarFieldEnum[]
  }

  /**
   * Level.certificates
   */
  export type Level$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Level.currentPos
   */
  export type Level$currentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    where?: UserCurrentPositionWhereInput
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    cursor?: UserCurrentPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    order: number | null
  }

  export type SectionSumAggregateOutputType = {
    order: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    levelId: string | null
    title: string | null
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    levelId: string | null
    title: string | null
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    levelId: number
    title: number
    deTitle: number
    visaType: number
    specialization: number
    order: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    order?: true
  }

  export type SectionSumAggregateInputType = {
    order?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    levelId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    levelId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    levelId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    levelId: string
    title: string
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    levelId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
    modules?: boolean | Section$modulesArgs<ExtArgs>
    status?: boolean | Section$statusArgs<ExtArgs>
    currentPos?: boolean | Section$currentPosArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    levelId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    levelId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    levelId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "levelId" | "title" | "deTitle" | "visaType" | "specialization" | "order", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
    modules?: boolean | Section$modulesArgs<ExtArgs>
    status?: boolean | Section$statusArgs<ExtArgs>
    currentPos?: boolean | Section$currentPosArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
      modules: Prisma.$ModulePayload<ExtArgs>[]
      status: Prisma.$SectionStatusPayload<ExtArgs>[]
      currentPos: Prisma.$UserCurrentPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      levelId: string
      title: string
      deTitle: string | null
      visaType: string | null
      specialization: string | null
      order: number
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends Section$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Section$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    status<T extends Section$statusArgs<ExtArgs> = {}>(args?: Subset<T, Section$statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentPos<T extends Section$currentPosArgs<ExtArgs> = {}>(args?: Subset<T, Section$currentPosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly levelId: FieldRef<"Section", 'String'>
    readonly title: FieldRef<"Section", 'String'>
    readonly deTitle: FieldRef<"Section", 'String'>
    readonly visaType: FieldRef<"Section", 'String'>
    readonly specialization: FieldRef<"Section", 'String'>
    readonly order: FieldRef<"Section", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.modules
   */
  export type Section$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Section.status
   */
  export type Section$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    where?: SectionStatusWhereInput
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    cursor?: SectionStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionStatusScalarFieldEnum | SectionStatusScalarFieldEnum[]
  }

  /**
   * Section.currentPos
   */
  export type Section$currentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    where?: UserCurrentPositionWhereInput
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    cursor?: UserCurrentPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    title: string | null
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    title: string | null
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    sectionId: number
    title: number
    deTitle: number
    visaType: number
    specialization: number
    order: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    sectionId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    sectionId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    sectionId?: true
    title?: true
    deTitle?: true
    visaType?: true
    specialization?: true
    order?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    sectionId: string
    title: string
    deTitle: string | null
    visaType: string | null
    specialization: string | null
    order: number
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    parts?: boolean | Module$partsArgs<ExtArgs>
    statuses?: boolean | Module$statusesArgs<ExtArgs>
    currentPos?: boolean | Module$currentPosArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    sectionId?: boolean
    title?: boolean
    deTitle?: boolean
    visaType?: boolean
    specialization?: boolean
    order?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "title" | "deTitle" | "visaType" | "specialization" | "order", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    parts?: boolean | Module$partsArgs<ExtArgs>
    statuses?: boolean | Module$statusesArgs<ExtArgs>
    currentPos?: boolean | Module$currentPosArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      parts: Prisma.$PartPayload<ExtArgs>[]
      statuses: Prisma.$ModuleStatusPayload<ExtArgs>[]
      currentPos: Prisma.$UserCurrentPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string
      title: string
      deTitle: string | null
      visaType: string | null
      specialization: string | null
      order: number
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parts<T extends Module$partsArgs<ExtArgs> = {}>(args?: Subset<T, Module$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statuses<T extends Module$statusesArgs<ExtArgs> = {}>(args?: Subset<T, Module$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentPos<T extends Module$currentPosArgs<ExtArgs> = {}>(args?: Subset<T, Module$currentPosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly sectionId: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly deTitle: FieldRef<"Module", 'String'>
    readonly visaType: FieldRef<"Module", 'String'>
    readonly specialization: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.parts
   */
  export type Module$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Module.statuses
   */
  export type Module$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    where?: ModuleStatusWhereInput
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    cursor?: ModuleStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleStatusScalarFieldEnum | ModuleStatusScalarFieldEnum[]
  }

  /**
   * Module.currentPos
   */
  export type Module$currentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    where?: UserCurrentPositionWhereInput
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    cursor?: UserCurrentPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    order: number | null
  }

  export type PartSumAggregateOutputType = {
    order: number | null
  }

  export type PartMinAggregateOutputType = {
    id: string | null
    moduleId: string | null
    title: string | null
    deTitle: string | null
    contentId: string | null
    order: number | null
  }

  export type PartMaxAggregateOutputType = {
    id: string | null
    moduleId: string | null
    title: string | null
    deTitle: string | null
    contentId: string | null
    order: number | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    moduleId: number
    title: number
    deTitle: number
    content: number
    contentId: number
    order: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    order?: true
  }

  export type PartSumAggregateInputType = {
    order?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    moduleId?: true
    title?: true
    deTitle?: true
    contentId?: true
    order?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    moduleId?: true
    title?: true
    deTitle?: true
    contentId?: true
    order?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    moduleId?: true
    title?: true
    deTitle?: true
    content?: true
    contentId?: true
    order?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: string
    moduleId: string
    title: string
    deTitle: string | null
    content: JsonValue | null
    contentId: string
    order: number
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    title?: boolean
    deTitle?: boolean
    content?: boolean
    contentId?: boolean
    order?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    status?: boolean | Part$statusArgs<ExtArgs>
    currentPos?: boolean | Part$currentPosArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    title?: boolean
    deTitle?: boolean
    content?: boolean
    contentId?: boolean
    order?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    title?: boolean
    deTitle?: boolean
    content?: boolean
    contentId?: boolean
    order?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    moduleId?: boolean
    title?: boolean
    deTitle?: boolean
    content?: boolean
    contentId?: boolean
    order?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduleId" | "title" | "deTitle" | "content" | "contentId" | "order", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    status?: boolean | Part$statusArgs<ExtArgs>
    currentPos?: boolean | Part$currentPosArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      status: Prisma.$PartStatusPayload<ExtArgs>[]
      currentPos: Prisma.$UserCurrentPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moduleId: string
      title: string
      deTitle: string | null
      content: Prisma.JsonValue | null
      contentId: string
      order: number
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends Part$statusArgs<ExtArgs> = {}>(args?: Subset<T, Part$statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentPos<T extends Part$currentPosArgs<ExtArgs> = {}>(args?: Subset<T, Part$currentPosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'String'>
    readonly moduleId: FieldRef<"Part", 'String'>
    readonly title: FieldRef<"Part", 'String'>
    readonly deTitle: FieldRef<"Part", 'String'>
    readonly content: FieldRef<"Part", 'Json'>
    readonly contentId: FieldRef<"Part", 'String'>
    readonly order: FieldRef<"Part", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.status
   */
  export type Part$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    where?: PartStatusWhereInput
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    cursor?: PartStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartStatusScalarFieldEnum | PartStatusScalarFieldEnum[]
  }

  /**
   * Part.currentPos
   */
  export type Part$currentPosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    where?: UserCurrentPositionWhereInput
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    cursor?: UserCurrentPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model UserCurrentPosition
   */

  export type AggregateUserCurrentPosition = {
    _count: UserCurrentPositionCountAggregateOutputType | null
    _min: UserCurrentPositionMinAggregateOutputType | null
    _max: UserCurrentPositionMaxAggregateOutputType | null
  }

  export type UserCurrentPositionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    sectionId: string | null
    moduleId: string | null
    partId: string | null
    updatedAt: Date | null
  }

  export type UserCurrentPositionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    sectionId: string | null
    moduleId: string | null
    partId: string | null
    updatedAt: Date | null
  }

  export type UserCurrentPositionCountAggregateOutputType = {
    id: number
    userId: number
    levelId: number
    sectionId: number
    moduleId: number
    partId: number
    updatedAt: number
    _all: number
  }


  export type UserCurrentPositionMinAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    sectionId?: true
    moduleId?: true
    partId?: true
    updatedAt?: true
  }

  export type UserCurrentPositionMaxAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    sectionId?: true
    moduleId?: true
    partId?: true
    updatedAt?: true
  }

  export type UserCurrentPositionCountAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    sectionId?: true
    moduleId?: true
    partId?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCurrentPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCurrentPosition to aggregate.
     */
    where?: UserCurrentPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCurrentPositions to fetch.
     */
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCurrentPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCurrentPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCurrentPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCurrentPositions
    **/
    _count?: true | UserCurrentPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCurrentPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCurrentPositionMaxAggregateInputType
  }

  export type GetUserCurrentPositionAggregateType<T extends UserCurrentPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCurrentPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCurrentPosition[P]>
      : GetScalarType<T[P], AggregateUserCurrentPosition[P]>
  }




  export type UserCurrentPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCurrentPositionWhereInput
    orderBy?: UserCurrentPositionOrderByWithAggregationInput | UserCurrentPositionOrderByWithAggregationInput[]
    by: UserCurrentPositionScalarFieldEnum[] | UserCurrentPositionScalarFieldEnum
    having?: UserCurrentPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCurrentPositionCountAggregateInputType | true
    _min?: UserCurrentPositionMinAggregateInputType
    _max?: UserCurrentPositionMaxAggregateInputType
  }

  export type UserCurrentPositionGroupByOutputType = {
    id: string
    userId: string
    levelId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt: Date
    _count: UserCurrentPositionCountAggregateOutputType | null
    _min: UserCurrentPositionMinAggregateOutputType | null
    _max: UserCurrentPositionMaxAggregateOutputType | null
  }

  type GetUserCurrentPositionGroupByPayload<T extends UserCurrentPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCurrentPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCurrentPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCurrentPositionGroupByOutputType[P]>
            : GetScalarType<T[P], UserCurrentPositionGroupByOutputType[P]>
        }
      >
    >


  export type UserCurrentPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    sectionId?: boolean
    moduleId?: boolean
    partId?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCurrentPosition"]>

  export type UserCurrentPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    sectionId?: boolean
    moduleId?: boolean
    partId?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCurrentPosition"]>

  export type UserCurrentPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    sectionId?: boolean
    moduleId?: boolean
    partId?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCurrentPosition"]>

  export type UserCurrentPositionSelectScalar = {
    id?: boolean
    userId?: boolean
    levelId?: boolean
    sectionId?: boolean
    moduleId?: boolean
    partId?: boolean
    updatedAt?: boolean
  }

  export type UserCurrentPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "levelId" | "sectionId" | "moduleId" | "partId" | "updatedAt", ExtArgs["result"]["userCurrentPosition"]>
  export type UserCurrentPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type UserCurrentPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type UserCurrentPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }

  export type $UserCurrentPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCurrentPosition"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
      part: Prisma.$PartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      levelId: string
      sectionId: string
      moduleId: string
      partId: string
      updatedAt: Date
    }, ExtArgs["result"]["userCurrentPosition"]>
    composites: {}
  }

  type UserCurrentPositionGetPayload<S extends boolean | null | undefined | UserCurrentPositionDefaultArgs> = $Result.GetResult<Prisma.$UserCurrentPositionPayload, S>

  type UserCurrentPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCurrentPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCurrentPositionCountAggregateInputType | true
    }

  export interface UserCurrentPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCurrentPosition'], meta: { name: 'UserCurrentPosition' } }
    /**
     * Find zero or one UserCurrentPosition that matches the filter.
     * @param {UserCurrentPositionFindUniqueArgs} args - Arguments to find a UserCurrentPosition
     * @example
     * // Get one UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCurrentPositionFindUniqueArgs>(args: SelectSubset<T, UserCurrentPositionFindUniqueArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCurrentPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCurrentPositionFindUniqueOrThrowArgs} args - Arguments to find a UserCurrentPosition
     * @example
     * // Get one UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCurrentPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCurrentPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCurrentPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionFindFirstArgs} args - Arguments to find a UserCurrentPosition
     * @example
     * // Get one UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCurrentPositionFindFirstArgs>(args?: SelectSubset<T, UserCurrentPositionFindFirstArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCurrentPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionFindFirstOrThrowArgs} args - Arguments to find a UserCurrentPosition
     * @example
     * // Get one UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCurrentPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCurrentPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCurrentPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCurrentPositions
     * const userCurrentPositions = await prisma.userCurrentPosition.findMany()
     * 
     * // Get first 10 UserCurrentPositions
     * const userCurrentPositions = await prisma.userCurrentPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCurrentPositionWithIdOnly = await prisma.userCurrentPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCurrentPositionFindManyArgs>(args?: SelectSubset<T, UserCurrentPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCurrentPosition.
     * @param {UserCurrentPositionCreateArgs} args - Arguments to create a UserCurrentPosition.
     * @example
     * // Create one UserCurrentPosition
     * const UserCurrentPosition = await prisma.userCurrentPosition.create({
     *   data: {
     *     // ... data to create a UserCurrentPosition
     *   }
     * })
     * 
     */
    create<T extends UserCurrentPositionCreateArgs>(args: SelectSubset<T, UserCurrentPositionCreateArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCurrentPositions.
     * @param {UserCurrentPositionCreateManyArgs} args - Arguments to create many UserCurrentPositions.
     * @example
     * // Create many UserCurrentPositions
     * const userCurrentPosition = await prisma.userCurrentPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCurrentPositionCreateManyArgs>(args?: SelectSubset<T, UserCurrentPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCurrentPositions and returns the data saved in the database.
     * @param {UserCurrentPositionCreateManyAndReturnArgs} args - Arguments to create many UserCurrentPositions.
     * @example
     * // Create many UserCurrentPositions
     * const userCurrentPosition = await prisma.userCurrentPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCurrentPositions and only return the `id`
     * const userCurrentPositionWithIdOnly = await prisma.userCurrentPosition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCurrentPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCurrentPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCurrentPosition.
     * @param {UserCurrentPositionDeleteArgs} args - Arguments to delete one UserCurrentPosition.
     * @example
     * // Delete one UserCurrentPosition
     * const UserCurrentPosition = await prisma.userCurrentPosition.delete({
     *   where: {
     *     // ... filter to delete one UserCurrentPosition
     *   }
     * })
     * 
     */
    delete<T extends UserCurrentPositionDeleteArgs>(args: SelectSubset<T, UserCurrentPositionDeleteArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCurrentPosition.
     * @param {UserCurrentPositionUpdateArgs} args - Arguments to update one UserCurrentPosition.
     * @example
     * // Update one UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCurrentPositionUpdateArgs>(args: SelectSubset<T, UserCurrentPositionUpdateArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCurrentPositions.
     * @param {UserCurrentPositionDeleteManyArgs} args - Arguments to filter UserCurrentPositions to delete.
     * @example
     * // Delete a few UserCurrentPositions
     * const { count } = await prisma.userCurrentPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCurrentPositionDeleteManyArgs>(args?: SelectSubset<T, UserCurrentPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCurrentPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCurrentPositions
     * const userCurrentPosition = await prisma.userCurrentPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCurrentPositionUpdateManyArgs>(args: SelectSubset<T, UserCurrentPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCurrentPositions and returns the data updated in the database.
     * @param {UserCurrentPositionUpdateManyAndReturnArgs} args - Arguments to update many UserCurrentPositions.
     * @example
     * // Update many UserCurrentPositions
     * const userCurrentPosition = await prisma.userCurrentPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCurrentPositions and only return the `id`
     * const userCurrentPositionWithIdOnly = await prisma.userCurrentPosition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCurrentPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCurrentPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCurrentPosition.
     * @param {UserCurrentPositionUpsertArgs} args - Arguments to update or create a UserCurrentPosition.
     * @example
     * // Update or create a UserCurrentPosition
     * const userCurrentPosition = await prisma.userCurrentPosition.upsert({
     *   create: {
     *     // ... data to create a UserCurrentPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCurrentPosition we want to update
     *   }
     * })
     */
    upsert<T extends UserCurrentPositionUpsertArgs>(args: SelectSubset<T, UserCurrentPositionUpsertArgs<ExtArgs>>): Prisma__UserCurrentPositionClient<$Result.GetResult<Prisma.$UserCurrentPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCurrentPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionCountArgs} args - Arguments to filter UserCurrentPositions to count.
     * @example
     * // Count the number of UserCurrentPositions
     * const count = await prisma.userCurrentPosition.count({
     *   where: {
     *     // ... the filter for the UserCurrentPositions we want to count
     *   }
     * })
    **/
    count<T extends UserCurrentPositionCountArgs>(
      args?: Subset<T, UserCurrentPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCurrentPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCurrentPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCurrentPositionAggregateArgs>(args: Subset<T, UserCurrentPositionAggregateArgs>): Prisma.PrismaPromise<GetUserCurrentPositionAggregateType<T>>

    /**
     * Group by UserCurrentPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCurrentPositionGroupByArgs} args - Group by arguments.
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
      T extends UserCurrentPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCurrentPositionGroupByArgs['orderBy'] }
        : { orderBy?: UserCurrentPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCurrentPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCurrentPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCurrentPosition model
   */
  readonly fields: UserCurrentPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCurrentPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCurrentPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    part<T extends PartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartDefaultArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCurrentPosition model
   */
  interface UserCurrentPositionFieldRefs {
    readonly id: FieldRef<"UserCurrentPosition", 'String'>
    readonly userId: FieldRef<"UserCurrentPosition", 'String'>
    readonly levelId: FieldRef<"UserCurrentPosition", 'String'>
    readonly sectionId: FieldRef<"UserCurrentPosition", 'String'>
    readonly moduleId: FieldRef<"UserCurrentPosition", 'String'>
    readonly partId: FieldRef<"UserCurrentPosition", 'String'>
    readonly updatedAt: FieldRef<"UserCurrentPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCurrentPosition findUnique
   */
  export type UserCurrentPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter, which UserCurrentPosition to fetch.
     */
    where: UserCurrentPositionWhereUniqueInput
  }

  /**
   * UserCurrentPosition findUniqueOrThrow
   */
  export type UserCurrentPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter, which UserCurrentPosition to fetch.
     */
    where: UserCurrentPositionWhereUniqueInput
  }

  /**
   * UserCurrentPosition findFirst
   */
  export type UserCurrentPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter, which UserCurrentPosition to fetch.
     */
    where?: UserCurrentPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCurrentPositions to fetch.
     */
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCurrentPositions.
     */
    cursor?: UserCurrentPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCurrentPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCurrentPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCurrentPositions.
     */
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * UserCurrentPosition findFirstOrThrow
   */
  export type UserCurrentPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter, which UserCurrentPosition to fetch.
     */
    where?: UserCurrentPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCurrentPositions to fetch.
     */
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCurrentPositions.
     */
    cursor?: UserCurrentPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCurrentPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCurrentPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCurrentPositions.
     */
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * UserCurrentPosition findMany
   */
  export type UserCurrentPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter, which UserCurrentPositions to fetch.
     */
    where?: UserCurrentPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCurrentPositions to fetch.
     */
    orderBy?: UserCurrentPositionOrderByWithRelationInput | UserCurrentPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCurrentPositions.
     */
    cursor?: UserCurrentPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCurrentPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCurrentPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCurrentPositions.
     */
    distinct?: UserCurrentPositionScalarFieldEnum | UserCurrentPositionScalarFieldEnum[]
  }

  /**
   * UserCurrentPosition create
   */
  export type UserCurrentPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCurrentPosition.
     */
    data: XOR<UserCurrentPositionCreateInput, UserCurrentPositionUncheckedCreateInput>
  }

  /**
   * UserCurrentPosition createMany
   */
  export type UserCurrentPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCurrentPositions.
     */
    data: UserCurrentPositionCreateManyInput | UserCurrentPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCurrentPosition createManyAndReturn
   */
  export type UserCurrentPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * The data used to create many UserCurrentPositions.
     */
    data: UserCurrentPositionCreateManyInput | UserCurrentPositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCurrentPosition update
   */
  export type UserCurrentPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCurrentPosition.
     */
    data: XOR<UserCurrentPositionUpdateInput, UserCurrentPositionUncheckedUpdateInput>
    /**
     * Choose, which UserCurrentPosition to update.
     */
    where: UserCurrentPositionWhereUniqueInput
  }

  /**
   * UserCurrentPosition updateMany
   */
  export type UserCurrentPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCurrentPositions.
     */
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyInput>
    /**
     * Filter which UserCurrentPositions to update
     */
    where?: UserCurrentPositionWhereInput
    /**
     * Limit how many UserCurrentPositions to update.
     */
    limit?: number
  }

  /**
   * UserCurrentPosition updateManyAndReturn
   */
  export type UserCurrentPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * The data used to update UserCurrentPositions.
     */
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyInput>
    /**
     * Filter which UserCurrentPositions to update
     */
    where?: UserCurrentPositionWhereInput
    /**
     * Limit how many UserCurrentPositions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCurrentPosition upsert
   */
  export type UserCurrentPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCurrentPosition to update in case it exists.
     */
    where: UserCurrentPositionWhereUniqueInput
    /**
     * In case the UserCurrentPosition found by the `where` argument doesn't exist, create a new UserCurrentPosition with this data.
     */
    create: XOR<UserCurrentPositionCreateInput, UserCurrentPositionUncheckedCreateInput>
    /**
     * In case the UserCurrentPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCurrentPositionUpdateInput, UserCurrentPositionUncheckedUpdateInput>
  }

  /**
   * UserCurrentPosition delete
   */
  export type UserCurrentPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
    /**
     * Filter which UserCurrentPosition to delete.
     */
    where: UserCurrentPositionWhereUniqueInput
  }

  /**
   * UserCurrentPosition deleteMany
   */
  export type UserCurrentPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCurrentPositions to delete
     */
    where?: UserCurrentPositionWhereInput
    /**
     * Limit how many UserCurrentPositions to delete.
     */
    limit?: number
  }

  /**
   * UserCurrentPosition without action
   */
  export type UserCurrentPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCurrentPosition
     */
    select?: UserCurrentPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCurrentPosition
     */
    omit?: UserCurrentPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCurrentPositionInclude<ExtArgs> | null
  }


  /**
   * Model LevelProgress
   */

  export type AggregateLevelProgress = {
    _count: LevelProgressCountAggregateOutputType | null
    _avg: LevelProgressAvgAggregateOutputType | null
    _sum: LevelProgressSumAggregateOutputType | null
    _min: LevelProgressMinAggregateOutputType | null
    _max: LevelProgressMaxAggregateOutputType | null
  }

  export type LevelProgressAvgAggregateOutputType = {
    progressPercentage: number | null
  }

  export type LevelProgressSumAggregateOutputType = {
    progressPercentage: number | null
  }

  export type LevelProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    progressPercentage: number | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type LevelProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    progressPercentage: number | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type LevelProgressCountAggregateOutputType = {
    id: number
    userId: number
    levelId: number
    progressPercentage: number
    status: number
    updatedAt: number
    _all: number
  }


  export type LevelProgressAvgAggregateInputType = {
    progressPercentage?: true
  }

  export type LevelProgressSumAggregateInputType = {
    progressPercentage?: true
  }

  export type LevelProgressMinAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    progressPercentage?: true
    status?: true
    updatedAt?: true
  }

  export type LevelProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    progressPercentage?: true
    status?: true
    updatedAt?: true
  }

  export type LevelProgressCountAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    progressPercentage?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelProgress to aggregate.
     */
    where?: LevelProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelProgresses to fetch.
     */
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelProgresses
    **/
    _count?: true | LevelProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelProgressMaxAggregateInputType
  }

  export type GetLevelProgressAggregateType<T extends LevelProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelProgress[P]>
      : GetScalarType<T[P], AggregateLevelProgress[P]>
  }




  export type LevelProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelProgressWhereInput
    orderBy?: LevelProgressOrderByWithAggregationInput | LevelProgressOrderByWithAggregationInput[]
    by: LevelProgressScalarFieldEnum[] | LevelProgressScalarFieldEnum
    having?: LevelProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelProgressCountAggregateInputType | true
    _avg?: LevelProgressAvgAggregateInputType
    _sum?: LevelProgressSumAggregateInputType
    _min?: LevelProgressMinAggregateInputType
    _max?: LevelProgressMaxAggregateInputType
  }

  export type LevelProgressGroupByOutputType = {
    id: string
    userId: string
    levelId: string
    progressPercentage: number
    status: $Enums.ProgressStatus
    updatedAt: Date
    _count: LevelProgressCountAggregateOutputType | null
    _avg: LevelProgressAvgAggregateOutputType | null
    _sum: LevelProgressSumAggregateOutputType | null
    _min: LevelProgressMinAggregateOutputType | null
    _max: LevelProgressMaxAggregateOutputType | null
  }

  type GetLevelProgressGroupByPayload<T extends LevelProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LevelProgressGroupByOutputType[P]>
        }
      >
    >


  export type LevelProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    progressPercentage?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelProgress"]>

  export type LevelProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    progressPercentage?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelProgress"]>

  export type LevelProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    progressPercentage?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelProgress"]>

  export type LevelProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    levelId?: boolean
    progressPercentage?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type LevelProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "levelId" | "progressPercentage" | "status" | "updatedAt", ExtArgs["result"]["levelProgress"]>
  export type LevelProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type LevelProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type LevelProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $LevelProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      levelId: string
      progressPercentage: number
      status: $Enums.ProgressStatus
      updatedAt: Date
    }, ExtArgs["result"]["levelProgress"]>
    composites: {}
  }

  type LevelProgressGetPayload<S extends boolean | null | undefined | LevelProgressDefaultArgs> = $Result.GetResult<Prisma.$LevelProgressPayload, S>

  type LevelProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelProgressCountAggregateInputType | true
    }

  export interface LevelProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelProgress'], meta: { name: 'LevelProgress' } }
    /**
     * Find zero or one LevelProgress that matches the filter.
     * @param {LevelProgressFindUniqueArgs} args - Arguments to find a LevelProgress
     * @example
     * // Get one LevelProgress
     * const levelProgress = await prisma.levelProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelProgressFindUniqueArgs>(args: SelectSubset<T, LevelProgressFindUniqueArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LevelProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelProgressFindUniqueOrThrowArgs} args - Arguments to find a LevelProgress
     * @example
     * // Get one LevelProgress
     * const levelProgress = await prisma.levelProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressFindFirstArgs} args - Arguments to find a LevelProgress
     * @example
     * // Get one LevelProgress
     * const levelProgress = await prisma.levelProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelProgressFindFirstArgs>(args?: SelectSubset<T, LevelProgressFindFirstArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressFindFirstOrThrowArgs} args - Arguments to find a LevelProgress
     * @example
     * // Get one LevelProgress
     * const levelProgress = await prisma.levelProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LevelProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelProgresses
     * const levelProgresses = await prisma.levelProgress.findMany()
     * 
     * // Get first 10 LevelProgresses
     * const levelProgresses = await prisma.levelProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelProgressWithIdOnly = await prisma.levelProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelProgressFindManyArgs>(args?: SelectSubset<T, LevelProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LevelProgress.
     * @param {LevelProgressCreateArgs} args - Arguments to create a LevelProgress.
     * @example
     * // Create one LevelProgress
     * const LevelProgress = await prisma.levelProgress.create({
     *   data: {
     *     // ... data to create a LevelProgress
     *   }
     * })
     * 
     */
    create<T extends LevelProgressCreateArgs>(args: SelectSubset<T, LevelProgressCreateArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LevelProgresses.
     * @param {LevelProgressCreateManyArgs} args - Arguments to create many LevelProgresses.
     * @example
     * // Create many LevelProgresses
     * const levelProgress = await prisma.levelProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelProgressCreateManyArgs>(args?: SelectSubset<T, LevelProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelProgresses and returns the data saved in the database.
     * @param {LevelProgressCreateManyAndReturnArgs} args - Arguments to create many LevelProgresses.
     * @example
     * // Create many LevelProgresses
     * const levelProgress = await prisma.levelProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelProgresses and only return the `id`
     * const levelProgressWithIdOnly = await prisma.levelProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LevelProgress.
     * @param {LevelProgressDeleteArgs} args - Arguments to delete one LevelProgress.
     * @example
     * // Delete one LevelProgress
     * const LevelProgress = await prisma.levelProgress.delete({
     *   where: {
     *     // ... filter to delete one LevelProgress
     *   }
     * })
     * 
     */
    delete<T extends LevelProgressDeleteArgs>(args: SelectSubset<T, LevelProgressDeleteArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LevelProgress.
     * @param {LevelProgressUpdateArgs} args - Arguments to update one LevelProgress.
     * @example
     * // Update one LevelProgress
     * const levelProgress = await prisma.levelProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelProgressUpdateArgs>(args: SelectSubset<T, LevelProgressUpdateArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LevelProgresses.
     * @param {LevelProgressDeleteManyArgs} args - Arguments to filter LevelProgresses to delete.
     * @example
     * // Delete a few LevelProgresses
     * const { count } = await prisma.levelProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelProgressDeleteManyArgs>(args?: SelectSubset<T, LevelProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelProgresses
     * const levelProgress = await prisma.levelProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelProgressUpdateManyArgs>(args: SelectSubset<T, LevelProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelProgresses and returns the data updated in the database.
     * @param {LevelProgressUpdateManyAndReturnArgs} args - Arguments to update many LevelProgresses.
     * @example
     * // Update many LevelProgresses
     * const levelProgress = await prisma.levelProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LevelProgresses and only return the `id`
     * const levelProgressWithIdOnly = await prisma.levelProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LevelProgress.
     * @param {LevelProgressUpsertArgs} args - Arguments to update or create a LevelProgress.
     * @example
     * // Update or create a LevelProgress
     * const levelProgress = await prisma.levelProgress.upsert({
     *   create: {
     *     // ... data to create a LevelProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelProgress we want to update
     *   }
     * })
     */
    upsert<T extends LevelProgressUpsertArgs>(args: SelectSubset<T, LevelProgressUpsertArgs<ExtArgs>>): Prisma__LevelProgressClient<$Result.GetResult<Prisma.$LevelProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LevelProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressCountArgs} args - Arguments to filter LevelProgresses to count.
     * @example
     * // Count the number of LevelProgresses
     * const count = await prisma.levelProgress.count({
     *   where: {
     *     // ... the filter for the LevelProgresses we want to count
     *   }
     * })
    **/
    count<T extends LevelProgressCountArgs>(
      args?: Subset<T, LevelProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelProgressAggregateArgs>(args: Subset<T, LevelProgressAggregateArgs>): Prisma.PrismaPromise<GetLevelProgressAggregateType<T>>

    /**
     * Group by LevelProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelProgressGroupByArgs} args - Group by arguments.
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
      T extends LevelProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelProgressGroupByArgs['orderBy'] }
        : { orderBy?: LevelProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelProgress model
   */
  readonly fields: LevelProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LevelProgress model
   */
  interface LevelProgressFieldRefs {
    readonly id: FieldRef<"LevelProgress", 'String'>
    readonly userId: FieldRef<"LevelProgress", 'String'>
    readonly levelId: FieldRef<"LevelProgress", 'String'>
    readonly progressPercentage: FieldRef<"LevelProgress", 'Int'>
    readonly status: FieldRef<"LevelProgress", 'ProgressStatus'>
    readonly updatedAt: FieldRef<"LevelProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LevelProgress findUnique
   */
  export type LevelProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter, which LevelProgress to fetch.
     */
    where: LevelProgressWhereUniqueInput
  }

  /**
   * LevelProgress findUniqueOrThrow
   */
  export type LevelProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter, which LevelProgress to fetch.
     */
    where: LevelProgressWhereUniqueInput
  }

  /**
   * LevelProgress findFirst
   */
  export type LevelProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter, which LevelProgress to fetch.
     */
    where?: LevelProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelProgresses to fetch.
     */
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelProgresses.
     */
    cursor?: LevelProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelProgresses.
     */
    distinct?: LevelProgressScalarFieldEnum | LevelProgressScalarFieldEnum[]
  }

  /**
   * LevelProgress findFirstOrThrow
   */
  export type LevelProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter, which LevelProgress to fetch.
     */
    where?: LevelProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelProgresses to fetch.
     */
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelProgresses.
     */
    cursor?: LevelProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelProgresses.
     */
    distinct?: LevelProgressScalarFieldEnum | LevelProgressScalarFieldEnum[]
  }

  /**
   * LevelProgress findMany
   */
  export type LevelProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter, which LevelProgresses to fetch.
     */
    where?: LevelProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelProgresses to fetch.
     */
    orderBy?: LevelProgressOrderByWithRelationInput | LevelProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelProgresses.
     */
    cursor?: LevelProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelProgresses.
     */
    distinct?: LevelProgressScalarFieldEnum | LevelProgressScalarFieldEnum[]
  }

  /**
   * LevelProgress create
   */
  export type LevelProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelProgress.
     */
    data: XOR<LevelProgressCreateInput, LevelProgressUncheckedCreateInput>
  }

  /**
   * LevelProgress createMany
   */
  export type LevelProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelProgresses.
     */
    data: LevelProgressCreateManyInput | LevelProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelProgress createManyAndReturn
   */
  export type LevelProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LevelProgresses.
     */
    data: LevelProgressCreateManyInput | LevelProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelProgress update
   */
  export type LevelProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelProgress.
     */
    data: XOR<LevelProgressUpdateInput, LevelProgressUncheckedUpdateInput>
    /**
     * Choose, which LevelProgress to update.
     */
    where: LevelProgressWhereUniqueInput
  }

  /**
   * LevelProgress updateMany
   */
  export type LevelProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelProgresses.
     */
    data: XOR<LevelProgressUpdateManyMutationInput, LevelProgressUncheckedUpdateManyInput>
    /**
     * Filter which LevelProgresses to update
     */
    where?: LevelProgressWhereInput
    /**
     * Limit how many LevelProgresses to update.
     */
    limit?: number
  }

  /**
   * LevelProgress updateManyAndReturn
   */
  export type LevelProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * The data used to update LevelProgresses.
     */
    data: XOR<LevelProgressUpdateManyMutationInput, LevelProgressUncheckedUpdateManyInput>
    /**
     * Filter which LevelProgresses to update
     */
    where?: LevelProgressWhereInput
    /**
     * Limit how many LevelProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelProgress upsert
   */
  export type LevelProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelProgress to update in case it exists.
     */
    where: LevelProgressWhereUniqueInput
    /**
     * In case the LevelProgress found by the `where` argument doesn't exist, create a new LevelProgress with this data.
     */
    create: XOR<LevelProgressCreateInput, LevelProgressUncheckedCreateInput>
    /**
     * In case the LevelProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelProgressUpdateInput, LevelProgressUncheckedUpdateInput>
  }

  /**
   * LevelProgress delete
   */
  export type LevelProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
    /**
     * Filter which LevelProgress to delete.
     */
    where: LevelProgressWhereUniqueInput
  }

  /**
   * LevelProgress deleteMany
   */
  export type LevelProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelProgresses to delete
     */
    where?: LevelProgressWhereInput
    /**
     * Limit how many LevelProgresses to delete.
     */
    limit?: number
  }

  /**
   * LevelProgress without action
   */
  export type LevelProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelProgress
     */
    select?: LevelProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelProgress
     */
    omit?: LevelProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelProgressInclude<ExtArgs> | null
  }


  /**
   * Model SectionStatus
   */

  export type AggregateSectionStatus = {
    _count: SectionStatusCountAggregateOutputType | null
    _min: SectionStatusMinAggregateOutputType | null
    _max: SectionStatusMaxAggregateOutputType | null
  }

  export type SectionStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sectionId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type SectionStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sectionId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type SectionStatusCountAggregateOutputType = {
    id: number
    userId: number
    sectionId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type SectionStatusMinAggregateInputType = {
    id?: true
    userId?: true
    sectionId?: true
    status?: true
    updatedAt?: true
  }

  export type SectionStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    sectionId?: true
    status?: true
    updatedAt?: true
  }

  export type SectionStatusCountAggregateInputType = {
    id?: true
    userId?: true
    sectionId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionStatus to aggregate.
     */
    where?: SectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionStatuses to fetch.
     */
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionStatuses
    **/
    _count?: true | SectionStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionStatusMaxAggregateInputType
  }

  export type GetSectionStatusAggregateType<T extends SectionStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionStatus[P]>
      : GetScalarType<T[P], AggregateSectionStatus[P]>
  }




  export type SectionStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionStatusWhereInput
    orderBy?: SectionStatusOrderByWithAggregationInput | SectionStatusOrderByWithAggregationInput[]
    by: SectionStatusScalarFieldEnum[] | SectionStatusScalarFieldEnum
    having?: SectionStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionStatusCountAggregateInputType | true
    _min?: SectionStatusMinAggregateInputType
    _max?: SectionStatusMaxAggregateInputType
  }

  export type SectionStatusGroupByOutputType = {
    id: string
    userId: string
    sectionId: string
    status: $Enums.ProgressStatus
    updatedAt: Date
    _count: SectionStatusCountAggregateOutputType | null
    _min: SectionStatusMinAggregateOutputType | null
    _max: SectionStatusMaxAggregateOutputType | null
  }

  type GetSectionStatusGroupByPayload<T extends SectionStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionStatusGroupByOutputType[P]>
            : GetScalarType<T[P], SectionStatusGroupByOutputType[P]>
        }
      >
    >


  export type SectionStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sectionId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionStatus"]>

  export type SectionStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sectionId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionStatus"]>

  export type SectionStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sectionId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionStatus"]>

  export type SectionStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    sectionId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type SectionStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sectionId" | "status" | "updatedAt", ExtArgs["result"]["sectionStatus"]>
  export type SectionStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type SectionStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type SectionStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $SectionStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sectionId: string
      status: $Enums.ProgressStatus
      updatedAt: Date
    }, ExtArgs["result"]["sectionStatus"]>
    composites: {}
  }

  type SectionStatusGetPayload<S extends boolean | null | undefined | SectionStatusDefaultArgs> = $Result.GetResult<Prisma.$SectionStatusPayload, S>

  type SectionStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionStatusCountAggregateInputType | true
    }

  export interface SectionStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionStatus'], meta: { name: 'SectionStatus' } }
    /**
     * Find zero or one SectionStatus that matches the filter.
     * @param {SectionStatusFindUniqueArgs} args - Arguments to find a SectionStatus
     * @example
     * // Get one SectionStatus
     * const sectionStatus = await prisma.sectionStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionStatusFindUniqueArgs>(args: SelectSubset<T, SectionStatusFindUniqueArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionStatusFindUniqueOrThrowArgs} args - Arguments to find a SectionStatus
     * @example
     * // Get one SectionStatus
     * const sectionStatus = await prisma.sectionStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusFindFirstArgs} args - Arguments to find a SectionStatus
     * @example
     * // Get one SectionStatus
     * const sectionStatus = await prisma.sectionStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionStatusFindFirstArgs>(args?: SelectSubset<T, SectionStatusFindFirstArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusFindFirstOrThrowArgs} args - Arguments to find a SectionStatus
     * @example
     * // Get one SectionStatus
     * const sectionStatus = await prisma.sectionStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionStatuses
     * const sectionStatuses = await prisma.sectionStatus.findMany()
     * 
     * // Get first 10 SectionStatuses
     * const sectionStatuses = await prisma.sectionStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionStatusWithIdOnly = await prisma.sectionStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionStatusFindManyArgs>(args?: SelectSubset<T, SectionStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionStatus.
     * @param {SectionStatusCreateArgs} args - Arguments to create a SectionStatus.
     * @example
     * // Create one SectionStatus
     * const SectionStatus = await prisma.sectionStatus.create({
     *   data: {
     *     // ... data to create a SectionStatus
     *   }
     * })
     * 
     */
    create<T extends SectionStatusCreateArgs>(args: SelectSubset<T, SectionStatusCreateArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionStatuses.
     * @param {SectionStatusCreateManyArgs} args - Arguments to create many SectionStatuses.
     * @example
     * // Create many SectionStatuses
     * const sectionStatus = await prisma.sectionStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionStatusCreateManyArgs>(args?: SelectSubset<T, SectionStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionStatuses and returns the data saved in the database.
     * @param {SectionStatusCreateManyAndReturnArgs} args - Arguments to create many SectionStatuses.
     * @example
     * // Create many SectionStatuses
     * const sectionStatus = await prisma.sectionStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionStatuses and only return the `id`
     * const sectionStatusWithIdOnly = await prisma.sectionStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionStatus.
     * @param {SectionStatusDeleteArgs} args - Arguments to delete one SectionStatus.
     * @example
     * // Delete one SectionStatus
     * const SectionStatus = await prisma.sectionStatus.delete({
     *   where: {
     *     // ... filter to delete one SectionStatus
     *   }
     * })
     * 
     */
    delete<T extends SectionStatusDeleteArgs>(args: SelectSubset<T, SectionStatusDeleteArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionStatus.
     * @param {SectionStatusUpdateArgs} args - Arguments to update one SectionStatus.
     * @example
     * // Update one SectionStatus
     * const sectionStatus = await prisma.sectionStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionStatusUpdateArgs>(args: SelectSubset<T, SectionStatusUpdateArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionStatuses.
     * @param {SectionStatusDeleteManyArgs} args - Arguments to filter SectionStatuses to delete.
     * @example
     * // Delete a few SectionStatuses
     * const { count } = await prisma.sectionStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionStatusDeleteManyArgs>(args?: SelectSubset<T, SectionStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionStatuses
     * const sectionStatus = await prisma.sectionStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionStatusUpdateManyArgs>(args: SelectSubset<T, SectionStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionStatuses and returns the data updated in the database.
     * @param {SectionStatusUpdateManyAndReturnArgs} args - Arguments to update many SectionStatuses.
     * @example
     * // Update many SectionStatuses
     * const sectionStatus = await prisma.sectionStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionStatuses and only return the `id`
     * const sectionStatusWithIdOnly = await prisma.sectionStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionStatus.
     * @param {SectionStatusUpsertArgs} args - Arguments to update or create a SectionStatus.
     * @example
     * // Update or create a SectionStatus
     * const sectionStatus = await prisma.sectionStatus.upsert({
     *   create: {
     *     // ... data to create a SectionStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionStatus we want to update
     *   }
     * })
     */
    upsert<T extends SectionStatusUpsertArgs>(args: SelectSubset<T, SectionStatusUpsertArgs<ExtArgs>>): Prisma__SectionStatusClient<$Result.GetResult<Prisma.$SectionStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusCountArgs} args - Arguments to filter SectionStatuses to count.
     * @example
     * // Count the number of SectionStatuses
     * const count = await prisma.sectionStatus.count({
     *   where: {
     *     // ... the filter for the SectionStatuses we want to count
     *   }
     * })
    **/
    count<T extends SectionStatusCountArgs>(
      args?: Subset<T, SectionStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionStatusAggregateArgs>(args: Subset<T, SectionStatusAggregateArgs>): Prisma.PrismaPromise<GetSectionStatusAggregateType<T>>

    /**
     * Group by SectionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionStatusGroupByArgs} args - Group by arguments.
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
      T extends SectionStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionStatusGroupByArgs['orderBy'] }
        : { orderBy?: SectionStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionStatus model
   */
  readonly fields: SectionStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SectionStatus model
   */
  interface SectionStatusFieldRefs {
    readonly id: FieldRef<"SectionStatus", 'String'>
    readonly userId: FieldRef<"SectionStatus", 'String'>
    readonly sectionId: FieldRef<"SectionStatus", 'String'>
    readonly status: FieldRef<"SectionStatus", 'ProgressStatus'>
    readonly updatedAt: FieldRef<"SectionStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SectionStatus findUnique
   */
  export type SectionStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter, which SectionStatus to fetch.
     */
    where: SectionStatusWhereUniqueInput
  }

  /**
   * SectionStatus findUniqueOrThrow
   */
  export type SectionStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter, which SectionStatus to fetch.
     */
    where: SectionStatusWhereUniqueInput
  }

  /**
   * SectionStatus findFirst
   */
  export type SectionStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter, which SectionStatus to fetch.
     */
    where?: SectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionStatuses to fetch.
     */
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionStatuses.
     */
    cursor?: SectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionStatuses.
     */
    distinct?: SectionStatusScalarFieldEnum | SectionStatusScalarFieldEnum[]
  }

  /**
   * SectionStatus findFirstOrThrow
   */
  export type SectionStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter, which SectionStatus to fetch.
     */
    where?: SectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionStatuses to fetch.
     */
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionStatuses.
     */
    cursor?: SectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionStatuses.
     */
    distinct?: SectionStatusScalarFieldEnum | SectionStatusScalarFieldEnum[]
  }

  /**
   * SectionStatus findMany
   */
  export type SectionStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter, which SectionStatuses to fetch.
     */
    where?: SectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionStatuses to fetch.
     */
    orderBy?: SectionStatusOrderByWithRelationInput | SectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionStatuses.
     */
    cursor?: SectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionStatuses.
     */
    distinct?: SectionStatusScalarFieldEnum | SectionStatusScalarFieldEnum[]
  }

  /**
   * SectionStatus create
   */
  export type SectionStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionStatus.
     */
    data: XOR<SectionStatusCreateInput, SectionStatusUncheckedCreateInput>
  }

  /**
   * SectionStatus createMany
   */
  export type SectionStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionStatuses.
     */
    data: SectionStatusCreateManyInput | SectionStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionStatus createManyAndReturn
   */
  export type SectionStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * The data used to create many SectionStatuses.
     */
    data: SectionStatusCreateManyInput | SectionStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionStatus update
   */
  export type SectionStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionStatus.
     */
    data: XOR<SectionStatusUpdateInput, SectionStatusUncheckedUpdateInput>
    /**
     * Choose, which SectionStatus to update.
     */
    where: SectionStatusWhereUniqueInput
  }

  /**
   * SectionStatus updateMany
   */
  export type SectionStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionStatuses.
     */
    data: XOR<SectionStatusUpdateManyMutationInput, SectionStatusUncheckedUpdateManyInput>
    /**
     * Filter which SectionStatuses to update
     */
    where?: SectionStatusWhereInput
    /**
     * Limit how many SectionStatuses to update.
     */
    limit?: number
  }

  /**
   * SectionStatus updateManyAndReturn
   */
  export type SectionStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * The data used to update SectionStatuses.
     */
    data: XOR<SectionStatusUpdateManyMutationInput, SectionStatusUncheckedUpdateManyInput>
    /**
     * Filter which SectionStatuses to update
     */
    where?: SectionStatusWhereInput
    /**
     * Limit how many SectionStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionStatus upsert
   */
  export type SectionStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionStatus to update in case it exists.
     */
    where: SectionStatusWhereUniqueInput
    /**
     * In case the SectionStatus found by the `where` argument doesn't exist, create a new SectionStatus with this data.
     */
    create: XOR<SectionStatusCreateInput, SectionStatusUncheckedCreateInput>
    /**
     * In case the SectionStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionStatusUpdateInput, SectionStatusUncheckedUpdateInput>
  }

  /**
   * SectionStatus delete
   */
  export type SectionStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
    /**
     * Filter which SectionStatus to delete.
     */
    where: SectionStatusWhereUniqueInput
  }

  /**
   * SectionStatus deleteMany
   */
  export type SectionStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionStatuses to delete
     */
    where?: SectionStatusWhereInput
    /**
     * Limit how many SectionStatuses to delete.
     */
    limit?: number
  }

  /**
   * SectionStatus without action
   */
  export type SectionStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionStatus
     */
    select?: SectionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionStatus
     */
    omit?: SectionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionStatusInclude<ExtArgs> | null
  }


  /**
   * Model ModuleStatus
   */

  export type AggregateModuleStatus = {
    _count: ModuleStatusCountAggregateOutputType | null
    _min: ModuleStatusMinAggregateOutputType | null
    _max: ModuleStatusMaxAggregateOutputType | null
  }

  export type ModuleStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type ModuleStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type ModuleStatusCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type ModuleStatusMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    updatedAt?: true
  }

  export type ModuleStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    updatedAt?: true
  }

  export type ModuleStatusCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleStatus to aggregate.
     */
    where?: ModuleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleStatuses to fetch.
     */
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleStatuses
    **/
    _count?: true | ModuleStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleStatusMaxAggregateInputType
  }

  export type GetModuleStatusAggregateType<T extends ModuleStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleStatus[P]>
      : GetScalarType<T[P], AggregateModuleStatus[P]>
  }




  export type ModuleStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleStatusWhereInput
    orderBy?: ModuleStatusOrderByWithAggregationInput | ModuleStatusOrderByWithAggregationInput[]
    by: ModuleStatusScalarFieldEnum[] | ModuleStatusScalarFieldEnum
    having?: ModuleStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleStatusCountAggregateInputType | true
    _min?: ModuleStatusMinAggregateInputType
    _max?: ModuleStatusMaxAggregateInputType
  }

  export type ModuleStatusGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    status: $Enums.ProgressStatus
    updatedAt: Date
    _count: ModuleStatusCountAggregateOutputType | null
    _min: ModuleStatusMinAggregateOutputType | null
    _max: ModuleStatusMaxAggregateOutputType | null
  }

  type GetModuleStatusGroupByPayload<T extends ModuleStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleStatusGroupByOutputType[P]>
        }
      >
    >


  export type ModuleStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleStatus"]>

  export type ModuleStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleStatus"]>

  export type ModuleStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleStatus"]>

  export type ModuleStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type ModuleStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "status" | "updatedAt", ExtArgs["result"]["moduleStatus"]>
  export type ModuleStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      status: $Enums.ProgressStatus
      updatedAt: Date
    }, ExtArgs["result"]["moduleStatus"]>
    composites: {}
  }

  type ModuleStatusGetPayload<S extends boolean | null | undefined | ModuleStatusDefaultArgs> = $Result.GetResult<Prisma.$ModuleStatusPayload, S>

  type ModuleStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleStatusCountAggregateInputType | true
    }

  export interface ModuleStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleStatus'], meta: { name: 'ModuleStatus' } }
    /**
     * Find zero or one ModuleStatus that matches the filter.
     * @param {ModuleStatusFindUniqueArgs} args - Arguments to find a ModuleStatus
     * @example
     * // Get one ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleStatusFindUniqueArgs>(args: SelectSubset<T, ModuleStatusFindUniqueArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleStatusFindUniqueOrThrowArgs} args - Arguments to find a ModuleStatus
     * @example
     * // Get one ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusFindFirstArgs} args - Arguments to find a ModuleStatus
     * @example
     * // Get one ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleStatusFindFirstArgs>(args?: SelectSubset<T, ModuleStatusFindFirstArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusFindFirstOrThrowArgs} args - Arguments to find a ModuleStatus
     * @example
     * // Get one ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleStatuses
     * const moduleStatuses = await prisma.moduleStatus.findMany()
     * 
     * // Get first 10 ModuleStatuses
     * const moduleStatuses = await prisma.moduleStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleStatusWithIdOnly = await prisma.moduleStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleStatusFindManyArgs>(args?: SelectSubset<T, ModuleStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleStatus.
     * @param {ModuleStatusCreateArgs} args - Arguments to create a ModuleStatus.
     * @example
     * // Create one ModuleStatus
     * const ModuleStatus = await prisma.moduleStatus.create({
     *   data: {
     *     // ... data to create a ModuleStatus
     *   }
     * })
     * 
     */
    create<T extends ModuleStatusCreateArgs>(args: SelectSubset<T, ModuleStatusCreateArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleStatuses.
     * @param {ModuleStatusCreateManyArgs} args - Arguments to create many ModuleStatuses.
     * @example
     * // Create many ModuleStatuses
     * const moduleStatus = await prisma.moduleStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleStatusCreateManyArgs>(args?: SelectSubset<T, ModuleStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleStatuses and returns the data saved in the database.
     * @param {ModuleStatusCreateManyAndReturnArgs} args - Arguments to create many ModuleStatuses.
     * @example
     * // Create many ModuleStatuses
     * const moduleStatus = await prisma.moduleStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleStatuses and only return the `id`
     * const moduleStatusWithIdOnly = await prisma.moduleStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleStatus.
     * @param {ModuleStatusDeleteArgs} args - Arguments to delete one ModuleStatus.
     * @example
     * // Delete one ModuleStatus
     * const ModuleStatus = await prisma.moduleStatus.delete({
     *   where: {
     *     // ... filter to delete one ModuleStatus
     *   }
     * })
     * 
     */
    delete<T extends ModuleStatusDeleteArgs>(args: SelectSubset<T, ModuleStatusDeleteArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleStatus.
     * @param {ModuleStatusUpdateArgs} args - Arguments to update one ModuleStatus.
     * @example
     * // Update one ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleStatusUpdateArgs>(args: SelectSubset<T, ModuleStatusUpdateArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleStatuses.
     * @param {ModuleStatusDeleteManyArgs} args - Arguments to filter ModuleStatuses to delete.
     * @example
     * // Delete a few ModuleStatuses
     * const { count } = await prisma.moduleStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleStatusDeleteManyArgs>(args?: SelectSubset<T, ModuleStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleStatuses
     * const moduleStatus = await prisma.moduleStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleStatusUpdateManyArgs>(args: SelectSubset<T, ModuleStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleStatuses and returns the data updated in the database.
     * @param {ModuleStatusUpdateManyAndReturnArgs} args - Arguments to update many ModuleStatuses.
     * @example
     * // Update many ModuleStatuses
     * const moduleStatus = await prisma.moduleStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleStatuses and only return the `id`
     * const moduleStatusWithIdOnly = await prisma.moduleStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleStatus.
     * @param {ModuleStatusUpsertArgs} args - Arguments to update or create a ModuleStatus.
     * @example
     * // Update or create a ModuleStatus
     * const moduleStatus = await prisma.moduleStatus.upsert({
     *   create: {
     *     // ... data to create a ModuleStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleStatus we want to update
     *   }
     * })
     */
    upsert<T extends ModuleStatusUpsertArgs>(args: SelectSubset<T, ModuleStatusUpsertArgs<ExtArgs>>): Prisma__ModuleStatusClient<$Result.GetResult<Prisma.$ModuleStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusCountArgs} args - Arguments to filter ModuleStatuses to count.
     * @example
     * // Count the number of ModuleStatuses
     * const count = await prisma.moduleStatus.count({
     *   where: {
     *     // ... the filter for the ModuleStatuses we want to count
     *   }
     * })
    **/
    count<T extends ModuleStatusCountArgs>(
      args?: Subset<T, ModuleStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleStatusAggregateArgs>(args: Subset<T, ModuleStatusAggregateArgs>): Prisma.PrismaPromise<GetModuleStatusAggregateType<T>>

    /**
     * Group by ModuleStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleStatusGroupByArgs} args - Group by arguments.
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
      T extends ModuleStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleStatusGroupByArgs['orderBy'] }
        : { orderBy?: ModuleStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleStatus model
   */
  readonly fields: ModuleStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModuleStatus model
   */
  interface ModuleStatusFieldRefs {
    readonly id: FieldRef<"ModuleStatus", 'String'>
    readonly userId: FieldRef<"ModuleStatus", 'String'>
    readonly moduleId: FieldRef<"ModuleStatus", 'String'>
    readonly status: FieldRef<"ModuleStatus", 'ProgressStatus'>
    readonly updatedAt: FieldRef<"ModuleStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModuleStatus findUnique
   */
  export type ModuleStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter, which ModuleStatus to fetch.
     */
    where: ModuleStatusWhereUniqueInput
  }

  /**
   * ModuleStatus findUniqueOrThrow
   */
  export type ModuleStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter, which ModuleStatus to fetch.
     */
    where: ModuleStatusWhereUniqueInput
  }

  /**
   * ModuleStatus findFirst
   */
  export type ModuleStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter, which ModuleStatus to fetch.
     */
    where?: ModuleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleStatuses to fetch.
     */
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleStatuses.
     */
    cursor?: ModuleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleStatuses.
     */
    distinct?: ModuleStatusScalarFieldEnum | ModuleStatusScalarFieldEnum[]
  }

  /**
   * ModuleStatus findFirstOrThrow
   */
  export type ModuleStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter, which ModuleStatus to fetch.
     */
    where?: ModuleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleStatuses to fetch.
     */
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleStatuses.
     */
    cursor?: ModuleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleStatuses.
     */
    distinct?: ModuleStatusScalarFieldEnum | ModuleStatusScalarFieldEnum[]
  }

  /**
   * ModuleStatus findMany
   */
  export type ModuleStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter, which ModuleStatuses to fetch.
     */
    where?: ModuleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleStatuses to fetch.
     */
    orderBy?: ModuleStatusOrderByWithRelationInput | ModuleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleStatuses.
     */
    cursor?: ModuleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleStatuses.
     */
    distinct?: ModuleStatusScalarFieldEnum | ModuleStatusScalarFieldEnum[]
  }

  /**
   * ModuleStatus create
   */
  export type ModuleStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleStatus.
     */
    data: XOR<ModuleStatusCreateInput, ModuleStatusUncheckedCreateInput>
  }

  /**
   * ModuleStatus createMany
   */
  export type ModuleStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleStatuses.
     */
    data: ModuleStatusCreateManyInput | ModuleStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleStatus createManyAndReturn
   */
  export type ModuleStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleStatuses.
     */
    data: ModuleStatusCreateManyInput | ModuleStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleStatus update
   */
  export type ModuleStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleStatus.
     */
    data: XOR<ModuleStatusUpdateInput, ModuleStatusUncheckedUpdateInput>
    /**
     * Choose, which ModuleStatus to update.
     */
    where: ModuleStatusWhereUniqueInput
  }

  /**
   * ModuleStatus updateMany
   */
  export type ModuleStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleStatuses.
     */
    data: XOR<ModuleStatusUpdateManyMutationInput, ModuleStatusUncheckedUpdateManyInput>
    /**
     * Filter which ModuleStatuses to update
     */
    where?: ModuleStatusWhereInput
    /**
     * Limit how many ModuleStatuses to update.
     */
    limit?: number
  }

  /**
   * ModuleStatus updateManyAndReturn
   */
  export type ModuleStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * The data used to update ModuleStatuses.
     */
    data: XOR<ModuleStatusUpdateManyMutationInput, ModuleStatusUncheckedUpdateManyInput>
    /**
     * Filter which ModuleStatuses to update
     */
    where?: ModuleStatusWhereInput
    /**
     * Limit how many ModuleStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleStatus upsert
   */
  export type ModuleStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleStatus to update in case it exists.
     */
    where: ModuleStatusWhereUniqueInput
    /**
     * In case the ModuleStatus found by the `where` argument doesn't exist, create a new ModuleStatus with this data.
     */
    create: XOR<ModuleStatusCreateInput, ModuleStatusUncheckedCreateInput>
    /**
     * In case the ModuleStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleStatusUpdateInput, ModuleStatusUncheckedUpdateInput>
  }

  /**
   * ModuleStatus delete
   */
  export type ModuleStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
    /**
     * Filter which ModuleStatus to delete.
     */
    where: ModuleStatusWhereUniqueInput
  }

  /**
   * ModuleStatus deleteMany
   */
  export type ModuleStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleStatuses to delete
     */
    where?: ModuleStatusWhereInput
    /**
     * Limit how many ModuleStatuses to delete.
     */
    limit?: number
  }

  /**
   * ModuleStatus without action
   */
  export type ModuleStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleStatus
     */
    select?: ModuleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleStatus
     */
    omit?: ModuleStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleStatusInclude<ExtArgs> | null
  }


  /**
   * Model PartStatus
   */

  export type AggregatePartStatus = {
    _count: PartStatusCountAggregateOutputType | null
    _min: PartStatusMinAggregateOutputType | null
    _max: PartStatusMaxAggregateOutputType | null
  }

  export type PartStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    partId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type PartStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    partId: string | null
    status: $Enums.ProgressStatus | null
    updatedAt: Date | null
  }

  export type PartStatusCountAggregateOutputType = {
    id: number
    userId: number
    partId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type PartStatusMinAggregateInputType = {
    id?: true
    userId?: true
    partId?: true
    status?: true
    updatedAt?: true
  }

  export type PartStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    partId?: true
    status?: true
    updatedAt?: true
  }

  export type PartStatusCountAggregateInputType = {
    id?: true
    userId?: true
    partId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type PartStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartStatus to aggregate.
     */
    where?: PartStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartStatuses to fetch.
     */
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartStatuses
    **/
    _count?: true | PartStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartStatusMaxAggregateInputType
  }

  export type GetPartStatusAggregateType<T extends PartStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePartStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartStatus[P]>
      : GetScalarType<T[P], AggregatePartStatus[P]>
  }




  export type PartStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartStatusWhereInput
    orderBy?: PartStatusOrderByWithAggregationInput | PartStatusOrderByWithAggregationInput[]
    by: PartStatusScalarFieldEnum[] | PartStatusScalarFieldEnum
    having?: PartStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartStatusCountAggregateInputType | true
    _min?: PartStatusMinAggregateInputType
    _max?: PartStatusMaxAggregateInputType
  }

  export type PartStatusGroupByOutputType = {
    id: string
    userId: string
    partId: string
    status: $Enums.ProgressStatus
    updatedAt: Date
    _count: PartStatusCountAggregateOutputType | null
    _min: PartStatusMinAggregateOutputType | null
    _max: PartStatusMaxAggregateOutputType | null
  }

  type GetPartStatusGroupByPayload<T extends PartStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PartStatusGroupByOutputType[P]>
        }
      >
    >


  export type PartStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    partId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partStatus"]>

  export type PartStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    partId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partStatus"]>

  export type PartStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    partId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partStatus"]>

  export type PartStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    partId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type PartStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "partId" | "status" | "updatedAt", ExtArgs["result"]["partStatus"]>
  export type PartStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type PartStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type PartStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    part?: boolean | PartDefaultArgs<ExtArgs>
  }

  export type $PartStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      part: Prisma.$PartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      partId: string
      status: $Enums.ProgressStatus
      updatedAt: Date
    }, ExtArgs["result"]["partStatus"]>
    composites: {}
  }

  type PartStatusGetPayload<S extends boolean | null | undefined | PartStatusDefaultArgs> = $Result.GetResult<Prisma.$PartStatusPayload, S>

  type PartStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartStatusCountAggregateInputType | true
    }

  export interface PartStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartStatus'], meta: { name: 'PartStatus' } }
    /**
     * Find zero or one PartStatus that matches the filter.
     * @param {PartStatusFindUniqueArgs} args - Arguments to find a PartStatus
     * @example
     * // Get one PartStatus
     * const partStatus = await prisma.partStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartStatusFindUniqueArgs>(args: SelectSubset<T, PartStatusFindUniqueArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartStatusFindUniqueOrThrowArgs} args - Arguments to find a PartStatus
     * @example
     * // Get one PartStatus
     * const partStatus = await prisma.partStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, PartStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusFindFirstArgs} args - Arguments to find a PartStatus
     * @example
     * // Get one PartStatus
     * const partStatus = await prisma.partStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartStatusFindFirstArgs>(args?: SelectSubset<T, PartStatusFindFirstArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusFindFirstOrThrowArgs} args - Arguments to find a PartStatus
     * @example
     * // Get one PartStatus
     * const partStatus = await prisma.partStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, PartStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartStatuses
     * const partStatuses = await prisma.partStatus.findMany()
     * 
     * // Get first 10 PartStatuses
     * const partStatuses = await prisma.partStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partStatusWithIdOnly = await prisma.partStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartStatusFindManyArgs>(args?: SelectSubset<T, PartStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartStatus.
     * @param {PartStatusCreateArgs} args - Arguments to create a PartStatus.
     * @example
     * // Create one PartStatus
     * const PartStatus = await prisma.partStatus.create({
     *   data: {
     *     // ... data to create a PartStatus
     *   }
     * })
     * 
     */
    create<T extends PartStatusCreateArgs>(args: SelectSubset<T, PartStatusCreateArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartStatuses.
     * @param {PartStatusCreateManyArgs} args - Arguments to create many PartStatuses.
     * @example
     * // Create many PartStatuses
     * const partStatus = await prisma.partStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartStatusCreateManyArgs>(args?: SelectSubset<T, PartStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartStatuses and returns the data saved in the database.
     * @param {PartStatusCreateManyAndReturnArgs} args - Arguments to create many PartStatuses.
     * @example
     * // Create many PartStatuses
     * const partStatus = await prisma.partStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartStatuses and only return the `id`
     * const partStatusWithIdOnly = await prisma.partStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, PartStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartStatus.
     * @param {PartStatusDeleteArgs} args - Arguments to delete one PartStatus.
     * @example
     * // Delete one PartStatus
     * const PartStatus = await prisma.partStatus.delete({
     *   where: {
     *     // ... filter to delete one PartStatus
     *   }
     * })
     * 
     */
    delete<T extends PartStatusDeleteArgs>(args: SelectSubset<T, PartStatusDeleteArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartStatus.
     * @param {PartStatusUpdateArgs} args - Arguments to update one PartStatus.
     * @example
     * // Update one PartStatus
     * const partStatus = await prisma.partStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartStatusUpdateArgs>(args: SelectSubset<T, PartStatusUpdateArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartStatuses.
     * @param {PartStatusDeleteManyArgs} args - Arguments to filter PartStatuses to delete.
     * @example
     * // Delete a few PartStatuses
     * const { count } = await prisma.partStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartStatusDeleteManyArgs>(args?: SelectSubset<T, PartStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartStatuses
     * const partStatus = await prisma.partStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartStatusUpdateManyArgs>(args: SelectSubset<T, PartStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartStatuses and returns the data updated in the database.
     * @param {PartStatusUpdateManyAndReturnArgs} args - Arguments to update many PartStatuses.
     * @example
     * // Update many PartStatuses
     * const partStatus = await prisma.partStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartStatuses and only return the `id`
     * const partStatusWithIdOnly = await prisma.partStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, PartStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartStatus.
     * @param {PartStatusUpsertArgs} args - Arguments to update or create a PartStatus.
     * @example
     * // Update or create a PartStatus
     * const partStatus = await prisma.partStatus.upsert({
     *   create: {
     *     // ... data to create a PartStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartStatus we want to update
     *   }
     * })
     */
    upsert<T extends PartStatusUpsertArgs>(args: SelectSubset<T, PartStatusUpsertArgs<ExtArgs>>): Prisma__PartStatusClient<$Result.GetResult<Prisma.$PartStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusCountArgs} args - Arguments to filter PartStatuses to count.
     * @example
     * // Count the number of PartStatuses
     * const count = await prisma.partStatus.count({
     *   where: {
     *     // ... the filter for the PartStatuses we want to count
     *   }
     * })
    **/
    count<T extends PartStatusCountArgs>(
      args?: Subset<T, PartStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartStatusAggregateArgs>(args: Subset<T, PartStatusAggregateArgs>): Prisma.PrismaPromise<GetPartStatusAggregateType<T>>

    /**
     * Group by PartStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartStatusGroupByArgs} args - Group by arguments.
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
      T extends PartStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartStatusGroupByArgs['orderBy'] }
        : { orderBy?: PartStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartStatus model
   */
  readonly fields: PartStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    part<T extends PartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartDefaultArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PartStatus model
   */
  interface PartStatusFieldRefs {
    readonly id: FieldRef<"PartStatus", 'String'>
    readonly userId: FieldRef<"PartStatus", 'String'>
    readonly partId: FieldRef<"PartStatus", 'String'>
    readonly status: FieldRef<"PartStatus", 'ProgressStatus'>
    readonly updatedAt: FieldRef<"PartStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartStatus findUnique
   */
  export type PartStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter, which PartStatus to fetch.
     */
    where: PartStatusWhereUniqueInput
  }

  /**
   * PartStatus findUniqueOrThrow
   */
  export type PartStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter, which PartStatus to fetch.
     */
    where: PartStatusWhereUniqueInput
  }

  /**
   * PartStatus findFirst
   */
  export type PartStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter, which PartStatus to fetch.
     */
    where?: PartStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartStatuses to fetch.
     */
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartStatuses.
     */
    cursor?: PartStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartStatuses.
     */
    distinct?: PartStatusScalarFieldEnum | PartStatusScalarFieldEnum[]
  }

  /**
   * PartStatus findFirstOrThrow
   */
  export type PartStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter, which PartStatus to fetch.
     */
    where?: PartStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartStatuses to fetch.
     */
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartStatuses.
     */
    cursor?: PartStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartStatuses.
     */
    distinct?: PartStatusScalarFieldEnum | PartStatusScalarFieldEnum[]
  }

  /**
   * PartStatus findMany
   */
  export type PartStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter, which PartStatuses to fetch.
     */
    where?: PartStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartStatuses to fetch.
     */
    orderBy?: PartStatusOrderByWithRelationInput | PartStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartStatuses.
     */
    cursor?: PartStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartStatuses.
     */
    distinct?: PartStatusScalarFieldEnum | PartStatusScalarFieldEnum[]
  }

  /**
   * PartStatus create
   */
  export type PartStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a PartStatus.
     */
    data: XOR<PartStatusCreateInput, PartStatusUncheckedCreateInput>
  }

  /**
   * PartStatus createMany
   */
  export type PartStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartStatuses.
     */
    data: PartStatusCreateManyInput | PartStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartStatus createManyAndReturn
   */
  export type PartStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * The data used to create many PartStatuses.
     */
    data: PartStatusCreateManyInput | PartStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartStatus update
   */
  export type PartStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a PartStatus.
     */
    data: XOR<PartStatusUpdateInput, PartStatusUncheckedUpdateInput>
    /**
     * Choose, which PartStatus to update.
     */
    where: PartStatusWhereUniqueInput
  }

  /**
   * PartStatus updateMany
   */
  export type PartStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartStatuses.
     */
    data: XOR<PartStatusUpdateManyMutationInput, PartStatusUncheckedUpdateManyInput>
    /**
     * Filter which PartStatuses to update
     */
    where?: PartStatusWhereInput
    /**
     * Limit how many PartStatuses to update.
     */
    limit?: number
  }

  /**
   * PartStatus updateManyAndReturn
   */
  export type PartStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * The data used to update PartStatuses.
     */
    data: XOR<PartStatusUpdateManyMutationInput, PartStatusUncheckedUpdateManyInput>
    /**
     * Filter which PartStatuses to update
     */
    where?: PartStatusWhereInput
    /**
     * Limit how many PartStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartStatus upsert
   */
  export type PartStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the PartStatus to update in case it exists.
     */
    where: PartStatusWhereUniqueInput
    /**
     * In case the PartStatus found by the `where` argument doesn't exist, create a new PartStatus with this data.
     */
    create: XOR<PartStatusCreateInput, PartStatusUncheckedCreateInput>
    /**
     * In case the PartStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartStatusUpdateInput, PartStatusUncheckedUpdateInput>
  }

  /**
   * PartStatus delete
   */
  export type PartStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
    /**
     * Filter which PartStatus to delete.
     */
    where: PartStatusWhereUniqueInput
  }

  /**
   * PartStatus deleteMany
   */
  export type PartStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartStatuses to delete
     */
    where?: PartStatusWhereInput
    /**
     * Limit how many PartStatuses to delete.
     */
    limit?: number
  }

  /**
   * PartStatus without action
   */
  export type PartStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartStatus
     */
    select?: PartStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartStatus
     */
    omit?: PartStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartStatusInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    certificateNo: string | null
    issueDate: Date | null
    fileUrl: string | null
    verificationToken: string | null
    isRevoked: boolean | null
    createdAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: string | null
    certificateNo: string | null
    issueDate: Date | null
    fileUrl: string | null
    verificationToken: string | null
    isRevoked: boolean | null
    createdAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    userId: number
    levelId: number
    certificateNo: number
    issueDate: number
    fileUrl: number
    verificationToken: number
    isRevoked: number
    createdAt: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    certificateNo?: true
    issueDate?: true
    fileUrl?: true
    verificationToken?: true
    isRevoked?: true
    createdAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    certificateNo?: true
    issueDate?: true
    fileUrl?: true
    verificationToken?: true
    isRevoked?: true
    createdAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    certificateNo?: true
    issueDate?: true
    fileUrl?: true
    verificationToken?: true
    isRevoked?: true
    createdAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    userId: string
    levelId: string
    certificateNo: string
    issueDate: Date
    fileUrl: string
    verificationToken: string
    isRevoked: boolean
    createdAt: Date
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    certificateNo?: boolean
    issueDate?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    certificateNo?: boolean
    issueDate?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    certificateNo?: boolean
    issueDate?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    userId?: boolean
    levelId?: boolean
    certificateNo?: boolean
    issueDate?: boolean
    fileUrl?: boolean
    verificationToken?: boolean
    isRevoked?: boolean
    createdAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "levelId" | "certificateNo" | "issueDate" | "fileUrl" | "verificationToken" | "isRevoked" | "createdAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      levelId: string
      certificateNo: string
      issueDate: Date
      fileUrl: string
      verificationToken: string
      isRevoked: boolean
      createdAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly levelId: FieldRef<"Certificate", 'String'>
    readonly certificateNo: FieldRef<"Certificate", 'String'>
    readonly issueDate: FieldRef<"Certificate", 'DateTime'>
    readonly fileUrl: FieldRef<"Certificate", 'String'>
    readonly verificationToken: FieldRef<"Certificate", 'String'>
    readonly isRevoked: FieldRef<"Certificate", 'Boolean'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    hasSeenWelcome: 'hasSeenWelcome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dob: 'dob',
    visaType: 'visaType',
    program: 'program',
    gender: 'gender',
    universityName: 'universityName',
    country: 'country',
    phoneNo: 'phoneNo',
    intake: 'intake',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    deTitle: 'deTitle',
    order: 'order'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    levelId: 'levelId',
    title: 'title',
    deTitle: 'deTitle',
    visaType: 'visaType',
    specialization: 'specialization',
    order: 'order'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    title: 'title',
    deTitle: 'deTitle',
    visaType: 'visaType',
    specialization: 'specialization',
    order: 'order'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    title: 'title',
    deTitle: 'deTitle',
    content: 'content',
    contentId: 'contentId',
    order: 'order'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const UserCurrentPositionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    levelId: 'levelId',
    sectionId: 'sectionId',
    moduleId: 'moduleId',
    partId: 'partId',
    updatedAt: 'updatedAt'
  };

  export type UserCurrentPositionScalarFieldEnum = (typeof UserCurrentPositionScalarFieldEnum)[keyof typeof UserCurrentPositionScalarFieldEnum]


  export const LevelProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    levelId: 'levelId',
    progressPercentage: 'progressPercentage',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type LevelProgressScalarFieldEnum = (typeof LevelProgressScalarFieldEnum)[keyof typeof LevelProgressScalarFieldEnum]


  export const SectionStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sectionId: 'sectionId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type SectionStatusScalarFieldEnum = (typeof SectionStatusScalarFieldEnum)[keyof typeof SectionStatusScalarFieldEnum]


  export const ModuleStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type ModuleStatusScalarFieldEnum = (typeof ModuleStatusScalarFieldEnum)[keyof typeof ModuleStatusScalarFieldEnum]


  export const PartStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    partId: 'partId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type PartStatusScalarFieldEnum = (typeof PartStatusScalarFieldEnum)[keyof typeof PartStatusScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    levelId: 'levelId',
    certificateNo: 'certificateNo',
    issueDate: 'issueDate',
    fileUrl: 'fileUrl',
    verificationToken: 'verificationToken',
    isRevoked: 'isRevoked',
    createdAt: 'createdAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VisaType'
   */
  export type EnumVisaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaType'>
    


  /**
   * Reference to a field of type 'VisaType[]'
   */
  export type ListEnumVisaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaType[]'>
    


  /**
   * Reference to a field of type 'Programs'
   */
  export type EnumProgramsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Programs'>
    


  /**
   * Reference to a field of type 'Programs[]'
   */
  export type ListEnumProgramsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Programs[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Intake'
   */
  export type EnumIntakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intake'>
    


  /**
   * Reference to a field of type 'Intake[]'
   */
  export type ListEnumIntakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intake[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    hasSeenWelcome?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    currentPos?: XOR<UserCurrentPositionNullableScalarRelationFilter, UserCurrentPositionWhereInput> | null
    levelProgress?: LevelProgressListRelationFilter
    sectionStatus?: SectionStatusListRelationFilter
    moduleStatus?: ModuleStatusListRelationFilter
    partStatus?: PartStatusListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    hasSeenWelcome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    currentPos?: UserCurrentPositionOrderByWithRelationInput
    levelProgress?: LevelProgressOrderByRelationAggregateInput
    sectionStatus?: SectionStatusOrderByRelationAggregateInput
    moduleStatus?: ModuleStatusOrderByRelationAggregateInput
    partStatus?: PartStatusOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    hasSeenWelcome?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    currentPos?: XOR<UserCurrentPositionNullableScalarRelationFilter, UserCurrentPositionWhereInput> | null
    levelProgress?: LevelProgressListRelationFilter
    sectionStatus?: SectionStatusListRelationFilter
    moduleStatus?: ModuleStatusListRelationFilter
    partStatus?: PartStatusListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    hasSeenWelcome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    hasSeenWelcome?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    dob?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    visaType?: EnumVisaTypeFilter<"UserProfile"> | $Enums.VisaType
    program?: EnumProgramsFilter<"UserProfile"> | $Enums.Programs
    gender?: EnumGenderFilter<"UserProfile"> | $Enums.Gender
    universityName?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    phoneNo?: StringNullableFilter<"UserProfile"> | string | null
    intake?: EnumIntakeNullableFilter<"UserProfile"> | $Enums.Intake | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dob?: SortOrderInput | SortOrder
    visaType?: SortOrder
    program?: SortOrder
    gender?: SortOrder
    universityName?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phoneNo?: SortOrderInput | SortOrder
    intake?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    phoneNo?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    dob?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    visaType?: EnumVisaTypeFilter<"UserProfile"> | $Enums.VisaType
    program?: EnumProgramsFilter<"UserProfile"> | $Enums.Programs
    gender?: EnumGenderFilter<"UserProfile"> | $Enums.Gender
    universityName?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    intake?: EnumIntakeNullableFilter<"UserProfile"> | $Enums.Intake | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "phoneNo">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dob?: SortOrderInput | SortOrder
    visaType?: SortOrder
    program?: SortOrder
    gender?: SortOrder
    universityName?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phoneNo?: SortOrderInput | SortOrder
    intake?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    visaType?: EnumVisaTypeWithAggregatesFilter<"UserProfile"> | $Enums.VisaType
    program?: EnumProgramsWithAggregatesFilter<"UserProfile"> | $Enums.Programs
    gender?: EnumGenderWithAggregatesFilter<"UserProfile"> | $Enums.Gender
    universityName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    country?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phoneNo?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    intake?: EnumIntakeNullableWithAggregatesFilter<"UserProfile"> | $Enums.Intake | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: StringFilter<"Level"> | string
    slug?: StringFilter<"Level"> | string
    title?: StringFilter<"Level"> | string
    deTitle?: StringNullableFilter<"Level"> | string | null
    order?: IntFilter<"Level"> | number
    sections?: SectionListRelationFilter
    progress?: LevelProgressListRelationFilter
    certificates?: CertificateListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    order?: SortOrder
    sections?: SectionOrderByRelationAggregateInput
    progress?: LevelProgressOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    currentPos?: UserCurrentPositionOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    title?: StringFilter<"Level"> | string
    deTitle?: StringNullableFilter<"Level"> | string | null
    order?: IntFilter<"Level"> | number
    sections?: SectionListRelationFilter
    progress?: LevelProgressListRelationFilter
    certificates?: CertificateListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }, "id" | "slug">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Level"> | string
    slug?: StringWithAggregatesFilter<"Level"> | string
    title?: StringWithAggregatesFilter<"Level"> | string
    deTitle?: StringNullableWithAggregatesFilter<"Level"> | string | null
    order?: IntWithAggregatesFilter<"Level"> | number
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    levelId?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    deTitle?: StringNullableFilter<"Section"> | string | null
    visaType?: StringNullableFilter<"Section"> | string | null
    specialization?: StringNullableFilter<"Section"> | string | null
    order?: IntFilter<"Section"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    modules?: ModuleListRelationFilter
    status?: SectionStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    levelId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    order?: SortOrder
    level?: LevelOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
    status?: SectionStatusOrderByRelationAggregateInput
    currentPos?: UserCurrentPositionOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    levelId?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    deTitle?: StringNullableFilter<"Section"> | string | null
    visaType?: StringNullableFilter<"Section"> | string | null
    specialization?: StringNullableFilter<"Section"> | string | null
    order?: IntFilter<"Section"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    modules?: ModuleListRelationFilter
    status?: SectionStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    levelId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    levelId?: StringWithAggregatesFilter<"Section"> | string
    title?: StringWithAggregatesFilter<"Section"> | string
    deTitle?: StringNullableWithAggregatesFilter<"Section"> | string | null
    visaType?: StringNullableWithAggregatesFilter<"Section"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"Section"> | string | null
    order?: IntWithAggregatesFilter<"Section"> | number
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    sectionId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    deTitle?: StringNullableFilter<"Module"> | string | null
    visaType?: StringNullableFilter<"Module"> | string | null
    specialization?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    parts?: PartListRelationFilter
    statuses?: ModuleStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    order?: SortOrder
    section?: SectionOrderByWithRelationInput
    parts?: PartOrderByRelationAggregateInput
    statuses?: ModuleStatusOrderByRelationAggregateInput
    currentPos?: UserCurrentPositionOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    sectionId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    deTitle?: StringNullableFilter<"Module"> | string | null
    visaType?: StringNullableFilter<"Module"> | string | null
    specialization?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    parts?: PartListRelationFilter
    statuses?: ModuleStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    sectionId?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    deTitle?: StringNullableWithAggregatesFilter<"Module"> | string | null
    visaType?: StringNullableWithAggregatesFilter<"Module"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"Module"> | string | null
    order?: IntWithAggregatesFilter<"Module"> | number
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: StringFilter<"Part"> | string
    moduleId?: StringFilter<"Part"> | string
    title?: StringFilter<"Part"> | string
    deTitle?: StringNullableFilter<"Part"> | string | null
    content?: JsonNullableFilter<"Part">
    contentId?: StringFilter<"Part"> | string
    order?: IntFilter<"Part"> | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    status?: PartStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    contentId?: SortOrder
    order?: SortOrder
    module?: ModuleOrderByWithRelationInput
    status?: PartStatusOrderByRelationAggregateInput
    currentPos?: UserCurrentPositionOrderByRelationAggregateInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    moduleId?: StringFilter<"Part"> | string
    title?: StringFilter<"Part"> | string
    deTitle?: StringNullableFilter<"Part"> | string | null
    content?: JsonNullableFilter<"Part">
    contentId?: StringFilter<"Part"> | string
    order?: IntFilter<"Part"> | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    status?: PartStatusListRelationFilter
    currentPos?: UserCurrentPositionListRelationFilter
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    contentId?: SortOrder
    order?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Part"> | string
    moduleId?: StringWithAggregatesFilter<"Part"> | string
    title?: StringWithAggregatesFilter<"Part"> | string
    deTitle?: StringNullableWithAggregatesFilter<"Part"> | string | null
    content?: JsonNullableWithAggregatesFilter<"Part">
    contentId?: StringWithAggregatesFilter<"Part"> | string
    order?: IntWithAggregatesFilter<"Part"> | number
  }

  export type UserCurrentPositionWhereInput = {
    AND?: UserCurrentPositionWhereInput | UserCurrentPositionWhereInput[]
    OR?: UserCurrentPositionWhereInput[]
    NOT?: UserCurrentPositionWhereInput | UserCurrentPositionWhereInput[]
    id?: StringFilter<"UserCurrentPosition"> | string
    userId?: StringFilter<"UserCurrentPosition"> | string
    levelId?: StringFilter<"UserCurrentPosition"> | string
    sectionId?: StringFilter<"UserCurrentPosition"> | string
    moduleId?: StringFilter<"UserCurrentPosition"> | string
    partId?: StringFilter<"UserCurrentPosition"> | string
    updatedAt?: DateTimeFilter<"UserCurrentPosition"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }

  export type UserCurrentPositionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    sectionId?: SortOrder
    moduleId?: SortOrder
    partId?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
  }

  export type UserCurrentPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserCurrentPositionWhereInput | UserCurrentPositionWhereInput[]
    OR?: UserCurrentPositionWhereInput[]
    NOT?: UserCurrentPositionWhereInput | UserCurrentPositionWhereInput[]
    levelId?: StringFilter<"UserCurrentPosition"> | string
    sectionId?: StringFilter<"UserCurrentPosition"> | string
    moduleId?: StringFilter<"UserCurrentPosition"> | string
    partId?: StringFilter<"UserCurrentPosition"> | string
    updatedAt?: DateTimeFilter<"UserCurrentPosition"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }, "id" | "userId">

  export type UserCurrentPositionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    sectionId?: SortOrder
    moduleId?: SortOrder
    partId?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCurrentPositionCountOrderByAggregateInput
    _max?: UserCurrentPositionMaxOrderByAggregateInput
    _min?: UserCurrentPositionMinOrderByAggregateInput
  }

  export type UserCurrentPositionScalarWhereWithAggregatesInput = {
    AND?: UserCurrentPositionScalarWhereWithAggregatesInput | UserCurrentPositionScalarWhereWithAggregatesInput[]
    OR?: UserCurrentPositionScalarWhereWithAggregatesInput[]
    NOT?: UserCurrentPositionScalarWhereWithAggregatesInput | UserCurrentPositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    userId?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    levelId?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    sectionId?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    moduleId?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    partId?: StringWithAggregatesFilter<"UserCurrentPosition"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCurrentPosition"> | Date | string
  }

  export type LevelProgressWhereInput = {
    AND?: LevelProgressWhereInput | LevelProgressWhereInput[]
    OR?: LevelProgressWhereInput[]
    NOT?: LevelProgressWhereInput | LevelProgressWhereInput[]
    id?: StringFilter<"LevelProgress"> | string
    userId?: StringFilter<"LevelProgress"> | string
    levelId?: StringFilter<"LevelProgress"> | string
    progressPercentage?: IntFilter<"LevelProgress"> | number
    status?: EnumProgressStatusFilter<"LevelProgress"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"LevelProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type LevelProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    progressPercentage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
  }

  export type LevelProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_levelId?: LevelProgressUserIdLevelIdCompoundUniqueInput
    AND?: LevelProgressWhereInput | LevelProgressWhereInput[]
    OR?: LevelProgressWhereInput[]
    NOT?: LevelProgressWhereInput | LevelProgressWhereInput[]
    userId?: StringFilter<"LevelProgress"> | string
    levelId?: StringFilter<"LevelProgress"> | string
    progressPercentage?: IntFilter<"LevelProgress"> | number
    status?: EnumProgressStatusFilter<"LevelProgress"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"LevelProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id" | "userId_levelId">

  export type LevelProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    progressPercentage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelProgressCountOrderByAggregateInput
    _avg?: LevelProgressAvgOrderByAggregateInput
    _max?: LevelProgressMaxOrderByAggregateInput
    _min?: LevelProgressMinOrderByAggregateInput
    _sum?: LevelProgressSumOrderByAggregateInput
  }

  export type LevelProgressScalarWhereWithAggregatesInput = {
    AND?: LevelProgressScalarWhereWithAggregatesInput | LevelProgressScalarWhereWithAggregatesInput[]
    OR?: LevelProgressScalarWhereWithAggregatesInput[]
    NOT?: LevelProgressScalarWhereWithAggregatesInput | LevelProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LevelProgress"> | string
    userId?: StringWithAggregatesFilter<"LevelProgress"> | string
    levelId?: StringWithAggregatesFilter<"LevelProgress"> | string
    progressPercentage?: IntWithAggregatesFilter<"LevelProgress"> | number
    status?: EnumProgressStatusWithAggregatesFilter<"LevelProgress"> | $Enums.ProgressStatus
    updatedAt?: DateTimeWithAggregatesFilter<"LevelProgress"> | Date | string
  }

  export type SectionStatusWhereInput = {
    AND?: SectionStatusWhereInput | SectionStatusWhereInput[]
    OR?: SectionStatusWhereInput[]
    NOT?: SectionStatusWhereInput | SectionStatusWhereInput[]
    id?: StringFilter<"SectionStatus"> | string
    userId?: StringFilter<"SectionStatus"> | string
    sectionId?: StringFilter<"SectionStatus"> | string
    status?: EnumProgressStatusFilter<"SectionStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"SectionStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type SectionStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sectionId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type SectionStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_sectionId?: SectionStatusUserIdSectionIdCompoundUniqueInput
    AND?: SectionStatusWhereInput | SectionStatusWhereInput[]
    OR?: SectionStatusWhereInput[]
    NOT?: SectionStatusWhereInput | SectionStatusWhereInput[]
    userId?: StringFilter<"SectionStatus"> | string
    sectionId?: StringFilter<"SectionStatus"> | string
    status?: EnumProgressStatusFilter<"SectionStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"SectionStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id" | "userId_sectionId">

  export type SectionStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sectionId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionStatusCountOrderByAggregateInput
    _max?: SectionStatusMaxOrderByAggregateInput
    _min?: SectionStatusMinOrderByAggregateInput
  }

  export type SectionStatusScalarWhereWithAggregatesInput = {
    AND?: SectionStatusScalarWhereWithAggregatesInput | SectionStatusScalarWhereWithAggregatesInput[]
    OR?: SectionStatusScalarWhereWithAggregatesInput[]
    NOT?: SectionStatusScalarWhereWithAggregatesInput | SectionStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SectionStatus"> | string
    userId?: StringWithAggregatesFilter<"SectionStatus"> | string
    sectionId?: StringWithAggregatesFilter<"SectionStatus"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"SectionStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeWithAggregatesFilter<"SectionStatus"> | Date | string
  }

  export type ModuleStatusWhereInput = {
    AND?: ModuleStatusWhereInput | ModuleStatusWhereInput[]
    OR?: ModuleStatusWhereInput[]
    NOT?: ModuleStatusWhereInput | ModuleStatusWhereInput[]
    id?: StringFilter<"ModuleStatus"> | string
    userId?: StringFilter<"ModuleStatus"> | string
    moduleId?: StringFilter<"ModuleStatus"> | string
    status?: EnumProgressStatusFilter<"ModuleStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"ModuleStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: ModuleStatusUserIdModuleIdCompoundUniqueInput
    AND?: ModuleStatusWhereInput | ModuleStatusWhereInput[]
    OR?: ModuleStatusWhereInput[]
    NOT?: ModuleStatusWhereInput | ModuleStatusWhereInput[]
    userId?: StringFilter<"ModuleStatus"> | string
    moduleId?: StringFilter<"ModuleStatus"> | string
    status?: EnumProgressStatusFilter<"ModuleStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"ModuleStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "userId_moduleId">

  export type ModuleStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleStatusCountOrderByAggregateInput
    _max?: ModuleStatusMaxOrderByAggregateInput
    _min?: ModuleStatusMinOrderByAggregateInput
  }

  export type ModuleStatusScalarWhereWithAggregatesInput = {
    AND?: ModuleStatusScalarWhereWithAggregatesInput | ModuleStatusScalarWhereWithAggregatesInput[]
    OR?: ModuleStatusScalarWhereWithAggregatesInput[]
    NOT?: ModuleStatusScalarWhereWithAggregatesInput | ModuleStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModuleStatus"> | string
    userId?: StringWithAggregatesFilter<"ModuleStatus"> | string
    moduleId?: StringWithAggregatesFilter<"ModuleStatus"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"ModuleStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeWithAggregatesFilter<"ModuleStatus"> | Date | string
  }

  export type PartStatusWhereInput = {
    AND?: PartStatusWhereInput | PartStatusWhereInput[]
    OR?: PartStatusWhereInput[]
    NOT?: PartStatusWhereInput | PartStatusWhereInput[]
    id?: StringFilter<"PartStatus"> | string
    userId?: StringFilter<"PartStatus"> | string
    partId?: StringFilter<"PartStatus"> | string
    status?: EnumProgressStatusFilter<"PartStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"PartStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }

  export type PartStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    partId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
  }

  export type PartStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_partId?: PartStatusUserIdPartIdCompoundUniqueInput
    AND?: PartStatusWhereInput | PartStatusWhereInput[]
    OR?: PartStatusWhereInput[]
    NOT?: PartStatusWhereInput | PartStatusWhereInput[]
    userId?: StringFilter<"PartStatus"> | string
    partId?: StringFilter<"PartStatus"> | string
    status?: EnumProgressStatusFilter<"PartStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"PartStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }, "id" | "userId_partId">

  export type PartStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    partId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: PartStatusCountOrderByAggregateInput
    _max?: PartStatusMaxOrderByAggregateInput
    _min?: PartStatusMinOrderByAggregateInput
  }

  export type PartStatusScalarWhereWithAggregatesInput = {
    AND?: PartStatusScalarWhereWithAggregatesInput | PartStatusScalarWhereWithAggregatesInput[]
    OR?: PartStatusScalarWhereWithAggregatesInput[]
    NOT?: PartStatusScalarWhereWithAggregatesInput | PartStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartStatus"> | string
    userId?: StringWithAggregatesFilter<"PartStatus"> | string
    partId?: StringWithAggregatesFilter<"PartStatus"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"PartStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeWithAggregatesFilter<"PartStatus"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    levelId?: StringFilter<"Certificate"> | string
    certificateNo?: StringFilter<"Certificate"> | string
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringFilter<"Certificate"> | string
    verificationToken?: StringFilter<"Certificate"> | string
    isRevoked?: BoolFilter<"Certificate"> | boolean
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    certificateNo?: SortOrder
    issueDate?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateNo?: string
    verificationToken?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    userId?: StringFilter<"Certificate"> | string
    levelId?: StringFilter<"Certificate"> | string
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringFilter<"Certificate"> | string
    isRevoked?: BoolFilter<"Certificate"> | boolean
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id" | "certificateNo" | "verificationToken">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    certificateNo?: SortOrder
    issueDate?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    userId?: StringWithAggregatesFilter<"Certificate"> | string
    levelId?: StringWithAggregatesFilter<"Certificate"> | string
    certificateNo?: StringWithAggregatesFilter<"Certificate"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    fileUrl?: StringWithAggregatesFilter<"Certificate"> | string
    verificationToken?: StringWithAggregatesFilter<"Certificate"> | string
    isRevoked?: BoolWithAggregatesFilter<"Certificate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    dob?: Date | string | null
    visaType?: $Enums.VisaType
    program?: $Enums.Programs
    gender?: $Enums.Gender
    universityName?: string | null
    country?: string | null
    phoneNo?: string | null
    intake?: $Enums.Intake | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    dob?: Date | string | null
    visaType?: $Enums.VisaType
    program?: $Enums.Programs
    gender?: $Enums.Gender
    universityName?: string | null
    country?: string | null
    phoneNo?: string | null
    intake?: $Enums.Intake | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    dob?: Date | string | null
    visaType?: $Enums.VisaType
    program?: $Enums.Programs
    gender?: $Enums.Gender
    universityName?: string | null
    country?: string | null
    phoneNo?: string | null
    intake?: $Enums.Intake | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionCreateNestedManyWithoutLevelInput
    progress?: LevelProgressCreateNestedManyWithoutLevelInput
    certificates?: CertificateCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionUncheckedCreateNestedManyWithoutLevelInput
    progress?: LevelProgressUncheckedCreateNestedManyWithoutLevelInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUncheckedUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
  }

  export type LevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SectionCreateInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    level: LevelCreateNestedOneWithoutSectionsInput
    modules?: ModuleCreateNestedManyWithoutSectionInput
    status?: SectionStatusCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    levelId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutSectionInput
    status?: SectionStatusUncheckedCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    level?: LevelUpdateOneRequiredWithoutSectionsNestedInput
    modules?: ModuleUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUncheckedUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    levelId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    section: SectionCreateNestedOneWithoutModulesInput
    parts?: PartCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    sectionId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    parts?: PartUncheckedCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusUncheckedCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutModulesNestedInput
    parts?: PartUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUncheckedUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    sectionId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    module: ModuleCreateNestedOneWithoutPartsInput
    status?: PartStatusCreateNestedManyWithoutPartInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: string
    moduleId: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    status?: PartStatusUncheckedCreateNestedManyWithoutPartInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutPartsNestedInput
    status?: PartStatusUpdateManyWithoutPartNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: PartStatusUncheckedUpdateManyWithoutPartNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartCreateManyInput = {
    id?: string
    moduleId: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
  }

  export type PartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserCurrentPositionCreateInput = {
    id?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentPosInput
    level: LevelCreateNestedOneWithoutCurrentPosInput
    section: SectionCreateNestedOneWithoutCurrentPosInput
    module: ModuleCreateNestedOneWithoutCurrentPosInput
    part: PartCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentPosNestedInput
    level?: LevelUpdateOneRequiredWithoutCurrentPosNestedInput
    section?: SectionUpdateOneRequiredWithoutCurrentPosNestedInput
    module?: ModuleUpdateOneRequiredWithoutCurrentPosNestedInput
    part?: PartUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionCreateManyInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressCreateInput = {
    id?: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLevelProgressInput
    level: LevelCreateNestedOneWithoutProgressInput
  }

  export type LevelProgressUncheckedCreateInput = {
    id?: string
    userId: string
    levelId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type LevelProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLevelProgressNestedInput
    level?: LevelUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LevelProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressCreateManyInput = {
    id?: string
    userId: string
    levelId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type LevelProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusCreateInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSectionStatusInput
    section: SectionCreateNestedOneWithoutStatusInput
  }

  export type SectionStatusUncheckedCreateInput = {
    id?: string
    userId: string
    sectionId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type SectionStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSectionStatusNestedInput
    section?: SectionUpdateOneRequiredWithoutStatusNestedInput
  }

  export type SectionStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusCreateManyInput = {
    id?: string
    userId: string
    sectionId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type SectionStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusCreateInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleStatusInput
    module: ModuleCreateNestedOneWithoutStatusesInput
  }

  export type ModuleStatusUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type ModuleStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleStatusNestedInput
    module?: ModuleUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type ModuleStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type ModuleStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusCreateInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartStatusInput
    part: PartCreateNestedOneWithoutStatusInput
  }

  export type PartStatusUncheckedCreateInput = {
    id?: string
    userId: string
    partId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type PartStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartStatusNestedInput
    part?: PartUpdateOneRequiredWithoutStatusNestedInput
  }

  export type PartStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusCreateManyInput = {
    id?: string
    userId: string
    partId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type PartStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
    level: LevelCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    userId: string
    levelId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    level?: LevelUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    userId: string
    levelId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserCurrentPositionNullableScalarRelationFilter = {
    is?: UserCurrentPositionWhereInput | null
    isNot?: UserCurrentPositionWhereInput | null
  }

  export type LevelProgressListRelationFilter = {
    every?: LevelProgressWhereInput
    some?: LevelProgressWhereInput
    none?: LevelProgressWhereInput
  }

  export type SectionStatusListRelationFilter = {
    every?: SectionStatusWhereInput
    some?: SectionStatusWhereInput
    none?: SectionStatusWhereInput
  }

  export type ModuleStatusListRelationFilter = {
    every?: ModuleStatusWhereInput
    some?: ModuleStatusWhereInput
    none?: ModuleStatusWhereInput
  }

  export type PartStatusListRelationFilter = {
    every?: PartStatusWhereInput
    some?: PartStatusWhereInput
    none?: PartStatusWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LevelProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    hasSeenWelcome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    hasSeenWelcome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    hasSeenWelcome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumVisaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaTypeFilter<$PrismaModel> | $Enums.VisaType
  }

  export type EnumProgramsFilter<$PrismaModel = never> = {
    equals?: $Enums.Programs | EnumProgramsFieldRefInput<$PrismaModel>
    in?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramsFilter<$PrismaModel> | $Enums.Programs
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumIntakeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIntakeNullableFilter<$PrismaModel> | $Enums.Intake | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    visaType?: SortOrder
    program?: SortOrder
    gender?: SortOrder
    universityName?: SortOrder
    country?: SortOrder
    phoneNo?: SortOrder
    intake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    visaType?: SortOrder
    program?: SortOrder
    gender?: SortOrder
    universityName?: SortOrder
    country?: SortOrder
    phoneNo?: SortOrder
    intake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    visaType?: SortOrder
    program?: SortOrder
    gender?: SortOrder
    universityName?: SortOrder
    country?: SortOrder
    phoneNo?: SortOrder
    intake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumVisaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaTypeFilter<$PrismaModel>
    _max?: NestedEnumVisaTypeFilter<$PrismaModel>
  }

  export type EnumProgramsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Programs | EnumProgramsFieldRefInput<$PrismaModel>
    in?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramsWithAggregatesFilter<$PrismaModel> | $Enums.Programs
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramsFilter<$PrismaModel>
    _max?: NestedEnumProgramsFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumIntakeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIntakeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Intake | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIntakeNullableFilter<$PrismaModel>
    _max?: NestedEnumIntakeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type UserCurrentPositionListRelationFilter = {
    every?: UserCurrentPositionWhereInput
    some?: UserCurrentPositionWhereInput
    none?: UserCurrentPositionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCurrentPositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    order?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    order?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    order?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    levelId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    levelId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    levelId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    visaType?: SortOrder
    specialization?: SortOrder
    order?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    content?: SortOrder
    contentId?: SortOrder
    order?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    contentId?: SortOrder
    order?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    title?: SortOrder
    deTitle?: SortOrder
    contentId?: SortOrder
    order?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    order?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PartScalarRelationFilter = {
    is?: PartWhereInput
    isNot?: PartWhereInput
  }

  export type UserCurrentPositionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    sectionId?: SortOrder
    moduleId?: SortOrder
    partId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCurrentPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    sectionId?: SortOrder
    moduleId?: SortOrder
    partId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCurrentPositionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    sectionId?: SortOrder
    moduleId?: SortOrder
    partId?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type LevelProgressUserIdLevelIdCompoundUniqueInput = {
    userId: string
    levelId: string
  }

  export type LevelProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    progressPercentage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelProgressAvgOrderByAggregateInput = {
    progressPercentage?: SortOrder
  }

  export type LevelProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    progressPercentage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    progressPercentage?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelProgressSumOrderByAggregateInput = {
    progressPercentage?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type SectionStatusUserIdSectionIdCompoundUniqueInput = {
    userId: string
    sectionId: string
  }

  export type SectionStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sectionId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sectionId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sectionId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleStatusUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type ModuleStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartStatusUserIdPartIdCompoundUniqueInput = {
    userId: string
    partId: string
  }

  export type PartStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    partId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    partId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    partId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    certificateNo?: SortOrder
    issueDate?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    certificateNo?: SortOrder
    issueDate?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    certificateNo?: SortOrder
    issueDate?: SortOrder
    fileUrl?: SortOrder
    verificationToken?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserCurrentPositionCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutUserInput
    connect?: UserCurrentPositionWhereUniqueInput
  }

  export type LevelProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput> | LevelProgressCreateWithoutUserInput[] | LevelProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutUserInput | LevelProgressCreateOrConnectWithoutUserInput[]
    createMany?: LevelProgressCreateManyUserInputEnvelope
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
  }

  export type SectionStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput> | SectionStatusCreateWithoutUserInput[] | SectionStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutUserInput | SectionStatusCreateOrConnectWithoutUserInput[]
    createMany?: SectionStatusCreateManyUserInputEnvelope
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
  }

  export type ModuleStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput> | ModuleStatusCreateWithoutUserInput[] | ModuleStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutUserInput | ModuleStatusCreateOrConnectWithoutUserInput[]
    createMany?: ModuleStatusCreateManyUserInputEnvelope
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
  }

  export type PartStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput> | PartStatusCreateWithoutUserInput[] | PartStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutUserInput | PartStatusCreateOrConnectWithoutUserInput[]
    createMany?: PartStatusCreateManyUserInputEnvelope
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutUserInput
    connect?: UserCurrentPositionWhereUniqueInput
  }

  export type LevelProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput> | LevelProgressCreateWithoutUserInput[] | LevelProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutUserInput | LevelProgressCreateOrConnectWithoutUserInput[]
    createMany?: LevelProgressCreateManyUserInputEnvelope
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
  }

  export type SectionStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput> | SectionStatusCreateWithoutUserInput[] | SectionStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutUserInput | SectionStatusCreateOrConnectWithoutUserInput[]
    createMany?: SectionStatusCreateManyUserInputEnvelope
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
  }

  export type ModuleStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput> | ModuleStatusCreateWithoutUserInput[] | ModuleStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutUserInput | ModuleStatusCreateOrConnectWithoutUserInput[]
    createMany?: ModuleStatusCreateManyUserInputEnvelope
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
  }

  export type PartStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput> | PartStatusCreateWithoutUserInput[] | PartStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutUserInput | PartStatusCreateOrConnectWithoutUserInput[]
    createMany?: PartStatusCreateManyUserInputEnvelope
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCurrentPositionUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutUserInput
    upsert?: UserCurrentPositionUpsertWithoutUserInput
    disconnect?: UserCurrentPositionWhereInput | boolean
    delete?: UserCurrentPositionWhereInput | boolean
    connect?: UserCurrentPositionWhereUniqueInput
    update?: XOR<XOR<UserCurrentPositionUpdateToOneWithWhereWithoutUserInput, UserCurrentPositionUpdateWithoutUserInput>, UserCurrentPositionUncheckedUpdateWithoutUserInput>
  }

  export type LevelProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput> | LevelProgressCreateWithoutUserInput[] | LevelProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutUserInput | LevelProgressCreateOrConnectWithoutUserInput[]
    upsert?: LevelProgressUpsertWithWhereUniqueWithoutUserInput | LevelProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LevelProgressCreateManyUserInputEnvelope
    set?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    disconnect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    delete?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    update?: LevelProgressUpdateWithWhereUniqueWithoutUserInput | LevelProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LevelProgressUpdateManyWithWhereWithoutUserInput | LevelProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
  }

  export type SectionStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput> | SectionStatusCreateWithoutUserInput[] | SectionStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutUserInput | SectionStatusCreateOrConnectWithoutUserInput[]
    upsert?: SectionStatusUpsertWithWhereUniqueWithoutUserInput | SectionStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SectionStatusCreateManyUserInputEnvelope
    set?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    disconnect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    delete?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    update?: SectionStatusUpdateWithWhereUniqueWithoutUserInput | SectionStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SectionStatusUpdateManyWithWhereWithoutUserInput | SectionStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
  }

  export type ModuleStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput> | ModuleStatusCreateWithoutUserInput[] | ModuleStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutUserInput | ModuleStatusCreateOrConnectWithoutUserInput[]
    upsert?: ModuleStatusUpsertWithWhereUniqueWithoutUserInput | ModuleStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleStatusCreateManyUserInputEnvelope
    set?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    disconnect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    delete?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    update?: ModuleStatusUpdateWithWhereUniqueWithoutUserInput | ModuleStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleStatusUpdateManyWithWhereWithoutUserInput | ModuleStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
  }

  export type PartStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput> | PartStatusCreateWithoutUserInput[] | PartStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutUserInput | PartStatusCreateOrConnectWithoutUserInput[]
    upsert?: PartStatusUpsertWithWhereUniqueWithoutUserInput | PartStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartStatusCreateManyUserInputEnvelope
    set?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    disconnect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    delete?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    update?: PartStatusUpdateWithWhereUniqueWithoutUserInput | PartStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartStatusUpdateManyWithWhereWithoutUserInput | PartStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutUserInput
    upsert?: UserCurrentPositionUpsertWithoutUserInput
    disconnect?: UserCurrentPositionWhereInput | boolean
    delete?: UserCurrentPositionWhereInput | boolean
    connect?: UserCurrentPositionWhereUniqueInput
    update?: XOR<XOR<UserCurrentPositionUpdateToOneWithWhereWithoutUserInput, UserCurrentPositionUpdateWithoutUserInput>, UserCurrentPositionUncheckedUpdateWithoutUserInput>
  }

  export type LevelProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput> | LevelProgressCreateWithoutUserInput[] | LevelProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutUserInput | LevelProgressCreateOrConnectWithoutUserInput[]
    upsert?: LevelProgressUpsertWithWhereUniqueWithoutUserInput | LevelProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LevelProgressCreateManyUserInputEnvelope
    set?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    disconnect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    delete?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    update?: LevelProgressUpdateWithWhereUniqueWithoutUserInput | LevelProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LevelProgressUpdateManyWithWhereWithoutUserInput | LevelProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
  }

  export type SectionStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput> | SectionStatusCreateWithoutUserInput[] | SectionStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutUserInput | SectionStatusCreateOrConnectWithoutUserInput[]
    upsert?: SectionStatusUpsertWithWhereUniqueWithoutUserInput | SectionStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SectionStatusCreateManyUserInputEnvelope
    set?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    disconnect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    delete?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    update?: SectionStatusUpdateWithWhereUniqueWithoutUserInput | SectionStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SectionStatusUpdateManyWithWhereWithoutUserInput | SectionStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
  }

  export type ModuleStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput> | ModuleStatusCreateWithoutUserInput[] | ModuleStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutUserInput | ModuleStatusCreateOrConnectWithoutUserInput[]
    upsert?: ModuleStatusUpsertWithWhereUniqueWithoutUserInput | ModuleStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleStatusCreateManyUserInputEnvelope
    set?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    disconnect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    delete?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    update?: ModuleStatusUpdateWithWhereUniqueWithoutUserInput | ModuleStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleStatusUpdateManyWithWhereWithoutUserInput | ModuleStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
  }

  export type PartStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput> | PartStatusCreateWithoutUserInput[] | PartStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutUserInput | PartStatusCreateOrConnectWithoutUserInput[]
    upsert?: PartStatusUpsertWithWhereUniqueWithoutUserInput | PartStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartStatusCreateManyUserInputEnvelope
    set?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    disconnect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    delete?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    update?: PartStatusUpdateWithWhereUniqueWithoutUserInput | PartStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartStatusUpdateManyWithWhereWithoutUserInput | PartStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumVisaTypeFieldUpdateOperationsInput = {
    set?: $Enums.VisaType
  }

  export type EnumProgramsFieldUpdateOperationsInput = {
    set?: $Enums.Programs
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableEnumIntakeFieldUpdateOperationsInput = {
    set?: $Enums.Intake | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type SectionCreateNestedManyWithoutLevelInput = {
    create?: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput> | SectionCreateWithoutLevelInput[] | SectionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutLevelInput | SectionCreateOrConnectWithoutLevelInput[]
    createMany?: SectionCreateManyLevelInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type LevelProgressCreateNestedManyWithoutLevelInput = {
    create?: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput> | LevelProgressCreateWithoutLevelInput[] | LevelProgressUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutLevelInput | LevelProgressCreateOrConnectWithoutLevelInput[]
    createMany?: LevelProgressCreateManyLevelInputEnvelope
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutLevelInput = {
    create?: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput> | CertificateCreateWithoutLevelInput[] | CertificateUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutLevelInput | CertificateCreateOrConnectWithoutLevelInput[]
    createMany?: CertificateCreateManyLevelInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserCurrentPositionCreateNestedManyWithoutLevelInput = {
    create?: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput> | UserCurrentPositionCreateWithoutLevelInput[] | UserCurrentPositionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutLevelInput | UserCurrentPositionCreateOrConnectWithoutLevelInput[]
    createMany?: UserCurrentPositionCreateManyLevelInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput> | SectionCreateWithoutLevelInput[] | SectionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutLevelInput | SectionCreateOrConnectWithoutLevelInput[]
    createMany?: SectionCreateManyLevelInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type LevelProgressUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput> | LevelProgressCreateWithoutLevelInput[] | LevelProgressUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutLevelInput | LevelProgressCreateOrConnectWithoutLevelInput[]
    createMany?: LevelProgressCreateManyLevelInputEnvelope
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput> | CertificateCreateWithoutLevelInput[] | CertificateUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutLevelInput | CertificateCreateOrConnectWithoutLevelInput[]
    createMany?: CertificateCreateManyLevelInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserCurrentPositionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput> | UserCurrentPositionCreateWithoutLevelInput[] | UserCurrentPositionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutLevelInput | UserCurrentPositionCreateOrConnectWithoutLevelInput[]
    createMany?: UserCurrentPositionCreateManyLevelInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput> | SectionCreateWithoutLevelInput[] | SectionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutLevelInput | SectionCreateOrConnectWithoutLevelInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutLevelInput | SectionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SectionCreateManyLevelInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutLevelInput | SectionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutLevelInput | SectionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type LevelProgressUpdateManyWithoutLevelNestedInput = {
    create?: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput> | LevelProgressCreateWithoutLevelInput[] | LevelProgressUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutLevelInput | LevelProgressCreateOrConnectWithoutLevelInput[]
    upsert?: LevelProgressUpsertWithWhereUniqueWithoutLevelInput | LevelProgressUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: LevelProgressCreateManyLevelInputEnvelope
    set?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    disconnect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    delete?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    update?: LevelProgressUpdateWithWhereUniqueWithoutLevelInput | LevelProgressUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: LevelProgressUpdateManyWithWhereWithoutLevelInput | LevelProgressUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutLevelNestedInput = {
    create?: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput> | CertificateCreateWithoutLevelInput[] | CertificateUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutLevelInput | CertificateCreateOrConnectWithoutLevelInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutLevelInput | CertificateUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: CertificateCreateManyLevelInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutLevelInput | CertificateUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutLevelInput | CertificateUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCurrentPositionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput> | UserCurrentPositionCreateWithoutLevelInput[] | UserCurrentPositionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutLevelInput | UserCurrentPositionCreateOrConnectWithoutLevelInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutLevelInput | UserCurrentPositionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: UserCurrentPositionCreateManyLevelInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutLevelInput | UserCurrentPositionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutLevelInput | UserCurrentPositionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput> | SectionCreateWithoutLevelInput[] | SectionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutLevelInput | SectionCreateOrConnectWithoutLevelInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutLevelInput | SectionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SectionCreateManyLevelInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutLevelInput | SectionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutLevelInput | SectionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type LevelProgressUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput> | LevelProgressCreateWithoutLevelInput[] | LevelProgressUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LevelProgressCreateOrConnectWithoutLevelInput | LevelProgressCreateOrConnectWithoutLevelInput[]
    upsert?: LevelProgressUpsertWithWhereUniqueWithoutLevelInput | LevelProgressUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: LevelProgressCreateManyLevelInputEnvelope
    set?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    disconnect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    delete?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    connect?: LevelProgressWhereUniqueInput | LevelProgressWhereUniqueInput[]
    update?: LevelProgressUpdateWithWhereUniqueWithoutLevelInput | LevelProgressUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: LevelProgressUpdateManyWithWhereWithoutLevelInput | LevelProgressUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput> | CertificateCreateWithoutLevelInput[] | CertificateUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutLevelInput | CertificateCreateOrConnectWithoutLevelInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutLevelInput | CertificateUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: CertificateCreateManyLevelInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutLevelInput | CertificateUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutLevelInput | CertificateUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput> | UserCurrentPositionCreateWithoutLevelInput[] | UserCurrentPositionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutLevelInput | UserCurrentPositionCreateOrConnectWithoutLevelInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutLevelInput | UserCurrentPositionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: UserCurrentPositionCreateManyLevelInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutLevelInput | UserCurrentPositionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutLevelInput | UserCurrentPositionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type LevelCreateNestedOneWithoutSectionsInput = {
    create?: XOR<LevelCreateWithoutSectionsInput, LevelUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSectionsInput
    connect?: LevelWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutSectionInput = {
    create?: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput> | ModuleCreateWithoutSectionInput[] | ModuleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSectionInput | ModuleCreateOrConnectWithoutSectionInput[]
    createMany?: ModuleCreateManySectionInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type SectionStatusCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput> | SectionStatusCreateWithoutSectionInput[] | SectionStatusUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutSectionInput | SectionStatusCreateOrConnectWithoutSectionInput[]
    createMany?: SectionStatusCreateManySectionInputEnvelope
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionCreateNestedManyWithoutSectionInput = {
    create?: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput> | UserCurrentPositionCreateWithoutSectionInput[] | UserCurrentPositionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutSectionInput | UserCurrentPositionCreateOrConnectWithoutSectionInput[]
    createMany?: UserCurrentPositionCreateManySectionInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput> | ModuleCreateWithoutSectionInput[] | ModuleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSectionInput | ModuleCreateOrConnectWithoutSectionInput[]
    createMany?: ModuleCreateManySectionInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type SectionStatusUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput> | SectionStatusCreateWithoutSectionInput[] | SectionStatusUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutSectionInput | SectionStatusCreateOrConnectWithoutSectionInput[]
    createMany?: SectionStatusCreateManySectionInputEnvelope
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput> | UserCurrentPositionCreateWithoutSectionInput[] | UserCurrentPositionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutSectionInput | UserCurrentPositionCreateOrConnectWithoutSectionInput[]
    createMany?: UserCurrentPositionCreateManySectionInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type LevelUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<LevelCreateWithoutSectionsInput, LevelUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSectionsInput
    upsert?: LevelUpsertWithoutSectionsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutSectionsInput, LevelUpdateWithoutSectionsInput>, LevelUncheckedUpdateWithoutSectionsInput>
  }

  export type ModuleUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput> | ModuleCreateWithoutSectionInput[] | ModuleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSectionInput | ModuleCreateOrConnectWithoutSectionInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutSectionInput | ModuleUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ModuleCreateManySectionInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutSectionInput | ModuleUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutSectionInput | ModuleUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type SectionStatusUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput> | SectionStatusCreateWithoutSectionInput[] | SectionStatusUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutSectionInput | SectionStatusCreateOrConnectWithoutSectionInput[]
    upsert?: SectionStatusUpsertWithWhereUniqueWithoutSectionInput | SectionStatusUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionStatusCreateManySectionInputEnvelope
    set?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    disconnect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    delete?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    update?: SectionStatusUpdateWithWhereUniqueWithoutSectionInput | SectionStatusUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionStatusUpdateManyWithWhereWithoutSectionInput | SectionStatusUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput> | UserCurrentPositionCreateWithoutSectionInput[] | UserCurrentPositionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutSectionInput | UserCurrentPositionCreateOrConnectWithoutSectionInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutSectionInput | UserCurrentPositionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: UserCurrentPositionCreateManySectionInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutSectionInput | UserCurrentPositionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutSectionInput | UserCurrentPositionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput> | ModuleCreateWithoutSectionInput[] | ModuleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSectionInput | ModuleCreateOrConnectWithoutSectionInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutSectionInput | ModuleUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ModuleCreateManySectionInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutSectionInput | ModuleUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutSectionInput | ModuleUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type SectionStatusUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput> | SectionStatusCreateWithoutSectionInput[] | SectionStatusUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionStatusCreateOrConnectWithoutSectionInput | SectionStatusCreateOrConnectWithoutSectionInput[]
    upsert?: SectionStatusUpsertWithWhereUniqueWithoutSectionInput | SectionStatusUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionStatusCreateManySectionInputEnvelope
    set?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    disconnect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    delete?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    connect?: SectionStatusWhereUniqueInput | SectionStatusWhereUniqueInput[]
    update?: SectionStatusUpdateWithWhereUniqueWithoutSectionInput | SectionStatusUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionStatusUpdateManyWithWhereWithoutSectionInput | SectionStatusUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput> | UserCurrentPositionCreateWithoutSectionInput[] | UserCurrentPositionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutSectionInput | UserCurrentPositionCreateOrConnectWithoutSectionInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutSectionInput | UserCurrentPositionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: UserCurrentPositionCreateManySectionInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutSectionInput | UserCurrentPositionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutSectionInput | UserCurrentPositionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutModulesInput = {
    create?: XOR<SectionCreateWithoutModulesInput, SectionUncheckedCreateWithoutModulesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutModulesInput
    connect?: SectionWhereUniqueInput
  }

  export type PartCreateNestedManyWithoutModuleInput = {
    create?: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput> | PartCreateWithoutModuleInput[] | PartUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutModuleInput | PartCreateOrConnectWithoutModuleInput[]
    createMany?: PartCreateManyModuleInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type ModuleStatusCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput> | ModuleStatusCreateWithoutModuleInput[] | ModuleStatusUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutModuleInput | ModuleStatusCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleStatusCreateManyModuleInputEnvelope
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput> | UserCurrentPositionCreateWithoutModuleInput[] | UserCurrentPositionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutModuleInput | UserCurrentPositionCreateOrConnectWithoutModuleInput[]
    createMany?: UserCurrentPositionCreateManyModuleInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput> | PartCreateWithoutModuleInput[] | PartUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutModuleInput | PartCreateOrConnectWithoutModuleInput[]
    createMany?: PartCreateManyModuleInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type ModuleStatusUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput> | ModuleStatusCreateWithoutModuleInput[] | ModuleStatusUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutModuleInput | ModuleStatusCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleStatusCreateManyModuleInputEnvelope
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput> | UserCurrentPositionCreateWithoutModuleInput[] | UserCurrentPositionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutModuleInput | UserCurrentPositionCreateOrConnectWithoutModuleInput[]
    createMany?: UserCurrentPositionCreateManyModuleInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type SectionUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<SectionCreateWithoutModulesInput, SectionUncheckedCreateWithoutModulesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutModulesInput
    upsert?: SectionUpsertWithoutModulesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutModulesInput, SectionUpdateWithoutModulesInput>, SectionUncheckedUpdateWithoutModulesInput>
  }

  export type PartUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput> | PartCreateWithoutModuleInput[] | PartUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutModuleInput | PartCreateOrConnectWithoutModuleInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutModuleInput | PartUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PartCreateManyModuleInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutModuleInput | PartUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PartUpdateManyWithWhereWithoutModuleInput | PartUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type ModuleStatusUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput> | ModuleStatusCreateWithoutModuleInput[] | ModuleStatusUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutModuleInput | ModuleStatusCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleStatusUpsertWithWhereUniqueWithoutModuleInput | ModuleStatusUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleStatusCreateManyModuleInputEnvelope
    set?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    disconnect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    delete?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    update?: ModuleStatusUpdateWithWhereUniqueWithoutModuleInput | ModuleStatusUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleStatusUpdateManyWithWhereWithoutModuleInput | ModuleStatusUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput> | UserCurrentPositionCreateWithoutModuleInput[] | UserCurrentPositionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutModuleInput | UserCurrentPositionCreateOrConnectWithoutModuleInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutModuleInput | UserCurrentPositionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserCurrentPositionCreateManyModuleInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutModuleInput | UserCurrentPositionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutModuleInput | UserCurrentPositionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput> | PartCreateWithoutModuleInput[] | PartUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutModuleInput | PartCreateOrConnectWithoutModuleInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutModuleInput | PartUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PartCreateManyModuleInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutModuleInput | PartUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PartUpdateManyWithWhereWithoutModuleInput | PartUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type ModuleStatusUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput> | ModuleStatusCreateWithoutModuleInput[] | ModuleStatusUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleStatusCreateOrConnectWithoutModuleInput | ModuleStatusCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleStatusUpsertWithWhereUniqueWithoutModuleInput | ModuleStatusUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleStatusCreateManyModuleInputEnvelope
    set?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    disconnect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    delete?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    connect?: ModuleStatusWhereUniqueInput | ModuleStatusWhereUniqueInput[]
    update?: ModuleStatusUpdateWithWhereUniqueWithoutModuleInput | ModuleStatusUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleStatusUpdateManyWithWhereWithoutModuleInput | ModuleStatusUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput> | UserCurrentPositionCreateWithoutModuleInput[] | UserCurrentPositionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutModuleInput | UserCurrentPositionCreateOrConnectWithoutModuleInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutModuleInput | UserCurrentPositionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserCurrentPositionCreateManyModuleInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutModuleInput | UserCurrentPositionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutModuleInput | UserCurrentPositionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutPartsInput = {
    create?: XOR<ModuleCreateWithoutPartsInput, ModuleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPartsInput
    connect?: ModuleWhereUniqueInput
  }

  export type PartStatusCreateNestedManyWithoutPartInput = {
    create?: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput> | PartStatusCreateWithoutPartInput[] | PartStatusUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutPartInput | PartStatusCreateOrConnectWithoutPartInput[]
    createMany?: PartStatusCreateManyPartInputEnvelope
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionCreateNestedManyWithoutPartInput = {
    create?: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput> | UserCurrentPositionCreateWithoutPartInput[] | UserCurrentPositionUncheckedCreateWithoutPartInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutPartInput | UserCurrentPositionCreateOrConnectWithoutPartInput[]
    createMany?: UserCurrentPositionCreateManyPartInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type PartStatusUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput> | PartStatusCreateWithoutPartInput[] | PartStatusUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutPartInput | PartStatusCreateOrConnectWithoutPartInput[]
    createMany?: PartStatusCreateManyPartInputEnvelope
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
  }

  export type UserCurrentPositionUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput> | UserCurrentPositionCreateWithoutPartInput[] | UserCurrentPositionUncheckedCreateWithoutPartInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutPartInput | UserCurrentPositionCreateOrConnectWithoutPartInput[]
    createMany?: UserCurrentPositionCreateManyPartInputEnvelope
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<ModuleCreateWithoutPartsInput, ModuleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPartsInput
    upsert?: ModuleUpsertWithoutPartsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutPartsInput, ModuleUpdateWithoutPartsInput>, ModuleUncheckedUpdateWithoutPartsInput>
  }

  export type PartStatusUpdateManyWithoutPartNestedInput = {
    create?: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput> | PartStatusCreateWithoutPartInput[] | PartStatusUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutPartInput | PartStatusCreateOrConnectWithoutPartInput[]
    upsert?: PartStatusUpsertWithWhereUniqueWithoutPartInput | PartStatusUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: PartStatusCreateManyPartInputEnvelope
    set?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    disconnect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    delete?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    update?: PartStatusUpdateWithWhereUniqueWithoutPartInput | PartStatusUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: PartStatusUpdateManyWithWhereWithoutPartInput | PartStatusUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUpdateManyWithoutPartNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput> | UserCurrentPositionCreateWithoutPartInput[] | UserCurrentPositionUncheckedCreateWithoutPartInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutPartInput | UserCurrentPositionCreateOrConnectWithoutPartInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutPartInput | UserCurrentPositionUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: UserCurrentPositionCreateManyPartInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutPartInput | UserCurrentPositionUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutPartInput | UserCurrentPositionUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type PartStatusUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput> | PartStatusCreateWithoutPartInput[] | PartStatusUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartStatusCreateOrConnectWithoutPartInput | PartStatusCreateOrConnectWithoutPartInput[]
    upsert?: PartStatusUpsertWithWhereUniqueWithoutPartInput | PartStatusUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: PartStatusCreateManyPartInputEnvelope
    set?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    disconnect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    delete?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    connect?: PartStatusWhereUniqueInput | PartStatusWhereUniqueInput[]
    update?: PartStatusUpdateWithWhereUniqueWithoutPartInput | PartStatusUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: PartStatusUpdateManyWithWhereWithoutPartInput | PartStatusUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput> | UserCurrentPositionCreateWithoutPartInput[] | UserCurrentPositionUncheckedCreateWithoutPartInput[]
    connectOrCreate?: UserCurrentPositionCreateOrConnectWithoutPartInput | UserCurrentPositionCreateOrConnectWithoutPartInput[]
    upsert?: UserCurrentPositionUpsertWithWhereUniqueWithoutPartInput | UserCurrentPositionUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: UserCurrentPositionCreateManyPartInputEnvelope
    set?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    disconnect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    delete?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    connect?: UserCurrentPositionWhereUniqueInput | UserCurrentPositionWhereUniqueInput[]
    update?: UserCurrentPositionUpdateWithWhereUniqueWithoutPartInput | UserCurrentPositionUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: UserCurrentPositionUpdateManyWithWhereWithoutPartInput | UserCurrentPositionUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCurrentPosInput = {
    create?: XOR<UserCreateWithoutCurrentPosInput, UserUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentPosInput
    connect?: UserWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutCurrentPosInput = {
    create?: XOR<LevelCreateWithoutCurrentPosInput, LevelUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: LevelCreateOrConnectWithoutCurrentPosInput
    connect?: LevelWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutCurrentPosInput = {
    create?: XOR<SectionCreateWithoutCurrentPosInput, SectionUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCurrentPosInput
    connect?: SectionWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutCurrentPosInput = {
    create?: XOR<ModuleCreateWithoutCurrentPosInput, ModuleUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutCurrentPosInput
    connect?: ModuleWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutCurrentPosInput = {
    create?: XOR<PartCreateWithoutCurrentPosInput, PartUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: PartCreateOrConnectWithoutCurrentPosInput
    connect?: PartWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCurrentPosNestedInput = {
    create?: XOR<UserCreateWithoutCurrentPosInput, UserUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentPosInput
    upsert?: UserUpsertWithoutCurrentPosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurrentPosInput, UserUpdateWithoutCurrentPosInput>, UserUncheckedUpdateWithoutCurrentPosInput>
  }

  export type LevelUpdateOneRequiredWithoutCurrentPosNestedInput = {
    create?: XOR<LevelCreateWithoutCurrentPosInput, LevelUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: LevelCreateOrConnectWithoutCurrentPosInput
    upsert?: LevelUpsertWithoutCurrentPosInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutCurrentPosInput, LevelUpdateWithoutCurrentPosInput>, LevelUncheckedUpdateWithoutCurrentPosInput>
  }

  export type SectionUpdateOneRequiredWithoutCurrentPosNestedInput = {
    create?: XOR<SectionCreateWithoutCurrentPosInput, SectionUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCurrentPosInput
    upsert?: SectionUpsertWithoutCurrentPosInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutCurrentPosInput, SectionUpdateWithoutCurrentPosInput>, SectionUncheckedUpdateWithoutCurrentPosInput>
  }

  export type ModuleUpdateOneRequiredWithoutCurrentPosNestedInput = {
    create?: XOR<ModuleCreateWithoutCurrentPosInput, ModuleUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutCurrentPosInput
    upsert?: ModuleUpsertWithoutCurrentPosInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutCurrentPosInput, ModuleUpdateWithoutCurrentPosInput>, ModuleUncheckedUpdateWithoutCurrentPosInput>
  }

  export type PartUpdateOneRequiredWithoutCurrentPosNestedInput = {
    create?: XOR<PartCreateWithoutCurrentPosInput, PartUncheckedCreateWithoutCurrentPosInput>
    connectOrCreate?: PartCreateOrConnectWithoutCurrentPosInput
    upsert?: PartUpsertWithoutCurrentPosInput
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutCurrentPosInput, PartUpdateWithoutCurrentPosInput>, PartUncheckedUpdateWithoutCurrentPosInput>
  }

  export type UserCreateNestedOneWithoutLevelProgressInput = {
    create?: XOR<UserCreateWithoutLevelProgressInput, UserUncheckedCreateWithoutLevelProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLevelProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutProgressInput = {
    create?: XOR<LevelCreateWithoutProgressInput, LevelUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LevelCreateOrConnectWithoutProgressInput
    connect?: LevelWhereUniqueInput
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type UserUpdateOneRequiredWithoutLevelProgressNestedInput = {
    create?: XOR<UserCreateWithoutLevelProgressInput, UserUncheckedCreateWithoutLevelProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLevelProgressInput
    upsert?: UserUpsertWithoutLevelProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLevelProgressInput, UserUpdateWithoutLevelProgressInput>, UserUncheckedUpdateWithoutLevelProgressInput>
  }

  export type LevelUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LevelCreateWithoutProgressInput, LevelUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LevelCreateOrConnectWithoutProgressInput
    upsert?: LevelUpsertWithoutProgressInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutProgressInput, LevelUpdateWithoutProgressInput>, LevelUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutSectionStatusInput = {
    create?: XOR<UserCreateWithoutSectionStatusInput, UserUncheckedCreateWithoutSectionStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutSectionStatusInput
    connect?: UserWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutStatusInput = {
    create?: XOR<SectionCreateWithoutStatusInput, SectionUncheckedCreateWithoutStatusInput>
    connectOrCreate?: SectionCreateOrConnectWithoutStatusInput
    connect?: SectionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSectionStatusNestedInput = {
    create?: XOR<UserCreateWithoutSectionStatusInput, UserUncheckedCreateWithoutSectionStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutSectionStatusInput
    upsert?: UserUpsertWithoutSectionStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSectionStatusInput, UserUpdateWithoutSectionStatusInput>, UserUncheckedUpdateWithoutSectionStatusInput>
  }

  export type SectionUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<SectionCreateWithoutStatusInput, SectionUncheckedCreateWithoutStatusInput>
    connectOrCreate?: SectionCreateOrConnectWithoutStatusInput
    upsert?: SectionUpsertWithoutStatusInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutStatusInput, SectionUpdateWithoutStatusInput>, SectionUncheckedUpdateWithoutStatusInput>
  }

  export type UserCreateNestedOneWithoutModuleStatusInput = {
    create?: XOR<UserCreateWithoutModuleStatusInput, UserUncheckedCreateWithoutModuleStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleStatusInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutStatusesInput = {
    create?: XOR<ModuleCreateWithoutStatusesInput, ModuleUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutStatusesInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModuleStatusNestedInput = {
    create?: XOR<UserCreateWithoutModuleStatusInput, UserUncheckedCreateWithoutModuleStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleStatusInput
    upsert?: UserUpsertWithoutModuleStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleStatusInput, UserUpdateWithoutModuleStatusInput>, UserUncheckedUpdateWithoutModuleStatusInput>
  }

  export type ModuleUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<ModuleCreateWithoutStatusesInput, ModuleUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutStatusesInput
    upsert?: ModuleUpsertWithoutStatusesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutStatusesInput, ModuleUpdateWithoutStatusesInput>, ModuleUncheckedUpdateWithoutStatusesInput>
  }

  export type UserCreateNestedOneWithoutPartStatusInput = {
    create?: XOR<UserCreateWithoutPartStatusInput, UserUncheckedCreateWithoutPartStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartStatusInput
    connect?: UserWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutStatusInput = {
    create?: XOR<PartCreateWithoutStatusInput, PartUncheckedCreateWithoutStatusInput>
    connectOrCreate?: PartCreateOrConnectWithoutStatusInput
    connect?: PartWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPartStatusNestedInput = {
    create?: XOR<UserCreateWithoutPartStatusInput, UserUncheckedCreateWithoutPartStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartStatusInput
    upsert?: UserUpsertWithoutPartStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartStatusInput, UserUpdateWithoutPartStatusInput>, UserUncheckedUpdateWithoutPartStatusInput>
  }

  export type PartUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<PartCreateWithoutStatusInput, PartUncheckedCreateWithoutStatusInput>
    connectOrCreate?: PartCreateOrConnectWithoutStatusInput
    upsert?: PartUpsertWithoutStatusInput
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutStatusInput, PartUpdateWithoutStatusInput>, PartUncheckedUpdateWithoutStatusInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<LevelCreateWithoutCertificatesInput, LevelUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: LevelCreateOrConnectWithoutCertificatesInput
    connect?: LevelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type LevelUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<LevelCreateWithoutCertificatesInput, LevelUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: LevelCreateOrConnectWithoutCertificatesInput
    upsert?: LevelUpsertWithoutCertificatesInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutCertificatesInput, LevelUpdateWithoutCertificatesInput>, LevelUncheckedUpdateWithoutCertificatesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumVisaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaTypeFilter<$PrismaModel> | $Enums.VisaType
  }

  export type NestedEnumProgramsFilter<$PrismaModel = never> = {
    equals?: $Enums.Programs | EnumProgramsFieldRefInput<$PrismaModel>
    in?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramsFilter<$PrismaModel> | $Enums.Programs
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumIntakeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIntakeNullableFilter<$PrismaModel> | $Enums.Intake | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVisaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaTypeFilter<$PrismaModel>
    _max?: NestedEnumVisaTypeFilter<$PrismaModel>
  }

  export type NestedEnumProgramsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Programs | EnumProgramsFieldRefInput<$PrismaModel>
    in?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Programs[] | ListEnumProgramsFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramsWithAggregatesFilter<$PrismaModel> | $Enums.Programs
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramsFilter<$PrismaModel>
    _max?: NestedEnumProgramsFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumIntakeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIntakeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Intake | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIntakeNullableFilter<$PrismaModel>
    _max?: NestedEnumIntakeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    dob?: Date | string | null
    visaType?: $Enums.VisaType
    program?: $Enums.Programs
    gender?: $Enums.Gender
    universityName?: string | null
    country?: string | null
    phoneNo?: string | null
    intake?: $Enums.Intake | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    dob?: Date | string | null
    visaType?: $Enums.VisaType
    program?: $Enums.Programs
    gender?: $Enums.Gender
    universityName?: string | null
    country?: string | null
    phoneNo?: string | null
    intake?: $Enums.Intake | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserCurrentPositionCreateWithoutUserInput = {
    id?: string
    updatedAt?: Date | string
    level: LevelCreateNestedOneWithoutCurrentPosInput
    section: SectionCreateNestedOneWithoutCurrentPosInput
    module: ModuleCreateNestedOneWithoutCurrentPosInput
    part: PartCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateWithoutUserInput = {
    id?: string
    levelId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateOrConnectWithoutUserInput = {
    where: UserCurrentPositionWhereUniqueInput
    create: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
  }

  export type LevelProgressCreateWithoutUserInput = {
    id?: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    level: LevelCreateNestedOneWithoutProgressInput
  }

  export type LevelProgressUncheckedCreateWithoutUserInput = {
    id?: string
    levelId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type LevelProgressCreateOrConnectWithoutUserInput = {
    where: LevelProgressWhereUniqueInput
    create: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput>
  }

  export type LevelProgressCreateManyUserInputEnvelope = {
    data: LevelProgressCreateManyUserInput | LevelProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SectionStatusCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutStatusInput
  }

  export type SectionStatusUncheckedCreateWithoutUserInput = {
    id?: string
    sectionId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type SectionStatusCreateOrConnectWithoutUserInput = {
    where: SectionStatusWhereUniqueInput
    create: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput>
  }

  export type SectionStatusCreateManyUserInputEnvelope = {
    data: SectionStatusCreateManyUserInput | SectionStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModuleStatusCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutStatusesInput
  }

  export type ModuleStatusUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type ModuleStatusCreateOrConnectWithoutUserInput = {
    where: ModuleStatusWhereUniqueInput
    create: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput>
  }

  export type ModuleStatusCreateManyUserInputEnvelope = {
    data: ModuleStatusCreateManyUserInput | ModuleStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PartStatusCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    part: PartCreateNestedOneWithoutStatusInput
  }

  export type PartStatusUncheckedCreateWithoutUserInput = {
    id?: string
    partId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type PartStatusCreateOrConnectWithoutUserInput = {
    where: PartStatusWhereUniqueInput
    create: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput>
  }

  export type PartStatusCreateManyUserInputEnvelope = {
    data: PartStatusCreateManyUserInput | PartStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
    level: LevelCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    levelId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visaType?: EnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType
    program?: EnumProgramsFieldUpdateOperationsInput | $Enums.Programs
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    intake?: NullableEnumIntakeFieldUpdateOperationsInput | $Enums.Intake | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUpsertWithoutUserInput = {
    update: XOR<UserCurrentPositionUpdateWithoutUserInput, UserCurrentPositionUncheckedUpdateWithoutUserInput>
    create: XOR<UserCurrentPositionCreateWithoutUserInput, UserCurrentPositionUncheckedCreateWithoutUserInput>
    where?: UserCurrentPositionWhereInput
  }

  export type UserCurrentPositionUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCurrentPositionWhereInput
    data: XOR<UserCurrentPositionUpdateWithoutUserInput, UserCurrentPositionUncheckedUpdateWithoutUserInput>
  }

  export type UserCurrentPositionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutCurrentPosNestedInput
    section?: SectionUpdateOneRequiredWithoutCurrentPosNestedInput
    module?: ModuleUpdateOneRequiredWithoutCurrentPosNestedInput
    part?: PartUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LevelProgressWhereUniqueInput
    update: XOR<LevelProgressUpdateWithoutUserInput, LevelProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LevelProgressCreateWithoutUserInput, LevelProgressUncheckedCreateWithoutUserInput>
  }

  export type LevelProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LevelProgressWhereUniqueInput
    data: XOR<LevelProgressUpdateWithoutUserInput, LevelProgressUncheckedUpdateWithoutUserInput>
  }

  export type LevelProgressUpdateManyWithWhereWithoutUserInput = {
    where: LevelProgressScalarWhereInput
    data: XOR<LevelProgressUpdateManyMutationInput, LevelProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LevelProgressScalarWhereInput = {
    AND?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
    OR?: LevelProgressScalarWhereInput[]
    NOT?: LevelProgressScalarWhereInput | LevelProgressScalarWhereInput[]
    id?: StringFilter<"LevelProgress"> | string
    userId?: StringFilter<"LevelProgress"> | string
    levelId?: StringFilter<"LevelProgress"> | string
    progressPercentage?: IntFilter<"LevelProgress"> | number
    status?: EnumProgressStatusFilter<"LevelProgress"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"LevelProgress"> | Date | string
  }

  export type SectionStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: SectionStatusWhereUniqueInput
    update: XOR<SectionStatusUpdateWithoutUserInput, SectionStatusUncheckedUpdateWithoutUserInput>
    create: XOR<SectionStatusCreateWithoutUserInput, SectionStatusUncheckedCreateWithoutUserInput>
  }

  export type SectionStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: SectionStatusWhereUniqueInput
    data: XOR<SectionStatusUpdateWithoutUserInput, SectionStatusUncheckedUpdateWithoutUserInput>
  }

  export type SectionStatusUpdateManyWithWhereWithoutUserInput = {
    where: SectionStatusScalarWhereInput
    data: XOR<SectionStatusUpdateManyMutationInput, SectionStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type SectionStatusScalarWhereInput = {
    AND?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
    OR?: SectionStatusScalarWhereInput[]
    NOT?: SectionStatusScalarWhereInput | SectionStatusScalarWhereInput[]
    id?: StringFilter<"SectionStatus"> | string
    userId?: StringFilter<"SectionStatus"> | string
    sectionId?: StringFilter<"SectionStatus"> | string
    status?: EnumProgressStatusFilter<"SectionStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"SectionStatus"> | Date | string
  }

  export type ModuleStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: ModuleStatusWhereUniqueInput
    update: XOR<ModuleStatusUpdateWithoutUserInput, ModuleStatusUncheckedUpdateWithoutUserInput>
    create: XOR<ModuleStatusCreateWithoutUserInput, ModuleStatusUncheckedCreateWithoutUserInput>
  }

  export type ModuleStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: ModuleStatusWhereUniqueInput
    data: XOR<ModuleStatusUpdateWithoutUserInput, ModuleStatusUncheckedUpdateWithoutUserInput>
  }

  export type ModuleStatusUpdateManyWithWhereWithoutUserInput = {
    where: ModuleStatusScalarWhereInput
    data: XOR<ModuleStatusUpdateManyMutationInput, ModuleStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type ModuleStatusScalarWhereInput = {
    AND?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
    OR?: ModuleStatusScalarWhereInput[]
    NOT?: ModuleStatusScalarWhereInput | ModuleStatusScalarWhereInput[]
    id?: StringFilter<"ModuleStatus"> | string
    userId?: StringFilter<"ModuleStatus"> | string
    moduleId?: StringFilter<"ModuleStatus"> | string
    status?: EnumProgressStatusFilter<"ModuleStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"ModuleStatus"> | Date | string
  }

  export type PartStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: PartStatusWhereUniqueInput
    update: XOR<PartStatusUpdateWithoutUserInput, PartStatusUncheckedUpdateWithoutUserInput>
    create: XOR<PartStatusCreateWithoutUserInput, PartStatusUncheckedCreateWithoutUserInput>
  }

  export type PartStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: PartStatusWhereUniqueInput
    data: XOR<PartStatusUpdateWithoutUserInput, PartStatusUncheckedUpdateWithoutUserInput>
  }

  export type PartStatusUpdateManyWithWhereWithoutUserInput = {
    where: PartStatusScalarWhereInput
    data: XOR<PartStatusUpdateManyMutationInput, PartStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type PartStatusScalarWhereInput = {
    AND?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
    OR?: PartStatusScalarWhereInput[]
    NOT?: PartStatusScalarWhereInput | PartStatusScalarWhereInput[]
    id?: StringFilter<"PartStatus"> | string
    userId?: StringFilter<"PartStatus"> | string
    partId?: StringFilter<"PartStatus"> | string
    status?: EnumProgressStatusFilter<"PartStatus"> | $Enums.ProgressStatus
    updatedAt?: DateTimeFilter<"PartStatus"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    levelId?: StringFilter<"Certificate"> | string
    certificateNo?: StringFilter<"Certificate"> | string
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    fileUrl?: StringFilter<"Certificate"> | string
    verificationToken?: StringFilter<"Certificate"> | string
    isRevoked?: BoolFilter<"Certificate"> | boolean
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SectionCreateWithoutLevelInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    modules?: ModuleCreateNestedManyWithoutSectionInput
    status?: SectionStatusCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutLevelInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutSectionInput
    status?: SectionStatusUncheckedCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutLevelInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput>
  }

  export type SectionCreateManyLevelInputEnvelope = {
    data: SectionCreateManyLevelInput | SectionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type LevelProgressCreateWithoutLevelInput = {
    id?: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLevelProgressInput
  }

  export type LevelProgressUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type LevelProgressCreateOrConnectWithoutLevelInput = {
    where: LevelProgressWhereUniqueInput
    create: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput>
  }

  export type LevelProgressCreateManyLevelInputEnvelope = {
    data: LevelProgressCreateManyLevelInput | LevelProgressCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutLevelInput = {
    id?: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutLevelInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput>
  }

  export type CertificateCreateManyLevelInputEnvelope = {
    data: CertificateCreateManyLevelInput | CertificateCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type UserCurrentPositionCreateWithoutLevelInput = {
    id?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentPosInput
    section: SectionCreateNestedOneWithoutCurrentPosInput
    module: ModuleCreateNestedOneWithoutCurrentPosInput
    part: PartCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateOrConnectWithoutLevelInput = {
    where: UserCurrentPositionWhereUniqueInput
    create: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput>
  }

  export type UserCurrentPositionCreateManyLevelInputEnvelope = {
    data: UserCurrentPositionCreateManyLevelInput | UserCurrentPositionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutLevelInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutLevelInput, SectionUncheckedUpdateWithoutLevelInput>
    create: XOR<SectionCreateWithoutLevelInput, SectionUncheckedCreateWithoutLevelInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutLevelInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutLevelInput, SectionUncheckedUpdateWithoutLevelInput>
  }

  export type SectionUpdateManyWithWhereWithoutLevelInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutLevelInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    levelId?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    deTitle?: StringNullableFilter<"Section"> | string | null
    visaType?: StringNullableFilter<"Section"> | string | null
    specialization?: StringNullableFilter<"Section"> | string | null
    order?: IntFilter<"Section"> | number
  }

  export type LevelProgressUpsertWithWhereUniqueWithoutLevelInput = {
    where: LevelProgressWhereUniqueInput
    update: XOR<LevelProgressUpdateWithoutLevelInput, LevelProgressUncheckedUpdateWithoutLevelInput>
    create: XOR<LevelProgressCreateWithoutLevelInput, LevelProgressUncheckedCreateWithoutLevelInput>
  }

  export type LevelProgressUpdateWithWhereUniqueWithoutLevelInput = {
    where: LevelProgressWhereUniqueInput
    data: XOR<LevelProgressUpdateWithoutLevelInput, LevelProgressUncheckedUpdateWithoutLevelInput>
  }

  export type LevelProgressUpdateManyWithWhereWithoutLevelInput = {
    where: LevelProgressScalarWhereInput
    data: XOR<LevelProgressUpdateManyMutationInput, LevelProgressUncheckedUpdateManyWithoutLevelInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutLevelInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutLevelInput, CertificateUncheckedUpdateWithoutLevelInput>
    create: XOR<CertificateCreateWithoutLevelInput, CertificateUncheckedCreateWithoutLevelInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutLevelInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutLevelInput, CertificateUncheckedUpdateWithoutLevelInput>
  }

  export type CertificateUpdateManyWithWhereWithoutLevelInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutLevelInput>
  }

  export type UserCurrentPositionUpsertWithWhereUniqueWithoutLevelInput = {
    where: UserCurrentPositionWhereUniqueInput
    update: XOR<UserCurrentPositionUpdateWithoutLevelInput, UserCurrentPositionUncheckedUpdateWithoutLevelInput>
    create: XOR<UserCurrentPositionCreateWithoutLevelInput, UserCurrentPositionUncheckedCreateWithoutLevelInput>
  }

  export type UserCurrentPositionUpdateWithWhereUniqueWithoutLevelInput = {
    where: UserCurrentPositionWhereUniqueInput
    data: XOR<UserCurrentPositionUpdateWithoutLevelInput, UserCurrentPositionUncheckedUpdateWithoutLevelInput>
  }

  export type UserCurrentPositionUpdateManyWithWhereWithoutLevelInput = {
    where: UserCurrentPositionScalarWhereInput
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyWithoutLevelInput>
  }

  export type UserCurrentPositionScalarWhereInput = {
    AND?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
    OR?: UserCurrentPositionScalarWhereInput[]
    NOT?: UserCurrentPositionScalarWhereInput | UserCurrentPositionScalarWhereInput[]
    id?: StringFilter<"UserCurrentPosition"> | string
    userId?: StringFilter<"UserCurrentPosition"> | string
    levelId?: StringFilter<"UserCurrentPosition"> | string
    sectionId?: StringFilter<"UserCurrentPosition"> | string
    moduleId?: StringFilter<"UserCurrentPosition"> | string
    partId?: StringFilter<"UserCurrentPosition"> | string
    updatedAt?: DateTimeFilter<"UserCurrentPosition"> | Date | string
  }

  export type LevelCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    progress?: LevelProgressCreateNestedManyWithoutLevelInput
    certificates?: CertificateCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    progress?: LevelProgressUncheckedCreateNestedManyWithoutLevelInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutSectionsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutSectionsInput, LevelUncheckedCreateWithoutSectionsInput>
  }

  export type ModuleCreateWithoutSectionInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    parts?: PartCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutSectionInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    parts?: PartUncheckedCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusUncheckedCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutSectionInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput>
  }

  export type ModuleCreateManySectionInputEnvelope = {
    data: ModuleCreateManySectionInput | ModuleCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type SectionStatusCreateWithoutSectionInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSectionStatusInput
  }

  export type SectionStatusUncheckedCreateWithoutSectionInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type SectionStatusCreateOrConnectWithoutSectionInput = {
    where: SectionStatusWhereUniqueInput
    create: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput>
  }

  export type SectionStatusCreateManySectionInputEnvelope = {
    data: SectionStatusCreateManySectionInput | SectionStatusCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type UserCurrentPositionCreateWithoutSectionInput = {
    id?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentPosInput
    level: LevelCreateNestedOneWithoutCurrentPosInput
    module: ModuleCreateNestedOneWithoutCurrentPosInput
    part: PartCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateWithoutSectionInput = {
    id?: string
    userId: string
    levelId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateOrConnectWithoutSectionInput = {
    where: UserCurrentPositionWhereUniqueInput
    create: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput>
  }

  export type UserCurrentPositionCreateManySectionInputEnvelope = {
    data: UserCurrentPositionCreateManySectionInput | UserCurrentPositionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type LevelUpsertWithoutSectionsInput = {
    update: XOR<LevelUpdateWithoutSectionsInput, LevelUncheckedUpdateWithoutSectionsInput>
    create: XOR<LevelCreateWithoutSectionsInput, LevelUncheckedCreateWithoutSectionsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutSectionsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutSectionsInput, LevelUncheckedUpdateWithoutSectionsInput>
  }

  export type LevelUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    progress?: LevelProgressUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    progress?: LevelProgressUncheckedUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutSectionInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutSectionInput, ModuleUncheckedUpdateWithoutSectionInput>
    create: XOR<ModuleCreateWithoutSectionInput, ModuleUncheckedCreateWithoutSectionInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutSectionInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutSectionInput, ModuleUncheckedUpdateWithoutSectionInput>
  }

  export type ModuleUpdateManyWithWhereWithoutSectionInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutSectionInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    sectionId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    deTitle?: StringNullableFilter<"Module"> | string | null
    visaType?: StringNullableFilter<"Module"> | string | null
    specialization?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
  }

  export type SectionStatusUpsertWithWhereUniqueWithoutSectionInput = {
    where: SectionStatusWhereUniqueInput
    update: XOR<SectionStatusUpdateWithoutSectionInput, SectionStatusUncheckedUpdateWithoutSectionInput>
    create: XOR<SectionStatusCreateWithoutSectionInput, SectionStatusUncheckedCreateWithoutSectionInput>
  }

  export type SectionStatusUpdateWithWhereUniqueWithoutSectionInput = {
    where: SectionStatusWhereUniqueInput
    data: XOR<SectionStatusUpdateWithoutSectionInput, SectionStatusUncheckedUpdateWithoutSectionInput>
  }

  export type SectionStatusUpdateManyWithWhereWithoutSectionInput = {
    where: SectionStatusScalarWhereInput
    data: XOR<SectionStatusUpdateManyMutationInput, SectionStatusUncheckedUpdateManyWithoutSectionInput>
  }

  export type UserCurrentPositionUpsertWithWhereUniqueWithoutSectionInput = {
    where: UserCurrentPositionWhereUniqueInput
    update: XOR<UserCurrentPositionUpdateWithoutSectionInput, UserCurrentPositionUncheckedUpdateWithoutSectionInput>
    create: XOR<UserCurrentPositionCreateWithoutSectionInput, UserCurrentPositionUncheckedCreateWithoutSectionInput>
  }

  export type UserCurrentPositionUpdateWithWhereUniqueWithoutSectionInput = {
    where: UserCurrentPositionWhereUniqueInput
    data: XOR<UserCurrentPositionUpdateWithoutSectionInput, UserCurrentPositionUncheckedUpdateWithoutSectionInput>
  }

  export type UserCurrentPositionUpdateManyWithWhereWithoutSectionInput = {
    where: UserCurrentPositionScalarWhereInput
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionCreateWithoutModulesInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    level: LevelCreateNestedOneWithoutSectionsInput
    status?: SectionStatusCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutModulesInput = {
    id?: string
    levelId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    status?: SectionStatusUncheckedCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutModulesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutModulesInput, SectionUncheckedCreateWithoutModulesInput>
  }

  export type PartCreateWithoutModuleInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    status?: PartStatusCreateNestedManyWithoutPartInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutModuleInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    status?: PartStatusUncheckedCreateNestedManyWithoutPartInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutModuleInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput>
  }

  export type PartCreateManyModuleInputEnvelope = {
    data: PartCreateManyModuleInput | PartCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModuleStatusCreateWithoutModuleInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleStatusInput
  }

  export type ModuleStatusUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type ModuleStatusCreateOrConnectWithoutModuleInput = {
    where: ModuleStatusWhereUniqueInput
    create: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput>
  }

  export type ModuleStatusCreateManyModuleInputEnvelope = {
    data: ModuleStatusCreateManyModuleInput | ModuleStatusCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type UserCurrentPositionCreateWithoutModuleInput = {
    id?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentPosInput
    level: LevelCreateNestedOneWithoutCurrentPosInput
    section: SectionCreateNestedOneWithoutCurrentPosInput
    part: PartCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    partId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateOrConnectWithoutModuleInput = {
    where: UserCurrentPositionWhereUniqueInput
    create: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput>
  }

  export type UserCurrentPositionCreateManyModuleInputEnvelope = {
    data: UserCurrentPositionCreateManyModuleInput | UserCurrentPositionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithoutModulesInput = {
    update: XOR<SectionUpdateWithoutModulesInput, SectionUncheckedUpdateWithoutModulesInput>
    create: XOR<SectionCreateWithoutModulesInput, SectionUncheckedCreateWithoutModulesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutModulesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutModulesInput, SectionUncheckedUpdateWithoutModulesInput>
  }

  export type SectionUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    level?: LevelUpdateOneRequiredWithoutSectionsNestedInput
    status?: SectionStatusUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: SectionStatusUncheckedUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type PartUpsertWithWhereUniqueWithoutModuleInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutModuleInput, PartUncheckedUpdateWithoutModuleInput>
    create: XOR<PartCreateWithoutModuleInput, PartUncheckedCreateWithoutModuleInput>
  }

  export type PartUpdateWithWhereUniqueWithoutModuleInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutModuleInput, PartUncheckedUpdateWithoutModuleInput>
  }

  export type PartUpdateManyWithWhereWithoutModuleInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutModuleInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: StringFilter<"Part"> | string
    moduleId?: StringFilter<"Part"> | string
    title?: StringFilter<"Part"> | string
    deTitle?: StringNullableFilter<"Part"> | string | null
    content?: JsonNullableFilter<"Part">
    contentId?: StringFilter<"Part"> | string
    order?: IntFilter<"Part"> | number
  }

  export type ModuleStatusUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleStatusWhereUniqueInput
    update: XOR<ModuleStatusUpdateWithoutModuleInput, ModuleStatusUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleStatusCreateWithoutModuleInput, ModuleStatusUncheckedCreateWithoutModuleInput>
  }

  export type ModuleStatusUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleStatusWhereUniqueInput
    data: XOR<ModuleStatusUpdateWithoutModuleInput, ModuleStatusUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleStatusUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleStatusScalarWhereInput
    data: XOR<ModuleStatusUpdateManyMutationInput, ModuleStatusUncheckedUpdateManyWithoutModuleInput>
  }

  export type UserCurrentPositionUpsertWithWhereUniqueWithoutModuleInput = {
    where: UserCurrentPositionWhereUniqueInput
    update: XOR<UserCurrentPositionUpdateWithoutModuleInput, UserCurrentPositionUncheckedUpdateWithoutModuleInput>
    create: XOR<UserCurrentPositionCreateWithoutModuleInput, UserCurrentPositionUncheckedCreateWithoutModuleInput>
  }

  export type UserCurrentPositionUpdateWithWhereUniqueWithoutModuleInput = {
    where: UserCurrentPositionWhereUniqueInput
    data: XOR<UserCurrentPositionUpdateWithoutModuleInput, UserCurrentPositionUncheckedUpdateWithoutModuleInput>
  }

  export type UserCurrentPositionUpdateManyWithWhereWithoutModuleInput = {
    where: UserCurrentPositionScalarWhereInput
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleCreateWithoutPartsInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    section: SectionCreateNestedOneWithoutModulesInput
    statuses?: ModuleStatusCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutPartsInput = {
    id?: string
    sectionId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    statuses?: ModuleStatusUncheckedCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutPartsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutPartsInput, ModuleUncheckedCreateWithoutPartsInput>
  }

  export type PartStatusCreateWithoutPartInput = {
    id?: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartStatusInput
  }

  export type PartStatusUncheckedCreateWithoutPartInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type PartStatusCreateOrConnectWithoutPartInput = {
    where: PartStatusWhereUniqueInput
    create: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput>
  }

  export type PartStatusCreateManyPartInputEnvelope = {
    data: PartStatusCreateManyPartInput | PartStatusCreateManyPartInput[]
    skipDuplicates?: boolean
  }

  export type UserCurrentPositionCreateWithoutPartInput = {
    id?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentPosInput
    level: LevelCreateNestedOneWithoutCurrentPosInput
    section: SectionCreateNestedOneWithoutCurrentPosInput
    module: ModuleCreateNestedOneWithoutCurrentPosInput
  }

  export type UserCurrentPositionUncheckedCreateWithoutPartInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    moduleId: string
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateOrConnectWithoutPartInput = {
    where: UserCurrentPositionWhereUniqueInput
    create: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput>
  }

  export type UserCurrentPositionCreateManyPartInputEnvelope = {
    data: UserCurrentPositionCreateManyPartInput | UserCurrentPositionCreateManyPartInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutPartsInput = {
    update: XOR<ModuleUpdateWithoutPartsInput, ModuleUncheckedUpdateWithoutPartsInput>
    create: XOR<ModuleCreateWithoutPartsInput, ModuleUncheckedCreateWithoutPartsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutPartsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutPartsInput, ModuleUncheckedUpdateWithoutPartsInput>
  }

  export type ModuleUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutModulesNestedInput
    statuses?: ModuleStatusUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    statuses?: ModuleStatusUncheckedUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type PartStatusUpsertWithWhereUniqueWithoutPartInput = {
    where: PartStatusWhereUniqueInput
    update: XOR<PartStatusUpdateWithoutPartInput, PartStatusUncheckedUpdateWithoutPartInput>
    create: XOR<PartStatusCreateWithoutPartInput, PartStatusUncheckedCreateWithoutPartInput>
  }

  export type PartStatusUpdateWithWhereUniqueWithoutPartInput = {
    where: PartStatusWhereUniqueInput
    data: XOR<PartStatusUpdateWithoutPartInput, PartStatusUncheckedUpdateWithoutPartInput>
  }

  export type PartStatusUpdateManyWithWhereWithoutPartInput = {
    where: PartStatusScalarWhereInput
    data: XOR<PartStatusUpdateManyMutationInput, PartStatusUncheckedUpdateManyWithoutPartInput>
  }

  export type UserCurrentPositionUpsertWithWhereUniqueWithoutPartInput = {
    where: UserCurrentPositionWhereUniqueInput
    update: XOR<UserCurrentPositionUpdateWithoutPartInput, UserCurrentPositionUncheckedUpdateWithoutPartInput>
    create: XOR<UserCurrentPositionCreateWithoutPartInput, UserCurrentPositionUncheckedCreateWithoutPartInput>
  }

  export type UserCurrentPositionUpdateWithWhereUniqueWithoutPartInput = {
    where: UserCurrentPositionWhereUniqueInput
    data: XOR<UserCurrentPositionUpdateWithoutPartInput, UserCurrentPositionUncheckedUpdateWithoutPartInput>
  }

  export type UserCurrentPositionUpdateManyWithWhereWithoutPartInput = {
    where: UserCurrentPositionScalarWhereInput
    data: XOR<UserCurrentPositionUpdateManyMutationInput, UserCurrentPositionUncheckedUpdateManyWithoutPartInput>
  }

  export type UserCreateWithoutCurrentPosInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCurrentPosInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCurrentPosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentPosInput, UserUncheckedCreateWithoutCurrentPosInput>
  }

  export type LevelCreateWithoutCurrentPosInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionCreateNestedManyWithoutLevelInput
    progress?: LevelProgressCreateNestedManyWithoutLevelInput
    certificates?: CertificateCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutCurrentPosInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionUncheckedCreateNestedManyWithoutLevelInput
    progress?: LevelProgressUncheckedCreateNestedManyWithoutLevelInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutCurrentPosInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutCurrentPosInput, LevelUncheckedCreateWithoutCurrentPosInput>
  }

  export type SectionCreateWithoutCurrentPosInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    level: LevelCreateNestedOneWithoutSectionsInput
    modules?: ModuleCreateNestedManyWithoutSectionInput
    status?: SectionStatusCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCurrentPosInput = {
    id?: string
    levelId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutSectionInput
    status?: SectionStatusUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCurrentPosInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCurrentPosInput, SectionUncheckedCreateWithoutCurrentPosInput>
  }

  export type ModuleCreateWithoutCurrentPosInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    section: SectionCreateNestedOneWithoutModulesInput
    parts?: PartCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCurrentPosInput = {
    id?: string
    sectionId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    parts?: PartUncheckedCreateNestedManyWithoutModuleInput
    statuses?: ModuleStatusUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCurrentPosInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCurrentPosInput, ModuleUncheckedCreateWithoutCurrentPosInput>
  }

  export type PartCreateWithoutCurrentPosInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    module: ModuleCreateNestedOneWithoutPartsInput
    status?: PartStatusCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutCurrentPosInput = {
    id?: string
    moduleId: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    status?: PartStatusUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutCurrentPosInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutCurrentPosInput, PartUncheckedCreateWithoutCurrentPosInput>
  }

  export type UserUpsertWithoutCurrentPosInput = {
    update: XOR<UserUpdateWithoutCurrentPosInput, UserUncheckedUpdateWithoutCurrentPosInput>
    create: XOR<UserCreateWithoutCurrentPosInput, UserUncheckedCreateWithoutCurrentPosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurrentPosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurrentPosInput, UserUncheckedUpdateWithoutCurrentPosInput>
  }

  export type UserUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LevelUpsertWithoutCurrentPosInput = {
    update: XOR<LevelUpdateWithoutCurrentPosInput, LevelUncheckedUpdateWithoutCurrentPosInput>
    create: XOR<LevelCreateWithoutCurrentPosInput, LevelUncheckedCreateWithoutCurrentPosInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutCurrentPosInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutCurrentPosInput, LevelUncheckedUpdateWithoutCurrentPosInput>
  }

  export type LevelUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUncheckedUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type SectionUpsertWithoutCurrentPosInput = {
    update: XOR<SectionUpdateWithoutCurrentPosInput, SectionUncheckedUpdateWithoutCurrentPosInput>
    create: XOR<SectionCreateWithoutCurrentPosInput, SectionUncheckedCreateWithoutCurrentPosInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutCurrentPosInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutCurrentPosInput, SectionUncheckedUpdateWithoutCurrentPosInput>
  }

  export type SectionUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    level?: LevelUpdateOneRequiredWithoutSectionsNestedInput
    modules?: ModuleUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type ModuleUpsertWithoutCurrentPosInput = {
    update: XOR<ModuleUpdateWithoutCurrentPosInput, ModuleUncheckedUpdateWithoutCurrentPosInput>
    create: XOR<ModuleCreateWithoutCurrentPosInput, ModuleUncheckedCreateWithoutCurrentPosInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutCurrentPosInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutCurrentPosInput, ModuleUncheckedUpdateWithoutCurrentPosInput>
  }

  export type ModuleUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutModulesNestedInput
    parts?: PartUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type PartUpsertWithoutCurrentPosInput = {
    update: XOR<PartUpdateWithoutCurrentPosInput, PartUncheckedUpdateWithoutCurrentPosInput>
    create: XOR<PartCreateWithoutCurrentPosInput, PartUncheckedCreateWithoutCurrentPosInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutCurrentPosInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutCurrentPosInput, PartUncheckedUpdateWithoutCurrentPosInput>
  }

  export type PartUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutPartsNestedInput
    status?: PartStatusUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutCurrentPosInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: PartStatusUncheckedUpdateManyWithoutPartNestedInput
  }

  export type UserCreateWithoutLevelProgressInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLevelProgressInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLevelProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLevelProgressInput, UserUncheckedCreateWithoutLevelProgressInput>
  }

  export type LevelCreateWithoutProgressInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionCreateNestedManyWithoutLevelInput
    certificates?: CertificateCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutProgressInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionUncheckedCreateNestedManyWithoutLevelInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutProgressInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutProgressInput, LevelUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutLevelProgressInput = {
    update: XOR<UserUpdateWithoutLevelProgressInput, UserUncheckedUpdateWithoutLevelProgressInput>
    create: XOR<UserCreateWithoutLevelProgressInput, UserUncheckedCreateWithoutLevelProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLevelProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLevelProgressInput, UserUncheckedUpdateWithoutLevelProgressInput>
  }

  export type UserUpdateWithoutLevelProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLevelProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LevelUpsertWithoutProgressInput = {
    update: XOR<LevelUpdateWithoutProgressInput, LevelUncheckedUpdateWithoutProgressInput>
    create: XOR<LevelCreateWithoutProgressInput, LevelUncheckedCreateWithoutProgressInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutProgressInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutProgressInput, LevelUncheckedUpdateWithoutProgressInput>
  }

  export type LevelUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutLevelNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type UserCreateWithoutSectionStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSectionStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSectionStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSectionStatusInput, UserUncheckedCreateWithoutSectionStatusInput>
  }

  export type SectionCreateWithoutStatusInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    level: LevelCreateNestedOneWithoutSectionsInput
    modules?: ModuleCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutStatusInput = {
    id?: string
    levelId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutSectionInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutStatusInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutStatusInput, SectionUncheckedCreateWithoutStatusInput>
  }

  export type UserUpsertWithoutSectionStatusInput = {
    update: XOR<UserUpdateWithoutSectionStatusInput, UserUncheckedUpdateWithoutSectionStatusInput>
    create: XOR<UserCreateWithoutSectionStatusInput, UserUncheckedCreateWithoutSectionStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSectionStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSectionStatusInput, UserUncheckedUpdateWithoutSectionStatusInput>
  }

  export type UserUpdateWithoutSectionStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSectionStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SectionUpsertWithoutStatusInput = {
    update: XOR<SectionUpdateWithoutStatusInput, SectionUncheckedUpdateWithoutStatusInput>
    create: XOR<SectionCreateWithoutStatusInput, SectionUncheckedCreateWithoutStatusInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutStatusInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutStatusInput, SectionUncheckedUpdateWithoutStatusInput>
  }

  export type SectionUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    level?: LevelUpdateOneRequiredWithoutSectionsNestedInput
    modules?: ModuleUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type UserCreateWithoutModuleStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModuleStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModuleStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleStatusInput, UserUncheckedCreateWithoutModuleStatusInput>
  }

  export type ModuleCreateWithoutStatusesInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    section: SectionCreateNestedOneWithoutModulesInput
    parts?: PartCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutStatusesInput = {
    id?: string
    sectionId: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
    parts?: PartUncheckedCreateNestedManyWithoutModuleInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutStatusesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutStatusesInput, ModuleUncheckedCreateWithoutStatusesInput>
  }

  export type UserUpsertWithoutModuleStatusInput = {
    update: XOR<UserUpdateWithoutModuleStatusInput, UserUncheckedUpdateWithoutModuleStatusInput>
    create: XOR<UserCreateWithoutModuleStatusInput, UserUncheckedCreateWithoutModuleStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleStatusInput, UserUncheckedUpdateWithoutModuleStatusInput>
  }

  export type UserUpdateWithoutModuleStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutStatusesInput = {
    update: XOR<ModuleUpdateWithoutStatusesInput, ModuleUncheckedUpdateWithoutStatusesInput>
    create: XOR<ModuleCreateWithoutStatusesInput, ModuleUncheckedCreateWithoutStatusesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutStatusesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutStatusesInput, ModuleUncheckedUpdateWithoutStatusesInput>
  }

  export type ModuleUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutModulesNestedInput
    parts?: PartUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserCreateWithoutPartStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartStatusInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartStatusInput, UserUncheckedCreateWithoutPartStatusInput>
  }

  export type PartCreateWithoutStatusInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    module: ModuleCreateNestedOneWithoutPartsInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutStatusInput = {
    id?: string
    moduleId: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutStatusInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutStatusInput, PartUncheckedCreateWithoutStatusInput>
  }

  export type UserUpsertWithoutPartStatusInput = {
    update: XOR<UserUpdateWithoutPartStatusInput, UserUncheckedUpdateWithoutPartStatusInput>
    create: XOR<UserCreateWithoutPartStatusInput, UserUncheckedCreateWithoutPartStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartStatusInput, UserUncheckedUpdateWithoutPartStatusInput>
  }

  export type UserUpdateWithoutPartStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PartUpsertWithoutStatusInput = {
    update: XOR<PartUpdateWithoutStatusInput, PartUncheckedUpdateWithoutStatusInput>
    create: XOR<PartCreateWithoutStatusInput, PartUncheckedCreateWithoutStatusInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutStatusInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutStatusInput, PartUncheckedUpdateWithoutStatusInput>
  }

  export type PartUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutPartsNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutPartNestedInput
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusCreateNestedManyWithoutUserInput
    partStatus?: PartStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    email: string
    name?: string | null
    imageUrl?: string | null
    hasSeenWelcome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedOneWithoutUserInput
    levelProgress?: LevelProgressUncheckedCreateNestedManyWithoutUserInput
    sectionStatus?: SectionStatusUncheckedCreateNestedManyWithoutUserInput
    moduleStatus?: ModuleStatusUncheckedCreateNestedManyWithoutUserInput
    partStatus?: PartStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type LevelCreateWithoutCertificatesInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionCreateNestedManyWithoutLevelInput
    progress?: LevelProgressCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutCertificatesInput = {
    id?: string
    slug: string
    title: string
    deTitle?: string | null
    order: number
    sections?: SectionUncheckedCreateNestedManyWithoutLevelInput
    progress?: LevelProgressUncheckedCreateNestedManyWithoutLevelInput
    currentPos?: UserCurrentPositionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutCertificatesInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutCertificatesInput, LevelUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasSeenWelcome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateOneWithoutUserNestedInput
    levelProgress?: LevelProgressUncheckedUpdateManyWithoutUserNestedInput
    sectionStatus?: SectionStatusUncheckedUpdateManyWithoutUserNestedInput
    moduleStatus?: ModuleStatusUncheckedUpdateManyWithoutUserNestedInput
    partStatus?: PartStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LevelUpsertWithoutCertificatesInput = {
    update: XOR<LevelUpdateWithoutCertificatesInput, LevelUncheckedUpdateWithoutCertificatesInput>
    create: XOR<LevelCreateWithoutCertificatesInput, LevelUncheckedCreateWithoutCertificatesInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutCertificatesInput, LevelUncheckedUpdateWithoutCertificatesInput>
  }

  export type LevelUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutLevelNestedInput
    progress?: LevelProgressUncheckedUpdateManyWithoutLevelNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelProgressCreateManyUserInput = {
    id?: string
    levelId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type SectionStatusCreateManyUserInput = {
    id?: string
    sectionId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type ModuleStatusCreateManyUserInput = {
    id?: string
    moduleId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type PartStatusCreateManyUserInput = {
    id?: string
    partId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    levelId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type LevelProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LevelProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutStatusNestedInput
  }

  export type SectionStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type ModuleStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    part?: PartUpdateOneRequiredWithoutStatusNestedInput
  }

  export type PartStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateManyLevelInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
  }

  export type LevelProgressCreateManyLevelInput = {
    id?: string
    userId: string
    progressPercentage?: number
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type CertificateCreateManyLevelInput = {
    id?: string
    userId: string
    certificateNo: string
    issueDate?: Date | string
    fileUrl: string
    verificationToken?: string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type UserCurrentPositionCreateManyLevelInput = {
    id?: string
    userId: string
    sectionId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type SectionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutSectionNestedInput
    status?: SectionStatusUncheckedUpdateManyWithoutSectionNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelProgressUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLevelProgressNestedInput
  }

  export type LevelProgressUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelProgressUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationToken?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentPosNestedInput
    section?: SectionUpdateOneRequiredWithoutCurrentPosNestedInput
    module?: ModuleUpdateOneRequiredWithoutCurrentPosNestedInput
    part?: PartUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateManySectionInput = {
    id?: string
    title: string
    deTitle?: string | null
    visaType?: string | null
    specialization?: string | null
    order: number
  }

  export type SectionStatusCreateManySectionInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateManySectionInput = {
    id?: string
    userId: string
    levelId: string
    moduleId: string
    partId: string
    updatedAt?: Date | string
  }

  export type ModuleUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parts?: PartUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutModuleNestedInput
    statuses?: ModuleStatusUncheckedUpdateManyWithoutModuleNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SectionStatusUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSectionStatusNestedInput
  }

  export type SectionStatusUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionStatusUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentPosNestedInput
    level?: LevelUpdateOneRequiredWithoutCurrentPosNestedInput
    module?: ModuleUpdateOneRequiredWithoutCurrentPosNestedInput
    part?: PartUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartCreateManyModuleInput = {
    id?: string
    title: string
    deTitle?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId: string
    order: number
  }

  export type ModuleStatusCreateManyModuleInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateManyModuleInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    partId: string
    updatedAt?: Date | string
  }

  export type PartUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: PartStatusUpdateManyWithoutPartNestedInput
    currentPos?: UserCurrentPositionUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: PartStatusUncheckedUpdateManyWithoutPartNestedInput
    currentPos?: UserCurrentPositionUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deTitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    contentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleStatusUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleStatusNestedInput
  }

  export type ModuleStatusUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleStatusUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentPosNestedInput
    level?: LevelUpdateOneRequiredWithoutCurrentPosNestedInput
    section?: SectionUpdateOneRequiredWithoutCurrentPosNestedInput
    part?: PartUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusCreateManyPartInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    updatedAt?: Date | string
  }

  export type UserCurrentPositionCreateManyPartInput = {
    id?: string
    userId: string
    levelId: string
    sectionId: string
    moduleId: string
    updatedAt?: Date | string
  }

  export type PartStatusUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartStatusNestedInput
  }

  export type PartStatusUncheckedUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartStatusUncheckedUpdateManyWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentPosNestedInput
    level?: LevelUpdateOneRequiredWithoutCurrentPosNestedInput
    section?: SectionUpdateOneRequiredWithoutCurrentPosNestedInput
    module?: ModuleUpdateOneRequiredWithoutCurrentPosNestedInput
  }

  export type UserCurrentPositionUncheckedUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCurrentPositionUncheckedUpdateManyWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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