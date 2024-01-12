import Image from 'next/image'

export default function Header() {
    return (
    <div className="d-flex justify-content-center align-items-center" style={{padding: "10vh"}}>
        <Image width="100" height="100" src="/wizard_logo.png"
          className="d-flex"
          style={{maxHeight: "100px", maxWidth: "100px"}}
          alt="Logo"/>
        <h1 className="display-6 d-flex align-self-center" style={{marginBottom: 0, marginTop: 30}}>Video Wizard</h1>
    </div>);
}