import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function AgeGate() {
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    const ok = localStorage.getItem("noxe-age-verified");
    if (!ok) setVerified(false);
  }, []);

  if (verified) return null;

  const accept = () => {
    localStorage.setItem("noxe-age-verified", "1");
    setVerified(true);
  };
  const reject = () => { window.location.href = "https://www.google.com"; };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl px-4 animate-fade-in">
      <div className="glass max-w-lg w-full rounded-2xl p-8 md:p-10 text-center glow-violet">
        <div className="text-xs tracking-[0.3em] text-accent uppercase mb-4">Acces Restricționat</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ai împlinit <span className="text-gradient">18 ani</span>?
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Acest site comercializează produse din tutun. Conform legislației române,
          accesul este permis exclusiv persoanelor majore. Fumatul dăunează grav sănătății.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={accept} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-semibold">
            Da, am peste 18 ani
          </Button>
          <Button size="lg" variant="outline" onClick={reject}>
            Nu, ies din site
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground/60 mt-6 leading-relaxed">
          Prin continuare confirmi pe propria răspundere că ai vârsta legală pentru achiziționarea de produse din tutun în România.
        </p>
      </div>
    </div>
  );
}
