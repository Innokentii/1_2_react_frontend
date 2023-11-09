import React, { useEffect } from 'react'
import A_1 from './A_1.jpg'
import A_2 from './A_2.jpg'
import A_3 from './A_3.jpg'
import A_4 from './A_4.jpg'
import A_5 from './A-5.jpg'
import A_6 from './A-6.jpg'

export default function Pop_up_menu_f() {

    //Сплывающее меню (стандартный код)__________________________________
    //Меню_1
    let UseEffect_const_1 = 0;
    React.useEffect(() => {
        if (UseEffect_const_1 === 0) {
            let products_two = document.querySelector('.products_two');
            products_two.style.display = 'none';
            let products_menu_button = document.querySelector('.products_menu > button');
            products_menu_button.addEventListener('click', _ => {
                console.log(1);
                if (products_two.style.display === 'none') { products_two.style.display = '' }
                else { products_two.style.display = 'none' }
            });
        }
        if (UseEffect_const_1 === 1) {UseEffect_const_1 = 0};
        UseEffect_const_1++
    });

    let UseEffect_const_2 = 0;
    React.useEffect(() => {
        if (UseEffect_const_2 == 0) {
            let products_two = document.querySelector('.products_two');
            let mp_1 = document.querySelector('.products_two > div:nth-child(1)');
            mp_1.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_1})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Автомобиль №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_2 === 1) {UseEffect_const_2 = 0};
        UseEffect_const_2++
    });

    let UseEffect_const_3 = 0;
    React.useEffect(() => {
        if (UseEffect_const_3 === 0) {
            let products_two = document.querySelector('.products_two');
            let mp_2 = document.querySelector('.products_two > div:nth-child(2)');
            mp_2.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_2})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Мотоцикл №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_3 === 1) {UseEffect_const_3 = 0};
        UseEffect_const_3++
    });

    let UseEffect_const_4 = 0;
    React.useEffect(() => {
        if (UseEffect_const_4 === 0) {
            let products_two = document.querySelector('.products_two');
            let mp_3 = document.querySelector('.products_two > div:nth-child(3)');
            mp_3.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_3})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Грузовик №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_4 === 1) {UseEffect_const_4 = 0};
        UseEffect_const_4++
    });

    let UseEffect_const_5 = 0;
    React.useEffect(() => {
        if (UseEffect_const_5 === 0) {
            let products_two = document.querySelector('.products_two');
            let mp_4 = document.querySelector('.products_two > div:nth-child(4)');
            mp_4.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_4})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Эсковатор №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_5 === 1) {UseEffect_const_5 = 0};
        UseEffect_const_5++
    });

    let UseEffect_const_6 = 0;
    React.useEffect(() => {
        if (UseEffect_const_6 === 0) {
            let products_two = document.querySelector('.products_two');
            let mp_5 = document.querySelector('.products_two > div:nth-child(5)');
            mp_5.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_5})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Верталет №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_6 === 1) {UseEffect_const_6 = 0};
        UseEffect_const_6++
    });

    let UseEffect_const_7 = 0;
    React.useEffect(() => {
        if (UseEffect_const_7 === 0) {
            let products_two = document.querySelector('.products_two');
            let mp_6 = document.querySelector('.products_two > div:nth-child(6)');
            mp_6.addEventListener('click', _ => {
                products_two.style.display = 'none';
                for (let n = 0; n < 9; n++) {
                    document.querySelector(`.p_${n + 1}`).style.backgroundImage = `url(${A_6})`;
                    document.querySelector(`.p_${n + 1}`).nextElementSibling.textContent = `Катер №${n + 1}`;
                };
            });
        }
        if (UseEffect_const_7 === 1) {UseEffect_const_7 = 0};
        UseEffect_const_7++
    });

    //Меню_2
    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        products_three.style.width = '74px';
        let mp_1_2 = document.querySelector('.mp_1_2');
        mp_1_2.nextElementSibling.firstElementChild.textContent = '';
        let mp_2_2 = document.querySelector('.mp_2_2');
        mp_2_2.nextElementSibling.firstElementChild.textContent = '';
        let mp_3_2 = document.querySelector('.mp_3_2');
        mp_3_2.nextElementSibling.firstElementChild.textContent = '';
        let mp_4_2 = document.querySelector('.mp_4_2');
        mp_4_2.nextElementSibling.firstElementChild.textContent = '';
        let mp_5_2 = document.querySelector('.mp_5_2');
        mp_5_2.nextElementSibling.firstElementChild.textContent = '';
        let mp_6_2 = document.querySelector('.mp_6_2');
        mp_6_2.nextElementSibling.firstElementChild.textContent = '';
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        products_three.addEventListener('mouseover', _ => {
            products_three.style.width = '';
            mp_1_2.nextElementSibling.firstElementChild.textContent = ' - Автомобили';
            mp_2_2.nextElementSibling.firstElementChild.textContent = ' - Мотоцыклы';
            mp_3_2.nextElementSibling.firstElementChild.textContent = ' - Грузовики';
            mp_4_2.nextElementSibling.firstElementChild.textContent = ' - Эсковаторы';
            mp_5_2.nextElementSibling.firstElementChild.textContent = ' - Верталеты';
            mp_6_2.nextElementSibling.firstElementChild.textContent = ' - Катера';
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        products_three.addEventListener('mouseout', _ => {
            products_three.style.width = '74px';
            mp_1_2.nextElementSibling.firstElementChild.textContent = '';
            mp_2_2.nextElementSibling.firstElementChild.textContent = '';
            mp_3_2.nextElementSibling.firstElementChild.textContent = '';
            mp_4_2.nextElementSibling.firstElementChild.textContent = '';
            mp_5_2.nextElementSibling.firstElementChild.textContent = '';
            mp_6_2.nextElementSibling.firstElementChild.textContent = '';
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_1_3 = document.querySelector('.products_three > div:nth-child(1)');
        mp_1_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_1})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Автомобиль №${n + 1}`;
            };
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_2_3 = document.querySelector('.products_three > div:nth-child(2)');
        mp_2_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_2})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Мотоцикл №${n + 1}`;
            };
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_3_3 = document.querySelector('.products_three > div:nth-child(3)');
        mp_3_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_3})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Грузовик №${n + 1}`;
            };
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_4_3 = document.querySelector('.products_three > div:nth-child(4)');
        mp_4_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_4})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Эсковатор №${n + 1}`;
            };
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_5_3 = document.querySelector('.products_three > div:nth-child(5)');
        mp_5_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_5})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Вертолет №${n + 1}`;
            };
        });
    });

    React.useEffect(() => {
        let products_three = document.querySelector('.products_three');
        let mp_1_2 = document.querySelector('.mp_1_2');
        let mp_2_2 = document.querySelector('.mp_2_2');
        let mp_3_2 = document.querySelector('.mp_3_2');
        let mp_4_2 = document.querySelector('.mp_4_2');
        let mp_5_2 = document.querySelector('.mp_5_2');
        let mp_6_2 = document.querySelector('.mp_6_2');
        let mp_6_3 = document.querySelector('.products_three > div:nth-child(6)');
        mp_6_3.addEventListener('click', _ => {
            for (let n = 0; n < 9; n++) {
                document.querySelector(`.p_${n + 1}_2`).style.backgroundImage = `url(${A_6})`;
                document.querySelector(`.p_${n + 1}_2`).nextElementSibling.textContent = `Катер №${n + 1}`;
            };
        });
    });

    //Меню_3
    React.useEffect(() => {
        let mp_1_a = document.querySelector('.mp_1_a');
        mp_1_a.nextElementSibling.firstElementChild.textContent = ' - Автомобили';
        mp_1_a.parentElement.style.width = '140px';
        mp_1_a.parentElement.style.borderBottom = 'none';
        mp_1_a.parentElement.style.height = '32px';
        let products_before = [' - Авт...', ' - Мот...', ' - Гру...', ' - Эск...', ' - Вер...', ' - Кат...'];
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
    
    });
    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_1_a = document.querySelector('.mp_1_a');
        mp_1_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_1_a.parentElement.style.width = '140px';
            mp_1_a.parentElement.style.borderBottom = 'none';
            mp_1_a.parentElement.style.height = '32px';
            mp_1_a.nextElementSibling.firstElementChild.textContent = products_after[0];
            y = `url(${A_1})`;
            x = 'Автомобиль №';
            product_search_two_f(y, x)
        });
    });

    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_2_a = document.querySelector('.mp_2_a');
        mp_2_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_2_a.parentElement.style.width = '140px';
            mp_2_a.parentElement.style.borderBottom = 'none';
            mp_2_a.parentElement.style.height = '32px';
            mp_2_a.nextElementSibling.firstElementChild.textContent = products_after[1];
            y = `url(${A_2})`;
            x = 'Мотоцикл №';
            product_search_two_f(y, x)
        });
    });

    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_3_a = document.querySelector('.mp_3_a');
        mp_3_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_3_a.parentElement.style.width = '140px';
            mp_3_a.parentElement.style.borderBottom = 'none';
            mp_3_a.parentElement.style.height = '32px';
            mp_3_a.nextElementSibling.firstElementChild.textContent = products_after[2];
            y = `url(${A_3})`;
            x = 'Грузовик №';
            product_search_two_f(y, x)
        });
    });

    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_4_a = document.querySelector('.mp_4_a');
        mp_4_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_4_a.parentElement.style.width = '140px';
            mp_4_a.parentElement.style.borderBottom = 'none';
            mp_4_a.parentElement.style.height = '32px';
            mp_4_a.nextElementSibling.firstElementChild.textContent = products_after[3];
            y = `url(${A_4})`;
            x = 'Эсковатор №';
            product_search_two_f(y, x)
        });
    });

    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_5_a = document.querySelector('.mp_5_a');
        mp_5_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_5_a.parentElement.style.width = '140px';
            mp_5_a.parentElement.style.borderBottom = 'none';
            mp_5_a.parentElement.style.height = '32px';
            mp_5_a.nextElementSibling.firstElementChild.textContent = products_after[4];
            y = `url(${A_5})`;
            x = 'Верталет №';
            product_search_two_f(y, x)
        });
    });

    React.useEffect(() => {
        let y = 0;
        let x = '';
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        let mp_6_a = document.querySelector('.mp_6_a');
        mp_6_a.parentElement.addEventListener('mousedown', _ => {
            product_search_f();
            mp_6_a.parentElement.style.width = '140px';
            mp_6_a.parentElement.style.borderBottom = 'none';
            mp_6_a.parentElement.style.height = '32px';
            mp_6_a.nextElementSibling.firstElementChild.textContent = products_after[5];
            y = `url(${A_6})`;
            x = 'Катер №';
            product_search_two_f(y, x)
        });
    });

    let products_before = [' - Авт...', ' - Мот...', ' - Гру...', ' - Эск...', ' - Вер...', ' - Кат...'];
    let product_search_f = () => {
        for (let n = 0; n < 6; n++) {
            document.querySelector(`.mp_${n + 1}_a`).parentElement.style.width = '90px';
            document.querySelector(`.mp_${n + 1}_a`).parentElement.style.borderBottom = '';
            document.querySelector(`.mp_${n + 1}_a`).parentElement.style.height = '30px';
            document.querySelector(`.mp_${n + 1}_a`).nextElementSibling.firstElementChild.textContent = products_before[n];
        }
    }

    let product_search_two_f = (y, x) => {
        for (let n = 0; n < 9; n++) {
            document.querySelector(`.p_${n + 1}_a`).style.backgroundImage = y;
            document.querySelector(`.p_${n + 1}_a`).nextElementSibling.textContent = `${x}${n}`;
        }
    }

    //Menu 4

    React.useEffect(() => {
        let left_button_PUM_id = document.getElementById('left_button_PUM_id');
        let right_button_PUM_id = document.getElementById('right_button_PUM_id');

        let array_rotateY = [0, 60, 120, 180, 240, 300];

        right_button_PUM_id.addEventListener('click', _ => {
            array_rotateY[0] += 60;
            array_rotateY[1] += 60;
            array_rotateY[2] += 60;
            array_rotateY[3] += 60;
            array_rotateY[4] += 60;
            array_rotateY[5] += 60;
            if (array_rotateY[0] === 360) {
                array_rotateY[0] = 0;
                array_rotateY[1] = 60;
                array_rotateY[2] = 120;
                array_rotateY[3] = 180;
                array_rotateY[4] = 240;
                array_rotateY[5] = 300;
            }
            array_rotate_f();
            products_rotate_f();
        });

        left_button_PUM_id.addEventListener('click', _ => {
            array_rotateY[0] -= 60;
            array_rotateY[1] -= 60;
            array_rotateY[2] -= 60;
            array_rotateY[3] -= 60;
            array_rotateY[4] -= 60;
            array_rotateY[5] -= 60;
            if (array_rotateY[0] === -360) {
                array_rotateY[0] = 0;
                array_rotateY[1] = 60;
                array_rotateY[2] = 120;
                array_rotateY[3] = 180;
                array_rotateY[4] = 240;
                array_rotateY[5] = 300;
            }
            array_rotate_f();
            products_rotate_f();
        });

        let mp_1_b = document.querySelector('.mp_1_b');
        let mp_2_b = document.querySelector('.mp_2_b');
        let mp_3_b = document.querySelector('.mp_3_b');
        let mp_4_b = document.querySelector('.mp_4_b');
        let mp_5_b = document.querySelector('.mp_5_b');
        let mp_6_b = document.querySelector('.mp_6_b');

        function array_rotate_f() {
            mp_1_b.parentElement.style.transform = `rotateY(${array_rotateY[0]}deg) translateZ(250px) translateY(20px)`;
            mp_2_b.parentElement.style.transform = `rotateY(${array_rotateY[1]}deg) translateZ(250px) translateY(20px)`;
            mp_3_b.parentElement.style.transform = `rotateY(${array_rotateY[2]}deg) translateZ(250px) translateY(20px)`;
            mp_4_b.parentElement.style.transform = `rotateY(${array_rotateY[3]}deg) translateZ(250px) translateY(20px)`;
            mp_5_b.parentElement.style.transform = `rotateY(${array_rotateY[4]}deg) translateZ(250px) translateY(20px)`;
            mp_6_b.parentElement.style.transform = `rotateY(${array_rotateY[5]}deg) translateZ(250px) translateY(20px)`;
        }
        let products_after = [' - Автомобили', ' -Мотоцыклы', ' - Грузовики', ' - Эсковаторы', ' - Верталеты', ' - Катера'];
        function products_rotate_f() {
            let xy = [0, ''];
            if (mp_1_b.parentElement.style.transform === 'rotateY(360deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-360deg) translateZ(250px) translateY(20px)') { xy[0] = 0; xy[1] = `url(${A_1})` };
            if (mp_1_b.parentElement.style.transform === 'rotateY(60deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-300deg) translateZ(250px) translateY(20px)') { xy[0] = 5; xy[1] = `url(${A_6})` };
            if (mp_1_b.parentElement.style.transform === 'rotateY(120deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-240deg) translateZ(250px) translateY(20px)') { xy[0] = 4; xy[1] = `url(${A_5})` };
            if (mp_1_b.parentElement.style.transform === 'rotateY(180deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-180deg) translateZ(250px) translateY(20px)') { xy[0] = 3; xy[1] = `url(${A_4})` };
            if (mp_1_b.parentElement.style.transform === 'rotateY(240deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-120deg) translateZ(250px) translateY(20px)') { xy[0] = 3; xy[1] = `url(${A_3})` };
            if (mp_1_b.parentElement.style.transform === 'rotateY(300deg) translateZ(250px) translateY(20px)' || mp_1_b.parentElement.style.transform === 'rotateY(-60deg) translateZ(250px) translateY(20px)') { xy[0] = 1; xy[1] = `url(${A_2})` };
            for (let i = 0; i < 9; i++) {
                document.querySelector(`.p_${i + 1}_b`).style.backgroundImage = xy[1];
                document.querySelector(`.p_${i + 1}_b`).nextElementSibling.textContent = products_after[xy[0]] + ' №' + (i + 1);
            }
        }
    });

    return (
        <div className='body_pop_up_menu'>
            <div className="menu">
                <div className="products">
                    <div className="products_menu">
                        <button>Каталог</button>
                    </div>
                    <div className="menu_products">
                        <div>
                            <div className="p_1"></div>
                            <div>Автомобиль №1</div>
                        </div>
                        <div>
                            <div className="p_2"></div>
                            <div>Автомобиль №2</div>
                        </div>
                        <div>
                            <div className="p_3"></div>
                            <div>Автомобиль №3</div>
                        </div>
                        <div>
                            <div className="p_4"></div>
                            <div>Автомобиль №4</div>
                        </div>
                        <div>
                            <div className="p_5"></div>
                            <div>Автомобиль №5</div>
                        </div>
                        <div>
                            <div className="p_6"></div>
                            <div>Автомобиль №6</div>
                        </div>
                        <div>
                            <div className="p_7"></div>
                            <div>Автомобиль №7</div>
                        </div>
                        <div>
                            <div className="p_8"></div>
                            <div>Автомобиль №8</div>
                        </div>
                        <div>
                            <div className="p_9"></div>
                            <div>Автомобиль №9</div>
                        </div>
                    </div>
                    <div className="products_two">
                        <div>
                            <div className="mp_1"></div>
                            <div><b> - Автомобили</b></div>
                        </div>
                        <div>
                            <div className="mp_2"></div>
                            <div><b> - Мотоцыклы</b></div>
                        </div>
                        <div>
                            <div className="mp_3"></div>
                            <div><b> - Грузовики</b></div>
                        </div>
                        <div>
                            <div className="mp_4"></div>
                            <div><b> - Эсковаторы</b></div>
                        </div>
                        <div>
                            <div className="mp_5"></div>
                            <div><b> - Верталеты</b></div>
                        </div>
                        <div>
                            <div className="mp_6"></div>
                            <div><b> - Катера</b></div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="products_three">
                        <div>
                            <div className="mp_1_2"></div>
                            <div><b> - Автомобили</b></div>
                        </div>
                        <div>
                            <div className="mp_2_2"></div>
                            <div><b> - Мотоцыклы</b></div>
                        </div>
                        <div>
                            <div className="mp_3_2"></div>
                            <div><b> - Грузовики</b></div>
                        </div>
                        <div>
                            <div className="mp_4_2"></div>
                            <div><b> - Эсковаторы</b></div>
                        </div>
                        <div>
                            <div className="mp_5_2"></div>
                            <div><b> - Верталеты</b></div>
                        </div>
                        <div>
                            <div className="mp_6_2"></div>
                            <div><b> - Катера</b></div>
                        </div>
                    </div>
                    <div className="menu_products menu_products_dop">
                        <div>
                            <div className="p_1_2"></div>
                            <div>Автомобиль №1</div>
                        </div>
                        <div>
                            <div className="p_2_2"></div>
                            <div>Автомобиль №2</div>
                        </div>
                        <div>
                            <div className="p_3_2"></div>
                            <div>Автомобиль №3</div>
                        </div>
                        <div>
                            <div className="p_4_2"></div>
                            <div>Автомобиль №4</div>
                        </div>
                        <div>
                            <div className="p_5_2"></div>
                            <div>Автомобиль №5</div>
                        </div>
                        <div>
                            <div className="p_6_2"></div>
                            <div>Автомобиль №6</div>
                        </div>
                        <div>
                            <div className="p_7_2"></div>
                            <div>Автомобиль №7</div>
                        </div>
                        <div>
                            <div className="p_8_2"></div>
                            <div>Автомобиль №8</div>
                        </div>
                        <div>
                            <div className="p_9_2"></div>
                            <div>Автомобиль №9</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu_2">
                <div className="menu_2_body">
                    <div className="three_menu">
                        <div>
                            <div className="mp_1_a"></div>
                            <div><b> - Авт...</b></div>
                        </div>
                        <div>
                            <div className="mp_2_a"></div>
                            <div><b> - Мот...</b></div>
                        </div>
                        <div>
                            <div className="mp_3_a"></div>
                            <div><b> - Гру...</b></div>
                        </div>
                        <div>
                            <div className="mp_4_a"></div>
                            <div><b> - Эск...</b></div>
                        </div>
                        <div>
                            <div className="mp_5_a"></div>
                            <div><b> - Вер...</b></div>
                        </div>
                        <div>
                            <div className="mp_6_a"></div>
                            <div><b> - Кат...</b></div>
                        </div>
                    </div>
                    <div className="three_menu_products">
                        <div>
                            <div className="p_1_a"></div>
                            <div>Автомобиль №1</div>
                        </div>
                        <div>
                            <div className="p_2_a"></div>
                            <div>Автомобиль №2</div>
                        </div>
                        <div>
                            <div className="p_3_a"></div>
                            <div>Автомобиль №3</div>
                        </div>
                        <div>
                            <div className="p_4_a"></div>
                            <div>Автомобиль №4</div>
                        </div>
                        <div>
                            <div className="p_5_a"></div>
                            <div>Автомобиль №5</div>
                        </div>
                        <div>
                            <div className="p_6_a"></div>
                            <div>Автомобиль №6</div>
                        </div>
                        <div>
                            <div className="p_7_a"></div>
                            <div>Автомобиль №7</div>
                        </div>
                        <div>
                            <div className="p_8_a"></div>
                            <div>Автомобиль №8</div>
                        </div>
                        <div>
                            <div className="p_9_a"></div>
                            <div>Автомобиль №9</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu_3">
                <div>
                    <div id="left_button_PUM_id"><b>&#60;</b></div>
                    <div className="menu_3D">
                        <div>
                            <div className="mp_1_b"></div>
                            <div><b> - Автомобили</b></div>
                        </div>
                        <div>
                            <div className="mp_2_b"></div>
                            <div><b> - Мотциклы</b></div>
                        </div>
                        <div>
                            <div className="mp_3_b"></div>
                            <div><b> - Грузовики</b></div>
                        </div>
                        <div>
                            <div className="mp_4_b"></div>
                            <div><b> - Эсковаторы</b></div>
                        </div>
                        <div>
                            <div className="mp_5_b"></div>
                            <div><b> - Вертолеты</b></div>
                        </div>
                        <div>
                            <div className="mp_6_b"></div>
                            <div><b> - Катера</b></div>
                        </div>
                    </div>
                    <div id="right_button_PUM_id"><b>&#62;</b></div>
                </div>
                <div className="four_menu_products">
                    <div>
                        <div className="p_1_b"></div>
                        <div>Автомобиль №1</div>
                    </div>
                    <div>
                        <div className="p_2_b"></div>
                        <div>Автомобиль №2</div>
                    </div>
                    <div>
                        <div className="p_3_b"></div>
                        <div>Автомобиль №3</div>
                    </div>
                    <div>
                        <div className="p_4_b"></div>
                        <div>Автомобиль №4</div>
                    </div>
                    <div>
                        <div className="p_5_b"></div>
                        <div>Автомобиль №5</div>
                    </div>
                    <div>
                        <div className="p_6_b"></div>
                        <div>Автомобиль №6</div>
                    </div>
                    <div>
                        <div className="p_7_b"></div>
                        <div>Автомобиль №7</div>
                    </div>
                    <div>
                        <div className="p_8_b"></div>
                        <div>Автомобиль №8</div>
                    </div>
                    <div>
                        <div className="p_9_b"></div>
                        <div>Автомобиль №9</div>
                    </div>
                </div>
            </div>
        </div>
    )
}