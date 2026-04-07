import { createRoot } from "react-dom/client";
import TailwindCSS from "./Tailwindcss";
import './tailwind.css';
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )