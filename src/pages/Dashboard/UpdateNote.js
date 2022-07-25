import React from 'react';
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};


Modal.setAppElement("#root");


const UpdateNote = ({ id, setIsReload, isReload }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    const handleUpdate = (event) => {
        event.preventDefault();
        console.log("hello");
        const userName = event.target.userName.value;
        const textData = event.target.textData.value;

        // console.log(userName, textData);
        fetch(`http://localhost:5000/note/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, textData }),
        })
            .then((res) => res.json())
            .then((data) => setIsReload(!isReload));
    };
    return (
        <div>
            <button onClick={openModal} className="bg-info mx-2 btn text-white">
                Update
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-sm btn-danger">
                    close
                </button>
                <div className='fs-2 fw-3'>Please insert your text</div>
                <div className=" p-3 bg-secondary">
                    <form className="container " onSubmit={handleUpdate}>
                        <div className="input-group mb-3 mt-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name"
                                aria-label="Username"
                                name="userName"
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-text">Note</span>
                            <textarea
                                className="form-control"
                                aria-label="With textarea"
                                name="textData"
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <input type="submit" value="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default UpdateNote;