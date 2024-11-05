## Form Handling

We often need to sync the state of form input elements with corresponding state in JavaScript.

`v-model` helps in two-way data binding and change event listeners

```
<input v-model="text">
```

Example:
```
<input v-model="message" placeholder="edit me" />
```

```
<input type="checkbox" v-model="isChecked" />
<p> Checkbox is : {{ isChecked }}
```

Convert input into bumber
```
<input v-model.number="age" />
```

Updates bound properly only after the change event and not on each keystroke
```
<input v-model.lazy="username" />
```
