import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          matchesCollection: ''
        }
    }

    onFileChange(e) {
        this.setState({ matchesCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        var formData = new FormData();
        for (const key of Object.keys(this.state.matchesCollection)) {
            formData.append('matchesCollection', this.state.matchesCollection[key])
        }
        axios.post("http://localhost:4000/api/upload-slp", formData, {
        }).then((res) => {
            console.log(res)
            document.getElementById("test").innerHTML = res.data.inserted;
        }, (error) => {
          console.log(error);
        });

        document.getElementById("FileSlp").value = "";
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="matchesCollection" id="FileSlp" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                        <div>
                          <h2 id="test">test</h2>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}