#Event Propagation

Event capture phase - When an event occurs in the DOM, notification of the event is passed starting at the top of the DOM tree and passing down through all parent element nodes all the way to the target node where the event occurred.

Event target phase - After the capturing phase occurs, the Target phase occurs. The target phase only includes a notification of Node where the event took place.

Event bubbling phase - This is the final phase to occur, although many people think this is the first phase. In the bubbling phase a notice is passed from the target Node up through all of the parent Nodes all the way back to the top root of the DOM.

 When an event occurs - JavaScript/the browser start at the ‘top’ of the DOM tree then looks down/zooms into the target (whatever element the event occurred on), then looks back up/out element by element to see if there are any event listeners/handlers that need fired