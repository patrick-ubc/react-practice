const Button = ({text, backgroundColor, textColor, fontSize, buttonWidth, textAlign}) => {
    return (
        <div>
            <button className="myButton" 
                style={{backgroundColor: backgroundColor, 
                color: textColor,
                fontSize: fontSize,
                width: buttonWidth,
                textAlign: textAlign
                }}>
                {text}
            </button>
        </div>
    )
}

export default Button
