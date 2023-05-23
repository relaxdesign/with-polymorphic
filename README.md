# With Polymorphic

[![github](https://github.com/relaxdesign/with-polymorphic/actions/workflows/test.yml/badge.svg)](https://github.com/relaxdesign/with-polymorphic/actions/workflows/test.yml)
[![codecov](https://codecov.io/github/relaxdesign/with-polymorphic/branch/main/graph/badge.svg)](https://codecov.io/github/relaxdesign/with-polymorphic)
[![npm](https://img.shields.io/npm/v/with-polymorphic?color=#353C43)](https://www.npmjs.com/package/with-polymorphic)
[![npm](https://img.shields.io/npm/dm/with-polymorphic?color=#353C43)](https://www.npmjs.com/package/with-polymorphic)
[![npm](https://img.shields.io/npm/l/with-polymorphic?color=#353C43)](https://github.com/relaxdesign/with-polymorphic/blob/main/LICENSE)

**With Polymorphic** (`with-polymorphic`) is a Higher Order Component for React that enables polymorphic prop patterns. This library is written in TypeScript to provide a well-typed experience.

## Table of Contents

- [Why Use With Polymorphic?](#why-use-with-polymorphic)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Usage with ForwardRef](#usage-with-forwardref)
- [Bug Report](#bug-report)
- [Contributing](#contributing)
- [License](#license)

## Why Use With Polymorphic?

- **Type Safety**: The library is written in TypeScript, ensuring a well-typed usage.
- **Flexibility**: With polymorphic prop patterns, you can create versatile components that can behave differently based on the passed props.
- **Easy Integration**: It's a Higher Order Component that can be easily wrapped around your existing components.

## Installation

You can install **With Polymorphic** (`with-polymorphic`) in your project using npm:

```bash
npm install with-polymorphic
```

Alternatively, you can use yarn:

```bash
yarn add with-polymorphic
```

## Usage

Here's an example illustrating how `withPolymorphic` can be used:

```jsx
import React from 'react';
import withPolymorphic from 'with-polymorphic';

interface PolymorphicComponentProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const PolymorphicComponent = withPolymorphic<'div', PolymorphicComponentProps>(
  ({ as: Component = 'div', children, ...restProps }) => (
    <Component {...restProps}>{children}</Component>
  )
);
```

## Examples

Here are some examples demonstrating both correct and incorrect prop assignments.

### Correct Prop Assignment

No additional props assigned. Component will render as expected.

```jsx
export function CorrectComponent() {
  return <PolymorphicComponent>Polymorphic Component</PolymorphicComponent>;
}
```

"as" prop set to "a" and "href" prop set to "/example" to render the component as a link.

```jsx
export function CorrectComponent() {
  return (
    <PolymorphicComponent as="a" href="/example">
      Polymorphic Component
    </PolymorphicComponent>
  );
}
```

### Incorrect Prop Assignment

The component does not handle or recognize the "href" prop, leading to unexpected behavior or errors.

```jsx
export function IncorrectComponent() {
  return (
    <PolymorphicComponent href="/example">
      Polymorphic Component
    </PolymorphicComponent>
  );
}
```

The component does not expect the "foo" prop, which may be ignored or cause errors.

```jsx
export function IncorrectComponent() {
  return (
    <PolymorphicComponent foo="bar">Polymorphic Component</PolymorphicComponent>
  );
}
```

## Usage with ForwardRef

Here's an example demonstrating the usage of `withPolymorphic` with `forwardRef`:

```jsx
import React, { forwardRef } from 'react';
import withPolymorphic from 'with-polymorphic';

interface PolymorphicComponentProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const PolymorphicComponentWithRef = withPolymorphic<'div', PolymorphicComponentProps>(
  forwardRef<HTMLDivElement, PolymorphicComponentProps>(
    ({ as: Component = 'div', children, ...restProps }, ref) => (
      <Component ref={ref} {...restProps}>{children}</Component>
    )
  )
);
```

## Bug Report

If you encounter any bugs or issues, please report them through the [Issues](https://github.com/relaxdesign/with-polymorphic/issues) section of our GitHub repository. When reporting an issue, please include as much information as possible, such as the version of the library you're using, what you expected to happen, what actually happened, and steps to reproduce the issue.

## Contributing

We welcome contributions to **With Polymorphic** (`with-polymorphic`)! If you're interested in contributing, please fork the repository and submit a pull request. If you're not sure where to start, take a look at the open [Issues](https://github.com/relaxdesign/with-polymorphic/issues) or feel free to submit new ones.

Before submitting a pull request, please make sure that your changes are well-documented and include appropriate test coverage. For more detailed information on contributing, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

**With Polymorphic** (`with-polymorphic`) is licensed under the [MIT License](LICENSE).
