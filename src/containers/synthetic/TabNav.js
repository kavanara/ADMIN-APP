import React from "react";

class TabNav extends React.Component{


    render(){
        return(
            <div  class="text-center" style={{width:"100%"}} >
                <ul className="nav nav-tabs">
                    {
                        this.props.tabs.map(tab => {
                            const active =(tab === this.props.selected ? 'active':'');


                            return (
                                <li className="nav-item" class="text-center" key={tab}>
                                    <a className={"nav-link" + active} onClick={ ()=> this.props.setSelected(tab)}>
                                       {tab}
                                    </a>

                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        );
    }
    
}
export default TabNav;