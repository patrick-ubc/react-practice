const Button = ({text, backgroundColor, textColor, fontSize}) => {
    return (
        <div>
            <button className="myButton" 
                style={{backgroundColor: backgroundColor, 
                color: textColor,
                fontSize: fontSize
                }}>
                {text}
            </button>
        </div>
    )
}

export default Button
