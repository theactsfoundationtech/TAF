
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://uyetwlexqwabbxuttdrp.supabase.co';
const supabaseAnonKey = 'sb_publishable_2nK1C5S1bC_at_ROCTLnUQ_H1ZAtqLL';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
    console.log('Testing INSERT after RLS fix...');
    const { data, error } = await supabase
        .from('blog_posts')
        .insert([
            {
                title: 'Manual Verification Post',
                content: 'This post confirms that the database is now open for automation.',
                image_url: 'https://images.unsplash.com/photo-1542240562-8e104928198f',
                social_link: 'https://instagram.com'
            }
        ]);

    if (error) {
        console.error('INSERT FAILED:', error.message);
    } else {
        console.log('INSERT SUCCESSFUL! The database is now working.');
    }
}
testInsert();
