import General from "./General"

const Body = () => {
    return (
        <div className='main-body'>
            <h3 className='title'>Claims</h3>

            <div className='header'
                style={{justifyContent: 'center'}}>
                <General title='Total Sponsored' text='$201,231.01'/>
                <General title='Total ERP Earned' text='230.12 ERP'/>
            </div>
        </div>
    )
}

export default Body
