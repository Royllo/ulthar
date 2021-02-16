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
                    <hr />
                </div>
            </div>
        )
    }
}

class Hello extends React.Component {
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
    <Hello />,
    document.getElementById('root')
)