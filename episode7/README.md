# what are the various way to add Images into our app?
    Using full URL of the image for the web or any public images. eg:
    * <img src="https://logo.png" alt="image" />
    Adding image into our project drag your image into the project & import it into the desired component.eg:
    * import image from "./logo.png;
    export default function App() {
        return <img sr={image} alt="Logo" />
    }
    The correct way to structure images in your projects is to add them in an "images" folder. If you are using other assets then just images, you might want to add all in the assets folder. eg:
     import image from "./logo.png;
    export default function App() {
        return <img sr={image} alt="Logo" />
    }

# what would happen if we do console.log(useState())?
    console.log(useState()) we get an array of undefined, function
    console log(useState()) -> [undefined,function]
    where first term in an array is state is undefined & second term in array is setState function is bound dispatchsetState.

# How will useEffect, behave if we don't add dependency array?
    syntax of useEffect is, useEffect(()=> {},[]);
    When the dependency array is empty, in the arguments of useEffect() hook, the callback function will be executed only one time during the initial render of the component.
    useEffect(() => {
        console.log("component render")
    });
    When the dependency array is empty, in the arguments of useEffect() hook, the callback function will be executed only one time during the initial render of the component.
    useEffect(()=> {
        console.log("run only once when the component gets mounted")
    },[]);
    When the dependency array contains a condition, the callback function will be executed one time during the initial render of the component & also render if there is a change in the condition.
    useEffect(() => {
        console.log("Run every time when my condition changed")
    },[condition]);

# what is SPA?
    Single page Application is a web application that dynamically updates the webpage with data from webserver without reloading/refreshing the entire page. All the HTML,CSS,JS are retrieved in the initial Load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes reffered to as a single Page interface(SPI)

# what is client-side Routing & server-side Routing?
    In server side Routing or Rendering every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.
    In client side routing or rendering(CSR), during the first load, the webpage is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All single page Applications uses client-side routing. 

