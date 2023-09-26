import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../redux/UserSlice'





const Dashboard = () => {
 const user=useSelector(selectUser);
 const email=user.user && user.user.email?user.user.email:'Guest';

    
  return (
    <div>
            <header>
        <h1>E-Restaurant  Dashboard</h1>
       
    </header>
  
    <aside class="sidebar">
        <nav>
            <ul>
                <br/><br/><br/><br/><br/>
                <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/desert">Deserts</Link></li>
                
            </ul>
        </nav>
    </aside>
   
        <div className='welcome'>
            <h1>Welcome {email} !</h1> 
        </div>
    <div class="container">
  <div class="side">
    <h1>Analytics Dashboard</h1>
    <ul class="links">
      <li><a href="#" class="selected" data-metric="visits">Visits</a></li>
      <li><a href="#" data-metric="pageviews">Pageviews</a></li>
      <li><a href="#" data-metric="conversions">Conversions</a></li>
    </ul>
    <div class="stats">
      <ul data-metric="visits">
        <li>
          <div class="key">Total Visits</div>
          <div class="val">356</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">50.9</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">+122.2%</div>
        </li>
      </ul>
      <ul data-metric="pageviews">
        <li>
          <div class="key">Total Pageviews</div>
          <div class="val">468</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">66.9</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">+16.7%</div>
        </li>
      </ul>
      <ul data-metric="conversions">
        <li>
          <div class="key">Total Conversions</div>
          <div class="val">456</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">65.1</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">-47.4%</div>
        </li>
      </ul>
    </div>
    <ul>
      <li>
        <div class="key">Range</div>
        <div class="val">7 days</div>
      </li>
      <li>
        <div class="key">Timezone</div>
        <div class="val">PDT</div>
      </li>
      <li>
        <div class="key">Spirit Animal</div>
        <div class="val">Duck</div>
      </li>
    </ul>
  </div>
  <div class="main">
    <ul>
      <li class="active">
        <article tabindex="0" data-metric="visits">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data visits">
              <dl>
                <dt>3/8</dt>
                <dd>36</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>44</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>52</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>32</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>44</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>68</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>80</dd>
              </dl>
            </div>
          </div>
          <h1>Orders</h1>
        </article>
      </li>
      <li>
        <article tabindex="0" data-metric="pageviews">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data pageviews">
              <dl>
                <dt>3/8</dt>
                <dd>72</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>56</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>64</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>48</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>64</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>80</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>84</dd>
              </dl>
            </div>
          </div>
          <h1>Pageviews</h1>
        </article>
      </li>
      <li>
        <article tabindex="0" data-metric="conversions">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data conversions">
              <dl>
                <dt>3/8</dt>
                <dd>76</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>88</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>72</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>68</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>52</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>60</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>40</dd>
              </dl>
            </div>
          </div>
          <h1>Conversions</h1>
        </article>
      </li>
    </ul>
  </div>
</div>


    <footer>
        <div class="footer">2023 E-Restaurant</div>
        <Link to="/privacy">
    
        <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      </div>
</Link>
        
    </footer>
        
    </div>
          
  )
}

export default Dashboard