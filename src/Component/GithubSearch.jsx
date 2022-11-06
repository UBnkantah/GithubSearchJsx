import { useState, useEffect } from 'react';
import { Form, Card, Icon, Image } from 'semantic-ui-react'
import './GithubSearch.css';


const GithubSearch = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [error, setError] = useState(""); 


  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data);
    });
  }, []);

  const setData = ({
    name, 
    twitter_username, 
    followers, 
    following, 
    public_repos, 
    avatar_url, 
    created_at,
    update_at
    }) => {
      setName(name);
      setUsername(twitter_username);
      setFollowers(followers);
      setFollowing(following);
      setRepos(public_repos);
      setAvatar(avatar_url);
      setCreateDate(created_at);
      setUpdateDate(update_at);
      setUserInput(userInput);
      setError(error)
  };

  const handleSearch = e => {
    setUserInput(e.target.value);
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }

  return (
    <div className="App">
      <div className='navbar'>
          Github Search
      </div>
      <div className='search'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Github User'name='Github User' onChange={handleSearch}/>
            <Form.Button content='Search' />
          </Form.Group>
        </Form>
      </div>
      <div className='card'>
        <Card>
          <Card.Content>
            <Card.Header>Name: {name}</Card.Header>
          </Card.Content>
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            
            <Card.Header>{username}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              followers:
              {followers}
            </a>
          </Card.Content>
          <Card.Content>
            <a>
              <Icon name='user' />
              Following: 
              {following}
            </a>
          </Card.Content>
          <Card.Content>
            <a>
              <Icon name='user' />
              Repos: 
              {repos}
            </a>
          </Card.Content>
          <Card.Content>
            <a>
              <Icon name='user' />
              Created Date:
              {createDate}
            </a>
          </Card.Content>
          <Card.Content>
            <a>
              <Icon name='user' />
              Updated Date:
              {updateDate}
            </a>
          </Card.Content>
        </Card>
      </div>
  </div>
  );
}

export default GithubSearch;
