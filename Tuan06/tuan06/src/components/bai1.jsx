    import React, { useReducer, useRef, useState } from 'react'
    import './bai1.css'

    export default function Bai01() {

        function reducer(state, action){
            console.log(action);
            switch(action.type) {
                case '+': return {...state, count: state.count + 1}
                case '-': return {...state, count: state.count - 1}
                default: 
                    return state;
            }
        }

        var [state, dispatch] = useReducer(reducer, { count: 0 });

        var [name, setName] = useState(undefined);

        var valueInput = useRef(0);

        function increment(){
            dispatch({type:'+'})
        }

        function decrement(){
            dispatch({type:'-'})
        }

        function handelInputChange() {
            setName(valueInput.current.value);
        }

        return (
            <>
                <div>
                    <h2>Count: {state.count}</h2>
                    <button onClick={increment} >+</button>
                    <button onClick={decrement}>-</button>
                </div>
                <br />
                <span>{name}</span> <br />
                <input ref={valueInput} type="text" />
                <button onClick={handelInputChange}>Click</button>
            </>    
        );
    }