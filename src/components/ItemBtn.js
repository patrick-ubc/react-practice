import Button from "./Button"

const ItemBtn = ({first, second, third, fourth}) => {
    return (
        <div className='flow' style={{
            backgroundColor: '#2a3f3f', 
            borderRadius: '20px',
            padding: "0px 30px",
            margin: '10px'
        }}>
        <div className="first">
            <h5>{first}</h5>
        </div>
        <div className="second">
            <h5>{second} ERP Token</h5>
        </div>
        <div className="third">
            <h5>{third} ERP/Day</h5>
        </div>
        <div className="fourth">
            <h5>{fourth}% EPR</h5>
        </div>
        <Button 
            className="claim"
            text="Claim" 
            backgroundColor='#1fb1bb' 
            textColor='black'
        />
    </div>
    )
}

export default ItemBtn
