const placeholder =
`INSTRUCCIONES
# h1
## h2
[freeCodeCamp](https://www.freecodecamp.com)
\`<p>code</p>\`
\`\`\`
Multi line code:

function func(arg) {  
    return arg;  
}
\`\`\`

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or
* asterisks

**bold**

> Block Quotes

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

marked.setOptions({
breaks: true
});
const renderer = new marked.Renderer();
function App () {
const [text,setText] =React.useState(placeholder, "");
return (
<div className="text-center px-4">
<h1 className="p-4">Olukosi Markdown Previewer</h1>
<textarea name="text" id="editor" rows="10" value={text} onChange={(e)=>setText(e.target.value)} className="textarea"></textarea>
<h3 className="mt-3">Previewer</h3>
<Preview markdown={text} />
</div>
);
}

function Preview ({ markdown }) {
return (
<div dangerouslySetInnerHTML={{
__html: marked(markdown, { renderer: renderer}),
}}
id="preview"
>
</div>
);
}
ReactDOM.render(<App />, document.getElementById("root"));