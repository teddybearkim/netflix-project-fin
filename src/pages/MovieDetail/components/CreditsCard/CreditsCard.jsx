import React from 'react';
import './CreditsCard.style.css';
import { Card } from 'react-bootstrap';

const CreditsCard = ({ credits }) => {
  return (
    <Card>
      {credits.profile_path === null ? (
        <Card.Img
          variant='top'
          src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`}
          className='unknown-profile'
        />
      ) : (
        <Card.Img
          variant='top'
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face${credits?.profile_path}`}
        />
      )}
      <Card.Body>
        <Card.Title>{credits?.name}</Card.Title>
        <Card.Text style={{ fontSize: '0.9rem' }}>
          {credits?.character}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CreditsCard;