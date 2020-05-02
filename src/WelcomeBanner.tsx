import React from 'react'

interface WelcomeBannerProps {
  onDone: () => void
}

const WelcomeBanner: React.FunctionComponent<WelcomeBannerProps> = ({ onDone }) => (
  <div id="alert">
    <div id="alert-base"></div>
    <div id="alert-notice">
    <p>Esta pequeña aplicación web te dirá por qué zonas puedes moverte.
       Señalas tu casa en el mapa, y te dibuja un circulo de radio 1 km
       para que sepas de qué zonas no puedes salir mientras dure el
       estado de alarma.
    </p>

    <p><strong>Esta aplicación no tiene validez legal, porque no tiene en cuenta
       posibles restricciones adicionales que ponga la ley. Recuerda seguir
       las indicaciones de las autoridades en todo momento.</strong>
    </p>

    <p><strong>Cómo funciona</strong>: usa el botón de Geolocalización para
      acercar el mapa a tu zona. Luego pulsa el botón "Ubicar mi casa"
      (chincheta) y toca tu calle o tu edificio para señalar que vives ahí.</p>

    <p><strong>IMPORTANTE</strong>: La ubicación nunca sale de tu navegador web.
       No se está recopilando nada. De hecho, he hecho esta aplicación tan rápido
       que por no tener, no tiene ni Analytics ni cookies ni nada de eso.</p>

    <p><strong>Por favor, pulsa Continuar sólo si has leído y entendido las normas.</strong></p>

    <p className="continue"><button onClick={onDone}>Continuar</button></p>

      <p><a href="https://github.com/danirod/por-donde-paseo" target="_blank">GitHub (issues, PRs, stars)</a> ·
        <a href="https://twitter.com/danirod93" target="_blank">Twitter</a></p>
  </div>
  </div>
)

export default WelcomeBanner
