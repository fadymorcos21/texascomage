import {
  Plane,
  Ship,
  Truck,
  FileCheck,
  ShieldCheck,
  Package,
  Warehouse,
  Box,
} from "lucide-react";

const map = { Plane, Ship, Truck, FileCheck, ShieldCheck, Package, Warehouse };

export default function ServiceIcon({ name, className = "h-6 w-6" }) {
  const Cmp = map[name] || Box;
  return <Cmp className={className} />;
}
