import React from 'react'

export default function Animation_f() {

    //Часы

    React.useEffect(() => {
        let big_hand_of_the_clock = document.getElementById('big_hand_of_the_clock_id');
        let small_hand_of_the_clock = document.getElementById('small_hand_of_the_clock_id');
        let second_hand = document.getElementById('second_hand_id');
    
        setInterval(() => passage_of_time_f(), 1000);
    
        function passage_of_time_f() {
            let currentDate = new Date();
            let hour = currentDate.getHours();
            let Minute = currentDate.getMinutes();
            let Second = currentDate.getSeconds();
            big_hand_of_the_clock.style.transform = `rotateZ(${-90 + hour * 30}deg)`;
            small_hand_of_the_clock.style.transform = `rotateZ(${-90 + Minute * 6}deg)`;
            second_hand.style.transform = `rotateZ(${-90 + Second * 6}deg)`;
        }
    });


    //Куб

    document.addEventListener('keydown', (e)=>{
        if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)==true) {
            e.preventDefault();
        }
    })

    var rotateY = 0;
    var rotateX = 0;
    window.onkeydown = function (e) {
        if (e.keyCode === 37) rotateY -= 4
        else if (e.keyCode === 38) rotateX += 4
        else if (e.keyCode === 39) rotateY += 4
        else if (e.keyCode === 40) rotateX -= 4
        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)';
    }

    return (
        <div className='body_animation'>
            <div className="animation">
                <div className="door_animation">
                    <h2>Hello</h2>
                    <img className="door_1" src="./10_image/Door-1.bmp" alt="нет двери" />
                    <img className="door_2" src="./10_image/Door-2.bmp" alt="нет двери" />
                    <span>(укажите на изображение)</span>
                </div>
                <div className="watch">
                    <div className="big_hand_of_the_clock" id="big_hand_of_the_clock_id"></div>
                    <div className="small_hand_of_the_clock" id="small_hand_of_the_clock_id"></div>
                    <b>1</b>
                    <b>2</b>
                    <b>3</b>
                    <b>4</b>
                    <b>5</b>
                    <b>6</b>
                    <b>7</b>
                    <b>8</b>
                    <b>9</b>
                    <b>10</b>
                    <b>11</b>
                    <b>12</b>
                    <div className="second_hand" id="second_hand_id"></div>
                    <div className="clock_center"></div>
                </div>
                <div className="_3_D">
                    <div className="cube">
                        <div className="cube_front">фронт</div>
                        <div className="cube_back">тыл</div>
                        <div className="cube_right">правая</div>
                        <div className="cube_left">левая</div>
                        <div className="cube_top">вверхняя</div>
                        <div className="cube_bottom">нижняя</div>
                    </div>
                    <span>(куб можно вращать стрелками клавиатуры "вверх", "вниз", "влево", "вправо")</span>
                </div>
            </div>
        </div>
    )
}