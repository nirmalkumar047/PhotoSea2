import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='flex p-10 justify-between mt-20'>
            <div>
                <h3>Contact Info</h3>
                <p>Email: nk4015@srmist.edu.in</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://github.com/nirmalkumar047" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://bento.me/nirmal-kumar-02" target="_blank" rel="noopener noreferrer">Bento</a></li>
                    <li><a href="https://www.instagram.com/nirmal_kumar__002/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div>
                <p>&copy; 2025 Photosea. All rights reserved.</p>
                <p>Nirmal Kumar</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer