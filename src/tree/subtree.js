import React from 'react';
import './tree.css'

export class JsonSubTree extends React.Component {
    constructor(props) {
        super(props);
        this.json = this.props.json;
        this.state = {folded: false};
    }

    fold() {
        this.setState(s => ({folded: !s.folded}))
    }

    getDataSpan() {
        const {json} = this.props;
        const shift = this.props.shift || 0;
        if (Array.isArray(json)) {
            return (<span>[
                {
                    json.map((el, i) => (
                        <span key={i}><JsonSubTree shift={shift + 1} className="json"
                                                   json={el}/>, </span>))
                }
                          ]
            </span>);
        }

        if (typeof json === 'object') {
            return Object.keys(json).map((el, i) => (
                <JsonSubTree className="json" shift={shift + 1} keyName={el} json={json[el]} key={i}/>
            ))
        }

        return (
            <span key={json}>{json}</span>
        )
    }

    render() {
        const {keyName, json} = this.props;
        let style = {left:  15 + 'px'};
        if(!json){
            return <span></span>
        }
        if (!keyName && typeof  json !== 'object') {
            return <span className="data">{json}</span>
        }

        return (<div style={style} className="subTree">
            {(keyName ? <span className="key">{keyName}:</span>: null)}
            <span className="data">{this.getDataSpan()}</span>
        </div>)

    }
}