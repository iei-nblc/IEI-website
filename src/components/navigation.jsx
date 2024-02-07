import React from 'react';

function Navigation() {
  return (
    <nav className="container">
      {
                <ul>
                    <li><a href="#">Home</a></li>
                    <li class="dropdown">
                        <a href="#">About Us &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">History</a>
                            <a href="#">Mission & Vision</a>
                            <a href="#">Leadership</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Activities &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Upcoming Events</a>
                            <a href="#">Past Events</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Academics &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Upcoming Events</a>
                            <a href="#">Past Events</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Membership &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Benefits</a>
                            <a href="#">Join Now</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Facilities &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Benefits</a>
                            <a href="#">Join Now</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Galary &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Benefits</a>
                            <a href="#">Join Now</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Downloads and Links &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">Benefits</a>
                            <a href="#">Join Now</a>
                        </div>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
          }
    </nav>
  );
}

export default Navigation;