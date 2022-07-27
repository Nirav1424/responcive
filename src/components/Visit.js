import React from 'react'

function Visit() {
    const fac = {
        color: "#3b5998",
    }
    const google = {
        color: '#dd4b39',
    }
    const insta = {
        color: '#ac2bac',
    }
    const twit = {
        color: '#55acee',
    }
    return (
        <div>
            <div className="container mx-auto " >
                <div className="row">
                    <div className="col-11 col-md-6 col-xl-6 justify-content-center text-center m-auto " data-aos="fade-up-left">
                        <div className="row">
                           <div className='container pb-4'>
                         <div className='row'>
                         <a className='text-decoration-none text-primary' href=" https://nirav1424.github.io/dinner/">
                                Dinner
                            </a>
                            <a className='text-decoration-none' href="https://nirav1424.github.io/toc-toy/">
                                Tic-toy
                            </a>
                            {/* <a className='text-decoration-none' href=" https://nirav1424.github.io/login/">
                                Login
                            </a> */}

                            <a className='text-decoration-none' href=" https://nirav1424.github.io/weather/">
                                Weather

                            </a>
                            <a className='text-decoration-none target-blank' href=" https://nirav1424.github.io/website/">
                                Car Website

                            </a>
                         </div>
                           </div>
                        </div>

                        <div className="container m-auto justify-content-start ">

                            <a style={fac} href="#!" role="button ">
                                <i className="fab fa-facebook-f fa-lg px-2"></i></a>

                            <a style={twit} href="#!" role="button">
                                <i className="fab fa-twitter fa-lg px-2"></i></a>

                            <a style={google} href="#!" role="button">
                                <i className="fab fa-google fa-lg px-2"></i></a>

                            <a style={insta} href="#!" role="button">
                                <i className="fab fa-instagram fa-lg px-2"></i></a>

                        </div>

                    </div>

                    <div className="col-10 col-md-6 pl-4" data-aos="fade-up-right">
                        <div className="container  text-center mx-auto mt-4">
                            <img src="data:image/jpeg;base64,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" className='image' alt="nirav" />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Visit;