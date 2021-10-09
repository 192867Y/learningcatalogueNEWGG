import React, { useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CatalogueListCourse from './catalogueLIstCourse'

const subcats = [
    {
        subcatid: '1',
        subcatname: 'Subcat one'
    },
    {
        subcatid: '2',
        subcatname: 'Subcat two'
    },
]



function Subcategory(props) {
    const [cid, setCid] = useState(0);
    const [subid, setSubid] = useState(0);
    const [subcnm, setSubcnm] = useState("");
    const [click, setClick] = useState(false);

    function handleClick(catid, subcid, subcname) {
        //e.preventDefault();
        // console.log(catid);

        setCid(catid);
        setSubid(subcid);
        setSubcnm(subcname);
        setClick(true);
    }

    return (
        <div>
            {click ? <CatalogueListCourse catid={cid} subcid={subid} callfrmcat={props.callfrm} subcnm={subcnm} /> :
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {props.callfrm}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Sub-category</Breadcrumb.Item>
                    </Breadcrumb>
                    {subcats.map(subcat => (
                        <div className="subCatBtn">
                            <button className="btn btn-primary" onClick={() => { handleClick(subcat.subcatid, props.catid, subcat.subcatname) }}>{subcat.subcatname}</button>
                        </div>
                    ))}
                </div>}
        </div>
    );
}



export default Subcategory;