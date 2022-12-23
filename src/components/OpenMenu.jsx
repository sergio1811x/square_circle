import React from 'react';



const OpenMenu = ({changeColor, onChangeColor, radioButton, onChangeDark}) => {

    const checkbox = ['red', 'green', 'blue', 'yellow']
    const checkboxName = ['красный', 'зеленый', 'синий', 'желтый']
    const radio = ['все', 'тёмные', 'светлые']

    return (

        <div className={'menu_container'}>
            {checkbox.map((color, id) => (
                <div className={'checkbox_block'}>
                    <input className={'checkbox checkbox_red'} type={'checkbox'} value={color}
                           checked={changeColor[color]}
                           onClick={onChangeColor}/>
                    <span className={'text_checkbox'}>{checkboxName[id]} </span>
                </div>
            ))}
            <div className={'radio_block'}>
                {radio.map((name, id) => (
                    <div><input className={'radio'} type={'radio'} value={id + 1}
                                checked={radioButton === `${id + 1}` ? true : false}
                                onChange={onChangeDark}/>
                        <span className={'text_checkbox'}> {name}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default OpenMenu;