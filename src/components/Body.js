import General from "./General"
import ItemArrow from "./ItemArrow"
import ItemBtn from "./ItemBtn"
import ItemHeader from "./ItemHeader"

const Body = () => {
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

            <ItemBtn 
                first="BTC-USDT"
                second="101.3"
                third="20000"
                fourth="25"
            />
        </div>
    )
}

export default Body
