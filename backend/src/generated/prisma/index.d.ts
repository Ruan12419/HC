
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
 * Model Setor
 * 
 */
export type Setor = $Result.DefaultSelection<Prisma.$SetorPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Residente
 * 
 */
export type Residente = $Result.DefaultSelection<Prisma.$ResidentePayload>
/**
 * Model Supervisor
 * 
 */
export type Supervisor = $Result.DefaultSelection<Prisma.$SupervisorPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Frequencia
 * 
 */
export type Frequencia = $Result.DefaultSelection<Prisma.$FrequenciaPayload>
/**
 * Model Atividade
 * 
 */
export type Atividade = $Result.DefaultSelection<Prisma.$AtividadePayload>
/**
 * Model AtividadeLog
 * 
 */
export type AtividadeLog = $Result.DefaultSelection<Prisma.$AtividadeLogPayload>
/**
 * Model CampoAvaliacao
 * 
 */
export type CampoAvaliacao = $Result.DefaultSelection<Prisma.$CampoAvaliacaoPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model RespostaAvaliacao
 * 
 */
export type RespostaAvaliacao = $Result.DefaultSelection<Prisma.$RespostaAvaliacaoPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model LogAcesso
 * 
 */
export type LogAcesso = $Result.DefaultSelection<Prisma.$LogAcessoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  residente: 'residente',
  supervisor: 'supervisor',
  administrador: 'administrador'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const TipoCampo: {
  numerica: 'numerica',
  texto: 'texto',
  checkbox: 'checkbox'
};

export type TipoCampo = (typeof TipoCampo)[keyof typeof TipoCampo]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type TipoCampo = $Enums.TipoCampo

export const TipoCampo: typeof $Enums.TipoCampo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Setors
 * const setors = await prisma.setor.findMany()
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
   * // Fetch zero or more Setors
   * const setors = await prisma.setor.findMany()
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
   * `prisma.setor`: Exposes CRUD operations for the **Setor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setors
    * const setors = await prisma.setor.findMany()
    * ```
    */
  get setor(): Prisma.SetorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residente`: Exposes CRUD operations for the **Residente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Residentes
    * const residentes = await prisma.residente.findMany()
    * ```
    */
  get residente(): Prisma.ResidenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisor`: Exposes CRUD operations for the **Supervisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supervisors
    * const supervisors = await prisma.supervisor.findMany()
    * ```
    */
  get supervisor(): Prisma.SupervisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frequencia`: Exposes CRUD operations for the **Frequencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frequencias
    * const frequencias = await prisma.frequencia.findMany()
    * ```
    */
  get frequencia(): Prisma.FrequenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade`: Exposes CRUD operations for the **Atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.AtividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividadeLog`: Exposes CRUD operations for the **AtividadeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtividadeLogs
    * const atividadeLogs = await prisma.atividadeLog.findMany()
    * ```
    */
  get atividadeLog(): Prisma.AtividadeLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campoAvaliacao`: Exposes CRUD operations for the **CampoAvaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampoAvaliacaos
    * const campoAvaliacaos = await prisma.campoAvaliacao.findMany()
    * ```
    */
  get campoAvaliacao(): Prisma.CampoAvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respostaAvaliacao`: Exposes CRUD operations for the **RespostaAvaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RespostaAvaliacaos
    * const respostaAvaliacaos = await prisma.respostaAvaliacao.findMany()
    * ```
    */
  get respostaAvaliacao(): Prisma.RespostaAvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logAcesso`: Exposes CRUD operations for the **LogAcesso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAcessos
    * const logAcessos = await prisma.logAcesso.findMany()
    * ```
    */
  get logAcesso(): Prisma.LogAcessoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Setor: 'Setor',
    Usuario: 'Usuario',
    Residente: 'Residente',
    Supervisor: 'Supervisor',
    Administrador: 'Administrador',
    Frequencia: 'Frequencia',
    Atividade: 'Atividade',
    AtividadeLog: 'AtividadeLog',
    CampoAvaliacao: 'CampoAvaliacao',
    Avaliacao: 'Avaliacao',
    RespostaAvaliacao: 'RespostaAvaliacao',
    Comentario: 'Comentario',
    LogAcesso: 'LogAcesso',
    Notificacao: 'Notificacao'
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
      modelProps: "setor" | "usuario" | "residente" | "supervisor" | "administrador" | "frequencia" | "atividade" | "atividadeLog" | "campoAvaliacao" | "avaliacao" | "respostaAvaliacao" | "comentario" | "logAcesso" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Setor: {
        payload: Prisma.$SetorPayload<ExtArgs>
        fields: Prisma.SetorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findFirst: {
            args: Prisma.SetorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findMany: {
            args: Prisma.SetorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>[]
          }
          create: {
            args: Prisma.SetorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          createMany: {
            args: Prisma.SetorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SetorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          update: {
            args: Prisma.SetorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          deleteMany: {
            args: Prisma.SetorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SetorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          aggregate: {
            args: Prisma.SetorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetor>
          }
          groupBy: {
            args: Prisma.SetorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetorCountArgs<ExtArgs>
            result: $Utils.Optional<SetorCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Residente: {
        payload: Prisma.$ResidentePayload<ExtArgs>
        fields: Prisma.ResidenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          findFirst: {
            args: Prisma.ResidenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          findMany: {
            args: Prisma.ResidenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>[]
          }
          create: {
            args: Prisma.ResidenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          createMany: {
            args: Prisma.ResidenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResidenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          update: {
            args: Prisma.ResidenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          deleteMany: {
            args: Prisma.ResidenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResidenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentePayload>
          }
          aggregate: {
            args: Prisma.ResidenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidente>
          }
          groupBy: {
            args: Prisma.ResidenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidenteCountArgs<ExtArgs>
            result: $Utils.Optional<ResidenteCountAggregateOutputType> | number
          }
        }
      }
      Supervisor: {
        payload: Prisma.$SupervisorPayload<ExtArgs>
        fields: Prisma.SupervisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findFirst: {
            args: Prisma.SupervisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findMany: {
            args: Prisma.SupervisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>[]
          }
          create: {
            args: Prisma.SupervisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          createMany: {
            args: Prisma.SupervisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupervisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          update: {
            args: Prisma.SupervisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          deleteMany: {
            args: Prisma.SupervisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          aggregate: {
            args: Prisma.SupervisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisor>
          }
          groupBy: {
            args: Prisma.SupervisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisorCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Frequencia: {
        payload: Prisma.$FrequenciaPayload<ExtArgs>
        fields: Prisma.FrequenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrequenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrequenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findFirst: {
            args: Prisma.FrequenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrequenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findMany: {
            args: Prisma.FrequenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          create: {
            args: Prisma.FrequenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          createMany: {
            args: Prisma.FrequenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FrequenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          update: {
            args: Prisma.FrequenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          deleteMany: {
            args: Prisma.FrequenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrequenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FrequenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          aggregate: {
            args: Prisma.FrequenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrequencia>
          }
          groupBy: {
            args: Prisma.FrequenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrequenciaCountArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaCountAggregateOutputType> | number
          }
        }
      }
      Atividade: {
        payload: Prisma.$AtividadePayload<ExtArgs>
        fields: Prisma.AtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findFirst: {
            args: Prisma.AtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findMany: {
            args: Prisma.AtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          create: {
            args: Prisma.AtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          createMany: {
            args: Prisma.AtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          update: {
            args: Prisma.AtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.AtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
          }
        }
      }
      AtividadeLog: {
        payload: Prisma.$AtividadeLogPayload<ExtArgs>
        fields: Prisma.AtividadeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          findFirst: {
            args: Prisma.AtividadeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          findMany: {
            args: Prisma.AtividadeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>[]
          }
          create: {
            args: Prisma.AtividadeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          createMany: {
            args: Prisma.AtividadeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtividadeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          update: {
            args: Prisma.AtividadeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          deleteMany: {
            args: Prisma.AtividadeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeLogPayload>
          }
          aggregate: {
            args: Prisma.AtividadeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividadeLog>
          }
          groupBy: {
            args: Prisma.AtividadeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeLogCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeLogCountAggregateOutputType> | number
          }
        }
      }
      CampoAvaliacao: {
        payload: Prisma.$CampoAvaliacaoPayload<ExtArgs>
        fields: Prisma.CampoAvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampoAvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.CampoAvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampoAvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          findMany: {
            args: Prisma.CampoAvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>[]
          }
          create: {
            args: Prisma.CampoAvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          createMany: {
            args: Prisma.CampoAvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CampoAvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          update: {
            args: Prisma.CampoAvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.CampoAvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampoAvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampoAvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoAvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.CampoAvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampoAvaliacao>
          }
          groupBy: {
            args: Prisma.CampoAvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampoAvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampoAvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<CampoAvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      RespostaAvaliacao: {
        payload: Prisma.$RespostaAvaliacaoPayload<ExtArgs>
        fields: Prisma.RespostaAvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespostaAvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespostaAvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.RespostaAvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespostaAvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          findMany: {
            args: Prisma.RespostaAvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>[]
          }
          create: {
            args: Prisma.RespostaAvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          createMany: {
            args: Prisma.RespostaAvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RespostaAvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          update: {
            args: Prisma.RespostaAvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.RespostaAvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespostaAvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RespostaAvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaAvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.RespostaAvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespostaAvaliacao>
          }
          groupBy: {
            args: Prisma.RespostaAvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespostaAvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespostaAvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<RespostaAvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      LogAcesso: {
        payload: Prisma.$LogAcessoPayload<ExtArgs>
        fields: Prisma.LogAcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          findFirst: {
            args: Prisma.LogAcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          findMany: {
            args: Prisma.LogAcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>[]
          }
          create: {
            args: Prisma.LogAcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          createMany: {
            args: Prisma.LogAcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogAcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          update: {
            args: Prisma.LogAcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          deleteMany: {
            args: Prisma.LogAcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogAcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcessoPayload>
          }
          aggregate: {
            args: Prisma.LogAcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAcesso>
          }
          groupBy: {
            args: Prisma.LogAcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAcessoCountArgs<ExtArgs>
            result: $Utils.Optional<LogAcessoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
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
    setor?: SetorOmit
    usuario?: UsuarioOmit
    residente?: ResidenteOmit
    supervisor?: SupervisorOmit
    administrador?: AdministradorOmit
    frequencia?: FrequenciaOmit
    atividade?: AtividadeOmit
    atividadeLog?: AtividadeLogOmit
    campoAvaliacao?: CampoAvaliacaoOmit
    avaliacao?: AvaliacaoOmit
    respostaAvaliacao?: RespostaAvaliacaoOmit
    comentario?: ComentarioOmit
    logAcesso?: LogAcessoOmit
    notificacao?: NotificacaoOmit
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
   * Count Type SetorCountOutputType
   */

  export type SetorCountOutputType = {
    residentes: number
    supervisores: number
    atividades: number
  }

  export type SetorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residentes?: boolean | SetorCountOutputTypeCountResidentesArgs
    supervisores?: boolean | SetorCountOutputTypeCountSupervisoresArgs
    atividades?: boolean | SetorCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetorCountOutputType
     */
    select?: SetorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeCountResidentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidenteWhereInput
  }

  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeCountSupervisoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorWhereInput
  }

  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    logs: number
    notificacoes: number
    frequencias_registradas: number
    AtividadeLog: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UsuarioCountOutputTypeCountLogsArgs
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
    frequencias_registradas?: boolean | UsuarioCountOutputTypeCountFrequencias_registradasArgs
    AtividadeLog?: boolean | UsuarioCountOutputTypeCountAtividadeLogArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcessoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFrequencias_registradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtividadeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeLogWhereInput
  }


  /**
   * Count Type ResidenteCountOutputType
   */

  export type ResidenteCountOutputType = {
    frequencias: number
    avaliacoes: number
    atividades: number
  }

  export type ResidenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frequencias?: boolean | ResidenteCountOutputTypeCountFrequenciasArgs
    avaliacoes?: boolean | ResidenteCountOutputTypeCountAvaliacoesArgs
    atividades?: boolean | ResidenteCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * ResidenteCountOutputType without action
   */
  export type ResidenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidenteCountOutputType
     */
    select?: ResidenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResidenteCountOutputType without action
   */
  export type ResidenteCountOutputTypeCountFrequenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
  }

  /**
   * ResidenteCountOutputType without action
   */
  export type ResidenteCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * ResidenteCountOutputType without action
   */
  export type ResidenteCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Count Type SupervisorCountOutputType
   */

  export type SupervisorCountOutputType = {
    avaliacoes: number
    comentarios: number
  }

  export type SupervisorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | SupervisorCountOutputTypeCountAvaliacoesArgs
    comentarios?: boolean | SupervisorCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorCountOutputType
     */
    select?: SupervisorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Count Type AtividadeCountOutputType
   */

  export type AtividadeCountOutputType = {
    AtividadeLog: number
  }

  export type AtividadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AtividadeLog?: boolean | AtividadeCountOutputTypeCountAtividadeLogArgs
  }

  // Custom InputTypes
  /**
   * AtividadeCountOutputType without action
   */
  export type AtividadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeCountOutputType
     */
    select?: AtividadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtividadeCountOutputType without action
   */
  export type AtividadeCountOutputTypeCountAtividadeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeLogWhereInput
  }


  /**
   * Count Type CampoAvaliacaoCountOutputType
   */

  export type CampoAvaliacaoCountOutputType = {
    respostas: number
  }

  export type CampoAvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | CampoAvaliacaoCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * CampoAvaliacaoCountOutputType without action
   */
  export type CampoAvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacaoCountOutputType
     */
    select?: CampoAvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampoAvaliacaoCountOutputType without action
   */
  export type CampoAvaliacaoCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaAvaliacaoWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    respostas: number
    comentarios: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | AvaliacaoCountOutputTypeCountRespostasArgs
    comentarios?: boolean | AvaliacaoCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaAvaliacaoWhereInput
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Setor
   */

  export type AggregateSetor = {
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  export type SetorAvgAggregateOutputType = {
    id: number | null
  }

  export type SetorSumAggregateOutputType = {
    id: number | null
  }

  export type SetorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type SetorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type SetorCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type SetorAvgAggregateInputType = {
    id?: true
  }

  export type SetorSumAggregateInputType = {
    id?: true
  }

  export type SetorMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type SetorMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type SetorCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type SetorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setor to aggregate.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setors
    **/
    _count?: true | SetorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetorMaxAggregateInputType
  }

  export type GetSetorAggregateType<T extends SetorAggregateArgs> = {
        [P in keyof T & keyof AggregateSetor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetor[P]>
      : GetScalarType<T[P], AggregateSetor[P]>
  }




  export type SetorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetorWhereInput
    orderBy?: SetorOrderByWithAggregationInput | SetorOrderByWithAggregationInput[]
    by: SetorScalarFieldEnum[] | SetorScalarFieldEnum
    having?: SetorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetorCountAggregateInputType | true
    _avg?: SetorAvgAggregateInputType
    _sum?: SetorSumAggregateInputType
    _min?: SetorMinAggregateInputType
    _max?: SetorMaxAggregateInputType
  }

  export type SetorGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  type GetSetorGroupByPayload<T extends SetorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetorGroupByOutputType[P]>
            : GetScalarType<T[P], SetorGroupByOutputType[P]>
        }
      >
    >


  export type SetorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    residentes?: boolean | Setor$residentesArgs<ExtArgs>
    supervisores?: boolean | Setor$supervisoresArgs<ExtArgs>
    atividades?: boolean | Setor$atividadesArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setor"]>



  export type SetorSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type SetorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["setor"]>
  export type SetorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residentes?: boolean | Setor$residentesArgs<ExtArgs>
    supervisores?: boolean | Setor$supervisoresArgs<ExtArgs>
    atividades?: boolean | Setor$atividadesArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SetorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setor"
    objects: {
      residentes: Prisma.$ResidentePayload<ExtArgs>[]
      supervisores: Prisma.$SupervisorPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["setor"]>
    composites: {}
  }

  type SetorGetPayload<S extends boolean | null | undefined | SetorDefaultArgs> = $Result.GetResult<Prisma.$SetorPayload, S>

  type SetorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetorCountAggregateInputType | true
    }

  export interface SetorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setor'], meta: { name: 'Setor' } }
    /**
     * Find zero or one Setor that matches the filter.
     * @param {SetorFindUniqueArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetorFindUniqueArgs>(args: SelectSubset<T, SetorFindUniqueArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetorFindUniqueOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetorFindUniqueOrThrowArgs>(args: SelectSubset<T, SetorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetorFindFirstArgs>(args?: SelectSubset<T, SetorFindFirstArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetorFindFirstOrThrowArgs>(args?: SelectSubset<T, SetorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setors
     * const setors = await prisma.setor.findMany()
     * 
     * // Get first 10 Setors
     * const setors = await prisma.setor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setorWithIdOnly = await prisma.setor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetorFindManyArgs>(args?: SelectSubset<T, SetorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setor.
     * @param {SetorCreateArgs} args - Arguments to create a Setor.
     * @example
     * // Create one Setor
     * const Setor = await prisma.setor.create({
     *   data: {
     *     // ... data to create a Setor
     *   }
     * })
     * 
     */
    create<T extends SetorCreateArgs>(args: SelectSubset<T, SetorCreateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setors.
     * @param {SetorCreateManyArgs} args - Arguments to create many Setors.
     * @example
     * // Create many Setors
     * const setor = await prisma.setor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetorCreateManyArgs>(args?: SelectSubset<T, SetorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setor.
     * @param {SetorDeleteArgs} args - Arguments to delete one Setor.
     * @example
     * // Delete one Setor
     * const Setor = await prisma.setor.delete({
     *   where: {
     *     // ... filter to delete one Setor
     *   }
     * })
     * 
     */
    delete<T extends SetorDeleteArgs>(args: SelectSubset<T, SetorDeleteArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setor.
     * @param {SetorUpdateArgs} args - Arguments to update one Setor.
     * @example
     * // Update one Setor
     * const setor = await prisma.setor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetorUpdateArgs>(args: SelectSubset<T, SetorUpdateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setors.
     * @param {SetorDeleteManyArgs} args - Arguments to filter Setors to delete.
     * @example
     * // Delete a few Setors
     * const { count } = await prisma.setor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetorDeleteManyArgs>(args?: SelectSubset<T, SetorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setors
     * const setor = await prisma.setor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetorUpdateManyArgs>(args: SelectSubset<T, SetorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setor.
     * @param {SetorUpsertArgs} args - Arguments to update or create a Setor.
     * @example
     * // Update or create a Setor
     * const setor = await prisma.setor.upsert({
     *   create: {
     *     // ... data to create a Setor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setor we want to update
     *   }
     * })
     */
    upsert<T extends SetorUpsertArgs>(args: SelectSubset<T, SetorUpsertArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorCountArgs} args - Arguments to filter Setors to count.
     * @example
     * // Count the number of Setors
     * const count = await prisma.setor.count({
     *   where: {
     *     // ... the filter for the Setors we want to count
     *   }
     * })
    **/
    count<T extends SetorCountArgs>(
      args?: Subset<T, SetorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetorAggregateArgs>(args: Subset<T, SetorAggregateArgs>): Prisma.PrismaPromise<GetSetorAggregateType<T>>

    /**
     * Group by Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorGroupByArgs} args - Group by arguments.
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
      T extends SetorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetorGroupByArgs['orderBy'] }
        : { orderBy?: SetorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setor model
   */
  readonly fields: SetorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residentes<T extends Setor$residentesArgs<ExtArgs> = {}>(args?: Subset<T, Setor$residentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisores<T extends Setor$supervisoresArgs<ExtArgs> = {}>(args?: Subset<T, Setor$supervisoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Setor$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Setor$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Setor model
   */
  interface SetorFieldRefs {
    readonly id: FieldRef<"Setor", 'Int'>
    readonly nome: FieldRef<"Setor", 'String'>
    readonly descricao: FieldRef<"Setor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setor findUnique
   */
  export type SetorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findUniqueOrThrow
   */
  export type SetorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findFirst
   */
  export type SetorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findFirstOrThrow
   */
  export type SetorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findMany
   */
  export type SetorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setors to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor create
   */
  export type SetorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to create a Setor.
     */
    data: XOR<SetorCreateInput, SetorUncheckedCreateInput>
  }

  /**
   * Setor createMany
   */
  export type SetorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setors.
     */
    data: SetorCreateManyInput | SetorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setor update
   */
  export type SetorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to update a Setor.
     */
    data: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
    /**
     * Choose, which Setor to update.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor updateMany
   */
  export type SetorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setors.
     */
    data: XOR<SetorUpdateManyMutationInput, SetorUncheckedUpdateManyInput>
    /**
     * Filter which Setors to update
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to update.
     */
    limit?: number
  }

  /**
   * Setor upsert
   */
  export type SetorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The filter to search for the Setor to update in case it exists.
     */
    where: SetorWhereUniqueInput
    /**
     * In case the Setor found by the `where` argument doesn't exist, create a new Setor with this data.
     */
    create: XOR<SetorCreateInput, SetorUncheckedCreateInput>
    /**
     * In case the Setor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
  }

  /**
   * Setor delete
   */
  export type SetorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter which Setor to delete.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor deleteMany
   */
  export type SetorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setors to delete
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to delete.
     */
    limit?: number
  }

  /**
   * Setor.residentes
   */
  export type Setor$residentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    where?: ResidenteWhereInput
    orderBy?: ResidenteOrderByWithRelationInput | ResidenteOrderByWithRelationInput[]
    cursor?: ResidenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResidenteScalarFieldEnum | ResidenteScalarFieldEnum[]
  }

  /**
   * Setor.supervisores
   */
  export type Setor$supervisoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    where?: SupervisorWhereInput
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    cursor?: SupervisorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Setor.atividades
   */
  export type Setor$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Setor without action
   */
  export type SetorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo: $Enums.TipoUsuario | null
    ativo: boolean | null
    criado_em: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo: $Enums.TipoUsuario | null
    ativo: boolean | null
    criado_em: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    tipo: number
    ativo: number
    criado_em: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    ativo?: true
    criado_em?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    ativo?: true
    criado_em?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    ativo?: true
    criado_em?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo: boolean
    criado_em: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo?: boolean
    ativo?: boolean
    criado_em?: boolean
    residente?: boolean | Usuario$residenteArgs<ExtArgs>
    supervisor?: boolean | Usuario$supervisorArgs<ExtArgs>
    administrador?: boolean | Usuario$administradorArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    frequencias_registradas?: boolean | Usuario$frequencias_registradasArgs<ExtArgs>
    AtividadeLog?: boolean | Usuario$AtividadeLogArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo?: boolean
    ativo?: boolean
    criado_em?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "tipo" | "ativo" | "criado_em", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residente?: boolean | Usuario$residenteArgs<ExtArgs>
    supervisor?: boolean | Usuario$supervisorArgs<ExtArgs>
    administrador?: boolean | Usuario$administradorArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    frequencias_registradas?: boolean | Usuario$frequencias_registradasArgs<ExtArgs>
    AtividadeLog?: boolean | Usuario$AtividadeLogArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      residente: Prisma.$ResidentePayload<ExtArgs> | null
      supervisor: Prisma.$SupervisorPayload<ExtArgs> | null
      administrador: Prisma.$AdministradorPayload<ExtArgs> | null
      logs: Prisma.$LogAcessoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
      frequencias_registradas: Prisma.$FrequenciaPayload<ExtArgs>[]
      AtividadeLog: Prisma.$AtividadeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha_hash: string
      tipo: $Enums.TipoUsuario
      ativo: boolean
      criado_em: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residente<T extends Usuario$residenteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$residenteArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends Usuario$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$supervisorArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    administrador<T extends Usuario$administradorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$administradorArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends Usuario$logsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frequencias_registradas<T extends Usuario$frequencias_registradasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$frequencias_registradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AtividadeLog<T extends Usuario$AtividadeLogArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$AtividadeLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha_hash: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
    readonly criado_em: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.residente
   */
  export type Usuario$residenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    where?: ResidenteWhereInput
  }

  /**
   * Usuario.supervisor
   */
  export type Usuario$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    where?: SupervisorWhereInput
  }

  /**
   * Usuario.administrador
   */
  export type Usuario$administradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
  }

  /**
   * Usuario.logs
   */
  export type Usuario$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    where?: LogAcessoWhereInput
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    cursor?: LogAcessoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario.frequencias_registradas
   */
  export type Usuario$frequencias_registradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    cursor?: FrequenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Usuario.AtividadeLog
   */
  export type Usuario$AtividadeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    where?: AtividadeLogWhereInput
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    cursor?: AtividadeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeLogScalarFieldEnum | AtividadeLogScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Residente
   */

  export type AggregateResidente = {
    _count: ResidenteCountAggregateOutputType | null
    _avg: ResidenteAvgAggregateOutputType | null
    _sum: ResidenteSumAggregateOutputType | null
    _min: ResidenteMinAggregateOutputType | null
    _max: ResidenteMaxAggregateOutputType | null
  }

  export type ResidenteAvgAggregateOutputType = {
    id: number | null
    ano_residencia: number | null
    setor_id: number | null
  }

  export type ResidenteSumAggregateOutputType = {
    id: number | null
    ano_residencia: number | null
    setor_id: number | null
  }

  export type ResidenteMinAggregateOutputType = {
    id: number | null
    crm: string | null
    especialidade: string | null
    ano_residencia: number | null
    setor_id: number | null
  }

  export type ResidenteMaxAggregateOutputType = {
    id: number | null
    crm: string | null
    especialidade: string | null
    ano_residencia: number | null
    setor_id: number | null
  }

  export type ResidenteCountAggregateOutputType = {
    id: number
    crm: number
    especialidade: number
    ano_residencia: number
    setor_id: number
    _all: number
  }


  export type ResidenteAvgAggregateInputType = {
    id?: true
    ano_residencia?: true
    setor_id?: true
  }

  export type ResidenteSumAggregateInputType = {
    id?: true
    ano_residencia?: true
    setor_id?: true
  }

  export type ResidenteMinAggregateInputType = {
    id?: true
    crm?: true
    especialidade?: true
    ano_residencia?: true
    setor_id?: true
  }

  export type ResidenteMaxAggregateInputType = {
    id?: true
    crm?: true
    especialidade?: true
    ano_residencia?: true
    setor_id?: true
  }

  export type ResidenteCountAggregateInputType = {
    id?: true
    crm?: true
    especialidade?: true
    ano_residencia?: true
    setor_id?: true
    _all?: true
  }

  export type ResidenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residente to aggregate.
     */
    where?: ResidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residentes to fetch.
     */
    orderBy?: ResidenteOrderByWithRelationInput | ResidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Residentes
    **/
    _count?: true | ResidenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidenteMaxAggregateInputType
  }

  export type GetResidenteAggregateType<T extends ResidenteAggregateArgs> = {
        [P in keyof T & keyof AggregateResidente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidente[P]>
      : GetScalarType<T[P], AggregateResidente[P]>
  }




  export type ResidenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidenteWhereInput
    orderBy?: ResidenteOrderByWithAggregationInput | ResidenteOrderByWithAggregationInput[]
    by: ResidenteScalarFieldEnum[] | ResidenteScalarFieldEnum
    having?: ResidenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidenteCountAggregateInputType | true
    _avg?: ResidenteAvgAggregateInputType
    _sum?: ResidenteSumAggregateInputType
    _min?: ResidenteMinAggregateInputType
    _max?: ResidenteMaxAggregateInputType
  }

  export type ResidenteGroupByOutputType = {
    id: number
    crm: string | null
    especialidade: string | null
    ano_residencia: number | null
    setor_id: number | null
    _count: ResidenteCountAggregateOutputType | null
    _avg: ResidenteAvgAggregateOutputType | null
    _sum: ResidenteSumAggregateOutputType | null
    _min: ResidenteMinAggregateOutputType | null
    _max: ResidenteMaxAggregateOutputType | null
  }

  type GetResidenteGroupByPayload<T extends ResidenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidenteGroupByOutputType[P]>
            : GetScalarType<T[P], ResidenteGroupByOutputType[P]>
        }
      >
    >


  export type ResidenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crm?: boolean
    especialidade?: boolean
    ano_residencia?: boolean
    setor_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    setor?: boolean | Residente$setorArgs<ExtArgs>
    frequencias?: boolean | Residente$frequenciasArgs<ExtArgs>
    avaliacoes?: boolean | Residente$avaliacoesArgs<ExtArgs>
    atividades?: boolean | Residente$atividadesArgs<ExtArgs>
    _count?: boolean | ResidenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residente"]>



  export type ResidenteSelectScalar = {
    id?: boolean
    crm?: boolean
    especialidade?: boolean
    ano_residencia?: boolean
    setor_id?: boolean
  }

  export type ResidenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crm" | "especialidade" | "ano_residencia" | "setor_id", ExtArgs["result"]["residente"]>
  export type ResidenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    setor?: boolean | Residente$setorArgs<ExtArgs>
    frequencias?: boolean | Residente$frequenciasArgs<ExtArgs>
    avaliacoes?: boolean | Residente$avaliacoesArgs<ExtArgs>
    atividades?: boolean | Residente$atividadesArgs<ExtArgs>
    _count?: boolean | ResidenteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResidentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Residente"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      setor: Prisma.$SetorPayload<ExtArgs> | null
      frequencias: Prisma.$FrequenciaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      crm: string | null
      especialidade: string | null
      ano_residencia: number | null
      setor_id: number | null
    }, ExtArgs["result"]["residente"]>
    composites: {}
  }

  type ResidenteGetPayload<S extends boolean | null | undefined | ResidenteDefaultArgs> = $Result.GetResult<Prisma.$ResidentePayload, S>

  type ResidenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidenteCountAggregateInputType | true
    }

  export interface ResidenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Residente'], meta: { name: 'Residente' } }
    /**
     * Find zero or one Residente that matches the filter.
     * @param {ResidenteFindUniqueArgs} args - Arguments to find a Residente
     * @example
     * // Get one Residente
     * const residente = await prisma.residente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidenteFindUniqueArgs>(args: SelectSubset<T, ResidenteFindUniqueArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Residente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidenteFindUniqueOrThrowArgs} args - Arguments to find a Residente
     * @example
     * // Get one Residente
     * const residente = await prisma.residente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidenteFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Residente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteFindFirstArgs} args - Arguments to find a Residente
     * @example
     * // Get one Residente
     * const residente = await prisma.residente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidenteFindFirstArgs>(args?: SelectSubset<T, ResidenteFindFirstArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Residente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteFindFirstOrThrowArgs} args - Arguments to find a Residente
     * @example
     * // Get one Residente
     * const residente = await prisma.residente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidenteFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Residentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Residentes
     * const residentes = await prisma.residente.findMany()
     * 
     * // Get first 10 Residentes
     * const residentes = await prisma.residente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residenteWithIdOnly = await prisma.residente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidenteFindManyArgs>(args?: SelectSubset<T, ResidenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Residente.
     * @param {ResidenteCreateArgs} args - Arguments to create a Residente.
     * @example
     * // Create one Residente
     * const Residente = await prisma.residente.create({
     *   data: {
     *     // ... data to create a Residente
     *   }
     * })
     * 
     */
    create<T extends ResidenteCreateArgs>(args: SelectSubset<T, ResidenteCreateArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Residentes.
     * @param {ResidenteCreateManyArgs} args - Arguments to create many Residentes.
     * @example
     * // Create many Residentes
     * const residente = await prisma.residente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidenteCreateManyArgs>(args?: SelectSubset<T, ResidenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Residente.
     * @param {ResidenteDeleteArgs} args - Arguments to delete one Residente.
     * @example
     * // Delete one Residente
     * const Residente = await prisma.residente.delete({
     *   where: {
     *     // ... filter to delete one Residente
     *   }
     * })
     * 
     */
    delete<T extends ResidenteDeleteArgs>(args: SelectSubset<T, ResidenteDeleteArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Residente.
     * @param {ResidenteUpdateArgs} args - Arguments to update one Residente.
     * @example
     * // Update one Residente
     * const residente = await prisma.residente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidenteUpdateArgs>(args: SelectSubset<T, ResidenteUpdateArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Residentes.
     * @param {ResidenteDeleteManyArgs} args - Arguments to filter Residentes to delete.
     * @example
     * // Delete a few Residentes
     * const { count } = await prisma.residente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidenteDeleteManyArgs>(args?: SelectSubset<T, ResidenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Residentes
     * const residente = await prisma.residente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidenteUpdateManyArgs>(args: SelectSubset<T, ResidenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Residente.
     * @param {ResidenteUpsertArgs} args - Arguments to update or create a Residente.
     * @example
     * // Update or create a Residente
     * const residente = await prisma.residente.upsert({
     *   create: {
     *     // ... data to create a Residente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Residente we want to update
     *   }
     * })
     */
    upsert<T extends ResidenteUpsertArgs>(args: SelectSubset<T, ResidenteUpsertArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Residentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteCountArgs} args - Arguments to filter Residentes to count.
     * @example
     * // Count the number of Residentes
     * const count = await prisma.residente.count({
     *   where: {
     *     // ... the filter for the Residentes we want to count
     *   }
     * })
    **/
    count<T extends ResidenteCountArgs>(
      args?: Subset<T, ResidenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Residente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidenteAggregateArgs>(args: Subset<T, ResidenteAggregateArgs>): Prisma.PrismaPromise<GetResidenteAggregateType<T>>

    /**
     * Group by Residente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenteGroupByArgs} args - Group by arguments.
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
      T extends ResidenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidenteGroupByArgs['orderBy'] }
        : { orderBy?: ResidenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Residente model
   */
  readonly fields: ResidenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Residente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setor<T extends Residente$setorArgs<ExtArgs> = {}>(args?: Subset<T, Residente$setorArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    frequencias<T extends Residente$frequenciasArgs<ExtArgs> = {}>(args?: Subset<T, Residente$frequenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Residente$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Residente$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Residente$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Residente$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Residente model
   */
  interface ResidenteFieldRefs {
    readonly id: FieldRef<"Residente", 'Int'>
    readonly crm: FieldRef<"Residente", 'String'>
    readonly especialidade: FieldRef<"Residente", 'String'>
    readonly ano_residencia: FieldRef<"Residente", 'Int'>
    readonly setor_id: FieldRef<"Residente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Residente findUnique
   */
  export type ResidenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter, which Residente to fetch.
     */
    where: ResidenteWhereUniqueInput
  }

  /**
   * Residente findUniqueOrThrow
   */
  export type ResidenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter, which Residente to fetch.
     */
    where: ResidenteWhereUniqueInput
  }

  /**
   * Residente findFirst
   */
  export type ResidenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter, which Residente to fetch.
     */
    where?: ResidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residentes to fetch.
     */
    orderBy?: ResidenteOrderByWithRelationInput | ResidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residentes.
     */
    cursor?: ResidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residentes.
     */
    distinct?: ResidenteScalarFieldEnum | ResidenteScalarFieldEnum[]
  }

  /**
   * Residente findFirstOrThrow
   */
  export type ResidenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter, which Residente to fetch.
     */
    where?: ResidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residentes to fetch.
     */
    orderBy?: ResidenteOrderByWithRelationInput | ResidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residentes.
     */
    cursor?: ResidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residentes.
     */
    distinct?: ResidenteScalarFieldEnum | ResidenteScalarFieldEnum[]
  }

  /**
   * Residente findMany
   */
  export type ResidenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter, which Residentes to fetch.
     */
    where?: ResidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residentes to fetch.
     */
    orderBy?: ResidenteOrderByWithRelationInput | ResidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Residentes.
     */
    cursor?: ResidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residentes.
     */
    skip?: number
    distinct?: ResidenteScalarFieldEnum | ResidenteScalarFieldEnum[]
  }

  /**
   * Residente create
   */
  export type ResidenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Residente.
     */
    data: XOR<ResidenteCreateInput, ResidenteUncheckedCreateInput>
  }

  /**
   * Residente createMany
   */
  export type ResidenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Residentes.
     */
    data: ResidenteCreateManyInput | ResidenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Residente update
   */
  export type ResidenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Residente.
     */
    data: XOR<ResidenteUpdateInput, ResidenteUncheckedUpdateInput>
    /**
     * Choose, which Residente to update.
     */
    where: ResidenteWhereUniqueInput
  }

  /**
   * Residente updateMany
   */
  export type ResidenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Residentes.
     */
    data: XOR<ResidenteUpdateManyMutationInput, ResidenteUncheckedUpdateManyInput>
    /**
     * Filter which Residentes to update
     */
    where?: ResidenteWhereInput
    /**
     * Limit how many Residentes to update.
     */
    limit?: number
  }

  /**
   * Residente upsert
   */
  export type ResidenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Residente to update in case it exists.
     */
    where: ResidenteWhereUniqueInput
    /**
     * In case the Residente found by the `where` argument doesn't exist, create a new Residente with this data.
     */
    create: XOR<ResidenteCreateInput, ResidenteUncheckedCreateInput>
    /**
     * In case the Residente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidenteUpdateInput, ResidenteUncheckedUpdateInput>
  }

  /**
   * Residente delete
   */
  export type ResidenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
    /**
     * Filter which Residente to delete.
     */
    where: ResidenteWhereUniqueInput
  }

  /**
   * Residente deleteMany
   */
  export type ResidenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residentes to delete
     */
    where?: ResidenteWhereInput
    /**
     * Limit how many Residentes to delete.
     */
    limit?: number
  }

  /**
   * Residente.setor
   */
  export type Residente$setorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    where?: SetorWhereInput
  }

  /**
   * Residente.frequencias
   */
  export type Residente$frequenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    cursor?: FrequenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Residente.avaliacoes
   */
  export type Residente$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Residente.atividades
   */
  export type Residente$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Residente without action
   */
  export type ResidenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residente
     */
    select?: ResidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residente
     */
    omit?: ResidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenteInclude<ExtArgs> | null
  }


  /**
   * Model Supervisor
   */

  export type AggregateSupervisor = {
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  export type SupervisorAvgAggregateOutputType = {
    id: number | null
    setor_id: number | null
  }

  export type SupervisorSumAggregateOutputType = {
    id: number | null
    setor_id: number | null
  }

  export type SupervisorMinAggregateOutputType = {
    id: number | null
    crm: string | null
    setor_id: number | null
  }

  export type SupervisorMaxAggregateOutputType = {
    id: number | null
    crm: string | null
    setor_id: number | null
  }

  export type SupervisorCountAggregateOutputType = {
    id: number
    crm: number
    setor_id: number
    _all: number
  }


  export type SupervisorAvgAggregateInputType = {
    id?: true
    setor_id?: true
  }

  export type SupervisorSumAggregateInputType = {
    id?: true
    setor_id?: true
  }

  export type SupervisorMinAggregateInputType = {
    id?: true
    crm?: true
    setor_id?: true
  }

  export type SupervisorMaxAggregateInputType = {
    id?: true
    crm?: true
    setor_id?: true
  }

  export type SupervisorCountAggregateInputType = {
    id?: true
    crm?: true
    setor_id?: true
    _all?: true
  }

  export type SupervisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisor to aggregate.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supervisors
    **/
    _count?: true | SupervisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorMaxAggregateInputType
  }

  export type GetSupervisorAggregateType<T extends SupervisorAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisor[P]>
      : GetScalarType<T[P], AggregateSupervisor[P]>
  }




  export type SupervisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorWhereInput
    orderBy?: SupervisorOrderByWithAggregationInput | SupervisorOrderByWithAggregationInput[]
    by: SupervisorScalarFieldEnum[] | SupervisorScalarFieldEnum
    having?: SupervisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorCountAggregateInputType | true
    _avg?: SupervisorAvgAggregateInputType
    _sum?: SupervisorSumAggregateInputType
    _min?: SupervisorMinAggregateInputType
    _max?: SupervisorMaxAggregateInputType
  }

  export type SupervisorGroupByOutputType = {
    id: number
    crm: string | null
    setor_id: number | null
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  type GetSupervisorGroupByPayload<T extends SupervisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
        }
      >
    >


  export type SupervisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crm?: boolean
    setor_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    setor?: boolean | Supervisor$setorArgs<ExtArgs>
    avaliacoes?: boolean | Supervisor$avaliacoesArgs<ExtArgs>
    comentarios?: boolean | Supervisor$comentariosArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>



  export type SupervisorSelectScalar = {
    id?: boolean
    crm?: boolean
    setor_id?: boolean
  }

  export type SupervisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crm" | "setor_id", ExtArgs["result"]["supervisor"]>
  export type SupervisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    setor?: boolean | Supervisor$setorArgs<ExtArgs>
    avaliacoes?: boolean | Supervisor$avaliacoesArgs<ExtArgs>
    comentarios?: boolean | Supervisor$comentariosArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SupervisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supervisor"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      setor: Prisma.$SetorPayload<ExtArgs> | null
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      crm: string | null
      setor_id: number | null
    }, ExtArgs["result"]["supervisor"]>
    composites: {}
  }

  type SupervisorGetPayload<S extends boolean | null | undefined | SupervisorDefaultArgs> = $Result.GetResult<Prisma.$SupervisorPayload, S>

  type SupervisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupervisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisorCountAggregateInputType | true
    }

  export interface SupervisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supervisor'], meta: { name: 'Supervisor' } }
    /**
     * Find zero or one Supervisor that matches the filter.
     * @param {SupervisorFindUniqueArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisorFindUniqueArgs>(args: SelectSubset<T, SupervisorFindUniqueArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supervisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupervisorFindUniqueOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisorFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisorFindFirstArgs>(args?: SelectSubset<T, SupervisorFindFirstArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisorFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisors
     * const supervisors = await prisma.supervisor.findMany()
     * 
     * // Get first 10 Supervisors
     * const supervisors = await prisma.supervisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisorWithIdOnly = await prisma.supervisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisorFindManyArgs>(args?: SelectSubset<T, SupervisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supervisor.
     * @param {SupervisorCreateArgs} args - Arguments to create a Supervisor.
     * @example
     * // Create one Supervisor
     * const Supervisor = await prisma.supervisor.create({
     *   data: {
     *     // ... data to create a Supervisor
     *   }
     * })
     * 
     */
    create<T extends SupervisorCreateArgs>(args: SelectSubset<T, SupervisorCreateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supervisors.
     * @param {SupervisorCreateManyArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisorCreateManyArgs>(args?: SelectSubset<T, SupervisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supervisor.
     * @param {SupervisorDeleteArgs} args - Arguments to delete one Supervisor.
     * @example
     * // Delete one Supervisor
     * const Supervisor = await prisma.supervisor.delete({
     *   where: {
     *     // ... filter to delete one Supervisor
     *   }
     * })
     * 
     */
    delete<T extends SupervisorDeleteArgs>(args: SelectSubset<T, SupervisorDeleteArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supervisor.
     * @param {SupervisorUpdateArgs} args - Arguments to update one Supervisor.
     * @example
     * // Update one Supervisor
     * const supervisor = await prisma.supervisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisorUpdateArgs>(args: SelectSubset<T, SupervisorUpdateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supervisors.
     * @param {SupervisorDeleteManyArgs} args - Arguments to filter Supervisors to delete.
     * @example
     * // Delete a few Supervisors
     * const { count } = await prisma.supervisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisorDeleteManyArgs>(args?: SelectSubset<T, SupervisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisors
     * const supervisor = await prisma.supervisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisorUpdateManyArgs>(args: SelectSubset<T, SupervisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supervisor.
     * @param {SupervisorUpsertArgs} args - Arguments to update or create a Supervisor.
     * @example
     * // Update or create a Supervisor
     * const supervisor = await prisma.supervisor.upsert({
     *   create: {
     *     // ... data to create a Supervisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisor we want to update
     *   }
     * })
     */
    upsert<T extends SupervisorUpsertArgs>(args: SelectSubset<T, SupervisorUpsertArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorCountArgs} args - Arguments to filter Supervisors to count.
     * @example
     * // Count the number of Supervisors
     * const count = await prisma.supervisor.count({
     *   where: {
     *     // ... the filter for the Supervisors we want to count
     *   }
     * })
    **/
    count<T extends SupervisorCountArgs>(
      args?: Subset<T, SupervisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisorAggregateArgs>(args: Subset<T, SupervisorAggregateArgs>): Prisma.PrismaPromise<GetSupervisorAggregateType<T>>

    /**
     * Group by Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorGroupByArgs} args - Group by arguments.
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
      T extends SupervisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisorGroupByArgs['orderBy'] }
        : { orderBy?: SupervisorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupervisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supervisor model
   */
  readonly fields: SupervisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supervisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setor<T extends Supervisor$setorArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$setorArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    avaliacoes<T extends Supervisor$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Supervisor$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supervisor model
   */
  interface SupervisorFieldRefs {
    readonly id: FieldRef<"Supervisor", 'Int'>
    readonly crm: FieldRef<"Supervisor", 'String'>
    readonly setor_id: FieldRef<"Supervisor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Supervisor findUnique
   */
  export type SupervisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findUniqueOrThrow
   */
  export type SupervisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findFirst
   */
  export type SupervisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findFirstOrThrow
   */
  export type SupervisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findMany
   */
  export type SupervisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisors to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor create
   */
  export type SupervisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to create a Supervisor.
     */
    data: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
  }

  /**
   * Supervisor createMany
   */
  export type SupervisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supervisors.
     */
    data: SupervisorCreateManyInput | SupervisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supervisor update
   */
  export type SupervisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to update a Supervisor.
     */
    data: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
    /**
     * Choose, which Supervisor to update.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor updateMany
   */
  export type SupervisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supervisors.
     */
    data: XOR<SupervisorUpdateManyMutationInput, SupervisorUncheckedUpdateManyInput>
    /**
     * Filter which Supervisors to update
     */
    where?: SupervisorWhereInput
    /**
     * Limit how many Supervisors to update.
     */
    limit?: number
  }

  /**
   * Supervisor upsert
   */
  export type SupervisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The filter to search for the Supervisor to update in case it exists.
     */
    where: SupervisorWhereUniqueInput
    /**
     * In case the Supervisor found by the `where` argument doesn't exist, create a new Supervisor with this data.
     */
    create: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
    /**
     * In case the Supervisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
  }

  /**
   * Supervisor delete
   */
  export type SupervisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter which Supervisor to delete.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor deleteMany
   */
  export type SupervisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisors to delete
     */
    where?: SupervisorWhereInput
    /**
     * Limit how many Supervisors to delete.
     */
    limit?: number
  }

  /**
   * Supervisor.setor
   */
  export type Supervisor$setorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    where?: SetorWhereInput
  }

  /**
   * Supervisor.avaliacoes
   */
  export type Supervisor$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Supervisor.comentarios
   */
  export type Supervisor$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Supervisor without action
   */
  export type SupervisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: number | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: number | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id?: true
  }

  export type AdministradorSumAggregateInputType = {
    id?: true
  }

  export type AdministradorMinAggregateInputType = {
    id?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: number
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>



  export type AdministradorSelectScalar = {
    id?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Frequencia
   */

  export type AggregateFrequencia = {
    _count: FrequenciaCountAggregateOutputType | null
    _avg: FrequenciaAvgAggregateOutputType | null
    _sum: FrequenciaSumAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  export type FrequenciaAvgAggregateOutputType = {
    id: number | null
    residente_id: number | null
    registrado_por: number | null
  }

  export type FrequenciaSumAggregateOutputType = {
    id: number | null
    residente_id: number | null
    registrado_por: number | null
  }

  export type FrequenciaMinAggregateOutputType = {
    id: number | null
    residente_id: number | null
    data: Date | null
    presente: boolean | null
    horario_chegada: Date | null
    inicio_intervalo: Date | null
    fim_intervalo: Date | null
    horario_saida: Date | null
    observacoes: string | null
    registrado_por: number | null
  }

  export type FrequenciaMaxAggregateOutputType = {
    id: number | null
    residente_id: number | null
    data: Date | null
    presente: boolean | null
    horario_chegada: Date | null
    inicio_intervalo: Date | null
    fim_intervalo: Date | null
    horario_saida: Date | null
    observacoes: string | null
    registrado_por: number | null
  }

  export type FrequenciaCountAggregateOutputType = {
    id: number
    residente_id: number
    data: number
    presente: number
    horario_chegada: number
    inicio_intervalo: number
    fim_intervalo: number
    horario_saida: number
    observacoes: number
    registrado_por: number
    _all: number
  }


  export type FrequenciaAvgAggregateInputType = {
    id?: true
    residente_id?: true
    registrado_por?: true
  }

  export type FrequenciaSumAggregateInputType = {
    id?: true
    residente_id?: true
    registrado_por?: true
  }

  export type FrequenciaMinAggregateInputType = {
    id?: true
    residente_id?: true
    data?: true
    presente?: true
    horario_chegada?: true
    inicio_intervalo?: true
    fim_intervalo?: true
    horario_saida?: true
    observacoes?: true
    registrado_por?: true
  }

  export type FrequenciaMaxAggregateInputType = {
    id?: true
    residente_id?: true
    data?: true
    presente?: true
    horario_chegada?: true
    inicio_intervalo?: true
    fim_intervalo?: true
    horario_saida?: true
    observacoes?: true
    registrado_por?: true
  }

  export type FrequenciaCountAggregateInputType = {
    id?: true
    residente_id?: true
    data?: true
    presente?: true
    horario_chegada?: true
    inicio_intervalo?: true
    fim_intervalo?: true
    horario_saida?: true
    observacoes?: true
    registrado_por?: true
    _all?: true
  }

  export type FrequenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencia to aggregate.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frequencias
    **/
    _count?: true | FrequenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrequenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrequenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrequenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrequenciaMaxAggregateInputType
  }

  export type GetFrequenciaAggregateType<T extends FrequenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFrequencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrequencia[P]>
      : GetScalarType<T[P], AggregateFrequencia[P]>
  }




  export type FrequenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithAggregationInput | FrequenciaOrderByWithAggregationInput[]
    by: FrequenciaScalarFieldEnum[] | FrequenciaScalarFieldEnum
    having?: FrequenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrequenciaCountAggregateInputType | true
    _avg?: FrequenciaAvgAggregateInputType
    _sum?: FrequenciaSumAggregateInputType
    _min?: FrequenciaMinAggregateInputType
    _max?: FrequenciaMaxAggregateInputType
  }

  export type FrequenciaGroupByOutputType = {
    id: number
    residente_id: number
    data: Date
    presente: boolean
    horario_chegada: Date | null
    inicio_intervalo: Date | null
    fim_intervalo: Date | null
    horario_saida: Date | null
    observacoes: string | null
    registrado_por: number
    _count: FrequenciaCountAggregateOutputType | null
    _avg: FrequenciaAvgAggregateOutputType | null
    _sum: FrequenciaSumAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  type GetFrequenciaGroupByPayload<T extends FrequenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrequenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrequenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
            : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
        }
      >
    >


  export type FrequenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residente_id?: boolean
    data?: boolean
    presente?: boolean
    horario_chegada?: boolean
    inicio_intervalo?: boolean
    fim_intervalo?: boolean
    horario_saida?: boolean
    observacoes?: boolean
    registrado_por?: boolean
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    registradoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencia"]>



  export type FrequenciaSelectScalar = {
    id?: boolean
    residente_id?: boolean
    data?: boolean
    presente?: boolean
    horario_chegada?: boolean
    inicio_intervalo?: boolean
    fim_intervalo?: boolean
    horario_saida?: boolean
    observacoes?: boolean
    registrado_por?: boolean
  }

  export type FrequenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residente_id" | "data" | "presente" | "horario_chegada" | "inicio_intervalo" | "fim_intervalo" | "horario_saida" | "observacoes" | "registrado_por", ExtArgs["result"]["frequencia"]>
  export type FrequenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    registradoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FrequenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frequencia"
    objects: {
      residente: Prisma.$ResidentePayload<ExtArgs>
      registradoPor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residente_id: number
      data: Date
      presente: boolean
      horario_chegada: Date | null
      inicio_intervalo: Date | null
      fim_intervalo: Date | null
      horario_saida: Date | null
      observacoes: string | null
      registrado_por: number
    }, ExtArgs["result"]["frequencia"]>
    composites: {}
  }

  type FrequenciaGetPayload<S extends boolean | null | undefined | FrequenciaDefaultArgs> = $Result.GetResult<Prisma.$FrequenciaPayload, S>

  type FrequenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrequenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrequenciaCountAggregateInputType | true
    }

  export interface FrequenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frequencia'], meta: { name: 'Frequencia' } }
    /**
     * Find zero or one Frequencia that matches the filter.
     * @param {FrequenciaFindUniqueArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrequenciaFindUniqueArgs>(args: SelectSubset<T, FrequenciaFindUniqueArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frequencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrequenciaFindUniqueOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrequenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FrequenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrequenciaFindFirstArgs>(args?: SelectSubset<T, FrequenciaFindFirstArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrequenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FrequenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frequencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frequencias
     * const frequencias = await prisma.frequencia.findMany()
     * 
     * // Get first 10 Frequencias
     * const frequencias = await prisma.frequencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frequenciaWithIdOnly = await prisma.frequencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrequenciaFindManyArgs>(args?: SelectSubset<T, FrequenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frequencia.
     * @param {FrequenciaCreateArgs} args - Arguments to create a Frequencia.
     * @example
     * // Create one Frequencia
     * const Frequencia = await prisma.frequencia.create({
     *   data: {
     *     // ... data to create a Frequencia
     *   }
     * })
     * 
     */
    create<T extends FrequenciaCreateArgs>(args: SelectSubset<T, FrequenciaCreateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frequencias.
     * @param {FrequenciaCreateManyArgs} args - Arguments to create many Frequencias.
     * @example
     * // Create many Frequencias
     * const frequencia = await prisma.frequencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrequenciaCreateManyArgs>(args?: SelectSubset<T, FrequenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Frequencia.
     * @param {FrequenciaDeleteArgs} args - Arguments to delete one Frequencia.
     * @example
     * // Delete one Frequencia
     * const Frequencia = await prisma.frequencia.delete({
     *   where: {
     *     // ... filter to delete one Frequencia
     *   }
     * })
     * 
     */
    delete<T extends FrequenciaDeleteArgs>(args: SelectSubset<T, FrequenciaDeleteArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frequencia.
     * @param {FrequenciaUpdateArgs} args - Arguments to update one Frequencia.
     * @example
     * // Update one Frequencia
     * const frequencia = await prisma.frequencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrequenciaUpdateArgs>(args: SelectSubset<T, FrequenciaUpdateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frequencias.
     * @param {FrequenciaDeleteManyArgs} args - Arguments to filter Frequencias to delete.
     * @example
     * // Delete a few Frequencias
     * const { count } = await prisma.frequencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrequenciaDeleteManyArgs>(args?: SelectSubset<T, FrequenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frequencias
     * const frequencia = await prisma.frequencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrequenciaUpdateManyArgs>(args: SelectSubset<T, FrequenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Frequencia.
     * @param {FrequenciaUpsertArgs} args - Arguments to update or create a Frequencia.
     * @example
     * // Update or create a Frequencia
     * const frequencia = await prisma.frequencia.upsert({
     *   create: {
     *     // ... data to create a Frequencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frequencia we want to update
     *   }
     * })
     */
    upsert<T extends FrequenciaUpsertArgs>(args: SelectSubset<T, FrequenciaUpsertArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaCountArgs} args - Arguments to filter Frequencias to count.
     * @example
     * // Count the number of Frequencias
     * const count = await prisma.frequencia.count({
     *   where: {
     *     // ... the filter for the Frequencias we want to count
     *   }
     * })
    **/
    count<T extends FrequenciaCountArgs>(
      args?: Subset<T, FrequenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrequenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrequenciaAggregateArgs>(args: Subset<T, FrequenciaAggregateArgs>): Prisma.PrismaPromise<GetFrequenciaAggregateType<T>>

    /**
     * Group by Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaGroupByArgs} args - Group by arguments.
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
      T extends FrequenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrequenciaGroupByArgs['orderBy'] }
        : { orderBy?: FrequenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrequenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frequencia model
   */
  readonly fields: FrequenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frequencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrequenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residente<T extends ResidenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidenteDefaultArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registradoPor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Frequencia model
   */
  interface FrequenciaFieldRefs {
    readonly id: FieldRef<"Frequencia", 'Int'>
    readonly residente_id: FieldRef<"Frequencia", 'Int'>
    readonly data: FieldRef<"Frequencia", 'DateTime'>
    readonly presente: FieldRef<"Frequencia", 'Boolean'>
    readonly horario_chegada: FieldRef<"Frequencia", 'DateTime'>
    readonly inicio_intervalo: FieldRef<"Frequencia", 'DateTime'>
    readonly fim_intervalo: FieldRef<"Frequencia", 'DateTime'>
    readonly horario_saida: FieldRef<"Frequencia", 'DateTime'>
    readonly observacoes: FieldRef<"Frequencia", 'String'>
    readonly registrado_por: FieldRef<"Frequencia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Frequencia findUnique
   */
  export type FrequenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findUniqueOrThrow
   */
  export type FrequenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findFirst
   */
  export type FrequenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findFirstOrThrow
   */
  export type FrequenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findMany
   */
  export type FrequenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencias to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia create
   */
  export type FrequenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Frequencia.
     */
    data: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
  }

  /**
   * Frequencia createMany
   */
  export type FrequenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frequencias.
     */
    data: FrequenciaCreateManyInput | FrequenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frequencia update
   */
  export type FrequenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Frequencia.
     */
    data: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
    /**
     * Choose, which Frequencia to update.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia updateMany
   */
  export type FrequenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frequencias.
     */
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frequencias to update
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to update.
     */
    limit?: number
  }

  /**
   * Frequencia upsert
   */
  export type FrequenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Frequencia to update in case it exists.
     */
    where: FrequenciaWhereUniqueInput
    /**
     * In case the Frequencia found by the `where` argument doesn't exist, create a new Frequencia with this data.
     */
    create: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
    /**
     * In case the Frequencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
  }

  /**
   * Frequencia delete
   */
  export type FrequenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter which Frequencia to delete.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia deleteMany
   */
  export type FrequenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencias to delete
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to delete.
     */
    limit?: number
  }

  /**
   * Frequencia without action
   */
  export type FrequenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
  }


  /**
   * Model Atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeAvgAggregateOutputType = {
    id: number | null
    residente_id: number | null
    setor_id: number | null
  }

  export type AtividadeSumAggregateOutputType = {
    id: number | null
    residente_id: number | null
    setor_id: number | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: number | null
    residente_id: number | null
    setor_id: number | null
    descricao: string | null
    data_atividade: Date | null
    data_finalizacao: Date | null
    criado_em: Date | null
    finalizada: boolean | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: number | null
    residente_id: number | null
    setor_id: number | null
    descricao: string | null
    data_atividade: Date | null
    data_finalizacao: Date | null
    criado_em: Date | null
    finalizada: boolean | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    residente_id: number
    setor_id: number
    descricao: number
    data_atividade: number
    data_finalizacao: number
    criado_em: number
    finalizada: number
    _all: number
  }


  export type AtividadeAvgAggregateInputType = {
    id?: true
    residente_id?: true
    setor_id?: true
  }

  export type AtividadeSumAggregateInputType = {
    id?: true
    residente_id?: true
    setor_id?: true
  }

  export type AtividadeMinAggregateInputType = {
    id?: true
    residente_id?: true
    setor_id?: true
    descricao?: true
    data_atividade?: true
    data_finalizacao?: true
    criado_em?: true
    finalizada?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    residente_id?: true
    setor_id?: true
    descricao?: true
    data_atividade?: true
    data_finalizacao?: true
    criado_em?: true
    finalizada?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    residente_id?: true
    setor_id?: true
    descricao?: true
    data_atividade?: true
    data_finalizacao?: true
    criado_em?: true
    finalizada?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividade to aggregate.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type AtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithAggregationInput | AtividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: AtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _avg?: AtividadeAvgAggregateInputType
    _sum?: AtividadeSumAggregateInputType
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: number
    residente_id: number
    setor_id: number
    descricao: string
    data_atividade: Date
    data_finalizacao: Date | null
    criado_em: Date
    finalizada: boolean
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends AtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residente_id?: boolean
    setor_id?: boolean
    descricao?: boolean
    data_atividade?: boolean
    data_finalizacao?: boolean
    criado_em?: boolean
    finalizada?: boolean
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    AtividadeLog?: boolean | Atividade$AtividadeLogArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>



  export type AtividadeSelectScalar = {
    id?: boolean
    residente_id?: boolean
    setor_id?: boolean
    descricao?: boolean
    data_atividade?: boolean
    data_finalizacao?: boolean
    criado_em?: boolean
    finalizada?: boolean
  }

  export type AtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residente_id" | "setor_id" | "descricao" | "data_atividade" | "data_finalizacao" | "criado_em" | "finalizada", ExtArgs["result"]["atividade"]>
  export type AtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    AtividadeLog?: boolean | Atividade$AtividadeLogArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atividade"
    objects: {
      residente: Prisma.$ResidentePayload<ExtArgs>
      setor: Prisma.$SetorPayload<ExtArgs>
      AtividadeLog: Prisma.$AtividadeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residente_id: number
      setor_id: number
      descricao: string
      data_atividade: Date
      data_finalizacao: Date | null
      criado_em: Date
      finalizada: boolean
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type AtividadeGetPayload<S extends boolean | null | undefined | AtividadeDefaultArgs> = $Result.GetResult<Prisma.$AtividadePayload, S>

  type AtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface AtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atividade'], meta: { name: 'Atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {AtividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeFindUniqueArgs>(args: SelectSubset<T, AtividadeFindUniqueArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeFindFirstArgs>(args?: SelectSubset<T, AtividadeFindFirstArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeFindManyArgs>(args?: SelectSubset<T, AtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {AtividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends AtividadeCreateArgs>(args: SelectSubset<T, AtividadeCreateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {AtividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeCreateManyArgs>(args?: SelectSubset<T, AtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividade.
     * @param {AtividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends AtividadeDeleteArgs>(args: SelectSubset<T, AtividadeDeleteArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {AtividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeUpdateArgs>(args: SelectSubset<T, AtividadeUpdateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {AtividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeDeleteManyArgs>(args?: SelectSubset<T, AtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeUpdateManyArgs>(args: SelectSubset<T, AtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividade.
     * @param {AtividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeUpsertArgs>(args: SelectSubset<T, AtividadeUpsertArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends AtividadeCountArgs>(
      args?: Subset<T, AtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeGroupByArgs} args - Group by arguments.
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
      T extends AtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atividade model
   */
  readonly fields: AtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residente<T extends ResidenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidenteDefaultArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setor<T extends SetorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetorDefaultArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AtividadeLog<T extends Atividade$AtividadeLogArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$AtividadeLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Atividade model
   */
  interface AtividadeFieldRefs {
    readonly id: FieldRef<"Atividade", 'Int'>
    readonly residente_id: FieldRef<"Atividade", 'Int'>
    readonly setor_id: FieldRef<"Atividade", 'Int'>
    readonly descricao: FieldRef<"Atividade", 'String'>
    readonly data_atividade: FieldRef<"Atividade", 'DateTime'>
    readonly data_finalizacao: FieldRef<"Atividade", 'DateTime'>
    readonly criado_em: FieldRef<"Atividade", 'DateTime'>
    readonly finalizada: FieldRef<"Atividade", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Atividade findUnique
   */
  export type AtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findUniqueOrThrow
   */
  export type AtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findFirst
   */
  export type AtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findFirstOrThrow
   */
  export type AtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findMany
   */
  export type AtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividades to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade create
   */
  export type AtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atividade.
     */
    data: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
  }

  /**
   * Atividade createMany
   */
  export type AtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atividade update
   */
  export type AtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atividade.
     */
    data: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
    /**
     * Choose, which Atividade to update.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade updateMany
   */
  export type AtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
  }

  /**
   * Atividade upsert
   */
  export type AtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atividade to update in case it exists.
     */
    where: AtividadeWhereUniqueInput
    /**
     * In case the Atividade found by the `where` argument doesn't exist, create a new Atividade with this data.
     */
    create: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
    /**
     * In case the Atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
  }

  /**
   * Atividade delete
   */
  export type AtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter which Atividade to delete.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade deleteMany
   */
  export type AtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividades to delete
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to delete.
     */
    limit?: number
  }

  /**
   * Atividade.AtividadeLog
   */
  export type Atividade$AtividadeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    where?: AtividadeLogWhereInput
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    cursor?: AtividadeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeLogScalarFieldEnum | AtividadeLogScalarFieldEnum[]
  }

  /**
   * Atividade without action
   */
  export type AtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
  }


  /**
   * Model AtividadeLog
   */

  export type AggregateAtividadeLog = {
    _count: AtividadeLogCountAggregateOutputType | null
    _avg: AtividadeLogAvgAggregateOutputType | null
    _sum: AtividadeLogSumAggregateOutputType | null
    _min: AtividadeLogMinAggregateOutputType | null
    _max: AtividadeLogMaxAggregateOutputType | null
  }

  export type AtividadeLogAvgAggregateOutputType = {
    id: number | null
    atividade_id: number | null
    usuario_id: number | null
  }

  export type AtividadeLogSumAggregateOutputType = {
    id: number | null
    atividade_id: number | null
    usuario_id: number | null
  }

  export type AtividadeLogMinAggregateOutputType = {
    id: number | null
    atividade_id: number | null
    acao: string | null
    usuario_id: number | null
    timestamp: Date | null
  }

  export type AtividadeLogMaxAggregateOutputType = {
    id: number | null
    atividade_id: number | null
    acao: string | null
    usuario_id: number | null
    timestamp: Date | null
  }

  export type AtividadeLogCountAggregateOutputType = {
    id: number
    atividade_id: number
    acao: number
    dados_anteriores: number
    dados_novos: number
    usuario_id: number
    timestamp: number
    _all: number
  }


  export type AtividadeLogAvgAggregateInputType = {
    id?: true
    atividade_id?: true
    usuario_id?: true
  }

  export type AtividadeLogSumAggregateInputType = {
    id?: true
    atividade_id?: true
    usuario_id?: true
  }

  export type AtividadeLogMinAggregateInputType = {
    id?: true
    atividade_id?: true
    acao?: true
    usuario_id?: true
    timestamp?: true
  }

  export type AtividadeLogMaxAggregateInputType = {
    id?: true
    atividade_id?: true
    acao?: true
    usuario_id?: true
    timestamp?: true
  }

  export type AtividadeLogCountAggregateInputType = {
    id?: true
    atividade_id?: true
    acao?: true
    dados_anteriores?: true
    dados_novos?: true
    usuario_id?: true
    timestamp?: true
    _all?: true
  }

  export type AtividadeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeLog to aggregate.
     */
    where?: AtividadeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeLogs to fetch.
     */
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtividadeLogs
    **/
    _count?: true | AtividadeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeLogMaxAggregateInputType
  }

  export type GetAtividadeLogAggregateType<T extends AtividadeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadeLog[P]>
      : GetScalarType<T[P], AggregateAtividadeLog[P]>
  }




  export type AtividadeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeLogWhereInput
    orderBy?: AtividadeLogOrderByWithAggregationInput | AtividadeLogOrderByWithAggregationInput[]
    by: AtividadeLogScalarFieldEnum[] | AtividadeLogScalarFieldEnum
    having?: AtividadeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeLogCountAggregateInputType | true
    _avg?: AtividadeLogAvgAggregateInputType
    _sum?: AtividadeLogSumAggregateInputType
    _min?: AtividadeLogMinAggregateInputType
    _max?: AtividadeLogMaxAggregateInputType
  }

  export type AtividadeLogGroupByOutputType = {
    id: number
    atividade_id: number
    acao: string
    dados_anteriores: JsonValue | null
    dados_novos: JsonValue | null
    usuario_id: number
    timestamp: Date
    _count: AtividadeLogCountAggregateOutputType | null
    _avg: AtividadeLogAvgAggregateOutputType | null
    _sum: AtividadeLogSumAggregateOutputType | null
    _min: AtividadeLogMinAggregateOutputType | null
    _max: AtividadeLogMaxAggregateOutputType | null
  }

  type GetAtividadeLogGroupByPayload<T extends AtividadeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeLogGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeLogGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atividade_id?: boolean
    acao?: boolean
    dados_anteriores?: boolean
    dados_novos?: boolean
    usuario_id?: boolean
    timestamp?: boolean
    atividade?: boolean | AtividadeDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividadeLog"]>



  export type AtividadeLogSelectScalar = {
    id?: boolean
    atividade_id?: boolean
    acao?: boolean
    dados_anteriores?: boolean
    dados_novos?: boolean
    usuario_id?: boolean
    timestamp?: boolean
  }

  export type AtividadeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "atividade_id" | "acao" | "dados_anteriores" | "dados_novos" | "usuario_id" | "timestamp", ExtArgs["result"]["atividadeLog"]>
  export type AtividadeLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividade?: boolean | AtividadeDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AtividadeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtividadeLog"
    objects: {
      atividade: Prisma.$AtividadePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      atividade_id: number
      acao: string
      dados_anteriores: Prisma.JsonValue | null
      dados_novos: Prisma.JsonValue | null
      usuario_id: number
      timestamp: Date
    }, ExtArgs["result"]["atividadeLog"]>
    composites: {}
  }

  type AtividadeLogGetPayload<S extends boolean | null | undefined | AtividadeLogDefaultArgs> = $Result.GetResult<Prisma.$AtividadeLogPayload, S>

  type AtividadeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeLogCountAggregateInputType | true
    }

  export interface AtividadeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtividadeLog'], meta: { name: 'AtividadeLog' } }
    /**
     * Find zero or one AtividadeLog that matches the filter.
     * @param {AtividadeLogFindUniqueArgs} args - Arguments to find a AtividadeLog
     * @example
     * // Get one AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeLogFindUniqueArgs>(args: SelectSubset<T, AtividadeLogFindUniqueArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtividadeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeLogFindUniqueOrThrowArgs} args - Arguments to find a AtividadeLog
     * @example
     * // Get one AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtividadeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogFindFirstArgs} args - Arguments to find a AtividadeLog
     * @example
     * // Get one AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeLogFindFirstArgs>(args?: SelectSubset<T, AtividadeLogFindFirstArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtividadeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogFindFirstOrThrowArgs} args - Arguments to find a AtividadeLog
     * @example
     * // Get one AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtividadeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtividadeLogs
     * const atividadeLogs = await prisma.atividadeLog.findMany()
     * 
     * // Get first 10 AtividadeLogs
     * const atividadeLogs = await prisma.atividadeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeLogWithIdOnly = await prisma.atividadeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeLogFindManyArgs>(args?: SelectSubset<T, AtividadeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtividadeLog.
     * @param {AtividadeLogCreateArgs} args - Arguments to create a AtividadeLog.
     * @example
     * // Create one AtividadeLog
     * const AtividadeLog = await prisma.atividadeLog.create({
     *   data: {
     *     // ... data to create a AtividadeLog
     *   }
     * })
     * 
     */
    create<T extends AtividadeLogCreateArgs>(args: SelectSubset<T, AtividadeLogCreateArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtividadeLogs.
     * @param {AtividadeLogCreateManyArgs} args - Arguments to create many AtividadeLogs.
     * @example
     * // Create many AtividadeLogs
     * const atividadeLog = await prisma.atividadeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeLogCreateManyArgs>(args?: SelectSubset<T, AtividadeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AtividadeLog.
     * @param {AtividadeLogDeleteArgs} args - Arguments to delete one AtividadeLog.
     * @example
     * // Delete one AtividadeLog
     * const AtividadeLog = await prisma.atividadeLog.delete({
     *   where: {
     *     // ... filter to delete one AtividadeLog
     *   }
     * })
     * 
     */
    delete<T extends AtividadeLogDeleteArgs>(args: SelectSubset<T, AtividadeLogDeleteArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtividadeLog.
     * @param {AtividadeLogUpdateArgs} args - Arguments to update one AtividadeLog.
     * @example
     * // Update one AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeLogUpdateArgs>(args: SelectSubset<T, AtividadeLogUpdateArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtividadeLogs.
     * @param {AtividadeLogDeleteManyArgs} args - Arguments to filter AtividadeLogs to delete.
     * @example
     * // Delete a few AtividadeLogs
     * const { count } = await prisma.atividadeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeLogDeleteManyArgs>(args?: SelectSubset<T, AtividadeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtividadeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtividadeLogs
     * const atividadeLog = await prisma.atividadeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeLogUpdateManyArgs>(args: SelectSubset<T, AtividadeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtividadeLog.
     * @param {AtividadeLogUpsertArgs} args - Arguments to update or create a AtividadeLog.
     * @example
     * // Update or create a AtividadeLog
     * const atividadeLog = await prisma.atividadeLog.upsert({
     *   create: {
     *     // ... data to create a AtividadeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtividadeLog we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeLogUpsertArgs>(args: SelectSubset<T, AtividadeLogUpsertArgs<ExtArgs>>): Prisma__AtividadeLogClient<$Result.GetResult<Prisma.$AtividadeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtividadeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogCountArgs} args - Arguments to filter AtividadeLogs to count.
     * @example
     * // Count the number of AtividadeLogs
     * const count = await prisma.atividadeLog.count({
     *   where: {
     *     // ... the filter for the AtividadeLogs we want to count
     *   }
     * })
    **/
    count<T extends AtividadeLogCountArgs>(
      args?: Subset<T, AtividadeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtividadeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeLogAggregateArgs>(args: Subset<T, AtividadeLogAggregateArgs>): Prisma.PrismaPromise<GetAtividadeLogAggregateType<T>>

    /**
     * Group by AtividadeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeLogGroupByArgs} args - Group by arguments.
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
      T extends AtividadeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeLogGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtividadeLog model
   */
  readonly fields: AtividadeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtividadeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atividade<T extends AtividadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtividadeDefaultArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AtividadeLog model
   */
  interface AtividadeLogFieldRefs {
    readonly id: FieldRef<"AtividadeLog", 'Int'>
    readonly atividade_id: FieldRef<"AtividadeLog", 'Int'>
    readonly acao: FieldRef<"AtividadeLog", 'String'>
    readonly dados_anteriores: FieldRef<"AtividadeLog", 'Json'>
    readonly dados_novos: FieldRef<"AtividadeLog", 'Json'>
    readonly usuario_id: FieldRef<"AtividadeLog", 'Int'>
    readonly timestamp: FieldRef<"AtividadeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtividadeLog findUnique
   */
  export type AtividadeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeLog to fetch.
     */
    where: AtividadeLogWhereUniqueInput
  }

  /**
   * AtividadeLog findUniqueOrThrow
   */
  export type AtividadeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeLog to fetch.
     */
    where: AtividadeLogWhereUniqueInput
  }

  /**
   * AtividadeLog findFirst
   */
  export type AtividadeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeLog to fetch.
     */
    where?: AtividadeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeLogs to fetch.
     */
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeLogs.
     */
    cursor?: AtividadeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeLogs.
     */
    distinct?: AtividadeLogScalarFieldEnum | AtividadeLogScalarFieldEnum[]
  }

  /**
   * AtividadeLog findFirstOrThrow
   */
  export type AtividadeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeLog to fetch.
     */
    where?: AtividadeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeLogs to fetch.
     */
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeLogs.
     */
    cursor?: AtividadeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeLogs.
     */
    distinct?: AtividadeLogScalarFieldEnum | AtividadeLogScalarFieldEnum[]
  }

  /**
   * AtividadeLog findMany
   */
  export type AtividadeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeLogs to fetch.
     */
    where?: AtividadeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeLogs to fetch.
     */
    orderBy?: AtividadeLogOrderByWithRelationInput | AtividadeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtividadeLogs.
     */
    cursor?: AtividadeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeLogs.
     */
    skip?: number
    distinct?: AtividadeLogScalarFieldEnum | AtividadeLogScalarFieldEnum[]
  }

  /**
   * AtividadeLog create
   */
  export type AtividadeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AtividadeLog.
     */
    data: XOR<AtividadeLogCreateInput, AtividadeLogUncheckedCreateInput>
  }

  /**
   * AtividadeLog createMany
   */
  export type AtividadeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtividadeLogs.
     */
    data: AtividadeLogCreateManyInput | AtividadeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeLog update
   */
  export type AtividadeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AtividadeLog.
     */
    data: XOR<AtividadeLogUpdateInput, AtividadeLogUncheckedUpdateInput>
    /**
     * Choose, which AtividadeLog to update.
     */
    where: AtividadeLogWhereUniqueInput
  }

  /**
   * AtividadeLog updateMany
   */
  export type AtividadeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtividadeLogs.
     */
    data: XOR<AtividadeLogUpdateManyMutationInput, AtividadeLogUncheckedUpdateManyInput>
    /**
     * Filter which AtividadeLogs to update
     */
    where?: AtividadeLogWhereInput
    /**
     * Limit how many AtividadeLogs to update.
     */
    limit?: number
  }

  /**
   * AtividadeLog upsert
   */
  export type AtividadeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AtividadeLog to update in case it exists.
     */
    where: AtividadeLogWhereUniqueInput
    /**
     * In case the AtividadeLog found by the `where` argument doesn't exist, create a new AtividadeLog with this data.
     */
    create: XOR<AtividadeLogCreateInput, AtividadeLogUncheckedCreateInput>
    /**
     * In case the AtividadeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeLogUpdateInput, AtividadeLogUncheckedUpdateInput>
  }

  /**
   * AtividadeLog delete
   */
  export type AtividadeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
    /**
     * Filter which AtividadeLog to delete.
     */
    where: AtividadeLogWhereUniqueInput
  }

  /**
   * AtividadeLog deleteMany
   */
  export type AtividadeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeLogs to delete
     */
    where?: AtividadeLogWhereInput
    /**
     * Limit how many AtividadeLogs to delete.
     */
    limit?: number
  }

  /**
   * AtividadeLog without action
   */
  export type AtividadeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeLog
     */
    select?: AtividadeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeLog
     */
    omit?: AtividadeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeLogInclude<ExtArgs> | null
  }


  /**
   * Model CampoAvaliacao
   */

  export type AggregateCampoAvaliacao = {
    _count: CampoAvaliacaoCountAggregateOutputType | null
    _avg: CampoAvaliacaoAvgAggregateOutputType | null
    _sum: CampoAvaliacaoSumAggregateOutputType | null
    _min: CampoAvaliacaoMinAggregateOutputType | null
    _max: CampoAvaliacaoMaxAggregateOutputType | null
  }

  export type CampoAvaliacaoAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type CampoAvaliacaoSumAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type CampoAvaliacaoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    obrigatorio: boolean | null
    tipo: $Enums.TipoCampo | null
    ordem: number | null
  }

  export type CampoAvaliacaoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    obrigatorio: boolean | null
    tipo: $Enums.TipoCampo | null
    ordem: number | null
  }

  export type CampoAvaliacaoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    obrigatorio: number
    tipo: number
    ordem: number
    _all: number
  }


  export type CampoAvaliacaoAvgAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type CampoAvaliacaoSumAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type CampoAvaliacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    obrigatorio?: true
    tipo?: true
    ordem?: true
  }

  export type CampoAvaliacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    obrigatorio?: true
    tipo?: true
    ordem?: true
  }

  export type CampoAvaliacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    obrigatorio?: true
    tipo?: true
    ordem?: true
    _all?: true
  }

  export type CampoAvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampoAvaliacao to aggregate.
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampoAvaliacaos to fetch.
     */
    orderBy?: CampoAvaliacaoOrderByWithRelationInput | CampoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampoAvaliacaos
    **/
    _count?: true | CampoAvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampoAvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampoAvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampoAvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampoAvaliacaoMaxAggregateInputType
  }

  export type GetCampoAvaliacaoAggregateType<T extends CampoAvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCampoAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampoAvaliacao[P]>
      : GetScalarType<T[P], AggregateCampoAvaliacao[P]>
  }




  export type CampoAvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampoAvaliacaoWhereInput
    orderBy?: CampoAvaliacaoOrderByWithAggregationInput | CampoAvaliacaoOrderByWithAggregationInput[]
    by: CampoAvaliacaoScalarFieldEnum[] | CampoAvaliacaoScalarFieldEnum
    having?: CampoAvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampoAvaliacaoCountAggregateInputType | true
    _avg?: CampoAvaliacaoAvgAggregateInputType
    _sum?: CampoAvaliacaoSumAggregateInputType
    _min?: CampoAvaliacaoMinAggregateInputType
    _max?: CampoAvaliacaoMaxAggregateInputType
  }

  export type CampoAvaliacaoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    obrigatorio: boolean
    tipo: $Enums.TipoCampo
    ordem: number | null
    _count: CampoAvaliacaoCountAggregateOutputType | null
    _avg: CampoAvaliacaoAvgAggregateOutputType | null
    _sum: CampoAvaliacaoSumAggregateOutputType | null
    _min: CampoAvaliacaoMinAggregateOutputType | null
    _max: CampoAvaliacaoMaxAggregateOutputType | null
  }

  type GetCampoAvaliacaoGroupByPayload<T extends CampoAvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampoAvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampoAvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampoAvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], CampoAvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type CampoAvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    obrigatorio?: boolean
    tipo?: boolean
    ordem?: boolean
    respostas?: boolean | CampoAvaliacao$respostasArgs<ExtArgs>
    _count?: boolean | CampoAvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campoAvaliacao"]>



  export type CampoAvaliacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    obrigatorio?: boolean
    tipo?: boolean
    ordem?: boolean
  }

  export type CampoAvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "obrigatorio" | "tipo" | "ordem", ExtArgs["result"]["campoAvaliacao"]>
  export type CampoAvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | CampoAvaliacao$respostasArgs<ExtArgs>
    _count?: boolean | CampoAvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CampoAvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampoAvaliacao"
    objects: {
      respostas: Prisma.$RespostaAvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      obrigatorio: boolean
      tipo: $Enums.TipoCampo
      ordem: number | null
    }, ExtArgs["result"]["campoAvaliacao"]>
    composites: {}
  }

  type CampoAvaliacaoGetPayload<S extends boolean | null | undefined | CampoAvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$CampoAvaliacaoPayload, S>

  type CampoAvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampoAvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampoAvaliacaoCountAggregateInputType | true
    }

  export interface CampoAvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampoAvaliacao'], meta: { name: 'CampoAvaliacao' } }
    /**
     * Find zero or one CampoAvaliacao that matches the filter.
     * @param {CampoAvaliacaoFindUniqueArgs} args - Arguments to find a CampoAvaliacao
     * @example
     * // Get one CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampoAvaliacaoFindUniqueArgs>(args: SelectSubset<T, CampoAvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampoAvaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampoAvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a CampoAvaliacao
     * @example
     * // Get one CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampoAvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CampoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampoAvaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoFindFirstArgs} args - Arguments to find a CampoAvaliacao
     * @example
     * // Get one CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampoAvaliacaoFindFirstArgs>(args?: SelectSubset<T, CampoAvaliacaoFindFirstArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampoAvaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoFindFirstOrThrowArgs} args - Arguments to find a CampoAvaliacao
     * @example
     * // Get one CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampoAvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CampoAvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampoAvaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampoAvaliacaos
     * const campoAvaliacaos = await prisma.campoAvaliacao.findMany()
     * 
     * // Get first 10 CampoAvaliacaos
     * const campoAvaliacaos = await prisma.campoAvaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campoAvaliacaoWithIdOnly = await prisma.campoAvaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampoAvaliacaoFindManyArgs>(args?: SelectSubset<T, CampoAvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampoAvaliacao.
     * @param {CampoAvaliacaoCreateArgs} args - Arguments to create a CampoAvaliacao.
     * @example
     * // Create one CampoAvaliacao
     * const CampoAvaliacao = await prisma.campoAvaliacao.create({
     *   data: {
     *     // ... data to create a CampoAvaliacao
     *   }
     * })
     * 
     */
    create<T extends CampoAvaliacaoCreateArgs>(args: SelectSubset<T, CampoAvaliacaoCreateArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampoAvaliacaos.
     * @param {CampoAvaliacaoCreateManyArgs} args - Arguments to create many CampoAvaliacaos.
     * @example
     * // Create many CampoAvaliacaos
     * const campoAvaliacao = await prisma.campoAvaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampoAvaliacaoCreateManyArgs>(args?: SelectSubset<T, CampoAvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CampoAvaliacao.
     * @param {CampoAvaliacaoDeleteArgs} args - Arguments to delete one CampoAvaliacao.
     * @example
     * // Delete one CampoAvaliacao
     * const CampoAvaliacao = await prisma.campoAvaliacao.delete({
     *   where: {
     *     // ... filter to delete one CampoAvaliacao
     *   }
     * })
     * 
     */
    delete<T extends CampoAvaliacaoDeleteArgs>(args: SelectSubset<T, CampoAvaliacaoDeleteArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampoAvaliacao.
     * @param {CampoAvaliacaoUpdateArgs} args - Arguments to update one CampoAvaliacao.
     * @example
     * // Update one CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampoAvaliacaoUpdateArgs>(args: SelectSubset<T, CampoAvaliacaoUpdateArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampoAvaliacaos.
     * @param {CampoAvaliacaoDeleteManyArgs} args - Arguments to filter CampoAvaliacaos to delete.
     * @example
     * // Delete a few CampoAvaliacaos
     * const { count } = await prisma.campoAvaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampoAvaliacaoDeleteManyArgs>(args?: SelectSubset<T, CampoAvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampoAvaliacaos
     * const campoAvaliacao = await prisma.campoAvaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampoAvaliacaoUpdateManyArgs>(args: SelectSubset<T, CampoAvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CampoAvaliacao.
     * @param {CampoAvaliacaoUpsertArgs} args - Arguments to update or create a CampoAvaliacao.
     * @example
     * // Update or create a CampoAvaliacao
     * const campoAvaliacao = await prisma.campoAvaliacao.upsert({
     *   create: {
     *     // ... data to create a CampoAvaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampoAvaliacao we want to update
     *   }
     * })
     */
    upsert<T extends CampoAvaliacaoUpsertArgs>(args: SelectSubset<T, CampoAvaliacaoUpsertArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoCountArgs} args - Arguments to filter CampoAvaliacaos to count.
     * @example
     * // Count the number of CampoAvaliacaos
     * const count = await prisma.campoAvaliacao.count({
     *   where: {
     *     // ... the filter for the CampoAvaliacaos we want to count
     *   }
     * })
    **/
    count<T extends CampoAvaliacaoCountArgs>(
      args?: Subset<T, CampoAvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampoAvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampoAvaliacaoAggregateArgs>(args: Subset<T, CampoAvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetCampoAvaliacaoAggregateType<T>>

    /**
     * Group by CampoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends CampoAvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampoAvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: CampoAvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampoAvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampoAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampoAvaliacao model
   */
  readonly fields: CampoAvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampoAvaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampoAvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas<T extends CampoAvaliacao$respostasArgs<ExtArgs> = {}>(args?: Subset<T, CampoAvaliacao$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampoAvaliacao model
   */
  interface CampoAvaliacaoFieldRefs {
    readonly id: FieldRef<"CampoAvaliacao", 'Int'>
    readonly titulo: FieldRef<"CampoAvaliacao", 'String'>
    readonly descricao: FieldRef<"CampoAvaliacao", 'String'>
    readonly obrigatorio: FieldRef<"CampoAvaliacao", 'Boolean'>
    readonly tipo: FieldRef<"CampoAvaliacao", 'TipoCampo'>
    readonly ordem: FieldRef<"CampoAvaliacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CampoAvaliacao findUnique
   */
  export type CampoAvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which CampoAvaliacao to fetch.
     */
    where: CampoAvaliacaoWhereUniqueInput
  }

  /**
   * CampoAvaliacao findUniqueOrThrow
   */
  export type CampoAvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which CampoAvaliacao to fetch.
     */
    where: CampoAvaliacaoWhereUniqueInput
  }

  /**
   * CampoAvaliacao findFirst
   */
  export type CampoAvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which CampoAvaliacao to fetch.
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampoAvaliacaos to fetch.
     */
    orderBy?: CampoAvaliacaoOrderByWithRelationInput | CampoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampoAvaliacaos.
     */
    cursor?: CampoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampoAvaliacaos.
     */
    distinct?: CampoAvaliacaoScalarFieldEnum | CampoAvaliacaoScalarFieldEnum[]
  }

  /**
   * CampoAvaliacao findFirstOrThrow
   */
  export type CampoAvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which CampoAvaliacao to fetch.
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampoAvaliacaos to fetch.
     */
    orderBy?: CampoAvaliacaoOrderByWithRelationInput | CampoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampoAvaliacaos.
     */
    cursor?: CampoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampoAvaliacaos.
     */
    distinct?: CampoAvaliacaoScalarFieldEnum | CampoAvaliacaoScalarFieldEnum[]
  }

  /**
   * CampoAvaliacao findMany
   */
  export type CampoAvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which CampoAvaliacaos to fetch.
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampoAvaliacaos to fetch.
     */
    orderBy?: CampoAvaliacaoOrderByWithRelationInput | CampoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampoAvaliacaos.
     */
    cursor?: CampoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampoAvaliacaos.
     */
    skip?: number
    distinct?: CampoAvaliacaoScalarFieldEnum | CampoAvaliacaoScalarFieldEnum[]
  }

  /**
   * CampoAvaliacao create
   */
  export type CampoAvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a CampoAvaliacao.
     */
    data: XOR<CampoAvaliacaoCreateInput, CampoAvaliacaoUncheckedCreateInput>
  }

  /**
   * CampoAvaliacao createMany
   */
  export type CampoAvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampoAvaliacaos.
     */
    data: CampoAvaliacaoCreateManyInput | CampoAvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampoAvaliacao update
   */
  export type CampoAvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a CampoAvaliacao.
     */
    data: XOR<CampoAvaliacaoUpdateInput, CampoAvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which CampoAvaliacao to update.
     */
    where: CampoAvaliacaoWhereUniqueInput
  }

  /**
   * CampoAvaliacao updateMany
   */
  export type CampoAvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampoAvaliacaos.
     */
    data: XOR<CampoAvaliacaoUpdateManyMutationInput, CampoAvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which CampoAvaliacaos to update
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * Limit how many CampoAvaliacaos to update.
     */
    limit?: number
  }

  /**
   * CampoAvaliacao upsert
   */
  export type CampoAvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the CampoAvaliacao to update in case it exists.
     */
    where: CampoAvaliacaoWhereUniqueInput
    /**
     * In case the CampoAvaliacao found by the `where` argument doesn't exist, create a new CampoAvaliacao with this data.
     */
    create: XOR<CampoAvaliacaoCreateInput, CampoAvaliacaoUncheckedCreateInput>
    /**
     * In case the CampoAvaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampoAvaliacaoUpdateInput, CampoAvaliacaoUncheckedUpdateInput>
  }

  /**
   * CampoAvaliacao delete
   */
  export type CampoAvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which CampoAvaliacao to delete.
     */
    where: CampoAvaliacaoWhereUniqueInput
  }

  /**
   * CampoAvaliacao deleteMany
   */
  export type CampoAvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampoAvaliacaos to delete
     */
    where?: CampoAvaliacaoWhereInput
    /**
     * Limit how many CampoAvaliacaos to delete.
     */
    limit?: number
  }

  /**
   * CampoAvaliacao.respostas
   */
  export type CampoAvaliacao$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    where?: RespostaAvaliacaoWhereInput
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    cursor?: RespostaAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostaAvaliacaoScalarFieldEnum | RespostaAvaliacaoScalarFieldEnum[]
  }

  /**
   * CampoAvaliacao without action
   */
  export type CampoAvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoAvaliacao
     */
    select?: CampoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampoAvaliacao
     */
    omit?: CampoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoAvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    residente_id: number | null
    supervisor_id: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    residente_id: number | null
    supervisor_id: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    residente_id: number | null
    supervisor_id: number | null
    data_avaliacao: Date | null
    periodo_inicio: Date | null
    periodo_fim: Date | null
    criado_em: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    residente_id: number | null
    supervisor_id: number | null
    data_avaliacao: Date | null
    periodo_inicio: Date | null
    periodo_fim: Date | null
    criado_em: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: number
    periodo_inicio: number
    periodo_fim: number
    criado_em: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    residente_id?: true
    supervisor_id?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    residente_id?: true
    supervisor_id?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    residente_id?: true
    supervisor_id?: true
    data_avaliacao?: true
    periodo_inicio?: true
    periodo_fim?: true
    criado_em?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    residente_id?: true
    supervisor_id?: true
    data_avaliacao?: true
    periodo_inicio?: true
    periodo_fim?: true
    criado_em?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    residente_id?: true
    supervisor_id?: true
    data_avaliacao?: true
    periodo_inicio?: true
    periodo_fim?: true
    criado_em?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: Date
    periodo_inicio: Date | null
    periodo_fim: Date | null
    criado_em: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residente_id?: boolean
    supervisor_id?: boolean
    data_avaliacao?: boolean
    periodo_inicio?: boolean
    periodo_fim?: boolean
    criado_em?: boolean
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    respostas?: boolean | Avaliacao$respostasArgs<ExtArgs>
    comentarios?: boolean | Avaliacao$comentariosArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type AvaliacaoSelectScalar = {
    id?: boolean
    residente_id?: boolean
    supervisor_id?: boolean
    data_avaliacao?: boolean
    periodo_inicio?: boolean
    periodo_fim?: boolean
    criado_em?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residente_id" | "supervisor_id" | "data_avaliacao" | "periodo_inicio" | "periodo_fim" | "criado_em", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residente?: boolean | ResidenteDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    respostas?: boolean | Avaliacao$respostasArgs<ExtArgs>
    comentarios?: boolean | Avaliacao$comentariosArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      residente: Prisma.$ResidentePayload<ExtArgs>
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
      respostas: Prisma.$RespostaAvaliacaoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residente_id: number
      supervisor_id: number
      data_avaliacao: Date
      periodo_inicio: Date | null
      periodo_fim: Date | null
      criado_em: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residente<T extends ResidenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidenteDefaultArgs<ExtArgs>>): Prisma__ResidenteClient<$Result.GetResult<Prisma.$ResidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostas<T extends Avaliacao$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Avaliacao$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly residente_id: FieldRef<"Avaliacao", 'Int'>
    readonly supervisor_id: FieldRef<"Avaliacao", 'Int'>
    readonly data_avaliacao: FieldRef<"Avaliacao", 'DateTime'>
    readonly periodo_inicio: FieldRef<"Avaliacao", 'DateTime'>
    readonly periodo_fim: FieldRef<"Avaliacao", 'DateTime'>
    readonly criado_em: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.respostas
   */
  export type Avaliacao$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    where?: RespostaAvaliacaoWhereInput
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    cursor?: RespostaAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostaAvaliacaoScalarFieldEnum | RespostaAvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao.comentarios
   */
  export type Avaliacao$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model RespostaAvaliacao
   */

  export type AggregateRespostaAvaliacao = {
    _count: RespostaAvaliacaoCountAggregateOutputType | null
    _avg: RespostaAvaliacaoAvgAggregateOutputType | null
    _sum: RespostaAvaliacaoSumAggregateOutputType | null
    _min: RespostaAvaliacaoMinAggregateOutputType | null
    _max: RespostaAvaliacaoMaxAggregateOutputType | null
  }

  export type RespostaAvaliacaoAvgAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    campo_id: number | null
    resposta_numerica: Decimal | null
  }

  export type RespostaAvaliacaoSumAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    campo_id: number | null
    resposta_numerica: Decimal | null
  }

  export type RespostaAvaliacaoMinAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    campo_id: number | null
    resposta_texto: string | null
    resposta_numerica: Decimal | null
    resposta_checkbox: boolean | null
  }

  export type RespostaAvaliacaoMaxAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    campo_id: number | null
    resposta_texto: string | null
    resposta_numerica: Decimal | null
    resposta_checkbox: boolean | null
  }

  export type RespostaAvaliacaoCountAggregateOutputType = {
    id: number
    avaliacao_id: number
    campo_id: number
    resposta_texto: number
    resposta_numerica: number
    resposta_checkbox: number
    _all: number
  }


  export type RespostaAvaliacaoAvgAggregateInputType = {
    id?: true
    avaliacao_id?: true
    campo_id?: true
    resposta_numerica?: true
  }

  export type RespostaAvaliacaoSumAggregateInputType = {
    id?: true
    avaliacao_id?: true
    campo_id?: true
    resposta_numerica?: true
  }

  export type RespostaAvaliacaoMinAggregateInputType = {
    id?: true
    avaliacao_id?: true
    campo_id?: true
    resposta_texto?: true
    resposta_numerica?: true
    resposta_checkbox?: true
  }

  export type RespostaAvaliacaoMaxAggregateInputType = {
    id?: true
    avaliacao_id?: true
    campo_id?: true
    resposta_texto?: true
    resposta_numerica?: true
    resposta_checkbox?: true
  }

  export type RespostaAvaliacaoCountAggregateInputType = {
    id?: true
    avaliacao_id?: true
    campo_id?: true
    resposta_texto?: true
    resposta_numerica?: true
    resposta_checkbox?: true
    _all?: true
  }

  export type RespostaAvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespostaAvaliacao to aggregate.
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespostaAvaliacaos to fetch.
     */
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespostaAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespostaAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespostaAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RespostaAvaliacaos
    **/
    _count?: true | RespostaAvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespostaAvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespostaAvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespostaAvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespostaAvaliacaoMaxAggregateInputType
  }

  export type GetRespostaAvaliacaoAggregateType<T extends RespostaAvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateRespostaAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespostaAvaliacao[P]>
      : GetScalarType<T[P], AggregateRespostaAvaliacao[P]>
  }




  export type RespostaAvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaAvaliacaoWhereInput
    orderBy?: RespostaAvaliacaoOrderByWithAggregationInput | RespostaAvaliacaoOrderByWithAggregationInput[]
    by: RespostaAvaliacaoScalarFieldEnum[] | RespostaAvaliacaoScalarFieldEnum
    having?: RespostaAvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespostaAvaliacaoCountAggregateInputType | true
    _avg?: RespostaAvaliacaoAvgAggregateInputType
    _sum?: RespostaAvaliacaoSumAggregateInputType
    _min?: RespostaAvaliacaoMinAggregateInputType
    _max?: RespostaAvaliacaoMaxAggregateInputType
  }

  export type RespostaAvaliacaoGroupByOutputType = {
    id: number
    avaliacao_id: number
    campo_id: number
    resposta_texto: string | null
    resposta_numerica: Decimal | null
    resposta_checkbox: boolean | null
    _count: RespostaAvaliacaoCountAggregateOutputType | null
    _avg: RespostaAvaliacaoAvgAggregateOutputType | null
    _sum: RespostaAvaliacaoSumAggregateOutputType | null
    _min: RespostaAvaliacaoMinAggregateOutputType | null
    _max: RespostaAvaliacaoMaxAggregateOutputType | null
  }

  type GetRespostaAvaliacaoGroupByPayload<T extends RespostaAvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespostaAvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespostaAvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespostaAvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], RespostaAvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type RespostaAvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avaliacao_id?: boolean
    campo_id?: boolean
    resposta_texto?: boolean
    resposta_numerica?: boolean
    resposta_checkbox?: boolean
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
    campo?: boolean | CampoAvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respostaAvaliacao"]>



  export type RespostaAvaliacaoSelectScalar = {
    id?: boolean
    avaliacao_id?: boolean
    campo_id?: boolean
    resposta_texto?: boolean
    resposta_numerica?: boolean
    resposta_checkbox?: boolean
  }

  export type RespostaAvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avaliacao_id" | "campo_id" | "resposta_texto" | "resposta_numerica" | "resposta_checkbox", ExtArgs["result"]["respostaAvaliacao"]>
  export type RespostaAvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
    campo?: boolean | CampoAvaliacaoDefaultArgs<ExtArgs>
  }

  export type $RespostaAvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RespostaAvaliacao"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
      campo: Prisma.$CampoAvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      avaliacao_id: number
      campo_id: number
      resposta_texto: string | null
      resposta_numerica: Prisma.Decimal | null
      resposta_checkbox: boolean | null
    }, ExtArgs["result"]["respostaAvaliacao"]>
    composites: {}
  }

  type RespostaAvaliacaoGetPayload<S extends boolean | null | undefined | RespostaAvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$RespostaAvaliacaoPayload, S>

  type RespostaAvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespostaAvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespostaAvaliacaoCountAggregateInputType | true
    }

  export interface RespostaAvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RespostaAvaliacao'], meta: { name: 'RespostaAvaliacao' } }
    /**
     * Find zero or one RespostaAvaliacao that matches the filter.
     * @param {RespostaAvaliacaoFindUniqueArgs} args - Arguments to find a RespostaAvaliacao
     * @example
     * // Get one RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespostaAvaliacaoFindUniqueArgs>(args: SelectSubset<T, RespostaAvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RespostaAvaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespostaAvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a RespostaAvaliacao
     * @example
     * // Get one RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespostaAvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, RespostaAvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RespostaAvaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoFindFirstArgs} args - Arguments to find a RespostaAvaliacao
     * @example
     * // Get one RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespostaAvaliacaoFindFirstArgs>(args?: SelectSubset<T, RespostaAvaliacaoFindFirstArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RespostaAvaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoFindFirstOrThrowArgs} args - Arguments to find a RespostaAvaliacao
     * @example
     * // Get one RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespostaAvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, RespostaAvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RespostaAvaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RespostaAvaliacaos
     * const respostaAvaliacaos = await prisma.respostaAvaliacao.findMany()
     * 
     * // Get first 10 RespostaAvaliacaos
     * const respostaAvaliacaos = await prisma.respostaAvaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respostaAvaliacaoWithIdOnly = await prisma.respostaAvaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespostaAvaliacaoFindManyArgs>(args?: SelectSubset<T, RespostaAvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RespostaAvaliacao.
     * @param {RespostaAvaliacaoCreateArgs} args - Arguments to create a RespostaAvaliacao.
     * @example
     * // Create one RespostaAvaliacao
     * const RespostaAvaliacao = await prisma.respostaAvaliacao.create({
     *   data: {
     *     // ... data to create a RespostaAvaliacao
     *   }
     * })
     * 
     */
    create<T extends RespostaAvaliacaoCreateArgs>(args: SelectSubset<T, RespostaAvaliacaoCreateArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RespostaAvaliacaos.
     * @param {RespostaAvaliacaoCreateManyArgs} args - Arguments to create many RespostaAvaliacaos.
     * @example
     * // Create many RespostaAvaliacaos
     * const respostaAvaliacao = await prisma.respostaAvaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespostaAvaliacaoCreateManyArgs>(args?: SelectSubset<T, RespostaAvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RespostaAvaliacao.
     * @param {RespostaAvaliacaoDeleteArgs} args - Arguments to delete one RespostaAvaliacao.
     * @example
     * // Delete one RespostaAvaliacao
     * const RespostaAvaliacao = await prisma.respostaAvaliacao.delete({
     *   where: {
     *     // ... filter to delete one RespostaAvaliacao
     *   }
     * })
     * 
     */
    delete<T extends RespostaAvaliacaoDeleteArgs>(args: SelectSubset<T, RespostaAvaliacaoDeleteArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RespostaAvaliacao.
     * @param {RespostaAvaliacaoUpdateArgs} args - Arguments to update one RespostaAvaliacao.
     * @example
     * // Update one RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespostaAvaliacaoUpdateArgs>(args: SelectSubset<T, RespostaAvaliacaoUpdateArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RespostaAvaliacaos.
     * @param {RespostaAvaliacaoDeleteManyArgs} args - Arguments to filter RespostaAvaliacaos to delete.
     * @example
     * // Delete a few RespostaAvaliacaos
     * const { count } = await prisma.respostaAvaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespostaAvaliacaoDeleteManyArgs>(args?: SelectSubset<T, RespostaAvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RespostaAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RespostaAvaliacaos
     * const respostaAvaliacao = await prisma.respostaAvaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespostaAvaliacaoUpdateManyArgs>(args: SelectSubset<T, RespostaAvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RespostaAvaliacao.
     * @param {RespostaAvaliacaoUpsertArgs} args - Arguments to update or create a RespostaAvaliacao.
     * @example
     * // Update or create a RespostaAvaliacao
     * const respostaAvaliacao = await prisma.respostaAvaliacao.upsert({
     *   create: {
     *     // ... data to create a RespostaAvaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RespostaAvaliacao we want to update
     *   }
     * })
     */
    upsert<T extends RespostaAvaliacaoUpsertArgs>(args: SelectSubset<T, RespostaAvaliacaoUpsertArgs<ExtArgs>>): Prisma__RespostaAvaliacaoClient<$Result.GetResult<Prisma.$RespostaAvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RespostaAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoCountArgs} args - Arguments to filter RespostaAvaliacaos to count.
     * @example
     * // Count the number of RespostaAvaliacaos
     * const count = await prisma.respostaAvaliacao.count({
     *   where: {
     *     // ... the filter for the RespostaAvaliacaos we want to count
     *   }
     * })
    **/
    count<T extends RespostaAvaliacaoCountArgs>(
      args?: Subset<T, RespostaAvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespostaAvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RespostaAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespostaAvaliacaoAggregateArgs>(args: Subset<T, RespostaAvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetRespostaAvaliacaoAggregateType<T>>

    /**
     * Group by RespostaAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends RespostaAvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespostaAvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: RespostaAvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespostaAvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostaAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RespostaAvaliacao model
   */
  readonly fields: RespostaAvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RespostaAvaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespostaAvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campo<T extends CampoAvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampoAvaliacaoDefaultArgs<ExtArgs>>): Prisma__CampoAvaliacaoClient<$Result.GetResult<Prisma.$CampoAvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RespostaAvaliacao model
   */
  interface RespostaAvaliacaoFieldRefs {
    readonly id: FieldRef<"RespostaAvaliacao", 'Int'>
    readonly avaliacao_id: FieldRef<"RespostaAvaliacao", 'Int'>
    readonly campo_id: FieldRef<"RespostaAvaliacao", 'Int'>
    readonly resposta_texto: FieldRef<"RespostaAvaliacao", 'String'>
    readonly resposta_numerica: FieldRef<"RespostaAvaliacao", 'Decimal'>
    readonly resposta_checkbox: FieldRef<"RespostaAvaliacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RespostaAvaliacao findUnique
   */
  export type RespostaAvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which RespostaAvaliacao to fetch.
     */
    where: RespostaAvaliacaoWhereUniqueInput
  }

  /**
   * RespostaAvaliacao findUniqueOrThrow
   */
  export type RespostaAvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which RespostaAvaliacao to fetch.
     */
    where: RespostaAvaliacaoWhereUniqueInput
  }

  /**
   * RespostaAvaliacao findFirst
   */
  export type RespostaAvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which RespostaAvaliacao to fetch.
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespostaAvaliacaos to fetch.
     */
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespostaAvaliacaos.
     */
    cursor?: RespostaAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespostaAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespostaAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespostaAvaliacaos.
     */
    distinct?: RespostaAvaliacaoScalarFieldEnum | RespostaAvaliacaoScalarFieldEnum[]
  }

  /**
   * RespostaAvaliacao findFirstOrThrow
   */
  export type RespostaAvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which RespostaAvaliacao to fetch.
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespostaAvaliacaos to fetch.
     */
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespostaAvaliacaos.
     */
    cursor?: RespostaAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespostaAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespostaAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespostaAvaliacaos.
     */
    distinct?: RespostaAvaliacaoScalarFieldEnum | RespostaAvaliacaoScalarFieldEnum[]
  }

  /**
   * RespostaAvaliacao findMany
   */
  export type RespostaAvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which RespostaAvaliacaos to fetch.
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespostaAvaliacaos to fetch.
     */
    orderBy?: RespostaAvaliacaoOrderByWithRelationInput | RespostaAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RespostaAvaliacaos.
     */
    cursor?: RespostaAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespostaAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespostaAvaliacaos.
     */
    skip?: number
    distinct?: RespostaAvaliacaoScalarFieldEnum | RespostaAvaliacaoScalarFieldEnum[]
  }

  /**
   * RespostaAvaliacao create
   */
  export type RespostaAvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a RespostaAvaliacao.
     */
    data: XOR<RespostaAvaliacaoCreateInput, RespostaAvaliacaoUncheckedCreateInput>
  }

  /**
   * RespostaAvaliacao createMany
   */
  export type RespostaAvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RespostaAvaliacaos.
     */
    data: RespostaAvaliacaoCreateManyInput | RespostaAvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RespostaAvaliacao update
   */
  export type RespostaAvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a RespostaAvaliacao.
     */
    data: XOR<RespostaAvaliacaoUpdateInput, RespostaAvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which RespostaAvaliacao to update.
     */
    where: RespostaAvaliacaoWhereUniqueInput
  }

  /**
   * RespostaAvaliacao updateMany
   */
  export type RespostaAvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RespostaAvaliacaos.
     */
    data: XOR<RespostaAvaliacaoUpdateManyMutationInput, RespostaAvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which RespostaAvaliacaos to update
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * Limit how many RespostaAvaliacaos to update.
     */
    limit?: number
  }

  /**
   * RespostaAvaliacao upsert
   */
  export type RespostaAvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the RespostaAvaliacao to update in case it exists.
     */
    where: RespostaAvaliacaoWhereUniqueInput
    /**
     * In case the RespostaAvaliacao found by the `where` argument doesn't exist, create a new RespostaAvaliacao with this data.
     */
    create: XOR<RespostaAvaliacaoCreateInput, RespostaAvaliacaoUncheckedCreateInput>
    /**
     * In case the RespostaAvaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespostaAvaliacaoUpdateInput, RespostaAvaliacaoUncheckedUpdateInput>
  }

  /**
   * RespostaAvaliacao delete
   */
  export type RespostaAvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which RespostaAvaliacao to delete.
     */
    where: RespostaAvaliacaoWhereUniqueInput
  }

  /**
   * RespostaAvaliacao deleteMany
   */
  export type RespostaAvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespostaAvaliacaos to delete
     */
    where?: RespostaAvaliacaoWhereInput
    /**
     * Limit how many RespostaAvaliacaos to delete.
     */
    limit?: number
  }

  /**
   * RespostaAvaliacao without action
   */
  export type RespostaAvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaAvaliacao
     */
    select?: RespostaAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespostaAvaliacao
     */
    omit?: RespostaAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaAvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    supervisor_id: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    supervisor_id: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    supervisor_id: number | null
    comentario: string | null
    criado_em: Date | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    avaliacao_id: number | null
    supervisor_id: number | null
    comentario: string | null
    criado_em: Date | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    avaliacao_id: number
    supervisor_id: number
    comentario: number
    criado_em: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    avaliacao_id?: true
    supervisor_id?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    avaliacao_id?: true
    supervisor_id?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    avaliacao_id?: true
    supervisor_id?: true
    comentario?: true
    criado_em?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    avaliacao_id?: true
    supervisor_id?: true
    comentario?: true
    criado_em?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    avaliacao_id?: true
    supervisor_id?: true
    comentario?: true
    criado_em?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    avaliacao_id: number
    supervisor_id: number
    comentario: string
    criado_em: Date
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avaliacao_id?: boolean
    supervisor_id?: boolean
    comentario?: boolean
    criado_em?: boolean
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type ComentarioSelectScalar = {
    id?: boolean
    avaliacao_id?: boolean
    supervisor_id?: boolean
    comentario?: boolean
    criado_em?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avaliacao_id" | "supervisor_id" | "comentario" | "criado_em", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      avaliacao_id: number
      supervisor_id: number
      comentario: string
      criado_em: Date
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
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
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly avaliacao_id: FieldRef<"Comentario", 'Int'>
    readonly supervisor_id: FieldRef<"Comentario", 'Int'>
    readonly comentario: FieldRef<"Comentario", 'String'>
    readonly criado_em: FieldRef<"Comentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model LogAcesso
   */

  export type AggregateLogAcesso = {
    _count: LogAcessoCountAggregateOutputType | null
    _avg: LogAcessoAvgAggregateOutputType | null
    _sum: LogAcessoSumAggregateOutputType | null
    _min: LogAcessoMinAggregateOutputType | null
    _max: LogAcessoMaxAggregateOutputType | null
  }

  export type LogAcessoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type LogAcessoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type LogAcessoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ip_address: string | null
    user_agent: string | null
    data_hora: Date | null
    acao: string | null
  }

  export type LogAcessoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ip_address: string | null
    user_agent: string | null
    data_hora: Date | null
    acao: string | null
  }

  export type LogAcessoCountAggregateOutputType = {
    id: number
    usuario_id: number
    ip_address: number
    user_agent: number
    data_hora: number
    acao: number
    _all: number
  }


  export type LogAcessoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type LogAcessoSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type LogAcessoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    ip_address?: true
    user_agent?: true
    data_hora?: true
    acao?: true
  }

  export type LogAcessoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    ip_address?: true
    user_agent?: true
    data_hora?: true
    acao?: true
  }

  export type LogAcessoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    ip_address?: true
    user_agent?: true
    data_hora?: true
    acao?: true
    _all?: true
  }

  export type LogAcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcesso to aggregate.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAcessos
    **/
    _count?: true | LogAcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAcessoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogAcessoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAcessoMaxAggregateInputType
  }

  export type GetLogAcessoAggregateType<T extends LogAcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAcesso[P]>
      : GetScalarType<T[P], AggregateLogAcesso[P]>
  }




  export type LogAcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcessoWhereInput
    orderBy?: LogAcessoOrderByWithAggregationInput | LogAcessoOrderByWithAggregationInput[]
    by: LogAcessoScalarFieldEnum[] | LogAcessoScalarFieldEnum
    having?: LogAcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAcessoCountAggregateInputType | true
    _avg?: LogAcessoAvgAggregateInputType
    _sum?: LogAcessoSumAggregateInputType
    _min?: LogAcessoMinAggregateInputType
    _max?: LogAcessoMaxAggregateInputType
  }

  export type LogAcessoGroupByOutputType = {
    id: number
    usuario_id: number
    ip_address: string | null
    user_agent: string | null
    data_hora: Date
    acao: string | null
    _count: LogAcessoCountAggregateOutputType | null
    _avg: LogAcessoAvgAggregateOutputType | null
    _sum: LogAcessoSumAggregateOutputType | null
    _min: LogAcessoMinAggregateOutputType | null
    _max: LogAcessoMaxAggregateOutputType | null
  }

  type GetLogAcessoGroupByPayload<T extends LogAcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAcessoGroupByOutputType[P]>
            : GetScalarType<T[P], LogAcessoGroupByOutputType[P]>
        }
      >
    >


  export type LogAcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    data_hora?: boolean
    acao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAcesso"]>



  export type LogAcessoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    data_hora?: boolean
    acao?: boolean
  }

  export type LogAcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "ip_address" | "user_agent" | "data_hora" | "acao", ExtArgs["result"]["logAcesso"]>
  export type LogAcessoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $LogAcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAcesso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      ip_address: string | null
      user_agent: string | null
      data_hora: Date
      acao: string | null
    }, ExtArgs["result"]["logAcesso"]>
    composites: {}
  }

  type LogAcessoGetPayload<S extends boolean | null | undefined | LogAcessoDefaultArgs> = $Result.GetResult<Prisma.$LogAcessoPayload, S>

  type LogAcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAcessoCountAggregateInputType | true
    }

  export interface LogAcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAcesso'], meta: { name: 'LogAcesso' } }
    /**
     * Find zero or one LogAcesso that matches the filter.
     * @param {LogAcessoFindUniqueArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAcessoFindUniqueArgs>(args: SelectSubset<T, LogAcessoFindUniqueArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAcesso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAcessoFindUniqueOrThrowArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAcesso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindFirstArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAcessoFindFirstArgs>(args?: SelectSubset<T, LogAcessoFindFirstArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAcesso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindFirstOrThrowArgs} args - Arguments to find a LogAcesso
     * @example
     * // Get one LogAcesso
     * const logAcesso = await prisma.logAcesso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAcessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAcessos
     * const logAcessos = await prisma.logAcesso.findMany()
     * 
     * // Get first 10 LogAcessos
     * const logAcessos = await prisma.logAcesso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAcessoWithIdOnly = await prisma.logAcesso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAcessoFindManyArgs>(args?: SelectSubset<T, LogAcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAcesso.
     * @param {LogAcessoCreateArgs} args - Arguments to create a LogAcesso.
     * @example
     * // Create one LogAcesso
     * const LogAcesso = await prisma.logAcesso.create({
     *   data: {
     *     // ... data to create a LogAcesso
     *   }
     * })
     * 
     */
    create<T extends LogAcessoCreateArgs>(args: SelectSubset<T, LogAcessoCreateArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAcessos.
     * @param {LogAcessoCreateManyArgs} args - Arguments to create many LogAcessos.
     * @example
     * // Create many LogAcessos
     * const logAcesso = await prisma.logAcesso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAcessoCreateManyArgs>(args?: SelectSubset<T, LogAcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogAcesso.
     * @param {LogAcessoDeleteArgs} args - Arguments to delete one LogAcesso.
     * @example
     * // Delete one LogAcesso
     * const LogAcesso = await prisma.logAcesso.delete({
     *   where: {
     *     // ... filter to delete one LogAcesso
     *   }
     * })
     * 
     */
    delete<T extends LogAcessoDeleteArgs>(args: SelectSubset<T, LogAcessoDeleteArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAcesso.
     * @param {LogAcessoUpdateArgs} args - Arguments to update one LogAcesso.
     * @example
     * // Update one LogAcesso
     * const logAcesso = await prisma.logAcesso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAcessoUpdateArgs>(args: SelectSubset<T, LogAcessoUpdateArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAcessos.
     * @param {LogAcessoDeleteManyArgs} args - Arguments to filter LogAcessos to delete.
     * @example
     * // Delete a few LogAcessos
     * const { count } = await prisma.logAcesso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAcessoDeleteManyArgs>(args?: SelectSubset<T, LogAcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAcessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAcessos
     * const logAcesso = await prisma.logAcesso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAcessoUpdateManyArgs>(args: SelectSubset<T, LogAcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogAcesso.
     * @param {LogAcessoUpsertArgs} args - Arguments to update or create a LogAcesso.
     * @example
     * // Update or create a LogAcesso
     * const logAcesso = await prisma.logAcesso.upsert({
     *   create: {
     *     // ... data to create a LogAcesso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAcesso we want to update
     *   }
     * })
     */
    upsert<T extends LogAcessoUpsertArgs>(args: SelectSubset<T, LogAcessoUpsertArgs<ExtArgs>>): Prisma__LogAcessoClient<$Result.GetResult<Prisma.$LogAcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAcessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoCountArgs} args - Arguments to filter LogAcessos to count.
     * @example
     * // Count the number of LogAcessos
     * const count = await prisma.logAcesso.count({
     *   where: {
     *     // ... the filter for the LogAcessos we want to count
     *   }
     * })
    **/
    count<T extends LogAcessoCountArgs>(
      args?: Subset<T, LogAcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAcesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAcessoAggregateArgs>(args: Subset<T, LogAcessoAggregateArgs>): Prisma.PrismaPromise<GetLogAcessoAggregateType<T>>

    /**
     * Group by LogAcesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcessoGroupByArgs} args - Group by arguments.
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
      T extends LogAcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAcessoGroupByArgs['orderBy'] }
        : { orderBy?: LogAcessoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogAcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAcesso model
   */
  readonly fields: LogAcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAcesso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogAcesso model
   */
  interface LogAcessoFieldRefs {
    readonly id: FieldRef<"LogAcesso", 'Int'>
    readonly usuario_id: FieldRef<"LogAcesso", 'Int'>
    readonly ip_address: FieldRef<"LogAcesso", 'String'>
    readonly user_agent: FieldRef<"LogAcesso", 'String'>
    readonly data_hora: FieldRef<"LogAcesso", 'DateTime'>
    readonly acao: FieldRef<"LogAcesso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LogAcesso findUnique
   */
  export type LogAcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso findUniqueOrThrow
   */
  export type LogAcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso findFirst
   */
  export type LogAcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcessos.
     */
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso findFirstOrThrow
   */
  export type LogAcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcesso to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcessos.
     */
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso findMany
   */
  export type LogAcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcessos to fetch.
     */
    where?: LogAcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcessos to fetch.
     */
    orderBy?: LogAcessoOrderByWithRelationInput | LogAcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAcessos.
     */
    cursor?: LogAcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcessos.
     */
    skip?: number
    distinct?: LogAcessoScalarFieldEnum | LogAcessoScalarFieldEnum[]
  }

  /**
   * LogAcesso create
   */
  export type LogAcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAcesso.
     */
    data: XOR<LogAcessoCreateInput, LogAcessoUncheckedCreateInput>
  }

  /**
   * LogAcesso createMany
   */
  export type LogAcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAcessos.
     */
    data: LogAcessoCreateManyInput | LogAcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAcesso update
   */
  export type LogAcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAcesso.
     */
    data: XOR<LogAcessoUpdateInput, LogAcessoUncheckedUpdateInput>
    /**
     * Choose, which LogAcesso to update.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso updateMany
   */
  export type LogAcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAcessos.
     */
    data: XOR<LogAcessoUpdateManyMutationInput, LogAcessoUncheckedUpdateManyInput>
    /**
     * Filter which LogAcessos to update
     */
    where?: LogAcessoWhereInput
    /**
     * Limit how many LogAcessos to update.
     */
    limit?: number
  }

  /**
   * LogAcesso upsert
   */
  export type LogAcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAcesso to update in case it exists.
     */
    where: LogAcessoWhereUniqueInput
    /**
     * In case the LogAcesso found by the `where` argument doesn't exist, create a new LogAcesso with this data.
     */
    create: XOR<LogAcessoCreateInput, LogAcessoUncheckedCreateInput>
    /**
     * In case the LogAcesso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAcessoUpdateInput, LogAcessoUncheckedUpdateInput>
  }

  /**
   * LogAcesso delete
   */
  export type LogAcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
    /**
     * Filter which LogAcesso to delete.
     */
    where: LogAcessoWhereUniqueInput
  }

  /**
   * LogAcesso deleteMany
   */
  export type LogAcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcessos to delete
     */
    where?: LogAcessoWhereInput
    /**
     * Limit how many LogAcessos to delete.
     */
    limit?: number
  }

  /**
   * LogAcesso without action
   */
  export type LogAcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcesso
     */
    select?: LogAcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAcesso
     */
    omit?: LogAcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcessoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    data_envio: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    data_envio: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    usuario_id: number
    titulo: number
    mensagem: number
    lida: number
    data_envio: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type NotificacaoSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    data_envio?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    data_envio?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    data_envio?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: number
    usuario_id: number
    titulo: string
    mensagem: string | null
    lida: boolean
    data_envio: Date
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    data_envio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>



  export type NotificacaoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    data_envio?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "titulo" | "mensagem" | "lida" | "data_envio", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      titulo: string
      mensagem: string | null
      lida: boolean
      data_envio: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'Int'>
    readonly usuario_id: FieldRef<"Notificacao", 'Int'>
    readonly titulo: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly data_envio: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
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


  export const SetorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type SetorScalarFieldEnum = (typeof SetorScalarFieldEnum)[keyof typeof SetorScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    tipo: 'tipo',
    ativo: 'ativo',
    criado_em: 'criado_em'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ResidenteScalarFieldEnum: {
    id: 'id',
    crm: 'crm',
    especialidade: 'especialidade',
    ano_residencia: 'ano_residencia',
    setor_id: 'setor_id'
  };

  export type ResidenteScalarFieldEnum = (typeof ResidenteScalarFieldEnum)[keyof typeof ResidenteScalarFieldEnum]


  export const SupervisorScalarFieldEnum: {
    id: 'id',
    crm: 'crm',
    setor_id: 'setor_id'
  };

  export type SupervisorScalarFieldEnum = (typeof SupervisorScalarFieldEnum)[keyof typeof SupervisorScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const FrequenciaScalarFieldEnum: {
    id: 'id',
    residente_id: 'residente_id',
    data: 'data',
    presente: 'presente',
    horario_chegada: 'horario_chegada',
    inicio_intervalo: 'inicio_intervalo',
    fim_intervalo: 'fim_intervalo',
    horario_saida: 'horario_saida',
    observacoes: 'observacoes',
    registrado_por: 'registrado_por'
  };

  export type FrequenciaScalarFieldEnum = (typeof FrequenciaScalarFieldEnum)[keyof typeof FrequenciaScalarFieldEnum]


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    residente_id: 'residente_id',
    setor_id: 'setor_id',
    descricao: 'descricao',
    data_atividade: 'data_atividade',
    data_finalizacao: 'data_finalizacao',
    criado_em: 'criado_em',
    finalizada: 'finalizada'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const AtividadeLogScalarFieldEnum: {
    id: 'id',
    atividade_id: 'atividade_id',
    acao: 'acao',
    dados_anteriores: 'dados_anteriores',
    dados_novos: 'dados_novos',
    usuario_id: 'usuario_id',
    timestamp: 'timestamp'
  };

  export type AtividadeLogScalarFieldEnum = (typeof AtividadeLogScalarFieldEnum)[keyof typeof AtividadeLogScalarFieldEnum]


  export const CampoAvaliacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    obrigatorio: 'obrigatorio',
    tipo: 'tipo',
    ordem: 'ordem'
  };

  export type CampoAvaliacaoScalarFieldEnum = (typeof CampoAvaliacaoScalarFieldEnum)[keyof typeof CampoAvaliacaoScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    residente_id: 'residente_id',
    supervisor_id: 'supervisor_id',
    data_avaliacao: 'data_avaliacao',
    periodo_inicio: 'periodo_inicio',
    periodo_fim: 'periodo_fim',
    criado_em: 'criado_em'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const RespostaAvaliacaoScalarFieldEnum: {
    id: 'id',
    avaliacao_id: 'avaliacao_id',
    campo_id: 'campo_id',
    resposta_texto: 'resposta_texto',
    resposta_numerica: 'resposta_numerica',
    resposta_checkbox: 'resposta_checkbox'
  };

  export type RespostaAvaliacaoScalarFieldEnum = (typeof RespostaAvaliacaoScalarFieldEnum)[keyof typeof RespostaAvaliacaoScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    avaliacao_id: 'avaliacao_id',
    supervisor_id: 'supervisor_id',
    comentario: 'comentario',
    criado_em: 'criado_em'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const LogAcessoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    data_hora: 'data_hora',
    acao: 'acao'
  };

  export type LogAcessoScalarFieldEnum = (typeof LogAcessoScalarFieldEnum)[keyof typeof LogAcessoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    titulo: 'titulo',
    mensagem: 'mensagem',
    lida: 'lida',
    data_envio: 'data_envio'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SetorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type SetorOrderByRelevanceFieldEnum = (typeof SetorOrderByRelevanceFieldEnum)[keyof typeof SetorOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const ResidenteOrderByRelevanceFieldEnum: {
    crm: 'crm',
    especialidade: 'especialidade'
  };

  export type ResidenteOrderByRelevanceFieldEnum = (typeof ResidenteOrderByRelevanceFieldEnum)[keyof typeof ResidenteOrderByRelevanceFieldEnum]


  export const SupervisorOrderByRelevanceFieldEnum: {
    crm: 'crm'
  };

  export type SupervisorOrderByRelevanceFieldEnum = (typeof SupervisorOrderByRelevanceFieldEnum)[keyof typeof SupervisorOrderByRelevanceFieldEnum]


  export const FrequenciaOrderByRelevanceFieldEnum: {
    observacoes: 'observacoes'
  };

  export type FrequenciaOrderByRelevanceFieldEnum = (typeof FrequenciaOrderByRelevanceFieldEnum)[keyof typeof FrequenciaOrderByRelevanceFieldEnum]


  export const AtividadeOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type AtividadeOrderByRelevanceFieldEnum = (typeof AtividadeOrderByRelevanceFieldEnum)[keyof typeof AtividadeOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AtividadeLogOrderByRelevanceFieldEnum: {
    acao: 'acao'
  };

  export type AtividadeLogOrderByRelevanceFieldEnum = (typeof AtividadeLogOrderByRelevanceFieldEnum)[keyof typeof AtividadeLogOrderByRelevanceFieldEnum]


  export const CampoAvaliacaoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type CampoAvaliacaoOrderByRelevanceFieldEnum = (typeof CampoAvaliacaoOrderByRelevanceFieldEnum)[keyof typeof CampoAvaliacaoOrderByRelevanceFieldEnum]


  export const RespostaAvaliacaoOrderByRelevanceFieldEnum: {
    resposta_texto: 'resposta_texto'
  };

  export type RespostaAvaliacaoOrderByRelevanceFieldEnum = (typeof RespostaAvaliacaoOrderByRelevanceFieldEnum)[keyof typeof RespostaAvaliacaoOrderByRelevanceFieldEnum]


  export const ComentarioOrderByRelevanceFieldEnum: {
    comentario: 'comentario'
  };

  export type ComentarioOrderByRelevanceFieldEnum = (typeof ComentarioOrderByRelevanceFieldEnum)[keyof typeof ComentarioOrderByRelevanceFieldEnum]


  export const LogAcessoOrderByRelevanceFieldEnum: {
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    acao: 'acao'
  };

  export type LogAcessoOrderByRelevanceFieldEnum = (typeof LogAcessoOrderByRelevanceFieldEnum)[keyof typeof LogAcessoOrderByRelevanceFieldEnum]


  export const NotificacaoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    mensagem: 'mensagem'
  };

  export type NotificacaoOrderByRelevanceFieldEnum = (typeof NotificacaoOrderByRelevanceFieldEnum)[keyof typeof NotificacaoOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TipoCampo'
   */
  export type EnumTipoCampoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCampo'>
    


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


  export type SetorWhereInput = {
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    id?: IntFilter<"Setor"> | number
    nome?: StringFilter<"Setor"> | string
    descricao?: StringNullableFilter<"Setor"> | string | null
    residentes?: ResidenteListRelationFilter
    supervisores?: SupervisorListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type SetorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    residentes?: ResidenteOrderByRelationAggregateInput
    supervisores?: SupervisorOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
    _relevance?: SetorOrderByRelevanceInput
  }

  export type SetorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    nome?: StringFilter<"Setor"> | string
    descricao?: StringNullableFilter<"Setor"> | string | null
    residentes?: ResidenteListRelationFilter
    supervisores?: SupervisorListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "id">

  export type SetorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: SetorCountOrderByAggregateInput
    _avg?: SetorAvgOrderByAggregateInput
    _max?: SetorMaxOrderByAggregateInput
    _min?: SetorMinOrderByAggregateInput
    _sum?: SetorSumOrderByAggregateInput
  }

  export type SetorScalarWhereWithAggregatesInput = {
    AND?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    OR?: SetorScalarWhereWithAggregatesInput[]
    NOT?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setor"> | number
    nome?: StringWithAggregatesFilter<"Setor"> | string
    descricao?: StringNullableWithAggregatesFilter<"Setor"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    residente?: XOR<ResidenteNullableScalarRelationFilter, ResidenteWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, SupervisorWhereInput> | null
    administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
    logs?: LogAcessoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
    frequencias_registradas?: FrequenciaListRelationFilter
    AtividadeLog?: AtividadeLogListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    criado_em?: SortOrder
    residente?: ResidenteOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
    administrador?: AdministradorOrderByWithRelationInput
    logs?: LogAcessoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    frequencias_registradas?: FrequenciaOrderByRelationAggregateInput
    AtividadeLog?: AtividadeLogOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    ativo?: BoolFilter<"Usuario"> | boolean
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    residente?: XOR<ResidenteNullableScalarRelationFilter, ResidenteWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, SupervisorWhereInput> | null
    administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
    logs?: LogAcessoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
    frequencias_registradas?: FrequenciaListRelationFilter
    AtividadeLog?: AtividadeLogListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    criado_em?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha_hash?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    criado_em?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ResidenteWhereInput = {
    AND?: ResidenteWhereInput | ResidenteWhereInput[]
    OR?: ResidenteWhereInput[]
    NOT?: ResidenteWhereInput | ResidenteWhereInput[]
    id?: IntFilter<"Residente"> | number
    crm?: StringNullableFilter<"Residente"> | string | null
    especialidade?: StringNullableFilter<"Residente"> | string | null
    ano_residencia?: IntNullableFilter<"Residente"> | number | null
    setor_id?: IntNullableFilter<"Residente"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    setor?: XOR<SetorNullableScalarRelationFilter, SetorWhereInput> | null
    frequencias?: FrequenciaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type ResidenteOrderByWithRelationInput = {
    id?: SortOrder
    crm?: SortOrderInput | SortOrder
    especialidade?: SortOrderInput | SortOrder
    ano_residencia?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    setor?: SetorOrderByWithRelationInput
    frequencias?: FrequenciaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
    _relevance?: ResidenteOrderByRelevanceInput
  }

  export type ResidenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    crm?: string
    AND?: ResidenteWhereInput | ResidenteWhereInput[]
    OR?: ResidenteWhereInput[]
    NOT?: ResidenteWhereInput | ResidenteWhereInput[]
    especialidade?: StringNullableFilter<"Residente"> | string | null
    ano_residencia?: IntNullableFilter<"Residente"> | number | null
    setor_id?: IntNullableFilter<"Residente"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    setor?: XOR<SetorNullableScalarRelationFilter, SetorWhereInput> | null
    frequencias?: FrequenciaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "id" | "crm">

  export type ResidenteOrderByWithAggregationInput = {
    id?: SortOrder
    crm?: SortOrderInput | SortOrder
    especialidade?: SortOrderInput | SortOrder
    ano_residencia?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    _count?: ResidenteCountOrderByAggregateInput
    _avg?: ResidenteAvgOrderByAggregateInput
    _max?: ResidenteMaxOrderByAggregateInput
    _min?: ResidenteMinOrderByAggregateInput
    _sum?: ResidenteSumOrderByAggregateInput
  }

  export type ResidenteScalarWhereWithAggregatesInput = {
    AND?: ResidenteScalarWhereWithAggregatesInput | ResidenteScalarWhereWithAggregatesInput[]
    OR?: ResidenteScalarWhereWithAggregatesInput[]
    NOT?: ResidenteScalarWhereWithAggregatesInput | ResidenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Residente"> | number
    crm?: StringNullableWithAggregatesFilter<"Residente"> | string | null
    especialidade?: StringNullableWithAggregatesFilter<"Residente"> | string | null
    ano_residencia?: IntNullableWithAggregatesFilter<"Residente"> | number | null
    setor_id?: IntNullableWithAggregatesFilter<"Residente"> | number | null
  }

  export type SupervisorWhereInput = {
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    id?: IntFilter<"Supervisor"> | number
    crm?: StringNullableFilter<"Supervisor"> | string | null
    setor_id?: IntNullableFilter<"Supervisor"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    setor?: XOR<SetorNullableScalarRelationFilter, SetorWhereInput> | null
    avaliacoes?: AvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type SupervisorOrderByWithRelationInput = {
    id?: SortOrder
    crm?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    setor?: SetorOrderByWithRelationInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    _relevance?: SupervisorOrderByRelevanceInput
  }

  export type SupervisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    crm?: string
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    setor_id?: IntNullableFilter<"Supervisor"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    setor?: XOR<SetorNullableScalarRelationFilter, SetorWhereInput> | null
    avaliacoes?: AvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id" | "crm">

  export type SupervisorOrderByWithAggregationInput = {
    id?: SortOrder
    crm?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    _count?: SupervisorCountOrderByAggregateInput
    _avg?: SupervisorAvgOrderByAggregateInput
    _max?: SupervisorMaxOrderByAggregateInput
    _min?: SupervisorMinOrderByAggregateInput
    _sum?: SupervisorSumOrderByAggregateInput
  }

  export type SupervisorScalarWhereWithAggregatesInput = {
    AND?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    OR?: SupervisorScalarWhereWithAggregatesInput[]
    NOT?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supervisor"> | number
    crm?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    setor_id?: IntNullableWithAggregatesFilter<"Supervisor"> | number | null
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: IntFilter<"Administrador"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Administrador"> | number
  }

  export type FrequenciaWhereInput = {
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    id?: IntFilter<"Frequencia"> | number
    residente_id?: IntFilter<"Frequencia"> | number
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presente?: BoolFilter<"Frequencia"> | boolean
    horario_chegada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    inicio_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    fim_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    horario_saida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    observacoes?: StringNullableFilter<"Frequencia"> | string | null
    registrado_por?: IntFilter<"Frequencia"> | number
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    registradoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FrequenciaOrderByWithRelationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    data?: SortOrder
    presente?: SortOrder
    horario_chegada?: SortOrderInput | SortOrder
    inicio_intervalo?: SortOrderInput | SortOrder
    fim_intervalo?: SortOrderInput | SortOrder
    horario_saida?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    registrado_por?: SortOrder
    residente?: ResidenteOrderByWithRelationInput
    registradoPor?: UsuarioOrderByWithRelationInput
    _relevance?: FrequenciaOrderByRelevanceInput
  }

  export type FrequenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residente_id_data?: FrequenciaResidente_idDataCompoundUniqueInput
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    residente_id?: IntFilter<"Frequencia"> | number
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presente?: BoolFilter<"Frequencia"> | boolean
    horario_chegada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    inicio_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    fim_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    horario_saida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    observacoes?: StringNullableFilter<"Frequencia"> | string | null
    registrado_por?: IntFilter<"Frequencia"> | number
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    registradoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "residente_id_data">

  export type FrequenciaOrderByWithAggregationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    data?: SortOrder
    presente?: SortOrder
    horario_chegada?: SortOrderInput | SortOrder
    inicio_intervalo?: SortOrderInput | SortOrder
    fim_intervalo?: SortOrderInput | SortOrder
    horario_saida?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    registrado_por?: SortOrder
    _count?: FrequenciaCountOrderByAggregateInput
    _avg?: FrequenciaAvgOrderByAggregateInput
    _max?: FrequenciaMaxOrderByAggregateInput
    _min?: FrequenciaMinOrderByAggregateInput
    _sum?: FrequenciaSumOrderByAggregateInput
  }

  export type FrequenciaScalarWhereWithAggregatesInput = {
    AND?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    OR?: FrequenciaScalarWhereWithAggregatesInput[]
    NOT?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Frequencia"> | number
    residente_id?: IntWithAggregatesFilter<"Frequencia"> | number
    data?: DateTimeWithAggregatesFilter<"Frequencia"> | Date | string
    presente?: BoolWithAggregatesFilter<"Frequencia"> | boolean
    horario_chegada?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    inicio_intervalo?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    fim_intervalo?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    horario_saida?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Frequencia"> | string | null
    registrado_por?: IntWithAggregatesFilter<"Frequencia"> | number
  }

  export type AtividadeWhereInput = {
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    id?: IntFilter<"Atividade"> | number
    residente_id?: IntFilter<"Atividade"> | number
    setor_id?: IntFilter<"Atividade"> | number
    descricao?: StringFilter<"Atividade"> | string
    data_atividade?: DateTimeFilter<"Atividade"> | Date | string
    data_finalizacao?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    criado_em?: DateTimeFilter<"Atividade"> | Date | string
    finalizada?: BoolFilter<"Atividade"> | boolean
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    setor?: XOR<SetorScalarRelationFilter, SetorWhereInput>
    AtividadeLog?: AtividadeLogListRelationFilter
  }

  export type AtividadeOrderByWithRelationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
    descricao?: SortOrder
    data_atividade?: SortOrder
    data_finalizacao?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    finalizada?: SortOrder
    residente?: ResidenteOrderByWithRelationInput
    setor?: SetorOrderByWithRelationInput
    AtividadeLog?: AtividadeLogOrderByRelationAggregateInput
    _relevance?: AtividadeOrderByRelevanceInput
  }

  export type AtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residente_id_data_atividade_descricao?: AtividadeResidente_idData_atividadeDescricaoCompoundUniqueInput
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    residente_id?: IntFilter<"Atividade"> | number
    setor_id?: IntFilter<"Atividade"> | number
    descricao?: StringFilter<"Atividade"> | string
    data_atividade?: DateTimeFilter<"Atividade"> | Date | string
    data_finalizacao?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    criado_em?: DateTimeFilter<"Atividade"> | Date | string
    finalizada?: BoolFilter<"Atividade"> | boolean
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    setor?: XOR<SetorScalarRelationFilter, SetorWhereInput>
    AtividadeLog?: AtividadeLogListRelationFilter
  }, "id" | "residente_id_data_atividade_descricao">

  export type AtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
    descricao?: SortOrder
    data_atividade?: SortOrder
    data_finalizacao?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    finalizada?: SortOrder
    _count?: AtividadeCountOrderByAggregateInput
    _avg?: AtividadeAvgOrderByAggregateInput
    _max?: AtividadeMaxOrderByAggregateInput
    _min?: AtividadeMinOrderByAggregateInput
    _sum?: AtividadeSumOrderByAggregateInput
  }

  export type AtividadeScalarWhereWithAggregatesInput = {
    AND?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    OR?: AtividadeScalarWhereWithAggregatesInput[]
    NOT?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Atividade"> | number
    residente_id?: IntWithAggregatesFilter<"Atividade"> | number
    setor_id?: IntWithAggregatesFilter<"Atividade"> | number
    descricao?: StringWithAggregatesFilter<"Atividade"> | string
    data_atividade?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    data_finalizacao?: DateTimeNullableWithAggregatesFilter<"Atividade"> | Date | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    finalizada?: BoolWithAggregatesFilter<"Atividade"> | boolean
  }

  export type AtividadeLogWhereInput = {
    AND?: AtividadeLogWhereInput | AtividadeLogWhereInput[]
    OR?: AtividadeLogWhereInput[]
    NOT?: AtividadeLogWhereInput | AtividadeLogWhereInput[]
    id?: IntFilter<"AtividadeLog"> | number
    atividade_id?: IntFilter<"AtividadeLog"> | number
    acao?: StringFilter<"AtividadeLog"> | string
    dados_anteriores?: JsonNullableFilter<"AtividadeLog">
    dados_novos?: JsonNullableFilter<"AtividadeLog">
    usuario_id?: IntFilter<"AtividadeLog"> | number
    timestamp?: DateTimeFilter<"AtividadeLog"> | Date | string
    atividade?: XOR<AtividadeScalarRelationFilter, AtividadeWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AtividadeLogOrderByWithRelationInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    acao?: SortOrder
    dados_anteriores?: SortOrderInput | SortOrder
    dados_novos?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    timestamp?: SortOrder
    atividade?: AtividadeOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: AtividadeLogOrderByRelevanceInput
  }

  export type AtividadeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtividadeLogWhereInput | AtividadeLogWhereInput[]
    OR?: AtividadeLogWhereInput[]
    NOT?: AtividadeLogWhereInput | AtividadeLogWhereInput[]
    atividade_id?: IntFilter<"AtividadeLog"> | number
    acao?: StringFilter<"AtividadeLog"> | string
    dados_anteriores?: JsonNullableFilter<"AtividadeLog">
    dados_novos?: JsonNullableFilter<"AtividadeLog">
    usuario_id?: IntFilter<"AtividadeLog"> | number
    timestamp?: DateTimeFilter<"AtividadeLog"> | Date | string
    atividade?: XOR<AtividadeScalarRelationFilter, AtividadeWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AtividadeLogOrderByWithAggregationInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    acao?: SortOrder
    dados_anteriores?: SortOrderInput | SortOrder
    dados_novos?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    timestamp?: SortOrder
    _count?: AtividadeLogCountOrderByAggregateInput
    _avg?: AtividadeLogAvgOrderByAggregateInput
    _max?: AtividadeLogMaxOrderByAggregateInput
    _min?: AtividadeLogMinOrderByAggregateInput
    _sum?: AtividadeLogSumOrderByAggregateInput
  }

  export type AtividadeLogScalarWhereWithAggregatesInput = {
    AND?: AtividadeLogScalarWhereWithAggregatesInput | AtividadeLogScalarWhereWithAggregatesInput[]
    OR?: AtividadeLogScalarWhereWithAggregatesInput[]
    NOT?: AtividadeLogScalarWhereWithAggregatesInput | AtividadeLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AtividadeLog"> | number
    atividade_id?: IntWithAggregatesFilter<"AtividadeLog"> | number
    acao?: StringWithAggregatesFilter<"AtividadeLog"> | string
    dados_anteriores?: JsonNullableWithAggregatesFilter<"AtividadeLog">
    dados_novos?: JsonNullableWithAggregatesFilter<"AtividadeLog">
    usuario_id?: IntWithAggregatesFilter<"AtividadeLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AtividadeLog"> | Date | string
  }

  export type CampoAvaliacaoWhereInput = {
    AND?: CampoAvaliacaoWhereInput | CampoAvaliacaoWhereInput[]
    OR?: CampoAvaliacaoWhereInput[]
    NOT?: CampoAvaliacaoWhereInput | CampoAvaliacaoWhereInput[]
    id?: IntFilter<"CampoAvaliacao"> | number
    titulo?: StringFilter<"CampoAvaliacao"> | string
    descricao?: StringNullableFilter<"CampoAvaliacao"> | string | null
    obrigatorio?: BoolFilter<"CampoAvaliacao"> | boolean
    tipo?: EnumTipoCampoFilter<"CampoAvaliacao"> | $Enums.TipoCampo
    ordem?: IntNullableFilter<"CampoAvaliacao"> | number | null
    respostas?: RespostaAvaliacaoListRelationFilter
  }

  export type CampoAvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    obrigatorio?: SortOrder
    tipo?: SortOrder
    ordem?: SortOrderInput | SortOrder
    respostas?: RespostaAvaliacaoOrderByRelationAggregateInput
    _relevance?: CampoAvaliacaoOrderByRelevanceInput
  }

  export type CampoAvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampoAvaliacaoWhereInput | CampoAvaliacaoWhereInput[]
    OR?: CampoAvaliacaoWhereInput[]
    NOT?: CampoAvaliacaoWhereInput | CampoAvaliacaoWhereInput[]
    titulo?: StringFilter<"CampoAvaliacao"> | string
    descricao?: StringNullableFilter<"CampoAvaliacao"> | string | null
    obrigatorio?: BoolFilter<"CampoAvaliacao"> | boolean
    tipo?: EnumTipoCampoFilter<"CampoAvaliacao"> | $Enums.TipoCampo
    ordem?: IntNullableFilter<"CampoAvaliacao"> | number | null
    respostas?: RespostaAvaliacaoListRelationFilter
  }, "id">

  export type CampoAvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    obrigatorio?: SortOrder
    tipo?: SortOrder
    ordem?: SortOrderInput | SortOrder
    _count?: CampoAvaliacaoCountOrderByAggregateInput
    _avg?: CampoAvaliacaoAvgOrderByAggregateInput
    _max?: CampoAvaliacaoMaxOrderByAggregateInput
    _min?: CampoAvaliacaoMinOrderByAggregateInput
    _sum?: CampoAvaliacaoSumOrderByAggregateInput
  }

  export type CampoAvaliacaoScalarWhereWithAggregatesInput = {
    AND?: CampoAvaliacaoScalarWhereWithAggregatesInput | CampoAvaliacaoScalarWhereWithAggregatesInput[]
    OR?: CampoAvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: CampoAvaliacaoScalarWhereWithAggregatesInput | CampoAvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampoAvaliacao"> | number
    titulo?: StringWithAggregatesFilter<"CampoAvaliacao"> | string
    descricao?: StringNullableWithAggregatesFilter<"CampoAvaliacao"> | string | null
    obrigatorio?: BoolWithAggregatesFilter<"CampoAvaliacao"> | boolean
    tipo?: EnumTipoCampoWithAggregatesFilter<"CampoAvaliacao"> | $Enums.TipoCampo
    ordem?: IntNullableWithAggregatesFilter<"CampoAvaliacao"> | number | null
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    residente_id?: IntFilter<"Avaliacao"> | number
    supervisor_id?: IntFilter<"Avaliacao"> | number
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    periodo_inicio?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    periodo_fim?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    criado_em?: DateTimeFilter<"Avaliacao"> | Date | string
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    respostas?: RespostaAvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
    data_avaliacao?: SortOrder
    periodo_inicio?: SortOrderInput | SortOrder
    periodo_fim?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    residente?: ResidenteOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
    respostas?: RespostaAvaliacaoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    residente_id?: IntFilter<"Avaliacao"> | number
    supervisor_id?: IntFilter<"Avaliacao"> | number
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    periodo_inicio?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    periodo_fim?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    criado_em?: DateTimeFilter<"Avaliacao"> | Date | string
    residente?: XOR<ResidenteScalarRelationFilter, ResidenteWhereInput>
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    respostas?: RespostaAvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
    data_avaliacao?: SortOrder
    periodo_inicio?: SortOrderInput | SortOrder
    periodo_fim?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    residente_id?: IntWithAggregatesFilter<"Avaliacao"> | number
    supervisor_id?: IntWithAggregatesFilter<"Avaliacao"> | number
    data_avaliacao?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    periodo_inicio?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
    periodo_fim?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type RespostaAvaliacaoWhereInput = {
    AND?: RespostaAvaliacaoWhereInput | RespostaAvaliacaoWhereInput[]
    OR?: RespostaAvaliacaoWhereInput[]
    NOT?: RespostaAvaliacaoWhereInput | RespostaAvaliacaoWhereInput[]
    id?: IntFilter<"RespostaAvaliacao"> | number
    avaliacao_id?: IntFilter<"RespostaAvaliacao"> | number
    campo_id?: IntFilter<"RespostaAvaliacao"> | number
    resposta_texto?: StringNullableFilter<"RespostaAvaliacao"> | string | null
    resposta_numerica?: DecimalNullableFilter<"RespostaAvaliacao"> | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: BoolNullableFilter<"RespostaAvaliacao"> | boolean | null
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
    campo?: XOR<CampoAvaliacaoScalarRelationFilter, CampoAvaliacaoWhereInput>
  }

  export type RespostaAvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_texto?: SortOrderInput | SortOrder
    resposta_numerica?: SortOrderInput | SortOrder
    resposta_checkbox?: SortOrderInput | SortOrder
    avaliacao?: AvaliacaoOrderByWithRelationInput
    campo?: CampoAvaliacaoOrderByWithRelationInput
    _relevance?: RespostaAvaliacaoOrderByRelevanceInput
  }

  export type RespostaAvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RespostaAvaliacaoWhereInput | RespostaAvaliacaoWhereInput[]
    OR?: RespostaAvaliacaoWhereInput[]
    NOT?: RespostaAvaliacaoWhereInput | RespostaAvaliacaoWhereInput[]
    avaliacao_id?: IntFilter<"RespostaAvaliacao"> | number
    campo_id?: IntFilter<"RespostaAvaliacao"> | number
    resposta_texto?: StringNullableFilter<"RespostaAvaliacao"> | string | null
    resposta_numerica?: DecimalNullableFilter<"RespostaAvaliacao"> | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: BoolNullableFilter<"RespostaAvaliacao"> | boolean | null
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
    campo?: XOR<CampoAvaliacaoScalarRelationFilter, CampoAvaliacaoWhereInput>
  }, "id">

  export type RespostaAvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_texto?: SortOrderInput | SortOrder
    resposta_numerica?: SortOrderInput | SortOrder
    resposta_checkbox?: SortOrderInput | SortOrder
    _count?: RespostaAvaliacaoCountOrderByAggregateInput
    _avg?: RespostaAvaliacaoAvgOrderByAggregateInput
    _max?: RespostaAvaliacaoMaxOrderByAggregateInput
    _min?: RespostaAvaliacaoMinOrderByAggregateInput
    _sum?: RespostaAvaliacaoSumOrderByAggregateInput
  }

  export type RespostaAvaliacaoScalarWhereWithAggregatesInput = {
    AND?: RespostaAvaliacaoScalarWhereWithAggregatesInput | RespostaAvaliacaoScalarWhereWithAggregatesInput[]
    OR?: RespostaAvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: RespostaAvaliacaoScalarWhereWithAggregatesInput | RespostaAvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RespostaAvaliacao"> | number
    avaliacao_id?: IntWithAggregatesFilter<"RespostaAvaliacao"> | number
    campo_id?: IntWithAggregatesFilter<"RespostaAvaliacao"> | number
    resposta_texto?: StringNullableWithAggregatesFilter<"RespostaAvaliacao"> | string | null
    resposta_numerica?: DecimalNullableWithAggregatesFilter<"RespostaAvaliacao"> | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: BoolNullableWithAggregatesFilter<"RespostaAvaliacao"> | boolean | null
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    avaliacao_id?: IntFilter<"Comentario"> | number
    supervisor_id?: IntFilter<"Comentario"> | number
    comentario?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
    avaliacao?: AvaliacaoOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
    _relevance?: ComentarioOrderByRelevanceInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    avaliacao_id?: IntFilter<"Comentario"> | number
    supervisor_id?: IntFilter<"Comentario"> | number
    comentario?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    avaliacao_id?: IntWithAggregatesFilter<"Comentario"> | number
    supervisor_id?: IntWithAggregatesFilter<"Comentario"> | number
    comentario?: StringWithAggregatesFilter<"Comentario"> | string
    criado_em?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
  }

  export type LogAcessoWhereInput = {
    AND?: LogAcessoWhereInput | LogAcessoWhereInput[]
    OR?: LogAcessoWhereInput[]
    NOT?: LogAcessoWhereInput | LogAcessoWhereInput[]
    id?: IntFilter<"LogAcesso"> | number
    usuario_id?: IntFilter<"LogAcesso"> | number
    ip_address?: StringNullableFilter<"LogAcesso"> | string | null
    user_agent?: StringNullableFilter<"LogAcesso"> | string | null
    data_hora?: DateTimeFilter<"LogAcesso"> | Date | string
    acao?: StringNullableFilter<"LogAcesso"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type LogAcessoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    data_hora?: SortOrder
    acao?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: LogAcessoOrderByRelevanceInput
  }

  export type LogAcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogAcessoWhereInput | LogAcessoWhereInput[]
    OR?: LogAcessoWhereInput[]
    NOT?: LogAcessoWhereInput | LogAcessoWhereInput[]
    usuario_id?: IntFilter<"LogAcesso"> | number
    ip_address?: StringNullableFilter<"LogAcesso"> | string | null
    user_agent?: StringNullableFilter<"LogAcesso"> | string | null
    data_hora?: DateTimeFilter<"LogAcesso"> | Date | string
    acao?: StringNullableFilter<"LogAcesso"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type LogAcessoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    data_hora?: SortOrder
    acao?: SortOrderInput | SortOrder
    _count?: LogAcessoCountOrderByAggregateInput
    _avg?: LogAcessoAvgOrderByAggregateInput
    _max?: LogAcessoMaxOrderByAggregateInput
    _min?: LogAcessoMinOrderByAggregateInput
    _sum?: LogAcessoSumOrderByAggregateInput
  }

  export type LogAcessoScalarWhereWithAggregatesInput = {
    AND?: LogAcessoScalarWhereWithAggregatesInput | LogAcessoScalarWhereWithAggregatesInput[]
    OR?: LogAcessoScalarWhereWithAggregatesInput[]
    NOT?: LogAcessoScalarWhereWithAggregatesInput | LogAcessoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogAcesso"> | number
    usuario_id?: IntWithAggregatesFilter<"LogAcesso"> | number
    ip_address?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
    data_hora?: DateTimeWithAggregatesFilter<"LogAcesso"> | Date | string
    acao?: StringNullableWithAggregatesFilter<"LogAcesso"> | string | null
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    usuario_id?: IntFilter<"Notificacao"> | number
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    data_envio?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    lida?: SortOrder
    data_envio?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: NotificacaoOrderByRelevanceInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    usuario_id?: IntFilter<"Notificacao"> | number
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    data_envio?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    lida?: SortOrder
    data_envio?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacao"> | number
    usuario_id?: IntWithAggregatesFilter<"Notificacao"> | number
    titulo?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    data_envio?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type SetorCreateInput = {
    nome: string
    descricao?: string | null
    residentes?: ResidenteCreateNestedManyWithoutSetorInput
    supervisores?: SupervisorCreateNestedManyWithoutSetorInput
    atividades?: AtividadeCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    residentes?: ResidenteUncheckedCreateNestedManyWithoutSetorInput
    supervisores?: SupervisorUncheckedCreateNestedManyWithoutSetorInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUpdateManyWithoutSetorNestedInput
    supervisores?: SupervisorUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUncheckedUpdateManyWithoutSetorNestedInput
    supervisores?: SupervisorUncheckedUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type SetorCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type SetorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResidenteCreateInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    usuario: UsuarioCreateNestedOneWithoutResidenteInput
    setor?: SetorCreateNestedOneWithoutResidentesInput
    frequencias?: FrequenciaCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUpdateInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneRequiredWithoutResidenteNestedInput
    setor?: SetorUpdateOneWithoutResidentesNestedInput
    frequencias?: FrequenciaUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    frequencias?: FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteCreateManyInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
  }

  export type ResidenteUpdateManyMutationInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResidenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SupervisorCreateInput = {
    crm?: string | null
    usuario: UsuarioCreateNestedOneWithoutSupervisorInput
    setor?: SetorCreateNestedOneWithoutSupervisoresInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateInput = {
    id: number
    crm?: string | null
    setor_id?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUpdateInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSupervisorNestedInput
    setor?: SetorUpdateOneWithoutSupervisoresNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorCreateManyInput = {
    id: number
    crm?: string | null
    setor_id?: number | null
  }

  export type SupervisorUpdateManyMutationInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupervisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdministradorCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    id: number
  }

  export type AdministradorUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorCreateManyInput = {
    id: number
  }

  export type AdministradorUpdateManyMutationInput = {

  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FrequenciaCreateInput = {
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    residente: ResidenteCreateNestedOneWithoutFrequenciasInput
    registradoPor: UsuarioCreateNestedOneWithoutFrequencias_registradasInput
  }

  export type FrequenciaUncheckedCreateInput = {
    id?: number
    residente_id: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    registrado_por: number
  }

  export type FrequenciaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    residente?: ResidenteUpdateOneRequiredWithoutFrequenciasNestedInput
    registradoPor?: UsuarioUpdateOneRequiredWithoutFrequencias_registradasNestedInput
  }

  export type FrequenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    registrado_por?: IntFieldUpdateOperationsInput | number
  }

  export type FrequenciaCreateManyInput = {
    id?: number
    residente_id: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    registrado_por: number
  }

  export type FrequenciaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FrequenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    registrado_por?: IntFieldUpdateOperationsInput | number
  }

  export type AtividadeCreateInput = {
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    residente: ResidenteCreateNestedOneWithoutAtividadesInput
    setor: SetorCreateNestedOneWithoutAtividadesInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeUncheckedCreateInput = {
    id?: number
    residente_id: number
    setor_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    residente?: ResidenteUpdateOneRequiredWithoutAtividadesNestedInput
    setor?: SetorUpdateOneRequiredWithoutAtividadesNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeCreateManyInput = {
    id?: number
    residente_id: number
    setor_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
  }

  export type AtividadeUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AtividadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AtividadeLogCreateInput = {
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    atividade: AtividadeCreateNestedOneWithoutAtividadeLogInput
    usuario: UsuarioCreateNestedOneWithoutAtividadeLogInput
  }

  export type AtividadeLogUncheckedCreateInput = {
    id?: number
    atividade_id: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id: number
    timestamp?: Date | string
  }

  export type AtividadeLogUpdateInput = {
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    atividade?: AtividadeUpdateOneRequiredWithoutAtividadeLogNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutAtividadeLogNestedInput
  }

  export type AtividadeLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    atividade_id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeLogCreateManyInput = {
    id?: number
    atividade_id: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id: number
    timestamp?: Date | string
  }

  export type AtividadeLogUpdateManyMutationInput = {
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    atividade_id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampoAvaliacaoCreateInput = {
    titulo: string
    descricao?: string | null
    obrigatorio?: boolean
    tipo?: $Enums.TipoCampo
    ordem?: number | null
    respostas?: RespostaAvaliacaoCreateNestedManyWithoutCampoInput
  }

  export type CampoAvaliacaoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    obrigatorio?: boolean
    tipo?: $Enums.TipoCampo
    ordem?: number | null
    respostas?: RespostaAvaliacaoUncheckedCreateNestedManyWithoutCampoInput
  }

  export type CampoAvaliacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    respostas?: RespostaAvaliacaoUpdateManyWithoutCampoNestedInput
  }

  export type CampoAvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    respostas?: RespostaAvaliacaoUncheckedUpdateManyWithoutCampoNestedInput
  }

  export type CampoAvaliacaoCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    obrigatorio?: boolean
    tipo?: $Enums.TipoCampo
    ordem?: number | null
  }

  export type CampoAvaliacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CampoAvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvaliacaoCreateInput = {
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    residente: ResidenteCreateNestedOneWithoutAvaliacoesInput
    supervisor: SupervisorCreateNestedOneWithoutAvaliacoesInput
    respostas?: RespostaAvaliacaoCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    respostas?: RespostaAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUpdateInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneRequiredWithoutAvaliacoesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutAvaliacoesNestedInput
    respostas?: RespostaAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaAvaliacaoCreateInput = {
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
    avaliacao: AvaliacaoCreateNestedOneWithoutRespostasInput
    campo: CampoAvaliacaoCreateNestedOneWithoutRespostasInput
  }

  export type RespostaAvaliacaoUncheckedCreateInput = {
    id?: number
    avaliacao_id: number
    campo_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type RespostaAvaliacaoUpdateInput = {
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutRespostasNestedInput
    campo?: CampoAvaliacaoUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostaAvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    campo_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RespostaAvaliacaoCreateManyInput = {
    id?: number
    avaliacao_id: number
    campo_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type RespostaAvaliacaoUpdateManyMutationInput = {
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RespostaAvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    campo_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ComentarioCreateInput = {
    comentario: string
    criado_em?: Date | string
    avaliacao: AvaliacaoCreateNestedOneWithoutComentariosInput
    supervisor: SupervisorCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    avaliacao_id: number
    supervisor_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type ComentarioUpdateInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutComentariosNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyInput = {
    id?: number
    avaliacao_id: number
    supervisor_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type ComentarioUpdateManyMutationInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcessoCreateInput = {
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
    usuario: UsuarioCreateNestedOneWithoutLogsInput
  }

  export type LogAcessoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
  }

  export type LogAcessoUpdateInput = {
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogAcessoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAcessoCreateManyInput = {
    id?: number
    usuario_id: number
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
  }

  export type LogAcessoUpdateManyMutationInput = {
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAcessoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoCreateInput = {
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
    usuario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
  }

  export type NotificacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: number
    usuario_id: number
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ResidenteListRelationFilter = {
    every?: ResidenteWhereInput
    some?: ResidenteWhereInput
    none?: ResidenteWhereInput
  }

  export type SupervisorListRelationFilter = {
    every?: SupervisorWhereInput
    some?: SupervisorWhereInput
    none?: SupervisorWhereInput
  }

  export type AtividadeListRelationFilter = {
    every?: AtividadeWhereInput
    some?: AtividadeWhereInput
    none?: AtividadeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResidenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetorOrderByRelevanceInput = {
    fields: SetorOrderByRelevanceFieldEnum | SetorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SetorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorSumOrderByAggregateInput = {
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

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ResidenteNullableScalarRelationFilter = {
    is?: ResidenteWhereInput | null
    isNot?: ResidenteWhereInput | null
  }

  export type SupervisorNullableScalarRelationFilter = {
    is?: SupervisorWhereInput | null
    isNot?: SupervisorWhereInput | null
  }

  export type AdministradorNullableScalarRelationFilter = {
    is?: AdministradorWhereInput | null
    isNot?: AdministradorWhereInput | null
  }

  export type LogAcessoListRelationFilter = {
    every?: LogAcessoWhereInput
    some?: LogAcessoWhereInput
    none?: LogAcessoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type FrequenciaListRelationFilter = {
    every?: FrequenciaWhereInput
    some?: FrequenciaWhereInput
    none?: FrequenciaWhereInput
  }

  export type AtividadeLogListRelationFilter = {
    every?: AtividadeLogWhereInput
    some?: AtividadeLogWhereInput
    none?: AtividadeLogWhereInput
  }

  export type LogAcessoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FrequenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SetorNullableScalarRelationFilter = {
    is?: SetorWhereInput | null
    isNot?: SetorWhereInput | null
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResidenteOrderByRelevanceInput = {
    fields: ResidenteOrderByRelevanceFieldEnum | ResidenteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResidenteCountOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    ano_residencia?: SortOrder
    setor_id?: SortOrder
  }

  export type ResidenteAvgOrderByAggregateInput = {
    id?: SortOrder
    ano_residencia?: SortOrder
    setor_id?: SortOrder
  }

  export type ResidenteMaxOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    ano_residencia?: SortOrder
    setor_id?: SortOrder
  }

  export type ResidenteMinOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    ano_residencia?: SortOrder
    setor_id?: SortOrder
  }

  export type ResidenteSumOrderByAggregateInput = {
    id?: SortOrder
    ano_residencia?: SortOrder
    setor_id?: SortOrder
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

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisorOrderByRelevanceInput = {
    fields: SupervisorOrderByRelevanceFieldEnum | SupervisorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupervisorCountOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    setor_id?: SortOrder
  }

  export type SupervisorAvgOrderByAggregateInput = {
    id?: SortOrder
    setor_id?: SortOrder
  }

  export type SupervisorMaxOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    setor_id?: SortOrder
  }

  export type SupervisorMinOrderByAggregateInput = {
    id?: SortOrder
    crm?: SortOrder
    setor_id?: SortOrder
  }

  export type SupervisorSumOrderByAggregateInput = {
    id?: SortOrder
    setor_id?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ResidenteScalarRelationFilter = {
    is?: ResidenteWhereInput
    isNot?: ResidenteWhereInput
  }

  export type FrequenciaOrderByRelevanceInput = {
    fields: FrequenciaOrderByRelevanceFieldEnum | FrequenciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FrequenciaResidente_idDataCompoundUniqueInput = {
    residente_id: number
    data: Date | string
  }

  export type FrequenciaCountOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    data?: SortOrder
    presente?: SortOrder
    horario_chegada?: SortOrder
    inicio_intervalo?: SortOrder
    fim_intervalo?: SortOrder
    horario_saida?: SortOrder
    observacoes?: SortOrder
    registrado_por?: SortOrder
  }

  export type FrequenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    registrado_por?: SortOrder
  }

  export type FrequenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    data?: SortOrder
    presente?: SortOrder
    horario_chegada?: SortOrder
    inicio_intervalo?: SortOrder
    fim_intervalo?: SortOrder
    horario_saida?: SortOrder
    observacoes?: SortOrder
    registrado_por?: SortOrder
  }

  export type FrequenciaMinOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    data?: SortOrder
    presente?: SortOrder
    horario_chegada?: SortOrder
    inicio_intervalo?: SortOrder
    fim_intervalo?: SortOrder
    horario_saida?: SortOrder
    observacoes?: SortOrder
    registrado_por?: SortOrder
  }

  export type FrequenciaSumOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    registrado_por?: SortOrder
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

  export type SetorScalarRelationFilter = {
    is?: SetorWhereInput
    isNot?: SetorWhereInput
  }

  export type AtividadeOrderByRelevanceInput = {
    fields: AtividadeOrderByRelevanceFieldEnum | AtividadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtividadeResidente_idData_atividadeDescricaoCompoundUniqueInput = {
    residente_id: number
    data_atividade: Date | string
    descricao: string
  }

  export type AtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
    descricao?: SortOrder
    data_atividade?: SortOrder
    data_finalizacao?: SortOrder
    criado_em?: SortOrder
    finalizada?: SortOrder
  }

  export type AtividadeAvgOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
  }

  export type AtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
    descricao?: SortOrder
    data_atividade?: SortOrder
    data_finalizacao?: SortOrder
    criado_em?: SortOrder
    finalizada?: SortOrder
  }

  export type AtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
    descricao?: SortOrder
    data_atividade?: SortOrder
    data_finalizacao?: SortOrder
    criado_em?: SortOrder
    finalizada?: SortOrder
  }

  export type AtividadeSumOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    setor_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AtividadeScalarRelationFilter = {
    is?: AtividadeWhereInput
    isNot?: AtividadeWhereInput
  }

  export type AtividadeLogOrderByRelevanceInput = {
    fields: AtividadeLogOrderByRelevanceFieldEnum | AtividadeLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtividadeLogCountOrderByAggregateInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    acao?: SortOrder
    dados_anteriores?: SortOrder
    dados_novos?: SortOrder
    usuario_id?: SortOrder
    timestamp?: SortOrder
  }

  export type AtividadeLogAvgOrderByAggregateInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type AtividadeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    acao?: SortOrder
    usuario_id?: SortOrder
    timestamp?: SortOrder
  }

  export type AtividadeLogMinOrderByAggregateInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    acao?: SortOrder
    usuario_id?: SortOrder
    timestamp?: SortOrder
  }

  export type AtividadeLogSumOrderByAggregateInput = {
    id?: SortOrder
    atividade_id?: SortOrder
    usuario_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTipoCampoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCampo | EnumTipoCampoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCampo[]
    notIn?: $Enums.TipoCampo[]
    not?: NestedEnumTipoCampoFilter<$PrismaModel> | $Enums.TipoCampo
  }

  export type RespostaAvaliacaoListRelationFilter = {
    every?: RespostaAvaliacaoWhereInput
    some?: RespostaAvaliacaoWhereInput
    none?: RespostaAvaliacaoWhereInput
  }

  export type RespostaAvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampoAvaliacaoOrderByRelevanceInput = {
    fields: CampoAvaliacaoOrderByRelevanceFieldEnum | CampoAvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CampoAvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    obrigatorio?: SortOrder
    tipo?: SortOrder
    ordem?: SortOrder
  }

  export type CampoAvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type CampoAvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    obrigatorio?: SortOrder
    tipo?: SortOrder
    ordem?: SortOrder
  }

  export type CampoAvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    obrigatorio?: SortOrder
    tipo?: SortOrder
    ordem?: SortOrder
  }

  export type CampoAvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type EnumTipoCampoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCampo | EnumTipoCampoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCampo[]
    notIn?: $Enums.TipoCampo[]
    not?: NestedEnumTipoCampoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCampo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCampoFilter<$PrismaModel>
    _max?: NestedEnumTipoCampoFilter<$PrismaModel>
  }

  export type SupervisorScalarRelationFilter = {
    is?: SupervisorWhereInput
    isNot?: SupervisorWhereInput
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
    data_avaliacao?: SortOrder
    periodo_inicio?: SortOrder
    periodo_fim?: SortOrder
    criado_em?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
    data_avaliacao?: SortOrder
    periodo_inicio?: SortOrder
    periodo_fim?: SortOrder
    criado_em?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
    data_avaliacao?: SortOrder
    periodo_inicio?: SortOrder
    periodo_fim?: SortOrder
    criado_em?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    residente_id?: SortOrder
    supervisor_id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: AvaliacaoWhereInput
    isNot?: AvaliacaoWhereInput
  }

  export type CampoAvaliacaoScalarRelationFilter = {
    is?: CampoAvaliacaoWhereInput
    isNot?: CampoAvaliacaoWhereInput
  }

  export type RespostaAvaliacaoOrderByRelevanceInput = {
    fields: RespostaAvaliacaoOrderByRelevanceFieldEnum | RespostaAvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RespostaAvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_texto?: SortOrder
    resposta_numerica?: SortOrder
    resposta_checkbox?: SortOrder
  }

  export type RespostaAvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_numerica?: SortOrder
  }

  export type RespostaAvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_texto?: SortOrder
    resposta_numerica?: SortOrder
    resposta_checkbox?: SortOrder
  }

  export type RespostaAvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_texto?: SortOrder
    resposta_numerica?: SortOrder
    resposta_checkbox?: SortOrder
  }

  export type RespostaAvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    campo_id?: SortOrder
    resposta_numerica?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ComentarioOrderByRelevanceInput = {
    fields: ComentarioOrderByRelevanceFieldEnum | ComentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    avaliacao_id?: SortOrder
    supervisor_id?: SortOrder
  }

  export type LogAcessoOrderByRelevanceInput = {
    fields: LogAcessoOrderByRelevanceFieldEnum | LogAcessoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogAcessoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    data_hora?: SortOrder
    acao?: SortOrder
  }

  export type LogAcessoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type LogAcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    data_hora?: SortOrder
    acao?: SortOrder
  }

  export type LogAcessoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    data_hora?: SortOrder
    acao?: SortOrder
  }

  export type LogAcessoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type NotificacaoOrderByRelevanceInput = {
    fields: NotificacaoOrderByRelevanceFieldEnum | NotificacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    data_envio?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    data_envio?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    data_envio?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type ResidenteCreateNestedManyWithoutSetorInput = {
    create?: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput> | ResidenteCreateWithoutSetorInput[] | ResidenteUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: ResidenteCreateOrConnectWithoutSetorInput | ResidenteCreateOrConnectWithoutSetorInput[]
    createMany?: ResidenteCreateManySetorInputEnvelope
    connect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
  }

  export type SupervisorCreateNestedManyWithoutSetorInput = {
    create?: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput> | SupervisorCreateWithoutSetorInput[] | SupervisorUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: SupervisorCreateOrConnectWithoutSetorInput | SupervisorCreateOrConnectWithoutSetorInput[]
    createMany?: SupervisorCreateManySetorInputEnvelope
    connect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutSetorInput = {
    create?: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput> | AtividadeCreateWithoutSetorInput[] | AtividadeUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutSetorInput | AtividadeCreateOrConnectWithoutSetorInput[]
    createMany?: AtividadeCreateManySetorInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type ResidenteUncheckedCreateNestedManyWithoutSetorInput = {
    create?: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput> | ResidenteCreateWithoutSetorInput[] | ResidenteUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: ResidenteCreateOrConnectWithoutSetorInput | ResidenteCreateOrConnectWithoutSetorInput[]
    createMany?: ResidenteCreateManySetorInputEnvelope
    connect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
  }

  export type SupervisorUncheckedCreateNestedManyWithoutSetorInput = {
    create?: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput> | SupervisorCreateWithoutSetorInput[] | SupervisorUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: SupervisorCreateOrConnectWithoutSetorInput | SupervisorCreateOrConnectWithoutSetorInput[]
    createMany?: SupervisorCreateManySetorInputEnvelope
    connect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutSetorInput = {
    create?: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput> | AtividadeCreateWithoutSetorInput[] | AtividadeUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutSetorInput | AtividadeCreateOrConnectWithoutSetorInput[]
    createMany?: AtividadeCreateManySetorInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ResidenteUpdateManyWithoutSetorNestedInput = {
    create?: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput> | ResidenteCreateWithoutSetorInput[] | ResidenteUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: ResidenteCreateOrConnectWithoutSetorInput | ResidenteCreateOrConnectWithoutSetorInput[]
    upsert?: ResidenteUpsertWithWhereUniqueWithoutSetorInput | ResidenteUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: ResidenteCreateManySetorInputEnvelope
    set?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    disconnect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    delete?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    connect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    update?: ResidenteUpdateWithWhereUniqueWithoutSetorInput | ResidenteUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: ResidenteUpdateManyWithWhereWithoutSetorInput | ResidenteUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: ResidenteScalarWhereInput | ResidenteScalarWhereInput[]
  }

  export type SupervisorUpdateManyWithoutSetorNestedInput = {
    create?: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput> | SupervisorCreateWithoutSetorInput[] | SupervisorUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: SupervisorCreateOrConnectWithoutSetorInput | SupervisorCreateOrConnectWithoutSetorInput[]
    upsert?: SupervisorUpsertWithWhereUniqueWithoutSetorInput | SupervisorUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: SupervisorCreateManySetorInputEnvelope
    set?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    disconnect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    delete?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    connect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    update?: SupervisorUpdateWithWhereUniqueWithoutSetorInput | SupervisorUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: SupervisorUpdateManyWithWhereWithoutSetorInput | SupervisorUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: SupervisorScalarWhereInput | SupervisorScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutSetorNestedInput = {
    create?: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput> | AtividadeCreateWithoutSetorInput[] | AtividadeUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutSetorInput | AtividadeCreateOrConnectWithoutSetorInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutSetorInput | AtividadeUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: AtividadeCreateManySetorInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutSetorInput | AtividadeUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutSetorInput | AtividadeUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResidenteUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput> | ResidenteCreateWithoutSetorInput[] | ResidenteUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: ResidenteCreateOrConnectWithoutSetorInput | ResidenteCreateOrConnectWithoutSetorInput[]
    upsert?: ResidenteUpsertWithWhereUniqueWithoutSetorInput | ResidenteUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: ResidenteCreateManySetorInputEnvelope
    set?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    disconnect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    delete?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    connect?: ResidenteWhereUniqueInput | ResidenteWhereUniqueInput[]
    update?: ResidenteUpdateWithWhereUniqueWithoutSetorInput | ResidenteUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: ResidenteUpdateManyWithWhereWithoutSetorInput | ResidenteUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: ResidenteScalarWhereInput | ResidenteScalarWhereInput[]
  }

  export type SupervisorUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput> | SupervisorCreateWithoutSetorInput[] | SupervisorUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: SupervisorCreateOrConnectWithoutSetorInput | SupervisorCreateOrConnectWithoutSetorInput[]
    upsert?: SupervisorUpsertWithWhereUniqueWithoutSetorInput | SupervisorUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: SupervisorCreateManySetorInputEnvelope
    set?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    disconnect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    delete?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    connect?: SupervisorWhereUniqueInput | SupervisorWhereUniqueInput[]
    update?: SupervisorUpdateWithWhereUniqueWithoutSetorInput | SupervisorUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: SupervisorUpdateManyWithWhereWithoutSetorInput | SupervisorUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: SupervisorScalarWhereInput | SupervisorScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput> | AtividadeCreateWithoutSetorInput[] | AtividadeUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutSetorInput | AtividadeCreateOrConnectWithoutSetorInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutSetorInput | AtividadeUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: AtividadeCreateManySetorInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutSetorInput | AtividadeUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutSetorInput | AtividadeUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type ResidenteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutUsuarioInput
    connect?: ResidenteWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUsuarioInput
    connect?: SupervisorWhereUniqueInput
  }

  export type AdministradorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
  }

  export type LogAcessoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput> | LogAcessoCreateWithoutUsuarioInput[] | LogAcessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcessoCreateOrConnectWithoutUsuarioInput | LogAcessoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAcessoCreateManyUsuarioInputEnvelope
    connect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type FrequenciaCreateNestedManyWithoutRegistradoPorInput = {
    create?: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput> | FrequenciaCreateWithoutRegistradoPorInput[] | FrequenciaUncheckedCreateWithoutRegistradoPorInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutRegistradoPorInput | FrequenciaCreateOrConnectWithoutRegistradoPorInput[]
    createMany?: FrequenciaCreateManyRegistradoPorInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type AtividadeLogCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput> | AtividadeLogCreateWithoutUsuarioInput[] | AtividadeLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutUsuarioInput | AtividadeLogCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtividadeLogCreateManyUsuarioInputEnvelope
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
  }

  export type ResidenteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutUsuarioInput
    connect?: ResidenteWhereUniqueInput
  }

  export type SupervisorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUsuarioInput
    connect?: SupervisorWhereUniqueInput
  }

  export type AdministradorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
  }

  export type LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput> | LogAcessoCreateWithoutUsuarioInput[] | LogAcessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcessoCreateOrConnectWithoutUsuarioInput | LogAcessoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAcessoCreateManyUsuarioInputEnvelope
    connect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput = {
    create?: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput> | FrequenciaCreateWithoutRegistradoPorInput[] | FrequenciaUncheckedCreateWithoutRegistradoPorInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutRegistradoPorInput | FrequenciaCreateOrConnectWithoutRegistradoPorInput[]
    createMany?: FrequenciaCreateManyRegistradoPorInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput> | AtividadeLogCreateWithoutUsuarioInput[] | AtividadeLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutUsuarioInput | AtividadeLogCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtividadeLogCreateManyUsuarioInputEnvelope
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResidenteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutUsuarioInput
    upsert?: ResidenteUpsertWithoutUsuarioInput
    disconnect?: ResidenteWhereInput | boolean
    delete?: ResidenteWhereInput | boolean
    connect?: ResidenteWhereUniqueInput
    update?: XOR<XOR<ResidenteUpdateToOneWithWhereWithoutUsuarioInput, ResidenteUpdateWithoutUsuarioInput>, ResidenteUncheckedUpdateWithoutUsuarioInput>
  }

  export type SupervisorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUsuarioInput
    upsert?: SupervisorUpsertWithoutUsuarioInput
    disconnect?: SupervisorWhereInput | boolean
    delete?: SupervisorWhereInput | boolean
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutUsuarioInput, SupervisorUpdateWithoutUsuarioInput>, SupervisorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAcessoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput> | LogAcessoCreateWithoutUsuarioInput[] | LogAcessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcessoCreateOrConnectWithoutUsuarioInput | LogAcessoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAcessoUpsertWithWhereUniqueWithoutUsuarioInput | LogAcessoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAcessoCreateManyUsuarioInputEnvelope
    set?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    disconnect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    delete?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    connect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    update?: LogAcessoUpdateWithWhereUniqueWithoutUsuarioInput | LogAcessoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAcessoUpdateManyWithWhereWithoutUsuarioInput | LogAcessoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAcessoScalarWhereInput | LogAcessoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type FrequenciaUpdateManyWithoutRegistradoPorNestedInput = {
    create?: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput> | FrequenciaCreateWithoutRegistradoPorInput[] | FrequenciaUncheckedCreateWithoutRegistradoPorInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutRegistradoPorInput | FrequenciaCreateOrConnectWithoutRegistradoPorInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutRegistradoPorInput | FrequenciaUpsertWithWhereUniqueWithoutRegistradoPorInput[]
    createMany?: FrequenciaCreateManyRegistradoPorInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutRegistradoPorInput | FrequenciaUpdateWithWhereUniqueWithoutRegistradoPorInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutRegistradoPorInput | FrequenciaUpdateManyWithWhereWithoutRegistradoPorInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type AtividadeLogUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput> | AtividadeLogCreateWithoutUsuarioInput[] | AtividadeLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutUsuarioInput | AtividadeLogCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeLogUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeLogUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtividadeLogCreateManyUsuarioInputEnvelope
    set?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    disconnect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    delete?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    update?: AtividadeLogUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeLogUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeLogUpdateManyWithWhereWithoutUsuarioInput | AtividadeLogUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
  }

  export type ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutUsuarioInput
    upsert?: ResidenteUpsertWithoutUsuarioInput
    disconnect?: ResidenteWhereInput | boolean
    delete?: ResidenteWhereInput | boolean
    connect?: ResidenteWhereUniqueInput
    update?: XOR<XOR<ResidenteUpdateToOneWithWhereWithoutUsuarioInput, ResidenteUpdateWithoutUsuarioInput>, ResidenteUncheckedUpdateWithoutUsuarioInput>
  }

  export type SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUsuarioInput
    upsert?: SupervisorUpsertWithoutUsuarioInput
    disconnect?: SupervisorWhereInput | boolean
    delete?: SupervisorWhereInput | boolean
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutUsuarioInput, SupervisorUpdateWithoutUsuarioInput>, SupervisorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput> | LogAcessoCreateWithoutUsuarioInput[] | LogAcessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcessoCreateOrConnectWithoutUsuarioInput | LogAcessoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAcessoUpsertWithWhereUniqueWithoutUsuarioInput | LogAcessoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAcessoCreateManyUsuarioInputEnvelope
    set?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    disconnect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    delete?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    connect?: LogAcessoWhereUniqueInput | LogAcessoWhereUniqueInput[]
    update?: LogAcessoUpdateWithWhereUniqueWithoutUsuarioInput | LogAcessoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAcessoUpdateManyWithWhereWithoutUsuarioInput | LogAcessoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAcessoScalarWhereInput | LogAcessoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput = {
    create?: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput> | FrequenciaCreateWithoutRegistradoPorInput[] | FrequenciaUncheckedCreateWithoutRegistradoPorInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutRegistradoPorInput | FrequenciaCreateOrConnectWithoutRegistradoPorInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutRegistradoPorInput | FrequenciaUpsertWithWhereUniqueWithoutRegistradoPorInput[]
    createMany?: FrequenciaCreateManyRegistradoPorInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutRegistradoPorInput | FrequenciaUpdateWithWhereUniqueWithoutRegistradoPorInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutRegistradoPorInput | FrequenciaUpdateManyWithWhereWithoutRegistradoPorInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput> | AtividadeLogCreateWithoutUsuarioInput[] | AtividadeLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutUsuarioInput | AtividadeLogCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeLogUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeLogUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtividadeLogCreateManyUsuarioInputEnvelope
    set?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    disconnect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    delete?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    update?: AtividadeLogUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeLogUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeLogUpdateManyWithWhereWithoutUsuarioInput | AtividadeLogUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutResidenteInput = {
    create?: XOR<UsuarioCreateWithoutResidenteInput, UsuarioUncheckedCreateWithoutResidenteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResidenteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SetorCreateNestedOneWithoutResidentesInput = {
    create?: XOR<SetorCreateWithoutResidentesInput, SetorUncheckedCreateWithoutResidentesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutResidentesInput
    connect?: SetorWhereUniqueInput
  }

  export type FrequenciaCreateNestedManyWithoutResidenteInput = {
    create?: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput> | FrequenciaCreateWithoutResidenteInput[] | FrequenciaUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutResidenteInput | FrequenciaCreateOrConnectWithoutResidenteInput[]
    createMany?: FrequenciaCreateManyResidenteInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutResidenteInput = {
    create?: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput> | AvaliacaoCreateWithoutResidenteInput[] | AvaliacaoUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResidenteInput | AvaliacaoCreateOrConnectWithoutResidenteInput[]
    createMany?: AvaliacaoCreateManyResidenteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutResidenteInput = {
    create?: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput> | AtividadeCreateWithoutResidenteInput[] | AtividadeUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutResidenteInput | AtividadeCreateOrConnectWithoutResidenteInput[]
    createMany?: AtividadeCreateManyResidenteInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type FrequenciaUncheckedCreateNestedManyWithoutResidenteInput = {
    create?: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput> | FrequenciaCreateWithoutResidenteInput[] | FrequenciaUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutResidenteInput | FrequenciaCreateOrConnectWithoutResidenteInput[]
    createMany?: FrequenciaCreateManyResidenteInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput = {
    create?: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput> | AvaliacaoCreateWithoutResidenteInput[] | AvaliacaoUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResidenteInput | AvaliacaoCreateOrConnectWithoutResidenteInput[]
    createMany?: AvaliacaoCreateManyResidenteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutResidenteInput = {
    create?: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput> | AtividadeCreateWithoutResidenteInput[] | AtividadeUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutResidenteInput | AtividadeCreateOrConnectWithoutResidenteInput[]
    createMany?: AtividadeCreateManyResidenteInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutResidenteNestedInput = {
    create?: XOR<UsuarioCreateWithoutResidenteInput, UsuarioUncheckedCreateWithoutResidenteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResidenteInput
    upsert?: UsuarioUpsertWithoutResidenteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResidenteInput, UsuarioUpdateWithoutResidenteInput>, UsuarioUncheckedUpdateWithoutResidenteInput>
  }

  export type SetorUpdateOneWithoutResidentesNestedInput = {
    create?: XOR<SetorCreateWithoutResidentesInput, SetorUncheckedCreateWithoutResidentesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutResidentesInput
    upsert?: SetorUpsertWithoutResidentesInput
    disconnect?: SetorWhereInput | boolean
    delete?: SetorWhereInput | boolean
    connect?: SetorWhereUniqueInput
    update?: XOR<XOR<SetorUpdateToOneWithWhereWithoutResidentesInput, SetorUpdateWithoutResidentesInput>, SetorUncheckedUpdateWithoutResidentesInput>
  }

  export type FrequenciaUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput> | FrequenciaCreateWithoutResidenteInput[] | FrequenciaUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutResidenteInput | FrequenciaCreateOrConnectWithoutResidenteInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutResidenteInput | FrequenciaUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: FrequenciaCreateManyResidenteInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutResidenteInput | FrequenciaUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutResidenteInput | FrequenciaUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput> | AvaliacaoCreateWithoutResidenteInput[] | AvaliacaoUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResidenteInput | AvaliacaoCreateOrConnectWithoutResidenteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutResidenteInput | AvaliacaoUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: AvaliacaoCreateManyResidenteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutResidenteInput | AvaliacaoUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutResidenteInput | AvaliacaoUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput> | AtividadeCreateWithoutResidenteInput[] | AtividadeUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutResidenteInput | AtividadeCreateOrConnectWithoutResidenteInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutResidenteInput | AtividadeUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: AtividadeCreateManyResidenteInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutResidenteInput | AtividadeUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutResidenteInput | AtividadeUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput> | FrequenciaCreateWithoutResidenteInput[] | FrequenciaUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutResidenteInput | FrequenciaCreateOrConnectWithoutResidenteInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutResidenteInput | FrequenciaUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: FrequenciaCreateManyResidenteInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutResidenteInput | FrequenciaUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutResidenteInput | FrequenciaUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput> | AvaliacaoCreateWithoutResidenteInput[] | AvaliacaoUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResidenteInput | AvaliacaoCreateOrConnectWithoutResidenteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutResidenteInput | AvaliacaoUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: AvaliacaoCreateManyResidenteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutResidenteInput | AvaliacaoUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutResidenteInput | AvaliacaoUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutResidenteNestedInput = {
    create?: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput> | AtividadeCreateWithoutResidenteInput[] | AtividadeUncheckedCreateWithoutResidenteInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutResidenteInput | AtividadeCreateOrConnectWithoutResidenteInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutResidenteInput | AtividadeUpsertWithWhereUniqueWithoutResidenteInput[]
    createMany?: AtividadeCreateManyResidenteInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutResidenteInput | AtividadeUpdateWithWhereUniqueWithoutResidenteInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutResidenteInput | AtividadeUpdateManyWithWhereWithoutResidenteInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SetorCreateNestedOneWithoutSupervisoresInput = {
    create?: XOR<SetorCreateWithoutSupervisoresInput, SetorUncheckedCreateWithoutSupervisoresInput>
    connectOrCreate?: SetorCreateOrConnectWithoutSupervisoresInput
    connect?: SetorWhereUniqueInput
  }

  export type AvaliacaoCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput> | ComentarioCreateWithoutSupervisorInput[] | ComentarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutSupervisorInput | ComentarioCreateOrConnectWithoutSupervisorInput[]
    createMany?: ComentarioCreateManySupervisorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput> | ComentarioCreateWithoutSupervisorInput[] | ComentarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutSupervisorInput | ComentarioCreateOrConnectWithoutSupervisorInput[]
    createMany?: ComentarioCreateManySupervisorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput
    upsert?: UsuarioUpsertWithoutSupervisorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSupervisorInput, UsuarioUpdateWithoutSupervisorInput>, UsuarioUncheckedUpdateWithoutSupervisorInput>
  }

  export type SetorUpdateOneWithoutSupervisoresNestedInput = {
    create?: XOR<SetorCreateWithoutSupervisoresInput, SetorUncheckedCreateWithoutSupervisoresInput>
    connectOrCreate?: SetorCreateOrConnectWithoutSupervisoresInput
    upsert?: SetorUpsertWithoutSupervisoresInput
    disconnect?: SetorWhereInput | boolean
    delete?: SetorWhereInput | boolean
    connect?: SetorWhereUniqueInput
    update?: XOR<XOR<SetorUpdateToOneWithWhereWithoutSupervisoresInput, SetorUpdateWithoutSupervisoresInput>, SetorUncheckedUpdateWithoutSupervisoresInput>
  }

  export type AvaliacaoUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutSupervisorInput | AvaliacaoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput> | ComentarioCreateWithoutSupervisorInput[] | ComentarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutSupervisorInput | ComentarioCreateOrConnectWithoutSupervisorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutSupervisorInput | ComentarioUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ComentarioCreateManySupervisorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutSupervisorInput | ComentarioUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutSupervisorInput | ComentarioUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutSupervisorInput | AvaliacaoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput> | ComentarioCreateWithoutSupervisorInput[] | ComentarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutSupervisorInput | ComentarioCreateOrConnectWithoutSupervisorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutSupervisorInput | ComentarioUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ComentarioCreateManySupervisorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutSupervisorInput | ComentarioUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutSupervisorInput | ComentarioUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAdministradorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    upsert?: UsuarioUpsertWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAdministradorInput, UsuarioUpdateWithoutAdministradorInput>, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type ResidenteCreateNestedOneWithoutFrequenciasInput = {
    create?: XOR<ResidenteCreateWithoutFrequenciasInput, ResidenteUncheckedCreateWithoutFrequenciasInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutFrequenciasInput
    connect?: ResidenteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFrequencias_registradasInput = {
    create?: XOR<UsuarioCreateWithoutFrequencias_registradasInput, UsuarioUncheckedCreateWithoutFrequencias_registradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFrequencias_registradasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ResidenteUpdateOneRequiredWithoutFrequenciasNestedInput = {
    create?: XOR<ResidenteCreateWithoutFrequenciasInput, ResidenteUncheckedCreateWithoutFrequenciasInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutFrequenciasInput
    upsert?: ResidenteUpsertWithoutFrequenciasInput
    connect?: ResidenteWhereUniqueInput
    update?: XOR<XOR<ResidenteUpdateToOneWithWhereWithoutFrequenciasInput, ResidenteUpdateWithoutFrequenciasInput>, ResidenteUncheckedUpdateWithoutFrequenciasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFrequencias_registradasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFrequencias_registradasInput, UsuarioUncheckedCreateWithoutFrequencias_registradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFrequencias_registradasInput
    upsert?: UsuarioUpsertWithoutFrequencias_registradasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFrequencias_registradasInput, UsuarioUpdateWithoutFrequencias_registradasInput>, UsuarioUncheckedUpdateWithoutFrequencias_registradasInput>
  }

  export type ResidenteCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<ResidenteCreateWithoutAtividadesInput, ResidenteUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutAtividadesInput
    connect?: ResidenteWhereUniqueInput
  }

  export type SetorCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<SetorCreateWithoutAtividadesInput, SetorUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutAtividadesInput
    connect?: SetorWhereUniqueInput
  }

  export type AtividadeLogCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput> | AtividadeLogCreateWithoutAtividadeInput[] | AtividadeLogUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutAtividadeInput | AtividadeLogCreateOrConnectWithoutAtividadeInput[]
    createMany?: AtividadeLogCreateManyAtividadeInputEnvelope
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
  }

  export type AtividadeLogUncheckedCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput> | AtividadeLogCreateWithoutAtividadeInput[] | AtividadeLogUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutAtividadeInput | AtividadeLogCreateOrConnectWithoutAtividadeInput[]
    createMany?: AtividadeLogCreateManyAtividadeInputEnvelope
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
  }

  export type ResidenteUpdateOneRequiredWithoutAtividadesNestedInput = {
    create?: XOR<ResidenteCreateWithoutAtividadesInput, ResidenteUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutAtividadesInput
    upsert?: ResidenteUpsertWithoutAtividadesInput
    connect?: ResidenteWhereUniqueInput
    update?: XOR<XOR<ResidenteUpdateToOneWithWhereWithoutAtividadesInput, ResidenteUpdateWithoutAtividadesInput>, ResidenteUncheckedUpdateWithoutAtividadesInput>
  }

  export type SetorUpdateOneRequiredWithoutAtividadesNestedInput = {
    create?: XOR<SetorCreateWithoutAtividadesInput, SetorUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutAtividadesInput
    upsert?: SetorUpsertWithoutAtividadesInput
    connect?: SetorWhereUniqueInput
    update?: XOR<XOR<SetorUpdateToOneWithWhereWithoutAtividadesInput, SetorUpdateWithoutAtividadesInput>, SetorUncheckedUpdateWithoutAtividadesInput>
  }

  export type AtividadeLogUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput> | AtividadeLogCreateWithoutAtividadeInput[] | AtividadeLogUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutAtividadeInput | AtividadeLogCreateOrConnectWithoutAtividadeInput[]
    upsert?: AtividadeLogUpsertWithWhereUniqueWithoutAtividadeInput | AtividadeLogUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: AtividadeLogCreateManyAtividadeInputEnvelope
    set?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    disconnect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    delete?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    update?: AtividadeLogUpdateWithWhereUniqueWithoutAtividadeInput | AtividadeLogUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: AtividadeLogUpdateManyWithWhereWithoutAtividadeInput | AtividadeLogUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
  }

  export type AtividadeLogUncheckedUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput> | AtividadeLogCreateWithoutAtividadeInput[] | AtividadeLogUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: AtividadeLogCreateOrConnectWithoutAtividadeInput | AtividadeLogCreateOrConnectWithoutAtividadeInput[]
    upsert?: AtividadeLogUpsertWithWhereUniqueWithoutAtividadeInput | AtividadeLogUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: AtividadeLogCreateManyAtividadeInputEnvelope
    set?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    disconnect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    delete?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    connect?: AtividadeLogWhereUniqueInput | AtividadeLogWhereUniqueInput[]
    update?: AtividadeLogUpdateWithWhereUniqueWithoutAtividadeInput | AtividadeLogUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: AtividadeLogUpdateManyWithWhereWithoutAtividadeInput | AtividadeLogUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
  }

  export type AtividadeCreateNestedOneWithoutAtividadeLogInput = {
    create?: XOR<AtividadeCreateWithoutAtividadeLogInput, AtividadeUncheckedCreateWithoutAtividadeLogInput>
    connectOrCreate?: AtividadeCreateOrConnectWithoutAtividadeLogInput
    connect?: AtividadeWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtividadeLogInput = {
    create?: XOR<UsuarioCreateWithoutAtividadeLogInput, UsuarioUncheckedCreateWithoutAtividadeLogInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividadeLogInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AtividadeUpdateOneRequiredWithoutAtividadeLogNestedInput = {
    create?: XOR<AtividadeCreateWithoutAtividadeLogInput, AtividadeUncheckedCreateWithoutAtividadeLogInput>
    connectOrCreate?: AtividadeCreateOrConnectWithoutAtividadeLogInput
    upsert?: AtividadeUpsertWithoutAtividadeLogInput
    connect?: AtividadeWhereUniqueInput
    update?: XOR<XOR<AtividadeUpdateToOneWithWhereWithoutAtividadeLogInput, AtividadeUpdateWithoutAtividadeLogInput>, AtividadeUncheckedUpdateWithoutAtividadeLogInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAtividadeLogNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtividadeLogInput, UsuarioUncheckedCreateWithoutAtividadeLogInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividadeLogInput
    upsert?: UsuarioUpsertWithoutAtividadeLogInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtividadeLogInput, UsuarioUpdateWithoutAtividadeLogInput>, UsuarioUncheckedUpdateWithoutAtividadeLogInput>
  }

  export type RespostaAvaliacaoCreateNestedManyWithoutCampoInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput> | RespostaAvaliacaoCreateWithoutCampoInput[] | RespostaAvaliacaoUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutCampoInput | RespostaAvaliacaoCreateOrConnectWithoutCampoInput[]
    createMany?: RespostaAvaliacaoCreateManyCampoInputEnvelope
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
  }

  export type RespostaAvaliacaoUncheckedCreateNestedManyWithoutCampoInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput> | RespostaAvaliacaoCreateWithoutCampoInput[] | RespostaAvaliacaoUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutCampoInput | RespostaAvaliacaoCreateOrConnectWithoutCampoInput[]
    createMany?: RespostaAvaliacaoCreateManyCampoInputEnvelope
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
  }

  export type EnumTipoCampoFieldUpdateOperationsInput = {
    set?: $Enums.TipoCampo
  }

  export type RespostaAvaliacaoUpdateManyWithoutCampoNestedInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput> | RespostaAvaliacaoCreateWithoutCampoInput[] | RespostaAvaliacaoUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutCampoInput | RespostaAvaliacaoCreateOrConnectWithoutCampoInput[]
    upsert?: RespostaAvaliacaoUpsertWithWhereUniqueWithoutCampoInput | RespostaAvaliacaoUpsertWithWhereUniqueWithoutCampoInput[]
    createMany?: RespostaAvaliacaoCreateManyCampoInputEnvelope
    set?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    disconnect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    delete?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    update?: RespostaAvaliacaoUpdateWithWhereUniqueWithoutCampoInput | RespostaAvaliacaoUpdateWithWhereUniqueWithoutCampoInput[]
    updateMany?: RespostaAvaliacaoUpdateManyWithWhereWithoutCampoInput | RespostaAvaliacaoUpdateManyWithWhereWithoutCampoInput[]
    deleteMany?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
  }

  export type RespostaAvaliacaoUncheckedUpdateManyWithoutCampoNestedInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput> | RespostaAvaliacaoCreateWithoutCampoInput[] | RespostaAvaliacaoUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutCampoInput | RespostaAvaliacaoCreateOrConnectWithoutCampoInput[]
    upsert?: RespostaAvaliacaoUpsertWithWhereUniqueWithoutCampoInput | RespostaAvaliacaoUpsertWithWhereUniqueWithoutCampoInput[]
    createMany?: RespostaAvaliacaoCreateManyCampoInputEnvelope
    set?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    disconnect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    delete?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    update?: RespostaAvaliacaoUpdateWithWhereUniqueWithoutCampoInput | RespostaAvaliacaoUpdateWithWhereUniqueWithoutCampoInput[]
    updateMany?: RespostaAvaliacaoUpdateManyWithWhereWithoutCampoInput | RespostaAvaliacaoUpdateManyWithWhereWithoutCampoInput[]
    deleteMany?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
  }

  export type ResidenteCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ResidenteCreateWithoutAvaliacoesInput, ResidenteUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutAvaliacoesInput
    connect?: ResidenteWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<SupervisorCreateWithoutAvaliacoesInput, SupervisorUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutAvaliacoesInput
    connect?: SupervisorWhereUniqueInput
  }

  export type RespostaAvaliacaoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | RespostaAvaliacaoCreateWithoutAvaliacaoInput[] | RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput | RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: RespostaAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput> | ComentarioCreateWithoutAvaliacaoInput[] | ComentarioUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAvaliacaoInput | ComentarioCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ComentarioCreateManyAvaliacaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type RespostaAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | RespostaAvaliacaoCreateWithoutAvaliacaoInput[] | RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput | RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: RespostaAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput> | ComentarioCreateWithoutAvaliacaoInput[] | ComentarioUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAvaliacaoInput | ComentarioCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ComentarioCreateManyAvaliacaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ResidenteUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<ResidenteCreateWithoutAvaliacoesInput, ResidenteUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ResidenteCreateOrConnectWithoutAvaliacoesInput
    upsert?: ResidenteUpsertWithoutAvaliacoesInput
    connect?: ResidenteWhereUniqueInput
    update?: XOR<XOR<ResidenteUpdateToOneWithWhereWithoutAvaliacoesInput, ResidenteUpdateWithoutAvaliacoesInput>, ResidenteUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type SupervisorUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<SupervisorCreateWithoutAvaliacoesInput, SupervisorUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutAvaliacoesInput
    upsert?: SupervisorUpsertWithoutAvaliacoesInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutAvaliacoesInput, SupervisorUpdateWithoutAvaliacoesInput>, SupervisorUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type RespostaAvaliacaoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | RespostaAvaliacaoCreateWithoutAvaliacaoInput[] | RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput | RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: RespostaAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | RespostaAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: RespostaAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    disconnect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    delete?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    update?: RespostaAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | RespostaAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: RespostaAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | RespostaAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput> | ComentarioCreateWithoutAvaliacaoInput[] | ComentarioUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAvaliacaoInput | ComentarioCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAvaliacaoInput | ComentarioUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ComentarioCreateManyAvaliacaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAvaliacaoInput | ComentarioUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAvaliacaoInput | ComentarioUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | RespostaAvaliacaoCreateWithoutAvaliacaoInput[] | RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput | RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: RespostaAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | RespostaAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: RespostaAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    disconnect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    delete?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    connect?: RespostaAvaliacaoWhereUniqueInput | RespostaAvaliacaoWhereUniqueInput[]
    update?: RespostaAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | RespostaAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: RespostaAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | RespostaAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput> | ComentarioCreateWithoutAvaliacaoInput[] | ComentarioUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAvaliacaoInput | ComentarioCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAvaliacaoInput | ComentarioUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ComentarioCreateManyAvaliacaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAvaliacaoInput | ComentarioUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAvaliacaoInput | ComentarioUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type AvaliacaoCreateNestedOneWithoutRespostasInput = {
    create?: XOR<AvaliacaoCreateWithoutRespostasInput, AvaliacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRespostasInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type CampoAvaliacaoCreateNestedOneWithoutRespostasInput = {
    create?: XOR<CampoAvaliacaoCreateWithoutRespostasInput, CampoAvaliacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: CampoAvaliacaoCreateOrConnectWithoutRespostasInput
    connect?: CampoAvaliacaoWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AvaliacaoUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutRespostasInput, AvaliacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRespostasInput
    upsert?: AvaliacaoUpsertWithoutRespostasInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutRespostasInput, AvaliacaoUpdateWithoutRespostasInput>, AvaliacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type CampoAvaliacaoUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<CampoAvaliacaoCreateWithoutRespostasInput, CampoAvaliacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: CampoAvaliacaoCreateOrConnectWithoutRespostasInput
    upsert?: CampoAvaliacaoUpsertWithoutRespostasInput
    connect?: CampoAvaliacaoWhereUniqueInput
    update?: XOR<XOR<CampoAvaliacaoUpdateToOneWithWhereWithoutRespostasInput, CampoAvaliacaoUpdateWithoutRespostasInput>, CampoAvaliacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type AvaliacaoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<AvaliacaoCreateWithoutComentariosInput, AvaliacaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComentariosInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutComentariosInput = {
    create?: XOR<SupervisorCreateWithoutComentariosInput, SupervisorUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutComentariosInput
    connect?: SupervisorWhereUniqueInput
  }

  export type AvaliacaoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutComentariosInput, AvaliacaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComentariosInput
    upsert?: AvaliacaoUpsertWithoutComentariosInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutComentariosInput, AvaliacaoUpdateWithoutComentariosInput>, AvaliacaoUncheckedUpdateWithoutComentariosInput>
  }

  export type SupervisorUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<SupervisorCreateWithoutComentariosInput, SupervisorUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutComentariosInput
    upsert?: SupervisorUpsertWithoutComentariosInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutComentariosInput, SupervisorUpdateWithoutComentariosInput>, SupervisorUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutLogsInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    upsert?: UsuarioUpsertWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogsInput, UsuarioUpdateWithoutLogsInput>, UsuarioUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
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

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTipoCampoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCampo | EnumTipoCampoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCampo[]
    notIn?: $Enums.TipoCampo[]
    not?: NestedEnumTipoCampoFilter<$PrismaModel> | $Enums.TipoCampo
  }

  export type NestedEnumTipoCampoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCampo | EnumTipoCampoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCampo[]
    notIn?: $Enums.TipoCampo[]
    not?: NestedEnumTipoCampoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCampo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCampoFilter<$PrismaModel>
    _max?: NestedEnumTipoCampoFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ResidenteCreateWithoutSetorInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    usuario: UsuarioCreateNestedOneWithoutResidenteInput
    frequencias?: FrequenciaCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateWithoutSetorInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteCreateOrConnectWithoutSetorInput = {
    where: ResidenteWhereUniqueInput
    create: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput>
  }

  export type ResidenteCreateManySetorInputEnvelope = {
    data: ResidenteCreateManySetorInput | ResidenteCreateManySetorInput[]
    skipDuplicates?: boolean
  }

  export type SupervisorCreateWithoutSetorInput = {
    crm?: string | null
    usuario: UsuarioCreateNestedOneWithoutSupervisorInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutSetorInput = {
    id: number
    crm?: string | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutSetorInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput>
  }

  export type SupervisorCreateManySetorInputEnvelope = {
    data: SupervisorCreateManySetorInput | SupervisorCreateManySetorInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutSetorInput = {
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    residente: ResidenteCreateNestedOneWithoutAtividadesInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeUncheckedCreateWithoutSetorInput = {
    id?: number
    residente_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeCreateOrConnectWithoutSetorInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput>
  }

  export type AtividadeCreateManySetorInputEnvelope = {
    data: AtividadeCreateManySetorInput | AtividadeCreateManySetorInput[]
    skipDuplicates?: boolean
  }

  export type ResidenteUpsertWithWhereUniqueWithoutSetorInput = {
    where: ResidenteWhereUniqueInput
    update: XOR<ResidenteUpdateWithoutSetorInput, ResidenteUncheckedUpdateWithoutSetorInput>
    create: XOR<ResidenteCreateWithoutSetorInput, ResidenteUncheckedCreateWithoutSetorInput>
  }

  export type ResidenteUpdateWithWhereUniqueWithoutSetorInput = {
    where: ResidenteWhereUniqueInput
    data: XOR<ResidenteUpdateWithoutSetorInput, ResidenteUncheckedUpdateWithoutSetorInput>
  }

  export type ResidenteUpdateManyWithWhereWithoutSetorInput = {
    where: ResidenteScalarWhereInput
    data: XOR<ResidenteUpdateManyMutationInput, ResidenteUncheckedUpdateManyWithoutSetorInput>
  }

  export type ResidenteScalarWhereInput = {
    AND?: ResidenteScalarWhereInput | ResidenteScalarWhereInput[]
    OR?: ResidenteScalarWhereInput[]
    NOT?: ResidenteScalarWhereInput | ResidenteScalarWhereInput[]
    id?: IntFilter<"Residente"> | number
    crm?: StringNullableFilter<"Residente"> | string | null
    especialidade?: StringNullableFilter<"Residente"> | string | null
    ano_residencia?: IntNullableFilter<"Residente"> | number | null
    setor_id?: IntNullableFilter<"Residente"> | number | null
  }

  export type SupervisorUpsertWithWhereUniqueWithoutSetorInput = {
    where: SupervisorWhereUniqueInput
    update: XOR<SupervisorUpdateWithoutSetorInput, SupervisorUncheckedUpdateWithoutSetorInput>
    create: XOR<SupervisorCreateWithoutSetorInput, SupervisorUncheckedCreateWithoutSetorInput>
  }

  export type SupervisorUpdateWithWhereUniqueWithoutSetorInput = {
    where: SupervisorWhereUniqueInput
    data: XOR<SupervisorUpdateWithoutSetorInput, SupervisorUncheckedUpdateWithoutSetorInput>
  }

  export type SupervisorUpdateManyWithWhereWithoutSetorInput = {
    where: SupervisorScalarWhereInput
    data: XOR<SupervisorUpdateManyMutationInput, SupervisorUncheckedUpdateManyWithoutSetorInput>
  }

  export type SupervisorScalarWhereInput = {
    AND?: SupervisorScalarWhereInput | SupervisorScalarWhereInput[]
    OR?: SupervisorScalarWhereInput[]
    NOT?: SupervisorScalarWhereInput | SupervisorScalarWhereInput[]
    id?: IntFilter<"Supervisor"> | number
    crm?: StringNullableFilter<"Supervisor"> | string | null
    setor_id?: IntNullableFilter<"Supervisor"> | number | null
  }

  export type AtividadeUpsertWithWhereUniqueWithoutSetorInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutSetorInput, AtividadeUncheckedUpdateWithoutSetorInput>
    create: XOR<AtividadeCreateWithoutSetorInput, AtividadeUncheckedCreateWithoutSetorInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutSetorInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutSetorInput, AtividadeUncheckedUpdateWithoutSetorInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutSetorInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutSetorInput>
  }

  export type AtividadeScalarWhereInput = {
    AND?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    OR?: AtividadeScalarWhereInput[]
    NOT?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    id?: IntFilter<"Atividade"> | number
    residente_id?: IntFilter<"Atividade"> | number
    setor_id?: IntFilter<"Atividade"> | number
    descricao?: StringFilter<"Atividade"> | string
    data_atividade?: DateTimeFilter<"Atividade"> | Date | string
    data_finalizacao?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    criado_em?: DateTimeFilter<"Atividade"> | Date | string
    finalizada?: BoolFilter<"Atividade"> | boolean
  }

  export type ResidenteCreateWithoutUsuarioInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor?: SetorCreateNestedOneWithoutResidentesInput
    frequencias?: FrequenciaCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateWithoutUsuarioInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteCreateOrConnectWithoutUsuarioInput = {
    where: ResidenteWhereUniqueInput
    create: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
  }

  export type SupervisorCreateWithoutUsuarioInput = {
    crm?: string | null
    setor?: SetorCreateNestedOneWithoutSupervisoresInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutUsuarioInput = {
    crm?: string | null
    setor_id?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutUsuarioInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
  }

  export type AdministradorCreateWithoutUsuarioInput = {

  }

  export type AdministradorUncheckedCreateWithoutUsuarioInput = {

  }

  export type AdministradorCreateOrConnectWithoutUsuarioInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAcessoCreateWithoutUsuarioInput = {
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
  }

  export type LogAcessoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
  }

  export type LogAcessoCreateOrConnectWithoutUsuarioInput = {
    where: LogAcessoWhereUniqueInput
    create: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAcessoCreateManyUsuarioInputEnvelope = {
    data: LogAcessoCreateManyUsuarioInput | LogAcessoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutUsuarioInput = {
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateManyUsuarioInputEnvelope = {
    data: NotificacaoCreateManyUsuarioInput | NotificacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FrequenciaCreateWithoutRegistradoPorInput = {
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    residente: ResidenteCreateNestedOneWithoutFrequenciasInput
  }

  export type FrequenciaUncheckedCreateWithoutRegistradoPorInput = {
    id?: number
    residente_id: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
  }

  export type FrequenciaCreateOrConnectWithoutRegistradoPorInput = {
    where: FrequenciaWhereUniqueInput
    create: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput>
  }

  export type FrequenciaCreateManyRegistradoPorInputEnvelope = {
    data: FrequenciaCreateManyRegistradoPorInput | FrequenciaCreateManyRegistradoPorInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeLogCreateWithoutUsuarioInput = {
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    atividade: AtividadeCreateNestedOneWithoutAtividadeLogInput
  }

  export type AtividadeLogUncheckedCreateWithoutUsuarioInput = {
    id?: number
    atividade_id: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AtividadeLogCreateOrConnectWithoutUsuarioInput = {
    where: AtividadeLogWhereUniqueInput
    create: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeLogCreateManyUsuarioInputEnvelope = {
    data: AtividadeLogCreateManyUsuarioInput | AtividadeLogCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ResidenteUpsertWithoutUsuarioInput = {
    update: XOR<ResidenteUpdateWithoutUsuarioInput, ResidenteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ResidenteCreateWithoutUsuarioInput, ResidenteUncheckedCreateWithoutUsuarioInput>
    where?: ResidenteWhereInput
  }

  export type ResidenteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ResidenteWhereInput
    data: XOR<ResidenteUpdateWithoutUsuarioInput, ResidenteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ResidenteUpdateWithoutUsuarioInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor?: SetorUpdateOneWithoutResidentesNestedInput
    frequencias?: FrequenciaUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateWithoutUsuarioInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    frequencias?: FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type SupervisorUpsertWithoutUsuarioInput = {
    update: XOR<SupervisorUpdateWithoutUsuarioInput, SupervisorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SupervisorCreateWithoutUsuarioInput, SupervisorUncheckedCreateWithoutUsuarioInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutUsuarioInput, SupervisorUncheckedUpdateWithoutUsuarioInput>
  }

  export type SupervisorUpdateWithoutUsuarioInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: SetorUpdateOneWithoutSupervisoresNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutUsuarioInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type AdministradorUpsertWithoutUsuarioInput = {
    update: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUpdateWithoutUsuarioInput = {

  }

  export type AdministradorUncheckedUpdateWithoutUsuarioInput = {

  }

  export type LogAcessoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogAcessoWhereUniqueInput
    update: XOR<LogAcessoUpdateWithoutUsuarioInput, LogAcessoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogAcessoCreateWithoutUsuarioInput, LogAcessoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAcessoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogAcessoWhereUniqueInput
    data: XOR<LogAcessoUpdateWithoutUsuarioInput, LogAcessoUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAcessoUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogAcessoScalarWhereInput
    data: XOR<LogAcessoUpdateManyMutationInput, LogAcessoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogAcessoScalarWhereInput = {
    AND?: LogAcessoScalarWhereInput | LogAcessoScalarWhereInput[]
    OR?: LogAcessoScalarWhereInput[]
    NOT?: LogAcessoScalarWhereInput | LogAcessoScalarWhereInput[]
    id?: IntFilter<"LogAcesso"> | number
    usuario_id?: IntFilter<"LogAcesso"> | number
    ip_address?: StringNullableFilter<"LogAcesso"> | string | null
    user_agent?: StringNullableFilter<"LogAcesso"> | string | null
    data_hora?: DateTimeFilter<"LogAcesso"> | Date | string
    acao?: StringNullableFilter<"LogAcesso"> | string | null
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    usuario_id?: IntFilter<"Notificacao"> | number
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    data_envio?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type FrequenciaUpsertWithWhereUniqueWithoutRegistradoPorInput = {
    where: FrequenciaWhereUniqueInput
    update: XOR<FrequenciaUpdateWithoutRegistradoPorInput, FrequenciaUncheckedUpdateWithoutRegistradoPorInput>
    create: XOR<FrequenciaCreateWithoutRegistradoPorInput, FrequenciaUncheckedCreateWithoutRegistradoPorInput>
  }

  export type FrequenciaUpdateWithWhereUniqueWithoutRegistradoPorInput = {
    where: FrequenciaWhereUniqueInput
    data: XOR<FrequenciaUpdateWithoutRegistradoPorInput, FrequenciaUncheckedUpdateWithoutRegistradoPorInput>
  }

  export type FrequenciaUpdateManyWithWhereWithoutRegistradoPorInput = {
    where: FrequenciaScalarWhereInput
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyWithoutRegistradoPorInput>
  }

  export type FrequenciaScalarWhereInput = {
    AND?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
    OR?: FrequenciaScalarWhereInput[]
    NOT?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
    id?: IntFilter<"Frequencia"> | number
    residente_id?: IntFilter<"Frequencia"> | number
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presente?: BoolFilter<"Frequencia"> | boolean
    horario_chegada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    inicio_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    fim_intervalo?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    horario_saida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    observacoes?: StringNullableFilter<"Frequencia"> | string | null
    registrado_por?: IntFilter<"Frequencia"> | number
  }

  export type AtividadeLogUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeLogWhereUniqueInput
    update: XOR<AtividadeLogUpdateWithoutUsuarioInput, AtividadeLogUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AtividadeLogCreateWithoutUsuarioInput, AtividadeLogUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeLogUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeLogWhereUniqueInput
    data: XOR<AtividadeLogUpdateWithoutUsuarioInput, AtividadeLogUncheckedUpdateWithoutUsuarioInput>
  }

  export type AtividadeLogUpdateManyWithWhereWithoutUsuarioInput = {
    where: AtividadeLogScalarWhereInput
    data: XOR<AtividadeLogUpdateManyMutationInput, AtividadeLogUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AtividadeLogScalarWhereInput = {
    AND?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
    OR?: AtividadeLogScalarWhereInput[]
    NOT?: AtividadeLogScalarWhereInput | AtividadeLogScalarWhereInput[]
    id?: IntFilter<"AtividadeLog"> | number
    atividade_id?: IntFilter<"AtividadeLog"> | number
    acao?: StringFilter<"AtividadeLog"> | string
    dados_anteriores?: JsonNullableFilter<"AtividadeLog">
    dados_novos?: JsonNullableFilter<"AtividadeLog">
    usuario_id?: IntFilter<"AtividadeLog"> | number
    timestamp?: DateTimeFilter<"AtividadeLog"> | Date | string
  }

  export type UsuarioCreateWithoutResidenteInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutResidenteInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutResidenteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResidenteInput, UsuarioUncheckedCreateWithoutResidenteInput>
  }

  export type SetorCreateWithoutResidentesInput = {
    nome: string
    descricao?: string | null
    supervisores?: SupervisorCreateNestedManyWithoutSetorInput
    atividades?: AtividadeCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateWithoutResidentesInput = {
    id?: number
    nome: string
    descricao?: string | null
    supervisores?: SupervisorUncheckedCreateNestedManyWithoutSetorInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorCreateOrConnectWithoutResidentesInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutResidentesInput, SetorUncheckedCreateWithoutResidentesInput>
  }

  export type FrequenciaCreateWithoutResidenteInput = {
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    registradoPor: UsuarioCreateNestedOneWithoutFrequencias_registradasInput
  }

  export type FrequenciaUncheckedCreateWithoutResidenteInput = {
    id?: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    registrado_por: number
  }

  export type FrequenciaCreateOrConnectWithoutResidenteInput = {
    where: FrequenciaWhereUniqueInput
    create: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput>
  }

  export type FrequenciaCreateManyResidenteInputEnvelope = {
    data: FrequenciaCreateManyResidenteInput | FrequenciaCreateManyResidenteInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutResidenteInput = {
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    supervisor: SupervisorCreateNestedOneWithoutAvaliacoesInput
    respostas?: RespostaAvaliacaoCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutResidenteInput = {
    id?: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    respostas?: RespostaAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutResidenteInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput>
  }

  export type AvaliacaoCreateManyResidenteInputEnvelope = {
    data: AvaliacaoCreateManyResidenteInput | AvaliacaoCreateManyResidenteInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutResidenteInput = {
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    setor: SetorCreateNestedOneWithoutAtividadesInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeUncheckedCreateWithoutResidenteInput = {
    id?: number
    setor_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutAtividadeInput
  }

  export type AtividadeCreateOrConnectWithoutResidenteInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput>
  }

  export type AtividadeCreateManyResidenteInputEnvelope = {
    data: AtividadeCreateManyResidenteInput | AtividadeCreateManyResidenteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutResidenteInput = {
    update: XOR<UsuarioUpdateWithoutResidenteInput, UsuarioUncheckedUpdateWithoutResidenteInput>
    create: XOR<UsuarioCreateWithoutResidenteInput, UsuarioUncheckedCreateWithoutResidenteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResidenteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResidenteInput, UsuarioUncheckedUpdateWithoutResidenteInput>
  }

  export type UsuarioUpdateWithoutResidenteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type SetorUpsertWithoutResidentesInput = {
    update: XOR<SetorUpdateWithoutResidentesInput, SetorUncheckedUpdateWithoutResidentesInput>
    create: XOR<SetorCreateWithoutResidentesInput, SetorUncheckedCreateWithoutResidentesInput>
    where?: SetorWhereInput
  }

  export type SetorUpdateToOneWithWhereWithoutResidentesInput = {
    where?: SetorWhereInput
    data: XOR<SetorUpdateWithoutResidentesInput, SetorUncheckedUpdateWithoutResidentesInput>
  }

  export type SetorUpdateWithoutResidentesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    supervisores?: SupervisorUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateWithoutResidentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    supervisores?: SupervisorUncheckedUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type FrequenciaUpsertWithWhereUniqueWithoutResidenteInput = {
    where: FrequenciaWhereUniqueInput
    update: XOR<FrequenciaUpdateWithoutResidenteInput, FrequenciaUncheckedUpdateWithoutResidenteInput>
    create: XOR<FrequenciaCreateWithoutResidenteInput, FrequenciaUncheckedCreateWithoutResidenteInput>
  }

  export type FrequenciaUpdateWithWhereUniqueWithoutResidenteInput = {
    where: FrequenciaWhereUniqueInput
    data: XOR<FrequenciaUpdateWithoutResidenteInput, FrequenciaUncheckedUpdateWithoutResidenteInput>
  }

  export type FrequenciaUpdateManyWithWhereWithoutResidenteInput = {
    where: FrequenciaScalarWhereInput
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyWithoutResidenteInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutResidenteInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutResidenteInput, AvaliacaoUncheckedUpdateWithoutResidenteInput>
    create: XOR<AvaliacaoCreateWithoutResidenteInput, AvaliacaoUncheckedCreateWithoutResidenteInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutResidenteInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutResidenteInput, AvaliacaoUncheckedUpdateWithoutResidenteInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutResidenteInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutResidenteInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    residente_id?: IntFilter<"Avaliacao"> | number
    supervisor_id?: IntFilter<"Avaliacao"> | number
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    periodo_inicio?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    periodo_fim?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    criado_em?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type AtividadeUpsertWithWhereUniqueWithoutResidenteInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutResidenteInput, AtividadeUncheckedUpdateWithoutResidenteInput>
    create: XOR<AtividadeCreateWithoutResidenteInput, AtividadeUncheckedCreateWithoutResidenteInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutResidenteInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutResidenteInput, AtividadeUncheckedUpdateWithoutResidenteInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutResidenteInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutResidenteInput>
  }

  export type UsuarioCreateWithoutSupervisorInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSupervisorInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSupervisorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
  }

  export type SetorCreateWithoutSupervisoresInput = {
    nome: string
    descricao?: string | null
    residentes?: ResidenteCreateNestedManyWithoutSetorInput
    atividades?: AtividadeCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateWithoutSupervisoresInput = {
    id?: number
    nome: string
    descricao?: string | null
    residentes?: ResidenteUncheckedCreateNestedManyWithoutSetorInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorCreateOrConnectWithoutSupervisoresInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutSupervisoresInput, SetorUncheckedCreateWithoutSupervisoresInput>
  }

  export type AvaliacaoCreateWithoutSupervisorInput = {
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    residente: ResidenteCreateNestedOneWithoutAvaliacoesInput
    respostas?: RespostaAvaliacaoCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutSupervisorInput = {
    id?: number
    residente_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    respostas?: RespostaAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput>
  }

  export type AvaliacaoCreateManySupervisorInputEnvelope = {
    data: AvaliacaoCreateManySupervisorInput | AvaliacaoCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutSupervisorInput = {
    comentario: string
    criado_em?: Date | string
    avaliacao: AvaliacaoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutSupervisorInput = {
    id?: number
    avaliacao_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutSupervisorInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput>
  }

  export type ComentarioCreateManySupervisorInputEnvelope = {
    data: ComentarioCreateManySupervisorInput | ComentarioCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutSupervisorInput = {
    update: XOR<UsuarioUpdateWithoutSupervisorInput, UsuarioUncheckedUpdateWithoutSupervisorInput>
    create: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSupervisorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSupervisorInput, UsuarioUncheckedUpdateWithoutSupervisorInput>
  }

  export type UsuarioUpdateWithoutSupervisorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type SetorUpsertWithoutSupervisoresInput = {
    update: XOR<SetorUpdateWithoutSupervisoresInput, SetorUncheckedUpdateWithoutSupervisoresInput>
    create: XOR<SetorCreateWithoutSupervisoresInput, SetorUncheckedCreateWithoutSupervisoresInput>
    where?: SetorWhereInput
  }

  export type SetorUpdateToOneWithWhereWithoutSupervisoresInput = {
    where?: SetorWhereInput
    data: XOR<SetorUpdateWithoutSupervisoresInput, SetorUncheckedUpdateWithoutSupervisoresInput>
  }

  export type SetorUpdateWithoutSupervisoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateWithoutSupervisoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUncheckedUpdateManyWithoutSetorNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutSupervisorInput, AvaliacaoUncheckedUpdateWithoutSupervisorInput>
    create: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutSupervisorInput, AvaliacaoUncheckedUpdateWithoutSupervisorInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutSupervisorInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutSupervisorInput, ComentarioUncheckedUpdateWithoutSupervisorInput>
    create: XOR<ComentarioCreateWithoutSupervisorInput, ComentarioUncheckedCreateWithoutSupervisorInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutSupervisorInput, ComentarioUncheckedUpdateWithoutSupervisorInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutSupervisorInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    avaliacao_id?: IntFilter<"Comentario"> | number
    supervisor_id?: IntFilter<"Comentario"> | number
    comentario?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
  }

  export type UsuarioCreateWithoutAdministradorInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAdministradorInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAdministradorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
  }

  export type UsuarioUpsertWithoutAdministradorInput = {
    update: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type UsuarioUpdateWithoutAdministradorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAdministradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ResidenteCreateWithoutFrequenciasInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    usuario: UsuarioCreateNestedOneWithoutResidenteInput
    setor?: SetorCreateNestedOneWithoutResidentesInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateWithoutFrequenciasInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteCreateOrConnectWithoutFrequenciasInput = {
    where: ResidenteWhereUniqueInput
    create: XOR<ResidenteCreateWithoutFrequenciasInput, ResidenteUncheckedCreateWithoutFrequenciasInput>
  }

  export type UsuarioCreateWithoutFrequencias_registradasInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFrequencias_registradasInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFrequencias_registradasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFrequencias_registradasInput, UsuarioUncheckedCreateWithoutFrequencias_registradasInput>
  }

  export type ResidenteUpsertWithoutFrequenciasInput = {
    update: XOR<ResidenteUpdateWithoutFrequenciasInput, ResidenteUncheckedUpdateWithoutFrequenciasInput>
    create: XOR<ResidenteCreateWithoutFrequenciasInput, ResidenteUncheckedCreateWithoutFrequenciasInput>
    where?: ResidenteWhereInput
  }

  export type ResidenteUpdateToOneWithWhereWithoutFrequenciasInput = {
    where?: ResidenteWhereInput
    data: XOR<ResidenteUpdateWithoutFrequenciasInput, ResidenteUncheckedUpdateWithoutFrequenciasInput>
  }

  export type ResidenteUpdateWithoutFrequenciasInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneRequiredWithoutResidenteNestedInput
    setor?: SetorUpdateOneWithoutResidentesNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateWithoutFrequenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type UsuarioUpsertWithoutFrequencias_registradasInput = {
    update: XOR<UsuarioUpdateWithoutFrequencias_registradasInput, UsuarioUncheckedUpdateWithoutFrequencias_registradasInput>
    create: XOR<UsuarioCreateWithoutFrequencias_registradasInput, UsuarioUncheckedCreateWithoutFrequencias_registradasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFrequencias_registradasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFrequencias_registradasInput, UsuarioUncheckedUpdateWithoutFrequencias_registradasInput>
  }

  export type UsuarioUpdateWithoutFrequencias_registradasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFrequencias_registradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ResidenteCreateWithoutAtividadesInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    usuario: UsuarioCreateNestedOneWithoutResidenteInput
    setor?: SetorCreateNestedOneWithoutResidentesInput
    frequencias?: FrequenciaCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateWithoutAtividadesInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutResidenteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteCreateOrConnectWithoutAtividadesInput = {
    where: ResidenteWhereUniqueInput
    create: XOR<ResidenteCreateWithoutAtividadesInput, ResidenteUncheckedCreateWithoutAtividadesInput>
  }

  export type SetorCreateWithoutAtividadesInput = {
    nome: string
    descricao?: string | null
    residentes?: ResidenteCreateNestedManyWithoutSetorInput
    supervisores?: SupervisorCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateWithoutAtividadesInput = {
    id?: number
    nome: string
    descricao?: string | null
    residentes?: ResidenteUncheckedCreateNestedManyWithoutSetorInput
    supervisores?: SupervisorUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorCreateOrConnectWithoutAtividadesInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutAtividadesInput, SetorUncheckedCreateWithoutAtividadesInput>
  }

  export type AtividadeLogCreateWithoutAtividadeInput = {
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAtividadeLogInput
  }

  export type AtividadeLogUncheckedCreateWithoutAtividadeInput = {
    id?: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id: number
    timestamp?: Date | string
  }

  export type AtividadeLogCreateOrConnectWithoutAtividadeInput = {
    where: AtividadeLogWhereUniqueInput
    create: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput>
  }

  export type AtividadeLogCreateManyAtividadeInputEnvelope = {
    data: AtividadeLogCreateManyAtividadeInput | AtividadeLogCreateManyAtividadeInput[]
    skipDuplicates?: boolean
  }

  export type ResidenteUpsertWithoutAtividadesInput = {
    update: XOR<ResidenteUpdateWithoutAtividadesInput, ResidenteUncheckedUpdateWithoutAtividadesInput>
    create: XOR<ResidenteCreateWithoutAtividadesInput, ResidenteUncheckedCreateWithoutAtividadesInput>
    where?: ResidenteWhereInput
  }

  export type ResidenteUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: ResidenteWhereInput
    data: XOR<ResidenteUpdateWithoutAtividadesInput, ResidenteUncheckedUpdateWithoutAtividadesInput>
  }

  export type ResidenteUpdateWithoutAtividadesInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneRequiredWithoutResidenteNestedInput
    setor?: SetorUpdateOneWithoutResidentesNestedInput
    frequencias?: FrequenciaUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateWithoutAtividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    frequencias?: FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type SetorUpsertWithoutAtividadesInput = {
    update: XOR<SetorUpdateWithoutAtividadesInput, SetorUncheckedUpdateWithoutAtividadesInput>
    create: XOR<SetorCreateWithoutAtividadesInput, SetorUncheckedCreateWithoutAtividadesInput>
    where?: SetorWhereInput
  }

  export type SetorUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: SetorWhereInput
    data: XOR<SetorUpdateWithoutAtividadesInput, SetorUncheckedUpdateWithoutAtividadesInput>
  }

  export type SetorUpdateWithoutAtividadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUpdateManyWithoutSetorNestedInput
    supervisores?: SupervisorUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateWithoutAtividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    residentes?: ResidenteUncheckedUpdateManyWithoutSetorNestedInput
    supervisores?: SupervisorUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type AtividadeLogUpsertWithWhereUniqueWithoutAtividadeInput = {
    where: AtividadeLogWhereUniqueInput
    update: XOR<AtividadeLogUpdateWithoutAtividadeInput, AtividadeLogUncheckedUpdateWithoutAtividadeInput>
    create: XOR<AtividadeLogCreateWithoutAtividadeInput, AtividadeLogUncheckedCreateWithoutAtividadeInput>
  }

  export type AtividadeLogUpdateWithWhereUniqueWithoutAtividadeInput = {
    where: AtividadeLogWhereUniqueInput
    data: XOR<AtividadeLogUpdateWithoutAtividadeInput, AtividadeLogUncheckedUpdateWithoutAtividadeInput>
  }

  export type AtividadeLogUpdateManyWithWhereWithoutAtividadeInput = {
    where: AtividadeLogScalarWhereInput
    data: XOR<AtividadeLogUpdateManyMutationInput, AtividadeLogUncheckedUpdateManyWithoutAtividadeInput>
  }

  export type AtividadeCreateWithoutAtividadeLogInput = {
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
    residente: ResidenteCreateNestedOneWithoutAtividadesInput
    setor: SetorCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutAtividadeLogInput = {
    id?: number
    residente_id: number
    setor_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
  }

  export type AtividadeCreateOrConnectWithoutAtividadeLogInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutAtividadeLogInput, AtividadeUncheckedCreateWithoutAtividadeLogInput>
  }

  export type UsuarioCreateWithoutAtividadeLogInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
  }

  export type UsuarioUncheckedCreateWithoutAtividadeLogInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
  }

  export type UsuarioCreateOrConnectWithoutAtividadeLogInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtividadeLogInput, UsuarioUncheckedCreateWithoutAtividadeLogInput>
  }

  export type AtividadeUpsertWithoutAtividadeLogInput = {
    update: XOR<AtividadeUpdateWithoutAtividadeLogInput, AtividadeUncheckedUpdateWithoutAtividadeLogInput>
    create: XOR<AtividadeCreateWithoutAtividadeLogInput, AtividadeUncheckedCreateWithoutAtividadeLogInput>
    where?: AtividadeWhereInput
  }

  export type AtividadeUpdateToOneWithWhereWithoutAtividadeLogInput = {
    where?: AtividadeWhereInput
    data: XOR<AtividadeUpdateWithoutAtividadeLogInput, AtividadeUncheckedUpdateWithoutAtividadeLogInput>
  }

  export type AtividadeUpdateWithoutAtividadeLogInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    residente?: ResidenteUpdateOneRequiredWithoutAtividadesNestedInput
    setor?: SetorUpdateOneRequiredWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutAtividadeLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpsertWithoutAtividadeLogInput = {
    update: XOR<UsuarioUpdateWithoutAtividadeLogInput, UsuarioUncheckedUpdateWithoutAtividadeLogInput>
    create: XOR<UsuarioCreateWithoutAtividadeLogInput, UsuarioUncheckedCreateWithoutAtividadeLogInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtividadeLogInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtividadeLogInput, UsuarioUncheckedUpdateWithoutAtividadeLogInput>
  }

  export type UsuarioUpdateWithoutAtividadeLogInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtividadeLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
  }

  export type RespostaAvaliacaoCreateWithoutCampoInput = {
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
    avaliacao: AvaliacaoCreateNestedOneWithoutRespostasInput
  }

  export type RespostaAvaliacaoUncheckedCreateWithoutCampoInput = {
    id?: number
    avaliacao_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type RespostaAvaliacaoCreateOrConnectWithoutCampoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    create: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput>
  }

  export type RespostaAvaliacaoCreateManyCampoInputEnvelope = {
    data: RespostaAvaliacaoCreateManyCampoInput | RespostaAvaliacaoCreateManyCampoInput[]
    skipDuplicates?: boolean
  }

  export type RespostaAvaliacaoUpsertWithWhereUniqueWithoutCampoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    update: XOR<RespostaAvaliacaoUpdateWithoutCampoInput, RespostaAvaliacaoUncheckedUpdateWithoutCampoInput>
    create: XOR<RespostaAvaliacaoCreateWithoutCampoInput, RespostaAvaliacaoUncheckedCreateWithoutCampoInput>
  }

  export type RespostaAvaliacaoUpdateWithWhereUniqueWithoutCampoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    data: XOR<RespostaAvaliacaoUpdateWithoutCampoInput, RespostaAvaliacaoUncheckedUpdateWithoutCampoInput>
  }

  export type RespostaAvaliacaoUpdateManyWithWhereWithoutCampoInput = {
    where: RespostaAvaliacaoScalarWhereInput
    data: XOR<RespostaAvaliacaoUpdateManyMutationInput, RespostaAvaliacaoUncheckedUpdateManyWithoutCampoInput>
  }

  export type RespostaAvaliacaoScalarWhereInput = {
    AND?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
    OR?: RespostaAvaliacaoScalarWhereInput[]
    NOT?: RespostaAvaliacaoScalarWhereInput | RespostaAvaliacaoScalarWhereInput[]
    id?: IntFilter<"RespostaAvaliacao"> | number
    avaliacao_id?: IntFilter<"RespostaAvaliacao"> | number
    campo_id?: IntFilter<"RespostaAvaliacao"> | number
    resposta_texto?: StringNullableFilter<"RespostaAvaliacao"> | string | null
    resposta_numerica?: DecimalNullableFilter<"RespostaAvaliacao"> | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: BoolNullableFilter<"RespostaAvaliacao"> | boolean | null
  }

  export type ResidenteCreateWithoutAvaliacoesInput = {
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    usuario: UsuarioCreateNestedOneWithoutResidenteInput
    setor?: SetorCreateNestedOneWithoutResidentesInput
    frequencias?: FrequenciaCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteUncheckedCreateWithoutAvaliacoesInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
    setor_id?: number | null
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutResidenteInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutResidenteInput
  }

  export type ResidenteCreateOrConnectWithoutAvaliacoesInput = {
    where: ResidenteWhereUniqueInput
    create: XOR<ResidenteCreateWithoutAvaliacoesInput, ResidenteUncheckedCreateWithoutAvaliacoesInput>
  }

  export type SupervisorCreateWithoutAvaliacoesInput = {
    crm?: string | null
    usuario: UsuarioCreateNestedOneWithoutSupervisorInput
    setor?: SetorCreateNestedOneWithoutSupervisoresInput
    comentarios?: ComentarioCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutAvaliacoesInput = {
    id: number
    crm?: string | null
    setor_id?: number | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutAvaliacoesInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutAvaliacoesInput, SupervisorUncheckedCreateWithoutAvaliacoesInput>
  }

  export type RespostaAvaliacaoCreateWithoutAvaliacaoInput = {
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
    campo: CampoAvaliacaoCreateNestedOneWithoutRespostasInput
  }

  export type RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    campo_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type RespostaAvaliacaoCreateOrConnectWithoutAvaliacaoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    create: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type RespostaAvaliacaoCreateManyAvaliacaoInputEnvelope = {
    data: RespostaAvaliacaoCreateManyAvaliacaoInput | RespostaAvaliacaoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutAvaliacaoInput = {
    comentario: string
    criado_em?: Date | string
    supervisor: SupervisorCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    supervisor_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutAvaliacaoInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ComentarioCreateManyAvaliacaoInputEnvelope = {
    data: ComentarioCreateManyAvaliacaoInput | ComentarioCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ResidenteUpsertWithoutAvaliacoesInput = {
    update: XOR<ResidenteUpdateWithoutAvaliacoesInput, ResidenteUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ResidenteCreateWithoutAvaliacoesInput, ResidenteUncheckedCreateWithoutAvaliacoesInput>
    where?: ResidenteWhereInput
  }

  export type ResidenteUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ResidenteWhereInput
    data: XOR<ResidenteUpdateWithoutAvaliacoesInput, ResidenteUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ResidenteUpdateWithoutAvaliacoesInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneRequiredWithoutResidenteNestedInput
    setor?: SetorUpdateOneWithoutResidentesNestedInput
    frequencias?: FrequenciaUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    frequencias?: FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type SupervisorUpsertWithoutAvaliacoesInput = {
    update: XOR<SupervisorUpdateWithoutAvaliacoesInput, SupervisorUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<SupervisorCreateWithoutAvaliacoesInput, SupervisorUncheckedCreateWithoutAvaliacoesInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutAvaliacoesInput, SupervisorUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type SupervisorUpdateWithoutAvaliacoesInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSupervisorNestedInput
    setor?: SetorUpdateOneWithoutSupervisoresNestedInput
    comentarios?: ComentarioUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type RespostaAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    update: XOR<RespostaAvaliacaoUpdateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<RespostaAvaliacaoCreateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type RespostaAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: RespostaAvaliacaoWhereUniqueInput
    data: XOR<RespostaAvaliacaoUpdateWithoutAvaliacaoInput, RespostaAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type RespostaAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: RespostaAvaliacaoScalarWhereInput
    data: XOR<RespostaAvaliacaoUpdateManyMutationInput, RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAvaliacaoInput, ComentarioUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ComentarioCreateWithoutAvaliacaoInput, ComentarioUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAvaliacaoInput, ComentarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type AvaliacaoCreateWithoutRespostasInput = {
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    residente: ResidenteCreateNestedOneWithoutAvaliacoesInput
    supervisor: SupervisorCreateNestedOneWithoutAvaliacoesInput
    comentarios?: ComentarioCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutRespostasInput = {
    id?: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutRespostasInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutRespostasInput, AvaliacaoUncheckedCreateWithoutRespostasInput>
  }

  export type CampoAvaliacaoCreateWithoutRespostasInput = {
    titulo: string
    descricao?: string | null
    obrigatorio?: boolean
    tipo?: $Enums.TipoCampo
    ordem?: number | null
  }

  export type CampoAvaliacaoUncheckedCreateWithoutRespostasInput = {
    id?: number
    titulo: string
    descricao?: string | null
    obrigatorio?: boolean
    tipo?: $Enums.TipoCampo
    ordem?: number | null
  }

  export type CampoAvaliacaoCreateOrConnectWithoutRespostasInput = {
    where: CampoAvaliacaoWhereUniqueInput
    create: XOR<CampoAvaliacaoCreateWithoutRespostasInput, CampoAvaliacaoUncheckedCreateWithoutRespostasInput>
  }

  export type AvaliacaoUpsertWithoutRespostasInput = {
    update: XOR<AvaliacaoUpdateWithoutRespostasInput, AvaliacaoUncheckedUpdateWithoutRespostasInput>
    create: XOR<AvaliacaoCreateWithoutRespostasInput, AvaliacaoUncheckedCreateWithoutRespostasInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutRespostasInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutRespostasInput, AvaliacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type AvaliacaoUpdateWithoutRespostasInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneRequiredWithoutAvaliacoesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutAvaliacoesNestedInput
    comentarios?: ComentarioUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type CampoAvaliacaoUpsertWithoutRespostasInput = {
    update: XOR<CampoAvaliacaoUpdateWithoutRespostasInput, CampoAvaliacaoUncheckedUpdateWithoutRespostasInput>
    create: XOR<CampoAvaliacaoCreateWithoutRespostasInput, CampoAvaliacaoUncheckedCreateWithoutRespostasInput>
    where?: CampoAvaliacaoWhereInput
  }

  export type CampoAvaliacaoUpdateToOneWithWhereWithoutRespostasInput = {
    where?: CampoAvaliacaoWhereInput
    data: XOR<CampoAvaliacaoUpdateWithoutRespostasInput, CampoAvaliacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type CampoAvaliacaoUpdateWithoutRespostasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CampoAvaliacaoUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    obrigatorio?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoCampoFieldUpdateOperationsInput | $Enums.TipoCampo
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvaliacaoCreateWithoutComentariosInput = {
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    residente: ResidenteCreateNestedOneWithoutAvaliacoesInput
    supervisor: SupervisorCreateNestedOneWithoutAvaliacoesInput
    respostas?: RespostaAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutComentariosInput = {
    id?: number
    residente_id: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
    respostas?: RespostaAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutComentariosInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutComentariosInput, AvaliacaoUncheckedCreateWithoutComentariosInput>
  }

  export type SupervisorCreateWithoutComentariosInput = {
    crm?: string | null
    usuario: UsuarioCreateNestedOneWithoutSupervisorInput
    setor?: SetorCreateNestedOneWithoutSupervisoresInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutComentariosInput = {
    id: number
    crm?: string | null
    setor_id?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutComentariosInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutComentariosInput, SupervisorUncheckedCreateWithoutComentariosInput>
  }

  export type AvaliacaoUpsertWithoutComentariosInput = {
    update: XOR<AvaliacaoUpdateWithoutComentariosInput, AvaliacaoUncheckedUpdateWithoutComentariosInput>
    create: XOR<AvaliacaoCreateWithoutComentariosInput, AvaliacaoUncheckedCreateWithoutComentariosInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutComentariosInput, AvaliacaoUncheckedUpdateWithoutComentariosInput>
  }

  export type AvaliacaoUpdateWithoutComentariosInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneRequiredWithoutAvaliacoesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutAvaliacoesNestedInput
    respostas?: RespostaAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type SupervisorUpsertWithoutComentariosInput = {
    update: XOR<SupervisorUpdateWithoutComentariosInput, SupervisorUncheckedUpdateWithoutComentariosInput>
    create: XOR<SupervisorCreateWithoutComentariosInput, SupervisorUncheckedCreateWithoutComentariosInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutComentariosInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutComentariosInput, SupervisorUncheckedUpdateWithoutComentariosInput>
  }

  export type SupervisorUpdateWithoutComentariosInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSupervisorNestedInput
    setor?: SetorUpdateOneWithoutSupervisoresNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioCreateWithoutLogsInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLogsInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLogsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
  }

  export type UsuarioUpsertWithoutLogsInput = {
    update: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioUpdateWithoutLogsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.TipoUsuario
    ativo?: boolean
    criado_em?: Date | string
    residente?: ResidenteUncheckedCreateNestedOneWithoutUsuarioInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUsuarioInput
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    logs?: LogAcessoUncheckedCreateNestedManyWithoutUsuarioInput
    frequencias_registradas?: FrequenciaUncheckedCreateNestedManyWithoutRegistradoPorInput
    AtividadeLog?: AtividadeLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUncheckedUpdateOneWithoutUsuarioNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUsuarioNestedInput
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    logs?: LogAcessoUncheckedUpdateManyWithoutUsuarioNestedInput
    frequencias_registradas?: FrequenciaUncheckedUpdateManyWithoutRegistradoPorNestedInput
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ResidenteCreateManySetorInput = {
    id: number
    crm?: string | null
    especialidade?: string | null
    ano_residencia?: number | null
  }

  export type SupervisorCreateManySetorInput = {
    id: number
    crm?: string | null
  }

  export type AtividadeCreateManySetorInput = {
    id?: number
    residente_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
  }

  export type ResidenteUpdateWithoutSetorInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneRequiredWithoutResidenteNestedInput
    frequencias?: FrequenciaUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
    frequencias?: FrequenciaUncheckedUpdateManyWithoutResidenteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutResidenteNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutResidenteNestedInput
  }

  export type ResidenteUncheckedUpdateManyWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    ano_residencia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SupervisorUpdateWithoutSetorInput = {
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSupervisorNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateManyWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    crm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUpdateWithoutSetorInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    residente?: ResidenteUpdateOneRequiredWithoutAtividadesNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeUncheckedUpdateManyWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogAcessoCreateManyUsuarioInput = {
    id?: number
    ip_address?: string | null
    user_agent?: string | null
    data_hora?: Date | string
    acao?: string | null
  }

  export type NotificacaoCreateManyUsuarioInput = {
    id?: number
    titulo: string
    mensagem?: string | null
    lida?: boolean
    data_envio?: Date | string
  }

  export type FrequenciaCreateManyRegistradoPorInput = {
    id?: number
    residente_id: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
  }

  export type AtividadeLogCreateManyUsuarioInput = {
    id?: number
    atividade_id: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type LogAcessoUpdateWithoutUsuarioInput = {
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAcessoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAcessoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    acao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequenciaUpdateWithoutRegistradoPorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    residente?: ResidenteUpdateOneRequiredWithoutFrequenciasNestedInput
  }

  export type FrequenciaUncheckedUpdateWithoutRegistradoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FrequenciaUncheckedUpdateManyWithoutRegistradoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeLogUpdateWithoutUsuarioInput = {
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    atividade?: AtividadeUpdateOneRequiredWithoutAtividadeLogNestedInput
  }

  export type AtividadeLogUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atividade_id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeLogUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atividade_id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrequenciaCreateManyResidenteInput = {
    id?: number
    data: Date | string
    presente: boolean
    horario_chegada?: Date | string | null
    inicio_intervalo?: Date | string | null
    fim_intervalo?: Date | string | null
    horario_saida?: Date | string | null
    observacoes?: string | null
    registrado_por: number
  }

  export type AvaliacaoCreateManyResidenteInput = {
    id?: number
    supervisor_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
  }

  export type AtividadeCreateManyResidenteInput = {
    id?: number
    setor_id: number
    descricao: string
    data_atividade: Date | string
    data_finalizacao?: Date | string | null
    criado_em?: Date | string
    finalizada: boolean
  }

  export type FrequenciaUpdateWithoutResidenteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPor?: UsuarioUpdateOneRequiredWithoutFrequencias_registradasNestedInput
  }

  export type FrequenciaUncheckedUpdateWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    registrado_por?: IntFieldUpdateOperationsInput | number
  }

  export type FrequenciaUncheckedUpdateManyWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    horario_chegada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inicio_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim_intervalo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horario_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    registrado_por?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUpdateWithoutResidenteInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: SupervisorUpdateOneRequiredWithoutAvaliacoesNestedInput
    respostas?: RespostaAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateManyWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeUpdateWithoutResidenteInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    setor?: SetorUpdateOneRequiredWithoutAtividadesNestedInput
    AtividadeLog?: AtividadeLogUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
    AtividadeLog?: AtividadeLogUncheckedUpdateManyWithoutAtividadeNestedInput
  }

  export type AtividadeUncheckedUpdateManyWithoutResidenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_atividade?: DateTimeFieldUpdateOperationsInput | Date | string
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoCreateManySupervisorInput = {
    id?: number
    residente_id: number
    data_avaliacao: Date | string
    periodo_inicio?: Date | string | null
    periodo_fim?: Date | string | null
    criado_em?: Date | string
  }

  export type ComentarioCreateManySupervisorInput = {
    id?: number
    avaliacao_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type AvaliacaoUpdateWithoutSupervisorInput = {
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    residente?: ResidenteUpdateOneRequiredWithoutAvaliacoesNestedInput
    respostas?: RespostaAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    residente_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    periodo_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodo_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutSupervisorInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeLogCreateManyAtividadeInput = {
    id?: number
    acao: string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id: number
    timestamp?: Date | string
  }

  export type AtividadeLogUpdateWithoutAtividadeInput = {
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAtividadeLogNestedInput
  }

  export type AtividadeLogUncheckedUpdateWithoutAtividadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeLogUncheckedUpdateManyWithoutAtividadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    dados_anteriores?: NullableJsonNullValueInput | InputJsonValue
    dados_novos?: NullableJsonNullValueInput | InputJsonValue
    usuario_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaAvaliacaoCreateManyCampoInput = {
    id?: number
    avaliacao_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type RespostaAvaliacaoUpdateWithoutCampoInput = {
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostaAvaliacaoUncheckedUpdateWithoutCampoInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RespostaAvaliacaoUncheckedUpdateManyWithoutCampoInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacao_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RespostaAvaliacaoCreateManyAvaliacaoInput = {
    id?: number
    campo_id: number
    resposta_texto?: string | null
    resposta_numerica?: Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: boolean | null
  }

  export type ComentarioCreateManyAvaliacaoInput = {
    id?: number
    supervisor_id: number
    comentario: string
    criado_em?: Date | string
  }

  export type RespostaAvaliacaoUpdateWithoutAvaliacaoInput = {
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campo?: CampoAvaliacaoUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostaAvaliacaoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RespostaAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo_id?: IntFieldUpdateOperationsInput | number
    resposta_texto?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_numerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resposta_checkbox?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ComentarioUpdateWithoutAvaliacaoInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: SupervisorUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisor_id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
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