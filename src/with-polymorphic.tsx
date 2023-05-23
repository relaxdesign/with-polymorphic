import React from 'react';
import type {ComponentProps} from './with-polymorphic.types';

export default function withPolymorphic<
  DefaultElement,
  Props,
  StaticProps = Record<string, never>,
>(Component: React.ElementType) {
  type ComponentWithProps<Element> = ComponentProps<Element, Props>;

  type ComponentType = <Element = DefaultElement>(
    props: ComponentWithProps<Element>,
  ) => React.ReactElement;

  type FunctionComponent = Omit<
    React.FunctionComponent<ComponentWithProps<unknown>>,
    never
  >;

  type PolymorphicComponent = ComponentType & FunctionComponent & StaticProps;

  return Component as PolymorphicComponent;
}
