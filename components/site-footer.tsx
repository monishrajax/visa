export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-background/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-tight">Agentic Compliance</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Agentic AI–enabled continuous PCI/PII compliance for financial services:
              interpret regulations, detect risk, coordinate remediation, and generate
              audit-ready evidence continuously.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <div className="font-medium">Quick links</div>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#architecture">
              Architecture
            </a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#dashboard">
              Compliance dashboard
            </a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#scenario">
              Live scenario
            </a>
          </div>
          <div className="text-sm">
            <div className="font-medium">Contact</div>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              For hackathons, pilots, or enterprise evaluations, reach out for a tailored
              demo and threat-model review.
            </p>
            <p className="mt-3 text-muted-foreground">
              Email: <span className="text-foreground">team@agenticcompliance.dev</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Agentic Compliance Platform</div>
          <div>Built for regulated financial environments • Audit-ready by design</div>
        </div>
      </div>
    </footer>
  );
}


