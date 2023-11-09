import React, { useRef, useState, useEffect } from 'react'

export default function Information_editor_tailwind_f() {
    let [IE_span_1_tailw, setIE_span_1_tailw] = React.useState({ display: '' });
    let [IE_span_2_tailw, setIE_span_2_tailw] = React.useState({ display: 'none' });
    let [IE_span_3_tailw, setIE_span_3_tailw] = React.useState({ display: '' });
    let [IE_textarea_tailw, setIE_textarea_tailw] = React.useState({ display: 'none' });
    let hukeOne = React.useRef(0);
    React.useEffect(() => {
        document.addEventListener('keydown', (z) => {
            if (z.code == "KeyT" && hukeOne.current === 0) {
                setIE_span_2_tailw(IE_span_2_tailw = { display: '' });
                setIE_textarea_tailw(IE_textarea_tailw = { display: '' })
                setIE_span_1_tailw(IE_span_1_tailw = { display: 'none' });
                setIE_span_3_tailw(IE_span_3_tailw = { display: 'none' });
                z.preventDefault()
                console.log(123)
            }
            else if (z.code === "KeyT" && hukeOne.current === 2) {
                setIE_span_2_tailw(e => e = { display: 'none' });
                setIE_textarea_tailw(e => e = { display: 'none' })
                setIE_span_1_tailw(e => e = { display: '' });
                setIE_span_3_tailw(e => e = { display: '' });
                //document.getElementById(`IE_span_3_tailw`).innerText = document.getElementById(`IE_textarea`).value;
                z.preventDefault()
                console.log(45)
            }
            if (z.code === "KeyT" && hukeOne.current !== 3) {hukeOne.current++} else {hukeOne.current = hukeOne.current * 0};
            console.log(hukeOne)
        });
    }, [hukeOne])

    return (
        <div abIndex={3} className='w-[800px] ml-[auto] mr-[auto] mb-[50px]'>
            <div className="flex flex-col justify-center">
                <span style={IE_span_1_tailw}>Нажмите <b>T</b> для редактирования текста</span>
                <span style={IE_span_2_tailw}>Нажмите <b>T</b> для сохранения текста</span>
                <span style={IE_span_3_tailw} className="mt-[10px] h-[100px] font-bold">Введите текст</span>
                <textarea className='mt-[10px] h-[100px] font-bold border-solid border-[1px] border-black' style={IE_textarea_tailw} id='IE_textarea_tailw'>Введите текст</textarea>
            </div>
        </div>
    )
}