import Page from '../layouts/main'

export default () => (
  <Page>
    <div className="centered">
      <div className="indexLoginContainer">
        <div className="buttonFrame">
            <div>Login</div>
        </div>
      </div>
    </div>
    <style jsx>{`

    .buttonFrame{
      width: 200px;
      height: 50px;
      background-color:#908987;
      margin: 20px auto;
      padding-top:20px;
    }

    .centered {
      margin: 10vh;
    }

    .indexLoginContainer {
      min-height: 580px;
      width: 400px;
      background-color:#eee;
      padding-top:25px;
      margin: auto;
    }

    `}</style>
  </Page>
)