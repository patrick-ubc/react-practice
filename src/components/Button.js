const Button = ({text, backgroundColor, textColor}) => {
    return (
        <div>
            <button className="myButton" 
                style={{backgroundColor: backgroundColor, 
                color: textColor
                }}>
                {text}
            </button>
        </div>
    )
}

export default Button
