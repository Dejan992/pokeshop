import React, { Component } from 'react'

export class LandingPage extends Component {
  render() {
    return (
      // <div className="hero-body is-centered">
      //   <figure className="image is-2by1">
      //     <img src="/poke-balls.jpg" />
      //   </figure>

      //   <div className="container has-text-centered">
      //     <div className="column is-10 is-centered">
      //       <h1 className="title">
      //         Coming Soon ---- (╯°□°)╯︵◓
      //         </h1>
      //       <h2 className="subtitle">
      //         Here we can put some info about our latest pokemons
      //         </h2>
      //       <div className="box">
      //         <div className="field is-grouped">
      //           <p className="control is-expanded">
      //             <input className="input" type="text" placeholder="Enter your email" />
      //           </p>
      //           <p className="control">
      //             <a className="button is-info">
      //               Notify Me
      //                     </a>
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        <section className="hero is-info is-medium is-bold">

          <div >
            <div className="container">
              <figure className="image is-3by1">
                <img src="/poke-balls.jpg" />
              </figure>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="columns features">
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image has-text-centered">
                  <i className="fa fa-paw"></i>
                </div>
                <div className="card-content">
                  <div className="content">
                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://banner2.kisspng.com/20180319/yeq/kisspng-social-media-computer-icons-tulane-university-face-drawing-vector-twitter-5ab02d6b2d2322.1683580215214954031849.jpg" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                            The Poke Shop is just the best!!
                            I bought a pokemon last Monday and it's so dope! <strong>#thePokeShop #pokemon #YoLo</strong>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image has-text-centered">
                  <i className="fa fa-empire"></i>
                </div>
                <div className="card-content">
                  <div className="content">
                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://banner2.kisspng.com/20171216/213/facebook-logo-png-5a35528eaa4f08.7998622015134439826976.jpg" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                            The Poke Shop is just the best!!
                            I bought a pokemon last Monday and it's so dope! <strong>#thePokeShop #pokemon #YoLo</strong>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image has-text-centered">
                  <i className="fa fa-apple"></i>
                </div>
                <div className="card-content">
                  <div className="content">
                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://banner2.kisspng.com/20180813/ppv/kisspng-computer-icons-yelp-mike-s-at-the-crossroads-socia-yelp-social-network-icon-free-of-flat-gradient-so-5b720dd28623a9.5564940815342012985495.jpg" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                            The Poke Shop is just the best!!
                            I bought a pokemon last Monday and it's so dope! <strong>#thePokeShop #pokemon #YoLo</strong>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro column is-8 is-offset-2">
            <h2 className="title">Best place to get your Pokemons!</h2><br />
            <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
          </div>
          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Hello World</p>
                  <p className="subtitle">What is up?</p>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Foo</p>
                  <p className="subtitle">Bar</p>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Third column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-white">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Top box</p>
                    </article>
                    <article className="tile is-child notification is-white">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Bottom box</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-white">
                      <p className="title">Middle box</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3">
                        <img src="https://picsum.photos/640/480/?random" alt="Description" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent is-shady">
                  <article className="tile is-child notification is-white">
                    <p className="title">Wide column</p>
                    <p className="subtitle">Aligned with the right column</p>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <div className="content">
                    <p className="title">Tall column</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                              eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                      <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                              felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                              ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>


          </div>

        </section>
      </div>

    )
  }
}

export default LandingPage
