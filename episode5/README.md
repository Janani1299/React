# what is the difference between Named Export, Default EXport and * as Export ?
 - If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default . 
 - If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports surrounded in {} braces.
 - In * as export it is used to import the whole module as a component & access the components inside the module. 

 # What is the importance of config.js file?
 - Config. js allows developers to configure their applications in an XML block instead of hard-coding values inside their scripts or in JSON objects. The XML can be embedded inside an HTML document or in a separate XML file. The configuration block may contain strings, numbers, arrays and HTML.

 # What are React Hooks?
 - React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.
    * useState -> manage state & return stateful value & an updater function to update it.
    * useEffect -> manage side-effects like API calls, subscriptions, timers, mutuation and more.
    * useContext -> return a current value for a context
    * useCallback -> return a memorized version of a callback to help child component not re-render unncessarily
    * useMemo -> return a memoized value that helps in performance optimization
    * useRef -> It return a ref object with a current property. The ref object is mutable. It  is mainly used to access a child component imperatively.
   * useReducer -> used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.

   # why do we need useState hook?
    - The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.