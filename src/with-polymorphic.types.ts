type MergeProps<ExistingProps = unknown, NewProps = unknown> = NewProps &
  Omit<ExistingProps, keyof NewProps>;

type JSXElement =
  | keyof React.JSX.IntrinsicElements
  | React.JSXElementConstructor<unknown>;

type ManagedAttributes<Element extends JSXElement> =
  React.JSX.LibraryManagedAttributes<
    Element,
    React.ComponentPropsWithoutRef<Element>
  >;

type ElementProp<Element> = {
  as?: Element;
};

type MergedProps<
  Element extends JSXElement,
  AdditionalProps = unknown,
> = MergeProps<ManagedAttributes<Element>, AdditionalProps>;

type ElementRef<Element> = Element extends React.ElementType
  ? React.ComponentPropsWithRef<Element>['ref']
  : never;

export type ComponentProps<
  Element,
  AdditionalProps = Record<string, never>,
> = Element extends React.ElementType
  ? MergedProps<Element, AdditionalProps & ElementProp<Element>> & {
      ref?: ElementRef<Element>;
    }
  : AdditionalProps & {
      as: React.ElementType;
    };
