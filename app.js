// First, you need to import the Supabase client library in your HTML file:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// Define the Supabase URL and the public API key
const supabaseUrl = 'https://sztawijtwzfigmujqvti.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dGF3aWp0d3pmaWdtdWpxdnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTkwMDAsImV4cCI6MjA1MjYzNTAwMH0.zyPoxzOWDYPpRdJIrSP9PRkcKTVf2e__aJDtUGLif-8' // Replace with your actual public API key
const client = window.supabase.createClient(supabaseUrl, supabaseKey)

async function init() {
    console.log("supabase", client);
    const { data: messages, error } = await client.from('messages').select('*')
    if (error) {
        console.error('Error fetching messages:', error)
        return
    }

    console.log("data", messages);
}

// Call the init function after initialization
init()
