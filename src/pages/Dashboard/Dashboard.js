import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import NoteCard from './NoteCard';

const Dashboard = () => {

    const [notes, setNotes] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/notes")
            .then((res) => res.json())
            .then((data) => setNotes(data));
    }, [isReload]);

    const handlePost = (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const textData = event.target.textData.value;
        event.target.userName.value = '';
        event.target.textData.value = '';

        // console.log({ userName, textData });

        fetch("http://localhost:5000/note", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify({ userName, textData }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });
    }

    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/note/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });
    };

    return (
        <div>
            <h1 className='text-center my-3 fw-bold'>Add Note</h1>
            <InputForm handlePost={handlePost}></InputForm>
            <div className="row row-cols-1 row-cols-md-3 g-5 m-2">
                {notes.map((note) => (
                    <NoteCard
                        key={note._id}
                        note={note}
                        handleDelete={handleDelete}
                        setIsReload={setIsReload}
                        isReload={isReload}
                    />
                ))}
            </div>

        </div>
    );
};

export default Dashboard;