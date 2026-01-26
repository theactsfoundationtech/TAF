
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://uyetwlexqwabbxuttdrp.supabase.co';
const supabaseAnonKey = 'sb_publishable_2nK1C5S1bC_at_ROCTLnUQ_H1ZAtqLL';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
    console.log('Testing INSERT with anon key...');
    const { data, error } = await supabase
        .from('blog_posts')
        .insert([
            {
                title: 'Test Post',
                content: 'This is a test post to verify the connection.',
                image_url: 'https://images.unsplash.com/photo-1542240562-8e104928198f',
                social_link: 'https://instagram.com'
            }
        ]);

    if (error) {
        console.error('INSERT FAILED:', error.message);
        if (error.message.includes('row-level security')) {
            console.log('RESULT: RLS is blocking the insert. We need to add an INSERT policy.');
        }
    } else {
        console.log('INSERT SUCCESSFUL!');
    }
}
testInsert();
