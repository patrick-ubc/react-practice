import General from "./General"
import ItemArrow from "./ItemArrow"
import ItemBtn from "./ItemBtn"
import ItemHeader from "./ItemHeader"
import { useState } from "react"

const Body = () => {
    const [itemBtn1, setItemBtn1] = useState([
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
    ])


    const [itemBtn2, setItemBtn2] = useState([
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
    ])

    const [itemBtn3, setItemBtn3] = useState([
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
        {
            first: "BTC-USDT",
            second: "101.3",
            third: "20000",
            fourth: "25",
        },
    ])


    return (
        <div className='main-body'>
            <h3 className='title'>Claims</h3>

            <div className='flow'
                style={{justifyContent: 'center'}}>
                <General title='Total Sponsored' text='$201,231.01'/>
                <General title='Total ERP Earned' text='230.12 ERP'/>
            </div>

            <ItemArrow 
                first="BTC Sponsored List" 
                second="182.16" 
                third="30"
            />

            <ItemHeader />

            {itemBtn1.map((e)=>(<ItemBtn 
                first={e.first}
                second={e.second}
                third={e.third}
                fourth={e.fourth}
            />))}

            <ItemArrow 
                first="BTC Sponsored List" 
                second="182.16" 
                third="30"
            />

            <ItemHeader />

            {itemBtn2.map((e)=>(<ItemBtn 
                first={e.first}
                second={e.second}
                third={e.third}
                fourth={e.fourth}
            />))}


            <ItemArrow 
                first="BTC Sponsored List" 
                second="182.16" 
                third="30"
            />

            <ItemHeader />

            {itemBtn3.map((e)=>(<ItemBtn 
                first={e.first}
                second={e.second}
                third={e.third}
                fourth={e.fourth}
            />))}

            
        </div>
    )
}

export default Body
