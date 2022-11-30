import React from 'react';
import '../App.css';

const Content = ({data, changeColor, changeForm, changeDark, radioButton}) => {
    return (
        <div className={'content_container'}>
            {data.filter(item => changeColor[item.color] && changeForm[item.form] && (radioButton !== '1' ? item.dark == changeDark : changeDark)).map((item) => (
                <div className={` items |
                     ${item.form === 'circle' ? 'circle' : 'squares'} || 
                ${item.color === 'red' && (item.dark === false ? 'red' : 'red_dark')
                || item.color === 'blue' && (item.dark === false ? 'blue' : 'blue_dark')
                || item.color === 'yellow' && (item.dark === false ? 'yellow' : 'yellow_dark')
                || item.color === 'green' && (item.dark === false ? 'green' : 'green_dark')} `}
                >
                </div>
            ))}
        </div>
    );
};

export default Content;