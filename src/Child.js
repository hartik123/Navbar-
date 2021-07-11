import React,{useContext} from 'react'
import {UserContext} from './Test';


const Child = (props) => {
    // const {data,fun} = useContext(UserContext);
    return (
        <div>
            {/* <h1>{data.name}-{data.surname}</h1> */}
            {
                props.funct()
            }
        </div>
    )
}

export default Child;
