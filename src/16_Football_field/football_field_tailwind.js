import React, {useEffect} from 'react'
import A_1 from './A_1.png'
import A_2 from './A_2.png'

export default function Football_field_tailwind_f() {

    React.useEffect(() => {
        let field_area = document.getElementById('field_id_tailw');
        field_area.style.backgroundImage = `url(${A_1})`;
        let bool_area = document.getElementById('bool_id_tailw');
        bool_area.style.backgroundImage = `url(${A_2})`;
    });

    let capturing_the_ball = false;
    let xy_ccordinate_bool = [0, 0];
    
    React.useEffect(() => {
        let bool = document.getElementById('bool_id_tailw');
        bool.addEventListener('mousedown', (e) => {
            capturing_the_ball = true;
            bool.style.cursor = 'grabbing';
            xy_ccordinate_bool = [e.offsetX, e.offsetY];
        });
    });

    React.useEffect(() => {
        let bool = document.getElementById('bool_id_tailw');
        bool.addEventListener('mouseup', _ => {
            capturing_the_ball = false;
            bool.style.cursor = 'grab';
        });
    });

    React.useEffect(() => {
        let bool = document.getElementById('bool_id_tailw');
        let field = document.getElementById('field_id_tailw');
        field.addEventListener('mousemove', (e) => {
            if (capturing_the_ball === true && e.clientX < (field.getBoundingClientRect().left + 1000 - (50 - xy_ccordinate_bool[0]))
                && e.clientY < (field.getBoundingClientRect().top + 690 - (50 - xy_ccordinate_bool[1])) && e.clientX > (field.getBoundingClientRect().left + xy_ccordinate_bool[0])
                && e.clientY > (field.getBoundingClientRect().top + xy_ccordinate_bool[1])) {
                bool.style.top = `${e.pageY - xy_ccordinate_bool[1]}px`;
                bool.style.left = `${e.pageX - xy_ccordinate_bool[0]}px`;
            }
        });
    
    });

    return(
        <div className='w-[1000px] ml-[auto] mr-[auto]'>
            <div className='w-[1000px] h-[690px] bg-cover' id="field_id_tailw">
                <div className="w-[50px] h-[50px] bg-cover border-solid border-[4px] border-black rounded-[50%] absolute hover:cursor-grab" id="bool_id_tailw"></div>
            </div>
            <span className="text-[2em]">Нажмите и удерживайте левую кнопку мыши для передвижения мяча</span>
        </div>
    )
}