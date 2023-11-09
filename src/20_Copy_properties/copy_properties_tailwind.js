import React from "react"

export default function Copy_properties_tailwind() {

    React.useEffect(() => {
        function MyCopyText() {
            var target_text = window.getSelection(),
            add_text = '<br><br> Источник: ' + document.location.href,
            out_text = target_text + add_text,
            fake = document.createElement('div');
            fake.style.position = 'absolute';
            fake.style.left = '-99999px';
            document.body.appendChild(fake);
            fake.innerHTML = out_text;
            target_text.selectAllChildren(fake);
            window.setTimeout(function() {document.body.removeChild(fake);}, 100);
        };
        
        let copy_properties = document.getElementById('copy_properties_JS');
        copy_properties.addEventListener('copy', MyCopyText);
    })

    return(
        <div className="w-[600px] ml-[auto] mr-[auto]">
            <div className="flex flex-col gap-[20px] p-[50px]">
                <div className="w-[500px] h-[80px] border-solid border-[2px] border-black p-[5px]" onCopy={(e) => {e.preventDefault()}}>
                    Этот текст нельзя скопировать (можете попробовать скопировать и вставить в любое приложение (excel, word и т.д))
                </div>
                <div className="w-[500px] h-[80px] border-solid border-[2px] border-black p-[5px]" id="copy_properties_JS">
                    При копировании этого текста у и вставке его в любое приложение (excel, word и т.д) с скопированным текстом будет прилагатся ссылка на источник
                </div>
            </div>
        </div>
    )
}