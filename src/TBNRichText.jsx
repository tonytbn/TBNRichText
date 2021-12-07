import { Component, createElement } from "react";

import { RichText } from "./components/RichText";
import "./ui/RichTextMendix.css";

export default class RichTextMendix extends Component {
    render() {
        return <RichText {...this.props} />;
    }
}
