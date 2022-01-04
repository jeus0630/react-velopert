import {useRef, useState} from "react";

const InputSample = () => {
    const [inputs,setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input type="text" name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input type="text" name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>값: </b>
                {name} : ({nickname})
            </div>
        </div>
    )
}

export default InputSample;