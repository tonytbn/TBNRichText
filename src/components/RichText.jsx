import { Component, createElement } from "react";
import { extend } from "wangeditor-for-react";
import i18next from "i18next";

const ReactWEditorOfLang = extend({ i18next });

export class RichText extends Component {
    state = {
        value: ""
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (!this.state.value) {
            this.setState({ value: nextProps.content.value });
        }
        if (nextProps.content.readOnly) {
            document.querySelector(".kgEditor").style.pointerEvents = "none";
        }
    }

    render() {
        return (
            <div className={"kgEditor"}>
                <ReactWEditorOfLang
                    config={{
                        uploadImgShowBase64: true,
                        uploadImgMaxSize: 2 * 1024 * 1024, // 2M
                        lang: "en"
                    }}
                    placeholder="Please enter the text here"
                    value={this.state.value}
                    linkImgCallback={(src, alt, href) => {
                        // 插入网络图片的回调事件
                    }}
                    onlineVideoCallback={video => {
                        // 插入网络视频的回调事件
                    }}
                    onChange={html => {
                        this.props.content.setValue(html);
                    }}
                    onBlur={html => {}}
                    onFocus={html => {}}
                />
            </div>
        );
    }
}
