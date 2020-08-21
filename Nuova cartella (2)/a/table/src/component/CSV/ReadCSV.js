import React, { useState, useRef } from "react";
import CSVReader from "react-csv-reader"; //https://www.npmjs.com/package/react-csv-reader
import { Container } from '@material-ui/core';

import CreateGrid from "./CreateGrid";
import Submit from "./Submit";

const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, ''),
    transform: (val) => {
        return val.trim();
    },
    complete: function(results, file) {
        if(results.errors[0]){
            alert(results.errors[0].message);
        }         
    }
};

export default function ReadCSV() {
    const fileNames=useRef([]);
    const [rows, setRows] = useState([]);
    const [columns] = useState(["partnumber","description","price","category","company","lifecycle","revision","model"]);

    const handleData = (data, fileInfo) => {
        let fileExist = fileNames.current.includes(fileInfo.name)

        if( fileExist ){
            alert("File already exists!!!!!!!");
        }
        else{
            fileNames.current = [...fileNames.current, fileInfo.name];

            let x = data.map((item, index) => {
                return { id: index , ...item }
            });

            console.log(x);
            setRows(x);
        }  
    };

    return (
    <div>
            <div className="file">
                <CSVReader
                    cssClass="react-csv-input"
                    onFileLoaded={(data, fileInfo) => handleData(data, fileInfo)}
                    parserOptions={parseOptions}
                    inputStyle={{color: 'white'}}
                    onRemoveFile
                />    
            </div>

            <Container maxWidth="xl">
                <CreateGrid rows={rows} columns={columns}/>

                <Submit rows={rows}/>
            </Container>
    </div>
    );
}
