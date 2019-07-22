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

    renderItem(keyName) {
        const item = this.props.json[keyName];
        const shift = this.props.shift || 0;
        let style = {left: shift * 10 + 'px'};
        console.log(keyName, item);
        if (typeof item === 'object' || Array.isArray(item)) {
            return (
                <div className="json" style={style}>
                    <span onClick={this.fold.bind(this)}>{keyName}</span>
                    :{this.state.folded ? '...' : <JsonSubTree shift={shift + 1}  json={item}/>}
                </div>
            );
        }

        return (<div className="json" style={style} key={keyName}>{keyName}:{item}</div>)
    }

    getDataSpan() {
        const {json} = this.props;
        if (Array.isArray(json)) {
            return (<span>[
                {
                    json.map((el, i) => (
                        <span key={i}><JsonSubTree className="json" json={el}/>, </span>))
                }
                          ]
            </span>);
        }

        if (typeof json === 'object') {
            return Object.keys(json).map(this.renderItem.bind(this))
        }

        return (
            <span key={json}>{json}</span>
        )
    }

    render() {
        const {keyName} = this.props;
        return (<div className="subTree">{keyName}:{this.getDataSpan()}</div>)

    }
}