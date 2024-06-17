import { useState } from 'react';

const InputDKeyModal = ({ onSubmit }) => {
    const [dkey, setDKey] = useState("");

    const handleSubmit = () => {
        onSubmit(dkey);
        // Optionally, you can reset the input field after submission
        setDKey("");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Submit The Decryption Key</h1>
                <input type="text" value={dkey} onChange={(e) => setDKey(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default InputDKeyModal;
