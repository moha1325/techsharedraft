# Rich Text Editing: Quill

## Rich Text Editors
Rich text editors are software tools for text input. Unlike plain text editors, rich text editors allow for a variety of formats to make the text more visually appealing. Some of the most common features present in many rich text editors include text formatting options for fonts/text size/weight, multimedia embedding, tables and lists, undo/redo features, and more. The chances are that if you use the internet often, you probably have interacted with a rich text editor, or at least the byproducts of one. One example of a system that uses a rich text editor is Wikipedia, which uses it for generating and editing page content.

Many rich text editors fall under the category of "WYSIWYG", standing for "What you see is what you get". This indicates that whatever is in the editor at the time the post is published will be reflected in the finished product. Another common kind of rich text editor is a markup editor, which allows users to edit text with markdown or some similar language. 

## QuillJS
This tutorial discusses one of the options for someone looking to add a rich text editor to their own site, the open source JavaScript library Quill.js. Quill falls under the category of WYSIWYG editors. It is extremely flexible, providing options for text styling(size, bold, italics, underlines, etc.), alignment, lists, tables, and much more, all wrapped up in a clean UI. It is highly customizable to the developers needs as well, with many options for extending the functionality of the editor. Next up, a tutorial on how to integrate a Quill.js editor into your application.

## Setup Environment 
We will be using mostly JavaScript and HTML here to demonstrate, so it is assumed that you have some basic knowledge of both. Any method you have to view/serve your files will be good, but in this tutorial we will first make a quick Flask server

