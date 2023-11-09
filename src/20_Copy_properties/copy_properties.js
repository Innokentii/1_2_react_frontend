import React from "react"

export default function Copy_properties() {

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
        
        let copy_properties = document.getElementById('copy_properties');
        copy_properties.addEventListener('copy', MyCopyText);
    })

    return(
        <div className="body_copy_properties">
            <div className="block_Copy_properties">
                <div onCopy={(e) => {e.preventDefault()}}>
                    Этот текст нельзя скопировать (можете попробовать скопировать и вставить в любое приложение (excel, word и т.д))
                </div>
                <div id="copy_properties">
                    При копировании этого текста у и вставке его в любое приложение (excel, word и т.д) с скопированным текстом будет прилагатся ссылка на источник
                </div>
            </div>
        </div>
    )
}