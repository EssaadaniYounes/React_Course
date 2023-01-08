import './App.css';

/*
  Props :
    What is props
    why we use it
    How we use it

*/

const MainHeader = () => {
  return (

    <div>
      <h1>My web site</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
    </div>
  )
}

const Article = (props) => {
  
  return (
    <h1>{ props.title }</h1>
  )
}
function App() {
  const articleName = "Article 1";
  return (
    <div>
      <MainHeader />
      <Article title={articleName} />
      <Article title="Article 2" />
      <Article title="Article 3" />
      <Article title="Article 4" />
    </div>
  );
}

export default App;
