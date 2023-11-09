import React, {useEffect} from 'react'

export default function Information_filter_F() {

    React.useEffect(() => {
        let th_1_id = document.getElementById('th_1_id');
        let th_2_id = document.getElementById('th_2_id');
        let th_3_id = document.getElementById('th_3_id');
        let th_4_id = document.getElementById('th_4_id');
        let table_id = document.getElementById('table_id');

        th_1_id.addEventListener('click', _ => {
            let th_1 = Array.from(table_id.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
            table_id.append(...th_1);
        });
        th_2_id.addEventListener('click', _ => {
            let th_2 = Array.from(table_id.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
            table_id.append(...th_2);
        });
            
        th_3_id.addEventListener('click', _ => {
            let th_3 = Array.from(table_id.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
            table_id.append(...th_3);
        });
            
        th_4_id.addEventListener('click', _ => {
            let th_4 = Array.from(table_id.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[3].innerHTML > rowB.cells[3].innerHTML ? 1 : -1);
            table_id.append(...th_4);
        });
    }, []);

    return(
    <div className='information_filter_body'>
        <table id="table_id">
            <tr>
                <th id="th_1_id">№</th>
                <th id="th_2_id">ФИО</th>
                <th id="th_3_id">Год рож-дения</th>
                <th id="th_4_id">Город проживания</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Иванов Иван Иванович</td>
                <td>2001</td>
                <td>Москва</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Третьяков Антон Васильевич</td>
                <td>1985</td>
                <td>Алматы</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Владислав Евгений Викторович</td>
                <td>1995</td>
                <td>Екатеринбург</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Станислав Артур Григорьевич</td>
                <td>2003</td>
                <td>Нью-Йорк</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Самойлов Александр Евгеньевич</td>
                <td>1989</td>
                <td>Якутск</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Протопопов Антон Витальевич</td>
                <td>1991</td>
                <td>Нерюнгри</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Станислав Артур Григорьевич</td>
                <td>1975</td>
                <td>Хабаровск</td>
            </tr>
        </table>
        <div class="span_IF">Нажмите на заглавную строку текущего столбца для сортировки данных по значению</div>
    </div>
    )
}