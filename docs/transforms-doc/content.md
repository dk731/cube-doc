---
sidebar_position: 0
---

# Introduction

Transformation are more complex but also very powerful tool that allows to _translate_, _scale_ or _rotate_ idividual scene objects or even whole scene. Use of build-in transformation system allows to produce complicated output with almost none performance loos at a cost for a few lines. Library have built-in transformation system and in this section you would be able to find out everythink about it.

## Matrices

For relative transformations and easier manipulation of whole coordinate system, in core of this mechanism is matrices stack, whenever you are _translating_, _scaling_ or _rotating_ origin, you are modifieng top maxtrix entity. After modification all drawing calls will be affect by summary of all matrices (each matrix will be calculating by _scaling_ -> _rotating_ -> translating) in the stack. For stack manipulation there are 3 funtions:

```python
def push_matrix() -> None
def pop_matrix() -> None
def pop_all_matrix() -> None
```

:::tip TIP
Matrices stack cant be empty, so when you are popping the only matrix, all transformation that were included in it will be cleared, but the matrix stack will still contain 1 matrix.npxs
:::

In the next chapters will be explained usage of:

- [Translations](./translations)

- [Scaling](./scaling)

- [Rotation](./rotation.md)
