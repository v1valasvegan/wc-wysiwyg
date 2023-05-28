import './content.css';
import './wc-wysiwyg.css';
import('./dist/wc-wysiwyg.js').then((esm) => {
  //you can pass any name into define fn
  esm.define();
});

console.log('content loaded!');
