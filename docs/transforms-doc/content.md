---
sidebar_position: 0
---

# Introduction

Transformation is a more complex but powerful tool that allows to _translate_, _scale_ or _rotate_ individual scene objects or even whole scene. A build-in transformation system allows producing complicated output with almost no performance loss at a cost for a few lines. The library has a built-in transformation system, and in this section, you will be able to find out everything about it.

## Matrices

For relative transformations and easier manipulation of a whole coordinate system, the core of this mechanism is the matrices stack. When you are _translating_, _scaling_, or _rotating_ origin, you modify the top matrix entity. After modification, all drawing calls will be affected by a summary of all matrices (each matrix will be calculated by _scaling_ -> _rotating_ -> translating) in the stack. For stack manipulation, there are three functions:

```python
def push_matrix() -> None
def pop_matrix() -> None
def pop_all_matrix() -> None
```

:::tip TIP
Matrices stack can't be empty, so when you are popping the only matrix, you are clearing all transformations stored in it.
:::

In the following chapters will be explained the usage of:

- [Translations](./translations)

- [Scaling](./scaling)

- [Rotation](./rotation.md)
