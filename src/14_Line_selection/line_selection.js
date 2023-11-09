import React from 'react'

export default function Line_selection_f() {

    React.useEffect(() => {
        let line_sel_id = document.getElementById('line_sel_id');
        let line_sel_array = document.querySelectorAll('#line_sel_id > li');
    
        line_sel_id.onclick = function (e) {
            let el = e.target;
            if (e.ctrlKey == false) {
                for (let n = 0; n < line_sel_array.length; n++) {
                    line_sel_array[n].style.backgroundColor = '';
                };
            };
            if (e.target != line_sel_id) {
                el.style.backgroundColor = 'green';
            };
        };
    });

    return(
        <div className='body_line_selection'>
            <b>Библиотека книг: </b>
            <ol className="line_selection" id="line_sel_id">
                <li>Физика 10-й класс</li>
                <li>Игра престолов (песнь льда и пламени)</li>
                <li>История мира "пирамида Хеопса"</li>
                <li>Как стать миллиардером - 100 шагов</li>
                <li>Френк Герберд - Дюна</li>
                <li>Суюнь Дзы - искуство войны</li>
            </ol>
            <div className='line_selection_span_id'>Нажмите строку для выделения нужной книги.</div>
            <span>Нажмите Ctrl + строку для выделения нескольких нужных книг.</span><br/>
        </div>
    )
}