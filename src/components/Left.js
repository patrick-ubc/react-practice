import Button from "./Button"

const Left = () => {
    return (
        <div className="left">
            <div>
                <img src="https://gblobscdn.gitbook.com/spaces%2F-MYW_SJxm5dBB_M2eZzh%2Favatar-1626189322971.png?alt=media" 
                    height="20%" width="20%"
                    style={{margin:' 10px auto 0px auto'}}/>
                <h4 style={{marginTop:"0px"}}>Entropyfi</h4>
            </div>
            
            <div style={{marginTop:'70px'}}>
                <Button 
                    text="Prediction" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='25px'
                />
                <Button 
                    text="Sponsorship" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='25px'
                />
                <Button 
                    text="Claim" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='25px'
                />
                <Button 
                    text="Vote" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='25px'
                />
            </div>
        </div>
    )
}

export default Left
