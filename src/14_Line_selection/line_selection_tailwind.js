import React from 'react'

export default function Line_selection_tailwind_f() {

    React.useEffect(() => {
        let line_sel_id = document.getElementById('line_sel_id_tailw');
        let line_sel_array = document.querySelectorAll('#line_sel_id_tailw > li');
    
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
        <div className='w-[500px] ml-[auto] mr-[auto] text-[1.3em]'>
            <b>Библиотека книг: </b>
            <ol id="line_sel_id_tailw">
                <li className='list-decimal hover:font-bold'>Физика 10-й класс</li>
                <li className='list-decimal hover:font-bold'>Игра престолов (песнь льда и пламени)</li>
                <li className='list-decimal hover:font-bold'>История мира "пирамида Хеопса"</li>
                <li className='list-decimal hover:font-bold'>Как стать миллиардером - 100 шагов</li>
                <li className='list-decimal hover:font-bold'>Френк Герберд - Дюна</li>
                <li className='list-decimal hover:font-bold'>Суюнь Дзы - искуство войны</li>
            </ol>
            <div className='mt-[40px]'>Нажмите строку для выделения нужной книги.</div>
            <span>Нажмите Ctrl + строку для выделения нескольких нужных книг.</span><br/>
        </div>
    )
}