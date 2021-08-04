const General = ({title, icon, text}) => {
    return (
        <div className='general'>
            <h4 style={{textAlign:"center"}}>{title}</h4>
            <h2 style={{textAlign:"center"}}>{text}</h2>
        </div>
    )
}

export default General
