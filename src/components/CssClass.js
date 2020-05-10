import React from 'react';

import '../css/StyleSheet.css'
import css from '../css/StyleSheet.module.css'

const CssClass = () => {

    let inlineStyle = {
        color:'red'
    }

    return (
        <div>
             <div className='class-red'>Styleing external single class</div>
            <div className={`class-red class-fone`}>Styleing external with multiple class</div>
            <div style={inlineStyle}>Inline styleing</div>
            <div className={css.classBlue}>Module example</div>
        </div>
        

    )
}

export default CssClass;