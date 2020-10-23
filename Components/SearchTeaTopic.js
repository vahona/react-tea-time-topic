import React, { useEffect, useState } from 'react'

const url_api = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

function SearchTeaTopic() {

	const [topics, seTopics] = useState([])
	const [number, Setnumber] = useState(null)


	const whatTopic = async () => {
		try {
			const response = await fetch(url_api);
			const topic = await response.json()
			console.log(topic);
			seTopics(topic)
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		whatTopic()
	}, [])

	
	function increament(id) {

    Setnumber(prevNumber => prevNumber + 1)
	}

	return (
		<>
			<form>
				<label>
					Add a topic
                <input type="text" placeholder="Type here" />
					<button>Add</button>
				</label>
			</form>
			<section > 
				
				<article>
					<h2>Next topic</h2>
				{topics.map(topic => {
					return (
						<div key={topic.id}>
							<button>archive</button>
							<div>{topic.title}</div>
							<div>{topic.discussedOn}</div>
							<div>
							<button id={topic.id} onClick={ increament}>upvote</button>
								{number}
							</div>
							<div>
							<button>downvote</button>
								{topic.downvotes}
							</div>
							
						</div>
					)
				})}
				</article>
			</section>

		</>
	)

}

export default SearchTeaTopic