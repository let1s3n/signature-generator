import React from "react";
export default class PhoneBox extends React.Component{
    
    render(){
        return(
            <div className="select-validate phone-box">
                {this.presentNumbers(this.props.userData.location,this.props.userData.phoneNumber)}
            </div>

        );

        
    }

    presentNumbers(location,phoneNumber){
        let str="";
        for(let i=0;i<location.length;i++){
          str += `${location[i]} Phone: ${phoneNumber[i]}`
    
    
        }
        return str;
      }
}