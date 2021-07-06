import React from 'react';

const Input = (props) => {
    const {list, setList} = props;

    let chore = {
        name: "",
        isComplete: false
    };
    const onChange = (event) => {
        chore.name = event.target.value;
    };

    const onClick = (event) => {
        setList([...list, chore]);
        event.target.value = "";
    }

    return(
        <div className="container w-50">
            <input className="form-control" onChange={onChange} type="text" name="chore"/>
            
            <button className="btn btn-primary btn-block mt-1" onClick={onClick}>
                Add Chore
            </button>
        </div>
    )
}

export default Input;