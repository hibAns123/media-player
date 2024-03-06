import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/home")
  }
  return (
    <>
      <hr />
      <div className='container mt-5'>
        <div className="header row aligh-items-center">
          <div className='col-lg-4 mt-3'>
            <h3>Welcom to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: "justify" }}> VideoLAN is publishing the 3.0.20 release of VLC, which is a medium update to VLC's 3.0 branch: it updates codecs, fixes a FLAC quality issue and improves playback of numerous formats including improved subtitles rendering. It also fixes a freeze when using frame-by-frame actions.</p>
            <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6"><img className='img-fluid' style={{ width: '400px' }} src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="image" /></div>
        </div>
        <div className="features">
          <h3 className=''>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">

              <Card >
                <Card.Img height={'300px'} variant="top" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://gifsoutloud.com/wp-content/uploads/2020/12/source.gif" />
                <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    make up the
                    bulk of the content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img height={'300px'} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Some  make up the
                    bulk content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded align-items-center">
          <div className="col-lg-6">
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>   Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum vel quidem architecto maxime, autem molestias sequi dolorum quis non vitae pariatur ullam obcaecati! Possimus asperiores sunt deleniti dolores ad.
            </p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Categorize Videos: </span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum vel quidem architecto maxime, autem molestias sequi dolorum quis non vitae pariatur ullam obcaecati! Possimus asperiores sunt deleniti dolores ad.
            </p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'> Watch History:</span>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum vel quidem architecto maxime, autem molestias sequi dolorum quis non vitae pariatur ullam obcaecati! Possimus asperiores sunt deleniti dolores ad.
            </p>
          </div>
          <div className="col-lg-6">
          <iframe width="688" height="387" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default LandingPage