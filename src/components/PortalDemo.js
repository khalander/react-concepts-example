import React from 'react';
import ReactDom from 'react-dom';

function PortalDemo() {
    return ReactDom.createPortal(<p>Portal demo</p>, 
        document.getElementById('portal-root'))
}

export default PortalDemo