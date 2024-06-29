# Interface Segregation Principle  (ISP)

<p align="center">
  <img src="../../static/liskov.jpg">
</p>

If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.

## Explanation  

### Subtyping (S is a subtype of T):

In object-oriented programming, a subtype S of type T means that S inherits from T or implements T (in the case of interfaces).
Essentially, S should be a more specific version of T.

### Objects of type T:

These are instances of the class T or any of its supertypes.
In a program, you might have variables, parameters, or return types that are declared to be of type T.

### May be replaced with objects of type S:

This means that anywhere you use an object of type T, you should be able to use an object of type S instead.

### Without altering any of the desirable properties of that program:

The program should continue to function correctly without any changes in its behavior.
This implies that S must meet the expectations set by T's contract, including method behavior, performance characteristics, and any invariants or preconditions.