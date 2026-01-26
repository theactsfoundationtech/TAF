
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://uyetwlexqwabbxuttdrp.supabase.co';
const supabaseAnonKey = 'sb_publishable_2nK1C5S1bC_at_ROCTLnUQ_H1ZAtqLL';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
    const { data, error } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error('Error fetching posts:', error);
        process.exit(1);
    }
    console.log('Posts in database:', data.length);
    if (data.length > 0) {
        console.log('Latest Post:', JSON.stringify(data[0], null, 2));
    }
}
check();
