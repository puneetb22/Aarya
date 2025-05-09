import { Route, Switch } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Platform from "@/pages/Platform";
import MulesoftConversion from "@/pages/Platform/MulesoftConversion";
import Enterprise from "@/pages/Solutions/Enterprise";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";
import ContactUs from "@/pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/platform" component={Platform} />
          <Route path="/platform/mulesoft-conversion" component={MulesoftConversion} />
          <Route path="/solutions/enterprise" component={Enterprise} />
          <Route path="/resources" component={Resources} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
