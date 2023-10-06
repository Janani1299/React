# What is Mocroservice?
    Micaroservice also known as the microservice architecture. It is an architectural & organizational approach to software where software is composed of small independent services like database, server or UI of the application, that communicates over well-defined APIs. These services are owned by small, self-contained teams.Microservices architecture makes applications easier to scale & faster to develop, enabling innovation and accelerating time to market for new features.

# What is monolith architecture?
    A monolith architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolith architecture is a singular large computing network with one code base that couples all of the business concern together. It means we are not dividing software into small, well-defined modules, we use every services like database, server or a UI of a application in one Application file.


# what is difference between monolith & microservice architecture
    With monolith architecture all process are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolith application features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implementation new ideas. Monolith architectures add risk for application availability because many dependent & tightly coupled processes increase the impact of a single process failure.

    With a microservice architecture an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities & each service performs a single function. Because they are independently run, each service can be updated, deployed & scaled to meet demand for specific functions of an application.

# why do we need a useEfect hook?
    useEffect Hook is a Javascript function provided by react. The useEffect Hook allows you to eliminate side effects in your components. Some Examples of side Effects are:
    fetching API data, directly updating the DOM & setting up subscriptions or timers etc. It can be lead to unwarranted side-effects. UseEffects accepts two arguments, first arguments is a callback function & second one is dependency array. The second argument is optional.
    useEffect(() => {},[])
     here ()=> {} is a callback function, [] is a dependency array
     If anything that we pass inside the [] trigger the callback function & changes the state of the application.
     If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

# what is optional chaining?
    A optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called its undefined or null, it returns undefined instead of throwing an error.
    Optional chaining is a good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of throwing key error, its return undefined.

# What is shimmer UI?
    A shimmer Ui resembles the page's actual UI, so users will understand how quickly the web or mobile app will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of whats about to come & what's happening. When a page full of content/data takea more than 3-5 seconds to load. Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design shimmer UI for our application that is good for user Experience.

# What is the difference between JS Expression & JS statement
    JS Expression -> It returns a value that we use in the application. It produce a value & thus can be used in places where values are required. So expressions can be used as values for variables, argument to functions/operands to operators.
    JS statement -> create sideeffects to be useful, while expression are values/execute to values

# What is conditional Rendering? Explain with a code Example.
    Conditional Rendering in React Works the same way conditional work in JS. Use JS operators like if/the conditioanl operator to create elements representing the current state and let react update the UI to match them.(eg)
    listOfRestaurant.length === 0 ? <Shimmer/>:<RestaurantCard/>

# What is CORS?
    CORS- Cross Origin Resource Sharing
    It's an http header based mechanism that allows a server to indicate any origin(domain,scheme/port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

# What is async & await?
    Async -> It simply allows us to write promises-based code as if it was synchronous & it checks that we are not breaking the execution thread. It operate asynchrously via event loop & always return promise.Async keyword is used to declare async function. Async functions are functions that are instance of the Async Function constructor. Unlike normal function, async function always return a promise.
    Await -> It can be put infront of any async promise based function to pause your code until that promise settles & returns it result. It only works inside async function cannot use await in normal function.

# What is the use of const json = await data.json(); in getRestaurant?
    The data object, returned by the await fetch(), in a generic placeholder for multiple data formats. So we can extract the "JSON Object" from a "fetch" response by using await data.json().
    data.json() is a method on the data object that the lets you extract a JSON object from data or response. The method returns a promise because we have used await keyword, so data.json() returns a promise resolved to a JSON object.
