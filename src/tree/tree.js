import React from 'react';
import {JsonSubTree} from "./subtree";
import './tree.css'

export class Json extends React.Component {
    constructor(props) {
        super(props);
        this.json = this.props.json;
        this.state = {folded: false};
    }

    fold() {
        this.setState(s => ({folded: !s.folded}))
    }

    render() {
        const {json} = this.props;
        //todo hanle if initial is not obj
        var arr = Array.isArray(json) ? json : Object.keys(json);
        return (
            <div className="json">
                {
                    arr.map((el, i) => (<JsonSubTree className="json" keyName={el} key={i} json={json[el]}/>))
                }
            </div>
        )


    }
}