import { createClient } from "@supabase/supabase-js";
import BlogPostPage from "./slug";

const supabase = createClient(
    process.env.DATABASE_URL ?? "",
    process.env.PUBLIC_ANON_KEY ?? ""
);

// ✅ recibe params
export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    let recommendations;
    const { data: blog } = await supabase
        .from("waichatt_blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (blog?.recommendations?.length) {
        const { data: blogs } = await supabase
            .from("waichatt_blogs")
            .select("*")
            .in("id", blog.recommendations)
            .eq("status", "published");

        recommendations = blogs || [];
    }


    return <BlogPostPage blog={blog} recommendedBlogs={recommendations || []} />;
}
