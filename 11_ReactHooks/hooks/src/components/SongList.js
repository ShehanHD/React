import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSong';

const SongList = () => {

    const [songs, setSongs] =useState([
        {title: 'qqq', id:1},
        {title: 'aaa', id:2},
        {title: 'abc', id:3}
    ]);

    const addSong = (title) => {
        setSongs([...songs, { title , id: uuidv1() }])
    }

    return(
        <div className="center">
            <ul className="collection">
                {songs.map((item) => {
                    return (<li key={ item.id } className="collection-item">{ item.title }</li>)
                })}
            </ul>
            <NewSongForm addSong={ addSong }></NewSongForm>
        </div>
    );
}

export default SongList;