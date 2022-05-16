import './App.css';
var Template = require('./template');


export default function App() {
    return ( <
        div dangerouslySetInnerHTML = {
            { __html: Template }
        }
        />
    );
}