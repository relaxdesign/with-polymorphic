import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import withPolymorphic from '../with-polymorphic';

interface PolymorphicComponentProps {
  children?: React.ReactNode;
  as?: React.ElementType;
}

const PolymorphicComponent = withPolymorphic<'div', PolymorphicComponentProps>(
  ({as: Component = 'div', children, ...restProps}) => (
    <Component {...restProps}>{children}</Component>
  ),
);

describe('withPolymorphic', () => {
  test('renders with default element', () => {
    const {container} = render(
      <PolymorphicComponent>Test</PolymorphicComponent>,
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
    expect(container.textContent).toBe('Test');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element', () => {
    const {container} = render(
      <PolymorphicComponent as="button">Test</PolymorphicComponent>,
    );

    expect(container.firstChild?.nodeName).toBe('BUTTON');
    expect(container.textContent).toBe('Test');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and additional props', () => {
    const {container} = render(
      <PolymorphicComponent as="button" className="custom-button">
        Test
      </PolymorphicComponent>,
    );

    const buttonElement = container.firstChild as HTMLElement;

    expect(buttonElement.nodeName).toBe('BUTTON');
    expect(buttonElement.getAttribute('class')).toContain('custom-button');
    expect(container.textContent).toBe('Test');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with nested components', () => {
    const {container} = render(
      <PolymorphicComponent>
        <div>
          <span>Nested Component</span>
        </div>
      </PolymorphicComponent>,
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
    expect(container.querySelector('span')?.textContent).toBe(
      'Nested Component',
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and no children', () => {
    const {container} = render(<PolymorphicComponent as="button" />);

    expect(container.firstChild?.nodeName).toBe('BUTTON');
    expect(container.textContent).toBe('');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and event handlers', () => {
    const handleClick = jest.fn();

    const {container} = render(
      <PolymorphicComponent as="button" onClick={handleClick}>
        Test
      </PolymorphicComponent>,
    );

    expect(container.firstChild?.nodeName).toBe('BUTTON');
    expect(container.textContent).toBe('Test');
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(container.firstChild as HTMLElement);
    expect(handleClick).toHaveBeenCalled();
  });

  test('renders with custom element and custom attribute', () => {
    const {container} = render(
      <PolymorphicComponent as="a" href="https://example.com">
        Link
      </PolymorphicComponent>,
    );

    const linkElement = container.firstChild as HTMLElement;

    expect(linkElement.nodeName).toBe('A');
    expect(linkElement.getAttribute('href')).toBe('https://example.com');
    expect(container.textContent).toBe('Link');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and conditional rendering', () => {
    const showContent = true;

    const {container} = render(
      <PolymorphicComponent as="div">
        {showContent && <span>Conditional Content</span>}
      </PolymorphicComponent>,
    );

    expect(container.firstChild?.nodeName).toBe('DIV');

    expect(container.querySelector('span')?.textContent).toBe(
      'Conditional Content',
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and custom style', () => {
    const customStyle = {color: 'red', fontSize: '16px'};

    const {container} = render(
      <PolymorphicComponent as="div" style={customStyle}>
        Styled Content
      </PolymorphicComponent>,
    );

    const divElement = container.firstChild as HTMLElement;

    expect(divElement.nodeName).toBe('DIV');
    expect(divElement.getAttribute('style')).toBe(
      'color: red; font-size: 16px;',
    );
    expect(container.textContent).toBe('Styled Content');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with custom element and disabled state', () => {
    const {container} = render(
      <PolymorphicComponent as="button" disabled>
        Disabled Button
      </PolymorphicComponent>,
    );

    const buttonElement = container.firstChild as HTMLButtonElement;

    expect(buttonElement.nodeName).toBe('BUTTON');
    expect(buttonElement.disabled).toBe(true);
    expect(container.textContent).toBe('Disabled Button');
    expect(container.firstChild).toMatchSnapshot();
  });
});
