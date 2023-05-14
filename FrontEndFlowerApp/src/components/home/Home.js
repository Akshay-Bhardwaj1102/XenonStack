import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

export function Home(prop) {
  return (
    <div>

      <div className="d-flex justify-content-center homeimage">
        <img src="https://www.meltingflowers.com/blogs/wp-content/uploads/2020/01/cc-1.jpg"/>
      </div>

      <div className='container mb-4'>
        <h2 className="Venue"><i>Popular Venue</i></h2>

        <CardGroup>
          <div className='row'>
            <div className='col-4'>
              <Card style=
                {{ marginLeft: "10px" }}>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/141244/1658634961_IMG20211221152132.jpg?crop=40,59,1998,1124" />
                <Card.Body>
                  <Card.Title>MUMBAI</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>

            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/2552391/1637143272_File_013__1_.jpeg?crop=97,138,809,455" />
                <Card.Body>
                  <Card.Title>PUNE</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/252369/1667233951_IMG_5803.jpg?crop=251,130,1786,1004" />
                <Card.Body>
                  <Card.Title>KOLKATA</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>


        <h2 className="Venue"><i>Popular Search</i></h2>
        <CardGroup>
          <div className='row'>
            <div className='col-4'>

              <Card >
                <Card.Img variant="top" src="https://www.meltingflowers.com/blogs/wp-content/uploads/2020/08/r2.jpg" />
                <Card.Body>
                  <Card.Title>Mordern Decoration</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipMR9MvzeK1X4LrAWm7EChMvwyUMU2l3hyRLcT74" />
                <Card.Body>
                  <Card.Title>Royal Decoration</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/1062485/1602401533_image3385.jpg?crop=7,75,1522,856" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/decoration"> Simple Decoration</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>
      </div>
    </div >




  )
}

export default Home