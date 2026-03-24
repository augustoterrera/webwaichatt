import BlogPage from "./blog"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

const supabase = createClient(process.env.DATABASE_URL ?? "", process.env.PUBLIC_ANON_KEY ?? "")

export default async function Page() {

    const { data: blogs } = await supabase
        .from("waichatt_blogs")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false })


    return (<BlogPage blogs={blogs || []}/>)
}