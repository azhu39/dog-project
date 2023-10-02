import { Card, Button } from "react-bootstrap";
import "./card.css"
function Post(props) {

    //const [isHovering, setHovering] = useState(false)
    

    function handleCuddle()
    {
        alert("This # " + props.index + " " + props.selectedBreed +" is very happey because you cuddled it." )
        
    }

    function handlePet()
    {
        alert("This # " + props.index + " " + props.selectedBreed + " is very happey because you cuddled it.")
    }
    
    

    return <Card className="card">
        <Card.Img variant="top" src={props.image} alt={`Dog ${props.index}`} className="card-img"/>
        <Card.Body className="card-body">
            <Card.Text className="card-text">Hello, I'm {props.selectedBreed} # {props.index}</Card.Text>
            <Button className="card-button"
                onClick={handleCuddle} 
                >
                    Cuddle Me!
            </Button>
            <Button className="card-button"
                onClick={handlePet} 
                >
                    Pet Me!
            </Button>
        </Card.Body>
    </Card>
}

export default Post;