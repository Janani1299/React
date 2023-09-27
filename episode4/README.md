Is Jsx mandatory for react?
    JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.

Is ES6 mandatory for react?
    ES6 is not mandatory for react.ES6 is the standardization of javascript for making code more readable and more accessible. If we don't use ES6 in react, there is an alternative to perform. We use create-react-class instead of ES6. Let's see some variations between ES6 and the create-react-class method.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
    {TitleComponent} : This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.
    {<TitleComponent/>}: This value represents a component that is basically returning some JSX value.
    {<TitleComponent></TitleComponent>}: This are equivalent only when  {<TitleComponent/>} has no children's component the opening & closing tag are created to include child components.

How can I write comments in JSX?
    JSX comments are written as follows:
    {/*comment here*/} -> for single or multiline comments

What is <React.Fragment> </React.Fragment> and <> </>?
    <React.Fragment> </React.Fragment> ->React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element.
    <> </>->`<>` is the shorthand tag for `React. Fragment` which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the `key` attribute.

What is Reconciliation in React?
    Reconciliation is the process through which React updates the Browser DOM & makes React work faster.React provides a declarative API so that you don’t have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React. Important concepts behind the working of the Reconciliation process are: Virtual DOM. Diffing Algorithm.

what is React Fiber?
    React Fiber is a backwards compatible, complete rewrite of the React core. In other words, it is a reimplementation of older versions of the React reconciler. Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React.

Why do we need keys in React?
    A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists.

Can we use Index as keys in React?
    Yes, we can use Index as keys in React but it is not considered as good practice.If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

What is props in React?
    In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components. This can be useful when you want the flow of data in your app to be dynamic.

What is config Driven UI?
    In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase.

Difference between VirtualDOM and RealDOM?
    A virtual DOM object is the same as a real DOM object, except that it is a lightweight copy. This means that it cannot manipulate on-screen elements. Moreover, upon any change of a property, it only updates the corresponding nodes and not the entire tree.

    Real DOM is what you see on your browser screen and virtual DOM is copy of it. The main difference is that when you make changes in any part of real DOM, It re-renders the whole DOM at once and that affects efficiency of your server loading cause it has to reload the whole page as browser can only read JS, Html/CSS.






