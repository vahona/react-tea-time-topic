import React, { useEffect, useState } from 'react'



function SearchTeaTopic() {

  const [topics, setTopics] = useState([])
  const [number, Setnumber] = useState(0)
  const [valueInput, setValueInput] = useState("")
  const [listTopic, setListTopic] = useState([]);



  const whatTopic = async (e) => {
    // e.preventDefault();
    const url_api = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"
    try {
      const response = await fetch(url_api);
      const topic = await response.json()
      console.log(topic);
      const storeData = [...topic];
      console.log(storeData);
      setTopics(topic)
     
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    whatTopic()
  }, [])

  const handleInputChange = (e) => {
    setValueInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     setListTopic(prevvalueInput => prevvalueInput.concat({value : valueInput}))
     setValueInput("")

  }


   function increament (id) {
    //  url_api.storeData.id = id;
    //  if(id == id) {
    Setnumber(prevNumber => ( prevNumber + 1))

    //  }
  }

  return (
    <>
    <div>
      <form onSubmit={whatTopic}>
        <label>
          Add a topic
            <input type="text" name="type" placeholder="Type here" value={valueInput} onChange={handleInputChange} />
          <button onClick={handleSubmit}>Add</button>
        </label>
      </form>
      </div>
      <section >
        <article className="tea-topic" >
          <h2>Next topic</h2>
          {listTopic.map((item) => item.value && (
            <article className="new-topic">
              <button>archive</button>
              <div>
                {item.value}
              </div>
              <div className="buttons-vote">
                <div>
                  <button>upvote</button>
                  {number}
                </div>
                <div>
                  <button>downvote</button>
                  {number}
                </div>
                <div></div>
              </div>
            </article>
          ))}
          {topics.map(topic => {
            return (
              <div key={topic.id} className="list-of-topic">
                <button>archive</button>
                <div>{topic.title}</div>
                <div className="button_container">
                  <div>
                  <button id={topic.id} onClick={increament}>upvote</button>
                  {number}
                </div>
                <div>
                  <button>downvote</button>
                  {topic.downvotes}
                </div>
                </div>
                <div>{topic.discussedOn}</div>
              </div>
            )
          })}

        </article>
      </section>

    </>
  )

}

export default SearchTeaTopic