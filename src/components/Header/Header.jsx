import React, { useEffect } from 'react'
import './Header.css'
import { useState } from "react";
import Form from '../Form/Form';
import ProtocolSetup from '../ProtocolSetup/ProtocolSetup';

const Header = () => {
	const [HeaderData, setHeaderData] = useState("")
	var PayloadData = {
		DataHeader: "value"
	}
	const submit = async () => {
		if (HeaderData === "")
			return;
		PayloadData.DataHeader = HeaderData;
		const a = PayloadData
		const body = { a }
		const response = await fetch('http://localhost:5000/SecondHeader', {
			method: 'POST',
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		});
		//export NODE_OPTIONS=--openssl-legacy-provider
		const res = await response.json()
		console.log(res);
	}
	return (
		<div>
			<h1 className="gpt3__title">
				Fuzz Testing With Numeric Values
			</h1>
			<h1 className="gpt3__title2">
				Instructions: Provide value range for random numbers to be sent to the DUT.
			</h1>
			<h1 className="gpt3__title2">
				Note that the following code could crash the device when executed
			</h1>
			<h1 className="gpt3__title2">
				and because of that  the data could be inaccurate when sent back.
			</h1>
			<h1 className="gpt3__title">
				Custom Protocol Declaration
			</h1>
			<ProtocolSetup apiendpoint={'FirstHeader'} />
			<element />
			<div className="fieldcontent2">
				<textarea
					placeholder="Data"
					value={HeaderData}
					onChange={(e) => {
						setHeaderData(e.target.value)
					}}
				/>
				<div className="buttongpt">
					<button onClick={submit}>submit</button>
				</div>
			</div>

		</div>
		// <>
		// <form>
		// 			<element/>
		// 			<h1 className = "gpt3__title">
		// 				Fuzz Testing With Numeric Values
		// 			</h1>
		// 			<h1 className = "gpt3__title2">
		// 				Instructions: Provide value range for random numbers to be sent to the DUT.
		// 			</h1>
		// 			<h1 className = "gpt3__title2">
		// 				Note that the following code could crash the device when executed
		// 			</h1>
		// 			<h1 className = "gpt3__title2">
		// 				and because of that  the data could be inaccurate when sent back.
		// 			</h1>
		// 			<h1 className = "gpt3__title">
		// 				Custom Protocol Declaration
		// 			</h1>
		// 			<div className="gpt3__header-content__input"> 
		// 			<input placeholder= "Protocol Name" 
		// 				value={protocolName}
		// 				onChange={(e) => {
		// 					setProtocolName(e.target.value)
		// 					data.protocolname = e.target.value;
		// 				}}
		// 				name="ProtocolName"
		// 				label="Protocol"
		// 			/>
		// 			</div>
		// 			<element/>
		// 			<div className="gpt3__header-content__input">
		// 			<input placeholder = "Number Of Fields"
		// 				value={newNumOfFields}
		// 				type="number"
		// 				onChange={(e) => {
		// 					if(e.target.value <= 20)
		// 					{
		// 						setNewNumOfFields(e.target.value)
		// 						setData({
		// 							'protocolname': protocolName,
		// 							'numoffield': e.target.value
		// 						})
		// 					}
		// 				}}
		// 				name="NumberOfFields"
		// 				label="NumberOfFields"
		// 			/>
		// 			</div>
		// 		</form>  

		// 		{arr ? arr : <></>}
		// </>

	)
}
export default Header
		/*
<div className="gpt3__header section__padding" id="home">
<div className="gpt3__header-content">
<h1 className="gradient__text"></h1>
<element/>
<div className="gpt3__header-content__input">
<input ref={inputRef} type="text" placeholder="Protocol Name" />
<button onClick={handleClick}>SEND</button>
</div>
</div>
</div>
*/