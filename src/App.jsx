import { Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/Authors';
import BooksView from './views/Books';

const App = () => (
  <>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/authors" component={AuthorsView} />
    <Route exact path="/books" component={BooksView} />
  </>
);

export default App;
