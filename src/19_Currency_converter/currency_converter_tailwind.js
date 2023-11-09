import React from 'react'

export default function Currency_converter_tailwind() {
    
    React.useEffect(() => {
        let button_convert = document.getElementById('button_convert_tailw');
        button_convert.addEventListener('click', _ => {

            let convertible_int = document.getElementById('convertible_int_tailw').value;
        
            let convertible = document.getElementById('convertible_tailw').value;
            if (convertible == 'Тенге') {convertible = 'KZT'};
            if (convertible == 'Рубли') {convertible = 'RUB'};
            if (convertible == 'Доллары') {convertible = 'USD'};
            if (convertible == 'ЕВРО') {convertible = 'EUR'};
        
            let converted = document.getElementById('converted_tailw').value;
            if (converted == 'Тенге') {converted = 'KZT'};
            if (converted == 'Рубли') {converted = 'RUB'};
            if (converted == 'Доллары') {converted = 'USD'};
            if (converted == 'ЕВРО') {converted = 'EUR'};
        
            let converted_int = document.getElementById('converted_int_tailw');
        
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
            let KZT_1_str = document.getElementById('KZT_1_str_tailw');
            let KZT_2_int = document.getElementById('KZT_2_int_tailw');
            let KZT_2_str = document.getElementById('KZT_2_str_tailw');
            KZT_1_str.textContent = result_two['query']['from'];
            KZT_2_int.textContent = result_two['info']['quote'];
            KZT_2_str.textContent = result_two['query']['to']
        }

    }, []);

    return(
        <div className='w-[640px] ml-[auto] mr-[auto]'>
            <div className="flex flex-col gap-[20px] m-[50px]">
                <div className="flex flex-row gap-[20px] align-center">
                    <div className='w-[240px] h-[40px] p-[3px] pr-[0] border-solid border-[2px] border-black rounded-[10px] flex flex-col justify-center'>
                        <label>
                            <input className='text-[1.2em] w-[140px] border-r-solid border-r-[1px] border-r-black' type="text" id="convertible_int_tailw" />
                            <select className="border-none" id="convertible_tailw">
                                <option>Тенге</option>
                                <option>Рубли</option>
                                <option>Доллары</option>
                                <option>ЕВРО</option>
                            </select>
                        </label>
                    </div>
                    <span> =&#62; </span>
                    <div className='w-[240px] h-[40px] p-[3px] pr-[0] border-solid border-[2px] border-black rounded-[10px] flex flex-col justify-center'>
                        <label>
                            <input className='text-[1.2em] w-[140px] border-r-solid border-r-[1px] border-r-black' type="text" readonly id="converted_int_tailw" />
                            <select className="border-none" id="converted_tailw">
                                <option>Тенге</option>
                                <option>Рубли</option>
                                <option>Доллары</option>
                                <option>ЕВРО</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='flex flex-row justify-start gap-[10px]'>
                    <button className='w-[150px] h-[30px] border-solid border-[1px] border-black bg-slate-400 rounded-[5px]' id='button_convert_tailw'>Конвертировать</button>
                    <b>1</b><span id="KZT_1_str_tailw">KZT</span> = <b id="KZT_2_int_tailw">1</b><span id="KZT_2_str_tailw">KZT</span>
                </div>
            </div>
        </div>
    )
}