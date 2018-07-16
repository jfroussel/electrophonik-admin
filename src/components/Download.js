import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Download extends React.Component {
    constructor() {
      super()
      this.state = {
        accepted: [],
        rejected: []
      }
    }
  
    render() {
      return (
        <section>
          <div className="dropzone">
            <Dropzone
              accept="audio/*"
              onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
            >
              <p>click to select files to upload.</p>
              
            </Dropzone>
          </div>
          <aside>
            <h2>Accepted files</h2>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
            <h2>Rejected files</h2>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
      );
    }
  }
  
  export default Download