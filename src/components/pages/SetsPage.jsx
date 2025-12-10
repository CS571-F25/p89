import React, { useEffect, useState } from 'react'
import SetsList from '../SetsList';
import { Button } from 'react-bootstrap';

function SetsPage(props) {

	const [sets, setSets] = useState([]);

	useEffect(() => {
		const storedSets = JSON.parse(localStorage.getItem("sets"));
		if (storedSets) {
				setSets(storedSets);
		}
	}, []);

	return (
		<div>
				<h1>Manage your sets here!</h1>
				 <h2>Click on a set to view or add to it.</h2>
				 <br></br>
				 {sets.length === 0 && <>
					<h2>You have no sets. Create one!</h2>
					<Button variant='dark' href="/p89/">Go Create Set!</Button>
				 </>
				 }
				 <SetsList sets={sets} setSets={setSets}/>
		</div>
	)
}

export default SetsPage;