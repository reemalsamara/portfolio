function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");
        window.location.href = "/";
    };

    return (
        <div className="page contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Contact Number" />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
