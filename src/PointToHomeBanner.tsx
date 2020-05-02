import React from 'react'

interface PointToHomeBannerProps {
  visible: boolean;
}

const PointToHomeBanner: React.FunctionComponent<PointToHomeBannerProps> =
  ({ visible }) => visible ?
    (
      <div id="banner">
        <p>Ahora haz clic en la zona del mapa donde esté tu casa.</p>
      </div>
    ) : null;

export default PointToHomeBanner;
