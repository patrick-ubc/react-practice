const ItemHeader = () => {
    return (
        <div className='flow' style={{
            display: 'flex',
            alignItems: 'center',
            padding: "0px 30px",
            margin: '10px'
        }}>

            <div className="first">
                <h6 style={{color: 'lightgray', margin: "0px"}}>Pool Name</h6>
            </div>
            <div className="second">
                <h6 style={{color: 'lightgray', margin: "0px"}}>Earned (Pending Amount)</h6>
            </div>
            <div className="third">
                <h6 style={{color: 'lightgray', margin: "0px"}}>Farm Rate</h6>
            </div>
            <div className="fourth"> 
                <h6 style={{color: 'lightgray', margin: "0px"}}>APR</h6>
            </div>
        </div>
    )
}

export default ItemHeader
