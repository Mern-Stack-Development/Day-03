import React from 'react';

const ChildComponent = React.memo(({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click me!</button>;
});

//Without UseCallback
// const ChildComponent = ({ onClick }) => {
//     console.log('ChildComponent rendered without useCallback');
//     return <button onClick={onClick}>Click me!</button>;
// };
export default ChildComponent;
