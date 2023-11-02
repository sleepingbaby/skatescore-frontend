import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import SupabaseProvider from "./providers/SupabaseProvider";

import { createClient } from "@supabase/supabase-js";

// NOTE: Make sure to declare these in your .env file, can be found in the Supabase project home page
const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL ?? "",
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY ?? ""
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseProvider supabase={supabase}>
      <RouterProvider router={router} />
    </SupabaseProvider>
  </React.StrictMode>
);
