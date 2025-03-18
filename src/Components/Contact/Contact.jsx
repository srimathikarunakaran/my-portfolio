import './Contact.css'

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-header">
          <h2 className='text-info'>Feel Free To Reach out!</h2>
        </div>
        <div className="contact-links">
          <div className="link-item">
            {/* <img src="email-icon.png" alt="Email Icon" /> */}
            <a href="mailto:karunakaransrimathi3@gmail.com" className='link'>Email</a>
          </div>
          {/* <div className="link-item">
            <img src="linkedin-icon.png" alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" className='link'>LinkedIn</a>
          </div> */}
          <div className="link-item">
            {/* <img src="github-icon.png" alt="GitHub Icon" /> */}
            <a href="https://github.com/srimathikarunakaran" className='link'>GitHub</a>
          </div>
        </div>
      </section>
    </>
  )
}