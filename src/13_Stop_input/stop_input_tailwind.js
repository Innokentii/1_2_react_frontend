import React, {useEffect} from 'react'

export default function Stop_input_tailwind_F() {

    React.useEffect(() => {
        let chec_rad_1_id = document.getElementById('chec_rad_1_id_tailw');
        let chec_rad_2_id = document.getElementById('chec_rad_2_id_tailw');
        let chec_rad_3_id = document.getElementById('chec_rad_3_id_tailw');
        document.getElementById('stop_input_text_id_tailw').addEventListener('keydown', function (e) {
            let keydown_str = e.code[0] + e.code[1] + e.code[2];
            if (chec_rad_1_id.checked && keydown_str  == 'Key') {e.preventDefault()};
            if (chec_rad_2_id.checked && !['0','1','2','3','4','5','6','7','8','9'].includes(e.key) == false) {e.preventDefault()};
            if (chec_rad_3_id.checked && ![',','?','.','{','}','[',']',"\\",'|','/',':',';','!','&','^','%','#','№'].includes(e.key) == false) {e.preventDefault()};
        });
    });

    return(
        <div className='w-[400px] ml-[auto] mr-[auto]'>
            <input className='w-[400px] h-[30px] text-[1.3em] border-solid border-[1px] border-black p-[5px]' type="text" id="stop_input_text_id_tailw"/><br/>
            <label><input id="chec_rad_1_id_tailw" name="rad_stop_input_2" type="radio" checked/> Запрет ввода букв</label><br/>
            <label><input id="chec_rad_2_id_tailw" name="rad_stop_input_2" type="radio"/> Запрет ввода цыфр</label><br/>
            <label><input id="chec_rad_3_id_tailw" name="rad_stop_input_2" type="radio"/> Запрет ввода ", ? . { } [ ] \ | / : ; ! & ^ % # №"</label><br/>
        </div>
    )
}