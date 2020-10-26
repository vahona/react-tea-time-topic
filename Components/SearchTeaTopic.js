import React, { useEffect, useState } from 'react'

function SearchTeaTopic() {

  const [topics, setTopics] = useState([])
  const [number, Setnumber] = useState(0)
  const [decnumber, Setdecnumber] = useState(0)
  const [valueInput, setValueInput] = useState("")
  const [listTopic, setListTopic] = useState([]);



  const whatTopic = async (e) => {
    // e.preventDefault();
    const url_api = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"
    try {
      const response = await fetch(url_api);
      const topic = await response.json()
      console.log(topic);
      // const storeData = [...topic];
      // console.log(storeData);
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
    const upvoteNumber = topic.find(tea => tea.id === id);
     upvoteNumber + 1


  }

  function decrement (id) {

  }


  function newincreament () {
    Setnumber(number + 1)
  }

  function newDecrement() {
    Setdecnumber(decnumber - 1)
  }


  function deletingTopic (i) {
   setListTopic([...topics.slice(0, i),...topics.slice(i+1)])
    setTopics([...topics.slice(0, i), ...topics.slice(i + 1)])

  }


  return (
    <>
    <div>
      <form onSubmit={whatTopic}>
        <label className="form">
          Add a topic 
            <input type="text" name="type" placeholder="Type here" value={valueInput} onChange={handleInputChange} />
          <button onClick={handleSubmit}>Add</button>
        </label>
      </form>
      </div>
      <section >
        <h1>Next topic</h1>
        <article className="tea-topic" >
          {listTopic.map((item) => item.value && (
            <article className="new-topic">
              <button className="delete" onClick={deletingTopic}>Delete</button>
              <button>archive</button>
              <div>
                {item.value}
              </div>
              <div className="buttons-vote">
                <div>
                  <button onClick={newincreament}>upvote</button>
                  {number}
                </div>
                <div>
                  <button onClick={newDecrement}>downvote</button>
                  {decnumber}
                </div>
                <div></div>
              </div>
            </article>
          ))}
          {topics.map((topic, i) => {

            if(topic.discussedOn === "") {
            return (
              <div>
              <div key={topic.id} className="list-of-topic">
                  <button className="delete"
                   onClick={() => deletingTopic(i)}
                  >Delete</button>
                <button>archive</button>
                <div>{topic.title}</div>
                <div className="button_container">
                  <div>
                  <button id={topic.id} onClick={increament}>upvote</button>
                  {topic.upvotes}
                </div>
                <div>
                  <button onClick={decrement}>downvote</button>
                  {topic.downvotes}
                </div>
                </div>
                <div>{topic.discussedOn}</div>
              </div>
              </div>
            )}
          })}
            <h2>Past topic</h2>
            {topics.map((topic, i) => {
              if(topic.discussedOn === topic.discussedOn) {
                return (
                  <div key={topic.id} className="list-of-topic">
                    <button className="delete" onClick={() => deletingTopic(i)}>Delete</button>
                    <button>archive</button>
                    <div>{topic.title}</div>
                    <div className="button_container">
                      <div>
                        <button id={topic.id} onClick={increament}>upvote</button>
                        {topic.upvotes}
                      </div>
                      <div>
                        <button>downvote</button>
                        {topic.downvotes}
                      </div>
                    </div>
                    <div>{topic.discussedOn}</div>
                  </div>
                )
              } 
              }
            )}
 
        </article>
      </section>

    </>
  )

}

export default SearchTeaTopic