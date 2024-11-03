## Declarative programming

countDisplay.textContent = `You clicked ${count} times`;

> Note: In DOM API, the attribute textContent helps us define the text content
> of a given element. For example, here <p> with class 'count-display' referenced
> by countDisplay, we are setting the text as `You clicked ${count} times`

Declarative approach
```
import { useState } from 'react';

    export default App = () =>{
    const[count, setCount] = useState(0);

        const handleClick = () =>{
            setCount(count + 1);
        }
    return(
        <>
            <button onClick={handleClick}>You click me {count} times</button>
        
        </>
    )
}
```

#Javascript
```
let count = 0;
const btnElement = document.getElementById('btn');
btnElement.addEventListener('click', () =>{
    count += 1;
    btnElement.textContent = `You clicked me ${count} times`;
})
 
 html:
 <button id="btn"></button>
```
