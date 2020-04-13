import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSong';

const SongList = () => {

    const [songs, setSongs] =useState([
        {title: 'qqq', id:1},
        {title: 'aaa', id:2},
        {title: 'abc', id:3}
    ]);
    const [count, setCount] = useState(0);
    const addSong = (title) => {
        setSongs([...songs, { title , id: uuidv1() }])
    }
    useEffect(() => {
        console.log("useEffect " + songs);
    }, [songs])
    useEffect(() => {
        console.log("useEffect " + count);
    }, [count])
    return(
        <div className="center">
            <ul className="collection">
                {songs.map((item) => {
                    return (<li key={ item.id } className="collection-item">{ item.title }</li>)
                })}
            </ul>
            <NewSongForm addSong={ addSong }></NewSongForm>
            <button style={{margin: "5px"}} className="btn-small" onClick={() => setCount(count+1)}>Count</button>
        </div>
    );
}

export default SongList;