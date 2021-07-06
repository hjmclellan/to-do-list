import React from 'react';

const Chore = (props) => {
    const { chore, index, list, setList } = props;
    const onClick = () => {
        setList(() => {
            return list.filter(chore => list.indexOf(chore) !== index)
        });
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };
    return (
        <div className="container bg-secondary">
            <h4 style={{textDecoration: chore.isComplete && "line-through"}}>{chore.name}</h4>

            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" checked={chore.isComplete}/>
                <button onClick={onClick} className="btn btn-sm btn-danger" onClick={onClick}>Delete Chore</button>
            </div>
        </div>
    )
};

export default Chore;