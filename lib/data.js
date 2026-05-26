// Centralized content for Comage Container Lines Texas Inc.

export const company = {
  name: "Comage Container Lines Texas Inc.",
  shortName: "Comage Texas",
  tagline: "We bring the world to your business",
  subtagline: "Air and ocean cargo services at their finest.",
  domain: "comagetexas.com",
  email: "sales@shipcomage.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Clients & Benefits", href: "/clients" },
  { label: "Global Services", href: "/global-services" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About Our Company", href: "/about-us" },
      { label: "Accreditations", href: "/about-us/accreditations" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Picture Gallery", href: "/picturegallery" },
    ],
  },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact Us", href: "/contact-us" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resources", href: "/resources" },
      { label: "Trading Conditions", href: "/trading-conditions" },
    ],
  },
  { label: "Air Cargo Tracking", href: "/air-cargo-tracking" },
];

export const offices = [
  {
    country: "USA — Texas",
    flag: "US",
    lines: ["403 East Dallas Street", "Fresno, Texas 77545", "United States"],
    tel: "1.732.546.3758",
    fax: "1.866.647.7784",
    email: "sales@shipcomage.com",
    primary: true,
  },
  {
    country: "USA — New Jersey",
    flag: "US",
    lines: ["15 Mapleton Road", "Old Bridge, New Jersey 08857-4212", "United States"],
    tel: "1.732.546.3758",
    fax: "1.866.647.7784",
    email: "sales@shipcomage.com",
  },
  {
    country: "Canada",
    flag: "CA",
    lines: ["6655 Kitimat Rd. Suite 12", "Mississauga, ON L5N 6J4", "Canada"],
    tel: "1.905.286.4447",
    fax: "1.866.647.7784",
    email: "sales@shipcomage.com",
  },
  {
    country: "China",
    flag: "CN",
    lines: ["Regent Sunshine Building, Suite 12A10", "No.19 Wu Ning Road", "Shanghai 200042, China"],
    tel: "0086 21 62096609",
    fax: "0086 22 28136896",
    email: "sales@shipcomage.com",
  },
];

export const stats = [
  { value: "30+", label: "Years of global experience" },
  { value: "6", label: "International offices" },
  { value: "30–35%", label: "Average savings in time & cost" },
  { value: "100%", label: "Client satisfaction rating" },
];

export const services = [
  {
    slug: "air-freight",
    title: "Air Freight",
    short: "Priority air cargo for time-critical and specialized shipments worldwide.",
    icon: "Plane",
    image:
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Aircraft-on-ground (AOG) specialists",
        body: "On a priority basis, sourcing and delivering equipment or parts for aviation maintenance and repair, from any location to any airport, while aircraft is grounded.",
      },
      {
        name: "Oversized air cargo (OAG) specialists",
        body: "Providing technical support and provisions for large cargo to be shipped by air.",
      },
      {
        name: "Certified dangerous goods (DG) specialists",
        body: "Providing full support for securing and shipping dangerous goods by air.",
      },
      {
        name: "Temperature-controlled cargo (TCC) specialists",
        body: "Ensuring temperature-sensitive goods are secure and maintained during air shipment using special packaging or RKN.",
      },
    ],
  },
  {
    slug: "ocean-freight",
    title: "Ocean Freight",
    short: "Full-service ocean cargo, from a single pallet to oversized project loads.",
    icon: "Ship",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Less than container load (LCL)",
        body: "Consolidating smaller container loads for ocean shipment.",
      },
      {
        name: "Full container load (FCL)",
        body: "Complete port-to-port or door-to-door services for full shipboard containers.",
      },
      {
        name: "Oversized ocean cargo (OOG)",
        body: "Full support for large and irregular-sized containerized shipments using open top, flat racks and platforms.",
      },
      {
        name: "Project cargo specialists (PC)",
        body: "Transporting equipment and material for building, drilling and construction projects via break-bulk, RORO, flat racks, platforms, open top and standard containers.",
      },
      {
        name: "Temperature-controlled cargo (TCC)",
        body: "Ensuring temperature-sensitive goods are secure and ready for ocean shipment.",
      },
    ],
  },
  {
    slug: "cross-border",
    title: "Cross Border / Inland Trucking",
    short: "Cross-border inland truck transport between Canada, the US and Mexico.",
    icon: "Truck",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Full truckload freight shipping (FTL)",
        body: "An entire truckload is reserved for the transportation of your cargo.",
      },
      {
        name: "Less than truckload freight shipping (LTL)",
        body: "Transportation of small freight, or when freight doesn't require an entire trailer.",
      },
      {
        name: "Oversize Cargo / Heavy Haul",
        body: "Transportation of loads that exceed standard legal size and/or weight limits, including heavy machinery.",
      },
    ],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    short: "Import/export brokerage at any international airport or seaport.",
    icon: "FileCheck",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Import/Export Customs Clearance Services",
        body: "Providing advice and brokerage services for clearing goods through customs at any international airport or seaport.",
      },
    ],
  },
  {
    slug: "cargo-insurance",
    title: "Cargo Insurance",
    short: "Comprehensive marine and cargo insurance coverage for peace of mind.",
    icon: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Cargo Insurance",
        body: "Offering comprehensive cargo insurance coverage for all air and ocean shipments.",
      },
    ],
  },
  {
    slug: "packaging",
    title: "Packaging Services",
    short: "Specialized packaging for temperature-controlled and dangerous goods.",
    icon: "Package",
    image:
      "https://images.unsplash.com/photo-1606166325683-e6deb697d301?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Packaging Services",
        body: "Specialized services for transporting temperature-controlled cargo and dangerous goods by air or by ocean.",
      },
    ],
  },
  {
    slug: "storage",
    title: "Storage Services",
    short: "Bonded and non-bonded container storage facilities.",
    icon: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
    points: [
      {
        name: "Storage Services (Bonded and Non-bonded)",
        body: "Container storage services and facilities for less-than-container, full container, dangerous goods and temperature-controlled cargo.",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Comage Container Lines continues to do an outstanding job for us in its aircraft-on-ground (AOG) services. In spite of various challenges in certain countries, Comage has shown its exceptional capabilities in providing on-time deliveries of essential maintenance parts, equipment and supplies we need for servicing aircraft – at very competitive rates. You clearly understand our need to maintain an airline fleet in the air and reduce idle time on the ground.",
    name: "Mohammed Nazzal",
    role: "On-Site Manager, Customer Services — Commercial Aircraft",
    company: "Bombardier",
  },
  {
    quote:
      "Thank you for the opportunity to offer this testimonial on Comage services. I have never had a shipping company follow up with me to make sure transportation arrangements met or exceeded my expectations. You went above and beyond in responding to our shipping requirements.",
    name: "Sharon Carter",
    role: "Customer Service Manager",
    company: "Nurse Assist, Inc.",
  },
  {
    quote:
      "On behalf of Tapis Cosmos Carpets, I offer my sincere thanks to the representatives and agents of Comage Container Lines. Partnering with Comage has assured us of smooth, hassle-free international shipping transactions. When you think of shipping container professionals, you need not look any further than Comage.",
    name: "Ron Wasserlauf",
    role: "President",
    company: "Tapis Cosmos Carpets, Area Rug Div.",
  },
  {
    quote:
      "On behalf of Turbo4bio, I would like to express our complete satisfaction with Comage. Your team acts accurately and quickly, and at competitive prices. You also take on the challenge of any special demands and respond promptly. Based on our excellent experience with you, our company will be back with new requests and orders.",
    name: "J. Yves Verheyen",
    role: "General Management",
    company: "Turbo4bio / WasteWater Solutions",
  },
  {
    quote:
      "Conestoga Meat Packers have been working with Comage Container Lines for many years, exporting shipments overseas. We have found them to be a very customer service focused company, making what can feel like a challenging shipment move smoothly without delays. They offer a high quality service at a very competitive rate. In short, they are a great company to work with!",
    name: "David Thompson",
    role: "",
    company: "Conestoga Meat Packers",
  },
  {
    quote:
      "We appreciate your efficiency and expertise in smoothly moving our equipment to Mongolia. In the transportation industry, you never know what hurdles one may have to jump over to make it a seamless transaction. Comage made it happen and we are grateful for your attentive services.",
    name: "Laura Colby",
    role: "Logistics Administrator",
    company: "Komatsu America Corp.",
  },
];

export const clientLogos = [
  "Bombardier",
  "Komatsu",
  "Nurse Assist",
  "Conestoga Meat Packers",
  "Tapis Cosmos Carpets",
  "Turbo4bio",
];

export const industries = [
  "Automotive",
  "Aerospace & aviation",
  "Petroleum & by-products",
  "Consumer goods & appliances",
  "Apparel & footwear",
  "Industrial products & equipment",
  "Food & beverage (refrigerated)",
  "Building & construction material",
  "Heavy machinery & project cargo",
  "Forestry products",
  "High-tech equipment",
  "Pharmaceuticals & healthcare",
  "Dangerous goods & related products",
];

export const benefits = [
  "Simplified approach to shipping through our worldwide hubs",
  "Saving global clients between 30 and 35 per cent in both time and costs",
  "Rate quotations within 12 hours for air freight and 24 hours for ocean freight",
  "Customized solutions for worldwide cargo services",
  "Full range of integrated, multimodal logistics — shipping, cargo insurance, customs clearance, bills of lading and transportation",
  "Global volumes that allow Comage to negotiate the best rates possible",
];

export const accreditations = [
  { name: "IATA", full: "International Air Transport Association", url: "https://www.iata.org/" },
  { name: "FIATA", full: "International Federation of Freight Forwarders Associations", url: "https://fiata.org/" },
  { name: "FMC", full: "Federal Maritime Commission", url: "https://www.fmc.gov/" },
  { name: "Transport Canada", full: "Transport Canada", url: "https://tc.canada.ca/en" },
  { name: "NCBFAA", full: "National Customs Brokers & Forwarders Association of America", url: "https://www.ncbfaa.org/" },
  { name: "NJ Chamber", full: "New Jersey Chamber of Commerce", url: "https://www.njchamber.com/" },
  { name: "CIFFA", full: "Canadian International Freight Forwarders Association", url: "https://www.ciffa.com/" },
  { name: "AFBN", full: "African Freight Bridge Networks", url: "https://www.afbn-networks.com/" },
  { name: "AFN", full: "Active Freight Network", url: "https://www.activefreight.network/" },
  { name: "PIP", full: "Partners In Protection", url: "#" },
];

export const resourceLinks = [
  { label: "Seaports of the World", url: "http://www.worldportsource.com/countries.php" },
  { label: "Incoterms", url: "https://en.wikipedia.org/wiki/Incoterms" },
  { label: "Container Specifications", url: "http://www.foreign-trade.com/reference/ocean.cfm" },
  { label: "Measurement Conversion", url: "http://cargotracking.utopiax.org/convert2.html" },
  { label: "International Dialing Codes", url: "http://www.countrycallingcodes.com" },
  { label: "IATA Airport Abbreviations", url: "http://www.world-airport-codes.com" },
];

export const tradingConditions = [
  {
    slug: "comage-trade-conditions",
    title: "Comage Trade Conditions",
    summary:
      "The standard trading conditions under which Comage Container Lines Texas Inc. provides all services, defining the rights, obligations and liabilities of the company and its customers.",
  },
  {
    slug: "ciffa-trade-conditions",
    title: "CIFFA Trade Conditions",
    summary:
      "Standard Trading Conditions of the Canadian International Freight Forwarders Association, applicable to freight-forwarding services rendered.",
  },
  {
    slug: "warehouse-conditions",
    title: "Warehouse Conditions",
    summary:
      "Terms and conditions governing the storage and handling of goods within bonded and non-bonded warehousing facilities.",
  },
  {
    slug: "bill-of-lading-conditions",
    title: "Bill of Lading Conditions",
    summary:
      "Terms and conditions of carriage as set out on the reverse of the Comage bill of lading, governing the contract of carriage by sea and air.",
  },
];

export const airlines = [
  ["ABSA Cargo Airline", "M3 549", "https://www.absacargo.com.br/"],
  ["Aegean Airlines", "A3 390", "http://en.aegeanair.com/"],
  ["Aer Lingus Cargo", "EI 053", "http://www.aerlinguscargo.com/"],
  ["Aeroflot", "SU 507", "https://www.aeroflot.ru/"],
  ["Aerolineas Argentinas", "AR 044", "http://www.aerolineas.com.ar/"],
  ["Aeromexico Cargo", "AM 139", "http://www.aeromexicocargo.com/"],
  ["Air Canada", "AC 014", "https://www.aircanada.com/cargo"],
  ["Air China", "CA 999", "http://www.airchinacargo.com/"],
  ["Air France", "AF 057", "https://www.afklcargo.com/"],
  ["Air India", "AI 098", "http://www.airindia.com/"],
  ["Air New Zealand", "NZ 086", "https://www.airnewzealandcargo.com/"],
  ["Alaska Airlines", "AS 027", "https://www.alaskacargo.com/"],
  ["Alitalia", "AZ 055", "https://www.ita-airways.com/"],
  ["American Airlines", "AA 001", "https://www.aacargo.com/"],
  ["Amerijet International", "M6 810", "https://www.amerijet.com/"],
  ["ANA All Nippon Cargo", "NH 205", "https://www.anacargo.jp/"],
  ["Asiana Airlines", "OZ 988", "http://www.asianacargo.com/"],
  ["Atlas Air", "5Y 369", "http://www.atlasair.com/"],
  ["Avianca Cargo", "AV 134", "http://www.aviancacargo.com/"],
  ["British Airways", "BA 125", "https://www.iagcargo.com/"],
  ["Brussels Airlines", "SN 082", "https://www.brusselsairlines.com/"],
  ["Cargojet Airways", "W8 489", "https://www.cargojet.com/"],
  ["Cargolux Airlines", "CV 172", "https://www.cargolux.com/"],
  ["Cathay Pacific Airways", "CX 160", "https://www.cathaypacificcargo.com/"],
  ["China Airlines", "CI 297", "https://cargo.china-airlines.com/"],
  ["China Cargo Airlines", "CK 112", "http://www.eal-ceair.com/"],
  ["China Eastern Airlines", "MU 781", "http://cargo2.ce-air.com/"],
  ["China Southern Airlines", "CZ 784", "https://www.csair.com/"],
  ["Delta Air Lines", "DL 006", "https://www.deltacargo.com/"],
  ["DHL Aviation", "ER 423", "https://aviationcargo.dhl.com/"],
  ["Emirates", "EK 176", "https://www.skycargo.com/"],
  ["Ethiopian Airlines", "ET 071", "https://www.ethiopiancargo.com/"],
  ["Etihad Airways", "EY 607", "https://www.etihadcargo.com/"],
  ["EVA Air", "BR 695", "https://www.brcargo.com/"],
  ["FedEx", "FX 023", "https://www.fedex.com/en-us/tracking.html"],
  ["Finnair", "AY 105", "https://cargo.finnair.com/"],
  ["Iberia", "IB 075", "https://www.iagcargo.com/"],
  ["Icelandair", "FI 108", "https://www.icelandaircargo.com/"],
  ["Japan Airlines", "JL 131", "https://www.jal.co.jp/en/jalcargo/"],
  ["KLM Cargo", "KL 074", "https://www.afklcargo.com/"],
  ["Korean Air", "KE 180", "https://cargo.koreanair.com/"],
  ["LATAM Cargo", "LA 045", "https://www.latamcargo.com/"],
  ["Lufthansa Cargo", "LH 020", "https://www.lufthansa-cargo.com/"],
  ["Qantas Freight", "QF 081", "https://www.qantas.com/freight/"],
  ["Qatar Airways", "QR 157", "https://www.qrcargo.com/"],
  ["Saudia Cargo", "SV 065", "https://www.saudiacargo.com/"],
  ["Singapore Airlines", "SQ 618", "https://www.siacargo.com/"],
  ["South African Airways", "SA 083", "https://www.flysaa.com/"],
  ["Swiss WorldCargo", "LX 724", "https://www.swissworldcargo.com/"],
  ["TAP Air Portugal", "TP 047", "https://www.tapcargo.pt/"],
  ["Thai Airways", "TG 217", "https://www.thaicargo.com/"],
  ["Turkish Cargo", "TK 235", "https://www.turkishcargo.com/"],
  ["United Cargo", "UA 016", "https://www.unitedcargo.com/"],
  ["UPS Air Cargo", "5X 406", "https://www.ups.com/track"],
  ["Virgin Atlantic Cargo", "VS 932", "https://www.virginatlanticcargo.com/"],
  ["WestJet Cargo", "WS 838", "https://www.westjetcargo.com/"],
];

export const gallery = [
  { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80", alt: "Container ship at sea", tall: true },
  { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80", alt: "Cargo truck on highway" },
  { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80", alt: "Port crane loading containers" },
  { src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1000&q=80", alt: "Cargo aircraft loading", tall: true },
  { src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1000&q=80", alt: "Stacked shipping containers" },
  { src: "https://images.unsplash.com/photo-1542228262-3d663b306a53?auto=format&fit=crop&w=1000&q=80", alt: "Aerial view of port terminal" },
  { src: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1000&q=80", alt: "Warehouse storage", tall: true },
  { src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1000&q=80", alt: "Container yard at dusk" },
  { src: "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?auto=format&fit=crop&w=1000&q=80", alt: "Cargo plane in flight" },
];
