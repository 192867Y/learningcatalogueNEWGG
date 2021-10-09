import React, {useState} from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Overlay from "react-overlay-component";

const subsubcats = [
    {
        subsubcatid: '1',
        subsubcatname: 'Subsubcat one'
    },
    {
        subsubcatid: '2',
        subsubcatname: 'Subsubcat two'
    },
]

function CatalogueLIstCourse(props) {
    const [toggle, setToggle] = useState(false);

    function handleFilterClick() {
        setToggle(true);
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {props.callfrmcat}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{props.subcnm}</Breadcrumb.Item>
                <Breadcrumb.Item active>List of Courses</Breadcrumb.Item>
            </Breadcrumb>
            <div className="navDiv" style={{ padding: '10px' }}>
                <p>
                    <button className="btn-warning filterBtn" style={{ display: 'flex', justifyContent: 'left' }} onClick="">Filter</button>
                </p>

                {subsubcats.map(subsubcat => (

                    <button className="btn btn-primary" style={{ marginRight: '15px' }} >{subsubcat.subsubcatname}</button>
                ))}
            </div>
        </div >
    );
}



export default CatalogueLIstCourse;