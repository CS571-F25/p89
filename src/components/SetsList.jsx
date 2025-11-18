import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function SetsList(props) {
  const sets = props.sets;

  return (
    <div className="justify-content-center"> 
      <Row className="g-3">
        {sets && sets.length > 0 && sets.map(set => {
          return (<Col key={set.id} xs={12} sm={6} md={4} xl={3}>
                <Link to={`/sets/${set.id}`} className="text-decoration-none">
                  <Card className="set-card shadow border-dark">
                    <div className="front">
                      <h2 className="set-title">{set.name}</h2>
                    </div>
                  </Card>
                </Link>
              </Col>)
        })}
      </Row>
    </div>
  )
}

export default SetsList;