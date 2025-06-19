## ✅ Utility Types
| Utility Type    | What It Does                                     | Real-Life Use                         |
| --------------- | ------------------------------------------------ | ------------------------------------- |
| `Partial<T>`    | Makes all fields optional                        | Form updates, PATCH requests          |
| `Required<T>`   | Makes all fields required                        | Validate full data before saving      |
| `Pick<T, K>`    | Keeps only selected keys                         | Build lightweight DTOs or views       |
| `Omit<T, K>`    | Removes selected keys                            | Hide sensitive/internal fields        |
| `Record<K, T>`  | Builds an object map with consistent value types | Role configs, labels, enums           |
| `ReturnType<T>` | Gets the return type of a function               | Reuse output type elsewhere           |
| `Parameters<T>` | Gets the input arguments of a function           | Reuse input in forms, mocks, wrappers |
