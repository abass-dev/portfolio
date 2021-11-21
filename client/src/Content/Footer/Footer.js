import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
    <div>
    <form action='#' method='post' className='text-white contact-me bg-transparent'>
    <h1>CONTACT</h1>
    <div className="contact-me-input mt-4">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" className="form-control text-white" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    
    <div className="contact-me-input my-4">
      <label for="exampleFormControlTextarea1" className="form-label">Message</label>
      <textarea className="form-control text-white" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className='contact-me-button btn btn-primary-outline'>Envoyer</button>
</form>

    <svg className="footer-wave" id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 430" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(5.465, 30.054, 35.159, 1)" offset="0%"></stop><stop stop-color="rgba(12.476, 39.102, 42.735, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: '1'}} fill="url(#sw-gradient-0)" d="M0,86L48,86C96,86,192,86,288,71.7C384,57,480,29,576,78.8C672,129,768,258,864,322.5C960,387,1056,387,1152,322.5C1248,258,1344,129,1440,86C1536,43,1632,86,1728,107.5C1824,129,1920,129,2016,114.7C2112,100,2208,72,2304,64.5C2400,57,2496,72,2592,71.7C2688,72,2784,57,2880,93.2C2976,129,3072,215,3168,265.2C3264,315,3360,330,3456,344C3552,358,3648,373,3744,351.2C3840,330,3936,272,4032,250.8C4128,229,4224,244,4320,272.3C4416,301,4512,344,4608,329.7C4704,315,4800,244,4896,229.3C4992,215,5088,258,5184,293.8C5280,330,5376,358,5472,329.7C5568,301,5664,215,5760,200.7C5856,186,5952,244,6048,243.7C6144,244,6240,186,6336,193.5C6432,201,6528,272,6624,286.7C6720,301,6816,258,6864,236.5L6912,215L6912,430L6864,430C6816,430,6720,430,6624,430C6528,430,6432,430,6336,430C6240,430,6144,430,6048,430C5952,430,5856,430,5760,430C5664,430,5568,430,5472,430C5376,430,5280,430,5184,430C5088,430,4992,430,4896,430C4800,430,4704,430,4608,430C4512,430,4416,430,4320,430C4224,430,4128,430,4032,430C3936,430,3840,430,3744,430C3648,430,3552,430,3456,430C3360,430,3264,430,3168,430C3072,430,2976,430,2880,430C2784,430,2688,430,2592,430C2496,430,2400,430,2304,430C2208,430,2112,430,2016,430C1920,430,1824,430,1728,430C1632,430,1536,430,1440,430C1344,430,1248,430,1152,430C1056,430,960,430,864,430C768,430,672,430,576,430C480,430,384,430,288,430C192,430,96,430,48,430L0,430Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(6.613, 37.704, 44.315, 1)" offset="0%"></stop><stop stop-color="rgba(2.746, 45.119, 49.589, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: "translate(0, 50px)", opacity: '0.9'}} fill="url(#sw-gradient-1)" d="M0,344L48,315.3C96,287,192,229,288,172C384,115,480,57,576,78.8C672,100,768,201,864,207.8C960,215,1056,129,1152,93.2C1248,57,1344,72,1440,114.7C1536,158,1632,229,1728,265.2C1824,301,1920,301,2016,286.7C2112,272,2208,244,2304,193.5C2400,143,2496,72,2592,100.3C2688,129,2784,258,2880,315.3C2976,373,3072,358,3168,301C3264,244,3360,143,3456,136.2C3552,129,3648,215,3744,243.7C3840,272,3936,244,4032,236.5C4128,229,4224,244,4320,215C4416,186,4512,115,4608,100.3C4704,86,4800,129,4896,172C4992,215,5088,258,5184,236.5C5280,215,5376,129,5472,121.8C5568,115,5664,186,5760,243.7C5856,301,5952,344,6048,358.3C6144,373,6240,358,6336,301C6432,244,6528,143,6624,93.2C6720,43,6816,43,6864,43L6912,43L6912,430L6864,430C6816,430,6720,430,6624,430C6528,430,6432,430,6336,430C6240,430,6144,430,6048,430C5952,430,5856,430,5760,430C5664,430,5568,430,5472,430C5376,430,5280,430,5184,430C5088,430,4992,430,4896,430C4800,430,4704,430,4608,430C4512,430,4416,430,4320,430C4224,430,4128,430,4032,430C3936,430,3840,430,3744,430C3648,430,3552,430,3456,430C3360,430,3264,430,3168,430C3072,430,2976,430,2880,430C2784,430,2688,430,2592,430C2496,430,2400,430,2304,430C2208,430,2112,430,2016,430C1920,430,1824,430,1728,430C1632,430,1536,430,1440,430C1344,430,1248,430,1152,430C1056,430,960,430,864,430C768,430,672,430,576,430C480,430,384,430,288,430C192,430,96,430,48,430L0,430Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 243, 231.479, 1)" offset="0%"></stop><stop stop-color="rgba(11, 255, 254.348, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: "translate(0, 100px)", opacity: '0.8'}} fill="url(#sw-gradient-2)" d="M0,0L48,7.2C96,14,192,29,288,28.7C384,29,480,14,576,71.7C672,129,768,258,864,301C960,344,1056,301,1152,236.5C1248,172,1344,86,1440,93.2C1536,100,1632,201,1728,207.8C1824,215,1920,129,2016,136.2C2112,143,2208,244,2304,243.7C2400,244,2496,143,2592,93.2C2688,43,2784,43,2880,100.3C2976,158,3072,272,3168,272.3C3264,272,3360,158,3456,107.5C3552,57,3648,72,3744,121.8C3840,172,3936,258,4032,293.8C4128,330,4224,315,4320,265.2C4416,215,4512,129,4608,129C4704,129,4800,215,4896,215C4992,215,5088,129,5184,136.2C5280,143,5376,244,5472,272.3C5568,301,5664,258,5760,250.8C5856,244,5952,272,6048,236.5C6144,201,6240,100,6336,107.5C6432,115,6528,229,6624,265.2C6720,301,6816,258,6864,236.5L6912,215L6912,430L6864,430C6816,430,6720,430,6624,430C6528,430,6432,430,6336,430C6240,430,6144,430,6048,430C5952,430,5856,430,5760,430C5664,430,5568,430,5472,430C5376,430,5280,430,5184,430C5088,430,4992,430,4896,430C4800,430,4704,430,4608,430C4512,430,4416,430,4320,430C4224,430,4128,430,4032,430C3936,430,3840,430,3744,430C3648,430,3552,430,3456,430C3360,430,3264,430,3168,430C3072,430,2976,430,2880,430C2784,430,2688,430,2592,430C2496,430,2400,430,2304,430C2208,430,2112,430,2016,430C1920,430,1824,430,1728,430C1632,430,1536,430,1440,430C1344,430,1248,430,1152,430C1056,430,960,430,864,430C768,430,672,430,576,430C480,430,384,430,288,430C192,430,96,430,48,430L0,430Z"></path></svg>
</div>
);
}