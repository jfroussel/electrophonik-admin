import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Download extends Component {
    constructor(props) {
      super(props)
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
           
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} <br /> {f.size} bytes</li>)
              }
            </ul>
            
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} <br /> {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
      );
    }
  }
  
  export default Download