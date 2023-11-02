import React, { createContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

export const SupabaseContext = createContext<SupabaseClient | null>(null);

/**
 * A context for Supabase that creates a Supabase client on initial app load
 */
const SupabaseProvider = ({
  supabase,
  children,
}: {
  supabase: SupabaseClient;
  children: React.ReactNode;
}) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export default SupabaseProvider;
