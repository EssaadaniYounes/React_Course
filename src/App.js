import './App.css';

/*
  Render list :
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

const Article = ({ article }) => {
  /*
    props: {
      article:{
        id,
        title,
        description
      }
    }
  */
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </>
  )
}
function App() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      description: "Lorem Ipsum",
    },
    {
      id: 2,
      title: "Article 2",
      description: "Some random text",
    },
    {
      id: 3,
      title: "Article 3",
      description: "Test",
    },
    {
      id: 4,
      title: "Article 4",
      description: "Lorem Ipsum",
    },
  ]
  return (
    <div>
      <MainHeader />
      {
        articles.map(article => {
          return <Article key={article.id}
            article={article}
          />
        })
      }
    </div>
  );
}

export default App;
