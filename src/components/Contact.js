import './componentStyles.css';

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting your info: ')
} 

const Contact = () => {
    return (
        <div id='contact'>
            <form onSubmit={handleSubmit}>
                Name <input
                    label='Name' type = 'text' id = 'name' placeholder= 'Enter your name'
                />
                E-mail <input
                    label='E-mail' type='text' id='email' placeholder='Enter your E-mail'
                />
                Description <input
                    label='Description' type='text' id='description' placeholder='Start describing here..'
                />
                <button type='button'> submit </button>
            </form>
        </div>
    )
}

export default Contact;