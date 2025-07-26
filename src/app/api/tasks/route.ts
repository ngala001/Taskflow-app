import { NextResponse } from "next/server";
import { supabase } from "../utils/supabase-config";

export const GET = async() => {
    try {
        const { data, error } = await supabase.from('task-manager').select("*")
      
        if(error) throw error
      
        return NextResponse.json(data)
        
    } catch (error) {
       console.error(error) 
    }
}