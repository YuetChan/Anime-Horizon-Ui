function initQuillEditor(id){
  var editor = getQuillEditorById(id);
  if(!editor){
    try {
      editor = new Quill(`#${id}`, {
        modules: {
          toolbar: toolbarOptions,
          imageResize: imageResizeOptions,
          imageDrop: true
        },
        theme: 'snow'
      });

      quillEditors.set(id, editor);
      return editor;
    } catch (error) { return null; }
  }else
    return null;

}

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'align': [] }],
  [{ 'direction': 'rtl' }],

  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  ['image'],

  ['clean']
];
var imageResizeOptions = { displaySize: true };

function getQuillEditorById(id){ return quillEditors.has(id) ? quillEditors[id] : null; }
function getQuillEditorLengthById(id) { return quillEditors.has(id) ? quillEditors[id].getLength() : null; }

function loadHistoryStack(stack, editor){
  var Delta = Quill.import('delta');
  if (stack.undo.length > 0) {
    for (var i = 0; i < stack.undo.length; i++) {
        var ob = {};
        ob.redo = new Delta(stack.undo[i].redo.ops);
        ob.undo = new Delta(stack.undo[i].undo.ops);
        editor.history.stack.undo.push(ob);
    }
  }
  if (stack.redo.length > 0) {
    for (var i = 0; i < stack.redo.length; i++) {
        var ob = {};
        ob.redo = new Delta(stack.redo[i].redo.ops);
        ob.undo = new Delta(stack.redo[i].undo.ops);
        editor.history.stack.redo.push(ob);
    }
  }
}
