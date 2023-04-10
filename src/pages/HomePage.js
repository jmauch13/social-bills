import { Container, Row, Col } from 'reactstrap';

const HomePage = () => {
    return (
        <div className="background">
            <h1 className="app-title">Social Bills</h1>
            <p className="home-text">~ a community of helpers</p>
        <Container className='bill-container'>
            <Row>
                <Col>
                    <div style={{width:'100%',height:'0',paddingBottom:'54%',position:'relative'}}><iframe src="https://giphy.com/embed/3oEjHLUI9nBwbzMyf6"  
                    style={{position:'absolute', width:"95%", height:"95%", marginLeft:"2%", paddingTop: "75px", marginRight:"auto", frameBorder:"0"}}className="giphy-embed" allowFullScreen></iframe></div><p><a className="gif" href="https://giphy.com/gifs/redfang-relapse-records-red-fang-3oEjHLUI9nBwbzMyf6">via GIPHY</a></p>
                </Col>
                <Col className='bill-text'>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Look Familiar?</span><br />
                        Social Bills can help!  Join our community and get help paying bills when you need it the most. <br />
                        Need to pay a bill before payday? <br />
                        Have an extra bill that you can't afford? <br />
                        Rent due but just don't have enough to cover it? <br />
                        Worried about your credit score going down from missing a bill? <br />
                        Social Bills makes it possible to get your bills funded when you're short on cash.
                        Simply post your bill and get it funded, and when you have extra cash, help someone else!
                    </p>
                </Col>
            </Row>
        </Container>

        <Container className='link-btns'>
            <Row>
                <a href="/signup"><button className='btn1'>Signup</button></a>
            </Row>
            <Row>
                <a href="/learn"><button className='btn2'>Learn More</button></a>
            </Row>
        </Container>
        
        </div>
    );
};

export default HomePage;