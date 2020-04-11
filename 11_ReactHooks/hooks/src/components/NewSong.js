import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
    const [song, setSong] = useState('');

    const handleChange = (e) => {
        setSong(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addSong(e.target.value);
    }
    return ( 
        <form onSubmit={ onSubmit }>
            <div className="form-input">
                <input type="text" id="newSong" value={song} onChange={ handleChange }/>
                <label htmlFor="newSong">add new soong</label>
            </div>
            <div className="form-input">
                <button className="btn-small indigo waves-effect waves-light">Submit</button>
            </div>
        </form>
    );
}

export default NewSongForm;