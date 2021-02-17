import * as React from "react"
import * as ReactDOM from "react-dom"



class StorageSystem {
    public static URL: string;
    public static Password: string;
}

class MainBody {

    private SetStorage = ({ pair }) => {
        chrome.storage.sync.set(pair, () => {
            console.log(`Done...`);
        });
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
    }

    private GetStorage = ({ key }) => {
        chrome.storage.sync.get(key, (data) => {
            console.log(data);
        });
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
    }

    private URLSetEvent(event) {
        StorageSystem.URL = event.target.value;
    }

    private HandleSubmit = (event, { slug }) => {
        switch(slug){
            case "url":
                this.SetStorage({ pair: { "url": StorageSystem.URL } });
                break;
            case "password":
                this.SetStorage({ pair: { "password": StorageSystem.Password } });
        }
    }

    public Component(): JSX.Element {
        return (
            <div>
                <div className="center">
                    <h2>Configure</h2>
                    <hr />
                    <form
                        onSubmit={(event) => this.HandleSubmit(event, {slug:"url"})}
                    >
                        <input
                            type="text"
                            placeholder="Transmitter location"
                            onChange={(event) => { StorageSystem.URL = event.target.value }}
                        />
                        <input className="submitButton" type="submit" />
                    </form>
                    <form
                        onSubmit={(event) => this.HandleSubmit(event, { slug: "password" })}
                    >
                        <input
                            id="passwordField"
                            type="password"
                            placeholder="Password"
                            onChange={(event) => { StorageSystem.Password = event.target.value }}
                            
                        />
                        <input className="submitButton" type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        const body = new MainBody();
        return (
            <div className="popup-padded">
                {body.Component()}
            </div>
        )
    }
}

// --------------

ReactDOM.render(
    <Main />,
    document.getElementById('root')
)