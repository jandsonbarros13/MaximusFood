import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>MaximusFood</h1>
      <p>Tudo para o seu Paladar.</p>
    </div>
  </section>)
}

export default Banner