import React from 'react';
import UpdateNote from './UpdateNote';



const customStyles = {
    position: "absolute",
    top: "-45px",
    left: "10%",
    height: "65px",
    width: "65px",
};

const NoteCard = ({ note, handleDelete, isReload, setIsReload }) => {

    return (
        <div className="col mt-5" style={{ position: "relative" }}>
            <div className=" card h-100 text-white bg-secondary">
                <div
                    className=" bg-warning  rounded-circle mx-auto mt-2"
                    style={customStyles}
                >
                    <p className="text-center p-1 fs-2 fw-bold text-dark">

                        {note.userName.substring(0, 1)}
                    </p>
                </div>

                <div className="card-body mt-4">
                    <h5 className="card-title">Author : {note.userName}</h5>
                    <p className="card-text">{note.textData}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <div>
                        <button
                            className="btn-danger btn mx-2 "
                            onClick={() => handleDelete(note._id)}
                        >
                            Delete
                        </button>
                    </div>
                    {/* <button>update</button> */}
                    <UpdateNote setIsReload={setIsReload} isReload={isReload} id={note._id} />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;