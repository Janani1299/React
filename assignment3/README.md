JSX -> 
    JSX stands for Javascript syntax. It is a extension of JS. It produces react elements.It not a part of react, both are different. JSX is not a pure JS. Its a more readable & concise way to create & manipulate DOM elements compared to using JS methods directly.It is a simplest & easiest way to create react elements.

superpower of JSX ->
    JSX as variables -> const hello = <h1>Hello world </h1>
    EXpression in JSX -> JSX supports all JS expression by wrapping them inside a pair of curly brackets.
                            const name = "Janani"
                            const hello = <h1>Hello {name} </h1>
    Attributes in JSX -> Attributes were written in camalcase
                            const image = "JJ.img";
                            <img src={image} 

type attribute in script tag ->
    the type attribute of the <script> element indicates the type of script represented by the element
    type attribute -> describes the type of script
    default value -> text/js
    script -> type modules -> indicate file type in modules
            type ecmascript -> indicate file is following ECMASCRIPT standard

{TitleComponent} -> It describes variable that returns JSX elements or jS expression
{<TitleComponent/>} -> This value represent a component that is returning some JSX or function that return JSX
{<TitleComponent></TitleComponent/>} -> This is equivalent to the self-closing JSX elements. 