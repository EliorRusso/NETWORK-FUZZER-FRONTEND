import React, { useEffect } from 'react'
import './Header.css'
import { useState } from "react";
import Form from '../Form/Form';

const Header = () => {
	const [data, setData] = useState({
		'protocolname': "",
		'numoffield': 0
	})
	const [arr, setArr] = useState([]);
	const [protocolName, setProtocolName] = useState("");
	const [newNumOfFields, setNewNumOfFields] = useState(0);
	 
	var inputArray = [];
	var size = 3; //Maximum Array size
	for(var i=0; i<size; i++) {
		inputArray[i] = 'x';
	}
	useEffect(() => {
		console.log(data)
	}, [data])
	useEffect(() => {

		if(newNumOfFields === null)
			return;
		setArr([]);
		var tempArr = [];
		for(let i=0; i<newNumOfFields; i++)
			tempArr.push(<Form key={i} data={data} serialNumber={i+1}/>);
		setArr(tempArr)
	}, [newNumOfFields])

	return (
		<>
		<form>
					<element/>
					<h1 className = "gpt3__title">
						Custom Protocol Declaration
					</h1>
					<div className="gpt3__header-content__input"> 
					<input placeholder= "Protocol Name" 
						value={protocolName}
						onChange={(e) => {
							setProtocolName(e.target.value)
							data.protocolname = e.target.value;
						}}
						name="ProtocolName"
						label="Protocol"
					/>
					</div>
					<element/>
					<div className="gpt3__header-content__input">
					<input placeholder = "Number Of Fields"
						value={newNumOfFields}
						type="number"
						onChange={(e) => {
							if(e.target.value <= 20)
							{
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