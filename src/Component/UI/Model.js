import React, { Fragment }  from "react";
import ReactDOM from "react-dom";
import './Model.css';

const BackDrop =props =>{

    return <div className="backdrop" onClick={props.onClose}/>

};

const ModelOveLays =props =>{
    return <div className="modal">
<div className="content">
{props.children}
</div>
    </div>
};

const portalElement = document.getElementById('overlays',)

const  Model =(props)=>{
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,portalElement)}
        {ReactDOM.createPortal(<ModelOveLays>{props.children}</ModelOveLays>,portalElement)}
    </Fragment>
}

export default Model;