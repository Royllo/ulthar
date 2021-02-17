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

    private PasswordSetEvent(event) {
        StorageSystem.Password = event.target.value;
    }

    private HandleSubmit = (event) => {
        this.SetStorage({ pair: { "url": StorageSystem.URL } });
    }


    public Component(): JSX.Element {
        return (
            <div>
                <div className="center">
                    <h2>Configure</h2>
                    <hr />
                    <button onClick={() => this.GetStorage({ key: "url" })}>TEST</button>
                    <form
                        onSubmit={this.HandleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Transmitter location"
                            onChange={this.URLSetEvent}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={this.PasswordSetEvent}
                        />
                        <input id="submitButton" type="submit" />
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