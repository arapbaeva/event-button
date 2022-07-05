import React, {MouseEvent} from "react";
import {Button} from "./components/Button";

// function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //   console.log('Hello, I am Aiym')
    // }

    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, I am a programmer')
    //   }
    //
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }


    // const foo1=()=>{
    //     console.log(100200)
    // }
    // const foo2=(num: number)=>{
    //     console.log(num)
    // }
    // return (
    //     <div>
            {/*<button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
            // <button
            //     onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Vasya")}>MyYouTubeChanel-1
            // </button>
            // <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChanel-2 </button>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}
    //     </div>
    // );


// }

function App() {
                const Button1Foo=(subscriber:string, age:number)=>{
                    console.log(subscriber, age)
                }

    const Button2Foo=(subscriber:string)=>{
        console.log(subscriber)
    }
    return (
        <div className="App">
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button1Foo('Im Vasya',21)}/>
            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button2Foo('Im Ivan')}/>
        </div>
    )
}

export default App;
