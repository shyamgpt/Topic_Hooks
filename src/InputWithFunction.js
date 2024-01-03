import { useState, useEffect} from "react";
export default function Input(){

    // const [name,setName] = useState("Shyam");

    const [name,setName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() =>{
        //This function act as both componentDidMount and ComponentDidUpdate
        document.title = name+ " "+lastName;
    })

    //but if you want to  use "useEffect" function only as ComponentDidMount the pass an empty []
    // useEffect(() =>{
        
    //     document.title = name+ " "+lastName;
    // },[])

    //AND
    // We can make this function equivalent to ComponentDidUpdate also by passing
    // some condition inside the array

     // useEffect(() =>{
        
    //     document.title = name+ " "+lastName;
    // },[lastname]) --> this mean if you want to change the lastname then the title will get updated
    // bcoz you have passed "lastName" as an argument
    
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </Row >
            <Row label="Last Name">
                    <input value={lastName}
                    onChange ={(e) =>setLastName(e.target.value)}
                    />
            </Row >
        </div>

        <h2>Hello, {name+ " "+lastName} </h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}


