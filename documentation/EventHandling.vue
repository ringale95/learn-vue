## Event Handling

Event handling is a way to listen for and respond to user actions like clicks, keypresses etc.

The `v-on` directive which is `@` allows Vue to listen for DOM event and execute JS actions

### Event Binding with v-on and @

```
<button v-on:click="handleClick">Click me</button>
or
<button @click="handleClick">Click me</button>
```

### Inline handlers
```
<button @click="count++">Increment</button>
```

### Event Modifiers
Modifers are used to prevent any default actions or stopping propagation. Modifiers are
added after event name with a dot

Common Modifiers
.stop – Stops event propagation.
.prevent – Prevents the event's default action.
.self – Only triggers the event if the target is the element itself, not a child.
.capture – Sets capture mode, making the handler trigger on the capturing phase.
.once – Ensures the handler is only called once.
.passive – Improves performance for scroll events by allowing default actions to run immediately.

### Key modifiers
Vue allows specific key detection directly through key modifiers, like
.enter, .tab, .delete, .esc, .space, .up, .down, .left, .right

```
<input @keyup.enter="submit">

```

### System Modifier keys
System keys lik Ctrl, Shift, Alt, Meta can be used with key modifiers
```
<button @click.ctrl="onClick">Ctrl + Click</button>
```

### Mouse Button Modifiers
Vue has modifiers for specific mouse buttons:
left, right, middle 
```
<div @click.right="showContextMenu">Right Click</div>
```