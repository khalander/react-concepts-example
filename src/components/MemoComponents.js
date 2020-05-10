import React from 'react';

const MemoComponents = () => {
    console.log('****** MemoComponents ******')
    return (
        <div>
            Memo components example
        </div>
    )
}

export default React.memo(MemoComponents);