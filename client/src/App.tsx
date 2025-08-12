import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ExitIntentBanner from "./components/ExitIntentBanner";
import Home from "./pages/Home";
import PaintCorrection from "./pages/PaintCorrection";
import CeramicCoating from "./pages/CeramicCoating";

import InteriorDetail from "./pages/InteriorDetail";
import FullInteriorDetail from "./pages/FullInteriorDetail";
import InteriorRestoration from "./pages/InteriorRestoration";
import PetHairRemoval from "./pages/PetHairRemoval";
import SmokeOdorRemoval from "./pages/SmokeOdorRemoval";
import WashAndWax from "./pages/WashAndWax";
import PremiumWash from "./pages/PremiumWash";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/paint-correction" component={PaintCorrection} />
          <Route path="/ceramic-coating" component={CeramicCoating} />

          <Route path="/interior-detail" component={InteriorDetail} />
          <Route path="/full-interior-detail" component={FullInteriorDetail} />
          <Route path="/interior-restoration" component={InteriorRestoration} />
          <Route path="/pet-hair-removal" component={PetHairRemoval} />
          <Route path="/smoke-odor-removal" component={SmokeOdorRemoval} />
          <Route path="/wash-and-wax" component={WashAndWax} />
          <Route path="/premium-wash" component={PremiumWash} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time similar to Temu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ExitIntentBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
