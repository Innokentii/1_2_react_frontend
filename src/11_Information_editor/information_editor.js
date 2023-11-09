import React, { useEffect } from 'react'

export default function Information_editor_f() {
    React.useEffect(() => {
        let IE_span_2 = document.getElementById(`IE_span_2`);
        let IE_textarea = document.getElementById(`IE_textarea`);
        IE_span_2.style.display = `none`;
        IE_textarea.style.display = `none`;
    }, []);

    document.onkeydown = function (e) {
        if (e.code === "KeyE" && document.getElementById(`IE_textarea`).style.display === 'none') {
            document.getElementById(`IE_span_2`).style.display = '';
            document.getElementById(`IE_textarea`).style.display = '';
            document.getElementById(`IE_span_1`).style.display = `none`;
            document.getElementById(`IE_span_3`).style.display = `none`;
            e.preventDefault()
        }
        else if (e.code == "KeyE" ) {
            document.getElementById(`IE_span_2`).style.display = `none`;
            document.getElementById(`IE_textarea`).style.display = `none`;
            document.getElementById(`IE_span_1`).style.display = ``;
            document.getElementById(`IE_span_3`).style.display = ``;
            document.getElementById(`IE_span_3`).innerText = document.getElementById(`IE_textarea`).value;
            e.preventDefault()
        }
    } 

    return(
        <div tabIndex={2} className='body_information_editor'>
            <div id="Information_editor">
                <span id='IE_span_1'>Нажмите <b>E</b> для редактирования текста</span>
                <span id='IE_span_2'>Нажмите <b>E</b> для сохранения текста</span>
                <span id='IE_span_3' className="IE_text">Введите текст</span>
                <textarea id='IE_textarea' className="IE_text">Введите текст</textarea>
            </div>
        </div>
    )
}