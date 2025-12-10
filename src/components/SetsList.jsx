import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import deleteIcon from '../assets/x.png';

function SetsList(props) {
  const sets = props.sets;
  let route = props.route;
  if(!route) {
    route = "sets";
  }

  function deleteSet(id) {
    const updatedSets = sets.filter(set => set.id !== id);
    localStorage.setItem("sets", JSON.stringify(updatedSets));
    props.setSets(updatedSets);
    alert("Set deleted!");
  }

  return (
    <div className="justify-content-center"> 
      <Row className="g-3">
        {sets && sets.length > 0 && sets.map(set => {
          return (<Col key={set.id} xs={12} sm={6} md={4} xl={3}>
                <Link to={`/${route}/${set.id}`} className="text-decoration-none">
                  <Card className="set-card shadow border-dark">
                    <div className="front">
                      <h2 className="set-title">{set.name}</h2>
                      {route === "sets" ? <button className="delete-button" onClick={(e) => {
                          e.preventDefault();
                          deleteSet(set.id);
                        }}>
                        <img src={deleteIcon} alt="Delete set"></img>
                      </button> : null}
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