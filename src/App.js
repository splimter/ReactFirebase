import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>

            </div>
        );
    }
}

export default App;
