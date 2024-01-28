import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="footerB">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>

            <div className="footerA">
            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 1</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 2</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 3</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 4</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 5</p>
              </Link>
            </div>

            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 6</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 7</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 8</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 9</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 10</p>
              </Link>
            </div>

            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 11</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 12</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 13</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 14</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 15</p>
              </Link>
            </div>

            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 16</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 17</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 18</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 19</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 20</p>
              </Link>
            </div>

            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 21</p>
              </Link>
              <Link to="/Day1" >
                <p>DAY 22</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 23</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 24</p>
              </Link>
              <Link to="/Day2" >
                <p>DAY 25</p>
              </Link>
            </div>

            <div className="foot-sec">
              <Link to="/Day1" >
                <p>DAY 26</p>
              </Link>
              <Link to="/Day1" >
                <p>DAY 27</p>
              </Link>
              <Link to="/Day1" >
                <p>DAY 28</p>
              </Link>
              <Link to="/Day1" >
                <p>DAY 29</p>
              </Link>
              <Link to="/Day1" >
                <p>DAY 30</p>
              </Link>
            </div>
            </div>

            <hr className='divider'/>

            <div className="footerC">
              <Link to="/">
                <p>Github</p>
              </Link>
            </div>
        </div>
    </>
  )
}

export default Footer