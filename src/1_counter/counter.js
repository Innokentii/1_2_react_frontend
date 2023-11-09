import React from 'react' /*6.9k (gzipped: 2.7k)*/
export default function Countf() {

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
        <div className="Counter_standard">
            <div className="product">
                <div>
                    <img src={'./1_image/img1.png'} alt='horse' />
                </div>
                <div className="table">
                    <table cellspacing="5" cellpdding="0" className="table_Q">
                        <tr>
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
            <div className="Counter">
                <div>
                    <span>Цена товара:</span><span id="price_id">{price}</span><span> $</span>
                </div>
                <div>
                    <button id="button_minus" onClick={onClickMinus}>-</button>
                    <span id="count_id">{count}</span><span> шт.</span>
                    <button id="button_plus" onClick={onClickPlus}>+</button>
                </div>
                <div>
                    <span>Сумма закупки:</span><span id="the_amount_id">{the_amount}</span><span> $</span>
                </div>
            </div>
        </div>
    )
};