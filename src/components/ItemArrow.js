const ItemArrow = ({first, second, third}) => {
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
                <h6 style={{color: 'lightgray', marginBottom: "0px"}}>Earned (Harvest Amount)</h6>
                <h5 style={{marginTop:"0px"}}>{second} ERP Token</h5>
            </div>
            <div className="third">
                <h6 style={{color: 'lightgray', marginBottom: "0px"}}>Average ERP</h6>
                <h5 style={{marginTop:"0px"}}>{third}%</h5>
            </div>
            <a class="arrow">
                <span class="left-bar"></span>
                <span class="right-bar"></span>
            </a>
        </div>
    )
}

export default ItemArrow

