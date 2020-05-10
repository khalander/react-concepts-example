import React from 'react';

const ForwardRefsChild = React.forwardRef((props, ref) => (
    <input ref={ref} type="text" />
));

export default ForwardRefsChild;