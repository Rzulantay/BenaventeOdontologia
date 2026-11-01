import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="#inicio">
          {site.name}
        </a>
        <p>{site.title}</p>
      </div>
      <a className="back-to-top" href="#inicio">
        Volver al inicio <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
