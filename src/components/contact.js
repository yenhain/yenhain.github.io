export default function Contact() {
  return (
    <section id="contact" style={{ minHeight: '100vh' }}>
      <div className="App-body">
        <h2>Contact</h2>
        <br />
        {/*<p>
          <strong>Email:</strong>
          <a href="mailto:yenhn30@gmail.com" >
            yenhn30@gmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/yen-nguyen-380745171/" target="_blank" >
            linkedin.com/in/yen-nguyen-380745171/
          </a>
        </p>*/}

        <h4> Have questions or want to chat about my work? <br/> 
          Feel free to reach out, I’d love to hear from you!</h4>
        <form
          action="mailto:yenhn30@gmail.com"
          method="post"
          encType="text/plain"
          className="contact-form"
        >
        
          <input type="text" id="name" placeholder="Name" name="name" required />
          <input type="email" id="email" placeholder="Email" name="email" required />
          <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>

          <button type="submit">Send</button>

        </form>
      </div>

    </section>
  );
}
