// // First, you need to import the Supabase client library in your HTML file:
// // <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// // Define the Supabase URL and the public API key
// const supabaseUrl = 'https://sztawijtwzfigmujqvti.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dGF3aWp0d3pmaWdtdWpxdnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTkwMDAsImV4cCI6MjA1MjYzNTAwMH0.zyPoxzOWDYPpRdJIrSP9PRkcKTVf2e__aJDtUGLif-8' // Replace with your actual public API key
// const client = window.supabase.createClient(supabaseUrl, supabaseKey)


// const messagesElement = document.querySelector('#messages')
// function addMessageToPage(message) {
//     // Add the message to the messages list
//     const element = document.createElement('li')
//     element.classList.add('card','m-2')
//     element.innerHTML = `
//                 <div class="card-body">
//                     <div class="row">
//                         <div class="col-sm-2 avatar-container">
//                             <img src="https://images.unsplash.com/photo-1613431812949-77b3351bb23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYWxsfGVufDB8fDB8fHww"
//                             class="mr-3 img-fluid" alt="..." style="width: 70px; height: 50px;">
//                             <p class="avatar-username">${message.username}</p>
//                         </div>
//                         <div class="col-sm-10">
//                             <p>${message.content}</p>
//                    </div>
//                     </div>
//                     <div class="row">
//                         <p class="col-sm-12 timestamp">${message.created_at}Today</p>
//                     </div>
//                 </div>
//            `;
//            messagesElement.append(element)
// }
// async function init() {
//     console.log("supabase", client);
//     const { data: messages, error } = await client.from('messages').select('*')
//     messages.forEach(addMessageToPage)

//     client.from('messages').on('INSERT', message => {
//         addMessageToPage(message.new)
//         console.log('Message received!', message);
//     }).subscribe()  
//     if (error) {
//         console.error('Error fetching messages:', error)
//         return
//     }

//     console.log("data", messages);
// }

// // Call the init function after initialization
// init()



































// // Define the Supabase URL and the public API key
// const supabaseUrl = 'https://sztawijtwzfigmujqvti.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dGF3aWp0d3pmaWdtdWpxdnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTkwMDAsImV4cCI6MjA1MjYzNTAwMH0.zyPoxzOWDYPpRdJIrSP9PRkcKTVf2e__aJDtUGLif-8'; // Replace with your actual public API key
// const client = supabase.createClient(supabaseUrl, supabaseKey); // Use Supabase's client directly

// const messagesElement = document.querySelector('#messages');

// function addMessageToPage(message) {
//     const element = document.createElement('li');
//     element.classList.add('card', 'm-2');
//     element.innerHTML = `
//                 <div class="card-body">
//                     <div class="row">
//                         <div class="col-sm-2 avatar-container">
//                             <img src="https://images.unsplash.com/photo-1613431812949-77b3351bb23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYWxsfGVufDB8fDB8fHww"
//                             class="mr-3 img-fluid" alt="..." style="width: 70px; height: 50px;">
//                             <p class="avatar-username">${message.username}</p>
//                         </div>
//                         <div class="col-sm-10">
//                             <p>${message.content}</p>
//                    </div>
//                     </div>
//                     <div class="row">
//                         <p class="col-sm-12 timestamp">${message.created_at} Today</p>
//                     </div>
//                 </div>
//            `;
//     messagesElement.append(element);
// }

// async function init() {
//     console.log("supabase",  client.channel('public:messages'));

    
//     const { data: messages, error } = await client.from('messages').select('*');
//     if (error) {
//         console.error('Error fetching messages:', error);
//         return;
//     }

//     messages.forEach(addMessageToPage);

//     // Subscribe to the 'messages' table in real-time
//     const channel = client.channel('public:messages');  // Create the real-time channel
//     channel.on('INSERT', { schema: 'public', table: 'messages' }, payload => {
//         console.log('Message received!', payload);
//         addMessageToPage(payload.new);  // Insert new message on the page
//         console.log('Message received!', payload);
//     }).subscribe();

//     console.log("data", messages);
// }

// // Call the init function after initialization
// init();




















































// Define the Supabase URL and the public API key
const supabaseUrl = 'https://sztawijtwzfigmujqvti.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dGF3aWp0d3pmaWdtdWpxdnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTkwMDAsImV4cCI6MjA1MjYzNTAwMH0.zyPoxzOWDYPpRdJIrSP9PRkcKTVf2e__aJDtUGLif-8'; // Replace with your actual public API key
const client = supabase.createClient(supabaseUrl, supabaseKey); // Use Supabase's client directly

const messagesElement = document.querySelector('#messages');

// Function to add message to the page
function addMessageToPage(message) {
    const element = document.createElement('li');
    element.classList.add('card', 'm-2');
    element.innerHTML = `
        <div class="card-body">
            <div class="row">
                <div class="col-sm-2 avatar-container">
                    <img src="https://images.unsplash.com/photo-1613431812949-77b3351bb23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYWxsfGVufDB8fDB8fHww"
                    class="mr-3 img-fluid" alt="..." style="width: 70px; height: 50px;">
                    <p class="avatar-username">${message.username}</p>
                </div>
                <div class="col-sm-10">
                    <p>${message.content}</p>
                </div>
            </div>
            <div class="row">
                <p class="col-sm-12 timestamp">${message.created_at} Today</p>
            </div>
        </div>
    `;
    messagesElement.append(element);
}

// Initialize function to fetch existing messages and subscribe to real-time changes
async function init() {
    console.log("supabase", client);

    // Fetch existing messages from the database
    const { data: messages, error } = await client.from('messages').select('*');
    if (error) {
        console.error('Error fetching messages:', error);
        return;
    }

    // Add all existing messages to the page
    messages.forEach(addMessageToPage);

   client.from('messages').on('INSERT', message => {
        addMessageToPage(message.new);
        console.log('Message received!', message);
    }).subscribe();

    console.log("data", messages);

}
// Call the init function after initialization
init();
