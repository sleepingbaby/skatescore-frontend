import { useContext } from "react";
import { SupabaseContext } from "../providers/SupabaseProvider";

/**
 * A hook to access the Supabase Client inside of SupabaseProvider
 * -
 * Usage: inside component declare "const supabase = useSupabase()"
 */
const useSupabase = () => useContext(SupabaseContext);

export default useSupabase;
