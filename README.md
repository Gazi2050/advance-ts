## **Primitive & Core Types**

| Type        | What It Does                   | Real-Life Use                       |
| ----------- | ------------------------------ | ----------------------------------- |
| `string`    | Text values                    | User names, messages                |
| `number`    | Numeric values                 | Age, price, quantity                |
| `boolean`   | True/false values              | Flags, toggles                      |
| `bigint`    | Arbitrary large integers       | IDs, crypto, timestamps             |
| `symbol`    | Unique immutable identifiers   | Object property keys                |
| `null`      | Null value                     | Optional or empty data              |
| `undefined` | Uninitialized value            | Optional properties, missing values |
| `any`       | Skip type checking             | Quick JS migration, unknown values  |
| `unknown`   | Unknown type, safer than `any` | Type-safe runtime checks            |
| `never`     | Represents impossible values   | Exhaustive checks in switches       |
| `void`      | No return value                | Functions that don’t return         |

## **Utility Types**

| Utility Type               | What It Does                                     | Real-Life Use                         |
| -------------------------- | ------------------------------------------------ | ------------------------------------- |
| `Partial<T>`               | Makes all fields optional                        | Form updates, PATCH requests          |
| `Required<T>`              | Makes all fields required                        | Validate full data before saving      |
| `Readonly<T>`              | Makes all fields readonly                        | Prevent accidental mutation           |
| `Pick<T, K>`               | Keeps only selected keys                         | Build lightweight DTOs or views       |
| `Omit<T, K>`               | Removes selected keys                            | Hide sensitive/internal fields        |
| `Record<K, T>`             | Builds an object map with consistent value types | Role configs, labels, enums           |
| `ReturnType<T>`            | Gets the return type of a function               | Reuse output type elsewhere           |
| `Parameters<T>`            | Gets the input arguments of a function           | Reuse input in forms, mocks, wrappers |
| `ConstructorParameters<T>` | Gets constructor parameter types                 | Wrap or proxy class constructors      |
| `InstanceType<T>`          | Gets the instance type of a class                | Infer type when creating objects      |
| `Exclude<T, U>`            | Excludes types from a union                      | Filter union types                    |
| `Extract<T, U>`            | Extracts types from a union                      | Narrow union types                    |
| `NonNullable<T>`           | Removes `null` and `undefined`                   | Enforce always-defined values         |
| `Awaited<T>`               | Unwraps promise types                            | Async/await type handling             |
| `ThisType<T>`              | Type for `this` context in objects               | Type-safe dynamic object contexts     |

## **Mapped & Indexed Types**

| Type                   | What It Does                | Real-Life Use                     |
| ---------------------- | --------------------------- | --------------------------------- |
| `keyof T`              | All keys of an object type  | Dynamic access, generic utilities |
| `[K in keyof T]: T[K]` | Transform object properties | Change or enforce type per key    |
| `as`                   | Remap keys in mapped types  | Dynamic property renaming         |
| `Record<K, T>`         | Build objects from keys     | Config maps, lookup tables        |
| `Pick<T, K>`           | Keep specific keys          | DTOs, views                       |
| `Omit<T, K>`           | Remove specific keys        | Hide sensitive fields             |
| `in`                   | Iterates over union types   | Used in mapped types              |

## **Conditional Types**

| Type                  | What It Does                          | Real-Life Use                      |
| --------------------- | ------------------------------------- | ---------------------------------- |
| `T extends U ? X : Y` | Conditional logic on types            | Build type-safe branching          |
| `infer`               | Infers a type inside a conditional    | Extract return type, array element |
| `Extract<T, U>`       | Extracts types from a union           | Narrow union types                 |
| `Exclude<T, U>`       | Removes types from a union            | Filter union types                 |
| `NonNullable<T>`      | Removes `null` and `undefined`        | Enforce defined values             |
| `Awaited<T>`          | Extracts resolved type from a promise | Async type safety                  |

## **Advanced / Deep Utility Types**

| Type                     | What It Does                            | Real-Life Use                |
| ------------------------ | --------------------------------------- | ---------------------------- |
| `PartialDeep<T>`         | Makes nested object properties optional | Deep form updates            |
| `ReadonlyDeep<T>`        | Makes nested object readonly            | Immutable state trees        |
| `RequiredDeep<T>`        | Makes nested object required            | Validate nested objects      |
| `Mutable<T>`             | Removes readonly modifier               | Mutable copy of an object    |
| `PickByValue<T, V>`      | Pick keys by value type                 | Extract specific type fields |
| `OmitByValue<T, V>`      | Omit keys by value type                 | Remove certain type fields   |
| `UnionToIntersection<U>` | Convert union to intersection           | Advanced type composition    |
| `Flatten<T>`             | Flatten nested arrays or tuples         | Simplify array types         |
| `DeepFlatten<T>`         | Recursively flatten nested arrays       | Complex nested arrays        |
| `TupleToUnion<T>`        | Convert tuple to union type             | Flexible generic typing      |

## **Function & Constructor Types**

| Type                       | What It Does                       | Real-Life Use                  |
| -------------------------- | ---------------------------------- | ------------------------------ |
| `Parameters<T>`            | Get input parameters of a function | Wrap functions safely          |
| `ConstructorParameters<T>` | Get constructor parameters         | Factory, proxy classes         |
| `ReturnType<T>`            | Get function return type           | Reuse outputs                  |
| `InstanceType<T>`          | Get instance type of a class       | Infer object types dynamically |
| `ThisType<T>`              | Type of `this` context             | Typed dynamic object context   |

## **Misc / Helpers**

| Type      | What It Does                   | Real-Life Use              |
| --------- | ------------------------------ | -------------------------- |
| `typeof`  | Type of a variable             | Type inference from values |
| `keyof`   | Keys of an object type         | Dynamic property access    |
| `in`      | Iterate over keys              | Mapped types               |
| `extends` | Type constraints               | Generic safety             |
| `unknown` | Unknown type, safer than `any` | Runtime type checks        |
| `any`     | Skip type checking             | Quick prototyping          |
| `never`   | Impossible type                | Exhaustive checks          |
| `void`    | No return type                 | Side-effect-only functions |

## **Generics**

| Pattern                                    | What It Does                            | Real-Life Use                           |
| ------------------------------------------ | --------------------------------------- | --------------------------------------- |
| `T`                                        | Generic type placeholder                | Reusable functions, interfaces, classes |
| Multiple generic params `<T, U, V>`        | Work with multiple types simultaneously | Merge objects, tuples                   |
| Generic constraints `<T extends SomeType>` | Restrict allowed types                  | Ensure type has certain properties      |
| Default generic type `<T = SomeType>`      | Provide default type if none supplied   | Optional type parameters                |
| Generic functions                          | Functions parameterized by type         | Reusable logic across types             |
| Generic interfaces                         | Interfaces parameterized by type        | Flexible object shapes                  |
| Generic classes                            | Classes parameterized by type           | Data structures (stack, queue, repo)    |
| Conditional generics                       | Conditional logic with generics         | Type-safe transformations               |
| `infer`                                    | Infer type inside conditional generics  | Extract return types, elements          |
| Variadic tuple generics                    | Generics for variable-length tuples     | Dynamic function arguments              |
| Recursive generics                         | Generics for nested structures          | Deep object/array transformations       |
| Indexed access `T[K]`                      | Access property type dynamically        | Generic getters/setters                 |
