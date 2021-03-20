import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/Authors';
import BooksView from './views/Books';
import NotFoundView from './views/NotFoundView';
import s from './App.module.css';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          to="/authors"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Home
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route path="/books" component={BooksView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
