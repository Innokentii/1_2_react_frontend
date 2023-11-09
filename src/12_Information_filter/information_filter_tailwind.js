import React, {useEffect} from 'react'

export default function Information_filter_tailwind_F() {

    React.useEffect(() => {
        let th_1_id = document.getElementById('th_1_id_Tailw');
        let th_2_id = document.getElementById('th_2_id_Tailw');
        let th_3_id = document.getElementById('th_3_id_Tailw');
        let th_4_id = document.getElementById('th_4_id_Tailw');
        let table_id = document.getElementById('table_id_Tailw');

        th_1_id.addEventListener('click', _ => {
            console.log(1)
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
    <div className='w-[800px] ml-[auto] mr-[auto]'>
        <table className='border-collapse mt-[25px] mb-[25px] ml-[auto] mr-[auto]' id="table_id_Tailw">
            <tr>
                <th className='w-[25px] border-solid border-[1px] border-black hover:bg-slate-400 hover:cursor-pointer' id="th_1_id_Tailw">№</th>
                <th className='w-[250px] border-solid border-[1px] border-black hover:bg-slate-400 hover:cursor-pointer' id="th_2_id_Tailw">ФИО</th>
                <th className='w-[50px] border-solid border-[1px] border-black hover:bg-slate-400 hover:cursor-pointer' id="th_3_id_Tailw">Год рож-дения</th>
                <th className='w-[100px] border-solid border-[1px] border-black hover:bg-slate-400 hover:cursor-pointer' id="th_4_id_Tailw">Город проживания</th>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>1</td>
                <td className='border-solid border-[1px] border-black'>Иванов Иван Иванович</td>
                <td className='border-solid border-[1px] border-black'>2001</td>
                <td className='border-solid border-[1px] border-black'>Москва</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>2</td>
                <td className='border-solid border-[1px] border-black'>Третьяков Антон Васильевич</td>
                <td className='border-solid border-[1px] border-black'>1985</td>
                <td className='border-solid border-[1px] border-black'>Алматы</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>3</td>
                <td className='border-solid border-[1px] border-black'>Владислав Евгений Викторович</td>
                <td className='border-solid border-[1px] border-black'>1995</td>
                <td className='border-solid border-[1px] border-black'>Екатеринбург</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>4</td>
                <td className='border-solid border-[1px] border-black'>Станислав Артур Григорьевич</td>
                <td className='border-solid border-[1px] border-black'>2003</td>
                <td className='border-solid border-[1px] border-black'>Нью-Йорк</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>5</td>
                <td className='border-solid border-[1px] border-black'>Самойлов Александр Евгеньевич</td>
                <td className='border-solid border-[1px] border-black'>1989</td>
                <td className='border-solid border-[1px] border-black'>Якутск</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>6</td>
                <td className='border-solid border-[1px] border-black'>Протопопов Антон Витальевич</td>
                <td className='border-solid border-[1px] border-black'>1991</td>
                <td className='border-solid border-[1px] border-black'>Нерюнгри</td>
            </tr>
            <tr>
                <td className='text-center border-solid border-[1px] border-black'>7</td>
                <td className='border-solid border-[1px] border-black'>Станислав Артур Григорьевич</td>
                <td className='border-solid border-[1px] border-black'>1975</td>
                <td className='border-solid border-[1px] border-black'>Хабаровск</td>
            </tr>
        </table>
        <div className="text-center p-[10px]">Нажмите на заглавную строку текущего столбца для сортировки данных по значению</div>
    </div>
    )
}