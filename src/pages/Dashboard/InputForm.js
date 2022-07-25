import React from 'react';

const InputForm = ({ handlePost }) => {
    return (
        <div className=" container p-3 bg-secondary rounded ">
            <form className='container mt-3' onSubmit={handlePost}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control p-2" placeholder="Username" aria-label="Username" name="userName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Note</span>
                    <textarea className="form-control p-2" aria-label="With textarea" name="textData"></textarea>
                </div>
                <div className='mt-3'>
                    <button type="submit" className="btn btn-primary mb-3 px-4 py-2">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;