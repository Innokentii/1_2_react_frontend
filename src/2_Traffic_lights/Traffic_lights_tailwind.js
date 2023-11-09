import React from 'react' /*6.9k (gzipped: 2.7k)*/

export default function Traffic_lights_Tailwind_f() {
    //(с изменением цвета фона)
    let [number_queue_one, setNumber_queue_one] = React.useState(1);
    let [Traffic_lights_1_style, setTraffic_lights_1_style] = React.useState({background: 'red'});
    let [Traffic_lights_2_style, setTraffic_lights_2_style] = React.useState({background: 'rgb(158, 154, 154)'});
    let [Traffic_lights_3_style, setTraffic_lights_3_style] = React.useState({background: 'rgb(158, 154, 154)'});

    function click_traffic_lights_one() {
        if (number_queue_one === 1) {
            setTraffic_lights_1_style(Traffic_lights_1_style = {background: 'rgb(158, 154, 154)'});
            setTraffic_lights_2_style(Traffic_lights_1_style = {background: 'yellow'});
        }
        if (number_queue_one === 2) {
            setTraffic_lights_2_style(Traffic_lights_1_style = {background: 'rgb(158, 154, 154)'});
            setTraffic_lights_3_style(Traffic_lights_1_style = {background: 'green'});
        }
        if (number_queue_one === 3) {
            setTraffic_lights_3_style(Traffic_lights_1_style = {background: 'rgb(158, 154, 154)'});
            setTraffic_lights_1_style(Traffic_lights_1_style = {background: 'red'});
        }
        if (number_queue_one === 3) {setNumber_queue_one(number_queue_one = 1)}
        else {setNumber_queue_one(number_queue_one = number_queue_one + 1)};
        console.log(number_queue_one)
    }

    //(с изменением картинки)
    let [number_queue_two, setNumber_queue_two] = React.useState(1);
    let [imgTL_style, setimgTL_style] = React.useState("./2_image/1_Traffic_lights_red.bmp");

    function click_traffic_lights_two() {
        if (number_queue_two === 1) {
            setimgTL_style(imgTL_style = "./2_image/2_Traffic_lights_yellow.bmp");
        }
        if (number_queue_two === 2) {
            setimgTL_style(imgTL_style = "./2_image/3_Traffic_lights_green.bmp");
        }
        if (number_queue_two === 3) {
            setimgTL_style(imgTL_style = "./2_image/1_Traffic_lights_red.bmp");
        }
        if (number_queue_two === 3) {setNumber_queue_two(number_queue_two = 1)}
        else {setNumber_queue_two(number_queue_two = number_queue_two + 1)};
        console.log(number_queue_two)
    }

    //(с перемещением картинки по Z-координатам)
    let [number_queue_three, setNumber_queue_three] = React.useState(1);
    let [imgTL_1_style, setimgTL_1_style] = React.useState({zIndex: '1'});
    let [imgTL_2_style, setimgTL_2_style] = React.useState({zIndex: '1'});
    let [imgTL_3_style, setimgTL_3_style] = React.useState({zIndex: '3'});

        function click_traffic_lights_three() {
            if (number_queue_three === 1) {
                setimgTL_3_style(imgTL_3_style = {zIndex: '1'});
                setimgTL_1_style(imgTL_1_style = {zIndex: '3'});
            }
            if (number_queue_three === 2) {
                setimgTL_1_style(imgTL_3_style = {zIndex: '1'});
                setimgTL_2_style(imgTL_1_style = {zIndex: '3'});
            }
            if (number_queue_three === 3) {
                setimgTL_2_style(imgTL_3_style = {zIndex: '1'});
                setimgTL_3_style(imgTL_1_style = {zIndex: '3'});
            }
            if (number_queue_three === 3) {setNumber_queue_three(number_queue_three = 1)}
            else {setNumber_queue_three(number_queue_three = number_queue_three + 1)};
            console.log(number_queue_three)
        }

    return (
    <div className="w-[1500px] ml-[auto] mr-[auto] flex flex-row justify-around text-center">
        <div>
            <span>(с изменением цвета фона)</span>
            <p></p>
            <div className="flex flex-row justify-around w-[400px] h-[100px] border-solid border-[4px] border-black rounded-[20px] items-center">
                <div className="bg-[rgb(158, 154, 154)] border-solid border-[2px] border-black rounded-[50%] overflow-hidden w-[80px] h-[80px]" style={Traffic_lights_1_style}></div>
                <div className="bg-[rgb(158, 154, 154)] border-solid border-[2px] border-black rounded-[50%] overflow-hidden w-[80px] h-[80px]" style={Traffic_lights_2_style}></div>
                <div className="bg-[rgb(158, 154, 154)] border-solid border-[2px] border-black rounded-[50%] overflow-hidden w-[80px] h-[80px]" style={Traffic_lights_3_style}></div>
            </div>
            <p className='h-[10px]'>
            </p>
            <div className='flex flex-row gap-[5px] justify-center'>
            Переключатель светофора <div className='w-[60px] h-[30px]'><button className='bg-slate-300 border-solid border-[1px] border-black rounded-[6px] active:w-[50px] active:h-[26px]' id="button_1" onClick={click_traffic_lights_one}>кнопка</button></div>
            </div>
            <p></p>
        </div>
        <div>
            <span>(с изменением картинки)</span>
            <p></p>
            <div class="flex flex-row justify-around w-[100px] h-[100px] border-solid border-[4px] border-black rounded-[20px] items-center ml-[auto] mr-[auto]">
                <div><img id="img_id" src={imgTL_style} alt="нет сфетофора"/></div>
            </div>
            <p className='h-[10px]'></p>
            <div className='flex flex-row gap-[5px] justify-center'>
            Переключатель светофора <div className='w-[60px] h-[30px]'><button id="button_2" className='bg-slate-300 border-solid border-[1px] border-black rounded-[6px] active:w-[50px] active:h-[26px]' onClick={click_traffic_lights_two}>кнопка</button></div>
            </div>
            <p></p>
        </div>
        <div>
            <span>(с перемещением картинки по Z-координатам)</span>
            <p></p>
            <div className="flex flex-row justify-around w-[400px] h-[100px] border-solid border-[4px] border-black rounded-[20px] items-center">
                <div className="border-solid border-[2px] border-black rounded-[50%] w-[84px] h-[84px] overflow-hidden"><div className="absolute bg-stone-400 rounded-[50%] w-[84px] h-[84px] z-[2]"></div><img className='relative left-[0] top-[0]  border-solid border-[2px] border-black rounded-[50%] w-[80px] h-[80px] z-[1]' src="./2_image/1_Traffic_lights_red.bmp" alt="нет сфетофора" style={imgTL_1_style}/></div>
                <div className="border-solid border-[2px] border-black rounded-[50%] w-[84px] h-[84px] overflow-hidden"><div className="absolute bg-stone-400 rounded-[50%] w-[84px] h-[84px] z-[2]"></div><img className='relative left-[0] top-[0]  border-solid border-[2px] border-black rounded-[50%] w-[80px] h-[80px] z-[1]' src="./2_image/2_Traffic_lights_yellow.bmp" alt="нет сфетофора" style={imgTL_2_style}/></div>
                <div className="border-solid border-[2px] border-black rounded-[50%] w-[84px] h-[84px] overflow-hidden"><div className="absolute bg-stone-400 rounded-[50%] w-[84px] h-[84px] z-[2]"></div><img className='relative left-[0] top-[0]  border-solid border-[2px] border-black rounded-[50%] w-[80px] h-[80px] z-[3]' src="./2_image/3_Traffic_lights_green.bmp" alt="нет сфетофора" style={imgTL_3_style}/></div>
            </div>
            <p className='h-[10px]'></p>
            <div class='flex flex-row gap-[5px] justify-center'>
            Переключатель светофора <div className='w-[60px] h-[30px]'><button id="button_3" className='bg-slate-300 border-solid border-[1px] border-black rounded-[6px] active:w-[50px] active:h-[26px]' onClick={click_traffic_lights_three}>кнопка</button></div>
            </div>
            <p></p>
        </div>
    </div>
    )
}