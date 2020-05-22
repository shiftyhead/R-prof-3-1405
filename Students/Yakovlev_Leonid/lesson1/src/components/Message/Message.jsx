import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

// export default (props) => {
//     //props: sender, text
//     let { sender, text } = props;
//     //dopil
//     return (
//         <div>
//             <strong>{ sender }</strong>
//             <p>{ text }</p>
//         </div>
//     )
// }

let message = props => {
    let massagesArr = props.massages.map(massage => {
    return (<><p>{ massage }</p></>)
    });
return (<div>{ massagesArr }</div>)
}


export default message;