import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Component(props) {

    const [isHovering, setHovering] = useState(false)
    

    function handleCuddle()
    {
        alert("This " + props.name + "is very happey because you cuddled it." )
        
    }

    function handlePet()
    {
        alert("This " + props.name + "is very happey because you cuddled it.")
    }
    
    function handleOver()
    {
        setHovering(true)
    }
    
    function handleLeave()
    {
        setHovering(false)
    }

    return <Card style={{margin: "0.5rem"}}>
        <h2>Hello, I'm {props.name}</h2>
        <Button 
            variant={isHovering?"success":"primary"}
            onClick={handleCuddle} 
            onMouseOver={handleOver} 
            onMouseLeave={handleLeave}>
                Cuddle Me!
        </Button>
        <Button 
            variant={isHovering?"success":"primary"}
            onClick={handlePet} 
            onMouseOver={handleOver} 
            onMouseLeave={handleLeave}>
                Pet Me!
        </Button>
    </Card>
}

export default Component;