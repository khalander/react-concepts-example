import React from 'react';

class Fragment extends React.Component {

    render() {
        return (
            // <React.Fragment key='ser'>
            //     <p>Hello</p>
            //     <p>world</p>
            // </React.Fragment>

            <>
                <p>Hello</p>
                <p>world</p>
            </>
        );
    }


}

export default Fragment