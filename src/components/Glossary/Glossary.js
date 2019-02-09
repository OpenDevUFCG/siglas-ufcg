import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import Description from "../Description/Description"
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator"

import acronyms from '../../lib/data';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAcronym: "",
            currentObj: {},
            currentMeaning: 0,
        }
    }

    handleAcronymChange = async (selected) => {
        /* TODO: Fix hardcoded first element selection and add tab navigation */
        await this.setState({
            currentAcronym: selected,
            currentMeaning: 0,
        });
        this.handleCurrentObjChange();
    };

    handleMeaningChange = async (meaningSelected) => {
        await this.setState({
            currentMeaning: meaningSelected,
        });
        this.handleCurrentObjChange();
    };

    handleCurrentObjChange = () => {
        this.setState({
            currentObj: acronyms[this.state.currentAcronym][this.state.currentMeaning],
        });
    };

    render() {
        return (
            <div className={"odu-card glossary__container"}>
                <div className={"glossary__left-container"}>
                    <span className={"odu-title main-title"}>Glossário UFCG</span>
                    <Search items={Object.keys(acronyms).sort()} handleSelect={this.handleAcronymChange}/>
                </div>
                <VerticalSeparator/>
                <Description selectedObj={this.state.currentObj}/>
            </div>
        )
    }
}

export default Glossary;