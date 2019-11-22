import * as React from "react";
import typeStyle from './config';
import './index.less';

export interface IconProps {
  type?: string;
  style?: object; //str枚举
  component?: React.ReactChild;
  className?: string;
  rotate?: number;
  spin?: boolean;
}

export interface IconState {

}

export  class Icon extends React.Component<IconProps, IconState> {

    //基于props.style以及props.rotate合并style的方法
    assignStyle = () => {
        const { style = {}, rotate = 0 } = this.props;
        if(rotate!==0){
            return {
              ...style,
              transform:`rotate(${rotate}deg)`
            };
        }else{
            return style
        }
    }
    
    //基于props渲染icon盒子的api
    renderDivByType = () => {
        const { type = "", spin = false, className="" } = this.props;
        const style = this.assignStyle();
        const configItem = typeStyle.find(item => item.type === type);
        return (
          <i
            style = {style}
            className={`icon-div${
              configItem ? " " + configItem.className : ""
            }${
              className ? " "+ className: ""
            }${
              spin? " "+ "period-rotation" : ""
            }`}
          />
        );

    }
    render() {
        const content = this.renderDivByType();
        return content;
    }
} 