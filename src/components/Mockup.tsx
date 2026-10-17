/**
 * Reproduction fidèle de l'écran "Database" de l'application Android Mydata
 * (Jetpack Compose, voir ui/journal/JournalPage.kt + TableView.kt +
 * CellComposables.kt + ui/shell/Shell.kt).
 *
 * Échelle : 1 dp = 1 px, 1 sp = 1 px. Les couleurs viennent de ui/theme/Color.kt :
 * Background #1E1E1E, Panel #252526, Accent #007ACC, AccentLight #1F8AD2,
 * Border #2D2D2D, SelectedBg #094771, vert #4CAF50, rouge #FF5252.
 */

const BG = "#1E1E1E";
const PANEL = "#252526";
const BORDER = "#2D2D2D";
const SEL = "#094771";
const ACCENT = "#007ACC";
const ACCENT_LIGHT = "#1F8AD2";
const INK = "#FFFFFF";
const INK2 = "rgba(255,255,255,0.70)";
const INK3 = "rgba(255,255,255,0.38)";
const GREEN = "#4CAF50";
const RED = "#FF5252";

const ICON: React.CSSProperties = { width: 14, height: 14, flexShrink: 0 };

function MenuIcon() {
  return (
    <svg viewBox="0 0 16 16" width={20} height={20} aria-hidden>
      <g stroke={INK} strokeWidth={1.6}>
        <line x1="2" y1="3.5" x2="14" y2="3.5" />
        <line x1="2" y1="8" x2="14" y2="8" />
        <line x1="2" y1="12.5" x2="14" y2="12.5" />
      </g>
    </svg>
  );
}
function CloudSyncIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden>
      <path d="M5.5 13.5a3.4 3.4 0 0 1 .3-6.8 4.4 4.4 0 0 1 8.4 1.2 3 3 0 0 1 .4 5.6" fill="none" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M10 15.6v-4.2M8.2 13l1.8-1.8 1.8 1.8" fill="none" stroke={color} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PencilIcon({ size = 15, color }: { size?: number; color: string }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden>
      <path d="M2.5 13.5H5l7-7a1.6 1.6 0 0 0-2.26-2.26l-7 7.05z" fill="none" stroke={color} strokeWidth={1.3} strokeLinejoin="round" />
    </svg>
  );
}
function TrashIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden>
      <g stroke={INK3} strokeWidth={1.2} strokeLinecap="round" fill="none">
        <path d="M2.8 4.2h10.4M6.4 4.2V2.8h3.2v1.4M4.3 4.2l.6 8.6a1 1 0 0 0 1 .9h4.2a1 1 0 0 0 1-.9l.6-8.6M6.6 6.8v4M9.4 6.8v4" />
      </g>
    </svg>
  );
}
function StarIcon({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden>
      <path d="M8 1.6l2 4.1 4.5.6-3.2 3.2.75 4.5L8 11.8l-4.05 2.2.75-4.5L1.5 6.3 6 5.7z" fill={ACCENT} />
    </svg>
  );
}
function StarOutline() {
  return (
    <svg viewBox="0 0 16 16" width={13} height={13} aria-hidden>
      <path d="M8 1.6l2 4.1 4.5.6-3.2 3.2.75 4.5L8 11.8l-4.05 2.2.75-4.5L1.5 6.3 6 5.7z" fill="none" stroke={ACCENT} strokeWidth={1.2} />
    </svg>
  );
}
function KebabIcon() {
  return (
    <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden>
      <g fill={INK2}>
        <circle cx="8" cy="3" r="1.3" /><circle cx="8" cy="8" r="1.3" /><circle cx="8" cy="13" r="1.3" />
      </g>
    </svg>
  );
}
function ColumnsIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden>
      <g stroke={color} strokeWidth={1.3} fill="none">
        <rect x="1.8" y="2.5" width="12.4" height="11" rx="1.5" />
        <line x1="6.2" y1="2.5" x2="6.2" y2="13.5" />
        <line x1="10.4" y1="2.5" x2="10.4" y2="13.5" />
      </g>
    </svg>
  );
}
function AddIcon({ color = INK }: { color?: string }) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden>
      <path d="M8 2.5v11M2.5 8h11" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" width={18} height={18} aria-hidden>
      <circle cx="7" cy="7" r="4.4" fill="none" stroke={INK3} strokeWidth={1.3} />
      <path d="M10.3 10.3l3.2 3.2" stroke={INK3} strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 14 14" width={13} height={13} style={ICON} aria-hidden>
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.4" fill="none" stroke={INK3} strokeWidth={1.2} />
      <path d="M1.5 5.4h11M4.4 1.2v2.4M9.6 1.2v2.4" stroke={INK3} strokeWidth={1.2} />
    </svg>
  );
}
function CalcIcon() {
  return (
    <svg viewBox="0 0 14 14" width={13} height={13} style={ICON} aria-hidden>
      <rect x="2" y="1.5" width="10" height="11" rx="1.4" fill="none" stroke={ACCENT} strokeWidth={1.2} />
      <path d="M4.2 4.2h5.6M4.2 6.6h1.2M6.4 6.6h1.2M8.6 6.6h1.2M4.2 8.9h1.2M6.4 8.9h1.2M8.6 8.9h1.2" stroke={ACCENT} strokeWidth={1.1} />
    </svg>
  );
}
function DropIcon() {
  return (
    <svg viewBox="0 0 14 14" width={14} height={14} style={ICON} aria-hidden>
      <path d="M3 5.4L7 9.6l4-4.2" fill="none" stroke={INK3} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ROWS = [
  { nom: "AirPods Pro", montant: "249", statut: "Long" },
  { nom: "Écran 27 pouces", montant: "189.99", statut: "Short" },
  { nom: "Licence design", montant: "200", statut: "" },
];

function Row({ r, i }: { r: (typeof ROWS)[number]; i: number }) {
  const bg = i % 2 === 0 ? "transparent" : "rgba(37,37,38,0.4)";
  const select = r.statut;
  const chipBg =
    select === "Long" ? "rgba(76,175,80,0.2)" : select === "Short" ? "rgba(255,82,82,0.2)" : select ? SEL : "transparent";
  const chipTx =
    select === "Long" ? GREEN : select === "Short" ? RED : select ? INK : INK3;
  const cell: React.CSSProperties = {
    height: 44,
    borderRight: "0.5px solid " + BORDER,
    padding: "6px 8px",
    fontSize: 13,
    color: INK,
    display: "flex",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  return (
    <div style={{ display: "flex", height: 44, background: bg, borderBottom: "0.5px solid " + BORDER }}>
      <div style={{ ...cell, width: 160, justifyContent: "space-between" }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{r.nom}</span>
        <span style={{ ...ICON, display: "flex", alignItems: "center", marginRight: -2 }}>
          <PencilIcon color={ACCENT} />
        </span>
      </div>
      <div style={{ ...cell, width: 140 }}>
        <span style={{ color: INK2 }}>$</span>
        <span>{r.montant}</span>
      </div>
      <div style={{ ...cell, width: 140, justifyContent: "space-between", gap: 6 }}>
        <span
          style={{
            background: chipBg,
            color: chipTx,
            borderRadius: 4,
            padding: select ? "2px 6px" : 0,
            fontSize: 12,
            fontWeight: select ? 500 : 400,
          }}
        >
          {select || "Choisir…"}
        </span>
        <DropIcon />
      </div>
      <div style={{ ...cell, width: 52, justifyContent: "center", padding: 0 }}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default function Mockup() {
  const visibleValue = "638.99";
  return (
    <div
      aria-label="Aperçu fidèle de l'application Android Mydata"
      style={{ maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}
    >
      {/* Cadre téléphone */}
      <div
        style={{
          borderRadius: 30,
          border: "7px solid #101010",
          outline: "1px solid #2D2D2D",
          overflow: "hidden",
          background: BG,
        }}
      >
        {/* Barre système Android */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 14px",
            color: INK2,
            fontSize: 11,
          }}
        >
          <span>16:12</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <svg width={11} height={11} viewBox="0 0 12 12" aria-hidden>
              <path d="M1.5 9.5L6 5l4.5 4.5M3 11L6 8l3 3" fill="none" stroke={INK2} strokeWidth={1} />
            </svg>
            <svg width={11} height={11} viewBox="0 0 12 12" aria-hidden>
              <rect x="1" y="3.2" width="8.6" height="5.6" rx="1.2" fill="none" stroke={INK2} strokeWidth={1} />
              <rect x="2" y="4.2" width="5.4" height="3.6" fill={INK2} />
              <rect x="10.2" y="4.8" width="1" height="2.4" rx="0.4" fill={INK2} />
            </svg>
          </span>
        </div>

        {/* Barre supérieure de l'app (Shell.kt : 20dp burger, titre 15sp Medium, CloudSync accent) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 14px",
            borderBottom: "1px solid " + BORDER,
            background: PANEL,
          }}
        >
          <MenuIcon />
          <span style={{ fontSize: 15, fontWeight: 500, color: INK, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Database — mes-choses
          </span>
          <span style={{ marginLeft: "auto", display: "flex" }}><CloudSyncIcon color={ACCENT} /></span>
        </div>

        {/* Bandeau database (JournalPage.kt : pad 16/12, chip DB 24dp, nom 16sp/600) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            background: PANEL,
            borderBottom: "1px solid " + BORDER,
          }}
        >
          <span
            style={{
              width: 24, height: 24, borderRadius: 4, background: SEL, color: INK,
              fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            DB
          </span>
          <span style={{ marginLeft: 10, fontSize: 16, fontWeight: 600, color: INK }}>mes-choses</span>
          <span style={{ marginLeft: 6, display: "flex" }}><PencilIcon color={INK2} /></span>
          <span style={{ marginLeft: 4, fontSize: 12, color: INK3 }}>(3 lignes)</span>
          <span style={{ marginLeft: "auto", display: "flex" }}><TrashIcon size={18} /></span>
        </div>

        {/* Recherche (RoundedCornerShape 8, loupe 18, "Rechercher…" 13sp) */}
        <div style={{ padding: "8px 12px" }}>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              border: "1px solid " + BORDER, borderRadius: 8, padding: "9px 12px",
            }}
          >
            <SearchIcon />
            <span style={{ fontSize: 13, color: INK3 }}>Rechercher…</span>
          </div>
        </div>

        {/* Table (TableView.kt : surface bord 1dp r8, header 48dp, lignes 44dp alternées, footer 44dp) */}
        <div style={{ padding: 12 }}>
          <div style={{ border: "1px solid " + BORDER, borderRadius: 8, background: BG, overflow: "hidden" }}>
            {/* Zone horizontale des colonnes : 160+140+140+52 » largeur visible tronquée (scroll) */}
            <div style={{ overflow: "hidden" }}>
              <div style={{ width: 492 }}>
                {/* En-tête */}
                <div style={{ display: "flex", height: 48, background: PANEL, borderBottom: "1px solid " + BORDER }}>
                  <div style={{ width: 160, borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", gap: 5, padding: "0 6px" }}>
                    <StarIcon />
                    <span style={{ fontSize: 13, fontWeight: 700, color: INK }}>Nom</span>
                    <span style={{ marginLeft: "auto", background: "rgba(0,122,204,0.25)", color: ACCENT_LIGHT, fontSize: 9, fontWeight: 500, borderRadius: 3, padding: "2px 4px", whiteSpace: "nowrap" }}>Principal</span>
                  </div>
                  <div style={{ width: 140, borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", gap: 4, padding: "0 6px" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: INK, whiteSpace: "nowrap", overflow: "hidden" }}>Montant</span>
                    <span style={{ marginLeft: "auto", background: "rgba(9,71,113,0.4)", color: ACCENT_LIGHT, fontSize: 9, fontWeight: 500, borderRadius: 3, padding: "2px 4px" }}>num</span>
                    <KebabIcon />
                  </div>
                  <div style={{ width: 140, borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", gap: 4, padding: "0 6px" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: INK, whiteSpace: "nowrap", overflow: "hidden" }}>Statut</span>
                    <span style={{ marginLeft: "auto", background: "rgba(9,71,113,0.4)", color: ACCENT_LIGHT, fontSize: 9, fontWeight: 500, borderRadius: 3, padding: "2px 4px" }}>sel</span>
                    <KebabIcon />
                  </div>
                  <div style={{ width: 52, display: "flex", alignItems: "center", justifyContent: "center", color: INK3, fontSize: 11, fontWeight: 700 }}>
                    #
                  </div>
                </div>

                {/* Lignes 44dp */}
                {ROWS.map((r, i) => (
                  <Row key={r.nom} r={r} i={i} />
                ))}

                {/* Pied (footer 44dp Panel : chip calcul, Σ, badge "somme", —, nb lignes) */}
                <div style={{ display: "flex", height: 44, background: PANEL, borderTop: "1px solid " + BORDER }}>
                  <div style={{ width: 160, height: "100%", borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", padding: "0 8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, background: BG, border: "1px solid " + BORDER, borderRadius: 4, padding: "3px 6px" }}>
                      <CalcIcon />
                      <span style={{ fontSize: 10, fontWeight: 500, color: INK }}>Mode: Somme</span>
                    </span>
                  </div>
                  <div style={{ width: 140, height: "100%", borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT }}>Σ {visibleValue}</span>
                    <span style={{ background: "rgba(9,71,113,0.5)", color: ACCENT_LIGHT, fontSize: 9, borderRadius: 3, padding: "1px 3px" }}>somme</span>
                  </div>
                  <div style={{ width: 140, height: "100%", borderRight: "0.5px solid " + BORDER, display: "flex", alignItems: "center", padding: "0 8px" }}>
                    <span style={{ fontSize: 11, color: INK3 }}>—</span>
                  </div>
                  <div style={{ width: 52, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: INK3, fontSize: 11, fontWeight: 500 }}>
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de commandes : [Properté | + Ligne] */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            borderTop: "1px solid " + BORDER,
            background: BG,
          }}
        >
          <span
            style={{
              display: "flex", alignItems: "center", gap: 6,
              border: "1px solid " + BORDER, background: BG, color: INK,
              borderRadius: 6, padding: "9px 14px", fontSize: 13, fontWeight: 500,
            }}
          >
            <ColumnsIcon color={ACCENT} /> Propriété
          </span>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: ACCENT, color: INK, borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 500 }}>
            <AddIcon /> Ligne
          </span>
        </div>

        {/* Zone de navigation Android */}
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 8px" }}>
          <span style={{ width: 84, height: 4, borderRadius: 999, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-ink3">
        Mydata · rendu depuis le code de l'app
      </p>
    </div>
  );
}
