import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PinProtection from "@/components/PinProtection";
import { usePinProtection } from "@/hooks/usePinProtection";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function App() {
  const { isUnlocked, isLoading, unlock } = usePinProtection();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <TooltipProvider>
        <PinProtection onUnlock={unlock} />
        <Toaster />
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
