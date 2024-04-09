# Rich Text Editing: Quill

## Rich Text Editors
Rich text editors are software tools for text input. Unlike plain text editors, rich text editors allow for a variety of formats to make the text more visually appealing. Some of the most common features present in many rich text editors include text formatting options for fonts/text size/weight, multimedia embedding, tables and lists, undo/redo features, and more. The chances are that if you use the internet often, you probably have interacted with a rich text editor, or at least the byproducts of one. One example of a system that uses a rich text editor is Wikipedia, which uses it for generating and editing page content.

Many rich text editors fall under the category of "WYSIWYG", standing for "What you see is what you get". This indicates that whatever is in the editor at the time the post is published will be reflected in the finished product. Another common kind of rich text editor is a markup editor, which allows users to edit text with markdown or some similar language. 

## QuillJS
This tutorial discusses one of the options for someone looking to add a rich text editor to their own site, the open source JavaScript library Quill.js. Quill falls under the category of WYSIWYG editors. It is extremely flexible, providing options for text styling(size, bold, italics, underlines, etc.), alignment, lists, tables, and much more, all wrapped up in a clean UI. It is highly customizable to the developers needs as well, with many options for extending the functionality of the editor. Next up, a tutorial on how to integrate a Quill.js editor into your application.

## Setup Environment 
We will be using mostly JavaScript and HTML here to demonstrate, so it is assumed that you have some basic knowledge of both. Any method you have to view/serve your files will be good. Even just downloading the html file you edit and displaying it in the browser will be alright for the basics here, though you might miss out on some features covered later. However, in this tutorial we will use an express.js server to show our main html file(and the static js file that it links to). [This](https://expressjs.com/en/guide/routing.html) is a link to the documentation on how to generate a  express.js server if you wish to learn. [Here](https://medium.com/@naveednadaf/quick-node-express-js-project-setup-guide-88cd4d9a7af3) is another quick tutorial on how to set up an express server that goes over pretty much everything you'll need for this, from installation to routing. We only use one route to serve the html, '/'. 

## Setting Quill Up
The first thing you'll need is some html. Nothing needs to be in the body (yet), but we should add some links to the head. Specifically, links to the stylesheet for the Quill editor and the Quill library itself. 

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title> Template </title>
        <link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.snow.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.js"></script>
    </head>

    <body>

    </body>
    
</html>
```


To actually add the Quill editor onto your page, the first thing you need to do is add a DOM element which will contain it, and some id to help with actually using that element. So in your body, add a div with the id "editing". 

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title> Quill Js</title>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.snow.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.js"></script>
  </head>

  <body>

    <div id="editing"> </div>
    
  </body>
</html>
```

At this point, there is a choice between just using inline JavaScript to initialize the editor or using a separate JavaScript file and linking it in our html. For this tutorial, we will show how to use Quill with the use a separate file. The code is pretty much the same for inline use as well. 

In the new JavaScript file, we can initialize the editor like this

```
const quill = new Quill('#editing', {
    theme: 'snow'
  });
```

Make sure when you link to the javascript file, to do it after the container was initialized. If you don't, the console will throw an error, since the container won't have been rendered yet. Now, your JavaScript file should look like the above code box, and your html should look something like 

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title> Quill Js</title>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.snow.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.js"></script>
    
  </head>
  <body>
    <div id="editing">
    </div>
    <script src="quill_tutorial.js"></script>
  </body>

</html>
```

Now, when you look at what this html displays, you should see a basic Quill editor. Congrats!

![](/images/img_11.png?raw=true)








