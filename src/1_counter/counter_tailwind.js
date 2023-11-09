import React from 'react' /*6.9k (gzipped: 2.7k)*/

export default function Count_Tailwind_f() {

    let [price, setPrice] = React.useState(1200);
    let [the_amount, set_The_amount] = React.useState(0);
    let [count, setCount] = React.useState(0);


    function onClickPlus() {
        setCount(count + 1)
        set_The_amount(the_amount = ((count + 1 ) * price))
    };
    function onClickMinus() {
        if (count != 0 || count != '0') {
            setCount(count - 1)
            set_The_amount(the_amount = ((count - 1) * price))
        };
    };

    return (
        <div className="font-sans w-[650px] p-[25px] pb-[5px] ml-[auto] mr-[auto] border-solid border-[2px] border-blue-700 rounded-[10px] overflow-hidden">
            <div className="flex flex-row justify-between border-solid border-b-[1px] border-black">
                <div>
                    <img className='w-[180px] h-[180px]' src={'./1_image/img1.png'} alt='horse' />
                </div>
                <div className="table">
                    <table cellspacing="5" cellpdding="0" className="table_Q">
                        <tr className='text-start'>
                            <td>Производитель:</td>
                            <td>Samsung/Корея</td>
                        </tr>
                        <tr>
                            <td>Дисплей:</td>
                            <td>Диагональ 6.75/ 1600x720/ </td>
                        </tr>
                        <tr>
                            <td>Емкость АКБ:</td>
                            <td>5000 мА-ч</td>
                        </tr>
                        <tr>
                            <td>Процессор:</td>
                            <td>Shandregon 500</td>
                        </tr>
                        <tr>
                            <td>Встроенная память:</td>
                            <td>128 Гб</td>
                        </tr>
                        <tr>
                            <td>Оперативная память:</td>
                            <td>8 Гб</td>
                        </tr>
                        <tr>
                            <td>код товара:</td>
                            <td>12354981616846</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="flex flex-row justify-start">
                <div className='border-r-[1px] border-black mt-[5px] flex flex-row justify-around gap-[5px] w-[200px] h-[40px] items-center'>
                    <span>Цена товара:</span><span className='text-[20px] font-bold' id="price_id">{price}</span><span> $</span>
                </div>
                <div className='border-r-[1px] border-black mt-[5px] flex flex-row justify-around gap-[5px] w-[200px] h-[40px] items-center'>
                    <button className='border-solid border-black border-r-[1px] rounded-[6px] bg-slate-300 w-[40px] h-[25px] active:w-[35px] active:h-[22px]' id="button_minus" onClick={onClickMinus}>-</button>
                    <span className='text-[20px] font-bold' id="count_id">{count}</span><span> шт.</span>
                    <button className='border-solid border-black border-r-[1px] rounded-[6px] bg-slate-300 w-[40px] h-[25px] active:w-[35px] active:h-[22px]' id="button_plus" onClick={onClickPlus}>+</button>
                </div>
                <div className='mt-[5px] flex flex-row justify-around gap-[5px] w-[200px] h-[40px] items-center'>
                    <span>Сумма закупки:</span><span className='text-[20px] font-bold' id="the_amount_id">{the_amount}</span><span> $</span>
                </div>
            </div>
        </div>
    )
};