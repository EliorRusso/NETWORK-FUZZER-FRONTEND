import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from '../Form/Form';
const ProtocolSetup = (props) => {
    const [data, setData] = useState({
        'protocolname': "",
        'numoffield': 0
    })
    const [arr, setArr] = useState([]);
    const [protocolName, setProtocolName] = useState("");
    const [newNumOfFields, setNewNumOfFields] = useState(0);

    useEffect(() => {
        if (newNumOfFields === null)
            return;
        setArr([]);
        var tempArr = [];
        for (let i = 0; i < newNumOfFields; i++)
            tempArr.push(<Form key={i} data={data} serialNumber={i + 1} apiendpoint={props.apiendpoint} />);
        setArr(tempArr)
    }, [newNumOfFields])
    return (
        <>
        <form>
            <div className="gpt3__header-content__input">
                <input placeholder="Protocol Name"
                    value={protocolName}
                    onChange={(e) => {
                        setProtocolName(e.target.value)
                        data.protocolname = e.target.value;
                    }}
                    name="ProtocolName"
                    label="Protocol"
                />
            </div>
            <element />
            <div className="gpt3__header-content__input">
                <input placeholder="Number Of Fields"
                    value={newNumOfFields}
                    type="number"
                    onChange={(e) => {
                        if (e.target.value <= 20) {
                            setNewNumOfFields(e.target.value)
                            setData({
                                'protocolname': protocolName,
                                'numoffield': e.target.value
                            })
                        }
                    }}
                    name="NumberOfFields"
                    label="NumberOfFields"
                />
            </div>
            </form>
            {arr ? arr : <></>}
        </>
    )
}

export default ProtocolSetup
