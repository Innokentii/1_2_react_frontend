import React from 'react'

export default function Currency_converter() {
    
    React.useEffect(() => {
        let button_convert = document.getElementById('button_convert');
        button_convert.addEventListener('click', _ => {

            let convertible_int = document.getElementById('convertible_int').value;
        
            let convertible = document.getElementById('convertible').value;
            if (convertible == 'Тенге') {convertible = 'KZT'};
            if (convertible == 'Рубли') {convertible = 'RUB'};
            if (convertible == 'Доллары') {convertible = 'USD'};
            if (convertible == 'ЕВРО') {convertible = 'EUR'};
        
            let converted = document.getElementById('converted').value;
            if (converted == 'Тенге') {converted = 'KZT'};
            if (converted == 'Рубли') {converted = 'RUB'};
            if (converted == 'Доллары') {converted = 'USD'};
            if (converted == 'ЕВРО') {converted = 'EUR'};
        
            let converted_int = document.getElementById('converted_int');
        
            var myHeaders = new Headers();
            myHeaders.append("apikey", "OJsSxOQmq3HyLktC4J0DNm2YX5tmWAAA");
            
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };
        
            asyncFun(requestOptions, convertible_int, convertible, converted, converted_int);
            asyncFun_two(requestOptions, convertible_int, convertible, converted, converted_int);
        });

        async function asyncFun(requestOptions, convertible_int, convertible, converted, converted_int) {
            let Obj_API_result = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted}&from=${convertible}&amount=${convertible_int}`, requestOptions);
            let result = await Obj_API_result.json();
            console.log(result);
            converted_int.value = result['result']
        };
    
        async function asyncFun_two(requestOptions, convertible_int, convertible, converted, converted_int) {
            let Obj_API_result_two = await fetch(`https://api.apilayer.com/currency_data/convert?to=${converted}&from=${convertible}&amount=${convertible_int}`, requestOptions);
            let result_two = await Obj_API_result_two.json();
            let KZT_1_str = document.getElementById('KZT_1_str');
            let KZT_2_int = document.getElementById('KZT_2_int');
            let KZT_2_str = document.getElementById('KZT_2_str');
            KZT_1_str.textContent = result_two['query']['from'];
            KZT_2_int.textContent = result_two['info']['quote'];
            KZT_2_str.textContent = result_two['query']['to']
        }

    }, []);

    return(
        <div className='body_currency_converter'>
            <div className="Currency_converter">
                <div className="block_of_money">
                    <div>
                        <label>
                            <input type="text" id="convertible_int" />
                            <select className="convertible" id="convertible">
                                <option>Тенге</option>
                                <option>Рубли</option>
                                <option>Доллары</option>
                                <option>ЕВРО</option>
                            </select>
                        </label>
                    </div>
                    <span> =&#62; </span>
                    <div>
                        <label>
                            <input type="text" readonly id="converted_int" />
                            <select className="converted" id="converted">
                                <option>Тенге</option>
                                <option>Рубли</option>
                                <option>Доллары</option>
                                <option>ЕВРО</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='Currency_converter_start'>
                    <button id='button_convert'>Конвертировать</button>
                    <b>1</b><span id="KZT_1_str">KZT</span> = <b id="KZT_2_int">1</b><span id="KZT_2_str">KZT</span>
                </div>
            </div>
        </div>
    )
}