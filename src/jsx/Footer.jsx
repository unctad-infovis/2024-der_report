import React, { /* useState,  useEffect, useRef */ } from 'react';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/OwrpyKlK1vw" title="Wold Investment Report" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <a href="https://youtu.be/dveoJFvh75c" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtu.be/Eyk2BGuykZ4" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtu.be/spfEEMhp0tE" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtu.be/Z0mLsHDSJ64" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://youtu.be/uddrYoU4M5s" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://youtu.be/ipE9N75Ucio" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://youtu.be/Y-RwTs9Sf0w" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/963048216" target="_blank" rel="noreferrer">English</a>
                  {/* {', '}
                  <a href="https://vimeo.com/842219331" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://vimeo.com/842219459" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://vimeo.com/842219226" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://vimeo.com/842219277" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://vimeo.com/842219430" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://vimeo.com/842219402" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://vimeo.com/842219366" target="_blank" rel="noreferrer">Kiswahili</a> */}
                </li>
              </ul>
              <h4>Watch the press conference</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/KArJUAIu_1U" title="Wold Investment Report Press Conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h4>Download the video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/963117885" target="_blank" rel="noreferrer">English</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=fd59m-1646ff2-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/world-investment-report-weaker-global-flows-show-much-work-ahead-more-inclusive-future">Weaker global flows show much work ahead for a more inclusive future</a></span>
              </div>
              {/* <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/not-fantastic-when-its-plastic-stemming-tide-ocean-rubbish">Not fantastic when it’s plastic</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/sea-trouble-turning-our-ships-green">Sea of trouble</a></span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
