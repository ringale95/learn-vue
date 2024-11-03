In Vue, HTML-based template syntax means Vue uses an enhanced form of HTML to describe structure of UI.

With this template we can bind <code>data</code> to our HTML.

## Data binding

1. Text interpolation

```
<span>Message : {{msg}} </span>
```

2. Directive :v-html

v-html helps to generate  raw HTML content that is stored in a data property or comes from datasource 
   
   ```
   data(){
    return{
        rawHTML: '<h2>Welcome to Blog </h2> <p> This is <strong>sample</strong> </p>'
    }
   }

   <template>
    <div> {{rawHTML}} </div>     // without v-html it displays html as plain tags
    <div v-html="rawHTML"></div>   //with v-html it renders HTML tags as formatted contents
   </template>

   ## Attribute binding

   <div v-bind:id="dynamicID"></div>
   ```
   <code>v-bind</code> 
    So here we are binding html attribute like id, class, src to data or expression 


### Directives:

These are special attributes with "v-" prefix. Its job is to reactively apply updates to DOM when value of expression changes


