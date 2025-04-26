import React from "react";

function Contact() {
  return (
    <section className="min-h-screen px-8 py-16 text-white bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-blue-400">Get in Touch</h2>
        
        <p className="mb-8 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Just fill out the form or drop me a message!
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Contact Information</h3>
            <p><strong>Email:</strong> ravindu@example.com</p>
            <p><strong>Phone:</strong> +94 71 234 5678</p>
            <p><strong>Location:</strong> Colombo, Sri Lanka</p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-xl text-blue-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-xl text-blue-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl text-blue-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-xl text-blue-400 hover:text-white"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full px-4 py-2 text-white rounded-lg outline-none bg-slate-800" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full px-4 py-2 text-white rounded-lg outline-none bg-slate-800" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 text-white rounded-lg outline-none bg-slate-800"></textarea>
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-400 text-[#081b29] rounded-lg font-semibold hover:bg-[#081b29] hover:text-blue-400 border border-blue-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
