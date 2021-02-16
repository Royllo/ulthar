import * as React from "react"
import * as ReactDOM from "react-dom"

const SetStorage = ({key, data}) => {
    chrome.storage.local.set({key: data}, () => {
        if(chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
    })
}

const GetStorage = ({key}) => {
    chrome.storage.local.get(key, (data) => {
        console.log(data);
    })
}

class MainBody {

    public Component(): JSX.Element {
        return (
            <div>
                <div className="center">
                    <h2>Configure</h2>
                    <hr />
                    <form>
                        <input type="text" placeholder="Transmitter location" />
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