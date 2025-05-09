import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Platform from "@/pages/Platform";
import MulesoftConversion from "@/pages/Platform/MulesoftConversion";
import Enterprise from "@/pages/Solutions/Enterprise";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platform" component={Platform} />
      <Route path="/platform/mulesoft-conversion" component={MulesoftConversion} />
      <Route path="/solutions/enterprise" component={Enterprise} />
      <Route path="/resources" component={Resources} />
      <Route path="/company" component={Company} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
