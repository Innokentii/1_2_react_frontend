import React, {useEffect, useState} from 'react'
import A_1 from './A_1.jpg'
import A_2 from './A_2.jpg'
import A_3 from './A_3.jpg'

export default function Image_magnification() {

    let [x_position, setx_position] = React.useState(0);
    let [y_position, sety_position] = React.useState(0);
    let [Image_magnification_yes, setImage_magnification_yes] = React.useState('No');
    let [A_0, setA_0] = React.useState(A_1);
    let [st_1, setSt_1] = React.useState({backgroundPositionX: `${(-x_position)}px`, backgroundPositionY: `${(-y_position)}px`, backgroundImage: `url(${A_0})`, backgroundImage: `url(${A_0})`});

    function f1() {
        setImage_magnification_yes(Image_magnification_yes = 'No');
        setSt_1({backgroundPositionX: `${0}px`, backgroundPositionY: `${0}px`, backgroundImage: `url(${A_0})`});
        console.log(Image_magnification_yes);
    };

    function f3() {
        setImage_magnification_yes(Image_magnification_yes = 'Yes');
        setSt_1({backgroundPositionX: `${(-x_position)}px`, backgroundPositionY: `${(-y_position)}px`, backgroundImage: `url(${A_0})`});
        console.log('onMouseDown');
        console.log(Image_magnification_yes);
    };    

    React.useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (e.offsetX >= 0 && e.offsetX <= 518.4) {setx_position(e.offsetX)};
            if (e.offsetY >= 0 && e.offsetY <= 518.4) {sety_position(e.offsetY)};
        });
        if (Image_magnification_yes === 'Yes') {
            setSt_1({backgroundPositionX: `${(-x_position)}px`, backgroundPositionY: `${(-y_position)}px`, backgroundImage: `url(${A_0})`});
        }
    });

    function f4() {setA_0(A_0 = A_1); setSt_1({backgroundPositionX: `${0}px`, backgroundPositionY: `${0}px`, backgroundImage: `url(${A_0})`})};

    function f5() {setA_0(A_0 = A_2); setSt_1({backgroundPositionX: `${0}px`, backgroundPositionY: `${0}px`, backgroundImage: `url(${A_0})`})};

    function f6() {setA_0(A_0 = A_3); setSt_1({backgroundPositionX: `${0}px`, backgroundPositionY: `${0}px`, backgroundImage: `url(${A_0})`})};

    return(
        <div className='body_Image_magnification'>
            <div className="Image_magnification">
                <h1>комплект одежды ADIDAS (летний)</h1>
                <div className="img_0" onMouseOut={f1} onMouseUp={f1} id='img_0' onMouseDown={f3} style={st_1}></div>
                <div className="choosing_clothes">
                    <div className="img_1" onClick={f4}></div>
                    <div className="img_2" onClick={f5}></div>
                    <div className="img_3" onClick={f6}></div>
                </div>
                <span>(Для ближнего просмотра нажмите и удерживайте левую кнопку мыши)</span>
            </div>
        </div>
    )
}