import Page from '../layouts/main'

export default () => (
  <Page>
    <div className="centered">
      <p>Home page with global styles!</p>
    </div>
    <style jsx>{`

    .centered {
      position: fixed;
      top: 50%;
      left: 50%;
      /* bring your own prefixes */
      transform: translate(-50%, -50%);
    }

    `}</style>
  </Page>
)