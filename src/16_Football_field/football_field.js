import React, {useEffect} from 'react'

export default function Football_field_f() {

    let capturing_the_ball = false;
    let xy_ccordinate_bool = [0, 0];

    React.useEffect(() => {
        let bool = document.getElementById('bool_id');
        bool.addEventListener('mousedown', (e) => {
            capturing_the_ball = true;
            bool.style.cursor = 'grabbing';
            xy_ccordinate_bool = [e.offsetX, e.offsetY];
        });
    });

    React.useEffect(() => {
        let bool = document.getElementById('bool_id');
        bool.addEventListener('mouseup', _ => {
            capturing_the_ball = false;
            bool.style.cursor = 'grab';
        });
    });

    React.useEffect(() => {
        let bool = document.getElementById('bool_id');
        let field = document.getElementById('field_id');
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
        <div className='body_Football_field'>
            <div className="field" id="field_id">
                <div className="bool" id="bool_id"></div>
            </div>
            <span className="Football_field">Нажмите и удерживайте левую кнопку мыши для передвижения мяча</span>
        </div>
    )
}