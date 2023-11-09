import React, {useEffect} from 'react'

export default function Stop_input_F() {

    React.useEffect(() => {
        let chec_rad_1_id = document.getElementById('chec_rad_1_id');
        let chec_rad_2_id = document.getElementById('chec_rad_2_id');
        let chec_rad_3_id = document.getElementById('chec_rad_3_id');
        document.getElementById('stop_input_text_id').addEventListener('keydown', function (e) {
            let keydown_str = e.code[0] + e.code[1] + e.code[2];
            if (chec_rad_1_id.checked && keydown_str  == 'Key') {e.preventDefault()};
            if (chec_rad_2_id.checked && !['0','1','2','3','4','5','6','7','8','9'].includes(e.key) == false) {e.preventDefault()};
            if (chec_rad_3_id.checked && ![',','?','.','{','}','[',']',"\\",'|','/',':',';','!','&','^','%','#','№'].includes(e.key) == false) {e.preventDefault()};
        });
    });

    return(
        <div className='body_stop_input'>
            <input type="text" id="stop_input_text_id"/><br/>
            <label><input id="chec_rad_1_id" name="rad_stop_input_1" type="radio" checked/> Запрет ввода букв</label><br/>
            <label><input id="chec_rad_2_id" name="rad_stop_input_1" type="radio"/> Запрет ввода цыфр</label><br/>
            <label><input id="chec_rad_3_id" name="rad_stop_input_1" type="radio"/> Запрет ввода ", ? . { } [ ] \ | / : ; ! & ^ % # №"</label><br/>
        </div>
    )
}