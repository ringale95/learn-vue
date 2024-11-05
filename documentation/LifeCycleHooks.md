## Lifecycle hooks

From creation to destruction lifecycle hooks are special functions that allow you to perform specific actions at various stages

Creation: 
c
omponent instance is setup and initial properties, data, events are created
Mounting: Component added to DOM and initial rendering takes place
Updating: Component reacts to reactive data changes and re-renders
Unmounting:  Component is removed from DOM

```
onMounted(() => {
    console.log('This will not work correctly');
  });
  ```

  Other hooks
onBeforeMount: Called right before the component is added to the DOM.
onMounted: Called after the component is added to the DOM.
onBeforeUpdate: Called before the component updates due to reactive data changes.
onUpdated: Called after the component updates.
onBeforeUnmount: Called just before the component is unmounted.
onUnmounted: Called after the component has been removed and cleaned up.