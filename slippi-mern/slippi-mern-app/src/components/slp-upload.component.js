import React, { Component } from 'react';
import FilesUploadComponent from './files-upload-component';

export default class SlpUpload extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Slp Upload Component!!</p>
                <FilesUploadComponent />
            </div>
        )
    }
}