import * as React from "react"
import * as ReactDOM from "react-dom"

class PopupStorageSystem {
    public static Tag: string;
}

class MainBody {
    
    private SendURL(): void {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
            const thisTab = tabs.find((_, i) => i == 0);
            chrome.runtime.sendMessage(`{ 'url': ${thisTab.url}, 'tag': ${PopupStorageSystem.Tag}`);
        });
    }

    public Component(): JSX.Element {
        return (
            <div>
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
                        <input 
                            type="text" 
                            placeholder="Tag" 
                            onChange={(event) => PopupStorageSystem.Tag = event.target.value} 
                        />
                    </div>
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