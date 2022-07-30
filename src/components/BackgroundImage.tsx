import * as React from 'react';
import styled from 'styled-components';
import '../background.css';

const BackgroundImage = () => {
  return (
    <div>
      <section>
        <div>
          <h2>
            CSS Gradient Background-Image
          </h2>
        </div>
      </section>
      <section>
        <div>
          <div>docker</div>
          <div className='background-image'>main</div>
          <div>Github</div>
        </div>
        <div>
          <div>
            {/* add spans */}
            <code>
              <p>.background-image {'{'}</p>
              <p>padding: 12px;</p>
              <p>margin: 0;</p>
              <p>font-size: 24px;</p>
              <p>color: #fff;</p>
              <p>border-radius: 5px;</p>
              <p>background-image: </p>
              <div>
                <p>linear-gradient(180deg,</p>
                <p>#282828,</p>
                <p>#282828),</p>
              </div>
              <div>
                <p>linear-gradient(180deg,</p>
                <p>rgba(85,85,85,.3),</p>
                <p>rgba(43,43,43,.16));</p>
              </div>
              <p>box-shadow: 0 1px 3px 0 rgb(0 0 0 / 16%);</p>
              {'}'}
            </code>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BackgroundImage;