import * as React from "react"
import * as ReactDOM from "react-dom"
import { IO } from 'monet';

import "../styles/popup.css"

const injectCss = (): JSX.Element => {
    return (
        <div>
            <link rel="stylesheet" href="./css/popup.css" />
        </div>
    )
}

class MainBody {
    private SendURL(): void {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
            const thisTab = tabs.find((_, i) => i ==0);
            chrome.runtime.sendMessage(thisTab.url);
        });
    }
    public Component(): JSX.Element {
        return (
            <div>
                {injectCss()}
                <div className="center">
                    <p>Share Link</p>
                    <hr />
                    <div id="shareButton" className="center-position cursor">
                        <img 
                        className="icon-image" 
                        src="../icons/icon.png"
                        id="submitButton"
                        onClick={()=> this.SendURL()}
                        />
                    </div>
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