import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
     
      <div>
        <h3 className="font-semibold text-lg mb-4">Company</h3>
        <ul>
          <li><a href="#" clasName="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Careers</a></li>
          <li><a href="#" className="hover:text-gray-400">Newsroom</a></li>
          <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
        </ul>
      </div>


      <div>
        <h3 className="font-semibold text-lg mb-4">Help</h3>
        <ul>
          <li><a href="#" className="hover:text-gray-400">Support</a></li>
          <li><a href="#" className="hover:text-gray-400">Safety</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Legal</h3>
        <ul>
          <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f">&#128247;
</i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter">
</i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="text-center mt-8">
      <p className="text-sm text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer