const toolbarContainer = [
  [{'header': ['3',false]}],
  [{'font': []}],
  [{'color': []}],
  ['bold', 'italic', 'underline', 'strike'],
  [{'align': ['', 'center', 'right', 'justify']}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  ['clean'],
  ['image']
];

const quill = new Quill('#editing', {
    modules : {
      toolbar: toolbarContainer
    },
    theme: 'snow'
  });

const submit_button = document.getElementById("submit_button")

submit_button.addEventListener('click', function (){
  console.log("clicked the submit button")
  const quillContent = quill.getContents();
})