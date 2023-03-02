// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RecipesPage bg={"#3A98B9"} />
        </Route>
        <Route path="/recipe/:id">
          <RecipeDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
